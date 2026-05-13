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

import type { INumberUnit, ITable, ITableRow, Nullable } from '@univerjs/core';
import type { IDocumentSkeletonPage, IDocumentSkeletonRow, IDocumentSkeletonTable, IParagraphList, ISectionBreakConfig } from '../../../../basics';
import type { DataStreamTreeNode } from '../../view-model/data-stream-tree-node';
import type { DocumentViewModel } from '../../view-model/document-view-model';
import type { ILayoutContext } from '../tools';
import type { GridSlot } from './table-grid';
import { BooleanNumber, TableAlignmentType, TableRowHeightRule, VerticalAlignmentType } from '@univerjs/core';
import { createSkeletonCellPages } from '../model/page';
import { buildTableGrid } from './table-grid';

export function createTableSkeleton(
    ctx: ILayoutContext,
    curPage: IDocumentSkeletonPage,
    viewModel: DocumentViewModel,
    tableNode: DataStreamTreeNode,
    sectionBreakConfig: ISectionBreakConfig
): Nullable<IDocumentSkeletonTable> {
    const { startIndex, endIndex, children: rowNodes } = tableNode;
    const table = viewModel.getTableByStartIndex(startIndex)?.tableSource;
    if (table == null) {
        console.warn('Table not found when creating table skeleton');
        return null;
    }

    const tableSkeleton = getNullTableSkeleton(startIndex, endIndex, table);
    const grid = buildTableGrid(table);

    // Pass 1 — Create skeletons for every "real" slot (non-continuation),
    // accumulate single-row cells into each row's height, and stash any
    // rowSpan ≥ 2 cells for Pass 2. Width-only sizing happens here too
    // (createSkeletonCellPages already sums tableColumns[col..col+span-1]
    // via the columnSpan field on ITableCell).
    interface SpannedRecord {
        slot: GridSlot;
        skeleton: IDocumentSkeletonPage;
        contentHeight: number; // skeleton.height + margins
    }
    const spanned: SpannedRecord[] = [];
    const rowSkeletons: IDocumentSkeletonRow[] = [];
    let rowTop = 0;
    let tableWidth = 0;

    // Per-grid-column left offsets. tableColumns is the authoritative
    // source of column widths (OOXML w:tblGrid), so we compute from
    // there. Without it (some test fixtures), fall back to a lazy
    // accumulator that fills in widths as we see real cells — but the
    // lazy path can't handle a row where a column has no real cell
    // (it stays at zero width), which is what tableColumns prevents.
    const tableColumns = table.tableColumns ?? [];
    const colLefts: number[] = [0];
    for (let i = 0; i < tableColumns.length; i++) {
        colLefts.push(colLefts[i] + tableColumns[i].size.width.v);
    }
    // Lazy fallback: widen the kept array when an unseen column shows up.
    const ensureCol = (col: number) => {
        while (colLefts.length <= col) colLefts.push(colLefts[colLefts.length - 1]);
    };
    const ensureColRight = (col: number, right: number) => {
        // Only used when tableColumns is empty (test fixtures). Pushes
        // the right edge of `col` to at least `right`, cascading the
        // delta forward. With tableColumns present, column edges are
        // pre-computed and don't shift.
        if (tableColumns.length > 0) return;
        ensureCol(col + 1);
        if (right > colLefts[col + 1]) {
            const delta = right - colLefts[col + 1];
            for (let i = col + 1; i < colLefts.length; i++) colLefts[i] += delta;
        }
    };

    for (let row = 0; row < rowNodes.length; row++) {
        const rowNode = rowNodes[row];
        const { children: cellNodes, startIndex: rowStartIndex, endIndex: rowEndIndex } = rowNode;
        const rowSource = table.tableRows[row];
        const { trHeight } = rowSource;
        const rowSkeleton = _getNullTableRowSkeleton(rowStartIndex, rowEndIndex, row, rowSource, false, tableSkeleton);
        const { hRule, val } = trHeight;

        tableSkeleton.rows.push(rowSkeleton);
        rowSkeletons.push(rowSkeleton);

        let rowRight = 0;
        let rowHeight = 0;

        for (const slot of grid.rows[row]) {
            if (slot.isContinue) continue;
            const cellNode = cellNodes[slot.cellIdx];
            const cellPageSkeleton = createSkeletonCellPages(
                ctx,
                viewModel,
                cellNode,
                sectionBreakConfig,
                table,
                row,
                slot.colIdx,
                undefined,
                undefined,
                slot.cellIdx
            )[0];

            const { marginTop = 0, marginBottom = 0 } = cellPageSkeleton;
            const contentHeight = cellPageSkeleton.height + marginTop + marginBottom;
            ensureCol(slot.colIdx);
            cellPageSkeleton.left = colLefts[slot.colIdx];
            ensureColRight(slot.colIdx + slot.colSpan - 1, colLefts[slot.colIdx] + cellPageSkeleton.pageWidth);
            cellPageSkeleton.parent = rowSkeleton;
            cellPageSkeleton.cellSourceIndex = slot.cellIdx;
            rowSkeleton.cells.push(cellPageSkeleton);
            rowRight = Math.max(rowRight, colLefts[slot.colIdx] + cellPageSkeleton.pageWidth);

            if (slot.rowSpan === 1) {
                rowHeight = Math.max(rowHeight, contentHeight);
            } else {
                spanned.push({ slot, skeleton: cellPageSkeleton, contentHeight });
            }
        }

        if (hRule === TableRowHeightRule.AT_LEAST) {
            rowHeight = Math.max(rowHeight, val.v);
        } else if (hRule === TableRowHeightRule.EXACT) {
            rowHeight = val.v;
        }

        rowSkeleton.height = rowHeight;
        rowSkeleton.top = rowTop;
        rowTop += rowHeight;

        tableWidth = Math.max(tableWidth, rowRight);
    }

    // Pass 2 — Resolve rowSpan cells. A spanned cell's required height
    // may exceed the natural total of its spanned rows; per Word/WPS,
    // the deficit is absorbed by the LAST row in the span. Done in two
    // sub-passes so an earlier rowSpan cell's pageHeight reflects later
    // cells' row stretching (otherwise the earlier cell would be sealed
    // at the row heights that existed when it was processed).
    //   2a: apply every deficit to row heights & top offsets.
    //   2b: set each spanned cell's pageHeight from the FINAL row heights.
    for (const rec of spanned) {
        const { slot, contentHeight } = rec;
        const firstRow = slot.rowIdx;
        const lastRow = slot.rowIdx + slot.rowSpan - 1;
        let available = 0;
        for (let r = firstRow; r <= lastRow; r++) {
            available += rowSkeletons[r].height;
        }
        const deficit = contentHeight - available;
        if (deficit > 0) {
            rowSkeletons[lastRow].height += deficit;
            for (let r = lastRow + 1; r < rowSkeletons.length; r++) {
                rowSkeletons[r].top += deficit;
            }
            rowTop += deficit;
        }
    }
    for (const rec of spanned) {
        const { slot, skeleton } = rec;
        const firstRow = slot.rowIdx;
        const lastRow = slot.rowIdx + slot.rowSpan - 1;
        let h = 0;
        for (let r = firstRow; r <= lastRow; r++) h += rowSkeletons[r].height;
        skeleton.pageHeight = h;
    }

    // Pass 3 — Single-row cells get the final row height; apply vAlign.
    // Iterate by grid slot so continuation cells (not in rowSkeleton.cells)
    // are skipped cleanly. Spanned cells already have their pageHeight set.
    for (let row = 0; row < rowSkeletons.length; row++) {
        const rowSkeleton = rowSkeletons[row];
        const rowHeight = rowSkeleton.height;
        let cellArrayIdx = 0;
        for (const slot of grid.rows[row]) {
            if (slot.isContinue) continue;
            const cellPageSkeleton = rowSkeleton.cells[cellArrayIdx++];
            if (slot.rowSpan === 1) {
                cellPageSkeleton.pageHeight = rowHeight;
            }

            const cellConfig = table.tableRows[slot.ownerRow].tableCells[slot.ownerCellIdx];
            const { vAlign = VerticalAlignmentType.CONTENT_ALIGNMENT_UNSPECIFIED } = cellConfig;
            const { pageHeight, height, originMarginTop, originMarginBottom } = cellPageSkeleton;

            let marginTop = originMarginTop;
            switch (vAlign) {
                case VerticalAlignmentType.TOP:
                    marginTop = originMarginTop;
                    break;
                case VerticalAlignmentType.CENTER:
                    marginTop = (pageHeight - height) / 2;
                    break;
                case VerticalAlignmentType.BOTTOM:
                    marginTop = pageHeight - height - originMarginBottom;
                    break;
                default:
                    break;
            }
            marginTop = Math.max(originMarginTop, marginTop);
            cellPageSkeleton.marginTop = marginTop;
        }
    }

    tableSkeleton.width = tableWidth;
    tableSkeleton.height = rowTop;

    const { pageWidth, marginLeft = 0, marginRight = 0 } = curPage;

    tableSkeleton.left = _getTableLeft(pageWidth - marginLeft - marginRight, tableWidth, table.align, table.indent);

    return tableSkeleton;
}

