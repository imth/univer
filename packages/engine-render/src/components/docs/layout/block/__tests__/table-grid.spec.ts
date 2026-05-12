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

import type { ITable } from '@univerjs/core';
import { BooleanNumber } from '@univerjs/core';
import { describe, expect, it } from 'vitest';
import { buildTableGrid } from '../table-grid';

// Minimal ITable factory — only the fields buildTableGrid reads.
function makeTable(rows: Array<Array<{ colSpan?: number; rowSpan?: number; cont?: boolean }>>): ITable {
    return {
        tableRows: rows.map((row) => ({
            tableCells: row.map((c) => ({
                columnSpan: c.colSpan,
                rowSpan: c.rowSpan,
                vMergeContinue: c.cont ? BooleanNumber.TRUE : undefined,
            })),
            trHeight: { val: { v: 0 }, hRule: 0 },
        })),
        tableColumns: [],
        align: 0,
        indent: { v: 0 },
        textWrap: 0,
        position: { positionH: { relativeFrom: 0, posOffset: 0 }, positionV: { relativeFrom: 0, posOffset: 0 } },
        dist: { distB: 0, distL: 0, distR: 0, distT: 0 },
        size: { type: 0, width: { v: 0 } },
        tableId: 't',
    } as unknown as ITable;
}

describe('buildTableGrid', () => {
    it('plain 2x2 table → every slot is rowSpan=1 colSpan=1 isContinue=false', () => {
        const grid = buildTableGrid(makeTable([
            [{}, {}],
            [{}, {}],
        ]));
        expect(grid.rows.length).toBe(2);
        for (const row of grid.rows) {
            expect(row.length).toBe(2);
            row.forEach((slot, c) => {
                expect(slot.colSpan).toBe(1);
                expect(slot.rowSpan).toBe(1);
                expect(slot.isContinue).toBe(false);
                expect(slot.colIdx).toBe(c);
                expect(slot.ownerRow).toBe(slot.rowIdx);
            });
        }
    });

    it('gridSpan=3 in row 0 produces one slot covering cols 0..2', () => {
        const grid = buildTableGrid(makeTable([
            [{ colSpan: 3 }],
            [{}, {}, {}],
        ]));
        expect(grid.rows[0].length).toBe(1);
        expect(grid.rows[0][0].colSpan).toBe(3);
        expect(grid.rows[0][0].colIdx).toBe(0);
        // Row 1 still has three slots at cols 0/1/2.
        expect(grid.rows[1].map((s) => s.colIdx)).toEqual([0, 1, 2]);
    });

    it('vMerge=restart in row 1, continuation in row 2: row 2 col 0 is isContinue with owner = row 1 col 0', () => {
        const grid = buildTableGrid(makeTable([
            [{}, {}, {}],
            [{ rowSpan: 2 }, {}, {}], // "Merged down"
            [{ cont: true }, {}, {}],
        ]));
        const r1c0 = grid.rows[1][0];
        expect(r1c0.rowSpan).toBe(2);
        expect(r1c0.isContinue).toBe(false);

        const r2c0 = grid.rows[2][0];
        expect(r2c0.isContinue).toBe(true);
        expect(r2c0.ownerRow).toBe(1);
        expect(r2c0.ownerCellIdx).toBe(0);
        // R3C2/R3C3 (slots 1, 2 in row 2) are still real cells.
        expect(grid.rows[2][1].isContinue).toBe(false);
        expect(grid.rows[2][1].colIdx).toBe(1);
        expect(grid.rows[2][2].colIdx).toBe(2);
    });

    it('combined gridSpan + vMerge: a 2-col-wide restart cell carries its colSpan to the continuation', () => {
        const grid = buildTableGrid(makeTable([
            [{ colSpan: 2, rowSpan: 2 }, {}], // owner takes cols 0..1
            [{ cont: true, colSpan: 2 }, {}], // continuation also reported as 2 wide
        ]));
        const restart = grid.rows[0][0];
        expect(restart.colSpan).toBe(2);
        expect(restart.rowSpan).toBe(2);

        const cont = grid.rows[1][0];
        expect(cont.isContinue).toBe(true);
        expect(cont.colIdx).toBe(0);
        expect(cont.colSpan).toBe(2);
        expect(cont.ownerCellIdx).toBe(0);
        // Row 1's second slot starts at col 2.
        expect(grid.rows[1][1].colIdx).toBe(2);
    });

    it('continuation without an owner above (defensive): treats slot as real', () => {
        // Row 0 has a vMerge continuation as the FIRST cell — there's
        // nothing above to merge with. We expect it to render as a real
        // (empty) cell rather than disappear.
        const grid = buildTableGrid(makeTable([
            [{ cont: true }],
        ]));
        const slot = grid.rows[0][0];
        expect(slot.isContinue).toBe(false);
        expect(slot.ownerRow).toBe(0);
    });
});
