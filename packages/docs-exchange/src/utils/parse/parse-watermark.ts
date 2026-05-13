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

import type { ParsedRelationship } from './types';
import type { XmlNode } from './xml';
import { bytesToBase64 } from './bytes';
import { parseDrawingFromXmlNode } from './parse-drawing';
import { nodeAttrs, nodeChildren, nodeName, xmlParser } from './xml';

// Word writes text watermarks as a legacy VML <w:pict> shape inside any
// header (or footer). The canonical structure (see Word's "Insert >
// Watermark" output and python-docx's defaults) is:
//
//   <w:pict>
//     <v:shape id="PowerPlusWaterMarkObject..." type="#_x0000_t136"
//              fillcolor="#C0C0C0" stroked="f"
//              style="position:absolute;width:527.85pt;height:131.95pt;
//                     rotation:-45;mso-position-horizontal:center;...">
//       <v:fill opacity=".5"/>
//       <v:textpath style="font-family:&quot;Calibri&quot;;font-size:66pt"
//                   string="DRAFT"/>
//     </v:shape>
//   </w:pict>
//
// Image watermarks ("picture watermark" in Word) are also VML shapes but
// with <v:imagedata r:id="..."> instead of <v:textpath>:
//
//   <v:shape id="WordPictureWatermark..." type="#_x0000_t75"
//            style="position:absolute;width:468pt;height:351pt;...">
//     <v:imagedata r:id="rId7" o:title="logo"/>
//   </v:shape>
//
// Detection heuristics (any one is sufficient):
//   * shape id contains "WaterMark"/"Watermark"
//   * shape type === "#_x0000_t136" (VML "text effects" — text watermarks)
//   * shape type === "#_x0000_t75" with a child <v:imagedata> inside a
//     <w:pict> directly under <w:hdr>/<w:ftr> (most permissive image
//     match — Word's picture watermark template uses t75 verbatim)

// Univer's text watermark config — kept in sync with engine-render's
// ITextWatermarkConfig but redeclared here to avoid pulling
// @univerjs/engine-render into the importer's runtime dependencies.
export interface IParsedTextWatermark {
    type: 'text';
    content: string;
    fontFamily: string;
    fontSize: number;
    color: string;
    bold: boolean;
    italic: boolean;
    direction: 'ltr' | 'rtl' | 'inherit';
    x: number;
    y: number;
    repeat: boolean;
    spacingX: number;
    spacingY: number;
    rotate: number;
    opacity: number;
    horizontalAlign?: 'start' | 'center' | 'end';
    verticalAlign?: 'start' | 'center' | 'end';
    boxWidth?: number;
    boxHeight?: number;
}

// Univer's image watermark config — same redeclaration rationale.
//
// Width/height are in CSS pixels (converted from VML pt). originRatio
// preserves the source's intrinsic aspect ratio so the renderer can
// optionally honour maintainAspectRatio without recomputing from bytes.
//
// dataUrl is the raw image as a "data:<mime>;base64,..." string —
// rendering happens client-side, and inlining keeps the watermark
// self-contained inside IDocumentData.resources (no media-table
// indirection, snapshot/collab/save round-trip just works).
export interface IParsedImageWatermark {
    type: 'image';
    dataUrl: string;
    width: number;
    height: number;
    originRatio: number;
    x: number;
    y: number;
    repeat: boolean;
    spacingX: number;
    spacingY: number;
    rotate: number;
    opacity: number;
    maintainAspectRatio: boolean;
    horizontalAlign?: 'start' | 'center' | 'end';
    verticalAlign?: 'start' | 'center' | 'end';
}

export type IParsedWatermark = IParsedTextWatermark | IParsedImageWatermark;

const DEFAULT_TEXT_WATERMARK: IParsedTextWatermark = {
    type: 'text',
    content: '',
    fontFamily: 'Arial',
    fontSize: 144,
    color: 'rgb(192,192,192)',
    bold: false,
    italic: false,
    direction: 'ltr',
    x: 0,
    y: 0,
    repeat: false,
    spacingX: 0,
    spacingY: 0,
    // No fallback rotation: a watermark with no explicit rotation in
    // either VML style:rotation or DrawingML xfrm@rot is upright. The
    // old "DRAFT defaults to -45" assumption is wrong for any modern
    // writer (WPS, current Word "Insert > Watermark") — they always
    // emit an explicit rotation when one is wanted.
    rotate: 0,
    opacity: 0.5,
};

