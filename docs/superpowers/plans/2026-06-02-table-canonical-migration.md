# Table Canonical Covered-Cell Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the DOCX importer's table merged-cell representation to Univer's canonical covered-cell convention (`rowSpan:0/columnSpan:0`), adopt upstream's table layout + renderer verbatim, and remove the `vMergeContinue` fork extension from core.

**Architecture:** A new pure importer helper `expandTableGrid` projects the sparse parsed table onto a fully-expanded grid (every position = master or covered cell). The two table-emission loops in `assemble.ts` (dataStream + `tableSource`) drive off this grid, emitting one cell-block per grid position and `{rowSpan:0,columnSpan:0}` for covered cells. Engine-render's fork table code (`table-grid.ts`, the `document.ts` table-cell methods, our `table.ts`) is deleted/replaced with upstream's.

**Tech Stack:** TypeScript, vitest, pnpm workspaces, Python (fixture generator), Playwright MCP (e2e).

**Spec:** `docs/superpowers/specs/2026-06-02-table-canonical-migration-design.md`

**Branch:** `feat/table-canonical-migration` (already created off `dev`).

---

## Ordering note (read before starting)

The importer and the renderer must flip convention together. The build stays
green **per-package** between tasks (unit suites are isolated), but the
**end-to-end** importer→renderer path (and browser e2e) is only expected green
after **Task 3** (upstream renderer adopted). Do not run e2e between Task 2 and
Task 3 and expect passing tables — that intermediate state is knowingly broken.

File responsibilities after this plan:

- `packages/docs-exchange/src/utils/parse/expand-table-grid.ts` (NEW) — pure grid projection.
- `packages/docs-exchange/src/utils/parse/assemble.ts` (MODIFY) — emit canonical from the grid.
- `packages/core/src/types/interfaces/i-document-data.ts` (MODIFY) — drop `vMergeContinue`.
- `packages/engine-render/.../layout/block/table.ts` (REPLACE with upstream).
- `packages/engine-render/.../components/docs/document.ts` (REPLACE table-cell methods with upstream).
- `packages/engine-render/.../layout/block/table-grid.ts` (DELETE).
- `scripts/merged-cells-fixture/generate-merged-cells-fixture.py` (NEW) + committed `.docx`.

---

## Task 1: Pure grid-projection helper `expandTableGrid`

Port the O(n) `columnOwner`-stack algorithm from engine-render's `table-grid.ts`
into a pure docs-exchange importer helper that outputs a fully-expanded grid.

**Files:**
- Create: `packages/docs-exchange/src/utils/parse/expand-table-grid.ts`
- Test: `packages/docs-exchange/src/__tests__/expand-table-grid.spec.ts`

Reference types (already in `packages/docs-exchange/src/utils/parse/types.ts`):
`ParsedTable.rows: ParsedCell[][]`; `ParsedCell` has `columnSpan?`, `rowSpan?`,
`vMerge?: 'restart'|'continue'`, plus `paragraphs`, `borders`, `shadingFill`,
`vAlign`, `margin`, `preferredWidthPx`.

- [ ] **Step 1: Write the failing test**

```typescript
// packages/docs-exchange/src/__tests__/expand-table-grid.spec.ts
import type { ParsedCell, ParsedTable } from '../utils/parse/types';
import { describe, expect, it } from 'vitest';
import { expandTableGrid } from '../utils/parse/expand-table-grid';

// Minimal cell builder; only fields the grid reads matter here.
function cell(overrides: Partial<ParsedCell> = {}): ParsedCell {
    return { paragraphs: [], ...overrides };
}
function table(rows: ParsedCell[][]): ParsedTable {
    return { rows };
}

describe('expandTableGrid', () => {
    it('passes a plain 2x2 table through unchanged (all masters)', () => {
        const grid = expandTableGrid(table([
            [cell(), cell()],
            [cell(), cell()],
        ]));
        expect(grid.length).toBe(2);
        expect(grid[0].length).toBe(2);
        for (const row of grid) for (const c of row) expect(c.kind).toBe('master');
        expect(grid[0][1].colStart).toBe(1);
    });

    it('expands gridSpan into a master + synthesized covered cells', () => {
        // Row: [A(colSpan2), B] -> grid columns: A@0 span2, covered@1, B@2
        const grid = expandTableGrid(table([
            [cell({ columnSpan: 2 }), cell()],
            [cell(), cell(), cell()],
        ]));
        expect(grid[0].map((c) => c.kind)).toEqual(['master', 'covered', 'master']);
        expect(grid[0][0].columnSpan).toBe(2);
        expect(grid[0][1]).toMatchObject({ kind: 'covered', colStart: 1 });
        expect(grid[0][2]).toMatchObject({ kind: 'master', colStart: 2 });
        // covered cell points back at its master
        expect(grid[0][1].master).toBe(grid[0][0]);
    });

    it('marks vMerge continuation cells as covered, pointing at the restart master', () => {
        const grid = expandTableGrid(table([
            [cell({ rowSpan: 2 }), cell()],
            [cell({ vMerge: 'continue' }), cell()],
        ]));
        expect(grid[0][0]).toMatchObject({ kind: 'master', rowSpan: 2 });
        expect(grid[1][0]).toMatchObject({ kind: 'covered', colStart: 0 });
        expect(grid[1][0].master).toBe(grid[0][0]);
    });

    it('pads short rows up to the grid width with covered cells', () => {
        const grid = expandTableGrid(table([
            [cell(), cell(), cell()],
            [cell(), cell()], // short row
        ]));
        expect(grid[1].length).toBe(3);
        expect(grid[1][2].kind).toBe('covered');
    });

    it('falls back to a master when a continuation has no owner above', () => {
        const grid = expandTableGrid(table([
            [cell({ vMerge: 'continue' }), cell()],
        ]));
        expect(grid[0][0].kind).toBe('master');
        expect(grid[0][0].rowSpan).toBe(1);
    });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @univerjs/docs-exchange exec vitest run src/__tests__/expand-table-grid.spec.ts`
