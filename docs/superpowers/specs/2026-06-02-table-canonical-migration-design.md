# Table Subsystem: Migrate to Canonical Covered-Cell Convention — Design

**Date:** 2026-06-02
**Status:** Approved (design phase)
**Author:** David Tan + Claude

## Goal

Migrate the DOCX importer's table merged-cell representation from the fork-local
`vMergeContinue` convention to Univer's **canonical covered-cell convention**
(`rowSpan: 0, columnSpan: 0`), adopt upstream's table layout + renderer
verbatim, remove the `vMergeContinue` extension from core, and thereby eliminate
recurring table conflicts on every future upstream sync.

## Background / Why

Today the fork represents merged table cells in two non-canonical ways:

- **Vertical merge (vMerge):** continuation cells carry a fork-added
  `vMergeContinue: 1` flag (a core `ITableCell` extension we introduced).
- **Horizontal merge (gridSpan):** a single cell with `columnSpan: N` and **no**
  covered cells for the spanned-over columns.

Univer's native model — used by sheets merges, and concretely by the docs
HTML-paste converter
([`html-to-udm/converter.ts`](../../../packages/docs-ui/src/services/clipboard/html-to-udm/converter.ts))
— uses a **fully-expanded grid**: every (row, column) position has both a
`tableCells[]` entry **and** a dataStream cell-block. Covered cells are
`{ ...emptyCell, rowSpan: 0, columnSpan: 0 }`; the master cell carries the full
`rowSpan: N, columnSpan: M`.

Because our convention diverges, we had to keep our own `table.ts` layout and
`document.ts` table-cell renderer (coupled to our importer). Upstream's table
code is more capable (per-border width, neighbour-aware border de-duplication,
transparent-border skip) and is the one that receives ongoing upstream work.
Staying divergent means: (a) every upstream sync re-conflicts the table files,
(b) we carry a core-level fork extension upstream doesn't know about, and (c) our
imported tables won't interoperate with upstream table commands / clipboard /
collaboration that assume the canonical convention.

This migration moves us onto the canonical convention so we can delete our fork
table code and consume upstream's.

## Non-Goals

- **Do NOT port our O(n) grid algorithm into upstream's `table.ts`.** Upstream's
  `table.ts` stays pristine (it uses an O(n²) `findMergedMasterCell` scan, which
  is fine for realistic tables). Keeping it untouched is the entire point —
  future upstream table syncs become zero-conflict.
- No new table *features* (floating tables, nested-table positioning, conditional
  formatting). Scope is strictly the merged-cell representation migration.

## Architecture

### Data flow

```
OOXML <w:tbl>
  → parse-table.ts        faithful parse (sparse: gridSpan = one cell colSpan=N;
                          vMerge = restart + continue)
  → expandTableGrid()     pure projection → fully-expanded grid (master/covered)
  → assemble.ts           emit tableCells[] + dataStream blocks (one CELL pair
                          per grid position)
  → IDocumentData         canonical snapshot (every position has rowSpan/colSpan;
                          covered = 0/0)
  → upstream table.ts layout + document.ts renderer (verbatim)
```

The key design move (approach C): the O(n) `columnOwner`-stack grid projection we
wrote in engine-render's `table-grid.ts` is **moved to the importer** (where
import-time grid resolution belongs) and **deleted from engine-render** (so
upstream's `table.ts` is the only renderer). The algorithm is reused, not thrown
away — it just lives in the right layer now.

### New component

**`packages/docs-exchange/src/utils/parse/expand-table-grid.ts`** — pure
function:

```
expandTableGrid(parsed: ParsedTable): CanonicalCell[][]
```

Projects the sparse parsed table onto a complete rectangular grid. Each grid
position yields a `CanonicalCell` describing:

- `kind: 'master' | 'covered'`
- `rowSpan`, `columnSpan` (master: full span; covered: 0/0)
- `colStart` (grid column the position starts at)
- `master`: back-reference to the owning master cell (for border-perimeter
  computation)
- `source`: the originating `ParsedCell` for a master (undefined for synthesized
  covered cells)

No I/O, no layout-state dependency. Ported from `buildTableGrid`'s `columnOwner`
stack algorithm.

### Modified

- **`assemble.ts`** table-emission section
  ([`assemble.ts:438-520`](../../../packages/docs-exchange/src/utils/parse/assemble.ts)):
  consume `expandTableGrid` output. For each grid position emit:
  - `tableCells[]` entry: master → `rowSpan:N, columnSpan:M` + borders/shading;
    covered → `{ ...empty, rowSpan:0, columnSpan:0 }` (no border, no shading).
  - dataStream: emit one `TABLE_CELL_START … TABLE_CELL_END` block per grid
    position, driven **entirely by the expanded grid** (not by the OOXML cell
    list). Master cells emit their paragraph content; covered cells — both
    vMerge continuations and synthesized gridSpan fills — emit a single empty
    paragraph. Any content present in an OOXML vMerge-continuation `<w:tc>` is
    discarded: canonical covered cells are empty, which matches Word's rendering
    (continuation cells show nothing). This makes emission uniform — there is no
    "reuse the continuation block vs synthesize" branch.
  - Border-perimeter judgement uses the grid's master rectangle
    (`colStart`/`columnSpan`/`rowSpan`) instead of the ad-hoc `cellMeta`.

### Deleted

- `packages/engine-render/src/components/docs/layout/block/table-grid.ts` (whole
  file; logic moved to importer).
- Our `_drawTableCellBordersAndBg` (+ inline border drawing) in engine-render
  `document.ts` → replaced with upstream's version (per-border width,
  neighbour-aware de-dup, transparent skip, `setTableCellBorderDash`).
