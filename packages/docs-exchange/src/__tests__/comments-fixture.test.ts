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

const FIXTURE = path.resolve(__dirname, '../../../../examples/public/demo.docx');

describe('demo.docx comments import', () => {
    it('emits a thread-comment resource and COMMENT customDecorations', async () => {
        const buf = fs.readFileSync(FIXTURE);
        const doc = await docxToUniverData(buf);
        const res = (doc.resources ?? []).find((r) => r.name === 'SHEET_UNIVER_THREAD_COMMENT_PLUGIN');
        expect(res).toBeDefined();
        const data = JSON.parse(res!.data) as { default_doc: Array<{ id: string; personId: string; threadId: string; unitId: string }> };
        // demo.docx has 3 top-level comments by Reviewer / Editor / QA.
        expect(data.default_doc.length).toBe(3);
        expect(new Set(data.default_doc.map((c) => c.personId))).toEqual(new Set(['Reviewer', 'Editor', 'QA']));
        // The doc carries an explicit id, and every comment's unitId matches it —
        // the thread-comment panel re-fetches comments by `comment.unitId`, so a
        // mismatch (e.g. '') makes the panel show empty placeholder comments.
        expect(doc.id).toBeTruthy();
        expect(data.default_doc.every((c) => c.unitId === doc.id)).toBe(true);
        // Each comment anchors a COMMENT customDecoration in the body.
        const decos = (doc.body?.customDecorations ?? []).filter((d) => d.type === 0);
        expect(decos.length).toBe(3);
        const threadIds = new Set(data.default_doc.map((c) => c.threadId));
        expect(decos.every((d) => threadIds.has(d.id))).toBe(true);
    });
});
