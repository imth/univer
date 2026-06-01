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

import type { IDocumentBody } from '@univerjs/core';
import type { StylesIndex } from './parse-styles';
import type { ThemeFonts } from './parse-theme';
import type { XmlNode } from './xml';
import { parseParagraph } from './parse-paragraph';
import { nodeAttrs, nodeChildren, nodeName, xmlParser } from './xml';

const DOC_SUBUNIT_ID = 'default_doc';

/** Univer IThreadComment subset emitted by the importer (no runtime unitId yet). */
export interface ImportedComment {
    id: string;
    threadId: string;
    dT: string;
    personId: string;
    text: IDocumentBody;
    parentId?: string;
    resolved?: boolean;
    unitId: string;
    subUnitId: string;
    children?: ImportedComment[];
}

export interface ParsedComments {
    /** Top-level (root) comments; replies nested in `children`. */
    threads: ImportedComment[];
    /** OOXML w:id (string) → thread root id. Anchors customDecorations. */
    commentIdToThreadId: Map<string, string>;
}

const EMPTY: ParsedComments = { threads: [], commentIdToThreadId: new Map() };

function findFirstByName(node: XmlNode | undefined, target: string): XmlNode | undefined {
    if (!node || typeof node !== 'object') return undefined;
    if (nodeName(node) === target) return node;
    for (const child of nodeChildren(node)) {
        const found = findFirstByName(child, target);
        if (found) return found;
    }
    return undefined;
}

// Build a minimal IDocumentBody from the comment's <w:p> children, reusing
// parseParagraph + a stripped emit loop (mirrors assembleTextBoxBody in
// parse-drawing.ts — comment bodies carry no numbering/drawings/sections).
function commentBody(
    commentNode: XmlNode,
    styles: StylesIndex | undefined,
    themeFonts: ThemeFonts | undefined
): IDocumentBody {
    let data = '';
    const textRuns: NonNullable<IDocumentBody['textRuns']> = [];
    const paragraphs: NonNullable<IDocumentBody['paragraphs']> = [];
    for (const child of nodeChildren(commentNode)) {
        if (nodeName(child) !== 'w:p') continue;
        const parsed = parseParagraph(child, undefined, styles, themeFonts);
        for (const run of parsed.runs) {
            if (!run.text) continue;
            const start = data.length;
            data += run.text;
            if (run.style) textRuns.push({ st: start, ed: data.length, ts: run.style as Record<string, unknown> });
        }
        const paraEnd = data.length;
        data += '\r';
        paragraphs.push({ startIndex: paraEnd });
    }
    if (paragraphs.length === 0) {
        data = '\r';
        paragraphs.push({ startIndex: 0 });
    }
    return { dataStream: data, textRuns, paragraphs };
}

// Last <w:p w14:paraId> of a comment — commentsExtended links threads by it.
function lastParaId(commentNode: XmlNode): string | undefined {
    let last: string | undefined;
    for (const child of nodeChildren(commentNode)) {
        if (nodeName(child) !== 'w:p') continue;
        const pid = nodeAttrs(child)['@_w14:paraId'] as string | undefined;
        if (pid) last = pid;
    }
    return last;
}

/**
 * Parse comments.xml (+ optional commentsExtended.xml for threading/resolved)
 * into a tree of ImportedComment and a commentId→threadId map.
 */
export function parseComments(
    commentsXml: string | undefined,
    commentsExtendedXml: string | undefined,
    styles: StylesIndex | undefined,
    themeFonts?: ThemeFonts
): ParsedComments {
    if (!commentsXml) return EMPTY;
    let root: XmlNode[];
    try {
        root = xmlParser.parse(commentsXml) as XmlNode[];
    } catch {
        return EMPTY;
    }
    const commentsRoot = root.reduce<XmlNode | undefined>((found, n) => found ?? findFirstByName(n, 'w:comments'), undefined);
    if (!commentsRoot) return EMPTY;

    interface Raw { wId: string; paraId?: string; body: IDocumentBody; author: string; date: string }
    const raws: Raw[] = [];
    const paraIdToWId = new Map<string, string>();
    for (const node of nodeChildren(commentsRoot)) {
        if (nodeName(node) !== 'w:comment') continue;
        const a = nodeAttrs(node);
        const wId = String(a['@_w:id'] ?? '');
        if (wId === '') continue;
        const paraId = lastParaId(node);
        raws.push({
            wId,
            paraId,
            body: commentBody(node, styles, themeFonts),
            author: (a['@_w:author'] as string | undefined) ?? '',
            date: (a['@_w:date'] as string | undefined) ?? '',
        });
        if (paraId) paraIdToWId.set(paraId, wId);
    }
    if (raws.length === 0) return EMPTY;

    const extByWId = new Map<string, { parentWId?: string; done: boolean }>();
    if (commentsExtendedXml) {
        try {
            const extParsed = xmlParser.parse(commentsExtendedXml) as XmlNode[];
            const extRoot = extParsed.reduce<XmlNode | undefined>((found, n) => found ?? findFirstByName(n, 'w15:commentsEx'), undefined);
            if (extRoot) {
                for (const ex of nodeChildren(extRoot)) {
                    if (nodeName(ex) !== 'w15:commentEx') continue;
                    const a = nodeAttrs(ex);
                    const paraId = a['@_w15:paraId'] as string | undefined;
                    if (!paraId) continue;
                    const wId = paraIdToWId.get(paraId);
                    if (!wId) continue;
                    const parentParaId = a['@_w15:paraIdParent'] as string | undefined;
                    extByWId.set(wId, {
                        parentWId: parentParaId ? paraIdToWId.get(parentParaId) : undefined,
                        done: a['@_w15:done'] === '1',
                    });
                }
            }
        } catch {
            // ignore malformed commentsExtended; comments stay flat/top-level
        }
    }

    const idOf = (wId: string) => `docx-cmt-${wId}`;

    const rootWIdOf = (wId: string): string => {
        let cur = wId;
        const seen = new Set<string>();
        while (!seen.has(cur)) {
            seen.add(cur);
            const parent = extByWId.get(cur)?.parentWId;
            if (!parent || !raws.some((r) => r.wId === parent)) break;
            cur = parent;
        }
        return cur;
    };

    const commentIdToThreadId = new Map<string, string>();
    const byWId = new Map<string, ImportedComment>();
    for (const raw of raws) {
        const rootWId = rootWIdOf(raw.wId);
        const threadId = idOf(rootWId);
        commentIdToThreadId.set(raw.wId, threadId);
        const isRoot = rootWId === raw.wId;
        const comment: ImportedComment = {
            id: idOf(raw.wId),
            threadId,
            dT: raw.date,
            personId: raw.author,
            text: raw.body,
            unitId: '',
            subUnitId: DOC_SUBUNIT_ID,
            children: isRoot ? [] : undefined,
        };
        if (!isRoot) comment.parentId = idOf(rootWId);
        if (extByWId.get(raw.wId)?.done) comment.resolved = true;
        byWId.set(raw.wId, comment);
    }

    const threads: ImportedComment[] = [];
    for (const raw of raws) {
        const comment = byWId.get(raw.wId)!;
        const rootWId = rootWIdOf(raw.wId);
        if (rootWId === raw.wId) {
            threads.push(comment);
        } else {
            const rootComment = byWId.get(rootWId);
            if (rootComment) (rootComment.children ??= []).push(comment);
        }
    }

    return { threads, commentIdToThreadId };
}