const DEFAULT_IMAGE_WATERMARK: Omit<IParsedImageWatermark, 'dataUrl' | 'width' | 'height' | 'originRatio'> = {
    type: 'image',
    x: 0,
    y: 0,
    repeat: false,
    spacingX: 0,
    spacingY: 0,
    rotate: 0,
    opacity: 0.5,
    maintainAspectRatio: true,
};

interface ParseHfWatermarksOptions {
    rels: Map<string, ParsedRelationship>;
    media: Map<string, Uint8Array>;
}

/**
 * Parse every header/footer for its (zero or more) watermarks, returning
 * a map from header/footer stem ("header1", "footer2", ...) to the array
 * of parsed watermarks. Stems with no watermark are omitted.
 *
 * This preserves Word's "watermark belongs to a header/footer" model: a
 * later section that switches to a different headerN.xml without any
 * watermark VML renders blank. Returning a list (not a single config)
 * lets a single header carry multiple shapes — e.g. a logo image PLUS a
 * "DRAFT" text overlay, which Word allows.
 */
export function parseWatermarksBySource(
    sources: Map<string, string>,
    rootTag: 'w:hdr' | 'w:ftr',
    relsByStem: Map<string, Map<string, ParsedRelationship>> | undefined,
    media: Map<string, Uint8Array>
): Map<string, IParsedWatermark[]> {
    const out = new Map<string, IParsedWatermark[]>();
    for (const [stem, xml] of sources) {
        const rels = relsByStem?.get(stem) ?? new Map<string, ParsedRelationship>();
        const items = parseWatermarksFromXml(xml, rootTag, { rels, media });
        if (items.length > 0) out.set(stem, items);
    }
    return out;
}

function parseWatermarksFromXml(
    xml: string,
    rootTag: 'w:hdr' | 'w:ftr',
    opts: ParseHfWatermarksOptions
): IParsedWatermark[] {
    let parsed: XmlNode[];
    try {
        parsed = xmlParser.parse(xml) as XmlNode[];
    } catch {
        return [];
    }
    const root = parsed.find((n) => nodeName(n) === rootTag);
    if (!root) return [];

    const shapes = collectVmlWatermarkShapes(root);
    const out: IParsedWatermark[] = [];
    for (const shape of shapes) {
        const wm = parseShapeAsWatermark(shape, opts);
        if (wm) out.push(wm);
    }
    // Modern WPS/Word writes "picture watermark" as DrawingML rather than
    // VML — <w:drawing><wp:anchor behindDoc="1"> with a docPr name like
    // "WordPictureWatermark...". The VML scan above won't see them
    // (the VML <v:imagedata> in the same header is an empty stub with no
    // r:id). Walk the tree once more for these.
    const anchors = collectDrawingMlWatermarkAnchors(root);
    for (const anchor of anchors) {
        const wm = parseDrawingMlAnchorAsImage(anchor, opts);
        if (wm) out.push(wm);
    }
    return out;
}

function parseShapeAsWatermark(shape: XmlNode, opts: ParseHfWatermarksOptions): IParsedWatermark | null {
    const textpath = findChildDeep(shape, 'v:textpath');
    if (textpath) return parseTextShape(shape, textpath);

    const imagedata = findChildDeep(shape, 'v:imagedata');
    if (imagedata) return parseImageShape(shape, imagedata, opts);

    return null;
}

