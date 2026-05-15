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

import type { IDocShapeProperties, IDocumentData, IDrawingSearch, ITextBoxContent, Workbook } from '@univerjs/core';
import type { IDocFloatDomData, IImageData } from '@univerjs/drawing';
import type { IImageProps, IRectProps, Scene, Transform, UniverRenderingContext } from '@univerjs/engine-render';
import { DrawingTypeEnum, Inject, IUniverInstanceService, IURLImageService, LocaleService, UniverInstanceType } from '@univerjs/core';
import { getDrawingShapeKeyByDrawingSearch, IDrawingManagerService, IImageIoService, ImageSourceType } from '@univerjs/drawing';
import { DRAWING_OBJECT_LAYER_INDEX, Image, Rect, RichText } from '@univerjs/engine-render';
import { IGalleryService } from '@univerjs/ui';
import { insertGroupObject } from '../controllers/utils';
import { DrawingImageClipService } from './drawing-image-clip.service';

/**
 * RichText subclass that clips its content to its own (pre-transform) bounding
 * box. Used for floating text-box overlays so that text overflowing the shape's
 * inner content area is visually cut off — matching Word's default behavior
 * (no `<a:spAutoFit/>`).
 *
 * The clip path is applied in local coordinates; canvas's current matrix
 * already includes the parent's transform (incl. angle), so the clip rotates
 * with the box automatically.
 */
class ClippedRichText extends RichText {
    /**
     * Intended visual bounds of the text overlay (the shape's inner content
     * area = outer rect minus bodyPr insets). RichText auto-grows
     * `this.height` to fit content (see its `onTransformChange$`
     * subscription that overrides height with the skeleton's natural size),
     * so we cannot clip against `this.width/height` — that would let tall
     * content paint outside the box. Instead we capture the requested
     * box size at construction and re-apply it whenever the parent rect
     * resizes.
     */
    clipWidth: number;
    clipHeight: number;

    constructor(...args: ConstructorParameters<typeof RichText>) {
        super(...args);
        // RichText's constructor calls _initialProps which OVERRIDES
        // this.width/height with the natural skeleton content size, not
        // the box size we requested. Pull the intended bounds from the
        // props arg instead.
        const props = args[2];
        this.clipWidth = props?.width ?? this.width;
        this.clipHeight = props?.height ?? this.height;
    }

    setClipSize(width: number, height: number): void {
        this.clipWidth = width;
        this.clipHeight = height;
    }

    /**
     * `BaseObject.transformForAngle` rotates about the geometric center
     * `(this.width/2, this.height/2)` — but RichText's `this.width/height`
     * track the natural skeleton content size, NOT our intended box size.
     * That makes the overlay rotate about a different center than its
     * sibling rect (which uses the box size for its own rotation),
     * producing a visible drift for any non-zero angle. Override the pivot
     * to use the box size we captured at construction so the two rotation
     * centers coincide.
     */
    override transformForAngle(transform: Transform) {
        if (this.angle !== 0) {
            const cx = (this.clipWidth + this.strokeWidth) / 2;
            const cy = (this.clipHeight + this.strokeWidth) / 2;
            transform.rotate(-this.angle);
            transform.translate(cx, cy);
            transform.rotate(this.angle);
            transform.translate(-cx, -cy);
        }
        return transform;
    }

    protected override _draw(ctx: UniverRenderingContext): void {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, this.clipWidth, this.clipHeight);
        ctx.clip();
        super._draw(ctx);
        ctx.restore();
    }
}

interface IShapeRenderTransform {
    left: number;
    top: number;
    width: number;
    height: number;
    angle?: number;
}

interface IShapeRenderParam {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    drawingType: DrawingTypeEnum;
    transform?: IShapeRenderTransform;
    shapeProperties?: IDocShapeProperties;
    textBoxContent?: ITextBoxContent;
}

