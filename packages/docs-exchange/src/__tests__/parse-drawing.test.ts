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

import { describe, expect, it } from 'vitest';
import { buildDrawing, parseDrawingFromRunXml } from '../utils/parse/parse-drawing';

describe('parseDrawingFromRunXml', () => {
    it('extracts blip rId and EMU size', () => {
        const xml = `<w:drawing xmlns:w="x" xmlns:wp="y" xmlns:a="z" xmlns:r="r">
      <wp:inline>
        <wp:extent cx="952500" cy="952500"/>
        <a:graphic><a:graphicData><pic:pic xmlns:pic="p"><pic:blipFill><a:blip r:embed="rId5"/></pic:blipFill></pic:pic></a:graphicData></a:graphic>
      </wp:inline>
    </w:drawing>`;
        const info = parseDrawingFromRunXml(xml);
        expect(info?.kind).toBe('image');
        if (info?.kind === 'image') {
            expect(info.rId).toBe('rId5');
            expect(info.widthPx).toBe(100);
            expect(info.heightPx).toBe(100);
        }
    });

    it('returns undefined when no blip', () => {
        expect(parseDrawingFromRunXml('<w:drawing xmlns:w="x"/>')).toBeUndefined();
    });
});

describe('buildDrawing', () => {
    it('returns ISimpleDrawing with all required fields', () => {
        const rels = new Map([['rId1', { type: 'image' as const, target: 'media/image1.png' }]]);
        const media = new Map([['word/media/image1.png', new Uint8Array([0x89, 0x50])]]);
        const d = buildDrawing('d1', { kind: 'image', rId: 'rId1', widthPx: 50, heightPx: 60 }, rels, media);
        expect(d).toBeDefined();
        expect(d!.drawingId).toBe('d1');
        expect(d!.drawingType).toBe(0);
        expect(d!.imageSourceType).toBe('BASE64');
        expect(d!.source).toMatch(/^data:image\/png;base64,/);
        expect(d!.transform?.width).toBe(50);
        expect(d!.docTransform?.size.height).toBe(60);
    });

    it('resolves "../media/X" target relative to document.xml.rels', () => {
        const rels = new Map([['rId2', { type: 'image' as const, target: '../media/image2.jpg' }]]);
        const media = new Map([['word/media/image2.jpg', new Uint8Array([0xFF, 0xD8])]]);
        const d = buildDrawing('d2', { kind: 'image', rId: 'rId2' }, rels, media);
        expect(d?.source).toMatch(/^data:image\/jpeg;base64,/);
    });

    it('returns undefined when media bytes missing', () => {
        const rels = new Map([['rId3', { type: 'image' as const, target: 'media/missing.png' }]]);
        expect(buildDrawing('d3', { kind: 'image', rId: 'rId3' }, rels, new Map())).toBeUndefined();
    });

    it('returns undefined when rId resolves to non-image', () => {
        const rels = new Map([['rId4', { type: 'hyperlink' as const, target: 'https://x.com' }]]);
        expect(buildDrawing('d4', { kind: 'image', rId: 'rId4' }, rels, new Map())).toBeUndefined();
    });
});