export function rollbackListCache(listLevel: Map<string, IParagraphList[][]>, table: DataStreamTreeNode) {
    const { startIndex, endIndex } = table;

    for (const paragraphLists of listLevel.values()) {
        for (const paragraphList of paragraphLists) {
            const paragraphListIndex = paragraphList.findIndex((p) => p.paragraph.startIndex > startIndex && p.paragraph.startIndex < endIndex);

            if (paragraphListIndex > -1) {
                paragraphList.splice(paragraphListIndex);
            }
        }
    }
}

export interface ISlicedTableSkeletonParams {
    skeTables: IDocumentSkeletonTable[];
    fromCurrentPage: boolean;
}

interface ISpannedPending {
    skeleton: IDocumentSkeletonPage;
    contentHeight: number;
    firstRow: number;
    lastRow: number;
}

interface ICreateTableCache {
    rowTop: number;
    tableWidth: number;
    remainHeight: number;
    repeatRow: Nullable<DataStreamTreeNode>;
    repeatRowHeight: number;
    grid: ReturnType<typeof buildTableGrid>;
    // Per-grid-column left offsets. Authoritative when tableColumns is
    // populated; otherwise filled lazily from cell widths as we go.
    colLefts: number[];
    lazyColLefts: boolean;
    // rowSpan owner cells whose height we still need to seal once their
    // last spanned row's height is known. Keyed only by lastRow so we
    // can drain them when that row is processed.
    spannedByLastRow: Map<number, ISpannedPending[]>;
    // Per-row final heights (filled as rows are processed). Used to
    // back-compute pageHeight for spanned cells when their last row
    // arrives.
    rowHeightHistory: number[];
}

