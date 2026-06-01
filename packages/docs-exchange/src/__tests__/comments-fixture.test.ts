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

// Committed fixture (scripts/comments-fixture/generate-comments-fixture.py):
// 3 comments — Reviewer (top-level), Editor (top-level), QA (reply to Editor,
// resolved) — each anchoring a text range.
const FIXTURE = path.resolve(__dirname, 'fixtures/comments-fixture.docx');

interface ResComment {
    id: string;
    personId: string;
    threadId: string;
    unitId: string;
    resolved?: boolean;
    parentId?: string;
    children?: ResComment[];
}

describe('comments-fixture.docx', () => {
    it('imports comments as a thread-comment resource (threads + resolved) and COMMENT decorations', async () => {
        const buf = fs.readFileSync(FIXTURE);
        const doc = await docxToUniverData(buf);

        const res = (doc.resources ?? []).find((r) => r.name === 'SHEET_UNIVER_THREAD_COMMENT_PLUGIN');
        expect(res).toBeDefined();
        const roots = (JSON.parse(res!.data) as { default_doc: ResComment[] }).default_doc;

        // Two top-level threads: Reviewer and Editor.
        expect(roots.length).toBe(2);
        expect(new Set(roots.map((c) => c.personId))).toEqual(new Set(['Reviewer', 'Editor']));

        // The Editor thread has one reply (QA), nested + resolved + parented to root.
        const editor = roots.find((c) => c.personId === 'Editor')!;
        expect(editor.children?.length).toBe(1);
        const reply = editor.children![0];
        expect(reply.personId).toBe('QA');
        expect(reply.parentId).toBe(editor.id);
        expect(reply.threadId).toBe(editor.id);
        expect(reply.resolved).toBe(true);

        // The doc carries an explicit id, and EVERY comment (roots + replies)
        // carries that same unitId — the panel re-fetches comments by unitId.
        expect(doc.id).toBeTruthy();
        const allComments = [...roots, ...roots.flatMap((c) => c.children ?? [])];
        expect(allComments.every((c) => c.unitId === doc.id)).toBe(true);

        // Each comment range anchors a COMMENT customDecoration (id = thread root).
        const decos = (doc.body?.customDecorations ?? []).filter((d) => d.type === 0);
        expect(decos.length).toBe(3);
        const threadIds = new Set(roots.map((c) => c.id));
        expect(decos.every((d) => threadIds.has(d.id))).toBe(true);
    });
});
