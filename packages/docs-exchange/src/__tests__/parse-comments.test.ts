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

import { describe, expect, it } from 'vitest';
import { assembleDocument } from '../utils/parse/assemble';
import { parseComments } from '../utils/parse/parse-comments';

const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"';

function commentsXml(inner: string): string {
    return `<w:comments ${NS}>${inner}</w:comments>`;
}

describe('parseComments', () => {
    it('parses a single top-level comment', () => {
        const xml = commentsXml(
            '<w:comment w:id="0" w:author="Reviewer" w:date="2026-04-28T15:33:11Z" w:initials="R"><w:p w14:paraId="AAA"><w:r><w:t>Hello note</w:t></w:r></w:p></w:comment>'
        );
        const out = parseComments(xml, undefined, undefined);
        expect(out.threads.length).toBe(1);
        const c = out.threads[0];
        expect(c.id).toBe('docx-cmt-0');
        expect(c.threadId).toBe('docx-cmt-0');
        expect(c.personId).toBe('Reviewer');
        expect(c.dT).toBe('2026-04-28T15:33:11Z');
        expect(c.subUnitId).toBe('default_doc');
        expect(c.text.dataStream).toBe('Hello note\r');
        expect(c.parentId).toBeUndefined();
        expect(c.children).toEqual([]);
        expect(out.commentIdToThreadId.get('0')).toBe('docx-cmt-0');
    });

    it('threads a reply under its parent via commentsExtended paraIdParent', () => {
        const xml = commentsXml(
            '<w:comment w:id="0" w:author="A" w:date="d1"><w:p w14:paraId="P0"><w:r><w:t>root</w:t></w:r></w:p></w:comment>'
            + '<w:comment w:id="1" w:author="B" w:date="d2"><w:p w14:paraId="P1"><w:r><w:t>reply</w:t></w:r></w:p></w:comment>'
        );
        const ext = `<w15:commentsEx ${NS}>`
            + '<w15:commentEx w15:paraId="P0" w15:done="0"/>'
            + '<w15:commentEx w15:paraId="P1" w15:paraIdParent="P0" w15:done="0"/>'
            + '</w15:commentsEx>';
        const out = parseComments(xml, ext, undefined);
        expect(out.threads.length).toBe(1);
        const root = out.threads[0];
        expect(root.id).toBe('docx-cmt-0');
        expect(root.children?.length).toBe(1);
        const reply = root.children![0];
        expect(reply.id).toBe('docx-cmt-1');
        expect(reply.parentId).toBe('docx-cmt-0');
        expect(reply.threadId).toBe('docx-cmt-0');
        expect(out.commentIdToThreadId.get('1')).toBe('docx-cmt-0');
    });

    it('maps commentsExtended done="1" to resolved', () => {
        const xml = commentsXml(
            '<w:comment w:id="0" w:author="A" w:date="d"><w:p w14:paraId="P0"><w:r><w:t>x</w:t></w:r></w:p></w:comment>'
        );
        const ext = `<w15:commentsEx ${NS}><w15:commentEx w15:paraId="P0" w15:done="1"/></w15:commentsEx>`;
        const out = parseComments(xml, ext, undefined);
        expect(out.threads[0].resolved).toBe(true);
    });

    it('returns empty when no comments part', () => {
        const out = parseComments(undefined, undefined, undefined);
        expect(out.threads).toEqual([]);
        expect(out.commentIdToThreadId.size).toBe(0);
    });
});

describe('comment customDecorations via assemble', () => {
    it('emits a COMMENT customDecoration over the marked range with threadId', () => {
        const children = [{
            kind: 'paragraph' as const,
            paragraph: {
                runs: [
                    { text: 'A' },
                    { text: '', commentRangeStart: '0' },
                    { text: 'B' },
                    { text: '', commentRangeEnd: '0' },
                    { text: 'C' },
                ],
            },
        }] as any;
        const ctx: any = {
            numbering: new Map(),
            rels: new Map(),
            media: new Map(),
            commentIdToThreadId: new Map([['0', 'docx-cmt-0']]),
        };
        const doc = assembleDocument(children, ctx);
        const decos = doc.body!.customDecorations ?? [];
        expect(decos.length).toBe(1);
        // dataStream: 'A'(0) 'B'(1) 'C'(2) '\r' → range covers 'B' at index 1.
        expect(decos[0].id).toBe('docx-cmt-0');
        expect(decos[0].type).toBe(0); // CustomDecorationType.COMMENT
        expect(decos[0].startIndex).toBe(1);
        expect(decos[0].endIndex).toBe(1);
    });
});