// Create skeletons of a table, which may be divided into different pages according to the available height of the page.
export function createTableSkeletons(
    ctx: ILayoutContext,
    curPage: IDocumentSkeletonPage,
    viewModel: DocumentViewModel,
    tableNode: DataStreamTreeNode,
    sectionBreakConfig: ISectionBreakConfig,
    availableHeight: number
): ISlicedTableSkeletonParams {
    const skeTables: IDocumentSkeletonTable[] = [];
    const { startIndex, endIndex, children: rowNodes } = tableNode;

    const table = viewModel.getTableByStartIndex(startIndex)?.tableSource;
    if (table == null) {
        console.warn('Table not found when creating table skeletons');
        return {
            skeTables,
            fromCurrentPage: false,
        };
    }

    const needRepeatHeader = table.tableRows[0].repeatHeaderRow === BooleanNumber.TRUE;
    const curTableSkeleton = getNullTableSkeleton(startIndex, endIndex, table);

    const tableColumns = table.tableColumns ?? [];
    const colLefts: number[] = [0];
    for (let i = 0; i < tableColumns.length; i++) {
        colLefts.push(colLefts[i] + tableColumns[i].size.width.v);
    }

    const createCache: ICreateTableCache = {
        rowTop: 0,
        tableWidth: 0,
        remainHeight: availableHeight,
        repeatRow: needRepeatHeader ? rowNodes[0] : null,
        repeatRowHeight: 0,
        grid: buildTableGrid(table),
        colLefts,
        lazyColLefts: tableColumns.length === 0,
        spannedByLastRow: new Map(),
        rowHeightHistory: [],
    };

    skeTables.push(curTableSkeleton);

    for (const rowNode of rowNodes) {
        const row = rowNodes.indexOf(rowNode);

        dealWithTableRow(
            ctx,
            curPage,
            skeTables,
            viewModel,
            sectionBreakConfig,
            rowNode,
            row,
            table,
            createCache
        );
    }

    updateTableSkeletonsPosition(createCache, curPage, skeTables, table);

    const fromCurrentPage = skeTables[0].height <= availableHeight;

    return {
        skeTables,
        fromCurrentPage,
    };
}

