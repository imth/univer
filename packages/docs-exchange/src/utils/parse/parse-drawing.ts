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

import type { IDocShapeProperties, IDocumentBody } from '@univerjs/core';
import type { IDocPositionAxis, ISimpleDrawing } from '../types';
import type { StylesIndex } from './parse-styles';
import type { ThemeFonts } from './parse-theme';
import type { ParsedRelationship } from './types';
import type { XmlNode } from './xml';
import { bytesToBase64 } from './bytes';
import { parseParagraph } from './parse-paragraph';
import { findChild, nodeAttrs, nodeChildren, nodeName, textOf, xmlParser } from './xml';

// TODO(unsupported): wp:wrapSquare/Tight/Through actual flow-around (we render
// shapes/images in front of text regardless), a:xfrm rot, image cropping
// (a:srcRect), VML fallback (mc:Fallback path), custGeom, gradFill, shadows.

const EMU_PER_PX = 9525;

export type WrapMode = 'none' | 'square' | 'tight' | 'through' | 'topAndBottom';

export interface PositioningInfo {
    isInline: boolean;
    widthPx?: number;
    heightPx?: number;
    posXPx?: number;
    posYPx?: number;
    relativeFromH?: string;
    relativeFromV?: string;
    /** <wp:align> text for H axis (left/center/right/inside/outside). */
    alignH?: string;
    alignV?: string;
    wrapMode?: WrapMode;
    /** <wp:wrapSquare/Tight/Through wrapText> (bothSides/left/right/largest). */
    wrapText?: string;
    distLPx?: number;
    distTPx?: number;
    distRPx?: number;
    distBPx?: number;
    behindDoc?: boolean;
    polygon?: { start: [number, number]; lineTo: [number, number][] };
}

function emuStrToPx(v: unknown): number | undefined {
    if (v === undefined || v === null) return undefined;
    const n = Number(v);
    return Number.isNaN(n) ? undefined : n / EMU_PER_PX;
}

function emuTextToPx(node: XmlNode | undefined): number | undefined {
    if (!node) return undefined;
    return emuStrToPx(textOf(node));
}

function emuAttrToPx(node: XmlNode | undefined, attr: string): number | undefined {
    if (!node) return undefined;
    const v = nodeAttrs(node)[attr] as string | undefined;
    if (v === undefined) return undefined;
    const n = Number(v);
    if (Number.isNaN(n)) return undefined;
    return n / EMU_PER_PX;
}

function parseWrapPolygon(
    polygon: XmlNode
): { start: [number, number]; lineTo: [number, number][] } | undefined {
    const startNode = findChild(polygon, 'wp:start');
    if (!startNode) return undefined;
    const sx = emuAttrToPx(startNode, '@_x');
    const sy = emuAttrToPx(startNode, '@_y');
    if (sx === undefined || sy === undefined) return undefined;
    const lineTo: [number, number][] = [];
    for (const child of nodeChildren(polygon)) {
        if (nodeName(child) !== 'wp:lineTo') continue;
        const x = emuAttrToPx(child, '@_x');
        const y = emuAttrToPx(child, '@_y');
        if (x !== undefined && y !== undefined) lineTo.push([x, y]);
    }
    return { start: [sx, sy], lineTo };
}

const WRAP_TAGS: Array<[string, WrapMode]> = [
    ['wp:wrapNone', 'none'],
    ['wp:wrapSquare', 'square'],
    ['wp:wrapTight', 'tight'],
    ['wp:wrapThrough', 'through'],
    ['wp:wrapTopAndBottom', 'topAndBottom'],
];

/**
 * Parse the <wp:anchor>/<wp:inline> positioning shared by image and shape
 * drawings: extent, position (posOffset or align), wrap mode, dist margins,
 * behindDoc, and wrapPolygon points. Inline drawings carry only extent.
 */
