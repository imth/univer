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

const FIXTURE = path.resolve(__dirname, 'fixtures/image-xfrm-fixture.docx');

describe('image-xfrm-fixture.docx', () => {
    it('imports rotation/flip and crop onto image drawings', async () => {
        const buf = fs.readFileSync(FIXTURE);
        const doc = await docxToUniverData(buf);
        const drawings = Object.values(doc.drawings ?? {}) as Array<{
            transform?: { angle?: number; flipX?: boolean };
            srcRect?: { left?: number; right?: number };
        }>;
        const rotated = drawings.find((d) => (d.transform?.angle ?? 0) !== 0);
        const cropped = drawings.find((d) => d.srcRect != null);
        expect(rotated?.transform?.angle).toBeCloseTo(45, 5);
        expect(rotated?.transform?.flipX).toBe(true);
        // 914400 EMU = 96 px visible; 96*0.25/0.5 = 48
        expect(cropped?.srcRect?.left).toBeCloseTo(48, 0);
        expect(cropped?.srcRect?.right).toBeCloseTo(48, 0);
    });
});