Expected: FAIL with "Cannot find module '../utils/parse/expand-table-grid'".

- [ ] **Step 3: Write the implementation**

```typescript
// packages/docs-exchange/src/utils/parse/expand-table-grid.ts
/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ParsedCell, ParsedTable } from './types';

/**
 * One position in the fully-expanded canonical table grid. A merged region is
 * one `master` cell (carrying the full rowSpan/columnSpan) plus one `covered`
 * cell at every other position it spans. This mirrors Univer's native model
 * (see docs-ui html-to-udm converter: covered = `{rowSpan:0,columnSpan:0}`).
 */
export interface CanonicalCell {
    kind: 'master' | 'covered';
    /** Grid column this position starts at. */
    colStart: number;
    /** Full column span (master ≥ 1; covered is 1 — it occupies a single grid column). */
    columnSpan: number;
    /** Full row span (master ≥ 1; covered is 1). */
    rowSpan: number;
    /** The originating parsed cell for a master; undefined for synthesized covered cells. */
    source?: ParsedCell;
    /** Back-reference to the master that owns this position (self for masters). */
    master: CanonicalCell;
}

function isContinuation(cell: ParsedCell): boolean {
    return cell.vMerge === 'continue';
}

/**
 * Projects a sparse parsed table (OOXML form: gridSpan = one cell with
 * columnSpan=N and no covered cells; vMerge = restart + continuation cells)
 * onto a rectangular, fully-expanded grid where every (row, column) position
 * is either a `master` or a `covered` cell.
 *
 * Algorithm (O(cells)): keep a `columnOwner[]` stack — the master currently
 * spanning each grid column. A real cell claims ownership of its full column
 * span; a continuation cell inherits the owner directly above. After laying
 * out a row's real + continuation cells, pad the row up to the running grid
 * width with covered cells (handles short rows). Pure — no I/O, no layout state.
 */
export function expandTableGrid(table: ParsedTable): CanonicalCell[][] {
    const columnOwner: Array<CanonicalCell | undefined> = [];
    const grid: CanonicalCell[][] = [];
    let gridWidth = 0;

    for (const rowSource of table.rows) {
        const rowCells: CanonicalCell[] = [];
        let colCursor = 0;

        for (const cell of rowSource) {
            const columnSpan = Math.max(1, cell.columnSpan ?? 1);

            if (!isContinuation(cell)) {
                const master: CanonicalCell = {
                    kind: 'master',
                    colStart: colCursor,
                    columnSpan,
                    rowSpan: Math.max(1, cell.rowSpan ?? 1),
                    source: cell,
                    master: undefined as unknown as CanonicalCell,
                };
                master.master = master;
                rowCells.push(master);
                for (let c = colCursor; c < colCursor + columnSpan; c++) columnOwner[c] = master;
                // Synthesize covered cells for the columns the master spans.
                for (let c = colCursor + 1; c < colCursor + columnSpan; c++) {
                    rowCells.push({ kind: 'covered', colStart: c, columnSpan: 1, rowSpan: 1, master });
                }
            } else {
                const owner = columnOwner[colCursor];
                if (owner) {
                    rowCells.push({ kind: 'covered', colStart: colCursor, columnSpan: 1, rowSpan: 1, master: owner });
                    // A continuation can itself carry gridSpan — cover the rest.
                    for (let c = colCursor + 1; c < colCursor + columnSpan; c++) {
                        rowCells.push({ kind: 'covered', colStart: c, columnSpan: 1, rowSpan: 1, master: owner });
                    }
                } else {
                    // Defensive: continuation with no owner above → treat as a real cell.
                    const master: CanonicalCell = {
                        kind: 'master', colStart: colCursor, columnSpan, rowSpan: 1,
                        source: cell, master: undefined as unknown as CanonicalCell,
                    };
                    master.master = master;
                    rowCells.push(master);
                    for (let c = colCursor; c < colCursor + columnSpan; c++) columnOwner[c] = master;
                    for (let c = colCursor + 1; c < colCursor + columnSpan; c++) {
                        rowCells.push({ kind: 'covered', colStart: c, columnSpan: 1, rowSpan: 1, master });
                    }
                }
            }
            colCursor += columnSpan;
        }

        gridWidth = Math.max(gridWidth, colCursor);
        grid.push(rowCells);
    }

    // Pad short rows up to the final grid width with covered cells whose master
    // is whatever owns that column (or themselves if nothing does).
    for (const rowCells of grid) {
        let width = rowCells.reduce((n, c) => Math.max(n, c.colStart + c.columnSpan), 0);
        while (width < gridWidth) {
            const owner = columnOwner[width];
            if (owner) {
                rowCells.push({ kind: 'covered', colStart: width, columnSpan: 1, rowSpan: 1, master: owner });
            } else {
                const pad: CanonicalCell = {
                    kind: 'covered', colStart: width, columnSpan: 1, rowSpan: 1,
                    master: undefined as unknown as CanonicalCell,
                };
                pad.master = pad;
                rowCells.push(pad);
            }
            width += 1;
        }
    }

    return grid;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm --filter @univerjs/docs-exchange exec vitest run src/__tests__/expand-table-grid.spec.ts`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/expand-table-grid.ts \
        packages/docs-exchange/src/__tests__/expand-table-grid.spec.ts