export function parseAnchorPositioning(drawingNode: XmlNode): PositioningInfo {
    const anchor = findFirstByName(drawingNode, 'wp:anchor');
    const inline = findFirstByName(drawingNode, 'wp:inline');
    const positioning = anchor ?? inline;
    const out: PositioningInfo = { isInline: !anchor && !!inline };
    if (!positioning) return out;

    const extent = findChild(positioning, 'wp:extent');
    const cx = emuAttrToPx(extent, '@_cx');
    const cy = emuAttrToPx(extent, '@_cy');
    out.widthPx = cx === undefined ? undefined : Math.round(cx);
    out.heightPx = cy === undefined ? undefined : Math.round(cy);

    if (!anchor) return out;

    const aAttrs = nodeAttrs(anchor);
    if (aAttrs['@_behindDoc'] === '1') out.behindDoc = true;
    out.distLPx = emuStrToPx(aAttrs['@_distL']);
    out.distTPx = emuStrToPx(aAttrs['@_distT']);
    out.distRPx = emuStrToPx(aAttrs['@_distR']);
    out.distBPx = emuStrToPx(aAttrs['@_distB']);

    const positionH = findChild(anchor, 'wp:positionH');
    if (positionH) {
        out.relativeFromH = nodeAttrs(positionH)['@_relativeFrom'] as string | undefined;
        const offset = findChild(positionH, 'wp:posOffset');
        const align = findChild(positionH, 'wp:align');
        if (offset) out.posXPx = emuTextToPx(offset);
        else if (align) out.alignH = textOf(align);
    }
    const positionV = findChild(anchor, 'wp:positionV');
    if (positionV) {
        out.relativeFromV = nodeAttrs(positionV)['@_relativeFrom'] as string | undefined;
        const offset = findChild(positionV, 'wp:posOffset');
        const align = findChild(positionV, 'wp:align');
        if (offset) out.posYPx = emuTextToPx(offset);
        else if (align) out.alignV = textOf(align);
    }

    for (const [tag, mode] of WRAP_TAGS) {
        const el = findChild(anchor, tag);
        if (!el) continue;
        out.wrapMode = mode;
        const wt = nodeAttrs(el)['@_wrapText'] as string | undefined;
        if (wt) out.wrapText = wt;
        const polygon = findChild(el, 'wp:wrapPolygon');
        if (polygon) out.polygon = parseWrapPolygon(polygon);
        break;
    }

    return out;
}

export interface ImageDrawingInfo {
    kind: 'image';
    rId: string;
    widthPx?: number;
    heightPx?: number;
}

export interface ShapeDrawingInfo {
    kind: 'shape';
    positioning: PositioningInfo;
    shapeProps: IDocShapeProperties;
    textBoxBody?: IDocumentBody;
    rotationDegrees?: number;
}

export type DrawingInfo = ImageDrawingInfo | ShapeDrawingInfo;

function findFirstByName(node: XmlNode | undefined, target: string): XmlNode | undefined {
    if (!node || typeof node !== 'object') return undefined;
    const name = nodeName(node);
    if (name === target) return node;
    for (const child of nodeChildren(node)) {
        const found = findFirstByName(child, target);
        if (found) return found;
    }
    return undefined;
}

export function parseDrawingFromRunXml(drawingXml: string): DrawingInfo | undefined {
    let parsed: XmlNode[];
    try {
        parsed = xmlParser.parse(drawingXml) as XmlNode[];
    } catch {
        return undefined;
    }
    const root = parsed[0];
    return parseDrawingFromXmlNode(root);
}

/**
 * Parse a drawing from any XmlNode that may contain it. Recognises:
 *  - `<a:blip>` anywhere → image (rId + extent).
 *  - `<a:graphicData uri=".../wordprocessingShape">` → shape (wps:wsp).
 *  - `<mc:AlternateContent>` → recurse into `<mc:Choice>` first, then fall
 *     back to `<mc:Fallback>` (VML — currently no-op).
 */
