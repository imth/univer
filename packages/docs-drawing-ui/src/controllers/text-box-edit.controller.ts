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

import type { IDocDrawingBase, IDrawingSearch, Nullable } from '@univerjs/core';
import type { IRender } from '@univerjs/engine-render';
import type { Subscription } from 'rxjs';
import { Disposable, Inject, IUniverInstanceService } from '@univerjs/core';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { DocSelectionRenderService } from '@univerjs/docs-ui';
import { getDrawingShapeKeyByDrawingSearch, IDrawingManagerService } from '@univerjs/drawing';
import { ClippedRichText, SHAPE_TEXT_OVERLAY_SUFFIX } from '@univerjs/drawing-ui';
import { DocumentEditArea, IRenderManagerService } from '@univerjs/engine-render';

interface IRectWithDblclick {
    onDblclick$?: { subscribeEvent: (cb: (evt: unknown, state: { stopPropagation: () => void }) => void) => Subscription };
}

/**
 * Stage C — manage the lifecycle of "edit text inside a textbox".
 *
 * Subscribes to each textbox Rect's `onDblclick$` directly. The Rect is
 * attached to the scene transformer (`scene.attachTransformerTo`), which
 * makes it the topmost picked object at its bounds — so the body Documents
 * object's dblclick stream NEVER fires for clicks landing on a textbox,
 * and we have to listen on the Rect itself.
 *
 * Rects are created lazily by ShapeUpdateController after this controller
 * mounts (the controller bufferTimes add$ for ~33ms before painting), so
 * we wire on three signals: existing rects at construction, future render
 * units via `renderManagerService.created$`, and per-drawing add$ events
 * with two retry timeouts (50ms + 200ms) to ride past the buffer window.
 */
export class TextBoxEditController extends Disposable {
    /** Currently-edited drawing's segment, if any. */
    private _activeSegment: Nullable<IDrawingSearch> = null;
    /** Per-rect dblclick subscription, keyed by shapeKey. */
    private readonly _rectDblclickSubs: Map<string, Subscription> = new Map();
    /** Outside-click subscription, only active during edit mode. */
    private _outsideClickSub: Nullable<Subscription> = null;
    /** Esc-key listener, only active during edit mode. */
    private _escListener: Nullable<(event: KeyboardEvent) => void> = null;

    constructor(

        @Inject(IUniverInstanceService) _instanceSrv: IUniverInstanceService,
        @IRenderManagerService private readonly _renderManagerService: IRenderManagerService,
        @IDrawingManagerService private readonly _drawingManagerService: IDrawingManagerService
    ) {
        super();
        this._wireExisting();
        this._wireFuture();
    }

    override dispose(): void {
        this._exitEdit();
        for (const sub of this._rectDblclickSubs.values()) sub.unsubscribe();
        this._rectDblclickSubs.clear();
        super.dispose();
    }

    // ---------------------------------------------------------------------
    // Wiring
    // ---------------------------------------------------------------------

    private _wireExisting(): void {
        const groups = this._drawingManagerService.drawingManagerData;
        for (const unitId in groups) {
            const sub = groups[unitId];
            for (const subUnitId in sub) {
                const drawings = sub[subUnitId]?.data ?? {};
                for (const drawingId in drawings) {
                    this._tryWireRect({ unitId, subUnitId, drawingId });
                }
            }
        }
    }

    private _wireFuture(): void {
        this.disposeWithMe(
            this._drawingManagerService.add$.subscribe((params: IDrawingSearch[]) => {
                for (const p of params) {
                    setTimeout(() => this._tryWireRect(p), 50);
                    setTimeout(() => this._tryWireRect(p), 200);
                }
            })
        );
        this.disposeWithMe(
            this._drawingManagerService.remove$.subscribe((params: IDrawingSearch[]) => {
                for (const p of params) {
                    const shapeKey = getDrawingShapeKeyByDrawingSearch(p);
                    const sub = this._rectDblclickSubs.get(shapeKey);
                    if (sub) {
                        sub.unsubscribe();
                        this._rectDblclickSubs.delete(shapeKey);
                    }
                    if (this._activeSegment && this._activeSegment.drawingId === p.drawingId) {
                        this._exitEdit();
                    }
                }
            })
        );
    }