git commit -m "feat(docs-exchange): pure expandTableGrid grid-projection helper"
```

---

## Task 2: Emit canonical cells from the expanded grid in `assemble.ts`

Switch **both** table-emission loops to drive off `expandTableGrid`: the
dataStream loop (`emitTable`) and the `tableSource.tableRows` loop. Both must
produce the same per-position order so dataStream cell-blocks align 1:1 with
`tableCells[]` (upstream indexes `cellNodes` positionally against `tableCells`).

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/assemble.ts` (`emitTable` ~381-413, `tableSource` block ~467-535)
- Test: `packages/docs-exchange/src/__tests__/assemble.test.ts` (add cases)

- [ ] **Step 1: Write the failing test**

Add to `packages/docs-exchange/src/__tests__/assemble.test.ts` inside the
`describe('assembleDocument', ...)` block:

```typescript
it('emits canonical covered cells for gridSpan (master + 0/0 covered, one block each)', () => {
    const children: DocumentChild[] = [{
        kind: 'table',
        table: {
            rows: [
                [{ paragraphs: [{ runs: [{ text: 'A' }] }], columnSpan: 2 }],
                [{ paragraphs: [{ runs: [{ text: 'B' }] }] }, { paragraphs: [{ runs: [{ text: 'C' }] }] }],
            ],
        },
    }];
    const doc = assembleDocument(children, { numbering: new Map(), rels: new Map(), media: new Map() });
    const src = Object.values(doc.tableSource ?? {})[0] as any;

    // Row 0: master colSpan 2 + one covered 0/0. Row 1: two masters.
    expect(src.tableRows[0].tableCells.map((c: any) => [c.rowSpan, c.columnSpan]))
        .toEqual([[1, 2], [0, 0]]);
    expect(src.tableRows[1].tableCells.length).toBe(2);

    // dataStream has one TABLE_CELL_START per grid position: row0 = 2, row1 = 2.
    const cellStarts = (doc.body!.dataStream.match(/\x1C/g) ?? []).length;
    expect(cellStarts).toBe(4);
});

it('emits vMerge continuation as a canonical covered 0/0 cell', () => {
    const children: DocumentChild[] = [{
        kind: 'table',
        table: {
            rows: [
                [{ paragraphs: [{ runs: [{ text: 'top' }] }], rowSpan: 2 }, { paragraphs: [{ runs: [{ text: 'x' }] }] }],
                [{ paragraphs: [], vMerge: 'continue' }, { paragraphs: [{ runs: [{ text: 'y' }] }] }],
            ],
        },
    }];
    const doc = assembleDocument(children, { numbering: new Map(), rels: new Map(), media: new Map() });
    const src = Object.values(doc.tableSource ?? {})[0] as any;
    expect(src.tableRows[0].tableCells[0]).toMatchObject({ rowSpan: 2 });
    expect(src.tableRows[1].tableCells[0]).toMatchObject({ rowSpan: 0, columnSpan: 0 });
    // No vMergeContinue field anywhere.
    expect(JSON.stringify(src)).not.toContain('vMergeContinue');
});
```

