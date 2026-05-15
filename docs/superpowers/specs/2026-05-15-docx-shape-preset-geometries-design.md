# DOCX shape preset geometries — design

## Problem

After PR #23, DOCX `<wps:wsp>` floating text boxes import and render
correctly when their `<a:prstGeom prst="…">` is `rect` / `roundRect`. For
every other preset value the importer parses the name onto
`shapeProperties.presetGeometry` correctly, but the renderer always paints
a plain `Rect`. In `全格式.docx` Autoshapes section that means 6 shapes
(`ellipse`, `5-pointed star`, `heart`, `right arrow`, `diamond`,
`flowChartProcess`) and 7 WordArt shapes all render as identical
rectangles with the shape's fill / stroke applied — visually wrong, and
already noted as the next follow-up in `IMPORT_NOTES.md`.

The fixture `全格式.docx` uses 22 distinct `prst` values; the OOXML spec
defines ~187 in total. Implementing every preset path from
`presetShapeDefinitions.xml` is weeks of work and entirely off the value
curve for what's effectively a "render the file the user opened" feature.

## Decision: vendor `aiden0z/pptx-renderer` preset path generators

Instead of writing preset path math from scratch, vendor the relevant
files from [aiden0z/pptx-renderer](https://github.com/aiden0z/pptx-renderer)
(Apache-2.0). It provides:

- `src/shapes/presets.ts` — single 213 KB file, 154 preset generators each
  shaped `(w, h, adjustments?) => string` returning an SVG `d` attribute
- `src/shapes/shapeArc.ts` — 45-line dependency-free helper for elliptic
  arcs
- A built-in `getPresetShapePath(name, w, h, adj?)` entry that
  case-normalises and falls back to a rectangle for unknown presets

Coverage check against `全格式.docx`'s 22 `prst` values: 15 of 22 are
covered directly by `presets.ts` (rect, roundRect, ellipse, diamond,
heart, star5, rightArrow, sun, moon, cloud, lightningBolt, gear6,
mathPlus, flowChartProcess + 1 misc). The remaining 7 are
`smileyFace`, `actionButtonHome`, `actionButtonInformation`, and 4
`text*` WordArt variants. The four `text*` shapes are WordArt
text-warp containers whose geometry is just a rectangle — fallback is
correct. We add the three real misses (smileyFace + 2 action buttons)
to the vendored file as inline appends rather than upstream PRs, since
upstream isn't a dependency and we don't take updates.

### Why vendor and not depend?

- Single-file, no runtime dependency, no churn risk
- Apache-2.0 → permitted with NOTICE attribution (compatible with Univer's
  Apache-2.0)
- No native deps, no build step
- We will not need updates: OOXML preset definitions are frozen by ECMA-376

### Why not write our own?

154 generators × the OOXML adjustment-formula language (`*/`, `+-`,
`pin`, `cos`, `sin`, `at2` …) is multi-week work to match what aiden0z
already shipped and tested. Replicating it for the 16 fixture-relevant
shapes alone is still ~500 lines of trigonometry-heavy code, which
won't be reusable for any other preset and won't catch up to the
upstream coverage.

### Why not Path2D?

Univer's Shape pipeline (`Shape._renderPaintInOrder` →
`_renderFill` / `_renderStroke`) calls `ctx.fill()` / `ctx.stroke()`
on the current ctx path; it doesn't accept a `Path2D` argument.
Switching to `ctx.fill(path2d)` would require duplicating that pipeline
to thread the Path2D through, defeating the reuse. The fix is to keep
the path on the current ctx by tracing the SVG `d` string with
`ctx.moveTo / lineTo / arcTo / quadraticCurveTo / closePath`. The path
commands actually emitted by `presets.ts` are a tiny subset (M, L, A,
Q, Z, absolute coordinates only — verified by grep), so the tracer is
roughly 50 lines.

## Architecture

```
packages/drawing-ui/src/shapes/preset/
  presets.ts       (vendored, Apache-2.0, with NOTICE)
  shapeArc.ts      (vendored, Apache-2.0)
  trace-path.ts    (new: SVG d → ctx.* commands)
  index.ts         (re-exports `getPresetShapePath` + `tracePath`)
```

```
packages/drawing-ui/src/services/drawing-render.service.ts
  PresetGeometryRect extends Rect
    override _draw(ctx) {
      ctx.beginPath();
      tracePath(ctx, getPresetShapePath(prst, width, height));
      Shape._renderPaintInOrder(ctx, props);  // reuse fill/stroke pipeline
    }

  renderShapes() now constructs PresetGeometryRect for SHAPE drawings
  whenever shapeProperties.presetGeometry is non-rect (rect/roundRect
  short-circuit to the existing Rect to avoid touching what already works).
```

The text-overlay path is unchanged — `ClippedRichText` already sits as a
sibling object on top of whatever rect we draw, and its rotation pivot
math is independent of shape geometry.

## Adjustment values

