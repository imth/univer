# DOCX 批注 Comments 导入 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 让 DOCX importer 解析 `comments.xml`/`commentsExtended.xml`/`people.xml`，把批注（含回复线程 + 已解决状态）导入 Univer 的 thread-comment 系统，并在被批注文本上发 `CustomDecorationType.COMMENT` 装饰。

**Architecture:** 纯 importer（`@univerjs/docs-exchange`），借力现成的 `@univerjs/docs-thread-comment-ui` 渲染（docs 示例已注册），不动 engine-render。新增 `parse-comments.ts` 产出 `IThreadComment[]`（root + children）和 `commentId → threadId` 映射；`parse-run.ts` 发批注范围标记 run；`assemble.ts` 据此发 `body.customDecorations`；`docx-to-univer.ts` 发 thread-comment resource。

**Tech Stack:** TypeScript、Vitest、项目内 `xml.ts`、`@univerjs/core`（CustomDecorationType）。

**关键常量/形状：**
- resource 名（内联字符串，避免引入 thread-comment 依赖）：`'SHEET_UNIVER_THREAD_COMMENT_PLUGIN'`
- docs 批注 subUnitId：`'default_doc'`
- resource data：`JSON.stringify({ default_doc: rootComments })`，每个 root 形如 `{ id, threadId, dT, personId, text, resolved?, unitId:'', subUnitId:'default_doc', children:[reply...] }`
- `CustomDecorationType.COMMENT === 0`
- comment id 派生：`'docx-cmt-' + wId`

**测试命令：**
```bash
npx vitest run --root packages/docs-exchange src/__tests__/parse-comments.test.ts
```

---

## File Structure

- Modify: `packages/docs-exchange/src/utils/parse/ooxml-reader.ts` — 读 3 个 part 进 bundle。
- Create: `packages/docs-exchange/src/utils/parse/parse-comments.ts` — 解析 + 线程组装 + body 富文本。
- Modify: `packages/docs-exchange/src/utils/parse/parse-run.ts` — 检测 `w:commentRangeStart/End` 发标记 run。
- Modify: `packages/docs-exchange/src/utils/parse/assemble.ts` — 标记 run → `body.customDecorations`（id=threadId）。
- Modify: `packages/docs-exchange/src/docx-to-univer.ts` — 解析批注、线程映射传入 assemble、发 resource。
- Create: `packages/docs-exchange/src/__tests__/parse-comments.test.ts`、`comments-fixture.test.ts`。

---

## Task 1: ooxml-reader 读取 comments / commentsExtended / people 三个 part

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/ooxml-reader.ts`

- [ ] **Step 1: 读取三个可选 part**

在 `ooxml-reader.ts` 中，`settingsXml` 读取那一行（`const settingsXml = await readOptionalText(zip, 'word/settings.xml');`）之后追加：

```ts
    const commentsXml = await readOptionalText(zip, 'word/comments.xml');
    const commentsExtendedXml = await readOptionalText(zip, 'word/commentsExtended.xml');
    const peopleXml = await readOptionalText(zip, 'word/people.xml');
```

- [ ] **Step 2: 在 bundle 返回对象里加上三个字段**

在 `return { documentXml, numberingXml, ... settingsXml, ... }` 对象中，`settingsXml,` 之后追加：

```ts
        commentsXml,
        commentsExtendedXml,
        peopleXml,
```

- [ ] **Step 3: 运行现有测试确认无回归**

Run: `npx vitest run --root packages/docs-exchange`
Expected: PASS（新增可选字段不影响现有逻辑）

- [ ] **Step 4: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/ooxml-reader.ts
git commit -m "feat(docs-exchange): read comments/commentsExtended/people parts"
```

---

## Task 2: parse-comments.ts — 解析批注 + 线程组装

**Files:**
- Create: `packages/docs-exchange/src/utils/parse/parse-comments.ts`
- Create: `packages/docs-exchange/src/__tests__/parse-comments.test.ts`

- [ ] **Step 1: 写失败测试**

创建 `packages/docs-exchange/src/__tests__/parse-comments.test.ts`：

```ts
/**
 * Copyright 2023-present DreamNum Co., Ltd.
 * Licensed under the Apache License, Version 2.0.
 */
import { describe, expect, it } from 'vitest';
import { parseComments } from '../utils/parse/parse-comments';

const NS = `xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"`;

function commentsXml(inner: string): string {
    return `<w:comments ${NS}>${inner}</w:comments>`;
}