- `packages/engine-render/.../layout/block/table.ts` → replaced with upstream's
  version (`isCoveredTableCell` / `createMergedCoveredCellPage` model).
- `vMergeContinue` field from core `i-document-data.ts` `ITableCell`.
- `page.ts` gridSpan width logic → take upstream's if it differs (already
  effectively upstream after the last merge).

### Adopted verbatim from upstream

`table.ts` layout, `document.ts` table-cell rendering methods, and the
`_getTableCellSource` / `_resolveTableCellBorder` / `_isDrawableTableCellBorder`
/ `_drawTableCellBorder` / `setTableCellBorderDash` helpers.

## Canonical mapping

| OOXML | Today (fork) | After migration (canonical) |
|---|---|---|
| `<w:vMerge val=restart>` rowSpan=N | master, emit | master `rowSpan:N` |
| `<w:vMerge/>` continuation | cell with `vMergeContinue:1` | covered `rowSpan:0, columnSpan:0` |
| `<w:gridSpan val=N>` | single master `columnSpan:N`, **no** covered | master `columnSpan:N` + **synthesize (N−1)** covered `0/0` |
| gridSpan ∩ vMerge continuation | — | full covered span synthesized per row under the master |

## Index-coupling safety (the critical risk)

Synthesizing gridSpan covered cells **adds dataStream blocks inside the table**,
shifting the indices of everything after. Safety argument:

- `assemble` builds the stream **incrementally in order**; every index is
  computed from the live stream length. As long as covered blocks are emitted at
  the correct stream position during table assembly, downstream indices stay
  consistent **automatically** — no post-hoc offset recomputation needed.
- Comments (`customDecorations`, PR #28) and drawings positioned by final stream
  index remain correct because they are emitted **after** the table block and are
  based on live stream length.
- Cell-interior content: a merged cell's master keeps its content unchanged
  (covered cells are empty paragraphs carrying no range), so comment/drawing
  indices inside a master cell are unaffected.

This argument is **falsifiable via the fixture suite** (merged region containing
a comment; table followed by an image).

## Edge cases / error handling

- **Continuation with no owner** (malformed OOXML: `<w:vMerge/>` with no restart
  above): degrade to a normal master cell (`rowSpan:1`) rather than dropping it
  (preserves column alignment). Handled in `expandTableGrid` (mirrors existing
  defensive logic).
- **Short rows** (a row's `<w:tc>` count < grid width): pad with covered / empty
  master cells up to `columnCount` so every row is rectangular (canonical
  requires a rectangular grid).
- **Nested tables**: `expandTableGrid` handles one level; nested tables are cell
  content assembled recursively through the same path — supported naturally.
- **gridSpan column-width summation**: the master's `columnSpan:N` width is
  summed by upstream `page.ts` (`tableColumns.slice(col, col+N)`); covered cells
  provide the correct column-alignment index.
- **Border `nil`/`none`**: keep our `borderToUniver` (nil → omit). Covered cells
  emit no borders; the master's merged-rectangle outer edges are drawn by
  upstream's neighbour-aware renderer.
- **Empty / single-cell tables**: no merges → grid = as-is, zero covered cells,
  behaviour identical to today.

## Testing strategy

### Fixtures (Python generator + committed `.docx`, per the comments-fixture pattern)

`merged-cells-fixture.docx` with:
1. Pure gridSpan (2-column merge, unequal column widths)
2. Pure vMerge (3-row merge)
3. gridSpan + vMerge combined (2×2 block)
4. A comment anchored inside a merged region
5. A table immediately followed by a paragraph containing an image (verifies
   index shift)

### Unit tests

- `expand-table-grid.spec.ts`: pure-function assertions — each OOXML shape →
  correct master/covered grid (positions, spans, colStart, padding, malformed
  fallback).
- `assemble.test.ts` extension: assert emitted `tableCells[]` covered entries are
  `rowSpan:0, columnSpan:0`; dataStream cell-block count == grid-position count;
  comment/drawing indices correct.
- Remove/migrate existing `vMergeContinue` assertions.

### e2e (docx-import-e2e-verification skill)

Import `merged-cells-fixture.docx` + `demo.docx`; screenshot-verify merged cells
render correctly (no double-drawn borders, correct widths, no internal lines
across a merged region); console 0 errors.

### Regression

Full engine-render + docs-exchange vitest. Upstream's `document.spec.ts`
(966 lines, including the table neighbour-border tests) should now pass **green**
because we adopt upstream's renderer — this revives the 4 table tests skipped
during the last upstream merge and is a strong success signal.

## Success criteria

1. No `vMergeContinue` anywhere in the repo (core field removed; importer no
   longer emits it; engine-render no longer reads it).
2. `engine-render/.../block/table.ts` and the `document.ts` table-cell methods
   are byte-identical to upstream (verifiable via `git diff origin/upstream-dev`).
3. `table-grid.ts` deleted from engine-render; its algorithm lives in
   docs-exchange `expand-table-grid.ts`.
4. New fixture suite + unit tests green; upstream `document.spec.ts` green; e2e
   renders all merge shapes correctly with 0 console errors.
5. A subsequent `git merge origin/upstream-dev` produces **no conflicts** in the
   table files.