OOXML preset shapes have adjustment knobs (e.g. roundRect's corner
radius, star5's inner radius). The importer currently doesn't parse
`<a:avLst>` adjust values for SHAPE — `parseShape` extracts geometry,
fill, stroke, bodyPr but ignores `<a:gd name="adj1" fmla="val 50000"/>`.
For this PR we keep that gap: every preset uses its built-in default
adjustment. Out of scope follow-up: parse `<a:avLst>` and pass the
`Map<string, number>` into `getPresetShapePath`.

For the fixture, `全格式.docx` has no `<a:avLst>` overrides on its
preset shapes — all defaults — so this gap is invisible to the visual
test. Will document in IMPORT_NOTES.

## Stroke and fill behaviour

The vendored generators output a closed SVG path (ending in `Z`).
Tracing that into the current ctx and calling `Shape._renderPaintInOrder`
gives us:

- fill: solid color from `<a:solidFill>` (already supported)
- stroke: color + width from `<a:ln>` + `<a:solidFill>` (already
  supported) using `nonzero` fill rule
- dash, lineCap, lineJoin, miterLimit, paintFirst: all flow through the
  existing `IShapeProps` plumbing automatically

For multi-subpath shapes (e.g. the donut-shaped action buttons we'll add)
we'll need `evenodd` fill rule. Out of scope follow-up: detect when the
shape needs `evenodd` and forward `fillRule` on the props. For now those
shapes will look slightly off (donut hole filled in) — better than a
rectangle.

## Coverage list

In scope this PR (15 + 3 added = 18 fixture-relevant geometries, plus
the 139 other vendored generators that come for free):

| `prst` | Status |
|---|---|
| rect, roundRect | already worked via plain Rect path; no change |
| ellipse, diamond, heart, star5, rightArrow, sun, moon, cloud, lightningBolt, gear6, mathPlus, flowChartProcess | covered by vendored `presets.ts` |
| smileyFace, actionButtonHome, actionButtonInformation | added inline to vendored file (closed-form math; documented as our addition in NOTICE) |
| textArchUp, textCascadeDown, textChevron, textInflate, textPlain, textWave1 | rectangle fallback (these are WordArt text-warp containers; correct as-is) |

## Tests

- Unit: `trace-path.test.ts` — feed sample paths (single-subpath M-L-Z,
  arc-bearing M-A-Z, multi-subpath M-L-Z M-L-Z) into a mock ctx,
  assert the recorded calls match expected `moveTo/lineTo/arcTo/closePath`
  sequence with correct args. Covers the full M/L/A/Q/Z command set.
- Unit: `presets.smoke.test.ts` — for each of the 18 in-scope `prst`
  names, call `getPresetShapePath(prst, 100, 60)` and assert the result
  starts with `M` and ends with `Z` (smoke; we trust the upstream tests
  for math correctness).
- Visual: import `全格式.docx`, scroll to the Autoshapes section, take
  a screenshot, compare against MS Word's rendering. Document in
  IMPORT_NOTES which shapes match Word and which deviate (e.g. donut
  buttons missing the hole).

## Files touched

| File | Change |
|---|---|
| `packages/drawing-ui/src/shapes/preset/presets.ts` | new — vendored 213 KB, Apache-2.0 header + 3 inline additions |
| `packages/drawing-ui/src/shapes/preset/shapeArc.ts` | new — vendored 45 lines, Apache-2.0 header |
| `packages/drawing-ui/src/shapes/preset/trace-path.ts` | new — ~60 lines |
| `packages/drawing-ui/src/shapes/preset/__tests__/trace-path.test.ts` | new — ~80 lines |
| `packages/drawing-ui/src/shapes/preset/__tests__/presets.smoke.test.ts` | new — ~30 lines |
| `packages/drawing-ui/src/shapes/preset/index.ts` | new — re-exports |
| `packages/drawing-ui/src/services/drawing-render.service.ts` | modified — add `PresetGeometryRect`, dispatch in `renderShapes` |
| `packages/docs-exchange/IMPORT_NOTES.md` | modified — update Stage C section: list now-supported presets, document `<a:avLst>` and `evenodd` follow-ups |
| `LICENSE` (or `NOTICE` file) | modified — add Apache-2.0 attribution for aiden0z/pptx-renderer |

## Risks

- **Vendoring 213 KB of third-party code**: The bundle size grows by
  the same amount (esbuild minification will help; `presets.ts` is
  mostly template strings + math, minifies well). For a docs renderer
  that already imports the full engine-render package, a 213 KB
  addition is in noise. Tree-shaking won't help (we genuinely use
  the whole map), but lazy-load could — out of scope for this PR.
- **License compliance**: Apache-2.0 requires preserving the copyright
  notice and the LICENSE file. We add a header comment to each vendored
  file pointing to upstream + commit SHA, and either append upstream's
  LICENSE to our `LICENSE` file or add a `NOTICE` file. Univer's repo
  already uses Apache-2.0; same license, no incompatibility.
- **Visual mismatch with Word**: aiden0z's renderings approximate Word's
  but won't be pixel-perfect. For an import flow that's acceptable — the
  user opened a Word doc and got "the right shape, the right colours, in
  the right place." Pixel-level fidelity is a different project.
- **Adjustment values gap**: Documented as out-of-scope follow-up. None
  of the fixture's shapes use non-default adjustments, so the gap is
  invisible in our visual test.

## Out of scope

- `<a:avLst>` adjustment value parsing (importer side)
- Multi-subpath fill rule detection (`evenodd` for donut-shaped presets)
- Custom geometry (`<a:custGeom>` with `<a:pathLst>`) — different code
  path, separate spec
- Gradient fills, shadow effects, 3D — orthogonal to geometry
- The 30+ `prst` values not in the fixture (still get vendored; 154
  total available "for free", but unverified by our visual test)