describe('parseDrawingFromRunXml — shape (wps:wsp text box)', () => {
    const NS = `xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
        xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
        xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
        xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"`;

    function txtBoxXml(): string {
        // Mirrors the canonical python-docx text box fixture: AlternateContent
        // wrapping a wp:anchor with wps:wsp(spPr+txbx+bodyPr).
        return `<w:drawing ${NS}><mc:AlternateContent><mc:Choice Requires="wps">
        <w:drawing>
          <wp:anchor distT="0" distB="0" distL="114300" distR="114300" behindDoc="0">
            <wp:positionH relativeFrom="column"><wp:posOffset>95250</wp:posOffset></wp:positionH>
            <wp:positionV relativeFrom="paragraph"><wp:posOffset>190500</wp:posOffset></wp:positionV>
            <wp:extent cx="2743200" cy="914400"/>
            <wp:wrapNone/>
            <a:graphic><a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape">
              <wps:wsp>
                <wps:spPr>
                  <a:xfrm><a:off x="0" y="0"/><a:ext cx="2743200" cy="914400"/></a:xfrm>
                  <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
                  <a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill>
                  <a:ln w="6350"><a:solidFill><a:srgbClr val="000000"/></a:solidFill></a:ln>
                </wps:spPr>
                <wps:txbx><w:txbxContent>
                  <w:p><w:r><w:t>Hello box</w:t></w:r></w:p>
                </w:txbxContent></wps:txbx>
                <wps:bodyPr lIns="91440" tIns="45720" rIns="91440" bIns="45720" wrap="square" anchor="t"/>
              </wps:wsp>
            </a:graphicData></a:graphic>
          </wp:anchor>
        </w:drawing>
        </mc:Choice><mc:Fallback><w:pict/></mc:Fallback></mc:AlternateContent></w:drawing>`;
    }

    it('parses geometry, fill, stroke, bodyPr, and embedded text', () => {
        const info = parseDrawingFromRunXml(txtBoxXml());
        expect(info?.kind).toBe('shape');
        if (info?.kind !== 'shape') return;

        // 2743200 EMU / 9525 = 288 px;  914400 / 9525 = 96 px.
        expect(info.widthPx).toBe(288);
        expect(info.heightPx).toBe(96);
        expect(info.relativeFromH).toBe('column');
        expect(info.relativeFromV).toBe('paragraph');
        expect(info.posXPx).toBeCloseTo(10, 0); // 95250/9525
        expect(info.posYPx).toBeCloseTo(20, 0); // 190500/9525
        expect(info.behindDoc).toBe(undefined);

        expect(info.shapeProps.presetGeometry).toBe('rect');
        expect(info.shapeProps.fill).toEqual({ rgb: '#FFFFFF' });
        expect(info.shapeProps.stroke?.rgb).toBe('#000000');
        expect(info.shapeProps.stroke?.width).toBeCloseTo(6350 / 9525, 3);
        expect(info.shapeProps.bodyPr?.wrap).toBe('square');
        expect(info.shapeProps.bodyPr?.anchor).toBe('top');
        expect(info.shapeProps.bodyPr?.lIns).toBeCloseTo(91440 / 9525, 3);

        expect(info.textBoxBody?.dataStream).toBe('Hello box\r');
        expect(info.textBoxBody?.paragraphs?.length).toBe(1);
        // No rot attribute → undefined.
        expect(info.rotationDegrees).toBeUndefined();
    });

    it('extracts <a:xfrm rot> in degrees (60000ths-of-a-degree → degrees)', () => {
        // 1800000 / 60000 = 30 degrees clockwise.
        const xml = txtBoxXml().replace(
            '<a:xfrm><a:off x="0" y="0"/><a:ext cx="2743200" cy="914400"/></a:xfrm>',
            '<a:xfrm rot="1800000"><a:off x="0" y="0"/><a:ext cx="2743200" cy="914400"/></a:xfrm>'
        );
        const info = parseDrawingFromRunXml(xml);
        expect(info?.kind).toBe('shape');
        if (info?.kind !== 'shape') return;
        expect(info.rotationDegrees).toBeCloseTo(30, 5);

        const built = buildDrawing('shape-rot', info, new Map(), new Map());
        expect(built?.transform?.angle).toBeCloseTo(30, 5);
        expect(built?.docTransform?.angle).toBeCloseTo(30, 5);
    });

    it('emits drawingType=1 SHAPE through buildDrawing with shapeProperties + textBoxContent', () => {
        const info = parseDrawingFromRunXml(txtBoxXml());
        expect(info?.kind).toBe('shape');
        if (info?.kind !== 'shape') return;

        const built = buildDrawing('shape-1', info, new Map(), new Map());
        expect(built?.drawingType).toBe(1);
        expect(built?.layoutType).toBe(1); // WRAP_NONE
        expect(built?.shapeProperties?.fill).toEqual({ rgb: '#FFFFFF' });
        expect(built?.textBoxContent?.body.dataStream).toBe('Hello box\r');
        // posOffset preserved on docTransform so the renderer can place the shape.
        expect(built?.docTransform?.positionH.relativeFrom).toBe(2); // COLUMN
        expect(built?.docTransform?.positionV.relativeFrom).toBe(2); // PARAGRAPH
    });
});