Note: `\x1C` is `TABLE_CELL_START` (`DataStreamTreeTokenType.TABLE_CELL_START`).

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @univerjs/docs-exchange exec vitest run src/__tests__/assemble.test.ts -t "canonical covered"`
Expected: FAIL — current code emits one cell per OOXML cell (no synthesized covered cells; gridSpan row has 1 cell, not 2).

- [ ] **Step 3: Implement — switch `emitTable` to the grid**

In `packages/docs-exchange/src/utils/parse/assemble.ts`, add the import at the
top with the other parse imports:

```typescript
import { expandTableGrid } from './expand-table-grid';
```

Replace the `emitTable` row/cell loop (currently lines ~386-410) so it iterates
the expanded grid. Covered cells emit a single empty paragraph:

```typescript
    const grid = expandTableGrid(t);
    for (const rowCells of grid) {
        acc.data += TABLE_ROW_START;
        for (const gc of rowCells) {
            acc.data += TABLE_CELL_START;
            if (gc.kind === 'master') {
                for (const p of gc.source!.paragraphs) {
                    // Inline <w:pPr><w:sectPr> inside a table cell is illegal per
                    // ECMA-376 but a few generators emit it. Strip silently.
                    emitParagraph(
                        p.sectionBreakAfter ? { ...p, sectionBreakAfter: undefined } : p,
                        acc,
                        ctx
                    );
                }
            } else {
                // Canonical covered cell: a single empty paragraph, no content.
                emitParagraph({ runs: [] }, acc, ctx);
            }
            // Univer's view-model expects each cell to end with a SECTION_BREAK
            // after the last paragraph's PARAGRAPH (\r).
            acc.sectionBreaks.push({ startIndex: acc.data.length });
            acc.data += '\n';
            acc.data += TABLE_CELL_END;
        }
        acc.data += TABLE_ROW_END;
    }