function updateTableSkeletonsPosition(
    cache: ICreateTableCache,
    curPage: IDocumentSkeletonPage,
    skeTables: IDocumentSkeletonTable[],
    table: ITable
) {
    const { pageWidth, marginLeft = 0, marginRight = 0 } = curPage;
    const { tableWidth } = cache;
    const tableLeft = _getTableLeft(pageWidth - marginLeft - marginRight, tableWidth, table.align, table.indent);

    let tableIndex = 0;
    for (const tableSkeleton of skeTables) {
        // Update table width and left.
        tableSkeleton.width = tableWidth;
        tableSkeleton.left = tableLeft;

        // Reset table st and ed.
        tableSkeleton.st = tableSkeleton.rows[0].st - 1;
        tableSkeleton.ed = tableSkeleton.rows[tableSkeleton.rows.length - 1].ed + 1;

        // Reset table id.
        if (skeTables.length > 1) {
            tableSkeleton.tableId = getTableSliceId(table.tableId, tableIndex);
            tableIndex++;
        }
    }
}

function getCurTableSkeleton(skeTables: IDocumentSkeletonTable[]): IDocumentSkeletonTable {
    return skeTables[skeTables.length - 1];
}

function getAvailableHeight(curPage: IDocumentSkeletonPage, cache: ICreateTableCache, hasRepeatHeader: boolean) {
    const { marginTop, marginBottom, pageHeight } = curPage;
    let pageContentHeight = pageHeight - marginTop - marginBottom;

    if (hasRepeatHeader) {
        pageContentHeight -= cache.repeatRowHeight;
    }

    return pageContentHeight;
}