export function parseDrawingFromXmlNode(
    node: XmlNode | undefined,
    styles?: StylesIndex,
    themeFonts?: ThemeFonts
): DrawingInfo | undefined {
    if (!node) return undefined;

    // Walk into mc:AlternateContent — Choice (DrawingML) wins over Fallback (VML).
    const altContent = findFirstByName(node, 'mc:AlternateContent');
    if (altContent) {
        const choice = findChild(altContent, 'mc:Choice');
        if (choice) {
            const fromChoice = parseDrawingFromXmlNode(choice, styles, themeFonts);
            if (fromChoice) return fromChoice;
        }
        // Fallback path is VML — not supported yet.
    }

    // Image path: any descendant `<a:blip>` carries the image rId.
    const blip = findFirstByName(node, 'a:blip');
    if (blip) {
        const rId = nodeAttrs(blip)['@_r:embed'];
        if (rId) {
            const out: ImageDrawingInfo = { kind: 'image', rId };
            const extent = findFirstByName(node, 'wp:extent');
            if (extent) {
                const a = nodeAttrs(extent);
                const cx = Number(a['@_cx']);
                const cy = Number(a['@_cy']);
                if (!Number.isNaN(cx)) out.widthPx = Math.round(cx / EMU_PER_PX);
                if (!Number.isNaN(cy)) out.heightPx = Math.round(cy / EMU_PER_PX);
            }
            return out;
        }
    }

    // Shape path: `<a:graphicData uri="...wordprocessingShape">` carrying a `<wps:wsp>`.
    const graphicData = findFirstByName(node, 'a:graphicData');
    const uri = graphicData ? (nodeAttrs(graphicData)['@_uri'] as string | undefined) : undefined;
    if (graphicData && uri && uri.includes('wordprocessingShape')) {
        const wsp = findFirstByName(graphicData, 'wps:wsp');
        if (wsp) return parseShape(node, wsp, styles, themeFonts);
    }

    return undefined;
}

function parseShape(
    drawingNode: XmlNode,
    wsp: XmlNode,
    styles: StylesIndex | undefined,
    themeFonts: ThemeFonts | undefined
): ShapeDrawingInfo | undefined {
    const positioning = parseAnchorPositioning(drawingNode);
    if (positioning.widthPx === undefined || positioning.heightPx === undefined) return undefined;

    const out: ShapeDrawingInfo = {
        kind: 'shape',
        positioning,
        shapeProps: {},
    };

    // wps:spPr → preset / fill / stroke / xfrm
    const spPr = findChild(wsp, 'wps:spPr');
    if (spPr) {
        const xfrm = findChild(spPr, 'a:xfrm');
        if (xfrm) {
            const rotAttr = nodeAttrs(xfrm)['@_rot'] as string | undefined;
            const rotRaw = rotAttr !== undefined ? Number(rotAttr) : 0;
            if (!Number.isNaN(rotRaw) && rotRaw !== 0) {
                // OOXML rot is 60000ths of a degree, range [0, 21600000).
                out.rotationDegrees = (rotRaw / 60000) % 360;
            }
        }
        const prstGeom = findChild(spPr, 'a:prstGeom');
        if (prstGeom) {
            const prst = nodeAttrs(prstGeom)['@_prst'] as string | undefined;
            if (prst) out.shapeProps.presetGeometry = prst;
        }

        // a:noFill is a sibling of a:solidFill at this level — explicit "no fill".
        if (findChild(spPr, 'a:noFill')) {
            out.shapeProps.fill = { type: 'none' };
        } else {
            const solidFill = findChild(spPr, 'a:solidFill');
            const fillRgb = solidFill ? srgbFromFill(solidFill) : undefined;
            if (fillRgb) out.shapeProps.fill = { rgb: fillRgb };
        }

        const ln = findChild(spPr, 'a:ln');
        if (ln) {
            const wAttr = nodeAttrs(ln)['@_w'] as string | undefined;
            const widthEmu = wAttr !== undefined ? Number(wAttr) : Number.NaN;
            const noLineFill = findChild(ln, 'a:noFill');
            if (!noLineFill) {
                const solidFill = findChild(ln, 'a:solidFill');
                const strokeRgb = solidFill ? srgbFromFill(solidFill) : undefined;
                // Default OOXML stroke color is black when omitted but the line is drawn.
                const finalRgb = strokeRgb ?? '#000000';
                const widthPxStroke = !Number.isNaN(widthEmu) ? widthEmu / EMU_PER_PX : 1;
                out.shapeProps.stroke = { rgb: finalRgb, width: widthPxStroke };
            }
        }
    }

    // wps:bodyPr → text-frame insets + wrap + anchor
    const bodyPr = findChild(wsp, 'wps:bodyPr');
    if (bodyPr) {
        const a = nodeAttrs(bodyPr);
        const ins: NonNullable<IDocShapeProperties['bodyPr']> = {};
        const lInsRaw = a['@_lIns'] as string | undefined;
        const tInsRaw = a['@_tIns'] as string | undefined;
        const rInsRaw = a['@_rIns'] as string | undefined;
        const bInsRaw = a['@_bIns'] as string | undefined;
        // OOXML default insets when omitted (in EMU): l/r = 91440, t/b = 45720.
        ins.lIns = (lInsRaw !== undefined ? Number(lInsRaw) : 91440) / EMU_PER_PX;
        ins.tIns = (tInsRaw !== undefined ? Number(tInsRaw) : 45720) / EMU_PER_PX;
        ins.rIns = (rInsRaw !== undefined ? Number(rInsRaw) : 91440) / EMU_PER_PX;
        ins.bIns = (bInsRaw !== undefined ? Number(bInsRaw) : 45720) / EMU_PER_PX;
        const wrap = a['@_wrap'] as string | undefined;
        if (wrap === 'square' || wrap === 'none') ins.wrap = wrap;
        const anchorAttr = a['@_anchor'] as string | undefined;
        if (
            anchorAttr === 'top' ||
            anchorAttr === 'ctr' ||
            anchorAttr === 'bottom' ||
            anchorAttr === 'just' ||
            anchorAttr === 'dist'
        ) {
            ins.anchor = anchorAttr;
        } else if (anchorAttr === 't') {
            ins.anchor = 'top';
        } else if (anchorAttr === 'b') {
            ins.anchor = 'bottom';
        }
        out.shapeProps.bodyPr = ins;
    }

    // wps:txbx > w:txbxContent → embedded paragraphs.
    const txbx = findChild(wsp, 'wps:txbx');
    const txbxContent = txbx ? findChild(txbx, 'w:txbxContent') : undefined;
    if (txbxContent) {
        const body = assembleTextBoxBody(txbxContent, styles, themeFonts);
        if (body) out.textBoxBody = body;
    }

    return out;
}