function parseTextShape(shape: XmlNode, textpath: XmlNode): IParsedTextWatermark | null {
    const tpAttrs = nodeAttrs(textpath);
    const content = tpAttrs['@_string'];
    if (!content) return null;

    const shapeAttrs = nodeAttrs(shape);
    const tpStyle = parseInlineStyle(tpAttrs['@_style'] ?? '');
    const shapeStyle = parseInlineStyle(shapeAttrs['@_style'] ?? '');

    const fillcolor = vmlFillColorToCss(shapeAttrs['@_fillcolor']);
    const opacity = parseFillOpacity(shape);
    const rotate = parseRotation(shapeStyle.rotation);
    const fontFamily = parseFontFamily(tpStyle['font-family']);
    const fontWeight = (tpStyle['font-weight'] ?? '').trim().toLowerCase();
    const fontStyle = (tpStyle['font-style'] ?? '').trim().toLowerCase();

    // VML watermark sizing: the textpath font-size is the baseline glyph
    // height the writer asked for (e.g. 36pt for WPS "你好", 66pt for
    // python-docx "DRAFT"). Whether glyphs actually render at that size
    // or get stretched to fill the shape box is decided by fitshape="t"
    // — see boxWidth/boxHeight emit below. We always set fontSize to the
    // textpath's baseline so the renderer has a sensible starting point;
    // when fitshape kicks in it will scale around it.
    const textpathFontPt = parsePtNumber(tpStyle['font-size']);
    const shapeWidthPt = parsePtNumber(shapeStyle.width);
    const shapeHeightPt = parsePtNumber(shapeStyle.height);
    // Word's WordArt watermark shapetype `_x0000_t136` defines
    // `<v:textpath on="t" fitshape="t"/>` at the SHAPETYPE level, so the
    // instance shape doesn't repeat the attribute. Default fitshape to
    // true for t136 unless the instance explicitly opts out with
    // `fitshape="f"`. Other shapetypes only get fitshape when the
    // instance textpath sets it.
    const shapeType = String(shapeAttrs['@_type'] ?? '');
    const isT136 = shapeType === '#_x0000_t136';
    const fitshapeAttr = String(tpAttrs['@_fitshape'] ?? '').toLowerCase();
    const fitshape = fitshapeAttr === 't'
        || (isT136 && fitshapeAttr !== 'f' && fitshapeAttr !== 'false');
    const ptSize = textpathFontPt ?? shapeHeightPt;
    const fontSize = ptSize != null
        ? Math.round(ptSize * (96 / 72))
        : DEFAULT_TEXT_WATERMARK.fontSize;
    const boxWidth = fitshape && shapeWidthPt != null ? Math.round(shapeWidthPt * (96 / 72)) : undefined;
    const boxHeight = fitshape && shapeHeightPt != null ? Math.round(shapeHeightPt * (96 / 72)) : undefined;

    return {
        ...DEFAULT_TEXT_WATERMARK,
        content,
        fontFamily: fontFamily ?? DEFAULT_TEXT_WATERMARK.fontFamily,
        fontSize,
        color: fillcolor ?? DEFAULT_TEXT_WATERMARK.color,
        opacity: opacity ?? DEFAULT_TEXT_WATERMARK.opacity,
        rotate: rotate ?? DEFAULT_TEXT_WATERMARK.rotate,
        // bold / italic / weight: Word watermarks rarely set these, but
        // when font-weight or font-style is present we honour them.
        bold: fontWeight === 'bold' || /^[5-9]\d{2}$/.test(fontWeight),
        italic: fontStyle === 'italic' || fontStyle === 'oblique',
        ...vmlMsoAnchors(shapeStyle),
        ...(boxWidth != null ? { boxWidth } : {}),
        ...(boxHeight != null ? { boxHeight } : {}),
    };
}

