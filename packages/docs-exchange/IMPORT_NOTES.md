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

- **Status:** supported (importer + layout + renderer).
- **Importer:** `parsePPr` reads `<w:tabs>`/`<w:tab>` including the
  `w:val` (start/center/end), `w:pos` (dxa → CSS px), and `w:leader`
  attributes. `w:val="clear"` entries prune inherited pStyle tabs and
  the rest merge into the paragraph's `tabStops[]`.
- **Layout:** `applyParagraphTabStops` in `line-adjustment.ts` runs a
  second pass after each line is shaped and resizes its TAB glyphs:
  - **START** — fills to the next stop past `cursorX`.
  - **CENTER** — leaves half the trailing run-width before the stop.
  - **END** — leaves the full trailing run-width before the stop.
  When a tab is past the last stop, the shaping-time default-tab width
  is kept; same fallback applies if the computed width would be
  negative (trailing content already overruns the stop).
- **Renderer:** `_drawTabLeaders` paints the leader character (dot,
  hyphen, underscore, middle-dot) across each tab's reserved x-range
  in body/cell/header/footer paths. `w:leader="none"`/`heavy` produce
  no leader (`heavy` is a stylistic hint Word resolves to none).
- **Known follow-ups:** `w:val="decimal"`/`"bar"` map to START
  (Univer's `TabStopAlignment` has no decimal/bar slots). RTL is out
  of scope until the overall RTL pass lands.

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
- **Why the importer still rewrites bare page-break paragraphs:** the bare
  `<w:p><w:r><w:br w:type="page"/></w:r></w:p>` paragraph carries a `\r`
  paragraph mark; if we left it as inline `\f` the renderer would lay out a
  blank line at the top of the new page (the empty paragraph). Section breaks
  bypass that — `doc-skeleton.ts` opens a fresh page at any non-`CONTINUOUS`
  section boundary, and the next paragraph sits flush at the page top.
- **Mid-paragraph `\f`:** supported. `engine-render` shapes PAGE_BREAK as a
  zero-width PLACEHOLDER glyph with empty `content` but preserves
  `streamType: '\f'`. `pageColumnBreakExtension` makes `\f` a line-breaker
  break-before/after rule so shaping terminates a chunk at the break, and
  `linebreaking.ts` checks the last glyph's `streamType` (instead of the joined
  text, which lost the `\f` to PLACEHOLDER) to dispatch a new page with
  `BreakType.PAGE`. Rare in real Word docs (Word emits page breaks as bare
  paragraphs) but well-defined when present.

### Hard column break (`<w:br w:type="column"/>`)

- **Importer status:** emitted as `DataStreamTreeTokenType.COLUMN_BREAK`
  (`\v`) at the run level (see `parse-run.ts`). Unlike page break we do NOT
  translate column breaks to section breaks, because OOXML allows them in the
  middle of a paragraph (Word's `<w:r><w:t>before</w:t><w:br w:type="column"/></w:r><w:r><w:t>after</w:t></w:r>`
  inside one `<w:p>` is the canonical form), and a section break would
  illegally split the paragraph in two.
- **Renderer status:** supported. Same plumbing as mid-paragraph `\f`:
  PLACEHOLDER glyph carries `streamType: '\v'`,
  `pageColumnBreakExtension` forces a shaping break at it, and
  `linebreaking.ts` dispatches via `getLastNotFullColumnInfo` — multi-column
  sections jump to the next column (`setColumnFullState`), single-column
  sections (the only kind Univer renders today) open a new page with
  `BreakType.COLUMN`.

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

### Status: 5 sides supported (top / bottom / left / right / between)

`parsePPr` consumes all 5 `<w:pBdr>` children. The skeleton's
`IDocumentSkeletonLine` has a slot per side and the renderer's
`_drawParagraphBorders` paints each one with its own padding pushed
away from the text (top up, bottom down, sides outward).

**Word-faithful merging.** Adjacent paragraphs whose 5 border styles
all deep-equal are merged into one continuous box: `top` paints once
on the group's first line, `bottom` once on the last, `left/right` on
every line. This is the assignment done by `assignParagraphBorders`
in `engine-render/src/components/docs/layout/tools.ts`.