function dealWithTableRow(
    ctx: ILayoutContext,
    curPage: IDocumentSkeletonPage,
    skeTables: IDocumentSkeletonTable[],
    viewModel: DocumentViewModel,
    sectionBreakConfig: ISectionBreakConfig,
    rowNode: DataStreamTreeNode,
    row: number,
    table: ITable,
    cache: ICreateTableCache,
    isRepeatRow = false
) {
    const pageContentHeight = getAvailableHeight(curPage, cache, false);
    const availableHeight = getAvailableHeight(curPage, cache, true);
    const { children: cellNodes, startIndex, endIndex } = rowNode;
    const rowSource = table.tableRows[row];
    const { trHeight, cantSplit } = rowSource;
    const rowSkeletons: IDocumentSkeletonRow[] = [];
    const { hRule, val } = trHeight;
    const canRowSplit = cantSplit === BooleanNumber.TRUE && trHeight.hRule === TableRowHeightRule.AUTO;
    // If the remain height is less than 50 pixels, you can't fit the next line, so you can start typography directly from the second page.
    const MAX_FONT_SIZE = 72;
    const needOpenNewTable = cache.remainHeight <= MAX_FONT_SIZE;
    let curTableSkeleton = getCurTableSkeleton(skeTables);

    const rowHeights = [0];

    // Walk the row by GRID slot (not by cellNode array index). This
    // mirrors the single-page createTableSkeleton: continuation cells
    // are skipped, and the grid column drives width sizing in
    // createSkeletonCellPages → createNullCellPage. cellNodes is 1:1
    // with rowSource.tableCells (parser keeps continuation entries),
    // so index by slot.cellIdx.
    const slots = cache.grid.rows[row] ?? [];

    // rowSpan owners encountered in this row. Their owner-cell skeleton
    // needs its pageHeight retroactively set once we know the heights
    // of every spanned row — done at this row's end if the span ends
    // here, otherwise carried in cache.spannedByLastRow.
    const localSpanned: { skeleton: IDocumentSkeletonPage; contentHeight: number; lastRow: number }[] = [];

    for (const slot of slots) {
        if (slot.isContinue) continue;
        const cellNode = cellNodes[slot.cellIdx];
        if (cellNode == null) continue;

        const cellPageSkeletons = createSkeletonCellPages(
            ctx,
            viewModel,
            cellNode,
            sectionBreakConfig,
            table,
            row,
            slot.colIdx,
            canRowSplit && !needOpenNewTable ? cache.remainHeight : availableHeight,
            pageContentHeight,
            slot.cellIdx
        );

        while (rowSkeletons.length < cellPageSkeletons.length) {
            const rowSkeleton = _getNullTableRowSkeleton(startIndex, endIndex, row, rowSource, isRepeatRow);
            rowSkeletons.push(rowSkeleton);
        }

        while (rowHeights.length < cellPageSkeletons.length) {
            rowHeights.push(0);
        }

        for (let pageIndex = 0; pageIndex < cellPageSkeletons.length; pageIndex++) {
            const cellPageSkeleton = cellPageSkeletons[pageIndex];
            const { marginTop: cellMarginTop = 0, marginBottom: cellMarginBottom = 0 } = cellPageSkeleton;
            const cellPageHeight = cellPageSkeleton.height + cellMarginTop + cellMarginBottom;
            const rowSke = rowSkeletons[pageIndex];

            cellPageSkeleton.parent = rowSke;
            cellPageSkeleton.cellSourceIndex = slot.cellIdx;
            rowSke.cells.push(cellPageSkeleton);

            if (slot.rowSpan > 1) {
                // Owner of a multi-row span: don't let it dominate this
                // row's height computation — its content can be absorbed
                // by later spanned rows. Defer height resolution.
                localSpanned.push({
                    skeleton: cellPageSkeleton,
                    contentHeight: cellPageHeight,
                    lastRow: slot.rowIdx + slot.rowSpan - 1,
                });
            } else {
                rowHeights[pageIndex] = Math.max(rowHeights[pageIndex], cellPageHeight);
            }
        }
    }

    for (const rowSke of rowSkeletons) {
        const rowIndex = rowSkeletons.indexOf(rowSke);

        if (hRule === TableRowHeightRule.AT_LEAST) {
            rowHeights[rowIndex] = Math.max(rowHeights[rowIndex], val.v);
        } else if (hRule === TableRowHeightRule.EXACT) {
            rowHeights[rowIndex] = val.v;
        }

        rowHeights[rowIndex] = Math.min(rowHeights[rowIndex], pageContentHeight);

        // Resolve rowSpan deficit for any owner cells whose last spanned
        // row is THIS row (whether the owner sits in this row or earlier).
        // Deficit goes onto this row's height — matches Word's behavior
        // and the single-page implementation.
        if (rowIndex === 0) {
            const carried = cache.spannedByLastRow.get(row) ?? [];
            for (const pending of carried) {
                let available = 0;
                for (let r = pending.firstRow; r < row; r++) available += cache.rowHeightHistory[r] ?? 0;
                available += rowHeights[rowIndex];
                const deficit = pending.contentHeight - available;
                if (deficit > 0) rowHeights[rowIndex] += deficit;
            }
            for (const pending of localSpanned) {
                if (pending.lastRow === row) {
                    // owner sits in this row AND span ends here: single-row span case.
                    const deficit = pending.contentHeight - rowHeights[rowIndex];
                    if (deficit > 0) rowHeights[rowIndex] += deficit;
                }
            }
        }

        // Place cells along the row in grid order. cells[] now contains
        // ONLY real cells (continuation slots are skipped during creation).
        // Each cell's `left` comes from tableColumns (authoritative grid
        // origin), with a lazy fallback for fixtures that don't populate
        // it. cache.colLefts is computed once per table.
        const slotsForRow = cache.grid.rows[row] ?? [];
        let cellArrIdx = 0;
        for (const slot of slotsForRow) {
            if (slot.isContinue) continue;
            const cellPageSkeleton = rowSke.cells[cellArrIdx++];
            if (cellPageSkeleton == null) continue;

            const left = cache.colLefts[slot.colIdx] ?? 0;
            cellPageSkeleton.left = left;
            if (slot.rowSpan === 1) {
                cellPageSkeleton.pageHeight = rowHeights[rowIndex];
            }
            const right = left + cellPageSkeleton.pageWidth;
            // Lazy fallback only — when tableColumns is empty (test mocks),
            // record the right edge so subsequent rows can place cells.
            if (cache.lazyColLefts) {
                while (cache.colLefts.length <= slot.colIdx + slot.colSpan) {
                    cache.colLefts.push(cache.colLefts[cache.colLefts.length - 1] ?? 0);
                }
                const targetIdx = slot.colIdx + slot.colSpan;
                if (right > (cache.colLefts[targetIdx] ?? 0)) {
                    const delta = right - cache.colLefts[targetIdx];
                    for (let i = targetIdx; i < cache.colLefts.length; i++) cache.colLefts[i] += delta;
                }
            }
            cache.tableWidth = Math.max(cache.tableWidth, right);
        }

        rowSke.height = rowHeights[rowIndex];

        // Record this row's final height; back-fill pageHeight on any
        // spanned owner whose lastRow == row.
        if (rowIndex === 0) {
            cache.rowHeightHistory[row] = rowHeights[rowIndex];

            const sealOwner = (pending: { skeleton: IDocumentSkeletonPage; firstRow: number; lastRow: number }) => {
                let h = 0;
                for (let r = pending.firstRow; r <= pending.lastRow; r++) h += cache.rowHeightHistory[r] ?? 0;
                pending.skeleton.pageHeight = h;
            };
            for (const pending of cache.spannedByLastRow.get(row) ?? []) sealOwner(pending);
            cache.spannedByLastRow.delete(row);
            for (const pending of localSpanned) {
                const firstRow = row;
                if (pending.lastRow === row) {
                    sealOwner({ skeleton: pending.skeleton, firstRow, lastRow: row });
                } else {
                    const arr = cache.spannedByLastRow.get(pending.lastRow) ?? [];
                    arr.push({ skeleton: pending.skeleton, contentHeight: pending.contentHeight, firstRow, lastRow: pending.lastRow });
                    cache.spannedByLastRow.set(pending.lastRow, arr);
                }
            }
        }
    }

    if (row === 0 && cache.repeatRow) {
        cache.repeatRowHeight = rowHeights[rowHeights.length - 1];
    }

    // Handle vertical alignment in cell.
    for (const rowSkeleton of rowSkeletons) {
        _verticalAlignInCell(rowSkeleton, rowSource, cache.grid.rows[row] ?? []);
    }

    while (rowSkeletons.length > 0) {
        const rowSkeleton = rowSkeletons.shift()!;
        const lastRow = curTableSkeleton.rows[curTableSkeleton.rows.length - 1];

        if (cache.remainHeight < MAX_FONT_SIZE || cache.remainHeight < rowSkeleton.height) {
            cache.remainHeight = getAvailableHeight(curPage, cache, row !== 0 && rowSkeleton.index !== lastRow.index);
            cache.rowTop = 0;

            if (curTableSkeleton.rows.length > 0) {
                curTableSkeleton = getNullTableSkeleton(startIndex, endIndex, table);
                skeTables.push(curTableSkeleton);

                // Handle repeat first row.
                // 如果当前行跨页，那么不用再第二页上面重复标题行了。
                if (cache.repeatRow && isRepeatRow === false && row !== 0 && rowSkeleton.index !== lastRow.index) {
                    const FIRST_ROW_INDEX = 0;
                    cache.remainHeight = getAvailableHeight(curPage, cache, false);
                    dealWithTableRow(
                        ctx,
                        curPage,
                        skeTables,
                        viewModel,
                        sectionBreakConfig,
                        cache.repeatRow,
                        FIRST_ROW_INDEX,
                        table,
                        cache,
                        true
                    );
                }
            }
        }

        curTableSkeleton = getCurTableSkeleton(skeTables);

        rowSkeleton.top = cache.rowTop;
        curTableSkeleton.height += rowSkeleton.height;

        curTableSkeleton.rows.push(rowSkeleton);
        rowSkeleton.parent = curTableSkeleton;
        cache.remainHeight -= rowSkeleton.height;

        cache.rowTop += rowSkeleton.height;
    }
}

