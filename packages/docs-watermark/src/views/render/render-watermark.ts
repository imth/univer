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

import type { IUser, Nullable } from '@univerjs/core';
import type {
    IImageWatermarkConfig,
    ITextWatermarkConfig,
    IUserInfoWatermarkConfig,
    IWatermarkConfigWithType,
    UniverRenderingContext,
} from '@univerjs/engine-render';
import { IWatermarkTypeEnum } from '@univerjs/engine-render';

// Page-bounded watermark renderer. Differs from the sheets watermark util
// (which tiles across the whole canvas) by tiling within an explicit
// rectangle — the docs page world rect — and clipping so any partial
// glyph at the page edge is cut, not bled across the gutter.
//
// Caller must translate ctx so (0,0) is the page top-left BEFORE calling.
// We apply the clip ourselves inside save/restore so callers don't have to.
export interface IPageBounds {
    width: number;
    height: number;
}

export function renderWatermarkOnPage(
    ctx: UniverRenderingContext,
    config: IWatermarkConfigWithType,
    bounds: IPageBounds,
    image: Nullable<HTMLImageElement>,
    user: Nullable<IUser>
): void {
    ctx.save();
    // No clip here. The caller is responsible for clipping to the page
    // (or any other region). Bounds is the *positioning* box — anchors
    // like horizontal:center / vertical:bottom resolve relative to it,
    // but a rotated watermark is allowed to overhang into the margin
    // (Word/WPS render this way too).

    const { type, config: cfg } = config;
    if (type === IWatermarkTypeEnum.UserInfo && cfg.userInfo) {
        drawUserInfo(ctx, cfg.userInfo, bounds, user);
    } else if (type === IWatermarkTypeEnum.Image && cfg.image) {
        drawImage(ctx, cfg.image, bounds, image);
    } else if (type === IWatermarkTypeEnum.Text && cfg.text) {
        drawText(ctx, cfg.text, bounds);
    }

    ctx.restore();
}

function applyTextStyle(
    ctx: UniverRenderingContext,
    fontSize: number,
    color: string,
    bold: boolean,
    italic: boolean,
    direction: 'ltr' | 'rtl' | 'inherit',
    fontFamily?: string
): void {
    ctx.direction = direction;
    let style = '';
    if (italic) style += 'italic ';
    if (bold) style += 'bold ';
    style += `${fontSize}px ${fontFamily || 'Arial'}`;
    ctx.font = style;
    ctx.fillStyle = color;
}

function tile(
    bounds: IPageBounds,
    startX: number,
    startY: number,
    stepX: number,
    stepY: number,
    drawOne: (x: number, y: number) => void
): void {
    for (let y = startY; y < bounds.height; y += stepY) {
        for (let x = startX; x < bounds.width; x += stepX) {
            drawOne(x, y);
        }
    }
}

function drawText(ctx: UniverRenderingContext, cfg: ITextWatermarkConfig, bounds: IPageBounds): void {
    const { x, y, repeat, spacingX, spacingY, rotate, opacity, content, fontSize, color, bold, italic, direction, fontFamily, horizontalAlign, verticalAlign, boxWidth, boxHeight } = cfg;
    if (!content) return;

    ctx.globalAlpha = opacity;

    // VML "fitshape" → glyph height = boxHeight, glyph width gets a
    // non-uniform horizontal stretch so the run fills boxWidth. Replicates
    // how Word/WPS render their stretchy text watermarks (textpath
    // font-size is just a baseline; the visible size is the shape box).
    // Without a box, render at the raw fontSize with natural glyph width.
    const renderFontSize = boxHeight ?? fontSize;
    applyTextStyle(ctx, renderFontSize, color, bold, italic, direction, fontFamily);
    const naturalWidth = ctx.measureText(content).width;
    const scaleX = boxWidth != null && naturalWidth > 0 ? boxWidth / naturalWidth : 1;
    const drawnW = boxWidth ?? naturalWidth;
    const drawnH = renderFontSize;

    if (!repeat) {
        // Anchored placement (Word's mso-position / wp:positionH align):
        // anchor by the rendered box edge / center. Falls back to absolute
        // (x, y) for axes the importer didn't anchor.
        // Legacy: x===0 && y===0 with no anchors == "centered DRAFT-style"
        // sentinel (older importer convention; harmless to keep).
        const legacyCentered = x === 0 && y === 0 && !horizontalAlign && !verticalAlign;
        const hAlign = horizontalAlign ?? (legacyCentered ? 'center' : undefined);
        const vAlign = verticalAlign ?? (legacyCentered ? 'center' : undefined);
        const cx = anchorCoord(hAlign, x, drawnW, bounds.width);
        const cy = anchorCoord(vAlign, y, drawnH, bounds.height);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((Math.PI / 180) * rotate);
        if (scaleX !== 1) ctx.scale(scaleX, 1);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(content, 0, 0);
        ctx.restore();
        return;
    }

    const draw = (px: number, py: number) => {
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate((Math.PI / 180) * rotate);
        if (scaleX !== 1) ctx.scale(scaleX, 1);
        ctx.fillText(content, 0, 0);
        ctx.restore();
    };
    const stepX = drawnW + spacingX;
    const stepY = drawnH + spacingY;
    tile(bounds, x, y, stepX, stepY, draw);
}

