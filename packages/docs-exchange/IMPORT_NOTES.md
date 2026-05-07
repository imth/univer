# DOCX import — known importer/renderer gaps

Tracks DOCX features the importer parses correctly but Univer's renderer can't
fully present yet. Importer-side fidelity tests pin the parsed shape; this file
explains why a regression test passing doesn't always mean the imported doc
looks right on screen.

Update this file when you add a TODO that crosses the importer/renderer boundary.

> **Scope note.** Every gap below is a missing capability in the renderer
> (`@univerjs/engine-render` / `@univerjs/docs-ui`), not something the import
> path introduced. The same limitations apply to documents authored natively in
> Univer — the import flow just surfaces them more often because Word templates
> rely on these features heavily. Fixes belong in the renderer packages; the
> importer is already emitting the right shape.

## Header / footer

### PAGE / NUMPAGES field codes

- **Importer status:** parsed. `parseRunsFromPNode` consumes the
  `fldChar begin → instrText → separate → cached value → fldChar end` sequence,
  drops the cached value, and emits a single-character placeholder run (`text: '1'`)
  carrying `fieldType: 'PAGE' | 'NUMPAGES'`. Assemble persists this as a
  `CustomRangeType.FIELD` customRange with `properties.subtype`.
- **Renderer status:** implemented. `getFontCreateConfig` reads the FIELD
  subtype off the customRange and threads it onto the glyph; `font-and-base-line.ts`
  substitutes the live page number / total pages at paint time using
  `parentPage.pageNumber` and `pages.length`. The footer skeleton is still cached
  per `pageWidth` and shared across body pages — substitution happens during
  `ctx.fillText`, not during layout.
- **Why a "1" placeholder:** layout needs a realistic glyph width. Most footers
  are centered or right-aligned; using "1" keeps width within ±1 digit of the
  rendered value. Documents with 100+ pages will see the centered footer drift
  by roughly the width of one or two digits — acceptable for v1.

### Paragraph `tabStops`

- **Importer status:** parsed. `parsePPr` collects `<w:tabs>` and the
  `clear`/`right`/`center` merge with inherited pStyle tabs (see
  `header-footer-fidelity.test.ts` "right tab at 8844 dxa" case).
- **Renderer status:** not consumed. `shaping.ts` shapes every `<w:tab/>`
  with `getCharSpaceApply(charSpace, defaultTabStop, ...)` — a fixed-width
  tab using the document-level `defaultTabStop`. The per-paragraph
  `tabStops` array on `IParagraphStyle` is never read.
- **Concrete symptom (文书格式.docx header2):** Word puts header text on the
  right edge by writing `<w:jc w:val="left"/>` + a single right-aligned tab
  stop at `pos=8844` + a leading `<w:tab/>` run. Word advances to the right
  tab stop and right-aligns the text against it; Univer renders a
  default-width tab and the text stays at the left margin.
- **Why this is more than parsing:** right-aligned tab stops require a
  back-fill or two-pass layout — the tab glyph's width depends on how wide
  the *following* runs are. Adding it touches shaping (variable-width tab
  glyph), line break (post-shaping width fixup), and the section/paragraph
  config plumbing that hands `tabStops` down to `shaping.ts`. Out of scope
  for an importer-only change.

### Mid-document orientation switch (`pageOrient` change between sections)

- **Importer status:** correct. A landscape `<w:sectPr>`
  (`<w:pgSz w:w="15840" w:h="12240" w:orient="landscape"/>`) is emitted as
  a `sectionBreak` entry with the swapped `pageSize` (1056×816 in Univer
  units), `pageOrient: PageOrientType.LANDSCAPE`, and its own
  `defaultHeaderId` — verified against `全格式.docx` sectPr #2.
