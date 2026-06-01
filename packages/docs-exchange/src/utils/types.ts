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

import type { IDocShapeProperties, ITextBoxContent } from '@univerjs/core';

export interface IUniverTextStyle {
    bl?: 0 | 1;
    it?: 0 | 1;
    ul?: { s: 0 | 1; t?: number };
    st?: { s: 0 | 1; t?: number };
    fs?: number;
    ff?: string;
    cl?: { rgb: string };
    bg?: { rgb: string };
    va?: number;
}

export interface IUniverTextRun {
    st: number;
    ed: number;
    ts?: IUniverTextStyle;
}

export interface IDrawingTransform {
    left: number;
    top: number;
    width: number;
    height: number;
    /** Rotation in degrees (clockwise). Optional — defaults to 0 downstream. */
    angle?: number;
    /** OOXML <a:xfrm flipH>. Horizontal mirror. */
    flipX?: boolean;
    /** OOXML <a:xfrm flipV>. Vertical mirror. */
    flipY?: boolean;
}

export interface IDocPositionAxis {
    relativeFrom: number;
    /** EMU→px offset. Mutually exclusive with align. */
    posOffset?: number;
    /** AlignTypeH / AlignTypeV enum value (from <wp:align>). */
    align?: number;
}

export interface IDocTransform {
    size: { width: number; height: number };
    positionH: IDocPositionAxis;
    positionV: IDocPositionAxis;
    angle: number;
}

export interface ISimpleDrawing {
    drawingId: string;
    drawingType: number;
    imageSourceType?: 'BASE64' | 'URL';
    source?: string;
    transform?: IDrawingTransform;
    docTransform?: IDocTransform;
    /** SHAPE only — geometry / fill / stroke / bodyPr from <wps:spPr>+<wps:bodyPr>. */
    shapeProperties?: IDocShapeProperties;
    /** SHAPE only — embedded paragraphs from <w:txbxContent>. */
    textBoxContent?: ITextBoxContent;
    /** OOXML wp:anchor behindDoc — 1 = render below body text, 0 = above (default). */
    behindDoc?: 0 | 1;
    /** Univer PositionedObjectLayoutType (INLINE=0, WRAP_NONE=1, etc.). */
    layoutType?: number;
    /** OOXML wrapSquare/Tight/Through wrapText → WrapTextType enum value. */
    wrapText?: number;
    /** Wrap distance margins (px). wrapSquare/Tight/Through use L/R; square/topAndBottom use T/B. */
    distL?: number;
    distT?: number;
    distR?: number;
    distB?: number;
    /** wrapPolygon start point (px, relative to drawing origin). */
    start?: number[];
    /** wrapPolygon subsequent points (px, relative to drawing origin). */
    lineTo?: number[][];
    /**
     * OOXML <a:srcRect> image crop, converted to Univer ISrcRect display px
     * (amount cropped off each edge).
     */
    srcRect?: { left?: number; top?: number; right?: number; bottom?: number };
}