**Cross-page / cross-column.** A merged group split across pages or
columns is bucketed per-column; each bucket paints its own top + bottom
so every page that contains group content stays framed. Left/right
ride on every line and stitch naturally at column edges.

**`<w:between>`.** Painted at the seam between adjacent paragraphs of
a merged group. Layout attaches it to the *first line of each non-first
paragraph in the group* and the renderer anchors it above the line, so
cross-column / cross-page seams correctly land at the new column's top
rather than dangling at the previous column's bottom.

**Padding unit.** OOXML `<w:space>` is in points; `parseBorder`
converts to px (`* 4 / 3`) before handing to the renderer.

### Out of scope follow-ups

- `<w:bar>` (the 5th line type, a left-side gutter rule used for legal
  documents) is not parsed.
- Paragraph-level `<w:shd>` (background fill) is not parsed for
  paragraphs (only for table cells today). A merged box still shows
  the page background between its sides.
- Theme color resolution (`themeColor` / `themeTint` / `themeShade`)
  on borders falls back to the explicit `w:color` or black; theme
  tokens are not yet honored.

## Floating drawings → Text box (`DRAWING_SHAPE`)

Word's "Insert Text Box" / `<wps:wsp>` floating shapes are imported as
`DrawingTypeEnum.DRAWING_SHAPE` and rendered as a scene-layer `Rect`
(white fill + black stroke by default). The shape is anchored in the
body via a custom-block `\b` token in the same way images are.

- **Importer:** `parseDrawingFromXmlNode` recurses into
  `<mc:AlternateContent>/<mc:Choice>`; on `graphicData` URI
  `…/wordprocessingShape` it dispatches to `parseShape`, which extracts
  geometry (`<a:xfrm>`), fill (`<a:solidFill>`), stroke (`<a:ln>`),
  body insets (`<wps:bodyPr>`), and embedded paragraphs from
  `<w:txbx><w:txbxContent>` reusing `parseParagraph`.
- **Renderer:** the `DRAWING_SHAPE` branch of
  `DrawingRenderService.renderDrawing` paints a `Rect` plus a sibling
  `RichText` overlay for `textBoxContent` (positioned inside the box's
  inner content area — outer rect minus `bodyPr` insets). A new
  `ShapeUpdateController` mirrors `ImageUpdateController` and dispatches
  `DRAWING_SHAPE` items off `IDrawingManagerService.add$`; it also
  subscribes to `refreshTransform$` to keep the `_TEXT` overlay aligned
  when the docs layout pass recomputes the anchored position (the generic
  drawing-update controller only re-positions the primary shape key).
- **Wiring:** `DocDrawingController` now subscribes to
  `getTypeOfUnitAdded$(UNIVER_DOC)` and calls `loadDrawingDataForUnit`
  itself. The previous resource-hook path only fired when a snapshot
  carried a `resources[]` entry for the plugin; DOCX import puts
  drawings on the top-level snapshot fields, so the hook never fired
  for fresh imports.

**Stage B (P1 — interactivity):**

- `renderShapes` now calls `scene.attachTransformerTo(rect)`, so shapes
  go through the same selection / 8-handle transformer as images. Drag,
  resize, rotate, and Backspace-delete all work via the existing generic
  `DocDrawingTransformUpdateController` + `DeleteDocDrawingsCommand` —
  no SHAPE-specific command code needed.
- Importer extracts `<a:xfrm rot>` (60000ths-of-a-degree → degrees) onto
  `transform.angle` / `docTransform.angle`, and the renderer applies it
  to both the rect and the text overlay so rotated text-box imports
  render at the correct angle.
- The `_TEXT` overlay subscribes to `rect.onTransformChange$` so it
  follows the rect live during interactive drag/resize/rotate
  (`refreshTransform$` only fires on layout-driven recompute, which the
  scene transformer bypasses).