- **Renderer status:** fixed. Three compounding bugs in `engine-render`:
  1. The `skeHeaders / skeFooters` cache in `page.ts` was clobbering
     the inner per-pageWidth map on every populate (`new Map([[pageWidth,
     x]])`), so a portrait→landscape transition wiped the portrait entry
     and a landscape→portrait wiped the landscape one. Fixed by mutating
     the existing inner map (`set(pageWidth, …)` instead of replace).
  2. The body section loop in `document.ts` called
     `_drawLiquid.translateSection(section)` without a surrounding
     `translateSave / translateRestore`, so `section.top` accumulated
     across iterations within a page (and leaked into the footer of that
     page and every subsequent page's header/body/footer once a
     multi-section page existed). For `全格式.docx` page 6 has two
     sections — the second's `top = 407.07` permanently shifted the
     liquid, which painted page 6's footer at portrait_y + 407 (inside
     page 7's body area), then page 7's header / body / footer all
     drew 407 px low. Fixed by wrapping the inner section body with a
     `translateSave / translateRestore` pair around `translateSection`.
  3. First-page header/footer (`<w:titlePg/>` →
     `useFirstPageHeaderFooter`) was scoped to the document's first
     page (`pageNumber === pageNumberStart`) instead of each section's
     first page. In OOXML `titlePg` is per-section: the "Different
     First Page Header" applies to the first page of EVERY section
     that sets it. `全格式.docx` has a section after the landscape one
     with its own `titlePg` + `firstPageHeaderId` — Univer rendered
     that section's default header on its first page instead of the
     first-page header. Fixed by switching the test to
     `breakType === BreakType.SECTION`: a page born from a section
     break is a section-first-page; an overflow continuation page
     (`BreakType.PAGE`) is not. Verified end-to-end: post-landscape
     section page shows "FIRST PAGE ONLY header" with no footer; the
     pages after it revert to the section's default header/footer.
  Verified end-to-end with `全格式.docx`: portrait page 6 footer renders
  in its own footer slot, landscape page 7 shows "Landscape Header" in
  the header slot, body content at the top of the body area, footer at
  the bottom; cursor lands in landscape body text on click.
- **Out-of-scope follow-up:** `pageNumber` does not increment across
  NEXT_PAGE section boundaries that share the previous page's number
  (e.g. landscape sectPr #2 and the portrait page that follows both
  show `pageNumber: 5` in the skeleton). This affects PAGE field
  substitution on those pages but not header/footer placement. The
  bug lives in `doc-skeleton.ts:1154` where `createSkeletonPage` is
  called with `curSkeletonPage?.pageNumber ?? pageNumberStart` —
  carrying forward the previous number rather than incrementing for a
  fresh page.

### Section type — `nextColumn`

- **Importer status:** silently dropped. `<w:type w:val>` maps to Univer
  `SectionType` via `SECTION_TYPE_BY_NAME` in `assemble.ts`
  (`continuous → CONTINUOUS`, `nextPage → NEXT_PAGE`, `evenPage → EVEN_PAGE`,
  `oddPage → ODD_PAGE`). `nextColumn` has no Univer equivalent — Univer's
  section model has no concept of multi-column section breaks — so the section
  is emitted with `sectionType` unset (defaults to `NEXT_PAGE`-like behaviour).
- **Why no warning:** Word documents that use `nextColumn` almost always also
  set `<w:cols w:num="…">`, which the renderer doesn't honour either; warning
  on the section break alone would be noise.

## Inline content

### Hard page break (`<w:br w:type="page"/>`)

- **Importer status:** translated to a `sectionType: NEXT_PAGE` section break
  (`\n` token + `body.sectionBreaks[]` entry), NOT to the inline `\f`
  (`PAGE_BREAK`) token. `parse-run.ts` still emits `\f` at the run level so
  parsers downstream can see the original signal, but `assemble.ts` detects
  "bare page-break paragraphs" — `<w:p><w:r><w:br w:type="page"/></w:r></w:p>`
  with no other content (Word's "Insert > Page Break" output, also python-docx's
  default) — and converts each one to a NEXT_PAGE section break. The new entry
  inherits the body-end sectPr's `pageSize` / `pageOrient` / `margin*` /
  `*HeaderId` / `*FooterId` so the new page renders identically to the
  surrounding pages, but **not** the body-end's `sectionType` (which would
  overwrite NEXT_PAGE).