    /**
     * Look up the Rect for a drawing and subscribe to its dblclick.
     * Idempotent (subs keyed by shapeKey). Skips drawings without
     * `textBoxContent.body` (image-only) and silently no-ops if the Rect
     * doesn't exist yet — `_wireFuture` retries with two timeouts to
     * catch the lazy shape creation in ShapeUpdateController.
     */
    private _tryWireRect(search: IDrawingSearch): void {
        const shapeKey = getDrawingShapeKeyByDrawingSearch(search);
        if (this._rectDblclickSubs.has(shapeKey)) return;

        const drawing = this._drawingManagerService.getDrawingByParam(search) as IDocDrawingBase | null;
        if (!drawing?.textBoxContent?.body) return;

        const render = this._renderManagerService.getRenderById(search.unitId);
        if (!render) return;

        const rect = render.scene.getObject(shapeKey) as Nullable<IRectWithDblclick>;
        if (!rect?.onDblclick$) return;

        const sub = rect.onDblclick$.subscribeEvent((_evt, state) => {
            // eslint-disable-next-line no-console
            console.info('[TextBoxEdit] rect dblclick', search);
            this._enterEdit(search);
            state.stopPropagation();
        });
        this._rectDblclickSubs.set(shapeKey, sub);
        // eslint-disable-next-line no-console
        console.info('[TextBoxEdit] wired rect', { shapeKey });
    }

    private _findSearchById(unitId: string, drawingId: string): Nullable<IDrawingSearch> {
        const group = this._drawingManagerService.drawingManagerData[unitId];
        if (!group) return null;
        for (const subUnitId in group) {
            const drawings = group[subUnitId]?.data ?? {};
            if (drawings[drawingId]) return { unitId, subUnitId, drawingId };
        }
        return null;
    }

    // ---------------------------------------------------------------------
    // Edit lifecycle
    // ---------------------------------------------------------------------

    private _enterEdit(search: IDrawingSearch): void {
        if (this._activeSegment) this._exitEdit();

        const drawing = this._drawingManagerService.getDrawingByParam(search) as IDocDrawingBase | null;
        if (!drawing?.textBoxContent?.body) return;

        const angle = drawing.transform?.angle ?? 0;
        if (angle !== 0) return;

        const render = this._renderManagerService.getRenderById(search.unitId);
        if (!render) return;

        this._applyEditState(render, search.drawingId, true);
        this._activeSegment = search;
        this._wireExitListeners();
    }

    private _exitEdit(): void {
        if (!this._activeSegment) return;
        const search = this._activeSegment;
        this._activeSegment = null;
        this._unwireExitListeners();

        const render = this._renderManagerService.getRenderById(search.unitId);
        if (!render) return;
        this._applyEditState(render, search.drawingId, false);
    }

    private _applyEditState(render: IRender, drawingId: string, on: boolean): void {
        const viewModel = render.with(DocSkeletonManagerService).getViewModel();
        const docSelectionRenderService = render.with(DocSelectionRenderService);

        viewModel.setEditArea(on ? DocumentEditArea.TEXT_BOX : DocumentEditArea.BODY);
        docSelectionRenderService.setSegment(on ? drawingId : '');

        const search = this._findSearchById(render.unitId, drawingId);
        if (!search) return;
        const shapeKey = getDrawingShapeKeyByDrawingSearch(search);
        const overlay = render.scene.getObject(`${shapeKey}${SHAPE_TEXT_OVERLAY_SUFFIX}`);
        if (overlay && overlay instanceof ClippedRichText) overlay.setEditMode(on);
    }

    private _wireExitListeners(): void {
        this._escListener = (event: KeyboardEvent) => {
            if (event.key === 'Escape') this._exitEdit();
        };
        document.addEventListener('keydown', this._escListener);

        if (!this._activeSegment) return;
        const render = this._renderManagerService.getRenderById(this._activeSegment.unitId);
        if (!render) return;
        const activeShapeKey = getDrawingShapeKeyByDrawingSearch(this._activeSegment);
        this._outsideClickSub = render.scene.onPointerDown$.subscribeEvent((evt: unknown) => {
            const target = (evt as { target?: { oKey?: string } }).target;
            if (target?.oKey === activeShapeKey) return;
            if (target?.oKey === `${activeShapeKey}${SHAPE_TEXT_OVERLAY_SUFFIX}`) return;
            this._exitEdit();
        });
    }

    private _unwireExitListeners(): void {
        if (this._escListener) {
            document.removeEventListener('keydown', this._escListener);
            this._escListener = null;
        }
        if (this._outsideClickSub) {
            this._outsideClickSub.unsubscribe();
            this._outsideClickSub = null;
        }
    }
}