describe('parseComments', () => {
    it('parses a single top-level comment', () => {
        const xml = commentsXml(
            `<w:comment w:id="0" w:author="Reviewer" w:date="2026-04-28T15:33:11Z" w:initials="R"><w:p w14:paraId="AAA"><w:r><w:t>Hello note</w:t></w:r></w:p></w:comment>`
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
        // commentId 0 → threadId map
        expect(out.commentIdToThreadId.get('0')).toBe('docx-cmt-0');
    });

    it('threads a reply under its parent via commentsExtended paraIdParent', () => {
        const xml = commentsXml(
            `<w:comment w:id="0" w:author="A" w:date="d1"><w:p w14:paraId="P0"><w:r><w:t>root</w:t></w:r></w:p></w:comment>`
            + `<w:comment w:id="1" w:author="B" w:date="d2"><w:p w14:paraId="P1"><w:r><w:t>reply</w:t></w:r></w:p></w:comment>`
        );
        const ext = `<w15:commentsEx ${NS}>`
            + `<w15:commentEx w15:paraId="P0" w15:done="0"/>`
            + `<w15:commentEx w15:paraId="P1" w15:paraIdParent="P0" w15:done="0"/>`
            + `</w15:commentsEx>`;
        const out = parseComments(xml, ext, undefined);
        expect(out.threads.length).toBe(1); // only the root is top-level
        const root = out.threads[0];
        expect(root.id).toBe('docx-cmt-0');
        expect(root.children?.length).toBe(1);
        const reply = root.children![0];
        expect(reply.id).toBe('docx-cmt-1');
        expect(reply.parentId).toBe('docx-cmt-0');
        expect(reply.threadId).toBe('docx-cmt-0');
        // both comment ids map to the same thread root
        expect(out.commentIdToThreadId.get('1')).toBe('docx-cmt-0');
    });

    it('maps commentsExtended done="1" to resolved', () => {
        const xml = commentsXml(
            `<w:comment w:id="0" w:author="A" w:date="d"><w:p w14:paraId="P0"><w:r><w:t>x</w:t></w:r></w:p></w:comment>`
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
```

- [ ] **Step 2: 运行确认失败**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-comments.test.ts`
Expected: FAIL（`parseComments` 不存在 / 模块缺失）

- [ ] **Step 3: 实现 `parse-comments.ts`**

创建 `packages/docs-exchange/src/utils/parse/parse-comments.ts`：

```ts
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
import { findChild, nodeAttrs, nodeChildren, nodeName, xmlParser } from './xml';

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
    /** OOXML w:id (string) → thread root id. Used to anchor customDecorations. */
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
// parse-drawing.ts — no numbering / drawings / sections in comment bodies).
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
    const commentsRoot = findFirstByName(root[0], 'w:comments');
    if (!commentsRoot) return EMPTY;

    // Flat parse: wId → { node, paraId, body, author, date }
    interface Raw { wId: string; paraId?: string; body: IDocumentBody; author: string; date: string }
    const raws: Raw[] = [];
    const paraIdToWId = new Map<string, string>();
    for (const node of nodeChildren(commentsRoot)) {
        if (nodeName(node) !== 'w:comment') continue;
        const a = nodeAttrs(node);
        const wId = String(a['@_w:id'] ?? '');
        if (wId === '') continue;
        const paraId = lastParaId(node);
        const raw: Raw = {
            wId,
            paraId,
            body: commentBody(node, styles, themeFonts),
            author: (a['@_w:author'] as string | undefined) ?? '',
            date: (a['@_w:date'] as string | undefined) ?? '',
        };
        raws.push(raw);
        if (paraId) paraIdToWId.set(paraId, wId);
    }
    if (raws.length === 0) return EMPTY;

    // commentsExtended: paraId → { parentWId, done }
    const extByWId = new Map<string, { parentWId?: string; done: boolean }>();
    if (commentsExtendedXml) {
        try {
            const extRoot = findFirstByName((xmlParser.parse(commentsExtendedXml) as XmlNode[])[0], 'w15:commentsEx');
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

    // Resolve each comment's thread root by walking parentWId up.
    const rootWIdOf = (wId: string): string => {
        let cur = wId;
        const seen = new Set<string>();
        while (true) {
            if (seen.has(cur)) break; // cycle guard
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
        const ext = extByWId.get(raw.wId);
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
        if (ext?.done) comment.resolved = true;
        byWId.set(raw.wId, comment);
    }

    // Nest replies into their root's children; collect roots in order.
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
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-comments.test.ts`
Expected: PASS（4 个用例全绿）

- [ ] **Step 5: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/parse-comments.ts packages/docs-exchange/src/__tests__/parse-comments.test.ts
git commit -m "feat(docs-exchange): parse comments.xml + commentsExtended threading"
```

---

## Task 3: parse-run.ts — 发批注范围标记 run

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/types.ts`（`ParsedRun` 接口）
- Modify: `packages/docs-exchange/src/utils/parse/parse-run.ts`（检测标记）

- [ ] **Step 1: 给 `ParsedRun` 加批注范围字段**

在 `packages/docs-exchange/src/utils/parse/types.ts` 的 `ParsedRun` 接口（`export interface ParsedRun { text: string; style?; hyperlink?; drawingId?; fieldType?; }`）的 `fieldType?` 字段之后追加：

```ts
    /** OOXML <w:commentRangeStart w:id> marker — carries the comment wId. */
    commentRangeStart?: string;
    /** OOXML <w:commentRangeEnd w:id> marker. */
    commentRangeEnd?: string;
```

- [ ] **Step 2: 在 run 循环里检测标记元素**

在 `parseRunsFromPNode` 的主循环（`for (const child of nodeChildren(pNode))` 里按 `name` 分派的地方）中，`else if (name === 'w:hyperlink') { ... }` 之后追加：

```ts
        } else if (name === 'w:commentRangeStart') {
            const id = nodeAttrs(child)['@_w:id'];
            if (id != null) runs.push({ text: '', commentRangeStart: String(id) });
        } else if (name === 'w:commentRangeEnd') {
            const id = nodeAttrs(child)['@_w:id'];
            if (id != null) runs.push({ text: '', commentRangeEnd: String(id) });
```

（`nodeAttrs` 已在本文件导入；`name` 变量即当前 `nodeName(child)`。）

- [ ] **Step 3: 运行现有测试确认无回归**

Run: `npx vitest run --root packages/docs-exchange`
Expected: PASS（普通文档无 commentRange 标记，行为不变）

- [ ] **Step 4: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/parse-run.ts
git commit -m "feat(docs-exchange): emit comment-range markers from parse-run"
```

---

## Task 4: assemble.ts — 标记 run → body.customDecorations

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/assemble.ts`
- Modify: `packages/docs-exchange/src/__tests__/parse-comments.test.ts`（加 assemble 层断言）

- [ ] **Step 1: 写失败测试 — 通过 assembleDocument 验证 customDecorations**

`assembleDocument(children: DocumentChild[], ctx: AssembleContext): IDocumentData`，其中 `DocumentChild = { kind: 'paragraph'; paragraph: ParsedParagraph } | { kind: 'table'; table }`（见 `utils/parse/types.ts:186`）。在 `parse-comments.test.ts` 追加：

```ts
import { assembleDocument } from '../utils/parse/assemble';

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
```

- [ ] **Step 2: 运行确认失败**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-comments.test.ts -t "COMMENT customDecoration"`
Expected: FAIL（customDecorations 为空 / undefined）

- [ ] **Step 3: AssembleContext 增加 commentIdToThreadId，Accumulator 增加 commentRanges + customDecorations**

在 `assemble.ts`：

1. `AssembleContext` 接口加：
```ts
    /** OOXML comment wId → thread root id (from parse-comments). */
    commentIdToThreadId?: Map<string, string>;
```

2. `Accumulator` 接口加：
```ts
    customDecorations: ICustomDecoration[];
    /** Open comment ranges by wId: start/end dataStream indices. */
    commentRanges: Map<string, { start?: number; end?: number }>;
```
（`ICustomDecoration` 从 `@univerjs/core` 导入；文件已从 core 导入若干类型，把它加进去。）

3. 在创建 `acc` 的地方（`const acc: Accumulator = { data: '', ... drawings: {}, ... }`）初始化：
```ts
        customDecorations: [],
        commentRanges: new Map(),
```

- [ ] **Step 4: emitRun 处理标记 run**

在 `emitRun` 开头（`const runStart = acc.data.length;` 之后、处理 drawing/text 之前）插入：

```ts
    if (run.commentRangeStart != null) {
        const r = acc.commentRanges.get(run.commentRangeStart) ?? {};
        r.start = acc.data.length;
        acc.commentRanges.set(run.commentRangeStart, r);
        return;
    }
    if (run.commentRangeEnd != null) {
        const r = acc.commentRanges.get(run.commentRangeEnd) ?? {};
        r.end = acc.data.length;
        acc.commentRanges.set(run.commentRangeEnd, r);
        return;
    }
```

- [ ] **Step 5: 组装结束时构建 customDecorations**

在 `assembleDocument` 中，构建完 `acc` 后、组装最终 `docData`/`body` 之前，加入：

```ts
    for (const [wId, range] of acc.commentRanges) {
        if (range.start == null || range.end == null || range.end <= range.start) continue;
        const threadId = ctx.commentIdToThreadId?.get(wId);
        if (!threadId) continue;
        acc.customDecorations.push({
            startIndex: range.start,
            endIndex: range.end - 1, // inclusive last covered char (matches customRanges)
            id: threadId,
            type: CustomDecorationType.COMMENT,
        });
    }
```

并在最终 `body` 对象构造后挂上。`body` 在 `assemble.ts:712`：
```ts
    const body: IDocumentBody = {
        dataStream: acc.data,
        textRuns: acc.textRuns,
        paragraphs: acc.paragraphs,
    };
```
在它之后、`if (acc.tables.length > 0) body.tables = acc.tables;` 附近追加：
```ts
    if (acc.customDecorations.length > 0) body.customDecorations = acc.customDecorations;
```
（构建 customDecorations 的循环放在 `body` 构造之前，确保 `acc.customDecorations` 已填好。）

`CustomDecorationType` 从 `@univerjs/core` 导入（与现有 `CustomRangeType` 同处导入）。

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-comments.test.ts`
Expected: PASS（含 customDecoration 断言）

Run（全量回归）: `npx vitest run --root packages/docs-exchange`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/assemble.ts packages/docs-exchange/src/__tests__/parse-comments.test.ts
git commit -m "feat(docs-exchange): emit COMMENT customDecorations from comment ranges"
```

---

## Task 5: docx-to-univer.ts — 接线 + 发 thread-comment resource

**Files:**
- Modify: `packages/docs-exchange/src/docx-to-univer.ts`

- [ ] **Step 1: 解析批注并把线程映射传入 assemble**

在 `docx-to-univer.ts` 顶部加导入：
```ts
import { parseComments } from './utils/parse/parse-comments';
```
（`parseComments` 也需从 `./utils/parse/index` 重新导出——若该 barrel 文件统一导出 parse-*，在 `index.ts` 加 `export { parseComments } from './parse-comments';`；否则直接从 `./utils/parse/parse-comments` 导入。先 Read `utils/parse/index.ts` 确认风格。）

在 `parseStyles` / `parseNumbering` 解析之后（`bundle` 已就绪处）加入：
```ts
    const parsedComments = parseComments(bundle.commentsXml, bundle.commentsExtendedXml, styles, themeFonts);
```
（`styles` 与 `themeFonts` 在该函数作用域已存在；若 `themeFonts` 变量名不同，按实际传入。）

在构造 `AssembleContext`（传给 `assembleDocument` 的 ctx 对象）时，加上：
```ts
        commentIdToThreadId: parsedComments.commentIdToThreadId,
```

- [ ] **Step 2: 发 thread-comment resource**

在 `docData` 组装完、`return docData` 之前（与 watermark resource 发射处相邻，参考现有 `docData.resources.push({ name: DOC_WATERMARK_PLUGIN, ... })`）加入：
```ts
    if (parsedComments.threads.length > 0) {
        docData.resources = docData.resources ?? [];
        docData.resources.push({
            name: 'SHEET_UNIVER_THREAD_COMMENT_PLUGIN',
            data: JSON.stringify({ default_doc: parsedComments.threads }),
        });
    }
```

- [ ] **Step 3: 类型检查 + 全量测试**

Run: `npx tsc --noEmit -p packages/docs-exchange/tsconfig.json 2>&1 | head -20`
Expected: 无 docx-to-univer / parse-comments 相关错误
Run: `npx vitest run --root packages/docs-exchange`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add packages/docs-exchange/src/docx-to-univer.ts packages/docs-exchange/src/utils/parse/index.ts
git commit -m "feat(docs-exchange): wire comments import + emit thread-comment resource"
```

---

## Task 6: fixture（demo.docx）端到端断言 + 浏览器 e2e

**Files:**
- Create: `packages/docs-exchange/src/__tests__/comments-fixture.test.ts`

- [ ] **Step 1: 写 fixture 断言测试（用 examples/public/demo.docx，含 3 条顶层批注）**

创建 `packages/docs-exchange/src/__tests__/comments-fixture.test.ts`：

```ts
/**
 * Copyright 2023-present DreamNum Co., Ltd.
 * Licensed under the Apache License, Version 2.0.
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
        const data = JSON.parse(res!.data) as { default_doc: Array<{ id: string; personId: string; threadId: string }> };
        // demo.docx has 3 top-level comments by Reviewer / Editor / QA.
        expect(data.default_doc.length).toBe(3);
        expect(new Set(data.default_doc.map((c) => c.personId))).toEqual(new Set(['Reviewer', 'Editor', 'QA']));
        // Each comment anchors a COMMENT customDecoration in the body.
        const decos = (doc.body?.customDecorations ?? []).filter((d) => d.type === 0);
        expect(decos.length).toBe(3);
        // decoration ids are thread root ids
        const threadIds = new Set(data.default_doc.map((c) => c.threadId));
        expect(decos.every((d) => threadIds.has(d.id))).toBe(true);
    });
});
```

注意：`docxToUniverData` 接受 `Buffer`（`DocxInput`）。demo.docx 三条顶层批注作者为 Reviewer / Editor / QA。

- [ ] **Step 2: 运行 fixture 测试**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/comments-fixture.test.ts`
Expected: PASS（3 条批注 resource + 3 个 COMMENT 装饰）

若失败：检查是 importer 真 bug 还是断言值（作者/数量）——是 bug 则修，不要弱化断言。

- [ ] **Step 3: Commit**

```bash
git add packages/docs-exchange/src/__tests__/comments-fixture.test.ts
git commit -m "test(docs-exchange): demo.docx comments end-to-end import assertion"
```

- [ ] **Step 4: 浏览器 e2e（docx-import-e2e-verification 技能）**

docs 示例已注册 `UniverDocsThreadCommentUIPlugin`（examples/src/docs/main.ts:66），无需改配置。
1. `docs-exchange.operation.docx-import` 导入 `examples/public/demo.docx`。
2. 确认被批注文本出现批注高亮；打开批注面板（或点击高亮）看到 3 条 "Reviewer" 批注、正文正确。
3. 检查 console 无报错。
4. 清理截图，不提交。

---

## Task 7: IMPORT_NOTES 更新

**Files:**
- Modify: `packages/docs-exchange/IMPORT_NOTES.md`

- [ ] **Step 1: 新增 Comments 小节**

在 `packages/docs-exchange/IMPORT_NOTES.md` 增加一节，说明：批注解析 `comments.xml` + `commentsExtended.xml`（线程 paraIdParent + done→resolved），作者用 `w:author` 显示名作 `personId`，正文复用 parseParagraph；锚定为 `CustomDecorationType.COMMENT` 的 customDecoration（id=线程 root id）；持久化为 `SHEET_UNIVER_THREAD_COMMENT_PLUGIN` resource（`{ default_doc: roots }`，回复嵌 children）；渲染借力 `@univerjs/docs-thread-comment-ui`，零 engine-render 改动。已知后续：@mention / attachments、people.xml durableId 身份、导出。

- [ ] **Step 2: Commit**

```bash
git add packages/docs-exchange/IMPORT_NOTES.md
git commit -m "docs(docs-exchange): record comments import in IMPORT_NOTES"
```

---

## Self-Review 结果

- **Spec 覆盖：** 第 1 节架构→Task 2/3/4/5；第 2 节数据流（读 part→Task 1，解析+线程→Task 2，范围标记→Task 3，customDecorations→Task 4，resource→Task 5）；第 3 节映射→Task 2/4；第 4 节测试→Task 2/4/6。文档→Task 7。无遗漏。
- **类型一致：** `parseComments` / `ParsedComments` / `ImportedComment` / `commentIdToThreadId` / `commentRanges` / `customDecorations` / `AssembleContext.commentIdToThreadId` 全程一致；resource 名 `'SHEET_UNIVER_THREAD_COMMENT_PLUGIN'`、subUnitId `'default_doc'`、id 派生 `docx-cmt-${wId}` 一致。
- **占位符：** 无 TBD；Task 4 Step 1 / Task 5 Step 1 / Task 6 Step 1 明确要求"先 Read 实际签名/作者值再写"——属必要的事实核对（assembleDocument 的确切签名与 demo 作者值在实现期确认），非占位。