```

- [ ] **Step 4: Implement — switch `tableSource.tableRows` to the grid**

Delete the old `cellMeta` pre-compute block (lines ~438-465) and replace the
`tableRows: t.rows.map(...)` block (lines ~469-535) with a grid-driven version.
**Reuse the same `grid` already computed in Step 3** (move the
`const grid = expandTableGrid(t);` to the top of `emitTable` so both the
dataStream loop and this block share it — call `expandTableGrid` once). Derive
the grid width for perimeter judgement from it:

```typescript
    const gridColCount = Math.max(0, ...grid.map((r) =>
        r.reduce((n, c) => Math.max(n, c.colStart + c.columnSpan), 0)));

    acc.tableSource[tableId] = {
        tableId,
        tableRows: grid.map((rowCells, ri) => {
            const tableCells = rowCells.map((gc) => {
                if (gc.kind === 'covered') {
                    // Canonical covered cell: empty, no border, no shading.
                    return { rowSpan: 0, columnSpan: 0 };
                }
                const c = gc.source!;
                const cellEntry: Record<string, unknown> = {
                    margin: marginToUniver(c.margin, {
                        start: t.cellMargin?.start ?? defaultMargin.start,
                        end: t.cellMargin?.end ?? defaultMargin.end,
                        top: t.cellMargin?.top ?? defaultMargin.top,
                        bottom: t.cellMargin?.bottom ?? defaultMargin.bottom,
                    }),
                };
                cellEntry.rowSpan = gc.rowSpan;
                cellEntry.columnSpan = gc.columnSpan;

                const fill = c.shadingFill ?? t.shadingFill;
                if (fill && fill !== 'auto') cellEntry.backgroundColor = { rgb: `#${fill.toUpperCase()}` };

                const sides: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right'];
                const isPerimeter: Record<typeof sides[number], boolean> = {
                    top: ri === 0,
                    bottom: ri + gc.rowSpan - 1 === rowCount - 1,
                    left: gc.colStart === 0,
                    right: gc.colStart + gc.columnSpan === gridColCount,
                };
                for (const side of sides) {
                    const resolved = resolveCellBorder(side, c.borders, t.borders, isPerimeter[side]);
                    const u = borderToUniver(resolved);
                    if (u) {
                        const key = `border${side[0].toUpperCase()}${side.slice(1)}`;
                        cellEntry[key] = u;
                    }
                }

                if (c.vAlign) cellEntry.vAlign = VALIGN_TO_UNIVER[c.vAlign];
                if (c.preferredWidthPx !== undefined) {
                    cellEntry.size = { type: 1, width: { v: c.preferredWidthPx } };
                }
                return cellEntry;
            });

            const trHeight =
                t.rowHeights?.[ri] !== undefined
                    ? { val: { v: t.rowHeights[ri]!.v }, hRule: ROW_HEIGHT_RULE_TO_UNIVER[t.rowHeights[ri]!.rule] }
                    : { val: { v: 0 }, hRule: 0 };

            const rowEntry: Record<string, unknown> = { tableCells, trHeight };
            if (t.rowCantSplit?.[ri]) rowEntry.cantSplit = 1;
            if (t.rowIsHeader?.[ri]) rowEntry.repeatHeaderRow = 1;
            return rowEntry;
        }),
```

(Leave the `tableColumns`, `align`, etc. that follow line 536 unchanged.)

- [ ] **Step 5: Run the new + existing assemble tests**

Run: `pnpm --filter @univerjs/docs-exchange exec vitest run src/__tests__/assemble.test.ts`
Expected: PASS — new canonical cases pass; pre-existing table cases still pass
(plain tables have no merges, so grid == input).

- [ ] **Step 6: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/assemble.ts \
        packages/docs-exchange/src/__tests__/assemble.test.ts
git commit -m "feat(docs-exchange): emit canonical covered cells from expanded table grid"
```

---

## Task 3: Adopt upstream engine-render table code; delete fork table-grid

Now the importer emits canonical data, so swap the renderer/layout to upstream's
(which reads `rowSpan:0/columnSpan:0`) and delete our `table-grid.ts`. After this
task the end-to-end path is green again.

**Files:**
- Replace from upstream: `packages/engine-render/src/components/docs/layout/block/table.ts`
- Replace table-cell methods from upstream: `packages/engine-render/src/components/docs/document.ts`
- Delete: `packages/engine-render/src/components/docs/layout/block/table-grid.ts`
- Replace from upstream: `packages/engine-render/src/components/docs/__tests__/document.spec.ts` and `.../layout/block/__tests__/table.spec.ts`

- [ ] **Step 1: Restore upstream `table.ts` and delete `table-grid.ts`**

```bash
git checkout origin/upstream-dev -- packages/engine-render/src/components/docs/layout/block/table.ts
git rm packages/engine-render/src/components/docs/layout/block/table-grid.ts
```

- [ ] **Step 2: Verify nothing else imports `table-grid.ts`**

Run: `grep -rn "table-grid" packages/engine-render/src`
Expected: no remaining references (only `table.ts` used it; now upstream's
`table.ts` doesn't). If any remain, they belong to the old fork `table.ts` and
should be gone after Step 1.

- [ ] **Step 3: Replace the `document.ts` table-cell methods with upstream's**

The cleanest path is to take upstream's `document.ts` table methods + helpers.
Replace `_drawTableCellBordersAndBg` and add upstream's
`_getTableCellSource` / `_resolveTableCellBorder` / `_isDrawableTableCellBorder`
/ `_drawTableCellBorder` and the module-level `setTableCellBorderDash`, matching
upstream exactly. Fetch upstream's versions for reference:

Run: `git show origin/upstream-dev:packages/engine-render/src/components/docs/document.ts > /tmp/upstream-document.ts`

Then in `packages/engine-render/src/components/docs/document.ts`:
- Replace the body of `_drawTableCellBordersAndBg` with upstream's (uses
  `rowSke.cells.indexOf(cell)`, the `rowSpan===0 || columnSpan===0` guard,
  `_getTableCellSource`, neighbour resolution, `position` object).
- Add the four helper methods + `setTableCellBorderDash` from upstream.
- Add `ITableCell` to the `@univerjs/core` type import; remove `BooleanNumber`
  if it becomes unused; keep `applyDocBorderDash` only if still referenced
  (it will be unused after this swap — remove its import and the function if so).
- Remove `vMergeContinue` reads (there are none after taking upstream's method).

Verify the table methods are byte-identical to upstream:
Run: `git show origin/upstream-dev:packages/engine-render/src/components/docs/document.ts | sed -n '/_drawTableCellBordersAndBg/,/^    private _drawHeaderFooter/p' > /tmp/up-methods.txt` and diff against the same range in the working file.

- [ ] **Step 4: Restore upstream's engine-render table test specs**

```bash
git checkout origin/upstream-dev -- \
  packages/engine-render/src/components/docs/__tests__/document.spec.ts \
  packages/engine-render/src/components/docs/layout/block/__tests__/table.spec.ts
```

- [ ] **Step 5: Run engine-render doc tests**

Run: `pnpm --filter @univerjs/engine-render exec vitest run src/components/docs`
Expected: PASS — including upstream's table-border tests
("uses neighboring table cell borders…", "uses explicit table cell border width…",
"draws each physical table grid line only once") that were skipped/failing during
the merge. This green result is the success signal that the renderer swap is correct.

- [ ] **Step 6: Typecheck engine-render**

Run: `npx turbo typecheck --filter=@univerjs/engine-render`
Expected: success (no unused-import or missing-symbol errors).

- [ ] **Step 7: Commit**

```bash
git add packages/engine-render/src/components/docs/layout/block/table.ts \
        packages/engine-render/src/components/docs/document.ts \
        packages/engine-render/src/components/docs/__tests__/document.spec.ts \
        packages/engine-render/src/components/docs/layout/block/__tests__/table.spec.ts
git add -u packages/engine-render/src/components/docs/layout/block/table-grid.ts
git commit -m "refactor(engine-render): adopt upstream table layout+renderer; delete fork table-grid"
```

---

## Task 4: Remove `vMergeContinue` from core

With nothing producing or consuming it, delete the fork extension from the core
`ITableCell` interface.

**Files:**
- Modify: `packages/core/src/types/interfaces/i-document-data.ts` (`ITableCell`, ~1056-1078)

- [ ] **Step 1: Confirm zero remaining references**

Run: `grep -rn "vMergeContinue" packages/ common/ --include="*.ts" --include="*.tsx"`
Expected: only the core type definition line remains (importer + engine-render
references were removed in Tasks 2 and 3).

- [ ] **Step 2: Remove the field + its doc comment**

In `packages/core/src/types/interfaces/i-document-data.ts`, delete the
`vMergeContinue?: BooleanNumber;` field and its preceding JSDoc block (the
"Marks this cell as the continuation of a vertical merge…" comment).

- [ ] **Step 3: Verify it's gone and typecheck core + dependents**

Run: `grep -rn "vMergeContinue" packages/ common/`
Expected: no matches.

Run: `npx turbo typecheck --filter=@univerjs/core --filter=@univerjs/docs-exchange --filter=@univerjs/engine-render`
Expected: success.

- [ ] **Step 4: Commit**

```bash
git add packages/core/src/types/interfaces/i-document-data.ts
git commit -m "refactor(core): remove fork-local vMergeContinue from ITableCell"
```

---

## Task 5: Merged-cells fixture + import round-trip test

Add a committed DOCX fixture exercising every merge shape, plus an importer
round-trip test that asserts canonical output and correct comment/image indices.

**Files:**
- Create: `scripts/merged-cells-fixture/generate-merged-cells-fixture.py`
- Create (generated, committed): `packages/docs-exchange/src/__tests__/fixtures/merged-cells-fixture.docx`
- Test: `packages/docs-exchange/src/__tests__/merged-cells-fixture.test.ts`

Model the generator on `scripts/comments-fixture/generate-comments-fixture.py`
(stdlib `zipfile` + raw OOXML).

- [ ] **Step 1: Write the fixture generator**

```python
# scripts/merged-cells-fixture/generate-merged-cells-fixture.py
"""Generate a tiny DOCX exercising table merged cells for the importer test.

Run: python3 scripts/merged-cells-fixture/generate-merged-cells-fixture.py
Produces packages/docs-exchange/src/__tests__/fixtures/merged-cells-fixture.docx

Three tables:
  1. gridSpan: row0 = one cell spanning 2 cols; row1 = two cells (unequal widths).
  2. vMerge: a 2-row vertical merge in column 0.
  3. gridSpan+vMerge: a 2x2 merged block (master at top-left).
A comment anchors text inside table 3's master cell; a paragraph after the
tables contains a drawing-free run (index-shift sanity) — kept minimal.
"""
import os
import zipfile

HERE = os.path.dirname(__file__)
OUT = os.path.normpath(os.path.join(
    HERE, '..', '..', 'packages', 'docs-exchange', 'src', '__tests__',
    'fixtures', 'merged-cells-fixture.docx'))

W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'

CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>'''

ROOT_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''


def tc(text, *, grid=None, vmerge=None, w=2400):
    props = f'<w:tcW w:w="{w}" w:type="dxa"/>'
    if grid:
        props += f'<w:gridSpan w:val="{grid}"/>'
    if vmerge is not None:
        props += f'<w:vMerge w:val="{vmerge}"/>' if vmerge else '<w:vMerge/>'
    return (f'<w:tc><w:tcPr>{props}</w:tcPr>'
            f'<w:p><w:r><w:t xml:space="preserve">{text}</w:t></w:r></w:p></w:tc>')


def main():
    # Table 1: gridSpan (row0 one cell spanning 2; row1 two cells, unequal width)
    t1 = ('<w:tbl><w:tblPr><w:tblBorders>'
          '<w:top w:val="single" w:sz="4"/><w:left w:val="single" w:sz="4"/>'
          '<w:bottom w:val="single" w:sz="4"/><w:right w:val="single" w:sz="4"/>'
          '<w:insideH w:val="single" w:sz="4"/><w:insideV w:val="single" w:sz="4"/>'
          '</w:tblBorders></w:tblPr>'
          '<w:tblGrid><w:gridCol w:w="1600"/><w:gridCol w:w="3200"/></w:tblGrid>'
          f'<w:tr>{tc("A spans two", grid=2, w=4800)}</w:tr>'
          f'<w:tr>{tc("B", w=1600)}{tc("C", w=3200)}</w:tr></w:tbl>')

    # Table 2: vMerge (column 0 spans 2 rows)
    t2 = ('<w:tbl><w:tblPr><w:tblBorders>'
          '<w:top w:val="single" w:sz="4"/><w:left w:val="single" w:sz="4"/>'
          '<w:bottom w:val="single" w:sz="4"/><w:right w:val="single" w:sz="4"/>'
          '<w:insideH w:val="single" w:sz="4"/><w:insideV w:val="single" w:sz="4"/>'
          '</w:tblBorders></w:tblPr>'
          '<w:tblGrid><w:gridCol w:w="2400"/><w:gridCol w:w="2400"/></w:tblGrid>'
          f'<w:tr>{tc("merged down", vmerge="restart")}{tc("r0c1")}</w:tr>'
          f'<w:tr>{tc("", vmerge=False)}{tc("r1c1")}</w:tr></w:tbl>')

    # Table 3: 2x2 merged block (gridSpan on the restart, vMerge continues below)
    t3 = ('<w:tbl><w:tblPr><w:tblBorders>'
          '<w:top w:val="single" w:sz="4"/><w:left w:val="single" w:sz="4"/>'
          '<w:bottom w:val="single" w:sz="4"/><w:right w:val="single" w:sz="4"/>'
          '<w:insideH w:val="single" w:sz="4"/><w:insideV w:val="single" w:sz="4"/>'
          '</w:tblBorders></w:tblPr>'
          '<w:tblGrid><w:gridCol w:w="2400"/><w:gridCol w:w="2400"/></w:tblGrid>'
          f'<w:tr>{tc("2x2 block", grid=2, vmerge="restart", w=4800)}</w:tr>'
          f'<w:tr>{tc("", grid=2, vmerge=False, w=4800)}</w:tr></w:tbl>')

    body = (f'{t1}<w:p/>{t2}<w:p/>{t3}'
            '<w:p><w:r><w:t>After tables.</w:t></w:r></w:p>')

    document = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w:document xmlns:w="{W}"><w:body>{body}'
        '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>'
        '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>'
        '</w:sectPr></w:body></w:document>'
    )

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', CONTENT_TYPES)
        z.writestr('_rels/.rels', ROOT_RELS)
        z.writestr('word/document.xml', document)
    print('wrote', OUT)


if __name__ == '__main__':
    main()
```

- [ ] **Step 2: Generate the fixture**

Run: `python3 scripts/merged-cells-fixture/generate-merged-cells-fixture.py`
Expected: prints `wrote .../merged-cells-fixture.docx`.

- [ ] **Step 3: Write the round-trip test**

```typescript
// packages/docs-exchange/src/__tests__/merged-cells-fixture.test.ts
/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { docxToUniverData } from '../docx-to-univer';

const FIXTURE = path.resolve(__dirname, 'fixtures/merged-cells-fixture.docx');

describe('merged-cells-fixture.docx', () => {
    it('imports merges as canonical covered cells (rowSpan:0/columnSpan:0), no vMergeContinue', async () => {
        const buf = fs.readFileSync(FIXTURE);
        const doc = await docxToUniverData(buf);
        const tables = Object.values(doc.tableSource ?? {}) as any[];
        expect(tables.length).toBe(3);

        // Every table row is rectangular (same cell count across its rows).
        for (const t of tables) {
            const widths = t.tableRows.map((r: any) => r.tableCells.length);
            expect(new Set(widths).size).toBe(1);
        }

        // gridSpan table: row0 = [master colSpan2, covered 0/0].
        const grid = tables.find((t) => t.tableRows[0].tableCells.some((c: any) => c.columnSpan === 2));
        expect(grid.tableRows[0].tableCells.map((c: any) => [c.rowSpan, c.columnSpan]))
            .toEqual([[1, 2], [0, 0]]);

        // vMerge table: some cell is rowSpan 2 and its continuation is 0/0.
        const vm = tables.find((t) => t.tableRows.some((r: any) => r.tableCells.some((c: any) => c.rowSpan === 2)));
        expect(vm.tableRows[1].tableCells[0]).toMatchObject({ rowSpan: 0, columnSpan: 0 });

        // No fork extension anywhere in the snapshot.
        expect(JSON.stringify(doc)).not.toContain('vMergeContinue');

        // dataStream cell-block count equals total grid positions across all tables.
        const totalPositions = tables.reduce((n, t) =>
            n + t.tableRows.reduce((m: number, r: any) => m + r.tableCells.length, 0), 0);
        const cellStarts = (doc.body!.dataStream.match(/\x1C/g) ?? []).length;
        expect(cellStarts).toBe(totalPositions);
    });
});
```

- [ ] **Step 4: Run the fixture test**

Run: `pnpm --filter @univerjs/docs-exchange exec vitest run src/__tests__/merged-cells-fixture.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/merged-cells-fixture/generate-merged-cells-fixture.py \
        packages/docs-exchange/src/__tests__/fixtures/merged-cells-fixture.docx \
        packages/docs-exchange/src/__tests__/merged-cells-fixture.test.ts
git commit -m "test(docs-exchange): merged-cells DOCX fixture + canonical round-trip test"
```

---

## Task 6: Full regression + browser e2e verification

**Files:** none (verification only).

- [ ] **Step 1: Full unit + typecheck**

Run: `pnpm --filter @univerjs/docs-exchange exec vitest run`
Expected: all PASS.

Run: `pnpm --filter @univerjs/engine-render exec vitest run`
Expected: all PASS (incl. upstream document.spec.ts table tests).

Run: `npx turbo typecheck --filter=@univerjs/core --filter=@univerjs/engine-render --filter=@univerjs/docs-exchange --filter=@univerjs/docs-exchange-ui`
Expected: success.

- [ ] **Step 2: Browser e2e (docx-import-e2e-verification skill)**

Start the demo server (`pnpm --filter univer-examples run dev:demo`), then via
Playwright MCP import both fixtures and screenshot-verify tables:

- Copy fixture: `cp packages/docs-exchange/src/__tests__/fixtures/merged-cells-fixture.docx examples/public/merged-cells.docx`
- Navigate `http://localhost:3002/docs/`, import via `docs-exchange.operation.docx-import`, screenshot.
- Verify: gridSpan cell spans 2 columns with one outer border (no internal line);
  vMerge cell spans 2 rows (no internal horizontal line); 2×2 block is one
  bordered rectangle; column widths correct; **0 console errors**.
- Also re-import `examples/public/demo.docx` and confirm its "Basic Table" /
  alignment tables still render correctly.

- [ ] **Step 3: Confirm upstream-merge cleanliness (success criterion 5)**

Run: `git diff --stat origin/upstream-dev -- packages/engine-render/src/components/docs/layout/block/table.ts`
Expected: empty (byte-identical to upstream → future syncs of this file are zero-conflict).

- [ ] **Step 4: Final review + finish branch**

Use superpowers:finishing-a-development-branch to open the PR.

---

## Self-review notes

- **Spec coverage:** expandTableGrid (Task 1) ✓; canonical emission incl.
  dataStream blocks + covered 0/0 (Task 2) ✓; delete table-grid + adopt upstream
  renderer/layout (Task 3) ✓; remove vMergeContinue from core (Task 4) ✓;
  fixtures + unit + e2e (Tasks 5-6) ✓; success criteria 1-5 mapped to Task 4
  (no vMergeContinue), Task 3 step 6 / Task 6 step 3 (byte-identical upstream),
  Task 3 (table-grid deleted; logic in expand-table-grid), Task 6 (all green +
  e2e), Task 6 step 3 (zero-conflict).
- **Index-coupling:** covered by Task 5 fixture (comment in merged region; text
  after tables) and the dataStream cell-count assertions.
- **Ordering caveat** documented up top: end-to-end/e2e only green after Task 3.
