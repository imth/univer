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

import type { IDrawingSearch, Nullable } from '@univerjs/core';
import { Disposable, DrawingTypeEnum, Inject, IUniverInstanceService } from '@univerjs/core';
import { getDrawingShapeKeyByDrawingSearch, IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { bufferTime, filter, map } from 'rxjs';
import { DrawingRenderService, SHAPE_TEXT_OVERLAY_SUFFIX } from '../services/drawing-render.service';
import { getCurrentUnitInfo } from './utils';

/**
 * Subscribes to {@link IDrawingManagerService.add$} for shapes (text boxes
 * imported from DOCX `<wps:wsp>`) and dispatches them to
 * {@link DrawingRenderService.renderDrawing}, which handles the
 * `DRAWING_SHAPE` case by adding a `Rect` (plus a `RichText` overlay for
 * the embedded text) to the scene.
 *
 * Mirrors `ImageUpdateController._drawingAddListener` — the image and
 * shape paths share the same add$ stream but render through different
 * service methods, so we keep them in separate controllers to avoid
 * cross-type coupling.
 *
 * Shapes also subscribe to `refreshTransform$` so the text overlay
 * follows the box Rect when the docs layout pass recomputes anchored
 * positions (the generic drawing-update controller only re-positions
 * the primary shape key — `${shapeKey}` — and isn't aware of the
 * sibling `${shapeKey}_TEXT` overlay we paint for shapes).
 */
export class ShapeUpdateController extends Disposable {
    constructor(
        @IRenderManagerService private readonly _renderManagerService: IRenderManagerService,
        @IDrawingManagerService private readonly _drawingManagerService: IDrawingManagerService,
        @IUniverInstanceService private readonly _currentUniverService: IUniverInstanceService,
        @Inject(DrawingRenderService) private readonly _drawingRenderService: DrawingRenderService
    ) {
        super();

        this._drawingAddListener();
        this._drawingRefreshListener();
    }

    private _drawingAddListener() {
        this.disposeWithMe(
            this._drawingManagerService.add$
                .pipe(
                    bufferTime(33),
                    filter((batches) => batches.length > 0),
                    map((batches) => batches.flat()),
                    map((items) => {
                        const map = new Map<string, IDrawingSearch>();
                        for (const it of items) {
                            map.set(`${it.unitId}|${it.subUnitId}|${it.drawingId}`, it);
                        }
                        return [...map.values()];
                    }),
                    filter((items) => items.length > 0)
                )
                .subscribe((uniqueParams) => {
                    this._insertShapes(uniqueParams);
                })
        );
    }

    private _insertShapes(params: IDrawingSearch[]) {
        for (const param of params) {
            const { unitId, subUnitId } = param;
            const renderObject = this._getScene(unitId);
            const currentSubUnitId = getCurrentUnitInfo(this._currentUniverService, unitId)?.subUnitId;
            if (renderObject == null || currentSubUnitId !== subUnitId) continue;

            const drawingParam = this._drawingManagerService.getDrawingByParam(param);
            if (drawingParam == null) continue;
            // Skip non-shape drawings — those are rendered by ImageUpdateController.
            if (drawingParam.drawingType !== DrawingTypeEnum.DRAWING_SHAPE) continue;

            this._drawingRenderService.renderDrawing(param, renderObject.scene);
        }
    }

    private _drawingRefreshListener() {
        this.disposeWithMe(
            this._drawingManagerService.refreshTransform$.subscribe((params) => {
                params.forEach((param) => {
                    const { unitId, subUnitId, drawingId } = param;
                    const renderObject = this._getScene(unitId);
                    if (renderObject == null) return;

                    const drawingParam = this._drawingManagerService.getDrawingByParam(param) as {
                        drawingType?: DrawingTypeEnum;
                        transform?: { left?: number; top?: number; width?: number; height?: number };
                        shapeProperties?: { bodyPr?: { lIns?: number; tIns?: number; rIns?: number; bIns?: number } };
                    } | null;
                    if (drawingParam == null) return;
                    // Only handle shapes — the generic drawing-update controller
                    // already re-positions the primary shape key for us.
                    if (drawingParam.drawingType !== DrawingTypeEnum.DRAWING_SHAPE) return;
                    if (drawingParam.transform == null) return;

                    const shapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
                    const overlay = renderObject.scene.getObject(`${shapeKey}${SHAPE_TEXT_OVERLAY_SUFFIX}`);
                    if (overlay == null) return;

                    const { left = 0, top = 0, width = 0, height = 0 } = drawingParam.transform;
                    const bodyPr = drawingParam.shapeProperties?.bodyPr;
                    const lIns = bodyPr?.lIns ?? 0;
                    const tIns = bodyPr?.tIns ?? 0;
                    const rIns = bodyPr?.rIns ?? 0;
                    const bIns = bodyPr?.bIns ?? 0;
                    overlay.transformByState({
                        left: left + lIns,
                        top: top + tIns,
                        width: Math.max(0, width - lIns - rIns),
                        height: Math.max(0, height - tIns - bIns),
                    });
                });
            })
        );
    }

    private _getScene(unitId: Nullable<string>) {
        if (unitId == null) return null;
        const renderObject = this._renderManagerService.getRenderById(unitId);
        const scene = renderObject?.scene;
        if (scene == null) return null;
        return { scene };
    }
}
