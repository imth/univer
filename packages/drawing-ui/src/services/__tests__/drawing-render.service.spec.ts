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

import { DrawingTypeEnum, UniverInstanceType } from '@univerjs/core';
import { getDrawingShapeKeyByDrawingSearch, ImageSourceType } from '@univerjs/drawing';
import { describe, expect, it, vi } from 'vitest';
import { DrawingRenderService, rotateInsetToWorld } from '../drawing-render.service';

vi.mock('@univerjs/drawing', async (importActual) => {
    const actual = await importActual<typeof import('@univerjs/drawing')>();
    return {
        ...actual,
        getDrawingShapeKeyByDrawingSearch: vi.fn(() => 'shape-key'),
    };
});

function createService(options?: { unitType?: UniverInstanceType; visible?: boolean; activeSheetId?: string }) {
    const drawingManagerService = {
        getDrawingVisible: vi.fn(() => options?.visible ?? true),
        getDrawingEditable: vi.fn(() => true),
        getDrawingOrder: vi.fn(() => ['drawing-1']),
    };
    const imageIoService = {
        getImageSourceCache: vi.fn(),
        getImage: vi.fn(),
        addImageSourceCache: vi.fn(),
    };
    const urlImageService = {
        getImage: vi.fn(),
    };
    const univerInstanceService = {
        getUnitType: vi.fn(() => options?.unitType ?? UniverInstanceType.UNIVER_DOC),
        getCurrentUnitOfType: vi.fn(() => ({
            getActiveSheet: vi.fn(() => ({ getSheetId: vi.fn(() => options?.activeSheetId ?? 'sheet-1') })),
        })),
    };
    const scene = {
        getObject: vi.fn(() => null),
        addObject: vi.fn(),
        attachTransformerTo: vi.fn(),
    };

    const drawingImageClipService = {
        applyShapeClip: vi.fn(),
    };

    return {
        drawingManagerService,
        imageIoService,
        scene,
        service: new DrawingRenderService(
            drawingManagerService as never,
            imageIoService as never,
            {} as never,
            urlImageService as never,
            univerInstanceService as never,
            {} as never,
            drawingImageClipService as never
        ),
        univerInstanceService,
    };
}

const baseImageParam = {
    drawingType: DrawingTypeEnum.DRAWING_IMAGE,
    drawingId: 'drawing-1',
    unitId: 'book-1',
    subUnitId: 'sheet-1',
    source: 'image-source',
    imageSourceType: ImageSourceType.BASE64,
    transform: { left: 10, top: 20, width: 30, height: 40, angle: 0, flipX: false, flipY: false, skewX: 0, skewY: 0 },
};

describe('DrawingRenderService', () => {
    it('skips rendering when the drawing is not visible, not an image, on another sheet, or missing transform', async () => {
        const hiddenCase = createService({ visible: false });
        expect(await hiddenCase.service.renderImages(baseImageParam as never, hiddenCase.scene as never)).toBeUndefined();
        expect(hiddenCase.scene.getObject).not.toHaveBeenCalled();

        const nonImageCase = createService();
        expect(await nonImageCase.service.renderImages({ ...baseImageParam, drawingType: DrawingTypeEnum.DRAWING_SHAPE } as never, nonImageCase.scene as never)).toBeUndefined();
        expect(nonImageCase.scene.getObject).not.toHaveBeenCalled();

        const inactiveSheetCase = createService({ unitType: UniverInstanceType.UNIVER_SHEET, activeSheetId: 'sheet-2' });
        expect(await inactiveSheetCase.service.renderImages(baseImageParam as never, inactiveSheetCase.scene as never)).toBeUndefined();
        expect(inactiveSheetCase.scene.getObject).not.toHaveBeenCalled();

        const noTransformCase = createService();
        expect(await noTransformCase.service.renderImages({ ...baseImageParam, transform: null } as never, noTransformCase.scene as never)).toBeUndefined();
        expect(noTransformCase.scene.getObject).not.toHaveBeenCalled();
    });

    it('updates existing scene objects instead of recreating them', async () => {
        const { scene, service } = createService();
        const transformByState = vi.fn();
        scene.getObject.mockReturnValue({ transformByState } as never);

        const result = await service.renderImages(baseImageParam as never, scene as never);

        expect(vi.mocked(getDrawingShapeKeyByDrawingSearch)).toHaveBeenCalledWith({
            drawingId: 'drawing-1',
            unitId: 'book-1',
            subUnitId: 'sheet-1',
        }, undefined);
        expect(transformByState).toHaveBeenCalledWith({
            left: 10,
            top: 20,
            width: 30,
            height: 40,
            angle: 0,
            flipX: false,
            flipY: false,
            skewX: 0,
            skewY: 0,
        });
        expect(scene.addObject).not.toHaveBeenCalled();
        expect(result).toEqual([]);
    });
});

