# Stage B — DOCX floating text box interactivity

## Goal

Make imported `<wps:wsp>` floating text boxes feel like Word: select,
drag, 8-corner resize, rotate, delete, and double-click to edit text
inside the box. Stage A landed the static rendering; this stage adds
interactivity without touching the wider docs editor command surface.

## Scope

| Capability | Approach |
|---|---|
| **Select** (blue frame + 8 corner handles) | Reuse the image flow. `DocDrawingTransformUpdateController` already attaches a transformer to every `IDocDrawing` regardless of `drawingType`. The only missing piece is `scene.attachTransformerTo(rect)` inside `renderShapes` — currently called for `Image`, not for SHAPE. |
| **Drag / 8-corner resize** | Same controller. |
| **Delete** (Mac Backspace, others Delete) | Reuse `DeleteDocDrawingsCommand` + `DeleteDrawingsShortcutItem`. The shortcut precondition is `whenDocDrawingFocused`, which is type-agnostic — verify it activates when a SHAPE is selected. |
| **Rotate** (R2) | Importer: `parseShape` reads `<a:xfrm rot="…">` (units: 60000 ⋅ degrees) and writes `transform.angle` in degrees. Renderer: `renderShapes` passes angle to both the `Rect` and the sibling `RichText` overlay; the transformer's rotation handle is already wired. |
| **Clip overflow** (C2 — Word default) | RichText overlay clipped to the Rect's bounding box. When the box is rotated the clip path rotates with it, so we apply the clip in the overlay's local (pre-transform) coordinate space. |
| **Double-click to edit** (E1, F1) | `ShapeUpdateController` listens for `onDblclick` on the Rect and toggles RichText's built-in editing mode. In edit mode: caret visible, typing / Backspace / arrow keys / selection / copy & paste work against `textBoxContent.body`. Toolbar style buttons (bold, font size, alignment) do **not** affect text inside the box — that's Stage C. |
| **Transform sync** | `ShapeUpdateController._drawingRefreshListener` already keeps the `_TEXT` overlay aligned with the Rect when the layout pass runs; extend it to also sync `angle` and the clip rect. |

## Out of scope (Stage C / later)

- Toolbar style commands (bold, font size, alignment, color) acting on
  the textbox's text selection. Requires registering the textbox body
  as a secondary `unitId` / `subUnitId` so the doc command resolver
  routes commands to it; sizable surface area, deserves its own PR.
- `<a:spAutoFit/>` auto-grow when content exceeds the box height.
- Word's behavior of migrating the anchor paragraph when the box is
  dragged across paragraphs.
- Serializing transform changes (drag / resize / rotate) back to DOCX
  — relevant only when the round-trip exporter lands.

## Architecture decisions

1. **Reuse the image transformer plumbing.** Drawings already share a
   `IDrawingManagerService` + `DocDrawingTransformUpdateController`
   pipeline. The only branch that special-cases drawing type today is
   `DrawingRenderService.renderDrawing` (image vs. shape vs. dom).
   Everything downstream — selection, transform deltas, undo / redo —
   is shared. Keep it that way; adding interactivity is mostly a matter
   of attaching the transformer to the SHAPE's Rect.
2. **F1 first, F2 fallback.** RichText (`engine-render`) ships with a
   `editingEnabled` toggle and an internal IME input chain that
   sheets/cells already use. Spike whether it works inside docs render
   context (caret visible, keystrokes routed). If it doesn't, fall
   back to F2 — a textbox-edit controller in `docs-drawing-ui` that
   manages a transparent `contenteditable` over the overlay and forwards
   keys to a `Documents` editor instance bound to the textbox body.
3. **Clip in local coordinate space.** Canvas `clip()` paths transform
   with the current matrix. We push the Rect's pre-rotation matrix,
   clip to `(0, 0, width, height)`, then draw the RichText. This keeps
   the clip aligned with the Rect after rotation without manually
   computing the rotated bounding polygon.

## Components

### `parseShape` (`packages/docs-exchange/src/utils/parse/parse-drawing.ts`)

Add `rot` extraction:

```ts
const rot = Number(xfrm?.attributes?.rot ?? '0');
const angle = rot ? rot / 60000 : undefined;  // 60000ths-of-a-degree → degrees
// thread `angle` into the emitted IDrawingTransform
```

### `renderShapes` (`packages/drawing-ui/src/services/drawing-render.service.ts`)

```ts
const rect = new Rect(shapeKey, { ...transform, angle, fill, stroke, strokeWidth });
scene.addObject(rect, DRAWING_OBJECT_LAYER_INDEX);
if (this._drawingManagerService.getDrawingEditable()) {
    scene.attachTransformerTo(rect);   // NEW — was image-only
}
if (textBoxContent) {
    const overlay = this._buildShapeTextOverlay(...);
    overlay.angle = angle;             // NEW
    overlay.setClip({ left: transform.left, top: transform.top,
                       width: transform.width, height: transform.height,
                       rotateWithParent: true });   // NEW
    scene.addObject(overlay, DRAWING_OBJECT_LAYER_INDEX);
}
```