function _verticalAlignInCell(
    rowSkeleton: IDocumentSkeletonRow,
    rowSource: ITableRow,
    rowSlots: GridSlot[]
) {
    let cellArrIdx = 0;
    for (const slot of rowSlots) {
        if (slot.isContinue) continue;
        const cellPageSkeleton = rowSkeleton.cells[cellArrIdx++];
        if (cellPageSkeleton == null) continue;
        const cellConfig = rowSource.tableCells[slot.cellIdx];
        if (cellConfig == null) continue;

        const { vAlign = VerticalAlignmentType.CONTENT_ALIGNMENT_UNSPECIFIED } = cellConfig;
        const { pageHeight, height, originMarginTop, originMarginBottom } = cellPageSkeleton;

        let marginTop = originMarginTop;

        switch (vAlign) {
            case VerticalAlignmentType.TOP: {
                marginTop = originMarginTop;
                break;
            }
            case VerticalAlignmentType.CENTER: {
                marginTop = (pageHeight - height) / 2;
                break;
            }
            case VerticalAlignmentType.BOTTOM: {
                marginTop = pageHeight - height - originMarginBottom;
                break;
            }
            default:
                break;
        }

        marginTop = Math.max(originMarginTop, marginTop);

        cellPageSkeleton.marginTop = marginTop;
    }
}

