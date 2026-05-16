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
import type { BaseObject, IRender } from '@univerjs/engine-render';
import type { Subscription } from 'rxjs';
import { Disposable, Inject, IUniverInstanceService } from '@univerjs/core';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { DocSelectionRenderService } from '@univerjs/docs-ui';
import { getDrawingShapeKeyByDrawingSearch, IDrawingManagerService } from '@univerjs/drawing';
import { ClippedRichText, SHAPE_TEXT_OVERLAY_SUFFIX } from '@univerjs/drawing-ui';
import { DocumentEditArea, IRenderManagerService, Vector2 } from '@univerjs/engine-render';

/**
 * Stage C — manage the lifecycle of "edit text inside a textbox".
 *
 * Subscribes to the body Documents object's `onDblclick$` (the same stream
 * DocHeaderFooterController uses) so we share the event queue and can
 * `state.stopPropagation()` after we've consumed a click — without that,
 * a dblclick on a textbox both enters textbox edit AND falls through to
 * header/footer edit.
 *
 * On dblclick we convert the canvas-pixel coordinate to scene-space via
 * the active viewport, then bbox-test against every textbox Rect's live
 * `left/top/width/height`. We can't use `scene.pick()` because the body
 * Documents object sits on a higher z-layer than DRAWING_OBJECT — picks
 * at the textbox always return the body.
 */
export class TextBoxEditController extends Disposable {
    /** Currently-edited drawing's segment, if any. */
    private _activeSegment: Nullable<IDrawingSearch> = null;
    /** Per-render scene-level dblclick subscription. */
    private readonly _sceneDblclickSubs: Map<string, Subscription> = new Map();
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
        this._wireExistingScenes();
        this._wireFutureRemovals();
    }

    override dispose(): void {
        this._exitEdit();
        for (const sub of this._sceneDblclickSubs.values()) sub.unsubscribe();
        this._sceneDblclickSubs.clear();
        super.dispose();
    }

    // ---------------------------------------------------------------------
    // Wiring
    // ---------------------------------------------------------------------

    private _wireExistingScenes(): void {
        const groups = this._drawingManagerService.drawingManagerData;
        for (const unitId in groups) {
            this._wireScene(unitId);
        }
    }

    private _wireFutureRemovals(): void {
        this.disposeWithMe(
            this._drawingManagerService.add$.subscribe((params: IDrawingSearch[]) => {
                for (const p of params) this._wireScene(p.unitId);
            })
        );
        this.disposeWithMe(
            this._drawingManagerService.remove$.subscribe((params: IDrawingSearch[]) => {
                for (const p of params) {
                    if (this._activeSegment && this._activeSegment.drawingId === p.drawingId) {
                        this._exitEdit();
                    }
                }
            })
        );
    }

    private _wireScene(unitId: string): void {
        if (this._sceneDblclickSubs.has(unitId)) return;
        const render = this._renderManagerService.getRenderById(unitId);
        if (!render) return;

        // Subscribe to the body Documents object's dblclick stream — not the
        // scene's — so we share the event queue with DocHeaderFooterController
        // and can stop propagation when we've consumed the click. Without
        // this, both controllers fire and a dblclick on a textbox enters
        // header/footer edit mode.
        const docObject = render.mainComponent as { onDblclick$?: { subscribeEvent: (cb: (evt: unknown, state: { stopPropagation: () => void }) => void) => Subscription } } | undefined;
        if (!docObject?.onDblclick$) return;

        const sub = docObject.onDblclick$.subscribeEvent((evt, state) => {
            const e = evt as { offsetX: number; offsetY: number };
            const canvasCoord = Vector2.FromArray([e.offsetX, e.offsetY]);
            const viewport = render.scene.getActiveViewportByCoord(canvasCoord);
            const sceneCoord = viewport
                ? viewport.transformVector2SceneCoord(canvasCoord)
                : canvasCoord;
            // eslint-disable-next-line no-console
            console.info('[TextBoxEdit] dblclick', { offsetX: e.offsetX, offsetY: e.offsetY, sceneX: sceneCoord.x, sceneY: sceneCoord.y, hasVp: !!viewport });
            const hit = this._findTextBoxAt(unitId, render, sceneCoord.x, sceneCoord.y);
            // eslint-disable-next-line no-console
            console.info('[TextBoxEdit] hit?', hit);
            if (!hit) return;
            this._enterEdit(hit);
            // eslint-disable-next-line no-console
            console.info('[TextBoxEdit] entered edit, activeSegment=', this._activeSegment);
            state.stopPropagation();
        });
        this._sceneDblclickSubs.set(unitId, sub);
    }

    /**
     * Bbox-test scene-space (x, y) against every textbox Rect's actual
     * scene-space rectangle. We read `left/top/width/height` off the live
     * Rect object (looked up via its shapeKey) rather than `drawing.transform`
     * because `transform` is in document-space (cumulative across pages),
     * while the Rect's own coordinates are post-layout scene-space — the
     * same space `transformVector2SceneCoord` produces for the click point.
     */
    private _findTextBoxAt(unitId: string, render: IRender, x: number, y: number): Nullable<IDrawingSearch> {
        const group = this._drawingManagerService.drawingManagerData[unitId];
        if (!group) return null;
        const debug: Array<Record<string, unknown>> = [];
        for (const subUnitId in group) {
            const sub = group[subUnitId];
            const drawings = sub?.data ?? {};
            const order = sub?.order ?? Object.keys(drawings);
            for (let i = order.length - 1; i >= 0; i--) {
                const drawingId = order[i];
                const d = drawings[drawingId] as IDocDrawingBase | undefined;
                if (!d?.textBoxContent?.body) {
                    debug.push({ drawingId, skip: 'no-body', drawingType: (d as { drawingType?: number } | undefined)?.drawingType });
                    continue;
                }
                const shapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
                const rect = render.scene.getObject(shapeKey) as Nullable<BaseObject>;
                if (!rect) {
                    debug.push({ drawingId, skip: 'no-rect', shapeKey });
                    continue;
                }
                const left = rect.left ?? 0;
                const top = rect.top ?? 0;
                const width = rect.width ?? 0;
                const height = rect.height ?? 0;
                debug.push({ drawingId, left, top, width, height });
                if (x >= left && x <= left + width && y >= top && y <= top + height) {
                    return { unitId, subUnitId, drawingId };
                }
            }
        }
        // eslint-disable-next-line no-console
        console.info('[TextBoxEdit] _findTextBoxAt MISS', { x, y, candidates: debug });
        return null;
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

        // We need a search shape key — reconstruct from active segment.
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
