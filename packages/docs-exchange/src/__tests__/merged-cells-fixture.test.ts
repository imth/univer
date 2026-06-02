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

import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { docxToUniverData } from '../docx-to-univer';

const FIXTURE = path.resolve(__dirname, 'fixtures/merged-cells-fixture.docx');

describe('merged-cells-fixture.docx', () => {
    it('imports merges as canonical covered cells (rowSpan:0/columnSpan:0), no vMergeContinue', async () => {
        const buf = fs.readFileSync(FIXTURE);
        const doc = await docxToUniverData(buf);
        const tables = Object.values(doc.tableSource ?? {}) as any[];
        expect(tables.length).toBe(3);

        // Every table row is rectangular (same cell count across its rows).
        for (const t of tables) {
            const widths = t.tableRows.map((r: any) => r.tableCells.length);
            expect(new Set(widths).size).toBe(1);
        }

        // gridSpan table: row0 = [master colSpan2, covered 0/0].
        const grid = tables.find((t) => t.tableRows[0].tableCells.some((c: any) => c.columnSpan === 2));
        expect(grid.tableRows[0].tableCells.map((c: any) => [c.rowSpan, c.columnSpan]))
            .toEqual([[1, 2], [0, 0]]);

        // vMerge table: some cell is rowSpan 2 and its continuation is 0/0.
        const vm = tables.find((t) => t.tableRows.some((r: any) => r.tableCells.some((c: any) => c.rowSpan === 2)));
        expect(vm.tableRows[1].tableCells[0]).toMatchObject({ rowSpan: 0, columnSpan: 0 });

        // No fork extension anywhere in the snapshot.
        expect(JSON.stringify(doc)).not.toContain('vMergeContinue');

        // dataStream cell-block count equals total grid positions across all tables.
        const totalPositions = tables.reduce((n, t) =>
            n + t.tableRows.reduce((m: number, r: any) => m + r.tableCells.length, 0), 0);
        const cellStarts = (doc.body!.dataStream.match(/\x1C/g) ?? []).length;
        expect(cellStarts).toBe(totalPositions);
    });
});