function srgbFromFill(fillNode: XmlNode): string | undefined {
    const srgb = findChild(fillNode, 'a:srgbClr');
    if (!srgb) return undefined;
    const v = nodeAttrs(srgb)['@_val'] as string | undefined;
    if (!v) return undefined;
    return `#${v.toUpperCase()}`;
}

/**
 * Assemble a minimal IDocumentBody from a `<w:txbxContent>` node by reusing
 * `parseParagraph` + a stripped-down emit loop (no numbering, no nested
 * drawings, no section breaks, no tables — text boxes don't carry those).
 */
function assembleTextBoxBody(
    txbxContent: XmlNode,
    styles: StylesIndex | undefined,
    themeFonts: ThemeFonts | undefined
): IDocumentBody | undefined {
    let data = '';
    const textRuns: NonNullable<IDocumentBody['textRuns']> = [];
    const paragraphs: NonNullable<IDocumentBody['paragraphs']> = [];

    for (const child of nodeChildren(txbxContent)) {
        if (nodeName(child) !== 'w:p') continue;
        const parsed = parseParagraph(child, undefined, styles, themeFonts);
        for (const run of parsed.runs) {
            if (!run.text) continue; // skip drawing/empty placeholders
            const start = data.length;
            data += run.text;
            const end = data.length;
            if (run.style) textRuns.push({ st: start, ed: end, ts: run.style as Record<string, unknown> });
        }
        const paraEnd = data.length;
        data += '\r';
        const entry: NonNullable<IDocumentBody['paragraphs']>[number] = { startIndex: paraEnd };
        if (parsed.style) {
            const { tabStopsClear: _ignored, ...rest } = parsed.style as Record<string, unknown> & {
                tabStopsClear?: unknown;
            };
            entry.paragraphStyle = rest as NonNullable<IDocumentBody['paragraphs']>[number]['paragraphStyle'];
        }
        paragraphs.push(entry);
    }

    if (paragraphs.length === 0) return undefined;
    return { dataStream: data, textRuns, paragraphs };
}

