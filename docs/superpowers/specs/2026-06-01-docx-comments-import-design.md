# DOCX 批注 Comments 导入

**日期：** 2026-06-01
**状态：** 已批准设计，待实现

## 背景

DOCX importer 目前完全不处理批注（`word/comments.xml` / `commentsExtended.xml` / `people.xml` 都被忽略）。Univer 已有完整的 thread-comment 基础设施（`@univerjs/thread-comment` + `@univerjs/docs-thread-comment-ui`），所以这是"importer 为主、借力现成渲染"的任务，**不动 engine-render**。

### 关键事实（接入点已确认）

- 批注锚定用 `IDocumentBody.customDecorations`（[i-document-data.ts](../../../packages/core/src/types/interfaces/i-document-data.ts)）：`ICustomDecoration = { startIndex, endIndex, id, type }`，`CustomDecorationType.COMMENT = 0`，`id = 线程 root id`。
- 批注数据持久化为 plugin resource：名称 `SHEET_UNIVER_THREAD_COMMENT_PLUGIN`（[tc-resource.controller.ts](../../../packages/thread-comment/src/controllers/tc-resource.controller.ts)，同时注册给 `UNIVER_DOC`），`onLoad` 收 `{ [subUnitId]: IThreadComment[] }`，每条经 `ThreadCommentModel.addComment` 加载。
- docs 批注 subUnitId = `DEFAULT_DOC_SUBUNIT_ID = 'default_doc'`（[docs-thread-comment-ui/src/common/const.ts](../../../packages/docs-thread-comment-ui/src/common/const.ts)）。
- resource data 形状 = `JSON.stringify({ default_doc: [ { ...root, children: [replies] } ] })`。
- `IThreadComment`（[i-thread-comment.ts](../../../packages/thread-comment/src/types/interfaces/i-thread-comment.ts)）：`{ id, threadId, dT, personId, text: IDocumentBody, parentId?, resolved?, unitId, subUnitId, children? }`。`ThreadCommentModel.addComment`：无 parentId 的为 root（`threadId = id`），有 children 时随 root 一起加载。
- **先例**：`docx-to-univer.ts` 已用 `docData.resources.push({ name, data: JSON.stringify(...) })` 发 watermark resource——批注照此模式，并内联资源名字符串以免引入 `@univerjs/thread-comment` 依赖。

## 决策（已确认）

1. **完整线程**：解析 `commentsExtended.xml` 的 `paraIdParent` 组装回复嵌套（`root.children`），`done="1"` → `resolved`。
2. **作者**：用 `w:author` 显示名作 `personId`（不引入真实用户体系）；`people.xml` 仅兜底。
3. **批注正文**：复用 `parseParagraph` 得富文本 `IDocumentBody`。
4. **e2e**：纳入本轮，确认 demo univer 实例已注册 docs-thread-comment-ui、批注面板可见。

## 设计

### 第 1 节 — 架构

纯 importer（`@univerjs/docs-exchange`），不动 engine-render：

- 新增 `packages/docs-exchange/src/utils/parse/parse-comments.ts`：解析三个 part，产出带线程的 `IThreadComment[]`（root + children）+ `commentId → threadId` 映射。
- `parse-run.ts` / `assemble.ts`：识别 document.xml 的 `<w:commentRangeStart/End w:id>`，在被批注文本范围上发 `customDecorations`（`type: COMMENT, id: threadId`）。
- `docx-to-univer.ts`：发 thread-comment resource。

### 第 2 节 — 数据流

1. `comments.xml` → `Map<commentId, { author, date, bodyParagraphs, paraIds }>`；正文复用 `parseParagraph`。
2. `commentsExtended.xml` → `Map<paraId, { paraIdParent, done }>`；用每条 comment 末段 `w14:paraId` 建 `paraId → commentId`，推出 `commentId → { parentCommentId, resolved }`。
3. `people.xml` → 作者显示名兜底（`w:author` 优先）。
4. 组装 `IThreadComment` 树：无 parent 的为 root（`threadId = id`、`resolved`），回复挂 `root.children`（`parentId = root.id`、`threadId = root.id`）。
5. document.xml 解析：维护"打开批注范围"映射，`commentRangeStart id → startIndex`、`commentRangeEnd id → endIndex` → 发 `customDecoration { startIndex, endIndex, id: 该 comment 的 threadId, type: COMMENT }`。同一线程多 range 去重。
6. `docx-to-univer.ts`：`docData.resources.push({ name: 'SHEET_UNIVER_THREAD_COMMENT_PLUGIN', data: JSON.stringify({ default_doc: rootComments }) })`。

### 第 3 节 — 关键映射

| OOXML | Univer `IThreadComment` |
|---|---|
| `w:comment w:id="N"` | `id = 'docx-cmt-N'`（稳定派生），root → `threadId = id` |
| `w:author` | `personId`（显示名） |
| `w:date` | `dT` |
| 批注段落 | `text: IDocumentBody`（parseParagraph） |
| `commentsEx done="1"` | `resolved: true` |
| `paraIdParent` → 父 comment | 回复 `parentId = 父 id`，嵌入 root `children` |
| 运行时 | `unitId`（导入时），`subUnitId = 'default_doc'` |

`customDecoration.id` = 线程 root id；reply 的 range（若有）解析到同一 root id。

### 第 4 节 — 测试

1. **单元测试**（`parse-comments.test.ts`，合成 XML）：
   - 单条批注 → 1 个 root（id/personId/dT/text）。
   - root + 1 回复（paraIdParent）→ `root.children` 含回复、threadId 一致、`parentId = root.id`。
   - `done="1"` → `resolved: true`。
   - `commentRangeStart/End` → customDecoration（start/end/id=threadId/type=COMMENT）。
   - 范围跨多段、嵌套范围的索引正确。
2. **fixture e2e（单测层）**：用 demo.docx 走完整 `docxToUniverData`，断言 `resources` 含 `SHEET_UNIVER_THREAD_COMMENT_PLUGIN` 项、`body.customDecorations` 有 COMMENT 项、解析出的线程数与回复结构正确。
3. **浏览器 e2e**（docx-import-e2e-verification 技能）：导入 demo.docx，确认批注出现在 thread-comment 面板、锚定文本高亮、回复线程 + resolved 状态正确、0 报错。

## 验收标准

- 导入后 `docData.resources` 含 thread-comment 项，数据为 `{ default_doc: rootComments[] }`，回复嵌套在 `children`，`resolved` 反映 done。
- 被批注文本带 `CustomDecorationType.COMMENT` 的 customDecoration，`id` 对齐线程 root id。
- 浏览器中批注面板显示全部线程、文本高亮、resolved 状态正确。
- 既有 docs-exchange 测试无回归。

## 范围外（后续）

- 批注内的 @mention（`mentions`）、附件（`attachments`）。
- people.xml 的 `durableId`/provider 身份映射（仅用显示名）。
- 导出（Univer → DOCX comments）—— 本轮只做导入。
