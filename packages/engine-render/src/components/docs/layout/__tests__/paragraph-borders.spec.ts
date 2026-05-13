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

import type { IParagraphBorder, IParagraphStyle } from '@univerjs/core';
import type {
    IDocumentSkeletonColumn,
    IDocumentSkeletonGlyph,
    IDocumentSkeletonLine,
    IDocumentSkeletonPage,
    IDocumentSkeletonSection,
} from '../../../../basics/i-document-skeleton-cached';
import type { IParagraphConfig } from '../../../../basics/interfaces';
import type { ILayoutContext } from '../tools';
import { DashStyleType, DataStreamTreeTokenType } from '@univerjs/core';
import { describe, expect, it } from 'vitest';
import { GlyphType } from '../../../../basics/i-document-skeleton-cached';
import { assignParagraphBorders } from '../tools';

const SOLID_BLACK: IParagraphBorder = {
    color: { rgb: '#000000' },
    width: 1,
    dashStyle: DashStyleType.SOLID,
    padding: 1,
};
const SOLID_RED: IParagraphBorder = {
    color: { rgb: '#FF0000' },
    width: 1,
    dashStyle: DashStyleType.SOLID,
    padding: 1,
};

function makeBoxStyle(extra: Partial<IParagraphStyle> = {}): IParagraphStyle {
    return {
        borderTop: SOLID_BLACK,
        borderBottom: SOLID_BLACK,
        borderLeft: SOLID_BLACK,
        borderRight: SOLID_BLACK,
        ...extra,
    };
}

function makeTerminatorGlyph(): IDocumentSkeletonGlyph {
    return {
        glyphType: GlyphType.LETTER,
        streamType: DataStreamTreeTokenType.PARAGRAPH,
        width: 0,
        bBox: { width: 0, ba: 0, bd: 0, aba: 0, abd: 0, sp: 0, sbr: 0, sbo: 0, spr: 0, spo: 0 },
        xOffset: 0,
        left: 0,
        count: 1,
        content: '\r',
        raw: '\r',
        adjustability: { stretchability: [0, 0], shrinkability: [0, 0] },
        isJustifiable: false,
    };
}

function makeLine(paragraphIndex: number, terminator: boolean): IDocumentSkeletonLine {
    return {
        paragraphIndex,
        type: 0,
        divides: terminator
            ? [{
                glyphGroup: [makeTerminatorGlyph()],
                width: 0,
                left: 0,
                paddingLeft: 0,
                isFull: false,
                st: 0,
                ed: 0,
            }]
            : [],
        divideLen: 0,
        lineHeight: 20,
        contentHeight: 20,
        top: 0,
        asc: 0,
        dsc: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
        spaceBelowApply: 0,
        st: 0,
        ed: 0,
        lineIndex: 0,
        paragraphStart: false,
        isBehindTable: false,
        tableId: '',
    } as IDocumentSkeletonLine;
}

function makeColumn(): IDocumentSkeletonColumn {
    return {
        lines: [],
        left: 0,
        width: 100,
        height: 0,
        spaceWidth: 0,
        separator: 1,
        st: 0,
        ed: 0,
        drawingLRIds: [],
        isFull: false,
    };
}

function buildPages(layout: { paragraphIndex: number; terminator?: boolean }[][][]): {
    pages: IDocumentSkeletonPage[];
    lines: Map<number, IDocumentSkeletonLine[]>;
} {
    // layout shape: pages → columns → lines
    const pages: IDocumentSkeletonPage[] = [];
    const linesByPara = new Map<number, IDocumentSkeletonLine[]>();

    for (const pageSpec of layout) {
        const cols: IDocumentSkeletonColumn[] = [];
        for (const colSpec of pageSpec) {
            const column = makeColumn();
            for (const lineSpec of colSpec) {
                const line = makeLine(lineSpec.paragraphIndex, !!lineSpec.terminator);
                line.parent = column;
                column.lines.push(line);
                let arr = linesByPara.get(lineSpec.paragraphIndex);
                if (!arr) {
                    arr = [];
                    linesByPara.set(lineSpec.paragraphIndex, arr);
                }
                arr.push(line);
            }
            cols.push(column);
        }
        const section = { columns: cols, colCount: cols.length, height: 0, top: 0, st: 0, ed: 0 } as IDocumentSkeletonSection;
        cols.forEach((c) => {
            c.parent = section;
        });
        const page = {
            sections: [section],
            segmentId: '',
        } as unknown as IDocumentSkeletonPage;
        section.parent = page;
        pages.push(page);
    }
    return { pages, lines: linesByPara };
}