function parseImageShape(
    shape: XmlNode,
    imagedata: XmlNode,
    opts: ParseHfWatermarksOptions
): IParsedImageWatermark | null {
    const imgAttrs = nodeAttrs(imagedata);
    // r:id (or r:pict for older writers) points at a header rels entry
    // whose Target is the media path.
    const rId = imgAttrs['@_r:id'] ?? imgAttrs['@_r:pict'] ?? imgAttrs['@_id'];
    if (!rId) return null;

    const rel = opts.rels.get(rId);
    if (!rel || !rel.target) return null;

    const path = resolveMediaPath(rel.target);
    const bytes = opts.media.get(path);
    if (!bytes) return null;

    const ext = (path.split('.').pop() ?? 'png').toLowerCase();
    const mime = ext === 'jpg' || ext === 'jpeg'
        ? 'image/jpeg'
        : ext === 'gif'
            ? 'image/gif'
            : ext === 'bmp'
                ? 'image/bmp'
                : ext === 'svg'
                    ? 'image/svg+xml'
                    : 'image/png';
    const dataUrl = `data:${mime};base64,${bytesToBase64(bytes)}`;

    const shapeAttrs = nodeAttrs(shape);
    const shapeStyle = parseInlineStyle(shapeAttrs['@_style'] ?? '');
    const widthPt = parsePtNumber(shapeStyle.width);
    const heightPt = parsePtNumber(shapeStyle.height);
    // Default to a sensible page-fraction if the shape didn't carry size
    // (some older writers omit it on imagedata-only shapes).
    const width = widthPt != null ? Math.round(widthPt * (96 / 72)) : 468;
    const height = heightPt != null ? Math.round(heightPt * (96 / 72)) : 351;
    const originRatio = height > 0 ? width / height : 1;

    const opacity = parseFillOpacity(shape) ?? parseImagedataOpacity(imagedata);
    const rotate = parseRotation(shapeStyle.rotation);

    return {
        ...DEFAULT_IMAGE_WATERMARK,
        dataUrl,
        width,
        height,
        originRatio,
        opacity: opacity ?? DEFAULT_IMAGE_WATERMARK.opacity,
        rotate: rotate ?? DEFAULT_IMAGE_WATERMARK.rotate,
        ...vmlMsoAnchors(shapeStyle),
    };
}

// Walk the node subtree collecting every v:shape that looks like a
// watermark (text or image). Order is depth-first / source order, which
// matches Word's z-order: earlier shapes paint first, later ones on top.
function collectVmlWatermarkShapes(node: XmlNode): XmlNode[] {
    const out: XmlNode[] = [];
    const visit = (n: XmlNode) => {
        for (const child of nodeChildren(n)) {
            if (nodeName(child) === 'v:shape') {
                const attrs = nodeAttrs(child);
                const id = attrs['@_id'] ?? '';
                const type = attrs['@_type'] ?? '';
                const looksLikeWatermark =
                    /watermark/i.test(id) ||
                    type === '#_x0000_t136' ||
                    // t75 (image) without "watermark" in the id usually
                    // means an inline image, not a watermark — but Word's
                    // picture-watermark template always uses t75 inside a
                    // <w:pict>. We only treat t75 as a watermark when the
                    // shape id explicitly contains "WaterMark" or
                    // "PictureWatermark", or when it's the only shape in
                    // a <w:pict>. The first heuristic catches Word
                    // canonical output; the second is handled implicitly
                    // by the absence of competing shapes in the header.
                    (type === '#_x0000_t75' && /watermark|pict/i.test(id));
                if (looksLikeWatermark) out.push(child);
            }
            visit(child);
        }
    };
    visit(node);
    return out;
}

function findChildDeep(node: XmlNode, tagName: string): XmlNode | null {
    for (const child of nodeChildren(node)) {
        if (nodeName(child) === tagName) return child;
        const inner = findChildDeep(child, tagName);
        if (inner) return inner;
    }
    return null;
}

// Walk the subtree collecting every <wp:anchor> that looks like a
// "picture watermark" emitted by Word/WPS as DrawingML rather than VML.
// The defining traits, in priority order, are:
//   * behindDoc="1" on the anchor (watermarks always sit behind text), AND
//   * a <wp:docPr name="..."> whose name contains "Watermark" — Word's
//     canonical name is "WordPictureWatermark...", WPS uses the same.
// A few writers omit behindDoc but keep the name; we accept either signal
// when the other is present.
function collectDrawingMlWatermarkAnchors(node: XmlNode): XmlNode[] {
    const out: XmlNode[] = [];
    const visit = (n: XmlNode) => {
        for (const child of nodeChildren(n)) {
            if (nodeName(child) === 'wp:anchor') {
                const attrs = nodeAttrs(child);
                const behindDoc = String(attrs['@_behindDoc'] ?? '') === '1';
                const docPr = findChildDeep(child, 'wp:docPr');
                const name = docPr ? (nodeAttrs(docPr)['@_name'] ?? '') : '';
                const looksLikeWatermark = /watermark/i.test(name) || (behindDoc && /watermark/i.test(name));
                if (looksLikeWatermark) out.push(child);
            }
            visit(child);
        }
    };
    visit(node);
    return out;
}

