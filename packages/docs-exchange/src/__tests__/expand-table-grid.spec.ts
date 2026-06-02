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

import type { ParsedCell, ParsedTable } from '../utils/parse/types';
import { describe, expect, it } from 'vitest';
import { expandTableGrid } from '../utils/parse/expand-table-grid';

function cell(overrides: Partial<ParsedCell> = {}): ParsedCell {
    return { paragraphs: [], ...overrides };
}
function table(rows: ParsedCell[][]): ParsedTable {
    return { rows };
}

describe('expandTableGrid', () => {
    it('passes a plain 2x2 table through unchanged (all masters)', () => {
        const grid = expandTableGrid(table([
            [cell(), cell()],
            [cell(), cell()],
        ]));
        expect(grid.length).toBe(2);
        expect(grid[0].length).toBe(2);
        for (const row of grid) {
            for (const c of row) expect(c.kind).toBe('master');
        }
        expect(grid[0][1].colStart).toBe(1);
    });

    it('expands gridSpan into a master + synthesized covered cells', () => {
        const grid = expandTableGrid(table([
            [cell({ columnSpan: 2 }), cell()],
            [cell(), cell(), cell()],
        ]));
        expect(grid[0].map((c) => c.kind)).toEqual(['master', 'covered', 'master']);
        expect(grid[0][0].columnSpan).toBe(2);
        expect(grid[0][1]).toMatchObject({ kind: 'covered', colStart: 1 });
        expect(grid[0][2]).toMatchObject({ kind: 'master', colStart: 2 });
        expect(grid[0][1].master).toBe(grid[0][0]);
    });

    it('marks vMerge continuation cells as covered, pointing at the restart master', () => {
        const grid = expandTableGrid(table([
            [cell({ rowSpan: 2 }), cell()],
            [cell({ vMerge: 'continue' }), cell()],
        ]));
        expect(grid[0][0]).toMatchObject({ kind: 'master', rowSpan: 2 });
        expect(grid[1][0]).toMatchObject({ kind: 'covered', colStart: 0 });
        expect(grid[1][0].master).toBe(grid[0][0]);
    });

    it('pads short rows up to the grid width with covered cells', () => {
        const grid = expandTableGrid(table([
            [cell(), cell(), cell()],
            [cell(), cell()],
        ]));
        expect(grid[1].length).toBe(3);
        expect(grid[1][2].kind).toBe('covered');
    });

    it('falls back to a master when a continuation has no owner above', () => {
        const grid = expandTableGrid(table([
            [cell({ vMerge: 'continue' }), cell()],
        ]));
        expect(grid[0][0].kind).toBe('master');
        expect(grid[0][0].rowSpan).toBe(1);
    });

    it('does not point a padded covered cell at a master in a LATER row', () => {
        const grid = expandTableGrid(table([
            [cell(), cell(), cell()], // row 0: 3 masters
            [cell(), cell()], // row 1: short, padded at col 2
            [cell({ columnSpan: 3 })], // row 2: new master claims col 2
        ]));
        // row 1 col 2 padding must NOT reference the row-2 master; it should
        // reference the row-0 master at col 2 (the owner at or above row 1).
        expect(grid[1][2].master).toBe(grid[0][2]);
    });

    it('handles a vMerge continuation cell that also carries columnSpan > 1', () => {
        const grid = expandTableGrid(table([
            [cell({ rowSpan: 2, columnSpan: 2 }), cell()], // master 2 wide, 2 tall
            [cell({ vMerge: 'continue', columnSpan: 2 }), cell()], // continuation, 2 wide
        ]));
        // Row 1 cols 0 and 1 are covered, both pointing at the row-0 master.
        expect(grid[1][0]).toMatchObject({ kind: 'covered', colStart: 0 });
        expect(grid[1][1]).toMatchObject({ kind: 'covered', colStart: 1 });
        expect(grid[1][0].master).toBe(grid[0][0]);
        expect(grid[1][1].master).toBe(grid[0][0]);
    });

    it('points a padded short-row covered cell at the master directly above', () => {
        const grid = expandTableGrid(table([
            [cell(), cell(), cell()],
            [cell(), cell()],
        ]));
        expect(grid[1][2]).toMatchObject({ kind: 'covered', colStart: 2 });
        expect(grid[1][2].master).toBe(grid[0][2]);
    });
});