function resolveShapeFill(props: IDocShapeProperties | undefined): string | undefined {
    if (!props?.fill) return undefined;
    if ('rgb' in props.fill) return props.fill.rgb;
    return undefined; // { type: 'none' }
}

function resolveShapeStroke(props: IDocShapeProperties | undefined): { color: string; width: number } | undefined {
    if (!props?.stroke) return undefined;
    return { color: props.stroke.rgb, width: Math.max(0.5, props.stroke.width) };
}

/**
 * Both the rect and the text overlay rotate about their **own center**
 * (see `BaseObject.transformForAngle` — it remaps `composeMatrix`'s
 * top-left pivot back to the geometric center). To keep the overlay
 * pinned to the rect's inner content area under rotation, we align
 * the two centers: compute where the inner-rect's center lands in
 * world space after the rect rotates about its own center, then back
 * out the overlay's top-left by subtracting half the overlay's size.
 */
function rotateInsetToWorld(
    rectLeft: number,
    rectTop: number,
    rectW: number,
    rectH: number,
    lIns: number,
    tIns: number,
    innerW: number,
    innerH: number,
    angleDeg: number
): { left: number; top: number } {
    if (!angleDeg) return { left: rectLeft + lIns, top: rectTop + tIns };
    const rad = (angleDeg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const cx = rectLeft + rectW / 2;
    const cy = rectTop + rectH / 2;
    // Inner-rect center expressed relative to rect center (local frame).
    const ox = lIns + innerW / 2 - rectW / 2;
    const oy = tIns + innerH / 2 - rectH / 2;
    // Rotate the offset and add back to world center → world-space inner center.
    const innerCx = cx + ox * cos - oy * sin;
    const innerCy = cy + ox * sin + oy * cos;
    // Overlay also rotates about its own center, so its top-left = inner center − half size.
    return { left: innerCx - innerW / 2, top: innerCy - innerH / 2 };
}

/**
 * Sibling scene-object key suffix for the text overlay we paint inside a
 * DRAWING_SHAPE rect. Exposed so `ShapeUpdateController` can find and
 * re-position the overlay when `refreshTransform$` fires.
 */
export const SHAPE_TEXT_OVERLAY_SUFFIX = '_TEXT';

// const IMAGE_VIEWER_DROPDOWN_PADDING = 50;

export class DrawingRenderService {
    constructor(
        @IDrawingManagerService private readonly _drawingManagerService: IDrawingManagerService,
        @IImageIoService private readonly _imageIoService: IImageIoService,
        @IGalleryService private readonly _galleryService: IGalleryService,
        @IURLImageService private readonly _urlImageService: IURLImageService,
        @IUniverInstanceService private readonly _univerInstanceService: IUniverInstanceService,
        @Inject(LocaleService) private readonly _localeService: LocaleService,
        @Inject(DrawingImageClipService) private readonly _drawingImageClipService: DrawingImageClipService
    ) { }

    // eslint-disable-next-line max-lines-per-function, complexity
    async renderImages(imageParam: IImageData, scene: Scene) {
        const {
            transform: singleTransform,
            drawingType,
            source,
            imageSourceType,
            srcRect,
            prstGeom,
            groupId,
            unitId,
            subUnitId,
            drawingId,
            isMultiTransform,
            transforms: multiTransforms,
            adjustValues,
            hidden,
        } = imageParam;

        if (drawingType !== DrawingTypeEnum.DRAWING_IMAGE) {
            return;
        }

        if (!this._drawingManagerService.getDrawingVisible()) {
            return;
        }

        if (this._univerInstanceService.getUnitType(unitId) === UniverInstanceType.UNIVER_SHEET && subUnitId !== this._getActiveSheetId()) {
            return;
        }

        if (singleTransform == null) {
            return;
        }

        const transforms = isMultiTransform && multiTransforms ? multiTransforms : [singleTransform];
        const images = [];

        for (const transform of transforms) {
            const { left, top, width, height, angle, flipX, flipY, skewX, skewY } = transform;
            const index = transforms.indexOf(transform);
            const imageShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId }, isMultiTransform ? index : undefined);

            const imageShape = scene.getObject(imageShapeKey);
            if (imageShape != null) {
                imageShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
                continue;
            }

            const orders = this._drawingManagerService.getDrawingOrder(unitId, subUnitId);
            const zIndex = orders.indexOf(drawingId);
            const imageConfig: IImageProps = { ...transform, zIndex: zIndex === -1 ? (orders.length - 1) : zIndex };
            const imageNativeCache = this._imageIoService.getImageSourceCache(source, imageSourceType);

            let shouldBeCache = false;
            if (imageNativeCache != null) {
                imageConfig.image = imageNativeCache;
            } else {
                if (imageSourceType === ImageSourceType.UUID) {
                    try {
                        imageConfig.url = await this._imageIoService.getImage(source);
                    } catch (error) {
                        console.error(error);
                        continue;
                    }
                } else if (imageSourceType === ImageSourceType.URL) {
                    try {
                        imageConfig.url = await this._urlImageService.getImage(source);
                    } catch (error) {
                        console.error(error);
                        imageConfig.url = source;
                    }
                    shouldBeCache = true;
                } else {
                    imageConfig.url = source;
                    shouldBeCache = true;
                }
            }

            if (hidden) {
                imageConfig.visible = false;
            }

            if (scene.getObject(imageShapeKey)) {
                // The image maybe already added  in the time we are getting  the source of the image
                continue;
            }

            imageConfig.printable = true;
            const image = new Image(imageShapeKey, imageConfig);
            image.setClipService(this._drawingImageClipService);
            if (shouldBeCache) {
                this._imageIoService.addImageSourceCache(source, imageSourceType, image.getNative());
            }

            scene.addObject(image, DRAWING_OBJECT_LAYER_INDEX);
            if (this._drawingManagerService.getDrawingEditable()) {
                scene.attachTransformerTo(image);
            }

            groupId && insertGroupObject({ drawingId: groupId, unitId, subUnitId }, image, scene, this._drawingManagerService);

            if (prstGeom != null) {
                image.setPrstGeom(prstGeom);
            }
            if (adjustValues != null) {
                image.setPrstGeomAdjValues(adjustValues);
            }
            if (srcRect != null) {
                image.setSrcRect(srcRect);
            }

            images.push(image);
        }

        return images;
    }

    private _getActiveSheetId(): string | undefined {
        return this._univerInstanceService
            .getCurrentUnitOfType<Workbook>(UniverInstanceType.UNIVER_SHEET)
            ?.getActiveSheet()
            ?.getSheetId();
    }

    renderFloatDom(param: IDocFloatDomData, scene: Scene) {
        const {
            transform: singleTransform,
            drawingType,
            groupId,
            unitId,
            subUnitId,
            drawingId,
            isMultiTransform,
            transforms: multiTransforms,
        } = param;
        if (drawingType !== DrawingTypeEnum.DRAWING_DOM) {
            return;
        }

        if (!this._drawingManagerService.getDrawingVisible()) {
            return;
        }

        if (singleTransform == null) {
            return;
        }

        const transforms = isMultiTransform && multiTransforms ? multiTransforms : [singleTransform];

        const rects = [];
        for (const transform of transforms) {
            const { left, top, width, height, angle, flipX, flipY, skewX, skewY } = transform;
            const index = transforms.indexOf(transform);
            const imageShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId }, isMultiTransform ? index : undefined);
            const imageShape = scene.getObject(imageShapeKey);

            if (imageShape != null) {
                imageShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
                continue;
            }

            const orders = this._drawingManagerService.getDrawingOrder(unitId, subUnitId);
            const zIndex = orders.indexOf(drawingId);
            const rectConfig: IRectProps = { ...transform, zIndex: zIndex === -1 ? (orders.length - 1) : zIndex };

            if (scene.getObject(imageShapeKey)) {
                // The image maybe already added  in the time we are getting  the source of the image
                continue;
            }

            rectConfig.printable = false;
            const rect = new Rect(imageShapeKey, rectConfig);

            if (!this._drawingManagerService.getDrawingVisible()) {
                continue;
            }

            scene.addObject(rect, DRAWING_OBJECT_LAYER_INDEX);
            if (this._drawingManagerService.getDrawingEditable() && param.allowTransform !== false) {
                scene.attachTransformerTo(rect);
            }

            groupId && insertGroupObject({ drawingId: groupId, unitId, subUnitId }, rect, scene, this._drawingManagerService);
            rects.push(rect);
        }

        return rects;
    }

    renderDrawing(param: IDrawingSearch, scene: Scene) {
        const drawingParam = this._drawingManagerService.getDrawingByParam(param);
        if (drawingParam == null) {
            return;
        }

        switch (drawingParam.drawingType) {
            case DrawingTypeEnum.DRAWING_IMAGE:
                return this.renderImages(drawingParam as IImageData, scene);
            case DrawingTypeEnum.DRAWING_SHAPE:
                return this.renderShapes(drawingParam as IShapeRenderParam, scene);
            default:
        }
    }

    /**
     * Render a DRAWING_SHAPE — currently scoped to OOXML text boxes
     * (preset rect / roundRect with fill / stroke + optional embedded
     * text body). Painted as a Rect on the DRAWING_OBJECT_LAYER, with
     * the embedded paragraphs overlaid via a sibling RichText object
     * when `textBoxContent` is present. RichText already wraps
     * DocumentSkeleton + Documents and handles layout against a page
     * size, so we only need to pass the inner content area (shape size
     * minus `bodyPr` insets).
     */
    renderShapes(param: IShapeRenderParam, scene: Scene) {
        const { transform, unitId, subUnitId, drawingId, drawingType, shapeProperties, textBoxContent } = param;
        if (drawingType !== DrawingTypeEnum.DRAWING_SHAPE) return;
        if (!this._drawingManagerService.getDrawingVisible()) return;
        if (transform == null) return;

        const shapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
        const existing = scene.getObject(shapeKey);
        if (existing) {
            existing.transformByState({ ...transform });
            return;
        }

        const orders = this._drawingManagerService.getDrawingOrder(unitId, subUnitId);
        const zIndex = orders.indexOf(drawingId);
        const baseZ = zIndex === -1 ? orders.length - 1 : zIndex;

        const fill = resolveShapeFill(shapeProperties);
        const stroke = resolveShapeStroke(shapeProperties);
        const rectConfig: IRectProps = {
            ...transform,
            zIndex: baseZ,
            fill,
            stroke: stroke?.color,
            strokeWidth: stroke?.width,
            printable: true,
        };

        const rect = new Rect(shapeKey, rectConfig);
        scene.addObject(rect, DRAWING_OBJECT_LAYER_INDEX);
        if (this._drawingManagerService.getDrawingEditable()) {
            scene.attachTransformerTo(rect);
        }

        if (textBoxContent) {
            const text = this._buildShapeTextOverlay(shapeKey, transform, shapeProperties, textBoxContent, baseZ);
            if (text) {
                scene.addObject(text, DRAWING_OBJECT_LAYER_INDEX);
                // Live-follow the rect during interactive drag/resize/rotate.
                // refreshTransform$ only fires on layout-driven recompute; the
                // scene transformer mutates the rect directly without round-
                // tripping through the model, so we hook the rect's per-mutation
                // observable to keep the text overlay glued to the box.
                const bodyPr = shapeProperties?.bodyPr;
                const lIns = bodyPr?.lIns ?? 0;
                const tIns = bodyPr?.tIns ?? 0;
                const rIns = bodyPr?.rIns ?? 0;
                const bIns = bodyPr?.bIns ?? 0;
                rect.onTransformChange$.subscribeEvent(() => {
                    const w = Math.max(0, rect.width - lIns - rIns);
                    const h = Math.max(0, rect.height - tIns - bIns);
                    const { left, top } = rotateInsetToWorld(rect.left, rect.top, rect.width, rect.height, lIns, tIns, w, h, rect.angle);
                    text.setClipSize(w, h);
                    text.transformByState({
                        left,
                        top,
                        width: w,
                        height: h,
                        angle: rect.angle,
                    });
                });
            }
        }
    }

    private _buildShapeTextOverlay(
        shapeKey: string,
        transform: IShapeRenderTransform,
        shapeProperties: IDocShapeProperties | undefined,
        textBoxContent: ITextBoxContent,
        baseZ: number
    ): ClippedRichText | null {
        const body = textBoxContent.body;
        if (!body || !body.dataStream) return null;

        const bodyPr = shapeProperties?.bodyPr;
        const lIns = bodyPr?.lIns ?? 0;
        const rIns = bodyPr?.rIns ?? 0;
        const tIns = bodyPr?.tIns ?? 0;
        const bIns = bodyPr?.bIns ?? 0;
        const innerW = Math.max(0, transform.width - lIns - rIns);
        const innerH = Math.max(0, transform.height - tIns - bIns);
        if (innerW <= 0 || innerH <= 0) return null;

        // The importer emits one `\r` per paragraph but no trailing `\n` — the
        // docs skeleton needs a section terminator to produce a page, so append
        // `\n` if it isn't already there.
        const dataStream = body.dataStream.endsWith('\n')
            ? body.dataStream
            : `${body.dataStream}\n`;

        // RichText takes a full IDocumentData. We only need the body — wrap
        // it with a minimal documentStyle whose pageSize forces wrap at the
        // inner width (height stays Infinity so content doesn't paginate;
        // overflow is clipped at the rect bound visually).
        const docData: IDocumentData = {
            id: `${shapeKey}_DOC`,
            body: { ...body, dataStream },
            documentStyle: {
                pageSize: { width: innerW, height: Number.POSITIVE_INFINITY },
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
            },
        };

        const { left: overlayLeft, top: overlayTop } = rotateInsetToWorld(
            transform.left,
            transform.top,
            transform.width,
            transform.height,
            lIns,
            tIns,
            innerW,
            innerH,
            transform.angle ?? 0
        );
        const overlay = new ClippedRichText(this._localeService, `${shapeKey}${SHAPE_TEXT_OVERLAY_SUFFIX}`, {
            left: overlayLeft,
            top: overlayTop,
            width: innerW,
            height: innerH,
            angle: transform.angle,
            zIndex: baseZ + 0.5,
            richText: docData,
            forceRender: true,
        });
        return overlay;
    }

    previewImage(key: string, src: string, width: number, height: number) {
        // const dialogId = `${key}-viewer-dialog`;

        // const screenWidth = window.innerWidth - IMAGE_VIEWER_DROPDOWN_PADDING;
        // const screenHeight = window.innerHeight - IMAGE_VIEWER_DROPDOWN_PADDING;

        // const adjustSize = this._adjustImageSize(width, height, screenWidth, screenHeight);
        this._galleryService.open({
            images: [src],
            onOpenChange: (open) => {
                if (!open) {
                    this._galleryService.close();
                }
            },
        });
    }

    private _adjustImageSize(nativeWidth: number, nativeHeight: number, screenWidth: number, screenHeight: number) {
        // Use native size if the image is smaller than the screen
        if (nativeWidth <= screenWidth && nativeHeight <= screenHeight) {
            return {
                width: nativeWidth,
                height: nativeHeight,
            };
        }

        // Calculate scale ratios
        const widthRatio = screenWidth / nativeWidth;
        const heightRatio = screenHeight / nativeHeight;
        const scale = Math.min(widthRatio, heightRatio); // Choose the smaller ratio to ensure the image fits within the screen

        // Return new dimensions
        return {
            width: Math.floor(nativeWidth * scale),
            height: Math.floor(nativeHeight * scale),
        };
    }
}