- `ClippedRichText` clips the overlay to its own bounds in local
  coordinates, so text that overflows the box is visually cut off
  (matching Word's default `<a:bodyPr>` behavior — no `<a:spAutoFit/>`).
  The clip rotates with the parent automatically because canvas's
  current matrix already includes the rect's angle. It also overrides
  `transformForAngle` so the overlay's rotation pivot tracks the box
  size rather than the auto-grown content size — see the class-level
  comment in `drawing-render.service.ts` for the full why.

**Out of scope (Stage C):**

- Double-click to edit text inside a shape. `RichText` is a read-only
  scene-render component; the real editor is `IEditorService.register`
  which requires a DOM `HTMLDivElement` overlay (toolbar routing,
  command stack, IME). Shipping a partial canvas-only editor would
  diverge from the rest of the docs editing UX.
- Non-rect preset geometries (`<a:prstGeom prst>` values other than
  `rect` / `roundRect`): supported via `PresetGeometryRect` which paints
  the OOXML preset outline using path data from a vendored copy of
  `aiden0z/pptx-renderer`'s `presets.ts` (Apache-2.0). The vendored
  library ships two registries — `presetShapes` (single-path, ~157
  generators) and `multiPathPresets` (multi-`<a:path>` with per-path
  fill/stroke metadata, ~40 generators) — that together cover the
  full ECMA-376 catalog of 187 presets. See "Preset geometry coverage
  audit" below for verification details.
- Implementation notes for preset geometries:
  - **`evenodd` fill rule for multi-subpath presets**: applied
    unconditionally via `PresetGeometryRect`'s constructor (`super(key,
    { ...props, fillRule: 'evenodd' })`). The vendored generators emit
    interior cutouts (donut hole, smiley eyes/mouth, home-button door,
    info "i" glyph) as additional subpaths whose winding direction
    matches the outer outline; Canvas's default `nonzero` rule fills
    those overlaps solid instead of as holes. About 25% of presets
    emit ≥2 subpaths and benefit from even-odd; the other 75% are
    single-outline and unaffected by the rule choice, so applying it
    unconditionally avoids a fragile per-preset whitelist.
  - **Multi-fill / 3D-shaded presets** (~27 of OOXML's 187 presets):
    the OOXML reference defines `actionButton*`, `bevel`, `can`,
    `cube`, `curved*Arrow`, `ribbon*`, `*Scroll`, `foldedCorner`,
    `smileyFace`, `ellipseRibbon*` as **multiple paths each with its
    own `fill="darken" | "lighten" | "none"`** — the renderer derives
    2-3 shaded variants of the base color and fills each sub-path
    accordingly to produce Word's 3D button look. The vendored
    `multiPathPresets` registry preserves the per-`<a:path>` flag and
    `PresetGeometryRect.drawWith` paints each fillable sub-path with
    the base color blended toward black or white per the declared
    mode (`tintHex` in `preset-geometry-rect.ts`):
    `darken`/`darkenLess` blend toward 0 by 40%/20%,
    `lighten`/`lightenLess` blend toward 255 by 60%/40% — the
    constants Office uses when flattening `<a:lumMod>`/`<a:lumOff>`
    for preview. `actionButtonInformation` thus renders with the
    expected lighter ring around the "i" head and darker stem.
    Stroke-only sub-paths (`fill: 'none'`) paint last as detail lines.
  - **Stroke-only "lines and connectors"** (`STROKE_ONLY_PRESETS` in
    `presets.ts`): OOXML declares `line`, `lineInv`,
    `straightConnector1`, `bent/curvedConnector2-5` as
    `<a:pathLst><a:path stroke="true" fill="none">`. Their generators
    emit open polylines/curves that should be stroked, not filled —
    Canvas's `fill()` would auto-close the open subpath and paint a
    bent connector as a filled triangle. The renderer queries this
    set and skips the fill pass for matching presets.
  - **Inline vs floating + wrap mode** (`<wp:inline>` vs `<wp:anchor>`):
    a shared `parseAnchorPositioning` (used by **both** images and
    shapes) records `isInline`, the wrap mode, `distL/T/R/B`,
    `behindDoc`, the `<wp:positionH/V>` `posOffset`/`align`, and
    `<wp:wrapPolygon>` points. `mapWrapToLayoutType` then maps to the
    real `PositionedObjectLayoutType`: `inline → INLINE` (glyph slot),
    `wrapNone → WRAP_NONE` (floats above body), `wrapSquare →
    WRAP_SQUARE`, `wrapTight → WRAP_TIGHT`, `wrapThrough →
    WRAP_THROUGH`, `wrapTopAndBottom → WRAP_TOP_AND_BOTTOM`. engine-
    render's `line.ts` already implements the flow-around split for
    these, so body text now wraps around floating images/shapes
    instead of drawing behind them. `wrapText` (bothSides/left/right/
    largest) maps onto the drawing's `WrapTextType`.
  - **Sub-pixel stroke widths**: OOXML lets shapes specify half-point
    outlines (Word's default 0.5pt action-button stroke comes through
    as ~0.667 px). Canvas anti-aliases sub-pixel strokes into near-
    transparent ghosts, which collapses preset detail lines (icon
    outlines, cylinder lid edges, chart markers) into invisible
    smears. `resolveShapeStroke` rounds the stroke up to a full pixel
    floor — Word does the same — so detail lines stay visible. A
    hand-authored 0.25pt accent line will render slightly bolder than
    the source, which is preferable to disappearing entirely.
- Out-of-scope follow-ups for preset geometries:
  - **`<a:avLst>` adjustment values**: `parseShape` ignores the
    adjust-value list, so every preset uses its OOXML-defined default.
    Most fixtures are unaffected (no overrides), but a `roundRect`
    with a non-default `adj1` would currently render with the default
    corner radius instead of the authored one.
  - **Custom geometries** (`<a:custGeom>` with `<a:pathLst>`),
    gradient fills, shadow / 3D effects, and VML fallback
    (`<mc:Fallback>`).
  - **wrapPolygon flow-around**: the `<wp:wrapPolygon>` `start`/`lineTo`
    points are parsed and emitted, but `wrapTight`/`wrapThrough` map to
    `WRAP_TIGHT`/`WRAP_THROUGH` (rectangular bounding-box flow-around),
    not `WRAP_POLYGON` (=2), so the precise polygon outline isn't used.
    engine-render only consumes `start`/`lineTo` for `WRAP_POLYGON`, and
    those points need absolute-coordinate offsetting in the skeleton;
    promoting polygon-bearing wraps to `WRAP_POLYGON` is a layer-2
    follow-up (calibrate visually in e2e).
- **Position `relativeFrom`.** `REL_FROM_H_MAP` / `REL_FROM_V_MAP` map
  the OOXML `relativeFrom` to the **exact** `ObjectRelativeFromH/V` enum
  value (`column → COLUMN(1)`, `paragraph → PARAGRAPH(1)`, `margin →
  MARGIN(3)`, `page → PAGE(0)`, …). These numbers MUST match
  core's enums — the renderer's `getPositionHorizon`/`getPositionVertical`
  switch on the literal value, and a mismatched number falls through to
  an unhandled branch that pins the float to the top-left edge with
  `posOffset` silently dropped. The renderer currently implements the
  `PAGE` / `COLUMN` / `MARGIN` frames; other frames (`character`, `line`,
  the `*Margin` variants) are emitted with the correct enum but have no
  renderer branch yet, so a float anchored to one of those lands at
  offset 0 until the renderer grows the case. `<wp:align>`
  (left/center/right/inside/outside) maps onto `positionH/V.align`; the
  float's `transform.left/top` reflect `posOffset` only.

### Image transforms — rotation / flip / crop

Pictures (`<pic:pic>`) carry their own transform/crop, parsed off the
image path (distinct from the `<wps:spPr>` shape path):

- **Rotation & flip** (`<pic:spPr><a:xfrm rot flipH flipV>`):
  `parsePicTransform` reads `rot` (60000ths-of-a-degree → degrees) onto
  `transform.angle` / `docTransform.angle`, and `flipH`/`flipV` onto
  `transform.flipX`/`flipY`. The renderer's `renderImages` applies all
  three (`angle`/`flipX`/`flipY` ride on the transform), so no
  engine-render change was needed.
- **Crop** (`<a:srcRect l t r b>` in `<pic:blipFill>`): OOXML gives the
  per-edge crop as a fraction of the *source* (1/100000 units).
  `convertSrcRect` converts to Univer's `ISrcRect`, which is the
  cropped-off amount in *display* px (source fills
  `(Wvis+left+right) × (Hvis+top+bottom)`, clipped to the visible box):
  `left_px = Wvis * lf / (1 - lf - rf)`, etc. `renderImages` calls
  `image.setSrcRect`, so cropping renders for free.
- **Guards**: a degenerate crop (`l+r ≥ 100%` or `t+b ≥ 100%`) or any
  negative (outset) edge is skipped — no `srcRect` is emitted. All-zero /
  absent `<a:srcRect>` emits nothing.
- **Out of scope**: negative (outset) `srcRect`, blip effects
  (`<a:duotone>` / `<a:alphaModFix>`), gradient fills, shadows.

### Preset geometry coverage audit

Fixture: [`packages/docs-exchange/src/__tests__/fixtures/preset-shapes-fixture.docx`](src/__tests__/fixtures/preset-shapes-fixture.docx),
generated by [`scripts/preset-fixture/generate-preset-fixture.py`](../../scripts/preset-fixture/generate-preset-fixture.py)
— one inline 60×60 px shape per paragraph, solid Office Accent-1 blue
fill, 1pt darker-blue stroke, covering all 187 ECMA-376 preset
geometries in 9 categories (basic 70, arrows 22, stars 11, banners 5,
callouts 23, math 6, flowchart 29, action buttons 12, connectors 9).

Import result: **187 / 187** drawings parsed, laid out, and rendered
with their authored outline. Coverage is reached via two registries
in the vendored `aiden0z/pptx-renderer` library:

  - `presetShapes` — single-path generators (≈157 entries). Used for
    plain shapes whose OOXML `<a:pathLst>` is one `<a:path>`.
  - `multiPathPresets` — multi-`<a:path>` generators (≈40 entries) for
    callouts, action buttons, chart markers, ribbons, scrolls, can,
    cube, bevel, foldedCorner, etc. Each returns
    `[{ d, fill: 'norm'|'darken'|'lighten'|'none', stroke }]`.

`PresetGeometryRect.drawWith` queries `multiPathPresets` first; on hit
it does a two-pass render — fillable sub-paths get fill+stroke,
`fill: 'none'` sub-paths get stroke-only — so detail lines (chart `+`
/ `×` glyph, action-button speaker grill, magnetic-disk lid edge) stay
as lines instead of being closed by `fill()` into spurious filled
regions. On miss it falls back to single-path rendering via
`getPresetShapePath`.

Stroke-only families (open polylines that should never be filled) are
flagged separately in `STROKE_ONLY_PRESETS` so connectors / lines
register with `presetShapes` but the renderer skips fill for them.
That covers `line`, `lineInv`, `straightConnector1`, `bent/curved
Connector2-5` — the ECMA-376 §20.1.10.55 "lines and connectors"
family whose `<a:pathLst>` declares `stroke="true" fill="none"`.

Local generator additions (not in upstream at vendored revision
e6200e8): `smileyFace`, `actionButtonHome`, `actionButtonInformation`
(single-path), `flowchartmagneticdisk`, `flowchartmagneticdrum`
(multi-path overrides splitting body from front-edge detail).

Known visual gap (already documented under "Multi-fill / 3D-shaded
presets" above): `multiPathPresets` carries per-sub-path
`fill: 'darken' | 'lighten' | 'lightenLess'` shading modes that we
ignore — every fillable sub-path uses the shape's single base fill.
Silhouette and cutouts match Word; the inner light/dark layers don't.
Affects ~27 presets (`actionButton*`, `bevel`, `cube`, `curved*Arrow`,
`ribbon*`, `*Scroll`, `foldedCorner`, `smileyFace`, `ellipseRibbon*`).

To extend coverage, register a generator in
[`packages/drawing-ui/src/shapes/preset/presets.ts`](../../drawing-ui/src/shapes/preset/presets.ts).
The fixture is re-runnable
(`python3 scripts/preset-fixture/generate-preset-fixture.py`); after
import, anything still unsupported logs `Unknown preset shape:
"<name>"` once in the console.

