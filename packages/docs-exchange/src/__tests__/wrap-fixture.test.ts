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

const FIXTURE = path.resolve(__dirname, 'fixtures/wrap-shapes-fixture.docx');

describe('wrap-shapes-fixture.docx', () => {
    it('imports floating images with real wrap layoutTypes', async () => {
        const buf = fs.readFileSync(FIXTURE);
        const doc = await docxToUniverData(buf);
        const drawings = Object.values(doc.drawings ?? {});
        // WRAP_SQUARE=3, WRAP_TIGHT=5, WRAP_TOP_AND_BOTTOM=6
        const layoutTypes = drawings
            .map((d) => (d as { layoutType?: number }).layoutType)
            .sort((a, b) => (a ?? -1) - (b ?? -1));
        expect(layoutTypes).toEqual([3, 5, 6]);
    });
});
