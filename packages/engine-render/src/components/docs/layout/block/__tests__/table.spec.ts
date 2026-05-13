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

import { BooleanNumber, TableAlignmentType, TableRowHeightRule, VerticalAlignmentType } from '@univerjs/core';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
    createTableSkeleton,
    createTableSkeletons,
    getNullTableSkeleton,
    getTableIdAndSliceIndex,
    getTableSliceId,
    rollbackListCache,
} from '../table';

const createSkeletonCellPagesMock = vi.fn();
const createNullCellPageMock = vi.fn();

vi.mock('../../model/page', () => ({
    createSkeletonCellPages: (...args: unknown[]) => createSkeletonCellPagesMock(...args),
    createNullCellPage: (...args: unknown[]) => createNullCellPageMock(...args),
}));

function createRowNode(startIndex: number, endIndex: number, cellCount: number) {
    return {
        startIndex,
        endIndex,
        children: new Array(cellCount).fill(0).map((_, i) => ({
            startIndex: startIndex + i * 5,
            endIndex: startIndex + i * 5 + 4,
            children: [],
        })),
    };
}

function createContextAndTable() {
    const tableSource = {
        tableId: 'table-1',
        align: TableAlignmentType.START,
        indent: { v: 8 },
        tableRows: [
            {
                repeatHeaderRow: BooleanNumber.TRUE,
                trHeight: {
                    hRule: TableRowHeightRule.AUTO,
                    val: { v: 16 },
                },
                cantSplit: BooleanNumber.FALSE,
                tableCells: [
                    { vAlign: VerticalAlignmentType.TOP },
                    { vAlign: VerticalAlignmentType.CENTER },
                ],
            },
            {
                repeatHeaderRow: BooleanNumber.FALSE,
                trHeight: {
                    hRule: TableRowHeightRule.AT_LEAST,
                    val: { v: 28 },
                },
                cantSplit: BooleanNumber.TRUE,
                tableCells: [
                    { vAlign: VerticalAlignmentType.BOTTOM },
                    { vAlign: VerticalAlignmentType.TOP },
                ],
            },
        ],
    } as any;

    const viewModel = {
        getTableByStartIndex: vi.fn(() => ({ tableSource })),
    } as any;

    const tableNode = {
        startIndex: 0,
        endIndex: 80,
        children: [
            createRowNode(1, 20, 2),
            createRowNode(21, 40, 2),
        ],
    } as any;

    const curPage = {
        pageWidth: 400,
        pageHeight: 300,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    } as any;

    return {
        ctx: {} as any,
        sectionBreakConfig: {} as any,
        tableSource,
        viewModel,
        tableNode,
        curPage,
    };
}

function makeCellPage(width: number, height: number) {
    return {
        width,
        height,
        pageWidth: width,
        pageHeight: height,
        marginTop: 1,
        marginBottom: 1,
        originMarginTop: 1,
        originMarginBottom: 1,
        sections: [],
    };
}