describe('rotateInsetToWorld', () => {
    // For zero-angle, asymmetric, and symmetric-inset cases the inner-area
    // top-left in world space is just (rectLeft + lIns, rectTop + tIns) —
    // rotation is a no-op. The non-trivial cases are non-zero angle with
    // BOTH symmetric AND asymmetric insets, since asymmetric insets shift
    // the inner-area center off the rect center, so rotation translates
    // that offset before re-anchoring the overlay's top-left.

    it('zero angle short-circuits to (rectL+lIns, rectT+tIns)', () => {
        const r = rotateInsetToWorld(100, 200, 80, 40, 5, 3, 70, 30, 0);
        expect(r).toEqual({ left: 105, top: 203 });
    });

    it('symmetric insets, non-zero angle: overlay center coincides with rect center', () => {
        // Symmetric insets put the inner-area center exactly at the rect
        // center, so the offset (ox, oy) is (0, 0) and rotation doesn't
        // move it. Overlay top-left = rect top-left + (lIns, tIns).
        const angle = 26.32;
        const r = rotateInsetToWorld(120, 100, 288, 96, 9.6, 4.8, 268.8, 86.4, angle);
        expect(r.left).toBeCloseTo(129.6, 5);
        expect(r.top).toBeCloseTo(104.8, 5);
    });

    it('asymmetric insets at 90°: rotated offset becomes (-oy, ox) about rect center', () => {
        // rect 100×60 at (0, 0); insets lIns=20, rIns=10, tIns=10, bIns=20.
        // innerW=70, innerH=30, inner-center = (20+35, 10+15) = (55, 25).
        // rect center = (50, 30); offset (ox, oy) = (5, -5).
        // At 90° (cos=0, sin=1): rotated offset = (5*0 - (-5)*1, 5*1 + (-5)*0) = (5, 5).
        // innerCenter world = (50+5, 30+5) = (55, 35).
        // overlay top-left = (55 - 35, 35 - 15) = (20, 20).
        const r = rotateInsetToWorld(0, 0, 100, 60, 20, 10, 70, 30, 90);
        expect(r.left).toBeCloseTo(20, 5);
        expect(r.top).toBeCloseTo(20, 5);
    });

    it('asymmetric insets at 180°: offset is negated about rect center', () => {
        // Same rect/insets as above. ox=5, oy=-5.
        // At 180°: rotated offset = (-5, 5). innerCenter world = (45, 35).
        // overlay top-left = (45 - 35, 35 - 15) = (10, 20).
        const r = rotateInsetToWorld(0, 0, 100, 60, 20, 10, 70, 30, 180);
        expect(r.left).toBeCloseTo(10, 5);
        expect(r.top).toBeCloseTo(20, 5);
    });

    it('asymmetric insets at 360° equal zero-angle result', () => {
        const a = rotateInsetToWorld(0, 0, 100, 60, 20, 10, 70, 30, 0);
        const b = rotateInsetToWorld(0, 0, 100, 60, 20, 10, 70, 30, 360);
        expect(b.left).toBeCloseTo(a.left, 5);
        expect(b.top).toBeCloseTo(a.top, 5);
    });
});