function resolveMediaPath(target: string): string {
    let t = target.replace(/^\/+/, '');
    while (t.startsWith('../')) t = t.slice(3);
    if (t.startsWith('word/')) return t;
    return `word/${t}`;
}

export function buildDrawing(
    drawingId: string,
    info: DrawingInfo,
    rels: Map<string, ParsedRelationship>,
    media: Map<string, Uint8Array>
): ISimpleDrawing | undefined {
    if (info.kind === 'image') return buildImageDrawing(drawingId, info, rels, media);
    if (info.kind === 'shape') return buildShapeDrawing(drawingId, info);
    return undefined;
}

function buildImageDrawing(
    drawingId: string,
    info: ImageDrawingInfo,
    rels: Map<string, ParsedRelationship>,
    media: Map<string, Uint8Array>
): ISimpleDrawing | undefined {
    const rel = rels.get(info.rId);
    if (!rel || rel.type !== 'image') return undefined;
    const path = resolveMediaPath(rel.target);
    const bytes = media.get(path);
    if (!bytes) return undefined;
    const ext = path.split('.').pop()?.toLowerCase() ?? 'png';
    const mime =
        ext === 'jpg' || ext === 'jpeg'
            ? 'image/jpeg'
            : ext === 'gif'
                ? 'image/gif'
                : ext === 'bmp'
                    ? 'image/bmp'
                    : 'image/png';
    const base64 = bytesToBase64(bytes);
    const width = info.widthPx ?? 100;
    const height = info.heightPx ?? 100;
    return {
        drawingId,
        drawingType: 0,
        imageSourceType: 'BASE64',
        source: `data:${mime};base64,${base64}`,
        transform: { left: 0, top: 0, width, height },
        docTransform: {
            size: { width, height },
            positionH: { relativeFrom: 2, posOffset: 0 },
            positionV: { relativeFrom: 1, posOffset: 0 },
            angle: 0,
        },
    };
}

// OOXML wp:positionH/V `relativeFrom` → Univer ObjectRelativeFromH/V.
// Univer enums (see core/src/types/interfaces/i-document-data.ts):
//   ObjectRelativeFromH: PAGE=0, MARGIN=1, COLUMN=2, CHARACTER=3, LEFT_MARGIN=4, RIGHT_MARGIN=5, INSIDE_MARGIN=6, OUTSIDE_MARGIN=7
//   ObjectRelativeFromV: PAGE=0, MARGIN=1, PARAGRAPH=2, LINE=3, TOP_MARGIN=4, BOTTOM_MARGIN=5, INSIDE_MARGIN=6, OUTSIDE_MARGIN=7
// Anything we can't map cleanly → COLUMN/PARAGRAPH (Word's most common defaults).
const REL_FROM_H_MAP: Record<string, number> = {
    page: 0,
    margin: 1,
    column: 2,
    character: 3,
    leftMargin: 4,
    rightMargin: 5,
    insideMargin: 6,
    outsideMargin: 7,
};
const REL_FROM_V_MAP: Record<string, number> = {
    page: 0,
    margin: 1,
    paragraph: 2,
    line: 3,
    topMargin: 4,
    bottomMargin: 5,
    insideMargin: 6,
    outsideMargin: 7,
};

// OOXML <wp:align> → Univer AlignTypeH / AlignTypeV enum values
// (see core/src/types/interfaces/i-document-data.ts):
//   AlignTypeH: CENTER=0, INSIDE=1, LEFT=2, OUTSIDE=3, RIGHT=4, BOTH=5, DISTRIBUTE=6
//   AlignTypeV: BOTTOM=0, CENTER=1, INSIDE=2, OUTSIDE=3, TOP=4
const ALIGN_H_MAP: Record<string, number> = { left: 2, center: 0, right: 4, inside: 1, outside: 3 };
const ALIGN_V_MAP: Record<string, number> = { top: 4, center: 1, bottom: 0, inside: 2, outside: 3 };