describe('docs table layout', () => {
    beforeEach(() => {
        createSkeletonCellPagesMock.mockReset();
        createNullCellPageMock.mockReset();

        createNullCellPageMock.mockImplementation(() => ({
            page: makeCellPage(60, 10),
        }));

        createSkeletonCellPagesMock.mockImplementation(
            (_ctx: unknown, _viewModel: unknown, _cellNode: unknown, _section: unknown, _table: unknown, row: number, col: number, availableHeight?: number) => {
                const baseHeight = row === 0 ? 20 : 24;
                if (row === 1 && col === 0 && typeof availableHeight === 'number' && availableHeight < 40) {
                    return [makeCellPage(60, baseHeight), makeCellPage(60, 16)];
                }
                return [makeCellPage(60, baseHeight)];
            }
        );
    });

    it('creates table skeleton and applies row/cell alignment data', () => {
        const { ctx, curPage, viewModel, tableNode, sectionBreakConfig } = createContextAndTable();

        const skeleton = createTableSkeleton(ctx, curPage, viewModel, tableNode, sectionBreakConfig);
        expect(skeleton).toBeTruthy();
        expect(skeleton?.rows.length).toBe(2);
        expect(skeleton?.width).toBeGreaterThan(0);
        expect(skeleton?.height).toBeGreaterThan(0);
        expect(skeleton?.left).toBeGreaterThanOrEqual(0);
        expect(skeleton?.rows[0].cells[0].marginTop).toBeGreaterThanOrEqual(1);
        expect(skeleton?.rows[0].cells[1].marginTop).toBeGreaterThanOrEqual(1);
    });

    it('creates sliced tables when available height is limited', () => {
        const { ctx, curPage, viewModel, tableNode, sectionBreakConfig } = createContextAndTable();

        const result = createTableSkeletons(ctx, curPage, viewModel, tableNode, sectionBreakConfig, 90);
        expect(result.skeTables.length).toBeGreaterThan(0);
        expect(typeof result.fromCurrentPage).toBe('boolean');
        expect(result.skeTables[0].rows.length).toBeGreaterThan(0);

        if (result.skeTables.length > 1) {
            expect(result.skeTables[1].tableId).toContain('#-#');
        }
    });

    it('createTableSkeletons (cross-page variant) handles vMerge identically to single-page', () => {
        // Same fixture as the "skips vMerge continuation slots" test, run
        // through the cross-page entry point with ample height so it
        // doesn't actually paginate. Regression: cross-page used to walk
        // by cellNode index, so it never skipped continuation slots and
        // never absorbed rowSpan height deficits.
        createSkeletonCellPagesMock.mockReset();
        createSkeletonCellPagesMock.mockImplementation(
            (_ctx: unknown, _vm: unknown, _cell: unknown, _sec: unknown, _t: unknown, row: number, col: number) => {
                if (row === 0 && col === 0) return [makeCellPage(60, 60)];
                return [makeCellPage(60, 20)];
            }
        );

        const tableSource = {
            tableId: 'table-vm-cross',
            align: TableAlignmentType.START,
            indent: { v: 0 },
            tableRows: [
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [{ rowSpan: 2 }, {}],
                },
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [{ vMergeContinue: BooleanNumber.TRUE }, {}],
                },
            ],
        } as any;
        const viewModel = { getTableByStartIndex: vi.fn(() => ({ tableSource })) } as any;
        // cellNodes are 1:1 with rowSource.tableCells (parser keeps
        // continuation entries), so row 1 has 2 child nodes too.
        const tableNode = {
            startIndex: 0,
            endIndex: 80,
            children: [createRowNode(1, 20, 2), createRowNode(21, 40, 2)],
        } as any;
        const curPage = {
            pageWidth: 400,
            pageHeight: 600,
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
        } as any;

        const result = createTableSkeletons({} as any, curPage, viewModel, tableNode, {} as any, 600);
        expect(result.skeTables.length).toBe(1);
        const skeleton = result.skeTables[0];
        // Row 0 has both real cells; row 1 has only the right-side cell
        // (continuation slot is skipped).
        expect(skeleton.rows[0].cells.length).toBe(2);
        expect(skeleton.rows[1].cells.length).toBe(1);
        // Row 1's real cell sits at left = 60 (after the continuation column).
        expect(skeleton.rows[1].cells[0].left).toBe(60);
        // Spanned cell's pageHeight = sum of row 0 + row 1 heights (62).
        expect(skeleton.rows[0].cells[0].pageHeight).toBe(62);
        // Row 1 absorbed the 18 px deficit.
        expect(skeleton.rows[1].height).toBe(40);
        // cellSourceIndex round-trips.
        expect(skeleton.rows[0].cells[0].cellSourceIndex).toBe(0);
        expect(skeleton.rows[1].cells[0].cellSourceIndex).toBe(1);
    });

    it('skips vMerge continuation slots and absorbs height deficit into the last spanned row', () => {
        // 2-row × 2-col table: row 0 col 0 is rowSpan=2 (content height
        // 60); row 0 col 1 is normal (height 20); row 1 col 0 is the
        // vMerge continuation; row 1 col 1 normal (height 20).
        // Margins = 1+1 → natural per-row height = 22.
        // Spanned cell needs 62, spanned rows available 22+22=44 → 18 px
        // deficit → row 1 height becomes 40, spanned pageHeight = 62.
        createSkeletonCellPagesMock.mockReset();
        createSkeletonCellPagesMock.mockImplementation(
            (_ctx: unknown, _vm: unknown, _cell: unknown, _sec: unknown, _t: unknown, row: number, col: number) => {
                if (row === 0 && col === 0) return [makeCellPage(60, 60)];
                return [makeCellPage(60, 20)];
            }
        );

        const tableSource = {
            tableId: 'table-vm',
            align: TableAlignmentType.START,
            indent: { v: 0 },
            tableRows: [
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [
                        { rowSpan: 2 },
                        {},
                    ],
                },
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [
                        { vMergeContinue: BooleanNumber.TRUE },
                        {},
                    ],
                },
            ],
        } as any;
        const viewModel = { getTableByStartIndex: vi.fn(() => ({ tableSource })) } as any;
        const tableNode = {
            startIndex: 0,
            endIndex: 80,
            children: [
                createRowNode(1, 20, 2),
                createRowNode(21, 40, 2),
            ],
        } as any;
        const curPage = {
            pageWidth: 400,
            pageHeight: 300,
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
        } as any;

        const skeleton = createTableSkeleton({} as any, curPage, viewModel, tableNode, {} as any);
        expect(skeleton).toBeTruthy();
        // Row 0 has BOTH cells (the rowSpan owner + the normal col 1 cell).
        expect(skeleton!.rows[0].cells.length).toBe(2);
        // Row 1 has ONE cell — the continuation slot is skipped.
        expect(skeleton!.rows[1].cells.length).toBe(1);

        const spanned = skeleton!.rows[0].cells[0];
        // Spanned cell's pageHeight = row 0 (22) + row 1 (22 + 18 deficit) = 62.
        expect(spanned.pageHeight).toBe(62);
        // Row 1's height absorbed the 18 px deficit.
        expect(skeleton!.rows[1].height).toBe(40);
        // cellSourceIndex round-trips to the underlying ITableCell index.
        expect(spanned.cellSourceIndex).toBe(0);
        expect(skeleton!.rows[1].cells[0].cellSourceIndex).toBe(1);
        // The row-1 real cell is the right-hand col-1 cell — its `left`
        // must reserve room for the continuation column on the left, not
        // collapse to 0 (regression: cells after a continuation slot used
        // to render at left=0).
        expect(skeleton!.rows[1].cells[0].left).toBeGreaterThan(0);
        expect(skeleton!.rows[1].cells[0].left).toBe(spanned.pageWidth);
    });

    it('keeps an earlier rowSpan cell tall when a later rowSpan cell stretches the rows', () => {
        // 2-row × 2-col table. Both cells in row 0 are rowSpan=2 owners.
        // col-0 owner needs 20 px (short). col-1 owner needs 60 px (tall).
        // Natural row heights are 22 each (20 content + 1+1 margins) → row
        // total 44 → col-1 needs 16 px of deficit, absorbed by row 1.
        // Regression: col-0 pageHeight must reflect the FINAL row total
        // (22 + 38 = 60), not the row total at the time col-0 was processed
        // (22 + 22 = 44).
        createSkeletonCellPagesMock.mockReset();
        createSkeletonCellPagesMock.mockImplementation(
            (_ctx: unknown, _vm: unknown, _cell: unknown, _sec: unknown, _t: unknown, row: number, col: number) => {
                if (row === 0 && col === 0) return [makeCellPage(60, 20)];
                if (row === 0 && col === 1) return [makeCellPage(60, 60)];
                return [makeCellPage(60, 0)];
            }
        );

        const tableSource = {
            tableId: 'table-multi-span',
            align: TableAlignmentType.START,
            indent: { v: 0 },
            tableRows: [
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [{ rowSpan: 2 }, { rowSpan: 2 }],
                },
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [{ vMergeContinue: BooleanNumber.TRUE }, { vMergeContinue: BooleanNumber.TRUE }],
                },
            ],
        } as any;
        const viewModel = { getTableByStartIndex: vi.fn(() => ({ tableSource })) } as any;
        const tableNode = {
            startIndex: 0,
            endIndex: 80,
            children: [createRowNode(1, 20, 2), createRowNode(21, 40, 2)],
        } as any;
        const curPage = {
            pageWidth: 400,
            pageHeight: 300,
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
        } as any;

        const skeleton = createTableSkeleton({} as any, curPage, viewModel, tableNode, {} as any);
        expect(skeleton).toBeTruthy();
        // Row 0 stays at 0 (no single-row cells contribute height); row 1
        // absorbs deficits from BOTH spanned cells (22 from col-0, then
        // another 40 from col-1's 62 px requirement), so row 1 = 62.
        expect(skeleton!.rows[0].height).toBe(0);
        expect(skeleton!.rows[1].height).toBe(62);
        // Regression check: col-0's pageHeight reflects row 1's FINAL
        // height (after col-1 stretched it), not the row total at the
        // moment col-0 was processed. Both spanned cells should be 62.
        expect(skeleton!.rows[0].cells[0].pageHeight).toBe(62);
        expect(skeleton!.rows[0].cells[1].pageHeight).toBe(62);
    });

    it('uses tableColumns as the authoritative grid-column origin (Basic Table layout)', () => {
        // Mirrors `全格式.docx` → "Basic Table": 3 rows × 4 grid columns.
        // Row 0: [gridSpan=2] [normal] [rowSpan=2]   (3 real cells over 4 cols)
        // Row 1: [normal] [normal] [vMerge cont]    (3 real cells)
        // Row 2: [normal] [normal] [gridSpan=2]     (3 real cells over 4 cols)
        // Regression: a row-0 col-2 with width 144 used to push a delta into
        // col-3's left, so later cells in col-3 rendered too far right.
        createSkeletonCellPagesMock.mockReset();
        createSkeletonCellPagesMock.mockImplementation(
            (_c: unknown, _v: unknown, _cell: unknown, _s: unknown, t: any, row: number, col: number, _ah?: number, _mh?: number, cellIdx?: number) => {
                const cell = t.tableRows[row].tableCells[cellIdx ?? col];
                const span = Math.max(1, cell.columnSpan ?? 1);
                let w = 0;
                for (let i = 0; i < span; i++) w += t.tableColumns[col + i].size.width.v;
                return [makeCellPage(w, 18)];
            }
        );

        const tableSource = {
            tableId: 'table-basic',
            align: TableAlignmentType.START,
            indent: { v: 0 },
            tableColumns: [
                { size: { width: { v: 144 } } },
                { size: { width: { v: 144 } } },
                { size: { width: { v: 144 } } },
                { size: { width: { v: 143 } } },
            ],
            tableRows: [
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [
                        { columnSpan: 2 },
                        {},
                        { rowSpan: 2 },
                    ],
                },
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [
                        {},
                        {},
                        { vMergeContinue: BooleanNumber.TRUE },
                    ],
                },
                {
                    repeatHeaderRow: BooleanNumber.FALSE,
                    trHeight: { hRule: TableRowHeightRule.AUTO, val: { v: 0 } },
                    cantSplit: BooleanNumber.FALSE,
                    tableCells: [
                        {},
                        {},
                        { columnSpan: 2 },
                    ],
                },
            ],
        } as any;
        const viewModel = { getTableByStartIndex: vi.fn(() => ({ tableSource })) } as any;
        const tableNode = {
            startIndex: 0,
            endIndex: 80,
            children: [createRowNode(1, 20, 3), createRowNode(21, 40, 3), createRowNode(41, 60, 3)],
        } as any;
        const curPage = {
            pageWidth: 800,
            pageHeight: 600,
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
        } as any;

        const skeleton = createTableSkeleton({} as any, curPage, viewModel, tableNode, {} as any);
        expect(skeleton).toBeTruthy();

        // Row 0: gridSpan=2 cell at col 0 (left=0), normal at col 2 (left=288),
        // rowSpan=2 cell at col 3 (left=432).
        expect(skeleton!.rows[0].cells[0].left).toBe(0);
        expect(skeleton!.rows[0].cells[0].pageWidth).toBe(288);
        expect(skeleton!.rows[0].cells[1].left).toBe(288);
        expect(skeleton!.rows[0].cells[2].left).toBe(432);

        // Row 1: skips the col-3 continuation slot; cells at cols 0, 1.
        expect(skeleton!.rows[1].cells.length).toBe(2);
        expect(skeleton!.rows[1].cells[0].left).toBe(0);
        expect(skeleton!.rows[1].cells[1].left).toBe(144);

        // Row 2: cells at cols 0, 1, and gridSpan=2 at col 2.
        // Regression: col-2 used to land at 575 (288+144+143) because the
        // delta from the previous row's col-2 width cascaded into col-3.
        expect(skeleton!.rows[2].cells[0].left).toBe(0);
        expect(skeleton!.rows[2].cells[1].left).toBe(144);
        expect(skeleton!.rows[2].cells[2].left).toBe(288);
        expect(skeleton!.rows[2].cells[2].pageWidth).toBe(287);
    });

    it('handles rollback/slice id helpers and missing table branches', () => {
        const listCache = new Map<string, any[][]>([
            ['a', [[{ paragraph: { startIndex: 1 } }, { paragraph: { startIndex: 20 } }]]],
        ]);
        rollbackListCache(listCache as any, { startIndex: 5, endIndex: 50 } as any);
        expect(listCache.get('a')?.[0].length).toBe(1);

        const sliceId = getTableSliceId('table-x', 3);
        expect(sliceId).toBe('table-x#-#3');
        expect(getTableIdAndSliceIndex(sliceId)).toEqual({ tableId: 'table-x', sliceIndex: 3 });
        expect(getTableIdAndSliceIndex('table-y')).toEqual({ tableId: 'table-y', sliceIndex: 0 });

        const nullTable = getNullTableSkeleton(1, 2, { tableId: 't0' } as any);
        expect(nullTable.rows).toEqual([]);
        expect(nullTable.tableId).toBe('t0');

        const { ctx, curPage, tableNode, sectionBreakConfig } = createContextAndTable();
        const noTableViewModel = {
            getTableByStartIndex: vi.fn(() => null),
        };
        expect(createTableSkeleton(ctx, curPage, noTableViewModel as any, tableNode, sectionBreakConfig)).toBeNull();
        const sliced = createTableSkeletons(ctx, curPage, noTableViewModel as any, tableNode, sectionBreakConfig, 100);
        expect(sliced.skeTables).toEqual([]);
        expect(sliced.fromCurrentPage).toBe(false);
    });
});
