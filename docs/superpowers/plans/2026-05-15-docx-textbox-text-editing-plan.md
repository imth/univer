# Stage C — DOCX text box text editing — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make text inside DOCX-imported floating / inline text boxes editable: cursor, IME input, selection, copy/paste, undo/redo, toolbar formatting. Double-click to enter edit; Esc / outside-click to exit. Selection cannot cross between parent body and textbox body — they are separate "stories" per ECMA-376 §17.17.

**Architecture:** Reuse Univer's existing **sub-`DocumentDataModel` per segment** pattern (used today for headers / footers via `headerModelMap` / `footerModelMap` on `DocumentDataModel`, with `_headerTreeMap` / `_footerTreeMap` mirrors on `DocumentViewModel`). Add a parallel `textBoxModelMap` keyed by `drawingId` and a parallel `_textBoxTreeMap`. Path resolution (`getRichTextEditPath`) gets a third branch routing edits to `documentData.drawings[id].textBoxContent.body`. Render moves textbox text from the read-only `ClippedRichText` overlay to the main `Documents` render component (a new `_drawSegmentBody` helper, extracted from `_drawHeaderFooter`). The overlay keeps drawing the shape background so `DrawingRenderService` and `Documents` render different layers, never the same pixels twice.

**Synchronization model (important):** `RichTextEditingMutation` calls `documentDataModel.apply(actions)` then `documentViewModel.reset(documentDataModel)` after every edit (see `packages/docs/src/commands/mutations/core-editing.mutation.ts:100-103`). The view-model `reset()` rebuilds `_headerTreeMap` / `_footerTreeMap` (and our new `_textBoxTreeMap`) from the data-model's sub-model maps. This is the canonical synchronization point — we do NOT introduce any subscription or new sync mechanism. Mirroring the header/footer wiring exactly ensures textbox edits behave identically to header/footer edits in production today.

