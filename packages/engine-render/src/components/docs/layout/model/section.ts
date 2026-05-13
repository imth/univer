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

import type { ISectionColumnProperties } from '@univerjs/core';
import type { IDocumentSkeletonColumn, IDocumentSkeletonLine, IDocumentSkeletonSection } from '../../../../basics/i-document-skeleton-cached';

import { ColumnSeparatorType } from '@univerjs/core';

export function createSkeletonSection(
    columnProperties: ISectionColumnProperties[] = [],
    columnSeparatorType: ColumnSeparatorType = ColumnSeparatorType.NONE,
    top: number = 0,
    left: number = 0,
    sectionWidth: number = Number.POSITIVE_INFINITY,
    sectionHeight: number = Number.POSITIVE_INFINITY
): IDocumentSkeletonSection {
    const columns: IDocumentSkeletonColumn[] = [];
    let colWidth = 0;
    let spaceWidth = 0;

    if (columnProperties.length === 0) {
        columns.push(_getSkeletonColumn(left, sectionWidth, 0, ColumnSeparatorType.NONE));
    } else {
        for (let i = 0; i < columnProperties.length; i++) {
            const { width, paddingEnd } = columnProperties[i];

            spaceWidth = paddingEnd;
            colWidth = width;

            columns.push(_getSkeletonColumn(left, colWidth, spaceWidth, columnSeparatorType));

            left += colWidth + spaceWidth;
        }
    }
    const newSection = {
        columns,
        colCount: columnProperties?.length || 1,
        height: sectionHeight,
        top,
        st: 0,
        ed: 0,
    };

    columns.forEach((column) => {
        column.parent = newSection;
    });

    return newSection;
}

export function setColumnFullState(column: IDocumentSkeletonColumn, state: boolean) {
    column.isFull = state;
}

/**
 * Word balances a multi-column section's content vertically across columns
 * when the section ends — two short paragraphs in a 2-col section land
 * one in each column rather than both stacked in column 0. Univer's
 * existing layout only spills into the next column when the current one
 * fills up, so without this pass a short multi-col section paints all
 * content into column 0.
 *
 * Greedy balancing: walk lines in order, advance to the next column when
 * the running total crosses target = totalHeight / numColumns. Lines'
 * `top` is recomputed within their new column; everything else (glyphs,
 * widths, indices) is intrinsic to the line and unchanged.
 *
 * No-op when:
 * - section has < 2 columns
 * - section has 0 lines
 * - any column is already `isFull` (means content overflowed naturally —
 *   in that case Word doesn't balance, the columns are already filled
 *   to capacity by the natural flow)
 */
export function balanceSectionColumns(section: IDocumentSkeletonSection): void {
    const cols = section.columns;
    if (cols.length < 2) return;
    if (cols.some((c) => c.isFull)) return;

    const lines: IDocumentSkeletonLine[] = [];
    for (const c of cols) {
        for (const ln of c.lines) lines.push(ln);
    }
    if (lines.length === 0) return;

    let totalHeight = 0;
    for (const ln of lines) totalHeight += ln.lineHeight;
    if (totalHeight === 0) return;

    const target = totalHeight / cols.length;

    for (const c of cols) c.lines = [];

    let colIdx = 0;
    let acc = 0;
    let cursorTop = 0;
    for (const ln of lines) {
        if (colIdx < cols.length - 1 && acc >= target) {
            colIdx++;
            acc = 0;
            cursorTop = 0;
        }
        ln.top = cursorTop;
        ln.parent = cols[colIdx];
        cols[colIdx].lines.push(ln);
        cursorTop += ln.lineHeight;
        acc += ln.lineHeight;
    }

    let maxColHeight = 0;
    for (const c of cols) {
        let h = 0;
        for (const ln of c.lines) h += ln.lineHeight;
        c.height = h;
        if (h > maxColHeight) maxColHeight = h;
    }
    section.height = maxColHeight;
}

function _getSkeletonColumn(
    left: number,
    width: number,
    spaceWidth: number,
    columnSeparatorType: ColumnSeparatorType
): IDocumentSkeletonColumn {
    return {
        lines: [],
        // column坐标系相对于section
        left,
        width,
        height: 0,
        spaceWidth,
        separator: columnSeparatorType,
        st: 0,
        ed: 0,
        drawingLRIds: [],
        isFull: false,
    };
}
