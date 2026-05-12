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

import type { IParsedImageWatermark, IParsedTextWatermark } from '../utils/parse/parse-watermark';
import type { ParsedRelationship } from '../utils/parse/types';
import { describe, expect, it } from 'vitest';
import { parseWatermarksBySource } from '../utils/parse/parse-watermark';

const NS = 'xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';

// Real shape extracted from python-docx's "Insert > Watermark" output
// (see 全格式.docx > word/header1.xml).
function realDraftHeader(): string {
    return `<w:hdr ${NS}>
  <w:p><w:r><w:rPr><w:noProof/></w:rPr><w:pict>
    <v:shape id="PowerPlusWaterMarkObject" o:spid="_x0000_s2049" type="#_x0000_t136"
             style="position:absolute;margin-left:0;margin-top:0;width:527.85pt;height:131.95pt;rotation:-45;z-index:-251658752;mso-position-horizontal:center;mso-position-vertical:center"
             fillcolor="#C0C0C0" stroked="f">
      <v:fill opacity=".5"/>
      <v:textpath style="font-family:&quot;Calibri&quot;;font-size:66pt" string="DRAFT"/>
    </v:shape>
  </w:pict></w:r></w:p>
  <w:p><w:r><w:t>python-docx Demo — Header</w:t></w:r></w:p>
</w:hdr>`;
}

function plainHeader(text: string): string {
    return `<w:hdr ${NS}><w:p><w:r><w:t>${text}</w:t></w:r></w:p></w:hdr>`;
}

function pictureWatermarkHeader(): string {
    return `<w:hdr ${NS}>
  <w:p><w:r><w:pict>
    <v:shape id="WordPictureWatermark1" type="#_x0000_t75"
             style="position:absolute;width:200pt;height:100pt">
      <v:imagedata r:id="rId1" o:title="logo"/>
    </v:shape>
  </w:pict></w:r></w:p>
</w:hdr>`;
}

const noMedia = new Map<string, Uint8Array>();