function drawUserInfo(
    ctx: UniverRenderingContext,
    cfg: IUserInfoWatermarkConfig,
    bounds: IPageBounds,
    user: Nullable<IUser>
): void {
    const { x, y, repeat, spacingX, spacingY, rotate, opacity, name, fontSize, color, bold, italic, direction } = cfg;
    if (!user) return;

    let content = '';
    if (name) content += `${user.name} `;
    if (!content) return;

    ctx.globalAlpha = opacity;
    applyTextStyle(ctx, fontSize, color, bold, italic, direction);

    const draw = (px: number, py: number) => {
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate((Math.PI / 180) * rotate);
        ctx.fillText(content, 0, 0);
        ctx.restore();
    };

    if (repeat) {
        const stepX = ctx.measureText(content).width + spacingX;
        const stepY = fontSize + spacingY;
        tile(bounds, x, y, stepX, stepY, draw);
    } else {
        draw(x, y);
    }
}

function drawImage(
    ctx: UniverRenderingContext,
    cfg: IImageWatermarkConfig,
    bounds: IPageBounds,
    image: Nullable<HTMLImageElement>
): void {
    const { x, y, repeat, spacingX, spacingY, rotate, opacity, width, height, maintainAspectRatio, originRatio, horizontalAlign, verticalAlign } = cfg;
    if (!image?.complete) return;

    ctx.globalAlpha = opacity;
    const w = width;
    const h = maintainAspectRatio ? width / originRatio : height;

    if (!repeat) {
        // Same anchor convention as drawText. Legacy: x=y=0 with no anchors
        // == centered. Otherwise honour horizontal/verticalAlign per axis.
        const legacyCentered = x === 0 && y === 0 && !horizontalAlign && !verticalAlign;
        const hAlign = horizontalAlign ?? (legacyCentered ? 'center' : undefined);
        const vAlign = verticalAlign ?? (legacyCentered ? 'center' : undefined);
        const cx = anchorCoord(hAlign, x, w, bounds.width);
        const cy = anchorCoord(vAlign, y, h, bounds.height);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((Math.PI / 180) * rotate);
        ctx.drawImage(image, -w / 2, -h / 2, w, h);
        ctx.restore();
        return;
    }

    const draw = (px: number, py: number) => {
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate((Math.PI / 180) * rotate);
        ctx.drawImage(image, 0, 0, w, h);
        ctx.restore();
    };
    tile(bounds, x, y, w + spacingX, h + spacingY, draw);
}

// Compute the on-page CENTER coordinate of a watermark box on one axis.
// `align` is the anchor (start/center/end). Without an align we treat
// (x, y) as the box's TOP-LEFT and add half the box size to get the
// center, which is what the rotation pivot uses. With an align, x/y
// are ignored and the center is derived from the page edge.
function anchorCoord(
    align: 'start' | 'center' | 'end' | undefined,
    coord: number,
    boxSize: number,
    pageSize: number
): number {
    if (align === 'start') return boxSize / 2;
    if (align === 'end') return pageSize - boxSize / 2;
    if (align === 'center') return pageSize / 2;
    return coord + boxSize / 2;
}
