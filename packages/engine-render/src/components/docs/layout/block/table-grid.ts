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

import type { ITable, ITableCell, ITableRow } from '@univerjs/core';
import { BooleanNumber } from '@univerjs/core';

// Each slot represents one grid (row, col) position in a table. A
// vertically merged cell still occupies one slot per spanned row — the
// continuation slot has `isContinue = true` and points back to the
// "owner" slot (the slot the merge originated from, marked with a
// `rowSpan ≥ 2`).
export interface GridSlot {
    rowIdx: number;
    /** Grid column the slot starts at, after horizontal-merge accounting. */
    colIdx: number;
    /** OOXML gridSpan; ≥ 1. */
    colSpan: number;
    /** OOXML rowSpan; ≥ 1. For continuation slots this equals 1 (only the owner carries the full span). */
    rowSpan: number;
    /**
     * Index into `tableSource.tableRows[rowIdx].tableCells` for the cell
     * that produced this slot. Continuation slots also have a cellIdx
     * (the `<w:vMerge/>` cell), even though we don't paint them.
     */
    cellIdx: number;
    /** True when this slot is the trailing half of a vertical merge. */
    isContinue: boolean;
    /** Row that owns this slot — same as `rowIdx` when `isContinue === false`. */
    ownerRow: number;
    /** Cell index inside `tableRows[ownerRow].tableCells` of the owner. */
    ownerCellIdx: number;
}

export interface TableGrid {
    rows: GridSlot[][];
}

function isContinuation(cell: ITableCell | undefined): boolean {
    return cell?.vMergeContinue === BooleanNumber.TRUE;
}

/**
 * Walks an `ITable` and projects it onto a row-by-row grid that resolves
 * both horizontal (gridSpan) and vertical (vMerge) merges. Returned
 * slots are ordered left→right within each row.
 *
 * Algorithm:
 *  - Maintain a `colCursor` per row to track the next free grid column.
 *  - Maintain an "owner stack" per column: the cell that currently owns
 *    that column (the most recent restart). When the next row's cell at
 *    that column is a continuation, it inherits the stack's owner.
 *  - Cells without `vMergeContinue` overwrite the owner stack at the
 *    column(s) they occupy.
 *
 * The function makes no I/O and does not depend on layout state — it's
 * pure schema → grid projection.
 */
export function buildTableGrid(tableSource: ITable): TableGrid {
    const rows: GridSlot[][] = [];
    // `columnOwner[col]` holds the slot currently spanning at this grid
    // column. A continuation cell looks up this slot to find its owner.
    const columnOwner: Array<GridSlot | undefined> = [];

    for (let rowIdx = 0; rowIdx < tableSource.tableRows.length; rowIdx++) {
        const rowSource: ITableRow = tableSource.tableRows[rowIdx];
        const rowSlots: GridSlot[] = [];
        let colCursor = 0;
        for (let cellIdx = 0; cellIdx < rowSource.tableCells.length; cellIdx++) {
            const cell = rowSource.tableCells[cellIdx];
            const colSpan = Math.max(1, cell.columnSpan ?? 1);

            // Real cell (no vMergeContinue) → assign new ownership for
            // its full column span. Continuation cell → inherit from the
            // most recent owner at this column.
            if (!isContinuation(cell)) {
                const slot: GridSlot = {
                    rowIdx,
                    colIdx: colCursor,
                    colSpan,
                    rowSpan: Math.max(1, cell.rowSpan ?? 1),
                    cellIdx,
                    isContinue: false,
                    ownerRow: rowIdx,
                    ownerCellIdx: cellIdx,
                };
                rowSlots.push(slot);
                for (let c = colCursor; c < colCursor + colSpan; c++) {
                    columnOwner[c] = slot;
                }
            } else {
                const owner = columnOwner[colCursor];
                if (owner) {
                    rowSlots.push({
                        rowIdx,
                        colIdx: colCursor,
                        colSpan,
                        rowSpan: 1,
                        cellIdx,
                        isContinue: true,
                        ownerRow: owner.ownerRow,
                        ownerCellIdx: owner.ownerCellIdx,
                    });
                } else {
                    // Defensive: continuation with no owner above. Treat
                    // it as a real (but empty) cell — better than dropping
                    // it and shifting subsequent columns left.
                    rowSlots.push({
                        rowIdx,
                        colIdx: colCursor,
                        colSpan,
                        rowSpan: 1,
                        cellIdx,
                        isContinue: false,
                        ownerRow: rowIdx,
                        ownerCellIdx: cellIdx,
                    });
                }
            }

            colCursor += colSpan;
        }
        rows.push(rowSlots);
    }

    return { rows };
}
