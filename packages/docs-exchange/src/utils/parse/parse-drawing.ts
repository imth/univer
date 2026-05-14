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
import type { ISimpleDrawing } from '../types';
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

export interface ImageDrawingInfo {
    kind: 'image';
    rId: string;
    widthPx?: number;
    heightPx?: number;
}

export interface ShapeDrawingInfo {
    kind: 'shape';
    widthPx: number;
    heightPx: number;
    /** EMU posOffset from `<wp:positionH>` resolved to px. */
    posXPx?: number;
    posYPx?: number;
    /**
     * `relativeFrom` value as written in OOXML — `column`, `paragraph`, `page`,
     * `margin`, `character`, `leftMargin`, etc. Renderer maps this into the
     * Univer `relativeFrom` enum; unknown values fall back to column/paragraph.
     */
    relativeFromH?: string;
    relativeFromV?: string;
    behindDoc?: boolean;
    shapeProps: IDocShapeProperties;
    /**
     * Pre-assembled body for the embedded text box (parsed from
     * `<w:txbxContent>`). When present, the renderer overlays a mini
     * DocumentSkeleton inside the shape.
     */
    textBoxBody?: IDocumentBody;
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

function emuAttrToPx(node: XmlNode | undefined, attr: string): number | undefined {
    if (!node) return undefined;
    const v = nodeAttrs(node)[attr] as string | undefined;
    if (v === undefined) return undefined;
    const n = Number(v);
    if (Number.isNaN(n)) return undefined;
    return n / EMU_PER_PX;
}

function parseShape(
    drawingNode: XmlNode,
    wsp: XmlNode,
    styles: StylesIndex | undefined,
    themeFonts: ThemeFonts | undefined
): ShapeDrawingInfo | undefined {
    // wp:anchor or wp:inline carries position + extent at the drawing level.
    const anchor = findFirstByName(drawingNode, 'wp:anchor');
    const inline = findFirstByName(drawingNode, 'wp:inline');
    const positioning = anchor ?? inline;
    if (!positioning) return undefined;

    const extent = findChild(positioning, 'wp:extent');
    const widthPx = emuAttrToPx(extent, '@_cx');
    const heightPx = emuAttrToPx(extent, '@_cy');
    if (widthPx === undefined || heightPx === undefined) return undefined;

    const out: ShapeDrawingInfo = {
        kind: 'shape',
        widthPx: Math.round(widthPx),
        heightPx: Math.round(heightPx),
        shapeProps: {},
    };

    if (anchor) {
        const behindDocAttr = nodeAttrs(anchor)['@_behindDoc'] as string | undefined;
        if (behindDocAttr === '1') out.behindDoc = true;
        const positionH = findChild(anchor, 'wp:positionH');
        const positionV = findChild(anchor, 'wp:positionV');
        if (positionH) {
            out.relativeFromH = nodeAttrs(positionH)['@_relativeFrom'] as string | undefined;
            const offset = findChild(positionH, 'wp:posOffset');
            if (offset) {
                const n = Number(textOf(offset));
                if (!Number.isNaN(n)) out.posXPx = n / EMU_PER_PX;
            }
        }
        if (positionV) {
            out.relativeFromV = nodeAttrs(positionV)['@_relativeFrom'] as string | undefined;
            const offset = findChild(positionV, 'wp:posOffset');
            if (offset) {
                const n = Number(textOf(offset));
                if (!Number.isNaN(n)) out.posYPx = n / EMU_PER_PX;
            }
        }
    }

    // wps:spPr → preset / fill / stroke
    const spPr = findChild(wsp, 'wps:spPr');
    if (spPr) {
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

function buildShapeDrawing(drawingId: string, info: ShapeDrawingInfo): ISimpleDrawing {
    const width = info.widthPx;
    const height = info.heightPx;
    const relH = info.relativeFromH ? REL_FROM_H_MAP[info.relativeFromH] ?? 2 : 2;
    const relV = info.relativeFromV ? REL_FROM_V_MAP[info.relativeFromV] ?? 2 : 2;
    return {
        drawingId,
        // DrawingTypeEnum.DRAWING_SHAPE = 1
        drawingType: 1,
        // PositionedObjectLayoutType.WRAP_NONE = 1 — Word text boxes draw on top
        // of body text; we don't yet support real flow-around for wrapSquare etc.
        layoutType: 1,
        transform: { left: info.posXPx ?? 0, top: info.posYPx ?? 0, width, height },
        docTransform: {
            size: { width, height },
            positionH: { relativeFrom: relH, posOffset: info.posXPx ?? 0 },
            positionV: { relativeFrom: relV, posOffset: info.posYPx ?? 0 },
            angle: 0,
        },
        shapeProperties: info.shapeProps,
        textBoxContent: info.textBoxBody ? { body: info.textBoxBody } : undefined,
        behindDoc: info.behindDoc ? 1 : 0,
    };
}