function makeCtx(styleByPara: Record<number, IParagraphStyle | undefined>): ILayoutContext {
    const segCache = new Map<number, IParagraphConfig>();
    for (const [k, v] of Object.entries(styleByPara)) {
        const idx = Number(k);
        segCache.set(idx, { paragraphIndex: idx, paragraphStyle: v, skeHeaders: new Map(), skeFooters: new Map() } as IParagraphConfig);
    }
    return {
        paragraphConfigCache: new Map([['', segCache]]),
    } as unknown as ILayoutContext;
}

describe('assignParagraphBorders', () => {
    it('assigns 4 sides to a single-line, single-paragraph box', () => {
        const { pages, lines } = buildPages([[[
            { paragraphIndex: 1, terminator: true },
        ]]]);
        const ctx = makeCtx({ 1: makeBoxStyle() });

        assignParagraphBorders(ctx, pages);

        const line = lines.get(1)![0];
        expect(line.borderTop).toBe(SOLID_BLACK);
        expect(line.borderBottom).toBe(SOLID_BLACK);
        expect(line.borderLeft).toBe(SOLID_BLACK);
        expect(line.borderRight).toBe(SOLID_BLACK);
        expect(line.borderBetween).toBeUndefined();
    });

    it('places top on first line and bottom on last line of a wrapped paragraph', () => {
        const { pages, lines } = buildPages([[[
            { paragraphIndex: 1 },
            { paragraphIndex: 1, terminator: true },
        ]]]);
        const ctx = makeCtx({ 1: makeBoxStyle() });

        assignParagraphBorders(ctx, pages);

        const [l0, l1] = lines.get(1)!;
        expect(l0.borderTop).toBe(SOLID_BLACK);
        expect(l0.borderBottom).toBeUndefined();
        expect(l1.borderTop).toBeUndefined();
        expect(l1.borderBottom).toBe(SOLID_BLACK);
        expect(l0.borderLeft).toBe(SOLID_BLACK);
        expect(l1.borderLeft).toBe(SOLID_BLACK);
        expect(l0.borderRight).toBe(SOLID_BLACK);
        expect(l1.borderRight).toBe(SOLID_BLACK);
    });

    it('merges two adjacent paragraphs with identical 4-side box: top on group head only, bottom on group tail only', () => {
        const { pages, lines } = buildPages([[[
            { paragraphIndex: 1, terminator: true },
            { paragraphIndex: 2, terminator: true },
        ]]]);
        const ctx = makeCtx({ 1: makeBoxStyle(), 2: makeBoxStyle() });

        assignParagraphBorders(ctx, pages);

        const p1 = lines.get(1)![0];
        const p2 = lines.get(2)![0];
        expect(p1.borderTop).toBe(SOLID_BLACK);
        expect(p1.borderBottom).toBeUndefined();
        expect(p2.borderTop).toBeUndefined();
        expect(p2.borderBottom).toBe(SOLID_BLACK);
    });

    it('does NOT merge paragraphs with different border colors', () => {
        const { pages, lines } = buildPages([[[
            { paragraphIndex: 1, terminator: true },
            { paragraphIndex: 2, terminator: true },
        ]]]);
        const ctx = makeCtx({
            1: makeBoxStyle(),
            2: makeBoxStyle({
                borderTop: SOLID_RED,
                borderBottom: SOLID_RED,
                borderLeft: SOLID_RED,
                borderRight: SOLID_RED,
            }),
        });

        assignParagraphBorders(ctx, pages);

        const p1 = lines.get(1)![0];
        const p2 = lines.get(2)![0];
        // Each paragraph painted independently as its own box.
        expect(p1.borderTop).toBe(SOLID_BLACK);
        expect(p1.borderBottom).toBe(SOLID_BLACK);
        expect(p2.borderTop).toBe(SOLID_RED);
        expect(p2.borderBottom).toBe(SOLID_RED);
    });

    it('does NOT merge when between is set on one but not the other', () => {
        const { pages, lines } = buildPages([[[
            { paragraphIndex: 1, terminator: true },
            { paragraphIndex: 2, terminator: true },
        ]]]);
        const ctx = makeCtx({
            1: makeBoxStyle({ borderBetween: SOLID_BLACK }),
            2: makeBoxStyle(),
        });

        assignParagraphBorders(ctx, pages);

        const p1 = lines.get(1)![0];
        const p2 = lines.get(2)![0];
        // Style mismatch on between → not in same group, no between painted.
        expect(p1.borderBottom).toBe(SOLID_BLACK);
        expect(p2.borderTop).toBe(SOLID_BLACK);
        expect(p1.borderBetween).toBeUndefined();
        expect(p2.borderBetween).toBeUndefined();
    });

    it('paints between on the first line of each non-first paragraph in a merged group', () => {
        const { pages, lines } = buildPages([[[
            { paragraphIndex: 1, terminator: true },
            { paragraphIndex: 2, terminator: true },
            { paragraphIndex: 3, terminator: true },
        ]]]);
        const style = makeBoxStyle({ borderBetween: SOLID_RED });
        const ctx = makeCtx({ 1: style, 2: style, 3: style });

        assignParagraphBorders(ctx, pages);

        expect(lines.get(1)![0].borderBetween).toBeUndefined(); // first in group
        expect(lines.get(2)![0].borderBetween).toBe(SOLID_RED);
        expect(lines.get(3)![0].borderBetween).toBe(SOLID_RED);
    });

    it('repaints top/bottom per page when a merged group spans two pages', () => {
        const { pages, lines } = buildPages([
            [[{ paragraphIndex: 1, terminator: true }]],
            [[{ paragraphIndex: 2, terminator: true }]],
        ]);
        const ctx = makeCtx({ 1: makeBoxStyle(), 2: makeBoxStyle() });

        assignParagraphBorders(ctx, pages);

        const p1 = lines.get(1)![0];
        const p2 = lines.get(2)![0];
        // Each page bucket gets its own top + bottom (Word's "every page is framed").
        expect(p1.borderTop).toBe(SOLID_BLACK);
        expect(p1.borderBottom).toBe(SOLID_BLACK);
        expect(p2.borderTop).toBe(SOLID_BLACK);
        expect(p2.borderBottom).toBe(SOLID_BLACK);
    });

    it('paragraph with only borderBottom (no full box) keeps the legacy behavior — bottom only, no merge', () => {
        const { pages, lines } = buildPages([[[
            { paragraphIndex: 1, terminator: true },
            { paragraphIndex: 2, terminator: true },
        ]]]);
        const ctx = makeCtx({
            1: { borderBottom: SOLID_BLACK },
            2: { borderBottom: SOLID_BLACK },
        });

        assignParagraphBorders(ctx, pages);

        const p1 = lines.get(1)![0];
        const p2 = lines.get(2)![0];
        expect(p1.borderBottom).toBe(SOLID_BLACK);
        expect(p2.borderBottom).toBe(SOLID_BLACK);
        expect(p1.borderTop).toBeUndefined();
        expect(p2.borderTop).toBeUndefined();
    });
});