`setClip` API is the open question — if engine-render's `BaseObject` has
no equivalent, we add one (a 4-tuple + a `_drawClip` helper called
before `_draw`).

### `ShapeUpdateController` (`packages/drawing-ui/src/controllers/shape-update.controller.ts`)

Extend `_drawingRefreshListener` to also sync `angle` and the overlay's
clip rect when refreshTransform fires.

Add `_drawingDblclickListener`: subscribe (or, if scene events aren't
already exposed at this layer, hook the Rect's `onDblclick$`) and on
fire:

```ts
const overlay = scene.getObject(`${shapeKey}${SHAPE_TEXT_OVERLAY_SUFFIX}`);
if (overlay instanceof RichText) {
    overlay.editingEnabled = true;     // F1 spike target
    overlay.focus();                   // place caret at click point if API exists
}
```

Exit on Esc / outside-click — RichText's internal editor likely owns
this; verify in the spike.

### Delete shortcut precondition

`whenDocDrawingFocused` (in `docs-drawing-ui/.../shortcuts/`) checks
the focused-drawings list, which is type-agnostic. Should already work
for SHAPE; add a unit test if not covered.

## Data flow

```
user dblclick on Rect
  → Rect onDblclick$
  → ShapeUpdateController catches it, finds sibling _TEXT overlay
  → overlay.editingEnabled = true        (F1)
  → user types
  → RichText internal editor mutates textBoxContent.body
  → next render pass repaints overlay
user drags handle
  → transformer emits change
  → DocDrawingTransformUpdateController dispatches transform mutation
  → IDrawingManagerService.refreshTransform$ fires
  → drawing-update.controller updates Rect (existing)
  → ShapeUpdateController._drawingRefreshListener updates overlay
    position / size / angle / clip (Stage A position+size; Stage B adds
    angle + clip)
user presses Delete
  → DeleteDrawingsShortcutItem (precondition: whenDocDrawingFocused)
  → DeleteDocDrawingsCommand → RemoveDocDrawingCommand
  → drawing model removes; scene drops Rect + overlay
```

## Testing

- **Unit:** importer test for `<a:xfrm rot>` extraction; ShapeUpdate
  controller test for refreshTransform sync of angle + clip.
- **E2E (manual):** import `全格式.docx`, then for each text box on the
  WordArt page:
  1. Click box — selection handles appear.
  2. Drag — box moves, text overlay follows in lockstep.
  3. Resize from a corner — box and text both scale; text wraps to new
     width.
  4. Rotate — box and text rotate together; clip stays aligned.
  5. Delete — both Rect and overlay disappear; undo restores.
  6. Double-click — caret appears inside box; typing extends text;
     Esc exits.

## Risks and unknowns

1. **F1 (RichText built-in editor) in docs context.** Highest unknown.
   Spike target for the first session. If editor doesn't initialize or
   key events don't route, fall back to F2 (custom contenteditable +
   Documents instance) — adds ~2 days.
2. **Clip after rotation.** Canvas clip path transforms with the
   current matrix; pushing the rect's local matrix and clipping to
   `(0, 0, w, h)` should "just work," but engine-render's clip API
   surface is unverified. Worst case: implement clipping in `_draw` of
   a small RichText subclass.
3. **Dblclick vs. drag.** Transformer listens to mousedown; we need
   the dblclick to fire before any drag intent is committed. If they
   conflict, swallow mousedown on the second click within
   `dblclick_threshold_ms`.
4. **Selection-induced overlay z-order.** With selection, the
   transformer paints on top of the overlay; should be fine because the
   transformer is on a higher scene layer.

## Validation plan

1. Spike F1 (RichText editor in docs context) in the first session.
   Result decides E1 implementation path.
2. After spike, implement transform + rotate + clip + delete in one
   commit — these all share the renderShapes / refreshListener
   touchpoint.
3. Implement double-click edit in a second commit. Easier to revert
   if F1 turns out to have hidden issues.
4. Update `IMPORT_NOTES.md` reflecting the new state.
5. Open PR.

## File map

| File | Change |
|---|---|
| `packages/docs-exchange/src/utils/parse/parse-drawing.ts` | Extract `<a:xfrm rot>` → `transform.angle`. |
| `packages/drawing-ui/src/services/drawing-render.service.ts` | `renderShapes`: pass angle, attach transformer, set overlay clip. |
| `packages/drawing-ui/src/controllers/shape-update.controller.ts` | `_drawingRefreshListener`: sync angle + clip. New `_drawingDblclickListener`. |
| `packages/engine-render/src/shape/rich-text.ts` (maybe) | Expose `editingEnabled` / `setClip` if not already public. |
| `packages/docs-exchange/IMPORT_NOTES.md` | Remove "Interactivity" from Stage B Out-of-Scope; document Stage C scope. |
| `packages/docs-exchange/src/__tests__/parse-drawing.test.ts` | Add rot extraction case. |