- **Why not just emit `\f`?** Two reasons. (1) `engine-render`'s glyph layer
  shapes PAGE_BREAK as a zero-width PLACEHOLDER glyph with empty `content`, so
  `linebreaking.ts`'s `text.endsWith('\f')` trigger is dead code in real
  layout — only its `streamType` survives, and the existing renderer doesn't
  inspect `streamType` for PAGE_BREAK. (2) Even if it did, the bare page-break
  paragraph still owns a `\r` paragraph mark that gets laid out as a blank line
  at the top of the new page. Section breaks bypass both problems:
  `doc-skeleton.ts` opens a fresh page at any non-`CONTINUOUS` section
  boundary, and the next paragraph sits flush at the page top.
- **Edge cases:** a `<w:br w:type="page"/>` inside a paragraph that ALSO has
  visible text or list/section semantics is not "bare" — those keep the inline
  `\f` token. Rendering coverage of mid-paragraph page breaks via `\f` is
  therefore limited (see `linebreaking.ts` note above); these are rare in
  practice (Word emits them as bare paragraphs).

### Soft line break (`<w:br/>`)

- **Importer status:** emitted as `DataStreamTreeTokenType.LINE_BREAK` (`\x07`).
  `<w:br/>` is OOXML's soft line break — same paragraph, new visual line.
- **Renderer status:** supported. `engine-render` shapes LINE_BREAK as a
  zero-width glyph (`shaping.ts`); `lineBreakLineBreakExtension` makes the
  line-breaker break before and after it; `_divideOperator` in
  `layout-ruler.ts` marks the divide full when its last glyph is LINE_BREAK,
  so the next word falls through to `_lineOperator` and starts a new line.
  Paragraph-level effects (bullet, firstLineIndent, spacing.before/after,
  border) are applied per-paragraph and remain correct across LINE_BREAKs.
- **Out-of-scope follow-up:** clipboard serialization may want to translate
  LINE_BREAK to `\n` (or a `<br>` in HTML) when copying out of Univer; today
  the raw `\x07` would be pasted into external apps as the BEL control code.

## Paragraph borders

### Sides other than `bottom` (top / left / right / between)

- **Importer status:** partial. `parsePPr` only consumes `<w:bottom>` and
  `<w:top>` from `<w:pBdr>`; `<w:left>`, `<w:right>`, `<w:between>`, `<w:bar>`
  are dropped. `<w:top>` is parsed into `borderTop` but never makes it past
  the renderer (see below).
- **Renderer status:** bottom-only. `IDocumentSkeletonLine` carries a single
  `borderBottom` slot, and `_drawBorderBottom` paints only that side. The
  4-sided `_drawBorderTop / Left / Right` functions in `document.ts` exist
  but are wired to **table cells**, not paragraphs.
- **Symptom:** a Word paragraph with all four borders ("box") imports as a
  single underline — the bottom side renders, the other three are silently
  dropped.
- **Why this isn't a parser tweak:** even if the importer emitted all four
  sides, there's no skeleton slot to hand them to and no per-paragraph
  painter to draw them. Wiring it up needs:
  1. Importer: parse `w:left` / `w:right` (and surface the already-parsed
     `borderTop`).
  2. Skeleton: add `borderTop / Left / Right` slots on
     `IDocumentSkeletonLine`.
  3. Layout: decide which line carries the side borders (first / last /
     every) and how consecutive same-styled paragraphs merge so vertical
     rules don't double-up at the seam.
  4. Renderer: per-paragraph `_drawBorderTop / Left / Right` honoring line
     padding and the merge rules above.