function _getTableLeft(pageWidth: number, tableWidth: number, align: TableAlignmentType, indent: INumberUnit = { v: 0 }) {
    switch (align) {
        case TableAlignmentType.START: {
            return indent.v;
        }
        case TableAlignmentType.END: {
            return Math.max(0, pageWidth - tableWidth);
        }
        case TableAlignmentType.CENTER: {
            return Math.max(0, (pageWidth - tableWidth) / 2);
        }
        default: {
            throw new Error('Unknown table alignment type');
        }
    }
}

export function getNullTableSkeleton(
    st: number,
    ed: number,
    table: ITable
): IDocumentSkeletonTable {
    return {
        rows: [],
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        st,
        ed,
        tableId: table.tableId,
        tableSource: table,
    };
}

function _getNullTableRowSkeleton(
    st: number,
    ed: number,
    index: number,
    rowSource: ITableRow,
    isRepeatRow = false,
    parent?: IDocumentSkeletonTable
): IDocumentSkeletonRow {
    return {
        cells: [],
        index,
        height: 0,
        top: 0,
        st,
        ed,
        parent,
        rowSource,
        isRepeatRow,
    };
}

export function getTableSliceId(tableId: string, sliceIndex: number) {
    return `${tableId}#-#${sliceIndex}`;
}

export function getTableIdAndSliceIndex(tableSliceId: string) {
    if (!tableSliceId.includes('#-#')) {
        return {
            tableId: tableSliceId,
            sliceIndex: 0,
        };
    }

    const [tableId, sliceIndex] = tableSliceId.split('#-#');
    return {
        tableId,
        sliceIndex: Number(sliceIndex),
    };
}
