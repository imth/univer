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

import type { ParsedCell, ParsedTable } from './types';

/**
 * One position in the fully-expanded canonical table grid. A merged region is
 * one `master` cell (carrying the full rowSpan/columnSpan) plus one `covered`
 * cell at every other position it spans. This mirrors Univer's native model
 * (see docs-ui html-to-udm converter: covered = `{rowSpan:0,columnSpan:0}`).
 */
export interface CanonicalCell {
    kind: 'master' | 'covered';
    /** Grid column this position starts at. */
    colStart: number;
    /** Full column span (master ≥ 1; covered is 1 — it occupies a single grid column). */
    columnSpan: number;
    /** Full row span (master ≥ 1; covered is 1). */
    rowSpan: number;
    /** The originating parsed cell for a master; undefined for synthesized covered cells. */
    source?: ParsedCell;
    /** Back-reference to the master that owns this position (self for masters). */
    master: CanonicalCell;
}

function isContinuation(cell: ParsedCell): boolean {
    return cell.vMerge === 'continue';
}

/**
 * Projects a sparse parsed table (OOXML form: gridSpan = one cell with
 * columnSpan=N and no covered cells; vMerge = restart + continuation cells)
 * onto a rectangular, fully-expanded grid where every (row, column) position
 * is either a `master` or a `covered` cell.
 *
 * Algorithm (O(cells)): keep a `columnOwner[]` stack — the master currently
 * spanning each grid column. A real cell claims ownership of its full column
 * span; a continuation cell inherits the owner directly above. After laying
 * out a row's real + continuation cells, pad the row up to the running grid
 * width with covered cells (handles short rows). Pure — no I/O, no layout state.
 */
export function expandTableGrid(table: ParsedTable): CanonicalCell[][] {
    const columnOwner: Array<CanonicalCell | undefined> = [];
    const grid: CanonicalCell[][] = [];
    const ownerSnapshots: Array<Array<CanonicalCell | undefined>> = [];
    let gridWidth = 0;

    for (const rowSource of table.rows) {
        const rowCells: CanonicalCell[] = [];
        let colCursor = 0;

        for (const cell of rowSource) {
            const columnSpan = Math.max(1, cell.columnSpan ?? 1);

            if (!isContinuation(cell)) {
                const master: CanonicalCell = {
                    kind: 'master',
                    colStart: colCursor,
                    columnSpan,
                    rowSpan: Math.max(1, cell.rowSpan ?? 1),
                    source: cell,
                    master: undefined as unknown as CanonicalCell,
                };
                master.master = master;
                rowCells.push(master);
                for (let c = colCursor; c < colCursor + columnSpan; c++) columnOwner[c] = master;
                for (let c = colCursor + 1; c < colCursor + columnSpan; c++) {
                    rowCells.push({ kind: 'covered', colStart: c, columnSpan: 1, rowSpan: 1, master });
                }
            } else {
                const owner = columnOwner[colCursor];
                if (owner) {
                    rowCells.push({ kind: 'covered', colStart: colCursor, columnSpan: 1, rowSpan: 1, master: owner });
                    for (let c = colCursor + 1; c < colCursor + columnSpan; c++) {
                        rowCells.push({ kind: 'covered', colStart: c, columnSpan: 1, rowSpan: 1, master: owner });
                    }
                } else {
                    // Fallback: orphan continuation with no owner above becomes a master and
                    // claims ownership of its columns going forward.
                    const master: CanonicalCell = {
                        kind: 'master',
                        colStart: colCursor,
                        columnSpan,
                        rowSpan: 1,
                        source: cell,
                        master: undefined as unknown as CanonicalCell,
                    };
                    master.master = master;
                    rowCells.push(master);
                    for (let c = colCursor; c < colCursor + columnSpan; c++) columnOwner[c] = master;
                    for (let c = colCursor + 1; c < colCursor + columnSpan; c++) {
                        rowCells.push({ kind: 'covered', colStart: c, columnSpan: 1, rowSpan: 1, master });
                    }
                }
            }
            colCursor += columnSpan;
        }

        gridWidth = Math.max(gridWidth, colCursor);
        grid.push(rowCells);
        // Snapshot columnOwner after this row so the padding pass can look up
        // the correct owner at-or-above each row (never a forward reference).
        ownerSnapshots.push(columnOwner.slice());
    }

    grid.forEach((rowCells, ri) => {
        let width = rowCells.reduce((n, c) => Math.max(n, c.colStart + c.columnSpan), 0);
        while (width < gridWidth) {
            const owner = ownerSnapshots[ri][width];
            if (owner) {
                rowCells.push({ kind: 'covered', colStart: width, columnSpan: 1, rowSpan: 1, master: owner });
            } else {
                const pad: CanonicalCell = {
                    kind: 'covered',
                    colStart: width,
                    columnSpan: 1,
                    rowSpan: 1,
                    master: undefined as unknown as CanonicalCell,
                };
                pad.master = pad;
                rowCells.push(pad);
            }
            width += 1;
        }
    });

    return grid;
}