describe('parseWatermarksBySource', () => {
    it('extracts DRAFT text watermark from real Word/python-docx VML shape', () => {
        const out = parseWatermarksBySource(
            new Map([['header1', realDraftHeader()]]),
            'w:hdr',
            undefined,
            noMedia
        );
        const items = out.get('header1');
        expect(items?.length).toBe(1);
        const wm = items![0] as IParsedTextWatermark;
        expect(wm.type).toBe('text');
        expect(wm.content).toBe('DRAFT');
        // textpath style font-size is 66pt → ≈ 88px (pt × 96/72). The
        // shape style.height (131.95pt) is the bounding box, not the
        // glyph size; we prefer the textpath value.
        expect(wm.fontSize).toBe(88);
        expect(wm.fontFamily).toBe('Calibri');
        expect(wm.color).toBe('#C0C0C0');
        expect(wm.opacity).toBeCloseTo(0.5);
        expect(wm.rotate).toBe(-45);
        // Word's t136 shapetype defines fitshape="t" at the SHAPETYPE level,
        // so the instance shape doesn't repeat it. Default fitshape on for
        // t136 → emit boxWidth/boxHeight (shape style 527.85pt × 131.95pt
        // → px round). Without this, glyphs render at the textpath font-size
        // and look much smaller than Word.
        expect(wm.boxWidth).toBe(Math.round(527.85 * (96 / 72)));
        expect(wm.boxHeight).toBe(Math.round(131.95 * (96 / 72)));
    });

    it('omits sources with no VML pict', () => {
        const out = parseWatermarksBySource(
            new Map([['header1', plainHeader('Just a header')]]),
            'w:hdr',
            undefined,
            noMedia
        );
        expect(out.size).toBe(0);
    });

    it('keeps watermarks per-source so per-section behaviour works', () => {
        const out = parseWatermarksBySource(
            new Map([
                ['header1', realDraftHeader()],
                ['header2', plainHeader('Landscape Header')],
                ['header3', plainHeader('FIRST PAGE ONLY')],
            ]),
            'w:hdr',
            undefined,
            noMedia
        );
        expect(out.size).toBe(1);
        expect(out.get('header1')?.[0].type).toBe('text');
    });

    it('handles an empty source map', () => {
        const out = parseWatermarksBySource(new Map(), 'w:hdr', undefined, noMedia);
        expect(out.size).toBe(0);
    });

    it('tolerates malformed XML by skipping that source', () => {
        const out = parseWatermarksBySource(
            new Map([['header1', '<<<not xml>>>']]),
            'w:hdr',
            undefined,
            noMedia
        );
        expect(out.size).toBe(0);
    });

    it('detects text watermark by t136 shapetype even when id lacks "WaterMark"', () => {
        const xml = `<w:hdr ${NS}>
  <w:p><w:r><w:pict>
    <v:shape id="random_id" type="#_x0000_t136" fillcolor="#888888" style="rotation:-30;height:48pt">
      <v:fill opacity=".3"/>
      <v:textpath style="font-size:48pt" string="CONFIDENTIAL"/>
    </v:shape>
  </w:pict></w:r></w:p>
</w:hdr>`;
        const out = parseWatermarksBySource(
            new Map([['headerX', xml]]),
            'w:hdr',
            undefined,
            noMedia
        );
        const wm = out.get('headerX')?.[0] as IParsedTextWatermark;
        expect(wm.content).toBe('CONFIDENTIAL');
        expect(wm.rotate).toBe(-30);
        expect(wm.opacity).toBeCloseTo(0.3);
    });

    it('parses image watermark via header rels + media bytes', () => {
        const rels = new Map<string, ParsedRelationship>([
            ['rId1', { type: 'image', target: 'media/image1.png' }],
        ]);
        // Tiny 1x1 PNG (the smallest valid PNG: 67 bytes).
        const png = Uint8Array.from([
            0x89,
            0x50,
            0x4E,
            0x47,
            0x0D,
            0x0A,
            0x1A,
            0x0A,
            0x00,
            0x00,
            0x00,
            0x0D,
            0x49,
            0x48,
            0x44,
            0x52,
            0x00,
            0x00,
            0x00,
            0x01,
            0x00,
            0x00,
            0x00,
            0x01,
            0x08,
            0x06,
            0x00,
            0x00,
            0x00,
            0x1F,
            0x15,
            0xC4,
            0x89,
            0x00,
            0x00,
            0x00,
            0x0D,
            0x49,
            0x44,
            0x41,
            0x54,
            0x78,
            0x9C,
            0x63,
            0x00,
            0x01,
            0x00,
            0x00,
            0x05,
            0x00,
            0x01,
            0x0D,
            0x0A,
            0x2D,
            0xB4,
            0x00,
            0x00,
            0x00,
            0x00,
            0x49,
            0x45,
            0x4E,
            0x44,
            0xAE,
            0x42,
            0x60,
            0x82,
        ]);
        const media = new Map<string, Uint8Array>([['word/media/image1.png', png]]);
        const out = parseWatermarksBySource(
            new Map([['header1', pictureWatermarkHeader()]]),
            'w:hdr',
            new Map([['header1', rels]]),
            media
        );
        const wm = out.get('header1')?.[0] as IParsedImageWatermark;
        expect(wm.type).toBe('image');
        expect(wm.dataUrl.startsWith('data:image/png;base64,')).toBe(true);
        // Style is "width:200pt;height:100pt" → 267 × 133 px.
        expect(wm.width).toBe(Math.round(200 * (96 / 72)));
        expect(wm.height).toBe(Math.round(100 * (96 / 72)));
        expect(wm.originRatio).toBeCloseTo(wm.width / wm.height);
    });

    it('omits image watermark when the rel target has no media bytes', () => {
        const rels = new Map<string, ParsedRelationship>([
            ['rId1', { type: 'image', target: 'media/missing.png' }],
        ]);
        const out = parseWatermarksBySource(
            new Map([['header1', pictureWatermarkHeader()]]),
            'w:hdr',
            new Map([['header1', rels]]),
            new Map()
        );
        expect(out.size).toBe(0);
    });

    it('also parses footers when given root tag w:ftr', () => {
        const ftr = `<w:ftr ${NS}>
  <w:p><w:r><w:pict>
    <v:shape id="WaterMarkInFooter" type="#_x0000_t136" fillcolor="#222"
             style="height:80pt;rotation:0">
      <v:fill opacity=".4"/>
      <v:textpath string="FOOTER WM"/>
    </v:shape>
  </w:pict></w:r></w:p>
</w:ftr>`;
        const out = parseWatermarksBySource(
            new Map([['footer1', ftr]]),
            'w:ftr',
            undefined,
            noMedia
        );
        const wm = out.get('footer1')?.[0] as IParsedTextWatermark;
        expect(wm.content).toBe('FOOTER WM');
    });

    it('collects multiple shapes from a single source in source order', () => {
        const xml = `<w:hdr ${NS}>
  <w:p><w:r><w:pict>
    <v:shape id="WaterMarkA" type="#_x0000_t136" fillcolor="#000" style="height:60pt">
      <v:textpath string="FIRST"/>
    </v:shape>
  </w:pict></w:r></w:p>
  <w:p><w:r><w:pict>
    <v:shape id="WaterMarkB" type="#_x0000_t136" fillcolor="#000" style="height:60pt">
      <v:textpath string="SECOND"/>
    </v:shape>
  </w:pict></w:r></w:p>
</w:hdr>`;
        const out = parseWatermarksBySource(
            new Map([['header1', xml]]),
            'w:hdr',
            undefined,
            noMedia
        );
        const items = out.get('header1') as IParsedTextWatermark[];
        expect(items.map((i) => i.content)).toEqual(['FIRST', 'SECOND']);
    });
});