**Tech Stack:** TypeScript, RxJS (Univer's reactive style), Vitest (unit tests), pnpm workspaces. Packages touched: `@univerjs/core`, `@univerjs/engine-render`, `@univerjs/docs`, `@univerjs/docs-ui`, `@univerjs/drawing-ui`, `@univerjs/docs-drawing-ui`, `@univerjs/docs-exchange`.

**Spec:** `docs/superpowers/specs/2026-05-15-docx-textbox-text-editing-design.md`. Read it before starting. The spec was revised mid-planning when reviewer surfaced the synthetic-model staleness risk; the relevant section is "Reasoning correction (added during plan review)".

**Branch:** `feat/docx-textbox-text-editing` (already exists, branched off latest dev).

**Reviewer-OnlyOffice note:** Use the project skill `architecture-research-using-onlyoffice` if you need to look up how OnlyOffice handles a specific edge case during implementation. **Do not copy code** — OnlyOffice is AGPL-3.0; Univer is Apache-2.0.

---

## File map (locked from spec; line numbers verified against current dev HEAD)

| Path | Phase | Purpose |
|---|---|---|
| `packages/core/src/docs/data-model/document-data-model.ts:235-260` | 1 | Add `textBoxModelMap`; init in `_initializeHeaderFooterModel`; dispose. |
| `packages/core/src/docs/data-model/document-data-model.ts:295` | 1 | Add `getSelfOrSegmentModel` peer to `getSelfOrHeaderFooterModel`. |
| `packages/docs/src/utils/custom-range-factory.ts:30-48` | 1 | `getRichTextEditPath` — add drawing branch. |
| `packages/engine-render/src/components/docs/view-model/document-view-model.ts:36` | 2 | Add `DocumentEditArea.TEXT_BOX`. |
| `packages/engine-render/src/components/docs/view-model/document-view-model.ts:208, 286-300, 483-497` | 2 | Add `_textBoxTreeMap`, `getSelfOrSegmentViewModel`, build textbox sub-vms in `_buildHeaderFooterViewModel`. |
| `packages/engine-render/src/basics/i-document-skeleton-cached.ts:275-289` | 3 | Add `IDocumentSkeletonDrawing.bodySke?`. |
| `packages/engine-render/src/components/docs/layout/model/page.ts:215` | 3 | Mirror `_createSkeletonHeaderFooter` for textboxes; populate `bodySke`. |
| `packages/engine-render/src/components/docs/document.ts:1022-1180` | 3 | Extract `_drawSegmentBody`; add textbox rendering pass at body draw site (~:518). |
| `packages/drawing-ui/src/services/drawing-render.service.ts:38, ~:480-527` | 4 | Add `editMode` flag to `ClippedRichText`; skip text content when on. |
| `packages/docs-drawing-ui/src/controllers/text-box-edit.controller.ts` (new) | 5 | Edit lifecycle: enter / exit / transformer mutex / rotated guard / permission guard. |
| `packages/docs-drawing-ui/src/index.ts` (controller registry) | 5 | Register `TextBoxEditController`. |
| `packages/docs-ui/src/menu/menu.ts:95` and similar gates | 6 | Loosen `editArea === HEADER || === FOOTER` to include `TEXT_BOX`; tighten incompatible items (page break, TOC). |
| `packages/core/src/services/config/...` (new flag entry) | 7 | `documentDrawingTextEdit` config flag, default false. |
| `packages/docs-exchange/IMPORT_NOTES.md` | 7 | Document the new edit capability. |

---

## Phase boundaries and rollback strategy

7 phases, each one self-contained git commit. Single PR delivers all 7. If any phase regresses something downstream, **`git revert` that phase's commit alone** restores the previous working state without touching the other phases.

| # | Phase | What's verifiable after this commit | Behavior change for users |
|---|---|---|---|
| 1 | Data-model & path resolution | Unit tests for `textBoxModelMap`, `getSelfOrSegmentModel`, `getRichTextEditPath` cover all three segments | None — new branches not yet reachable |
| 2 | View-model `_textBoxTreeMap` | Unit tests for `getSelfOrSegmentViewModel` and lifecycle | None |
| 3 | Layout + render path | Manual: with feature flag forced on in dev, import `examples/local/全格式.docx`; textbox text appears identical to current overlay; cursor doesn't render yet | None (overlay still draws the same text twice — see Phase 4 caveat) |
| 4 | `ClippedRichText` editMode flag | Manual: with flag forced on, overlay no longer paints text in textboxes; main `Documents` paints them instead; visually identical | None |
| 5 | Edit lifecycle controller | Manual tests 1, 7, 8, 10, 12 from spec. Cursor visible, double-click enters, Esc exits | **Edit works** (with feature flag on) |
| 6 | Toolbar gating | Manual tests 2, 4 from spec. Bold / size / color route into textbox | Toolbar formats textbox text |
| 7 | Config flag + docs | With flag off (default): everything reverts to Stage B. With flag on: full Stage C. | **Off by default**; users opt in |

---

## Pre-flight (do once before starting)

- [ ] **Verify branch is current.** Run:

  ```bash
  cd /Users/tanhao/Projects/univer
  git status              # expect clean working tree (untracked files OK)
  git branch --show-current   # expect: feat/docx-textbox-text-editing
  git log --oneline -1    # should show the design doc + skill commit
  ```

- [ ] **Verify dev server boots.** Run in a separate terminal:

  ```bash
  pnpm dev:docs
  ```

  Open `http://localhost:3002/docs/` and confirm the default doc renders. Leave running.

- [ ] **Verify the test fixture exists.** Run:

  ```bash
  ls examples/local/全格式.docx
  ```

  Expected: file exists (~50 KB). If missing, ask the user for an alternative DOCX with at least one floating textbox.

- [ ] **Read `@architecture-research-using-onlyoffice` skill.** Path: `.claude/skills/architecture-research-using-onlyoffice/SKILL.md`. Sets license guardrails for OnlyOffice lookups.

- [ ] **Familiarize with the header/footer pattern you'll be mirroring.** Print these four areas to confirm exact line numbers haven't drifted; they're cited verbatim in tasks below.

  ```bash
  sed -n '235,260p' packages/core/src/docs/data-model/document-data-model.ts
  sed -n '285,330p' packages/core/src/docs/data-model/document-data-model.ts
  sed -n '341,360p' packages/core/src/docs/data-model/document-data-model.ts
  sed -n '483,500p' packages/engine-render/src/components/docs/view-model/document-view-model.ts
  ```

  Note especially the existing `_buildHeaderFooterViewModel` body — task 2.2 mirrors it with one extra loop:

  ```ts
  // Verbatim current implementation (engine-render/.../document-view-model.ts:483-497)
  private _buildHeaderFooterViewModel() {
      const { headerModelMap, footerModelMap } = this._documentDataModel;
      const viewModels = [];
      for (const [headerId, headerModel] of headerModelMap) {
          this._headerTreeMap.set(headerId, new DocumentViewModel(headerModel));
          viewModels.push(this._headerTreeMap.get(headerId)!);
      }

      for (const [footerId, footerModel] of footerModelMap) {
          this._footerTreeMap.set(footerId, new DocumentViewModel(footerModel));
          viewModels.push(this._footerTreeMap.get(footerId)!);
      }

      this._segmentViewModels$.next(viewModels);
  }
  ```

  And the existing `_initializeHeaderFooterModel` (core/.../document-data-model.ts:341-359):

  ```ts
  private _initializeHeaderFooterModel() {
      const { headers, footers } = this.getSnapshot();

      if (headers) {
          for (const headerId in headers) {
              const header = headers[headerId];
              this.headerModelMap.set(headerId, new DocumentDataModel(header));
              this.headerModelMap.get(headerId)!.updateDocumentId(this.getUnitId());
          }
      }

      if (footers) {
          for (const footerId in footers) {
              const footer = footers[footerId];
              this.footerModelMap.set(footerId, new DocumentDataModel(footer));
              this.footerModelMap.get(footerId)!.updateDocumentId(this.getUnitId());
          }
      }
  }
  ```

  Tasks below extend both methods with one additional loop, mirroring the existing pattern exactly.

---

## Chunk 1: Phase 1 — Data model & path resolution

Touches: `@univerjs/core`, `@univerjs/docs`. Pure data / path manipulation, no UI surface, no behavior change. The 12+ existing `getSelfOrHeaderFooterModel` callers keep working unchanged because we **add** a new method instead of renaming.

### Task 1.1: Add `textBoxModelMap` + `getSelfOrSegmentModel` to `DocumentDataModel`

**Files:**
- Modify: `packages/core/src/docs/data-model/document-data-model.ts:235-260, 251-260, 295, 341-359`
- Test: `packages/core/src/docs/data-model/__tests__/document-modeling.integration.spec.ts` (existing — extend)

- [ ] **Step 1: Confirm `DrawingTypeEnum.DRAWING_SHAPE` exists and equals `1`.**

  ```bash
  sed -n '46,62p' packages/core/src/types/interfaces/i-drawing.ts
  ```

  Expected: `DRAWING_SHAPE = 1`. If the enum has shifted, adjust the test fixture in Step 2 to use whichever the symbolic name is.

- [ ] **Step 2: Write the failing tests.**

  Append to `packages/core/src/docs/data-model/__tests__/document-modeling.integration.spec.ts`. Use the symbolic enum name `DrawingTypeEnum.DRAWING_SHAPE` (don't write the literal `1` or any arithmetic):

  ```ts
  import { DocumentDataModel } from '../document-data-model';
  import { DrawingTypeEnum } from '../../../types/interfaces/i-drawing';

  function buildDocWithTextbox() {
      return new DocumentDataModel({
          id: 'test-doc',
          body: { dataStream: 'Body\r\n', textRuns: [], paragraphs: [{ startIndex: 5 }] },
          headers: { h1: { body: { dataStream: 'H\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } },
          footers: { f1: { body: { dataStream: 'F\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } },
          drawings: {
              tb1: {
                  unitId: 'test-doc',
                  subUnitId: 'test-doc',
                  drawingId: 'tb1',
                  drawingType: DrawingTypeEnum.DRAWING_SHAPE,
                  textBoxContent: { body: { dataStream: 'Textbox\r\n', textRuns: [], paragraphs: [{ startIndex: 8 }] } },
                  transform: { left: 0, top: 0, width: 100, height: 100, angle: 0 },
                  docTransform: { size: { width: 100, height: 100 }, positionH: { relativeFrom: 2, posOffset: 0 }, positionV: { relativeFrom: 2, posOffset: 0 }, angle: 0 },
                  layoutType: 1,
              } as any,
              imgOnly: { drawingId: 'imgOnly', drawingType: DrawingTypeEnum.DRAWING_IMAGE } as any, // no textBoxContent
          },
          drawingsOrder: ['tb1', 'imgOnly'],
          documentStyle: { pageSize: { width: 595, height: 842 } },
      });
  }

  describe('textBoxModelMap', () => {
      it('is populated for drawings with textBoxContent', () => {
          const m = buildDocWithTextbox();
          expect(m.textBoxModelMap.has('tb1')).toBe(true);
          expect(m.textBoxModelMap.get('tb1')?.getBody()?.dataStream).toContain('Textbox');
      });

      it('is NOT populated for drawings without textBoxContent (image-only)', () => {
          const m = buildDocWithTextbox();
          expect(m.textBoxModelMap.has('imgOnly')).toBe(false);
      });

      it('sub-model shares the parent unitId (matches header/footer pattern)', () => {
          const m = buildDocWithTextbox();
          expect(m.textBoxModelMap.get('tb1')!.getUnitId()).toBe(m.getUnitId());
      });
  });

  describe('getSelfOrSegmentModel', () => {
      it('returns self for empty / undefined segmentId', () => {
          const m = buildDocWithTextbox();
          expect(m.getSelfOrSegmentModel('')).toBe(m);
          expect(m.getSelfOrSegmentModel(undefined)).toBe(m);
      });

      it('returns header sub-model for a header segmentId', () => {
          expect(buildDocWithTextbox().getSelfOrSegmentModel('h1').getBody()?.dataStream).toContain('H');
      });

      it('returns footer sub-model for a footer segmentId', () => {
          expect(buildDocWithTextbox().getSelfOrSegmentModel('f1').getBody()?.dataStream).toContain('F');
      });

      it('returns textbox sub-model for a drawingId with textBoxContent', () => {
          expect(buildDocWithTextbox().getSelfOrSegmentModel('tb1').getBody()?.dataStream).toContain('Textbox');
      });

      it('returns self for a drawingId WITHOUT textBoxContent', () => {
          const m = buildDocWithTextbox();
          expect(m.getSelfOrSegmentModel('imgOnly')).toBe(m);
      });

      it('returns self for an unknown segmentId', () => {
          const m = buildDocWithTextbox();
          expect(m.getSelfOrSegmentModel('does-not-exist')).toBe(m);
      });
  });

  describe('getSelfOrHeaderFooterModel — legacy contract preserved', () => {
      it('still resolves headers and footers as before', () => {
          const m = buildDocWithTextbox();
          expect(m.getSelfOrHeaderFooterModel('h1').getBody()?.dataStream).toContain('H');
          expect(m.getSelfOrHeaderFooterModel('f1').getBody()?.dataStream).toContain('F');
      });

      it('does NOT resolve textbox segments — caller must opt in via getSelfOrSegmentModel', () => {
          const m = buildDocWithTextbox();
          expect(m.getSelfOrHeaderFooterModel('tb1')).toBe(m);
      });
  });
  ```

  **Note on what we're not testing:** we are NOT testing that `apply()` rebuilds `textBoxModelMap` after a textbox-body edit. The reason is that `RichTextEditingMutation`'s post-mutation flow always calls `documentViewModel.reset(documentDataModel)` (see `packages/docs/src/commands/mutations/core-editing.mutation.ts:103`), which in turn rebuilds the view-model's sub-tree maps from the data-model's sub-model maps. The view-model end-to-end reset is the canonical sync point — testing the data-model's apply-trigger heuristic in isolation would create a brittle coupling to ot-json1's op shape that is currently NOT load-bearing for header/footer correctness either. Mirror the existing header/footer wiring; integration is verified manually in Phase 5.

- [ ] **Step 3: Run the tests to verify they fail.**

  ```bash
  pnpm --filter @univerjs/core exec vitest run document-modeling.integration -t 'textBoxModelMap|getSelfOrSegmentModel|legacy contract preserved'
  ```

  Expected: most fail with `textBoxModelMap is not defined`, `getSelfOrSegmentModel is not a function`.

- [ ] **Step 4: Add `textBoxModelMap` declaration.**

  In `packages/core/src/docs/data-model/document-data-model.ts` after line 237 (after `footerModelMap`):

  ```ts
  textBoxModelMap: Map<string, DocumentDataModel> = new Map();
  ```

- [ ] **Step 5: Init textbox sub-models in `_initializeHeaderFooterModel`.**

  Replace the body of `_initializeHeaderFooterModel` (lines 341-359) with:

  ```ts
  private _initializeHeaderFooterModel() {
      const { headers, footers, drawings } = this.getSnapshot();

      if (headers) {
          for (const headerId in headers) {
              const header = headers[headerId];
              this.headerModelMap.set(headerId, new DocumentDataModel(header));
              this.headerModelMap.get(headerId)!.updateDocumentId(this.getUnitId());
          }
      }

      if (footers) {
          for (const footerId in footers) {
              const footer = footers[footerId];
              this.footerModelMap.set(footerId, new DocumentDataModel(footer));
              this.footerModelMap.get(footerId)!.updateDocumentId(this.getUnitId());
          }
      }

      if (drawings) {
          for (const drawingId in drawings) {
              const drawing = drawings[drawingId];
              if (drawing.textBoxContent?.body) {
                  // Textbox body is wrapped in its own DocumentDataModel so it
                  // participates in the same lifecycle as headers / footers.
                  // Mirrors the header/footer initialisation pattern above.
                  // documentStyle is forwarded so default font / locale resolve
                  // inside the textbox the same way they do in the parent body
                  // (headers/footers inherit the parent style indirectly via
                  // DocumentSkeleton; textboxes don't share that path so we
                  // pass it explicitly).
                  this.textBoxModelMap.set(
                      drawingId,
                      new DocumentDataModel({ body: drawing.textBoxContent.body, documentStyle: this.snapshot.documentStyle })
                  );
                  this.textBoxModelMap.get(drawingId)!.updateDocumentId(this.getUnitId());
              }
          }
      }
  }
  ```

  Note: we do NOT rename the method to `_initializeSegmentModels`. Renaming would touch 3 call sites for purely cosmetic gain.

- [ ] **Step 6: Extend `dispose()` to dispose textbox sub-models.**

  Locate `dispose()` at line 251 and append a textbox loop, mirroring the existing header / footer loops:

  ```ts
  override dispose() {
      super.dispose();
      this.headerModelMap.forEach((header) => {
          header.dispose();
      });

      this.footerModelMap.forEach((footer) => {
          footer.dispose();
      });

      this.textBoxModelMap.forEach((textbox) => {
          textbox.dispose();
      });

      this._name$.complete();
  }
  ```

- [ ] **Step 7: Extend the `apply()` rebuild trigger to include `drawings` actions.**

  Locate the trigger at lines 320-325 and extend it:

  ```ts
  if (actions?.some((a) => Array.isArray(a) && (a?.[0] === 'headers' || a?.[0] === 'footers' || a?.[0] === 'drawings'))) {
      this.headerModelMap.clear();
      this.footerModelMap.clear();
      this.textBoxModelMap.clear();
      this._initializeHeaderFooterModel();
  }
  ```

  **Why we extend the trigger even though the canonical sync is via `documentViewModel.reset`:** the trigger exists today for compose-form ot-json1 ops that target `headers` / `footers` (e.g., `replaceOp(['headers'], ...)` at `replace-content.command.ts:120`). Add `drawings` for symmetry — if any future code ever does a `replaceOp(['drawings'], ...)` or `removeOp(['drawings', id], ...)`, our textbox sub-models stay in sync. We do NOT rely on this trigger for the common edit-textbox-body path; that path is sync'd by the view-model reset on the next mutation. We do NOT add a unit test for the trigger because its behaviour depends on ot-json1 op shape conventions that would couple the test to library internals.

  Preserve the existing FIXME comment above this block.

- [ ] **Step 8: Add `getSelfOrSegmentModel` peer.**

  Below the existing `getSelfOrHeaderFooterModel` (around line 295), add:

  ```ts
  /**
   * Resolve a segmentId to its owning data model — body / header / footer / textbox.
   * Textbox segments use the drawingId as segmentId. Falls through to `this`
   * when the segmentId is empty or unknown.
   *
   * Distinct from `getSelfOrHeaderFooterModel`, which preserves the
   * legacy "header / footer only" contract for its 12+ callers. New
   * code that may see a textbox segmentId should use this method.
   */
  getSelfOrSegmentModel(segmentId?: string): DocumentDataModel {
      if (segmentId == null || segmentId === '') {
          return this;
      }
      if (this.headerModelMap.has(segmentId)) return this.headerModelMap.get(segmentId)!;
      if (this.footerModelMap.has(segmentId)) return this.footerModelMap.get(segmentId)!;
      if (this.textBoxModelMap.has(segmentId)) return this.textBoxModelMap.get(segmentId)!;
      return this;
  }
  ```

  **Critical:** do NOT modify `getSelfOrHeaderFooterModel`. Its 12+ callers (in `core/build-utils/`, `docs-ui/menu/`, `docs-ui/commands/`, `custom-range-factory.ts`) rely on the contract "returns this OR a header/footer sub-model, never a textbox sub-model". Coupling the methods means a future segmentId convention change in textbox-aware code silently leaks into legacy callers. Keep them independent.

- [ ] **Step 9: Run the tests to verify they pass.**

  ```bash
  pnpm --filter @univerjs/core exec vitest run document-modeling.integration -t 'textBoxModelMap|getSelfOrSegmentModel|legacy contract preserved'
  ```

  Expected: all PASS.

- [ ] **Step 10: Run the full core docs suite.**

  ```bash
  pnpm --filter @univerjs/core exec vitest run docs/data-model
  ```

  Expected: all PASS. The pre-existing `document-modeling.integration.spec.ts:106-107` test (which calls `getSelfOrHeaderFooterModel`) should still pass.

- [ ] **Step 11: Commit.**

  ```bash
  git add packages/core/src/docs/data-model/document-data-model.ts \
          packages/core/src/docs/data-model/__tests__/document-modeling.integration.spec.ts
  git -c commit.gpgsign=false commit -m "feat(core): textbox sub-DocumentDataModel via textBoxModelMap

Adds a parallel textBoxModelMap peer to headerModelMap / footerModelMap.
Each entry wraps a drawing's textBoxContent.body in its own
DocumentDataModel sharing the parent unitId, exactly mirroring the
header/footer initialisation pattern.

Extends apply()'s rebuild trigger to include 'drawings' actions for
symmetry with the existing 'headers' / 'footers' branches; the
canonical sync after an edit is documentViewModel.reset() (called
by RichTextEditingMutation.apply) rather than this heuristic.

Adds getSelfOrSegmentModel that resolves header / footer / textbox
segmentIds. The legacy getSelfOrHeaderFooterModel is preserved
unchanged so its 12+ callers keep their original 'header/footer
only' contract.

Co-Authored-By: Claude Opus 4 (1M context) <noreply@anthropic.com>"
  ```

### Task 1.2: Extend `getRichTextEditPath` with the drawing branch

**Files:**
- Modify: `packages/docs/src/utils/custom-range-factory.ts:30-48`
- Test: `packages/docs/src/utils/__tests__/custom-range-factory.spec.ts` (create if absent)

- [ ] **Step 1: Check if a test file already exists.**

  ```bash
  ls packages/docs/src/utils/__tests__/ 2>/dev/null
  ```

  If `custom-range-factory.spec.ts` exists, append. Otherwise create.

- [ ] **Step 2: Write the failing test.**

  Add (or create) the following content. Adjust imports to match your project's convention:

  ```ts
  import { describe, it, expect } from 'vitest';
  import { DocumentDataModel } from '@univerjs/core';
  import { getRichTextEditPath } from '../custom-range-factory';

  function buildModel() {
      return new DocumentDataModel({
          id: 'd',
          body: { dataStream: 'body\r\n', textRuns: [], paragraphs: [{ startIndex: 5 }] },
          headers: { h1: { body: { dataStream: 'h\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } },
          footers: { f1: { body: { dataStream: 'f\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } },
          drawings: { tb1: { drawingId: 'tb1', textBoxContent: { body: { dataStream: 't\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } } as any },
          drawingsOrder: ['tb1'],
          documentStyle: {},
      });
  }

  describe('getRichTextEditPath', () => {
      it('returns body path when segmentId is empty', () => {
          expect(getRichTextEditPath(buildModel(), '')).toEqual(['body']);
          expect(getRichTextEditPath(buildModel())).toEqual(['body']);
      });

      it('returns headers path for a header segmentId', () => {
          expect(getRichTextEditPath(buildModel(), 'h1')).toEqual(['headers', 'h1', 'body']);
      });

      it('returns footers path for a footer segmentId', () => {
          expect(getRichTextEditPath(buildModel(), 'f1')).toEqual(['footers', 'f1', 'body']);
      });

      it('returns drawings textBoxContent path for a textbox segmentId', () => {
          expect(getRichTextEditPath(buildModel(), 'tb1')).toEqual(['drawings', 'tb1', 'textBoxContent', 'body']);
      });

      it('throws for an unknown segmentId', () => {
          expect(() => getRichTextEditPath(buildModel(), 'nope')).toThrow();
      });
  });
  ```

- [ ] **Step 3: Run the test to verify the textbox case fails.**

  ```bash
  pnpm --filter @univerjs/docs exec vitest run custom-range-factory
  ```

  Expected: 3-of-5 PASS (body / headers / footers); textbox FAILs with `Segment id not found in headers or footers`.

- [ ] **Step 4: Implement the drawing branch.**

  Replace the body of `getRichTextEditPath` in `packages/docs/src/utils/custom-range-factory.ts`:

  ```ts
  export function getRichTextEditPath(docDataModel: DocumentDataModel, segmentId = '') {
      if (!segmentId) {
          return ['body'];
      }

      const { headers, footers, drawings } = docDataModel.getSnapshot();

      // Old code threw early when both headers and footers were null;
      // we drop that guard. Plain-body callers (no segments) hit the
      // empty-segmentId branch above and never reach here, so the
      // pre-condition was not load-bearing.

      if (headers?.[segmentId] != null) {
          return ['headers', segmentId, 'body'];
      } else if (footers?.[segmentId] != null) {
          return ['footers', segmentId, 'body'];
      } else if (drawings?.[segmentId]?.textBoxContent != null) {
          return ['drawings', segmentId, 'textBoxContent', 'body'];
      } else {
          throw new Error(`Segment id "${segmentId}" not found in headers, footers, or drawings`);
      }
  }
  ```

- [ ] **Step 5: Run the test to verify all 5 pass.**

  ```bash
  pnpm --filter @univerjs/docs exec vitest run custom-range-factory
  ```

  Expected: 5/5 PASS.

- [ ] **Step 6: Run nearby suites to confirm no regression.**

  ```bash
  pnpm --filter @univerjs/docs exec vitest run --testPathPattern='utils|build-utils'
  pnpm --filter @univerjs/core exec vitest run --testPathPattern='build-utils'
  ```

  Expected: PASS.

- [ ] **Step 7: Commit.**

  ```bash
  git add packages/docs/src/utils/custom-range-factory.ts \
          packages/docs/src/utils/__tests__/custom-range-factory.spec.ts
  git -c commit.gpgsign=false commit -m "feat(docs): route getRichTextEditPath to textbox bodies

Adds drawings[id].textBoxContent.body branch to the segment path
resolver. Body / header / footer paths unchanged. Textbox segments
use the drawingId as the segmentId convention, matching the
DocumentDataModel.textBoxModelMap key.

Drops the old 'headers == null && footers == null' early-throw —
with three lookup paths and the explicit empty-segmentId branch
already covering plain-body callers, it was no longer load-bearing.

Co-Authored-By: Claude Opus 4 (1M context) <noreply@anthropic.com>"
  ```

### Phase 1 verification

After both tasks complete:

- [ ] **Sanity check — no behavior changes shipped.** Run:

  ```bash
  pnpm --filter @univerjs/core --filter @univerjs/docs exec vitest run
  ```

  Expected: same green/red profile as before this phase. The new tests pass; everything else is unchanged.

- [ ] **No UI test possible yet** — the new code paths aren't called from any UI flow. That comes in Phase 5.

**Rollback test (skip if confident):** `git revert` the two phase-1 commits. Confirm tests still pass at HEAD~. Do not commit the rollback; this is just a sanity check that the phase is independent.

---

## Chunk 2: Phase 2 — View model `_textBoxTreeMap`

Touches: `@univerjs/engine-render`. Mirrors the textbox sub-model created in Phase 1 with a parallel sub-view-model, populated alongside header/footer sub-view-models in `_buildHeaderFooterViewModel`. Sync with the data-model is via the `documentViewModel.reset()` call at the end of `RichTextEditingMutation` (see Synchronization model in the header above).

### Task 2.1: Add `DocumentEditArea.TEXT_BOX` enum value

**Files:**
- Modify: `packages/engine-render/src/components/docs/view-model/document-view-model.ts:36`

- [ ] **Step 1: Add the enum value.**

  Replace the enum at line 36:

  ```ts
  export enum DocumentEditArea {
      BODY = 'BODY',
      HEADER = 'HEADER',
      FOOTER = 'FOOTER',
      TEXT_BOX = 'TEXT_BOX',
  }
  ```

- [ ] **Step 2: Confirm TypeScript compiles.**

  ```bash
  pnpm --filter @univerjs/engine-render exec tsc --noEmit
  ```

  Expected: no new type errors.

- [ ] **Step 3: No commit yet** — task 2.2 lands together. Enum-only change has nothing testable on its own.

### Task 2.2: Add `_textBoxTreeMap` and `getSelfOrSegmentViewModel`

**Files:**
- Modify: `packages/engine-render/src/components/docs/view-model/document-view-model.ts:208, 286-300, 483-497`
- Test: `packages/engine-render/src/components/docs/view-model/__tests__/document-view-model.spec.ts` (extend or create)

- [ ] **Step 1: Confirm exact line numbers haven't drifted, and pin the `segmentViewModels$` observable name.**

  ```bash
  sed -n '205,215p' packages/engine-render/src/components/docs/view-model/document-view-model.ts
  sed -n '283,300p' packages/engine-render/src/components/docs/view-model/document-view-model.ts
  sed -n '483,500p' packages/engine-render/src/components/docs/view-model/document-view-model.ts
  grep -n 'segmentViewModels\$' packages/engine-render/src/components/docs/view-model/document-view-model.ts
  ```

  Expected:
  - lines 207-208: `_headerTreeMap` and `_footerTreeMap` declarations
  - line 286: `getSelfOrHeaderFooterViewModel` start
  - lines 483-497: `_buildHeaderFooterViewModel` body
  - the grep should show both the private `_segmentViewModels$` field and a public observable next to it (likely `segmentViewModels$ = this._segmentViewModels$.asObservable()` or similar). **Use the public name** in Step 2's test. If only the private exists, use `(vm as any)._segmentViewModels$.value` — but document why in the test, and ideally raise a follow-up to expose a public stream.

  If any line numbers have moved, adjust the file:line references in subsequent steps.

- [ ] **Step 2: Write the failing tests.**

  Append to (or create) `packages/engine-render/src/components/docs/view-model/__tests__/document-view-model.spec.ts`:

  ```ts
  import { describe, it, expect } from 'vitest';
  import { DocumentDataModel } from '@univerjs/core';
  import { DocumentViewModel } from '../document-view-model';

  function buildVm() {
      const model = new DocumentDataModel({
          id: 'd',
          body: { dataStream: '\r\n', textRuns: [], paragraphs: [{ startIndex: 1 }] },
          headers: { h1: { body: { dataStream: 'h\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } },
          footers: { f1: { body: { dataStream: 'f\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } },
          drawings: {
              tb1: { drawingId: 'tb1', textBoxContent: { body: { dataStream: 't\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } } as any,
              tb2: { drawingId: 'tb2', textBoxContent: { body: { dataStream: 'x\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } } as any,
              imgOnly: { drawingId: 'imgOnly' } as any,
          },
          drawingsOrder: ['tb1', 'tb2', 'imgOnly'],
          documentStyle: {},
      });
      return new DocumentViewModel(model);
  }

  describe('getSelfOrSegmentViewModel', () => {
      it('returns self when segmentId is empty or undefined', () => {
          const vm = buildVm();
          expect(vm.getSelfOrSegmentViewModel()).toBe(vm);
          expect(vm.getSelfOrSegmentViewModel('')).toBe(vm);
      });

      it('returns the header sub-view-model for a header segmentId', () => {
          const vm = buildVm();
          expect(vm.getSelfOrSegmentViewModel('h1')).not.toBe(vm);
      });

      it('returns the footer sub-view-model for a footer segmentId', () => {
          const vm = buildVm();
          expect(vm.getSelfOrSegmentViewModel('f1')).not.toBe(vm);
      });

      it('returns a textbox sub-view-model for a drawingId with textBoxContent', () => {
          const vm = buildVm();
          const tbVm = vm.getSelfOrSegmentViewModel('tb1');
          expect(tbVm).not.toBe(vm);
          expect(tbVm).toBeInstanceOf(DocumentViewModel);
      });

      it('returns self for a drawingId WITHOUT textBoxContent', () => {
          const vm = buildVm();
          expect(vm.getSelfOrSegmentViewModel('imgOnly')).toBe(vm);
      });

      it('returns self for an unknown segmentId', () => {
          const vm = buildVm();
          expect(vm.getSelfOrSegmentViewModel('nope')).toBe(vm);
      });

      it('returns the same instance on repeated lookups (sub-view-model is cached, not re-created)', () => {
          const vm = buildVm();
          expect(vm.getSelfOrSegmentViewModel('tb1')).toBe(vm.getSelfOrSegmentViewModel('tb1'));
      });

      it('emits the textbox sub-view-model on segmentViewModels$', async () => {
          const vm = buildVm();
          const emitted = await new Promise<DocumentViewModel[]>((resolve) => {
              vm.segmentViewModels$.subscribe((vms) => resolve(vms));
          });
          // Should include header h1, footer f1, textbox tb1, textbox tb2 — but NOT imgOnly.
          expect(emitted.length).toBe(4);
      });
  });

  describe('getSelfOrHeaderFooterViewModel — legacy contract preserved', () => {
      it('still resolves headers and footers as before', () => {
          const vm = buildVm();
          expect(vm.getSelfOrHeaderFooterViewModel('h1')).toBe(vm.getSelfOrSegmentViewModel('h1'));
          expect(vm.getSelfOrHeaderFooterViewModel('f1')).toBe(vm.getSelfOrSegmentViewModel('f1'));
      });

      it('does NOT resolve textbox segments — caller must opt in via getSelfOrSegmentViewModel', () => {
          const vm = buildVm();
          expect(vm.getSelfOrHeaderFooterViewModel('tb1')).toBe(vm);
      });
  });
  ```

  *Note:* the `segmentViewModels$` test verifies the textbox VMs are pushed into the `viewModels` array that `_buildHeaderFooterViewModel` emits. If `segmentViewModels$` doesn't exist on the public surface, find the equivalent property name (search for `_segmentViewModels$` and look for the public observable next to it) and adapt.

- [ ] **Step 3: Run the tests to verify they fail.**

  ```bash
  pnpm --filter @univerjs/engine-render exec vitest run document-view-model
  ```

  Expected: most cases FAIL with `getSelfOrSegmentViewModel is not a function`.

- [ ] **Step 4: Add `_textBoxTreeMap` declaration.**

  In `packages/engine-render/src/components/docs/view-model/document-view-model.ts` after line 208 (after `_footerTreeMap`):

  ```ts
  private _textBoxTreeMap: Map<string, DocumentViewModel> = new Map();
  ```

- [ ] **Step 5: Build textbox sub-view-models in `_buildHeaderFooterViewModel`.**

  Replace the entire `_buildHeaderFooterViewModel` body (lines 483-497, the verbatim copy is in pre-flight):

  ```ts
  private _buildHeaderFooterViewModel() {
      // Clear only the textbox map — the existing header/footer maps' rebuild
      // semantics are preserved (.set() overwrites entries; stale entries from
      // a prior reset survive). Textbox sub-vms must NOT survive a doc reset
      // because Stage B's drag-delete-shape path can remove a drawing without
      // touching headers or footers, and we don't want phantom edit re-entry.
      this._textBoxTreeMap.clear();

      const { headerModelMap, footerModelMap, textBoxModelMap } = this._documentDataModel;
      const viewModels = [];
      for (const [headerId, headerModel] of headerModelMap) {
          this._headerTreeMap.set(headerId, new DocumentViewModel(headerModel));
          viewModels.push(this._headerTreeMap.get(headerId)!);
      }

      for (const [footerId, footerModel] of footerModelMap) {
          this._footerTreeMap.set(footerId, new DocumentViewModel(footerModel));
          viewModels.push(this._footerTreeMap.get(footerId)!);
      }

      for (const [drawingId, textBoxModel] of textBoxModelMap) {
          this._textBoxTreeMap.set(drawingId, new DocumentViewModel(textBoxModel));
          viewModels.push(this._textBoxTreeMap.get(drawingId)!);
      }

      this._segmentViewModels$.next(viewModels);
  }
  ```

  **Critical**: the textbox loop MUST `viewModels.push(...)` (matching the header/footer loops). Otherwise downstream subscribers of `_segmentViewModels$` won't see textbox sub-vms and any future feature relying on the stream silently breaks.

  **Why we don't `_headerTreeMap.clear()` / `_footerTreeMap.clear()` here**: Stage C should not silently change rebuild semantics for headers and footers. If header/footer maps need eager clearing too, that's a follow-up refactor (the existing `dispose()` has commented-out clears at line 246-247, suggesting the original author punted on disposal). Keeping the change minimal preserves rollback isolation.

- [ ] **Step 6: Add `getSelfOrSegmentViewModel`.**

  Below the existing `getSelfOrHeaderFooterViewModel` (around line 286), add:

  ```ts
  /**
   * Resolve a segmentId to its sub-view-model — body / header / footer / textbox.
   * Mirrors `DocumentDataModel.getSelfOrSegmentModel`. Returns `this` when the
   * segmentId is empty or unknown.
   *
   * Distinct from `getSelfOrHeaderFooterViewModel`, which preserves the
   * legacy "header / footer only" contract for its existing callers.
   */
  getSelfOrSegmentViewModel(segmentId?: string): DocumentViewModel {
      if (segmentId == null || segmentId === '') {
          return this as DocumentViewModel;
      }
      if (this._headerTreeMap.has(segmentId)) return this._headerTreeMap.get(segmentId)!;
      if (this._footerTreeMap.has(segmentId)) return this._footerTreeMap.get(segmentId)!;
      if (this._textBoxTreeMap.has(segmentId)) return this._textBoxTreeMap.get(segmentId)!;
      return this as DocumentViewModel;
  }
  ```

  **Critical:** do NOT modify `getSelfOrHeaderFooterViewModel`. Same rationale as in Task 1.1 Step 8.

- [ ] **Step 7: Run the tests to verify they pass.**

  ```bash
  pnpm --filter @univerjs/engine-render exec vitest run document-view-model
  ```

  Expected: PASS for all `getSelfOrSegmentViewModel`, `getSelfOrHeaderFooterViewModel` blocks. If `segmentViewModels$` test fails because the property name differs, adjust per Step 2's note.

- [ ] **Step 8: Run the full engine-render docs view-model + selection suite.**

  ```bash
  pnpm --filter @univerjs/engine-render exec vitest run --testPathPattern='view-model|selection'
  ```

  Expected: PASS.

- [ ] **Step 9: Commit Phase 2.**

  ```bash
  git add packages/engine-render/src/components/docs/view-model/document-view-model.ts \
          packages/engine-render/src/components/docs/view-model/__tests__/document-view-model.spec.ts
  git -c commit.gpgsign=false commit -m "feat(engine-render): textbox sub-DocumentViewModel + segment-aware lookup

Adds DocumentEditArea.TEXT_BOX, _textBoxTreeMap, and a new
getSelfOrSegmentViewModel that resolves textbox segmentIds (=
drawingId) to a sub-view-model wrapping the corresponding entry
in DocumentDataModel.textBoxModelMap (added in the previous commit).
Textbox VMs are pushed into the same _segmentViewModels\$ stream
as headers / footers so downstream subscribers see all three.

The legacy getSelfOrHeaderFooterViewModel is preserved as a non-
delegating method that ONLY resolves headers and footers — its
existing callers continue working under their original contract.

_buildHeaderFooterViewModel clears _textBoxTreeMap at the start of
each rebuild so a Stage B delete-shape doesn't leave phantom edit
re-entry targets. Header/footer rebuild semantics are unchanged
(scope kept minimal for rollback isolation).

Co-Authored-By: Claude Opus 4 (1M context) <noreply@anthropic.com>"
  ```

### Phase 2 verification

- [ ] **Run the full engine-render test suite.**

  ```bash
  pnpm --filter @univerjs/engine-render exec vitest run
  ```

  Expected: pre-existing green/red profile, plus the new tests passing.

- [ ] **No UI test possible yet** — sub-view-model registry isn't yet consumed by any render path.

- [ ] **Capture baseline screenshot for Phase 3 equivalence verification.**

  Phase 3's screenshot diff (Task 3.3 Step 7) compares the Phase 3 textbox rendering against a Phase 2 baseline. Capture it now while the worktree is at Phase 2 head:

  - Dev server still running. Drag-drop `examples/local/全格式.docx` onto the docs landing page, OR invoke `DocxImportOperation` from DevTools console.
  - Take a screenshot of the canvas region containing a textbox via `mcp__playwright__browser_take_screenshot`.
  - Save it OUTSIDE the worktree so future `git clean` or worktree switches don't nuke it:
    ```bash
    mv .playwright-mcp/<screenshot-name>.png /tmp/textbox-baseline-phase2.png
    ls -la /tmp/textbox-baseline-phase2.png   # confirm exists
    ```
  - Worktree should stay clean (`git status` shows no new untracked PNGs).

  Phase 3 Step 7 will reuse this file. If you skip this step, you'll need to git-checkout back to Phase 2, recapture, then return — manageable but slower.

---

(Plan continues in chunks 4-7 below, one per phase. Submitted for review chunk-by-chunk per the writing-plans loop.)

---

## Chunk 3: Phase 3 — Layout & render textbox bodies

Touches: `@univerjs/engine-render`. The architecturally riskiest phase. We add `IDocumentSkeletonDrawing.bodySke` to carry a textbox's per-page sub-skeleton, populate it during layout (mirroring how header / footer sub-skeletons are built), and extract a `_drawSegmentBody` helper from `_drawHeaderFooter` so the main `Documents` render component can paint textbox text alongside header / footer text.

After this phase, with feature flag forced on, the textbox text rendered by main `Documents` should overlap pixel-for-pixel with `ClippedRichText`'s read-only overlay (the overlay still draws — the flag that swaps the overlay off comes in Phase 4). Visual difference: zero. Architectural difference: textbox text now goes through the docs render pipeline (extensions, hit-test, glyph reuse) rather than a parallel scene-object overlay.

### Key implementation notes (read first)

**`_drawHeaderFooter` contains exactly one header/footer-specific behaviour: the half-page clip at lines 1085-1095**:

```ts
if (isHeader) {
    if ((y - originY + alignOffset.y) > (parentPage.pageHeight - 100) / 2) { /* skip line */ }
} else {
    if ((y - originY + alignOffset.y + lineHeight) < (parentPage.pageHeight - 100) / 2 + 100) { /* skip line */ }
}
```

Everything else (185 lines of section / column / line / glyph / extension iteration) is generic. The extraction is:

- `_drawSegmentBody(page, ctx, ..., shouldSkipLine)` — generic body, accepts a `(line, y, originY, alignOffset, lineHeight) => boolean` skip predicate
- `_drawHeaderFooter(...)` — thin wrapper that supplies the half-page clip predicate
- `_drawTextBoxes(parentPage, ctx, ...)` — new wrapper that iterates `parentPage.skeDrawings` and supplies `() => false` (no skip) for each textbox sub-skeleton

**Layout-side, the textbox sub-skeleton creation mirrors `_createSkeletonHeaderFooter` (`page.ts:215-300`)** but takes the drawing's content rect (width/height/insets from `bodyPr`) as the layout area instead of the header/footer area derived from page margins.

**Critical scope constraint**: Phase 3 only changes WHERE textbox text is rendered (overlay → main Documents). It does NOT yet make text editable. Cursor / selection / IME / mutation routing all come in Phase 5. After Phase 3, double-click does nothing and the user sees no behavioural difference.

### Task 3.1: Add `IDocumentSkeletonDrawing.bodySke` field

**Files:**
- Modify: `packages/engine-render/src/basics/i-document-skeleton-cached.ts:275-289`

- [ ] **Step 1: Read current `IDocumentSkeletonDrawing`, `IDocumentSkeletonHeaderFooter`, verify `bodyPr` access path, and audit `DocumentSkeletonPageType.HEADER` consumers.**

  ```bash
  sed -n '275,290p' packages/engine-render/src/basics/i-document-skeleton-cached.ts
  sed -n '118,125p' packages/engine-render/src/basics/i-document-skeleton-cached.ts
  grep -n 'bodyPr' packages/core/src/types/interfaces/i-document-data.ts | head
  grep -rn 'DocumentSkeletonPageType\.HEADER\|page\.type\s*===\s*DocumentSkeletonPageType' packages/engine-render/src/components/docs/ | head -20
  ```

  Confirm:
  - `IDocumentSkeletonDrawing` has only geometry fields (`aLeft`, `aTop`, `width`, `height`, `angle`, `drawingOrigin`, etc.)
  - `IDocumentSkeletonHeaderFooter extends IDocumentSkeletonPage {}` — i.e., a header/footer skeleton IS a page skeleton
  - `bodyPr?` is on `IDocShapeProperties` (around line 675), reached via `IDocDrawingBase.shapeProperties.bodyPr`
  - **`DocumentSkeletonPageType.HEADER` consumers**: list every place that branches on `page.type === DocumentSkeletonPageType.HEADER`. Task 3.2 reuses the `HEADER` enum value for textbox sub-skeletons (TODO note in Step 2). For each consumer, verify it would behave correctly when given a textbox sub-skeleton, OR that it's only reachable via the header / footer call path (and not via the new textbox path).

    **If any consumer would misclassify a textbox sub-skeleton** (e.g., header-specific clipping, header-specific event routing reachable from `_drawTextBoxes` via `_drawSegmentBody`): **add `DocumentSkeletonPageType.TEXT_BOX` to the enum in this PR** (Task 3.1 Step 4 below) and switch from `HEADER` reuse. Don't defer to follow-up.

    **If all consumers are guarded by their call path** (only ever reached by `_drawHeaderFooter` itself, never by textbox path): the `HEADER` reuse is harmless and the TODO follow-up is acceptable.

    **Tiebreaker for ambiguous cases** (consumer is currently safe only because no caller reaches it via textbox path, but a future refactor easily could): **add the `TEXT_BOX` enum value**. Erring toward the explicit enum is cheap; erring toward reuse risks a Phase 4+ debugging session that's hard to trace back.

- [ ] **Step 2: Add the optional `bodySke` field.**

  In `packages/engine-render/src/basics/i-document-skeleton-cached.ts`, append to `IDocumentSkeletonDrawing` (around line 289, after `blockAnchorTop`):

  ```ts
  export interface IDocumentSkeletonDrawing {
      drawingId: string;
      aLeft: number; // page-relative left
      aTop: number; // page-relative top
      width: number;
      height: number;
      angle: number;
      initialState: boolean;
      drawingOrigin: IDocDrawingBase;
      columnLeft: number;
      isPageBreak: boolean;
      lineTop: number;
      lineHeight: number;
      blockAnchorTop: number;
      /**
       * Sub-skeleton for the textbox body, present only when the drawing
       * has `textBoxContent` AND was laid out in this pass (set by
       * `_createSkeletonTextBox`). Reuses `IDocumentSkeletonHeaderFooter`
       * (which is `IDocumentSkeletonPage`) — the same shape as the
       * header / footer sub-skeletons that already exist on the page.
       *
       * Read by `Documents._drawTextBoxes` (added in this phase). Absent
       * when (a) the drawing is image-only, or (b) the drawing's
       * textbox feature flag is off.
       */
      bodySke?: IDocumentSkeletonHeaderFooter;
  }
  ```

  No code uses `bodySke` yet — type addition is non-breaking.

- [ ] **Step 3: Confirm TypeScript compiles.**

  ```bash
  pnpm --filter @univerjs/engine-render exec tsc --noEmit
  ```

  Expected: no new errors.

- [ ] **Step 4 (conditional): If Step 1's `DocumentSkeletonPageType.HEADER` audit found a consumer that would misclassify textbox sub-skeletons, add the `TEXT_BOX` enum value here.**

  ```bash
  grep -nE "enum DocumentSkeletonPageType" packages/engine-render/src/basics/i-document-skeleton-cached.ts
  ```

  Add `TEXT_BOX` member to the enum. Then update Task 3.2 Step 2 to use `DocumentSkeletonPageType.TEXT_BOX` instead of `HEADER`. Cross-reference all `page.type === HEADER` consumers — if they should also handle textbox sub-skeletons (e.g., a generic "is sub-skeleton" check), generalise them rather than adding a parallel `=== TEXT_BOX` branch.

  If Step 1 confirmed no consumer needs to distinguish, skip this step and rely on the TODO follow-up in Task 3.2 Step 2.

- [ ] **Step 5: No commit yet.** Land with Task 3.2 — type addition without producer or consumer is dead.

### Task 3.2: Populate `bodySke` during page layout

**Files:**
- Modify: `packages/engine-render/src/components/docs/layout/model/page.ts:215-300` (after the existing `_createSkeletonHeaderFooter`)
- Modify: `packages/engine-render/src/components/docs/layout/model/page.ts:103-142` (where header / footer are populated — add a textbox loop)

- [ ] **Step 1: Read current `_createSkeletonHeaderFooter` end-to-end.**

  ```bash
  sed -n '215,300p' packages/engine-render/src/components/docs/layout/model/page.ts
  ```

  Note the structure:
  - Builds a derived `ISectionBreakConfig` with reduced `pageSize` matching the header/footer area
  - Calls `createSkeletonPage` then `dealWithSection` to lay out the body inside that area
  - Returns the resulting `IDocumentSkeletonHeaderFooter` page

  We mirror this for textboxes, with two differences:
  - Layout area = drawing's `width × height` minus `bodyPr` insets, NOT page margins
  - Sub-view-model is the textbox's, fetched via `viewModel.getSelfOrSegmentViewModel(drawingId)`

- [ ] **Step 2: Add `_createSkeletonTextBox` helper.**

  Append after `_createSkeletonHeaderFooter` in `page.ts`:

  ```ts
  function _createSkeletonTextBox(
      ctx: ILayoutContext,
      textBoxViewModel: DocumentViewModel,
      sectionBreakConfig: ISectionBreakConfig,
      skeletonResourceReference: ISkeletonResourceReference,
      drawingId: string,
      textBoxWidth: number,
      textBoxHeight: number,
      bodyPr: IDocShapeProperties['bodyPr'] | undefined,
  ): IDocumentSkeletonHeaderFooter {
      const { lists, footerTreeMap, headerTreeMap, localeService, drawings } = sectionBreakConfig;

          // bodyPr insets are in EMU on the wire; the importer (parse-drawing.ts:266)
          // converts to px via EMU_PER_PX = 9525 (96 DPI) and stores on
          // shapeProperties.bodyPr. When <wps:bodyPr> exists in the source
          // OOXML, the importer ALSO applies Word's defaults (lIns=91440 EMU,
          // tIns=45720 EMU, etc.) — so we only see undefined here when the
          // <wps:bodyPr> element is missing entirely. Pad with the same
          // px-converted defaults to stay consistent: 91440/9525 = 9.6,
          // 45720/9525 = 4.8.
          const lIns = bodyPr?.lIns ?? 9.6;
          const rIns = bodyPr?.rIns ?? 9.6;
          const tIns = bodyPr?.tIns ?? 4.8;
          const bIns = bodyPr?.bIns ?? 4.8;

      const innerWidth = Math.max(0, textBoxWidth - lIns - rIns);
      const innerHeight = Math.max(0, textBoxHeight - tIns - bIns);

      const textBoxConfig: ISectionBreakConfig = {
          lists,
          footerTreeMap,
          headerTreeMap,
          pageSize: { width: innerWidth, height: innerHeight },
          localeService,
          drawings,
      };

      const areaPage = createSkeletonPage(ctx, textBoxConfig, skeletonResourceReference);
      areaPage.type = DocumentSkeletonPageType.HEADER; // reuse header type — closest enum match;
                                                       // see TODO note below
      areaPage.segmentId = drawingId;

      // Lay out the textbox body inside the inner rect.
      const layoutAnchor = ctx.layoutStartPointer[drawingId];
      ctx.layoutStartPointer[drawingId] = null;

      const page = dealWithSection(
          ctx,
          textBoxViewModel,
          textBoxViewModel.getChildren()[0],
          areaPage,
          textBoxConfig,
          layoutAnchor
      ).pages[0];

      updateBlockIndex([page]);
      Object.assign(page, { marginTop: tIns, marginBottom: bIns, marginLeft: lIns, marginRight: rIns });

      return page;
  }
  ```

  **TODO follow-up (not in this PR):** add `DocumentSkeletonPageType.TEXT_BOX` to the enum and switch from `HEADER` here. Reusing `HEADER` is harmless for rendering (the page-type field is read in a few places to log / debug) but semantically incorrect. File a follow-up issue post-merge.

  Adjust imports at top of page.ts: ensure `DocumentSkeletonPageType` is already imported (it is — used by `_createSkeletonHeaderFooter`). Add `IDocShapeProperties` import from `@univerjs/core` if not already present.

- [ ] **Step 3: Wire `_createSkeletonTextBox` into the page-build loop.**

  Find where `_createSkeletonHeaderFooter` is called within page setup (lines 103-142). After the existing header / footer population, add a textbox loop:

  ```ts
  // (existing header / footer population at lines 103-142)

  // Populate textbox bodies on every drawing that has textBoxContent AND
  // a sub-view-model. Skipped when the drawing is image-only or when
  // the textbox feature flag is off (textBoxModelMap stays empty in
  // that case — see Phase 1).
  if (page.skeDrawings && page.skeDrawings.size > 0) {
      const { textBoxTreeMap } = sectionBreakConfig;
      // textBoxTreeMap is read off ISectionBreakConfig — see Step 4 for
      // the type extension that adds it.
      if (textBoxTreeMap) {
          for (const [drawingId, skeDrawing] of page.skeDrawings) {
              const textBoxVm = textBoxTreeMap.get(drawingId);
              if (!textBoxVm) continue; // image or other non-textbox drawing
              skeDrawing.bodySke = _createSkeletonTextBox(
                  ctx,
                  textBoxVm,
                  sectionBreakConfig,
                  skeletonResourceReference,
                  drawingId,
                  skeDrawing.width,
                  skeDrawing.height,
                  skeDrawing.drawingOrigin.shapeProperties?.bodyPr,
              );
          }
      }
  }
  ```

- [ ] **Step 4: Add `textBoxTreeMap` to `ISectionBreakConfig` so it can flow through layout.**

  Find the `ISectionBreakConfig` interface (`packages/engine-render/src/basics/i-section-break-config.ts` or near it — search for it):

  ```bash
  grep -rn "interface ISectionBreakConfig" packages/engine-render/src/ | head
  ```

  Add the new optional field:

  ```ts
  export interface ISectionBreakConfig {
      // ... existing fields
      headerTreeMap?: Map<string, DocumentViewModel>;
      footerTreeMap?: Map<string, DocumentViewModel>;
      textBoxTreeMap?: Map<string, DocumentViewModel>;
      // ... rest
  }
  ```

  Find the producer of `ISectionBreakConfig` (it's built somewhere from `DocumentViewModel`'s tree maps; grep `headerTreeMap:`):

  ```bash
  grep -rn 'headerTreeMap:' packages/engine-render/src/ | head -5
  ```

  At that producer site, add the textbox map alongside header / footer:

  ```ts
  textBoxTreeMap: this._textBoxTreeMap,
  // (next to:)
  // headerTreeMap: this._headerTreeMap,
  // footerTreeMap: this._footerTreeMap,
  ```

  And expose `_textBoxTreeMap` getter on `DocumentViewModel` if needed (check existing `headerTreeMap` getter).

- [ ] **Step 5: Confirm TypeScript compiles + run the engine-render layout tests.**

  ```bash
  pnpm --filter @univerjs/engine-render exec tsc --noEmit
  pnpm --filter @univerjs/engine-render exec vitest run --testPathPattern='layout|view-model'
  ```

  Expected: no new type errors; existing layout tests pass. New code is reachable only when `textBoxTreeMap` is non-empty AND `page.skeDrawings` has entries — neither happens until layout runs against a doc with textbox sub-view-models, which we don't synthesise in unit tests yet.

- [ ] **Step 6: Run the dev server and import a textbox-bearing doc — sanity check that nothing crashes.**

  Dev server still running from pre-flight. Open `http://localhost:3002/docs/`, import `examples/local/全格式.docx` (drag-and-drop or via existing `DocxImportOperation`). Expected: doc imports successfully, textboxes render via `ClippedRichText` (unchanged), no console errors. The new code in Step 3 is silently producing `bodySke` data that nobody yet consumes.

  **If it crashes or warns**: most likely culprit is the type extension in Step 4 not flowing through to all `ISectionBreakConfig` producers, or `bodyPr` insets being read with a wrong path. Check console, fix, retry.

- [ ] **Step 7: No commit yet.** Land with Task 3.3 — `bodySke` populated but unused is still dead.

### Task 3.3: Render textbox bodies via main `Documents` component

**Files:**
- Modify: `packages/engine-render/src/components/docs/document.ts:1022-1206` (extract `_drawSegmentBody` from `_drawHeaderFooter`)
- Modify: `packages/engine-render/src/components/docs/document.ts:~518` (add `_drawTextBoxes` call after the body draw loop)

- [ ] **Step 1: Read `_drawHeaderFooter` end-to-end and confirm the only header/footer-specific behaviour is the half-page clip.**

  ```bash
  sed -n '1022,1206p' packages/engine-render/src/components/docs/document.ts
  ```

  Confirm:
  - Lines 1037-1083 and 1097-1205 are generic page-tree iteration
  - Lines 1085-1095 are the only `isHeader`-conditional block (the half-page clip)
  - The function returns nothing; it draws side-effectfully via `ctx`

- [ ] **Step 2-pre: Capture the old `_drawHeaderFooter` body BEFORE editing.**

  This must run BEFORE Step 2's edit. Snapshot the current body so the equivalence check in Step 2.5 has something to compare against:

  ```bash
  # Capture lines 1097-1198 (the divide loop / glyph rendering / borders)
  # of the CURRENT _drawHeaderFooter body, before any Phase 3 edit lands.
  # Adjust line range if `sed -n '1022,1206p' packages/.../document.ts` shows the function has shifted.
  git show HEAD:packages/engine-render/src/components/docs/document.ts \
    | sed -n '1097,1198p' > /tmp/drawHeaderFooter_old_body.txt
  wc -l /tmp/drawHeaderFooter_old_body.txt   # expect ~100 lines
  ```

  **DO NOT git add or commit between Step 2-pre and Step 2.5.** The diff in Step 2.5 relies on `/tmp/drawHeaderFooter_old_body.txt` reflecting the pre-edit state.

- [ ] **Step 2: Extract `_drawSegmentBody` from `_drawHeaderFooter`.**

  Refactor the function: introduce `_drawSegmentBody` that takes the same args as `_drawHeaderFooter` MINUS `isHeader`, PLUS a `shouldSkipLine` predicate. Then make `_drawHeaderFooter` a 5-line wrapper that builds the predicate from `isHeader` and calls `_drawSegmentBody`.

  Replace the entire `_drawHeaderFooter` block with:

  ```ts
  /**
   * Generic page-tree draw used by header / footer / textbox sub-skeletons.
   * Iterates sections / columns / lines / glyphs and dispatches extensions.
   * Caller controls per-line skipping via `shouldSkipLine` (header / footer
   * use this to clip to their half of the page; textbox passes always-false).
   */
  private _drawSegmentBody(
      page: IDocumentSkeletonPage,
      ctx: UniverRenderingContext,
      extensions: ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>[],
      backgroundExtension: Nullable<ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>>,
      glyphExtensionsExcludeBackground: ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>[],
      alignOffsetNoAngle: Vector2,
      centerAngle: number,
      vertexAngle: number,
      renderConfig: IDocumentRenderConfig,
      parentScale: IScale,
      parentPage: IDocumentSkeletonPage,
      totalPages: number,
      shouldSkipLine: (line: IDocumentSkeletonLine, y: number, originY: number, alignOffset: Vector2, lineHeight: number) => boolean,
  ) {
      if (this._drawLiquid == null) {
          return;
      }
      const { sections } = page;
      const { y: originY } = this._drawLiquid;

      for (const section of sections) {
          const { columns } = section;

          this._drawLiquid.translateSave();
          this._drawLiquid.translateSection(section);

          for (const column of columns) {
              const { lines } = column;

              this._drawLiquid.translateSave();
              this._drawLiquid.translateColumn(column);

              const linesCount = lines.length;
              const alignOffset = alignOffsetNoAngle;

              for (let i = 0; i < linesCount; i++) {
                  const line = lines[i];
                  const { divides, asc = 0, type, lineHeight = 0 } = line;
                  const maxLineAsc = asc;
                  const maxLineAscSin = maxLineAsc * Math.sin(centerAngle);
                  const maxLineAscCos = maxLineAsc * Math.cos(centerAngle);

                  if (type === LineType.BLOCK) {
                      for (const extension of extensions) {
                          if (extension.type === DOCS_EXTENSION_TYPE.LINE) {
                              extension.extensionOffset = { alignOffset, renderConfig };
                              extension.draw(ctx, parentScale, line);
                          }
                      }
                  } else {
                      this._drawLiquid.translateSave();
                      this._drawLiquid.translateLine(line, true, true);
                      const { y } = this._drawLiquid;

                      if (shouldSkipLine(line, y, originY, alignOffset, lineHeight)) {
                          this._drawLiquid.translateRestore();
                          continue;
                      }

                      // (rest of the existing body — divide loop, glyph background,
                      // glyph foreground, tabs, borders — unchanged from old
                      // _drawHeaderFooter lines 1097-1198)
                  }
              }

              this._drawLiquid.translateRestore();
          }

          this._drawLiquid.translateRestore();
      }
  }

  /**
   * Header / footer wrapper around `_drawSegmentBody`. The skip predicate
   * is the half-page clip that's been here forever.
   */
  private _drawHeaderFooter(
      page: IDocumentSkeletonPage,
      ctx: UniverRenderingContext,
      extensions: ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>[],
      backgroundExtension: Nullable<ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>>,
      glyphExtensionsExcludeBackground: ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>[],
      alignOffsetNoAngle: Vector2,
      centerAngle: number,
      vertexAngle: number,
      renderConfig: IDocumentRenderConfig,
      parentScale: IScale,
      parentPage: IDocumentSkeletonPage,
      isHeader = true,
      totalPages = 1,
  ) {
      const halfClip = (line: IDocumentSkeletonLine, y: number, originY: number, alignOffset: Vector2, lineHeight: number) => {
          if (isHeader) {
              return (y - originY + alignOffset.y) > (parentPage.pageHeight - 100) / 2;
          }
          return (y - originY + alignOffset.y + lineHeight) < (parentPage.pageHeight - 100) / 2 + 100;
      };

      this._drawSegmentBody(
          page, ctx, extensions, backgroundExtension, glyphExtensionsExcludeBackground,
          alignOffsetNoAngle, centerAngle, vertexAngle, renderConfig, parentScale, parentPage, totalPages,
          halfClip,
      );
  }
  ```

  **Verification anchor**: copy lines 1097-1198 verbatim (the divide loop / glyph rendering / tab leaders / paragraph borders) into the placeholder `// rest of the existing body` in the new `_drawSegmentBody`. DO NOT paraphrase. The point of this refactor is functional equivalence with the old `_drawHeaderFooter`; any drift introduces silent header/footer regressions.

- [ ] **Step 2.5: Mechanical equivalence check after Step 2 edit.**

  The whole point of extracting `_drawSegmentBody` is functional equivalence with the old `_drawHeaderFooter` body. Step 2-pre captured `/tmp/drawHeaderFooter_old_body.txt`. Now extract the new `_drawSegmentBody`'s body section (everything from `if (shouldSkipLine(...))` through the trailing `translateRestore`s) into `/tmp/drawSegmentBody_new_body.txt`. Diff:

  ```bash
  diff /tmp/drawHeaderFooter_old_body.txt /tmp/drawSegmentBody_new_body.txt
  ```

  Expected: only the differences below should appear:
  - `if (isHeader) { ... } else { ... }` block (lines 1085-1095 in the old) replaced by `if (shouldSkipLine(line, y, originY, alignOffset, lineHeight)) { translateRestore; continue; }`
  - No other diffs.

  If anything else differs, the paste was not byte-for-byte. Re-paste the divide loop / glyph rendering / tab leaders / paragraph borders verbatim from `/tmp/drawHeaderFooter_old_body.txt` and re-diff.

- [ ] **Step 3: Run engine-render docs tests to confirm header/footer rendering didn't regress.**

  ```bash
  pnpm --filter @univerjs/engine-render exec vitest run --testPathPattern='docs|layout'
  ```

  Expected: existing tests pass. If a snapshot test changes, the refactor wasn't byte-equivalent — diff the new `_drawSegmentBody` against the old `_drawHeaderFooter` body line-by-line.

- [ ] **Step 4: Manual sanity — dev server still renders headers / footers correctly.**

  Reload `http://localhost:3002/docs/`, open a doc with header/footer (any multi-page doc). Confirm headers/footers visible and unchanged.

- [ ] **Step 5: Add `_drawTextBoxes` method that iterates `parentPage.skeDrawings` and dispatches each `bodySke` through `_drawSegmentBody`.**

  Append after the new `_drawHeaderFooter` wrapper:

  ```ts
  /**
   * Draw textbox bodies for every drawing on this page that has a
   * populated `bodySke` (see _createSkeletonTextBox in layout/model/page.ts).
   * Translates to the drawing's (aLeft, aTop) and rotates by drawing.angle
   * before invoking the shared draw loop. Shape backgrounds / borders are
   * still drawn by DrawingRenderService — only text moves here.
   */
  private _drawTextBoxes(
      parentPage: IDocumentSkeletonPage,
      ctx: UniverRenderingContext,
      extensions: ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>[],
      backgroundExtension: Nullable<ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>>,
      glyphExtensionsExcludeBackground: ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]>[],
      centerAngle: number,
      vertexAngle: number,
      renderConfig: IDocumentRenderConfig,
      parentScale: IScale,
      totalPages: number,
  ) {
      if (!parentPage.skeDrawings || parentPage.skeDrawings.size === 0) return;

      for (const [, skeDrawing] of parentPage.skeDrawings) {
          if (!skeDrawing.bodySke) continue; // image-only drawing or feature off

          ctx.save();
          // Translate to drawing's page-relative top-left.
          ctx.translate(skeDrawing.aLeft, skeDrawing.aTop);
          // Rotate around drawing centre.
          if (skeDrawing.angle !== 0) {
              ctx.translate(skeDrawing.width / 2, skeDrawing.height / 2);
              ctx.rotate(skeDrawing.angle);
              ctx.translate(-skeDrawing.width / 2, -skeDrawing.height / 2);
          }
          // Apply bodyPr inset translation so text starts inside the inner rect.
          const bodyPr = skeDrawing.drawingOrigin.shapeProperties?.bodyPr;
          ctx.translate(bodyPr?.lIns ?? 9.6, bodyPr?.tIns ?? 4.8);

          // Reset _drawLiquid origin for the sub-skeleton. The Liquid class
          // (packages/engine-render/src/components/docs/liquid.ts:43-51) exposes
          // `translateBy(x, y)` for absolute positioning (NOT `translate(x, y)`,
          // which is incremental). Save then absolute-set 0,0 to start the
          // sub-skeleton in its own coordinate space; restore at the end.
          this._drawLiquid?.translateSave();
          this._drawLiquid?.translateBy(0, 0);

          this._drawSegmentBody(
              skeDrawing.bodySke,
              ctx,
              extensions,
              backgroundExtension,
              glyphExtensionsExcludeBackground,
              Vector2.create(0, 0),
              centerAngle,
              vertexAngle,
              renderConfig,
              parentScale,
              skeDrawing.bodySke,
              totalPages,
              () => false, // textboxes never half-clip
          );

          this._drawLiquid?.translateRestore();
          ctx.restore();
      }
  }
  ```

  **Risk note RESOLVED**: `Liquid` is at `packages/engine-render/src/components/docs/liquid.ts:28`. `translateBy(x, y)` does **absolute** positioning (line 48-51); `translate(x, y)` is incremental (line 53-56). Wrapped in `translateSave()` / `translateRestore()` we get a clean per-sub-skeleton coordinate space.

- [ ] **Step 6: Wire `_drawTextBoxes` into the body draw loop at the exact insertion point.**

  **Insertion point — described by code anchors, not line numbers** (line numbers shift if Phase 1+2 commits formatted nearby code): in `packages/engine-render/src/components/docs/document.ts`, find the `if (footerSkeletonPage) { … this._drawHeaderFooter(footerSkeletonPage, …, false, pages.length); }` block. Insert immediately after the closing `}` of that `if`, immediately before the `this._pageRender$.next({ page, pageLeft, pageTop, ctx });` call. (Line numbers are currently ~533-535; verify with `grep -n '_pageRender\$\.next' packages/engine-render/src/components/docs/document.ts` before editing.)

  Verbatim diff:

  ```ts
              this._drawHeaderFooter(
                  footerSkeletonPage,
                  ctx, extensions, backgroundExtension,
                  glyphExtensionsExcludeBackground,
                  footerAlignOffsetNoAngle,
                  centerAngle, vertexAngle, renderConfig, parentScale,
                  page, false, pages.length
              );
          }

  +       // Render textbox bodies on this page (after header / footer, before
  +       // _pageRender$ emit). ctx is at the page-local origin; rotation has
  +       // been reset by the prior _resetRotation call. _drawLiquid state is
  +       // restored after each section/column iteration in the body loop above
  +       // — `_drawTextBoxes` does its own translateSave/Restore for each
  +       // textbox so we don't pollute the parent state.
  +       this._drawTextBoxes(
  +           page, ctx, extensions, backgroundExtension,
  +           glyphExtensionsExcludeBackground,
  +           centerAngle, vertexAngle, renderConfig, parentScale,
  +           pages.length,
  +       );
  +
          this._pageRender$.next({ page, pageLeft, pageTop, ctx });
  ```

  This placement guarantees:
  - ctx is **un-rotated** (footer call doesn't rotate; `_resetRotation` already ran higher up the function — search `_resetRotation` to confirm)
  - `_drawLiquid` state is whatever the body loop's outer translateRestore left it at — `_drawTextBoxes` doesn't depend on a specific value because it `translateBy(0, 0)`s before drawing each textbox
  - z-order: text rendered AFTER body and after header/footer (so a textbox laid over body text wins). Shape background still drawn at a separate scene layer by `DrawingRenderService` and ordering between the two layers is independent of this insertion point.

- [ ] **Step 7: Visual verification — Playwright screenshot diff against a baseline captured at Phase 2 head.**

  Manually-eyeballed "looks the same" can hide 1-2 px offsets that anti-alias as "slightly bolder". Use a pre-captured baseline from Phase 2 + the existing `.playwright-mcp/` infra:

  1. **Baseline already captured** — at Phase 2 verification (after Task 2.2 commit, BEFORE starting Task 3.x), you should have run:

     ```bash
     # In dev server tab, import 全格式.docx then take screenshot of textbox region:
     # mcp__playwright__browser_take_screenshot target=<canvas-bbox> filename=textbox-baseline-phase2.png
     # Move OUT of worktree so a `git clean` won't nuke it:
     mv .playwright-mcp/textbox-baseline-phase2.png /tmp/textbox-baseline-phase2.png
     ```

     If you skipped that step, redo it now: `git stash` any in-progress edit, `git checkout` the Phase 2 commit head, restart dev server, capture screenshot, move to /tmp, switch back via `git checkout -`, `git stash pop`. Verify the worktree is clean before continuing (`git status`).

  2. **Capture current** — Phase 3 already on disk (Step 5 done):
     ```bash
     # Re-import 全格式.docx in the same browser tab.
     # Screenshot the same textbox region as .playwright-mcp/textbox-phase3.png
     ```

  3. **Pixel diff**:
     ```bash
     # If imagemagick is available locally:
     compare -metric AE -fuzz 2% /tmp/textbox-baseline-phase2.png .playwright-mcp/textbox-phase3.png /tmp/diff.png
     ```
     Expected: zero or near-zero pixels different (text should overlap exactly because Phase 3 hasn't yet turned off the overlay — both rendering passes draw the same content at the same place).

     **Success criterion**: pixel diff < 0.5% of the textbox bbox. A higher diff means the new draw pass is offset / scaled / rotated wrong; do not commit until the diff is near zero.

     **If imagemagick isn't available**: open both PNGs in macOS Preview, toggle between them with arrow keys — drift will be visible as a flicker. This is less rigorous but catches gross errors.

  4. **Console check**: open DevTools, no errors, no `Uncaught` warnings.

  **Failure modes to look for**:
  - Text doesn't appear at all → `bodySke` is null → check Phase 1+2 sub-vm creation
  - Text appears at page top-left → `aLeft`/`aTop` translate not applied
  - Text mirror-flipped or rotated → rotation order in Step 5 is wrong
  - Text shifted by ~10 px in either direction → bodyPr inset wrong (probably double-applied: importer added insets AND we add them in `_drawTextBoxes`)

- [ ] **Step 8: Commit Phase 3.**

  ```bash
  git add packages/engine-render/src/basics/i-document-skeleton-cached.ts \
          packages/engine-render/src/components/docs/document.ts \
          packages/engine-render/src/components/docs/layout/model/page.ts \
          packages/engine-render/src/basics/i-section-break-config.ts # or wherever ISectionBreakConfig lives
  git -c commit.gpgsign=false commit -m "feat(engine-render): render textbox bodies via main Documents component

Adds IDocumentSkeletonDrawing.bodySke (a sub-IDocumentSkeletonHeaderFooter
populated for textbox-bearing drawings during page layout). Extracts
_drawSegmentBody from the existing _drawHeaderFooter so the same draw
loop can render headers / footers / textbox bodies; _drawHeaderFooter
becomes a thin wrapper supplying the legacy half-page clip predicate.

Adds _drawTextBoxes pass that iterates page.skeDrawings, applies the
drawing's coordinate transform (translate / rotate / bodyPr insets),
and dispatches each textbox sub-skeleton through _drawSegmentBody.

After this commit, textbox text renders TWICE (once via the existing
read-only ClippedRichText overlay, once via main Documents). Phase 4
adds the editMode flag on ClippedRichText that turns off the overlay's
text rendering, leaving only the main Documents pass.

Co-Authored-By: Claude Opus 4 (1M context) <noreply@anthropic.com>"
  ```

### Phase 3 verification

- [ ] **Run all engine-render tests.**

  ```bash
  pnpm --filter @univerjs/engine-render exec vitest run
  ```

  Expected: existing tests pass; the refactor of `_drawHeaderFooter` is functionally equivalent.

- [ ] **Manual test: import `examples/local/全格式.docx` and visually verify textbox text doubles up correctly (per Step 7).**

- [ ] **Roll back consideration**: this phase has the largest single-file diff (refactor + new methods). If Phase 4 surfaces a fundamental issue, `git revert` this commit alone restores the previous state. Phases 1+2 commits remain useful (they're consumed by Phase 4 anyway, just not by Phase 3 yet).

---

(Plan continues in chunks 4-7 below. Phase 3 is the architecturally riskiest commit; everything after this is incremental enabling work.)

