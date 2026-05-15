# Stage C — DOCX floating text box text editing

## Goal

Make text inside DOCX-imported floating / inline text boxes (`DRAWING_SHAPE` with `textBoxContent`) editable: cursor, IME input, selection, copy/paste, undo/redo, and toolbar formatting (font / size / color / bold / alignment / etc).

Interaction model matches Word: double-click to enter edit mode, Esc / outside-click to exit. Within edit mode the user is editing the textbox's body, not the parent document body. Selection cannot cross between the parent body and the textbox body — they are separate "stories" per ECMA-376 §17.17.

Stage A (PR #22) imported the body. Stage B Phase 1 (PR #23) added selection / drag / resize / rotate / delete on the shape itself. This stage finally lets the user type into the box.

## Scope

| In scope | Notes |
|---|---|
| Double-click to enter edit mode | Single-click stays in shape-select mode (Stage B). Esc / click-outside exits. |
| Cursor, keyboard input, IME | Reuses docs `KeyboardEventListener` via shared selection/segment infrastructure. |
| Selection within textbox body | Reuses `IDocSelectionManagerService` with `segmentId = drawingId`. |
| Copy / paste / cut, undo / redo | Reuses standard docs commands and `RichTextEditingMutation` undo stack. |
| Toolbar formatting commands (bold, font, size, color, paragraph alignment) | The existing menu items already gate by `viewModel.getEditArea()`; we extend the gate to recognise `TEXT_BOX`. |
| Inline (`<wp:inline>`) and floating (`<wp:anchor>`) textboxes both editable | No code-path divergence: both end up as `DRAWING_SHAPE` with `textBoxContent`. |

## Out of scope (separate work)

- `<a:spAutoFit/>` auto-grow the textbox when content overflows. Currently we clip overflow per Word's no-spAutoFit default.
- Editing nested tables / images / hyperlinks inside a textbox. The data model can carry them today, but the layout / interaction surface is much larger and not needed for parity.
- Editing while the textbox is rotated. We exit-edit before applying transformer rotation in Stage B; we keep that constraint and disable double-click-into-edit when `transform.angle !== 0` (or rotate the IME container with the shape — Phase 2).
- Serializing edits back to DOCX. Belongs to the round-trip exporter, which is a separate workstream.
- Entering edit mode on a textbox that has no `textBoxContent` (DOCX shape with only `<a:prstGeom>` background, no body). Word still lets you "Add Text" but Stage C only edits boxes that already have a body.
- Routing keyboard shortcuts that aren't text-editing (page break, table insertion) inside a textbox. They no-op or beep.

## Architecture decisions

### Reference: OnlyOffice (AGPL-3.0 — read for ideas, not code)

We confirmed by reading `word/Editor/DocumentContent.js` and `common/Drawings/Format/Shape.js` (commit `cb8a5e6` of `ONLYOFFICE/sdkjs`) that OnlyOffice models textbox content as **another instance of its general `CDocumentContent` class**, not a specialized subclass. A `CShape` holds a `CDocumentContent` via `setTextBoxContent(...)`; selection state is per-instance; the history stack is shared at the document level. We adopt the **same separation** in Univer's vocabulary.

Invariants this preserves:
- **Selection is scoped to one story at a time** (matching ECMA-376 §17.17 and Word UX — confirmed by direct testing in Word)
- **One shared command bus / undo stack**, so Ctrl+Z in textbox edits can be replayed alongside body edits in the order they happened
- **Stylesheets, theme colors, numbering registries are shared**, so a textbox paragraph honours the document's themed styles

### How Univer expresses this

Univer's `DocumentViewModel` already holds **child `DocumentViewModel` instances for headers and footers** (`_headerTreeMap` / `_footerTreeMap`). `getSelfOrHeaderFooterViewModel(segmentId)` resolves a segment id to its view-model. This is structurally equivalent to OnlyOffice's "many `CDocumentContent` instances per `CDocument`".

We extend the same pattern: add `_textBoxTreeMap: Map<string, DocumentViewModel>` keyed by `drawingId`. The textbox body becomes another peer `DocumentViewModel`, instantiated lazily on import. `getSelfOr*ViewModel(segmentId)` becomes `getSelfOrSegmentViewModel(segmentId)` checking all three maps in order.

This means there is **no new "mini editor" class** and **no second `Documents` render-component instance**. The textbox body uses the same view-model + skeleton layer + render layer machinery as headers/footers — it's an additional instance of the *same* class.

### Why not a separate `Documents` render component

An earlier draft considered creating a `Documents` instance per textbox to render the embedded body. We rejected this because:

1. Univer's existing pattern (header/footer/table cell) is "one render component, many sub-view-models", and we reuse it
2. Two render components mean two separate selection-render services, hit-test pipelines, and IME plumbing — none of those reuse cleanly across instance boundaries
3. The data flow (segment id, command bus, undo stack) and the render flow are **independent decisions**. We share data flow infrastructure regardless. If we then duplicated the render component, we'd be paying complexity cost without architectural benefit.

### Edit lifecycle

The current rendering uses `ClippedRichText` (a read-only render object the `DrawingRenderService` adds to the scene). Edit mode replaces this with the shared docs render path:

| State | Active renderer for textbox body | Selection segment | Where keystrokes land |
|---|---|---|---|
| **View** (after import, no interaction) | `ClippedRichText` overlay (Stage B) | n/a | (no edit) |
| **Shape selected** (single click) | `ClippedRichText` (Stage B) + transformer handles | n/a | (no edit) |
| **Edit** (double click) | Removed `ClippedRichText`; main `Documents` render-component draws the textbox sub-skeleton at the drawing's coordinate | `drawingId` | InsertCommand → `RichTextEditingMutation` on `documentData.drawings[drawingId].textBoxContent.body` |

The transition handlers live in a new `TextBoxEditController` in `@univerjs/docs-drawing-ui`.

### Selection invariant: stories don't merge

Word's stories don't share selection ranges. We enforce this in two complementary places, mirroring how header/footer already work:

1. **Hit-test priority**: in edit mode, hit-test against the textbox sub-skeleton first; outside the textbox bounds the hit returns to the parent body, which `TextBoxEditController` interprets as "exit edit".
2. **Selection range scoping**: `IDocSelectionManagerService` already carries `segmentId` per range and refuses to merge ranges from different segments. No code change required on the selection service.

## Components

### `engine-render` — view-model & layout (≈ 80 LOC)

**File: `packages/core/src/docs/data-model/document-data-model.ts`** (added during plan review — see "Reasoning correction" below)
- Add `textBoxModelMap: Map<string, DocumentDataModel>` peer to `headerModelMap` / `footerModelMap`
- Extend `_initializeHeaderFooterModel` to also init textbox sub-data-models from `documentData.drawings[id].textBoxContent.body`
- Extend `apply()`'s rebuild trigger to fire when actions touch `drawings`, so textbox sub-models stay in sync with parent snapshot replacement
- Extend `getSelfOrHeaderFooterModel` (or add `getSelfOrSegmentModel` peer) so callers can resolve a textbox segmentId to the sub-model

**File: `packages/engine-render/src/components/docs/view-model/document-view-model.ts`**
- Add `DocumentEditArea.TEXT_BOX = 'TEXT_BOX'`
- Add `_textBoxTreeMap: Map<string, DocumentViewModel>`
- Add a new method `getSelfOrSegmentViewModel(segmentId)` that checks all three maps (header / footer / textbox). **Keep the existing `getSelfOrHeaderFooterViewModel` non-delegating** so its 12+ callers preserve their original "header/footer-only" contract — see "Reasoning correction" below.
- Build textbox sub-view-models in `_buildHeaderFooterViewModel` (rename to `_buildSegmentViewModels`) by reading `_documentDataModel.textBoxModelMap`. Sub data-model rebuilds in core handle the synchronization; we just rebuild the view-model map alongside header/footer when `apply()` rebuilds the data-model maps.

### Reasoning correction (added during plan review)

The first draft of this spec underestimated how header/footer sub-models stay in sync with the parent. They are NOT just "view-model wrappers around a body reference" — they are full sub-`DocumentDataModel` instances stored on the parent (`headerModelMap` in core), and the parent's `apply()` clears + rebuilds the entire map whenever a mutation touches `headers` / `footers` (because `JSONX.apply` is immutable and replaces sub-trees, leaving any cached body reference stale).

Textbox bodies need the same treatment: a parallel `textBoxModelMap` in `core/DocumentDataModel`, rebuilt whenever a mutation touches `drawings`. Otherwise the first edit would leave the sub-view-model pointing at a stale body and subsequent edits would not render.

Also, **the legacy `getSelfOrHeaderFooterViewModel` must NOT delegate to the new method** even though that initially seemed cleaner. Delegating would change its return value for any caller that ever sees a drawingId (currently impossible because no caller passes drawingIds, but coupling the contracts means a future segmentId convention change in textbox-aware code would silently leak into the 12+ legacy callers). Keep the contracts independent.

**File: `packages/engine-render/src/basics/i-document-skeleton-cached.ts`**
- Add `IDocumentSkeletonDrawing.bodySke?: IDocumentSkeletonHeaderFooter` (reuses the same shape as headers/footers)

**File: `packages/engine-render/src/components/docs/layout/model/page.ts`**
- Mirror the `_createSkeletonHeaderFooter` flow for textboxes, populating `IDocumentSkeletonDrawing.bodySke` from the textbox sub-view-model

### `engine-render` — rendering (≈ 150 LOC)

**File: `packages/engine-render/src/components/docs/document.ts`**
- Extract a shared `_drawSegmentBody(page, ctx, ...)` helper from the existing 150-line `_drawHeaderFooter` (lines ~1022-1180). The shared body does the section / column / line / glyph / extension iteration; the header-specific half-clip at `pageHeight/2` and the textbox-specific drawing-rect translation+rotation are passed in as parameters.
- Call sites:
  - Existing header / footer pass keeps using the helper, dropping ~50 LOC of duplicated section iteration.
  - New pass iterates `page.skeDrawings` and, for each drawing with `bodySke` and `EditArea.TEXT_BOX`, translates to the drawing's `(aLeft, aTop)`, rotates by `angle`, then calls `_drawSegmentBody`. The shape's preset background (fill / stroke) keeps rendering via `DrawingRenderService` — only the textbox text moves to this pass.
- Net change is roughly +180 LOC for the new path and -50 LOC of header/footer dedup; ~130 LOC net production-code growth in this file.

### `docs` — command path resolution (≈ 15 LOC)

**File: `packages/docs/src/utils/custom-range-factory.ts`**
- `getRichTextEditPath` adds a third branch:
  ```ts
  if (drawings?.[segmentId]?.textBoxContent != null) {
    return ['drawings', segmentId, 'textBoxContent', 'body'];
  }
  ```

### `docs-drawing-ui` — edit lifecycle controller (≈ 150 LOC)

**File: `packages/docs-drawing-ui/src/controllers/text-box-edit.controller.ts` (new)**
- Listen to double-click on shape (existing scene event from Stage B)
- On enter: `viewModel.setEditArea(EditArea.TEXT_BOX)`, `docSelectionRenderService.setSegment(drawingId)`, place initial cursor at end of textbox body, hide `ClippedRichText` text content (background/border still rendered by `DrawingRenderService`), trigger re-layout so `bodySke` populates
- On exit (Esc, outside-click, transformer engaged, document closed): `setEditArea(BODY)`, `setSegment('')`, restore `ClippedRichText` text content
- Edit mode and shape transformer mode are mutually exclusive — entering one cancels the other

### `docs-ui` — toolbar gating (≈ 10 LOC)

**File: `packages/docs-ui/src/menu/menu.ts`**
- The existing `editArea === HEADER || editArea === FOOTER` gate at line 95 (and similar in other menu items) is loosened to "any non-empty editArea where edit is permitted". This naturally enables font/size/color/bold/alignment toolbar items inside textbox edit mode.

### `docs-exchange` — already done

The importer already sets `textBoxContent.body` on `DRAWING_SHAPE` (PR #22). No changes needed.

## Data flow

```
double-click textbox at (x, y)
  → TextBoxEditController.enterEdit(drawingId)
    → viewModel.setEditArea(EditArea.TEXT_BOX)
    → docSelectionRenderService.setSegment(drawingId)
    → viewModel ensures `_textBoxTreeMap.has(drawingId)`; instantiates if missing
    → triggers layout pass: page.skeDrawings[drawingId].bodySke populated
    → main Documents render component draws the body inside the drawing rect
    → cursor placed at end of body

user types "a"
  → standard docs KeyboardEventListener catches keystroke
  → InsertCommand executes
  → custom-range-factory.getRichTextEditPath(unitId, drawingId)
    returns ['drawings', drawingId, 'textBoxContent', 'body']
  → RichTextEditingMutation applies jsonX op at that path
  → DocumentViewModel re-syncs from the mutated DocumentDataModel
  → layout invalidated for that drawing only; page re-laid; render
  → cursor advances

user clicks "Bold" toolbar
  → menu.ts: editArea === TEXT_BOX, item is enabled
  → SetTextRunStyle command executes against current selection (segmentId=drawingId)
  → mutation routes through getRichTextEditPath as above

user presses Esc
  → TextBoxEditController.exitEdit(drawingId)
    → viewModel.setEditArea(EditArea.BODY)
    → docSelectionRenderService.setSegment('')
    → main Documents stops rendering this textbox's body (skeDrawings entry's bodySke
      is stale but not drawn outside edit mode)
    → ClippedRichText overlay re-renders the static text preview
```

## Risks and unknowns

1. **`DrawingRenderService` and `Documents` race for the same pixels.** Currently `DrawingRenderService` adds the shape (background + `ClippedRichText` text) as a scene object at `DRAWING_OBJECT_LAYER_INDEX`. The main `Documents` render component is at a different (lower) layer. In edit mode the text rendering moves to `Documents`, but the shape background stays in `DrawingRenderService`'s layer. We need to confirm draw order doesn't end up with the shape background on top of the live cursor. Likely needs a small z-order adjustment: in edit mode, lift the text portion to the same layer as the shape background.

2. **IME composition over a Canvas-rendered textbox.** Univer's docs IME path attaches a hidden `<textarea>` near the cursor. The cursor coordinates depend on `IDocSelectionRenderService`'s ability to project a textbox-space position to screen coordinates accounting for the drawing's transform (translation + rotation). We need to verify this projection respects `transform.angle` for rotated textboxes (or fall back to disallowing edit on rotated textboxes for Stage C).

3. **`<wp:inline>` textboxes inside a paragraph.** The textbox sits in the line as one glyph slot. Layout invalidation when the textbox's body changes height may need to re-flow the surrounding paragraph. We should test inline textbox edit and confirm the paragraph re-flows correctly.

4. **Toolbar items that don't make sense in textbox context.** Page break, section break, table-of-contents, header/footer toggles. We disable them by extending their respective `editArea`-based gates — this is a finite list (under 10 items), enumerated during implementation.

5. **`ClippedRichText` is bound to a different IRichTextProps than what the live edit pass needs.** Add an "edit mode" flag on `ClippedRichText`: when on, the overlay still draws the shape background but skips its text content (which the main `Documents` is now rendering via the new `_drawSegmentBody` pass).

6. **Collaborative edits on the same textbox by multiple users.** All edits go through `RichTextEditingMutation` on the `['drawings', id, 'textBoxContent', 'body']` jsonX path, so they hit the same OT pipeline used for body / header / footer edits. The hot case is two users editing the same textbox concurrently (vs editing different textboxes — those don't conflict). **Action**: confirm during implementation that the existing collab integration tests cover concurrent edits to a sub-segment (header/footer is the closest existing analogue); file a follow-up issue if not. Stage C does not add new collab semantics.

7. **`_textBoxTreeMap` invalidation when drawings mutate outside edit mode.** Stage B already lets the user drag / resize / delete a shape — when a shape is deleted, its textbox sub-view-model must be evicted from the map (otherwise edit mode could re-enter a phantom segment). Subscribed to `documentData` drawing-mutation events at view-model construction; tested under "delete drawing while another tab/user is editing it" path in validation.

8. **Read-only / permission mode.** When the user lacks edit permission (read-only doc, comment-only mode, locked drawing), double-click on a textbox must NOT enter edit mode. `TextBoxEditController.enterEdit` queries the same `IPermissionService` predicate that already gates body editing; falls through to "no-op + no-op cursor" if permission denied.

## Validation plan

**Manual tests** (all in dev server). Each numbered test names the risk it exercises and the success criterion.

1. **Happy path edit.** Import `examples/local/全格式.docx` with its three floating textboxes → double-click into one → cursor visible → type "hello" → text appears → Esc → preview shows "hello" appended.
2. **Toolbar formatting.** Same fixture, double-click → drag-select a sentence → click "Bold" → text becomes bold; click "Font size" 24 → size jumps; click "Color: red" → red. Open `documentData.drawings[id].textBoxContent.body.textRuns` and confirm the styles landed on the correct range.
3. **Cross-story copy/paste.** Same fixture, double-click textbox → Ctrl+A → Ctrl+C → click outside → cursor in main body → Ctrl+V → pasted text matches and is now in the main body's `body.dataStream`, not the textbox.
4. **Undo / redo.** Double-click → type "abc" → Ctrl+Z → "ab" → Ctrl+Z → "a" → Ctrl+Z → "" → Ctrl+Shift+Z three times → "abc" restored. `RichTextEditingMutation` records all four steps as separate undo entries on the shared stack.
5. **Inline textbox reflow** (exercises Risk 3). Build a small fixture with `<wp:inline>` textbox → enter edit → type until the textbox grows by one line → **success criterion**: the surrounding paragraph's baseline shifts down by exactly the line-height delta, no overlapping text.
6. **IME composition.** Inside a textbox, switch to Chinese pinyin → type "ni hao" → composition popup appears at the cursor → confirm "你好" is committed to `textBoxContent.body.dataStream`.
7. **Single-click vs double-click discrimination.** Single click on textbox body → shape selected (Stage B), no cursor. Double-click → edit mode, cursor visible.
8. **Edit-mode / transformer mutex.** While in edit mode, transformer handles must be hidden. Single click on outside → exits edit AND immediately makes outside-click target the next active selection.
9. **Z-order under cursor** (exercises Risk 1). Set the textbox to a dark fill color, set cursor color to default. Enter edit. **Success criterion**: cursor is visible above the fill at all zoom levels (50%, 100%, 200%).
10. **Rotated textbox** (exercises Risk 2). Apply 45° rotation via Stage B transformer, then double-click. **Success criterion (Stage C scope)**: edit is refused, status hint shown ("Cannot edit rotated text box"). Phase 2 may lift this if IME projection is hardened.
11. **Map invalidation** (exercises Risk 7). Open document with two textboxes → enter edit on textbox A → undo a previous insert (or delete the drawing via shape-delete in another open browser tab if collab is on) → drawing A is removed. **Success criterion**: edit mode exits cleanly, no console error, no leaked entry in `_textBoxTreeMap` after the delete mutation lands. Same-tab undo is the primary repro; multi-tab is a secondary check if collab is enabled.
12. **Read-only mode** (exercises Risk 8). Open the same fixture in a permission-restricted unit (e.g. `permission.canEdit = false`) → double-click textbox. **Success criterion**: no edit mode entered, no cursor placed, status quo preserved.
13. **Snapshot inspection.** After tests 1–6, dump the resulting `documentData.drawings[id].textBoxContent.body` and verify `dataStream`, `paragraphs`, `textRuns` shape matches expectation.

**Unit tests**:
- `getRichTextEditPath` returns the textbox path for a drawing segment id, returns headers/footers paths unchanged
- `DocumentViewModel.getSelfOrSegmentViewModel(drawingId)` resolves to the textbox sub-view-model when present, falls back to self otherwise
- `_textBoxTreeMap` is rebuilt on `documentData` reset, doesn't leak instances across docs, and removes entries when their drawing is deleted via `RichTextEditingMutation`

## File map

| Path | Change |
|---|---|
| `packages/engine-render/src/components/docs/view-model/document-view-model.ts` | Add `EditArea.TEXT_BOX`, `_textBoxTreeMap`, new method `getSelfOrSegmentViewModel`. Existing `getSelfOrHeaderFooterViewModel` stays as a thin wrapper — no rename, no caller churn. |
| `packages/engine-render/src/basics/i-document-skeleton-cached.ts` | Add `IDocumentSkeletonDrawing.bodySke?`. |
| `packages/engine-render/src/components/docs/layout/model/page.ts` | Populate `bodySke` for drawings during layout. |
| `packages/engine-render/src/components/docs/document.ts` | Render textbox body sub-skeleton during `_drawHeaderFooter`-equivalent pass. |
| `packages/docs/src/utils/custom-range-factory.ts` | `getRichTextEditPath` adds drawing branch. |
| `packages/docs-drawing-ui/src/controllers/text-box-edit.controller.ts` (new) | Edit lifecycle, hit-test routing, shape↔edit mode mutex. |
| `packages/docs-drawing-ui/src/index.ts` (or controller registry) | Register the new controller. |
| `packages/docs-ui/src/menu/menu.ts` | Loosen edit-area gate on font/style/alignment items. |
| `packages/drawing-ui/src/services/drawing-render.service.ts` | `ClippedRichText` honours an "edit mode" flag (skip text content draw, keep shape background). |
| `packages/docs-exchange/IMPORT_NOTES.md` | Document the new edit capability. |

Approx total before dedup of the `_drawHeaderFooter` extraction: ~80 (view-model) + 15 (path) + 180 (rendering, includes ~50 of dedup churn) + 150 (controller) + 10 (menu) + 30 (overlay flag) + 30 (importer touchups / IMPORT_NOTES) ≈ **~500 LOC of production code**, **~100 LOC of tests**. The earlier "~300 LOC" figure was pre-rendering-revision; this updated tally is the planning baseline.

## Why this is the design we ship (not the others we considered)

- **Approach we chose (sub-`DocumentViewModel` instances, segmentId routing)**: the path of least invention — extends the exact mechanism Univer already uses for headers and footers. Selection scoping, undo grouping, and command routing come for free.
- **Mini `Documents` render component per textbox**: the data flow is identical, but the render path forks. We pay duplication cost (selection-render service per instance, hit-test pipeline per instance) for no architectural benefit.
- **Extend layout to make textbox body part of the parent skeleton tree (not a sub-view-model)**: would let selection cross the textbox boundary, contradicting Word UX (verified directly in Word: Shift+arrow does not cross textbox). Also conflates "story" with "frame" in a way ECMA-376 §17.17 does not permit.
- **DOM `contenteditable` overlay positioned over the canvas**: the OLE-frame approach. Rejected because Univer is canvas-first end-to-end (sheet cell editing also keeps the cell on canvas); a DOM overlay would diverge from the rest of the editing UX, lose IME consistency with the body, and re-implement layout in two places.

## Decisions resolved during spec review

The following were posed as open questions in the first draft of this spec and have been resolved before implementation begins.

1. **`_textBoxTreeMap` lives on `DocumentViewModel`.** Co-locates with `_headerTreeMap` / `_footerTreeMap`. Other consumers (drawing-ui, docs-drawing-ui) reach it via `getSelfOrSegmentViewModel(drawingId)` — they already depend on the view-model elsewhere, so no new inter-package coupling is introduced. A separate `ITextBoxRegistry` would have made textbox a special case across two paths instead of one, and would have left header/footer/textbox lookups in three places.
2. **Ship behind a config flag `documentDrawingTextEdit`.** Defaults `false` for the release that merges Stage C. Flips to `true` one release later, after we've collected feedback. The flag wraps the new code paths in `TextBoxEditController`, `_drawSegmentBody` for textboxes, and the `getRichTextEditPath` drawing branch — when off, behaviour is identical to current Stage B (read-only `ClippedRichText` overlay).
