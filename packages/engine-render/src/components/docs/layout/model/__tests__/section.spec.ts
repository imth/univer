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

import type { IDocumentSkeletonLine, IDocumentSkeletonSection } from '../../../../../basics/i-document-skeleton-cached';
import { describe, expect, it } from 'vitest';
import { balanceSectionColumns, createSkeletonSection } from '../section';

function makeLine(lineHeight: number, paragraphIndex = 0): IDocumentSkeletonLine {
    return {
        paragraphIndex,
        type: 0,
        divides: [],
        divideLen: 0,
        lineHeight,
        contentHeight: lineHeight,
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

function pushAllInto(section: IDocumentSkeletonSection, lines: IDocumentSkeletonLine[]): void {
    let top = 0;
    for (const ln of lines) {
        ln.top = top;
        ln.parent = section.columns[0];
        section.columns[0].lines.push(ln);
        top += ln.lineHeight;
    }
}

describe('balanceSectionColumns', () => {
    it('redistributes 4 equal lines as 2+2 across two columns', () => {
        const sec = createSkeletonSection(
            [{ width: 100, paddingEnd: 10 }, { width: 100, paddingEnd: 0 }],
            0,
            0,
            0,
            210,
            500
        );
        const lines = [makeLine(20), makeLine(20), makeLine(20), makeLine(20)];
        pushAllInto(sec, lines);

        balanceSectionColumns(sec);

        expect(sec.columns[0].lines.length).toBe(2);
        expect(sec.columns[1].lines.length).toBe(2);
        // Top should reset within each column.
        expect(sec.columns[0].lines[0].top).toBe(0);
        expect(sec.columns[0].lines[1].top).toBe(20);
        expect(sec.columns[1].lines[0].top).toBe(0);
        expect(sec.columns[1].lines[1].top).toBe(20);
        // Section height = tallest column.
        expect(sec.height).toBe(40);
    });

    it('puts the tail in the last column when total does not divide evenly', () => {
        const sec = createSkeletonSection(
            [{ width: 100, paddingEnd: 10 }, { width: 100, paddingEnd: 0 }],
            0,
            0,
            0,
            210,
            500
        );
        // 5 lines × 20 = 100 → target 50; greedy fills col0 to 60 then col1 absorbs 40.
        const lines = [makeLine(20), makeLine(20), makeLine(20), makeLine(20), makeLine(20)];
        pushAllInto(sec, lines);

        balanceSectionColumns(sec);

        expect(sec.columns[0].lines.length).toBe(3); // 0→20→40, then 60≥50 ⇒ next col
        expect(sec.columns[1].lines.length).toBe(2);
    });

    it('is a no-op when section has only one column', () => {
        const sec = createSkeletonSection([], 0, 0, 0, 200, 500);
        const lines = [makeLine(20), makeLine(20)];
        pushAllInto(sec, lines);
        const beforeLen = sec.columns[0].lines.length;
        balanceSectionColumns(sec);
        expect(sec.columns[0].lines.length).toBe(beforeLen);
    });

    it('is a no-op when any column is already isFull (natural overflow already balanced)', () => {
        const sec = createSkeletonSection(
            [{ width: 100, paddingEnd: 10 }, { width: 100, paddingEnd: 0 }],
            0,
            0,
            0,
            210,
            100
        );
        sec.columns[0].lines.push(makeLine(20), makeLine(20));
        sec.columns[1].lines.push(makeLine(20));
        sec.columns[0].isFull = true;

        balanceSectionColumns(sec);

        expect(sec.columns[0].lines.length).toBe(2);
        expect(sec.columns[1].lines.length).toBe(1);
    });

    it('is a no-op when section has no lines', () => {
        const sec = createSkeletonSection(
            [{ width: 100, paddingEnd: 10 }, { width: 100, paddingEnd: 0 }],
            0,
            0,
            0,
            210,
            500
        );
        balanceSectionColumns(sec);
        expect(sec.columns[0].lines.length).toBe(0);
        expect(sec.columns[1].lines.length).toBe(0);
    });

    it('createSkeletonSection produces exactly columnProperties.length real columns (no phantom tail)', () => {
        const sec2 = createSkeletonSection(
            [{ width: 100, paddingEnd: 10 }, { width: 100, paddingEnd: 0 }],
            0,
            0,
            0,
            210,
            500
        );
        expect(sec2.columns.length).toBe(2);
        expect(sec2.colCount).toBe(2);
        expect(sec2.columns[0].left).toBe(0);
        expect(sec2.columns[0].width).toBe(100);
        expect(sec2.columns[1].left).toBe(110);
        expect(sec2.columns[1].width).toBe(100);
    });
});