// Parse a <wp:anchor> picture watermark into IParsedImageWatermark.
// Reuses parse-drawing's blip+extent reader for the r:embed and pixel
// size, then folds in rotation from <a:xfrm rot="..."> (60000ths of a
// degree, so divide by 60000 to get degrees).
function parseDrawingMlAnchorAsImage(
    anchor: XmlNode,
    opts: ParseHfWatermarksOptions
): IParsedImageWatermark | null {
    const info = parseDrawingFromXmlNode(anchor);
    if (!info || info.kind !== 'image') return null;
    const rel = opts.rels.get(info.rId);
    if (!rel || !rel.target) return null;
    const path = resolveMediaPath(rel.target);
    const bytes = opts.media.get(path);
    if (!bytes) return null;

    const ext = (path.split('.').pop() ?? 'png').toLowerCase();
    const mime = ext === 'jpg' || ext === 'jpeg'
        ? 'image/jpeg'
        : ext === 'gif'
            ? 'image/gif'
            : ext === 'bmp'
                ? 'image/bmp'
                : ext === 'svg'
                    ? 'image/svg+xml'
                    : 'image/png';
    const dataUrl = `data:${mime};base64,${bytesToBase64(bytes)}`;

    const width = info.widthPx ?? 468;
    const height = info.heightPx ?? 351;
    const originRatio = height > 0 ? width / height : 1;

    // a:xfrm rot is in 60000ths of a degree; negative = CCW.
    const xfrm = findChildDeep(anchor, 'a:xfrm');
    let rotate = 0;
    if (xfrm) {
        const rotAttr = nodeAttrs(xfrm)['@_rot'];
        if (rotAttr != null) {
            const n = Number(rotAttr);
            if (Number.isFinite(n)) rotate = n / 60000;
        }
    }

    // <wp:positionH><wp:align>center|left|right</wp:align></wp:positionH>
    // (and same for V) — the modern equivalent of mso-position-horizontal.
    const posH = findChildDeep(anchor, 'wp:positionH');
    const posV = findChildDeep(anchor, 'wp:positionV');
    const horizontalAlign = positionAlignFrom(posH, 'h');
    const verticalAlign = positionAlignFrom(posV, 'v');

    return {
        ...DEFAULT_IMAGE_WATERMARK,
        dataUrl,
        width,
        height,
        originRatio,
        rotate,
        ...(horizontalAlign ? { horizontalAlign } : {}),
        ...(verticalAlign ? { verticalAlign } : {}),
    };
}

function positionAlignFrom(node: XmlNode | null, axis: 'h' | 'v'): 'start' | 'center' | 'end' | undefined {
    if (!node) return undefined;
    const align = findChildDeep(node, 'wp:align');
    if (!align) return undefined;
    const text = String(typeof align === 'object' ? (align as any)['#text'] ?? '' : align ?? '').toLowerCase().trim();
    if (axis === 'h') {
        if (text === 'left') return 'start';
        if (text === 'center') return 'center';
        if (text === 'right') return 'end';
    } else {
        if (text === 'top') return 'start';
        if (text === 'center') return 'center';
        if (text === 'bottom') return 'end';
    }
    return undefined;
}

// VML "mso-position-horizontal:left|center|right" (+ vertical:top|center|bottom)
// → renderer-friendly start/center/end. Returns an object suitable for spread
// into the watermark config; missing axes are simply omitted so the renderer
// falls back to absolute x/y.
function vmlMsoAnchors(shapeStyle: Record<string, string>): {
    horizontalAlign?: 'start' | 'center' | 'end';
    verticalAlign?: 'start' | 'center' | 'end';
} {
    const out: { horizontalAlign?: 'start' | 'center' | 'end'; verticalAlign?: 'start' | 'center' | 'end' } = {};
    const h = (shapeStyle['mso-position-horizontal'] ?? '').trim().toLowerCase();
    if (h === 'left') out.horizontalAlign = 'start';
    else if (h === 'center') out.horizontalAlign = 'center';
    else if (h === 'right') out.horizontalAlign = 'end';
    const v = (shapeStyle['mso-position-vertical'] ?? '').trim().toLowerCase();
    if (v === 'top') out.verticalAlign = 'start';
    else if (v === 'center') out.verticalAlign = 'center';
    else if (v === 'bottom') out.verticalAlign = 'end';
    return out;
}