// PositionedObjectLayoutType numeric values (see @univerjs/core).
function mapWrapToLayoutType(p: PositioningInfo): number {
    if (p.isInline) return 0; // INLINE
    // NOTE: wrapTight/wrapThrough map to WRAP_TIGHT/WRAP_THROUGH (rectangular
    // bounding-box flow-around in engine-render). The <wp:wrapPolygon> points we
    // parse onto start/lineTo are only consumed by the engine for layoutType
    // WRAP_POLYGON (=2); whether to promote polygon-bearing tight/through wraps
    // to WRAP_POLYGON is a layer-2 decision to be calibrated during e2e (Task 8).
    switch (p.wrapMode) {
        case 'square': return 3; // WRAP_SQUARE
        case 'through': return 4; // WRAP_THROUGH
        case 'tight': return 5; // WRAP_TIGHT
        case 'topAndBottom': return 6; // WRAP_TOP_AND_BOTTOM
        case 'none':
        default: return 1; // WRAP_NONE
    }
}

// WrapTextType numeric values (see @univerjs/core).
function mapWrapText(wrapText: string | undefined): number | undefined {
    switch (wrapText) {
        case 'bothSides': return 0;
        case 'left': return 1;
        case 'right': return 2;
        case 'largest': return 3;
        default: return undefined;
    }
}

function buildAxis(
    relFrom: number,
    offsetPx: number | undefined,
    align: string | undefined,
    alignMap: Record<string, number>
): IDocPositionAxis {
    const axis: IDocPositionAxis = { relativeFrom: relFrom };
    if (align && alignMap[align] !== undefined) axis.align = alignMap[align];
    else axis.posOffset = offsetPx ?? 0;
    return axis;
}

/**
 * Write layoutType + wrap fields + position onto a drawing from PositioningInfo.
 * Shared by image and shape builders.
 */
function applyPositioning(
    drawing: ISimpleDrawing,
    p: PositioningInfo,
    width: number,
    height: number,
    angle: number
): void {
    drawing.layoutType = mapWrapToLayoutType(p);
    // Only emit behindDoc when true; absence is treated as 0 (in front) downstream.
    if (p.behindDoc) drawing.behindDoc = 1;

    const wrapText = mapWrapText(p.wrapText);
    if (wrapText !== undefined) drawing.wrapText = wrapText;
    if (p.distLPx !== undefined) drawing.distL = p.distLPx;
    if (p.distTPx !== undefined) drawing.distT = p.distTPx;
    if (p.distRPx !== undefined) drawing.distR = p.distRPx;
    if (p.distBPx !== undefined) drawing.distB = p.distBPx;
    if (p.polygon) {
        drawing.start = p.polygon.start;
        drawing.lineTo = p.polygon.lineTo;
    }

    const relH = p.relativeFromH ? REL_FROM_H_MAP[p.relativeFromH] ?? 2 : 2;
    const relV = p.relativeFromV ? REL_FROM_V_MAP[p.relativeFromV] ?? 2 : 2;
    // transform.left/top reflect posOffset only; <wp:align> intent lives on
    // docTransform.positionH/V.align (the anchored renderer reads docTransform).
    drawing.transform = { left: p.posXPx ?? 0, top: p.posYPx ?? 0, width, height, angle };
    drawing.docTransform = {
        size: { width, height },
        positionH: buildAxis(relH, p.posXPx, p.alignH, ALIGN_H_MAP),
        positionV: buildAxis(relV, p.posYPx, p.alignV, ALIGN_V_MAP),
        angle,
    };
}

function buildShapeDrawing(drawingId: string, info: ShapeDrawingInfo): ISimpleDrawing {
    const width = info.positioning.widthPx ?? 0;
    const height = info.positioning.heightPx ?? 0;
    const angle = info.rotationDegrees ?? 0;
    const drawing: ISimpleDrawing = {
        drawingId,
        drawingType: 1, // DrawingTypeEnum.DRAWING_SHAPE
        shapeProperties: info.shapeProps,
        textBoxContent: info.textBoxBody ? { body: info.textBoxBody } : undefined,
    };
    applyPositioning(drawing, info.positioning, width, height, angle);
    return drawing;
}