// VML inline style is a CSS-ish "k:v;k:v" string. The values can carry
// quoted commas (font-family) or units (pt, px, deg) so we keep the raw
// string and parse on demand per field.
function parseInlineStyle(raw: string): Record<string, string> {
    const out: Record<string, string> = {};
    for (const decl of raw.split(';')) {
        const i = decl.indexOf(':');
        if (i < 0) continue;
        const key = decl.slice(0, i).trim().toLowerCase();
        const value = decl.slice(i + 1).trim();
        if (key) out[key] = value;
    }
    return out;
}

// "66pt" → 66. Word's font-size in VML watermarks is always in points,
// which is what Univer's ITextWatermarkConfig.fontSize expects too.
function parsePtNumber(raw: string | undefined): number | null {
    if (!raw) return null;
    const m = /^(-?\d+(?:\.\d+)?)\s*pt$/i.exec(raw.trim());
    return m ? Number.parseFloat(m[1]) : null;
}

// VML fillcolor is a CSS-style color: "#C0C0C0", "silver", or "rgb(...)".
// Pass through; Univer's canvas accepts the same syntax. We don't try to
// normalize because canvas2d will accept whatever Word emits.
function vmlFillColorToCss(raw: string | undefined): string | null {
    if (!raw) return null;
    const t = raw.trim();
    return t || null;
}

// <v:fill opacity=".5"/> → 0.5. Opacity may be on the shape itself
// ("opacity" attr) but on watermarks Word reliably puts it on a child
// <v:fill>. Falls back to "1.0" attr form some older Office writers use.
function parseFillOpacity(shape: XmlNode): number | null {
    const fill = findChildDeep(shape, 'v:fill');
    if (!fill) return null;
    const attrs = nodeAttrs(fill);
    const raw = attrs['@_opacity'];
    if (!raw) return null;
    return parseVmlOpacity(raw);
}

// Image watermarks may put opacity on the <v:imagedata> itself rather
// than a sibling <v:fill>. Same numeric forms ("0.5", ".5", "32768f").
function parseImagedataOpacity(imagedata: XmlNode): number | null {
    const raw = nodeAttrs(imagedata)['@_chromakey'] // chromakey is colour, ignore
        ? null
        : (nodeAttrs(imagedata)['@_opacity'] ?? null);
    if (!raw) return null;
    return parseVmlOpacity(raw);
}

function parseVmlOpacity(raw: string): number | null {
    const t = raw.trim();
    if (t.endsWith('f')) {
        const n = Number.parseFloat(t.slice(0, -1));
        return Number.isFinite(n) ? n / 65536 : null;
    }
    const n = Number.parseFloat(t);
    return Number.isFinite(n) ? n : null;
}

// VML rotation is an angle in degrees, sometimes suffixed by deg.
function parseRotation(raw: string | undefined): number | null {
    if (!raw) return null;
    const m = /^(-?\d+(?:\.\d+)?)\s*(?:deg)?$/i.exec(raw.trim());
    return m ? Number.parseFloat(m[1]) : null;
}

// VML font-family looks like &quot;Calibri&quot; (already unescaped by
// the XML parser to a literal `"Calibri"` or just `Calibri`). We strip
// the surrounding quotes and trailing alternates ("Calibri, Arial").
function parseFontFamily(raw: string | undefined): string | null {
    if (!raw) return null;
    const first = raw.split(',')[0].trim();
    const unquoted = first.replace(/^["']|["']$/g, '').trim();
    return unquoted || null;
}

// Resolve a header/footer rels Target into a media-map key like
// "word/media/image1.png". Headers' rels Targets are written
// relative to word/_rels/headerN.xml.rels (so "media/image1.png"
// without the "word/" prefix). Same one-line normalization as
// parse-drawing.ts.
function resolveMediaPath(target: string): string {
    let t = target.replace(/^\/+/, '');
    while (t.startsWith('../')) t = t.slice(3);
    if (t.startsWith('word/')) return t;
    return `word/${t}`;
}
