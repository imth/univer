# DOCX 图片导入：完整定位与文字环绕能力

**日期：** 2026-06-01
**状态：** 已批准设计，待实现

## 背景与问题

`examples/public/demo.docx` 含 1 张内联（`<wp:inline>`，嵌入型）图片。Word 中嵌入型图片应随文字排在文本流里（占一个字符位），但导入后变成了浮动、文字环绕它的样式。

### 根因

图片导入路径 `buildImageDrawing`（[parse-drawing.ts](../../../packages/docs-exchange/src/utils/parse/parse-drawing.ts)）从不设置 `layoutType`，也不采集任何锚定信息（inline/anchor、wrap 模式、位置、behindDoc）。对照之下，shape 路径 `buildShapeDrawing` 会采集 `isInline` 并设置 `layoutType`。

`layoutType === undefined` 在 engine-render 触发三处误判：

1. [shaping.ts:227](../../../packages/engine-render/src/components/docs/layout/block/paragraph/shaping.ts#L227) — 只有 `layoutType === INLINE` 时 `\b` 占位符才取图片真实宽高占字符位；`undefined` 走 else，glyph 建成 0×0，脱离文字流。
2. [line.ts:112](../../../packages/engine-render/src/components/docs/layout/model/line.ts#L112) — `affectSkeDrawings` 过滤 `layoutType !== INLINE`；`undefined !== 0`，被当成浮动图参与行布局。
3. [line.ts:345-350](../../../packages/engine-render/src/components/docs/layout/model/line.ts#L345-L350) — `_calculateSplit` 只在 `WRAP_NONE`/`WRAP_TOP_AND_BOTTOM` 跳过环绕；`undefined` 落入 wrapSquare/tight 分支，文字开始环绕图片（可见 bug）。

### 关键事实

- engine-render 的 [line.ts](../../../packages/engine-render/src/components/docs/layout/model/line.ts) **已实现** `WRAP_SQUARE`/`WRAP_TIGHT`/`WRAP_THROUGH`/`WRAP_POLYGON` 的环绕分割逻辑（`__getSplitWidthNoAngle`、`__getCrossPoint`）。
- [IDocDrawingBase](../../../packages/core/src/types/interfaces/i-document-data.ts#L630-L656) 携带 `layoutType`/`behindDoc`/`start`+`lineTo`/`wrapText`/`distL/R/T/B`。
- [IObjectPositionH](../../../packages/core/src/types/interfaces/i-document-data.ts) 支持 `align`/`posOffset`/`percent`，Word 的 `<wp:align>` 可映射到 `AlignTypeH/V`。
- demo.docx 无 wrapSquare/wrapPolygon 图片（仅 1 内联图 + 29 个 wrapNone 文本框），真实环绕需单独造 fixture 才能 e2e 验证。

## 决策（已确认）

1. **代码结构**：抽取共享的锚定解析函数，image 与 shape 两条路径共用，消除重复。
2. **wrap 映射**：真实映射到对应 `layoutType`（不再统一降级 WRAP_NONE）。
3. **范围**：image 和 shape 都用真实 wrap 映射（shape 现有 wrapNone 文本框仍为 WRAP_NONE，无回归）。
4. **分层**：矩形类 wrap（inline/none/square/tight/through/topAndBottom + dist + 位置/align）为第 1 层（须 e2e 验证）；wrapPolygon 点坐标为第 2 层 best-effort（单测覆盖解析，绝对坐标对齐留 e2e 校准）。

## 设计

### 第 1 节 — 共享定位解析器

新增纯函数 `parseAnchorPositioning(drawingNode) -> PositioningInfo`，置于 `parse-drawing.ts`。

`PositioningInfo`：
- `isInline: boolean`
- `widthPx / heightPx`（`<wp:extent>`）
- `posXPx / posYPx`、`relativeFromH / relativeFromV`、`alignH / alignV`（`<wp:positionH/V>` 的 `posOffset` 或 `align`）
- `wrapMode: 'none' | 'square' | 'tight' | 'through' | 'topAndBottom' | undefined`（inline 为 undefined）
- `wrapText`（wrap 元素 `@wrapText`：bothSides/left/right/largest）
- `distLPx / distTPx / distRPx / distBPx`（`<wp:anchor>` dist* 属性，EMU→px）
- `behindDoc: boolean`
- `polygon?: { start: [number, number]; lineTo: [number, number][] }`（wrapTight/through 内 `<wp:wrapPolygon>`，EMU→px，相对图形左上角）

`parseShape` 现有内联定位解析（parse-drawing.ts:172-211）替换为调用此函数；`ImageDrawingInfo` 扩展携带同样的 `PositioningInfo`。

### 第 2 节 — wrap 模式 → layoutType 映射

共享 `mapWrapToLayoutType()`，两个 builder 都调用。

| OOXML | layoutType | 附带字段 |
|---|---|---|
| `<wp:inline>` | `INLINE` (0) | — |
| `<wp:wrapNone>` | `WRAP_NONE` (1) | `behindDoc` |
| `<wp:wrapSquare>` | `WRAP_SQUARE` (3) | `wrapText`, `distL/R/T/B` |
| `<wp:wrapTight>` | `WRAP_TIGHT` (5) | `wrapText`, `distL/R`, `start`+`lineTo` |
| `<wp:wrapThrough>` | `WRAP_THROUGH` (4) | 同 tight |
| `<wp:wrapTopAndBottom>` | `WRAP_TOP_AND_BOTTOM` (6) | `distT/B` |

`wrapText` 映射到 `WrapTextType`（bothSides→BOTH_SIDES、left→LEFT、right→RIGHT、largest→LARGEST）。

**polygon（第 2 层 best-effort）**：importer 按 EMU→px 输出 `start`/`lineTo`（相对图形左上角）。engine-render 的 [line.ts:352](../../../packages/engine-render/src/components/docs/layout/model/line.ts#L352) 把这些点当绝对布局坐标用；是否需叠加 `aLeft/aTop` 由 skeleton 决定。单测覆盖"解析正确"，绝对坐标对齐留 e2e 校准；若 skeleton 不做偏移，记为渲染侧后续修复（不属本 importer 任务）。

### 第 3 节 — 位置映射（含 align）

`buildImageDrawing` 与 `buildShapeDrawing` 统一用共享 `buildDocTransform(positioning)`：
- `relativeFrom`：复用 `REL_FROM_H_MAP / REL_FROM_V_MAP`。
- 优先用 `posOffset`；若 OOXML 用 `<wp:align>`，映射到 `AlignTypeH/V`（left→LEFT、center→CENTER、right→RIGHT、inside→INSIDE、outside→OUTSIDE）写入 `positionH.align`。
- `transform.left/top` 用 `posXPx/posYPx`（inline 为 0）。
- 内联图：`layoutType: INLINE`，位置字段被 glyph 槽忽略——单独修好 demo.docx。

### 第 4 节 — 测试策略

1. **单元测试**（[parse-drawing.test.ts](../../../packages/docs-exchange/src/__tests__/parse-drawing.test.ts)，合成 OOXML 字符串）：
   - inline picture → `layoutType === INLINE`（先红后绿，对应当前 bug）。
   - wrapNone/square/tight/through/topAndBottom 各一例 → 正确 `layoutType` + dist + wrapText + behindDoc。
   - align（center/inside）→ `positionH.align`。
   - wrapPolygon → `start`/`lineTo` 解析正确。
   - shape 回归：wrapNone 文本框仍 `WRAP_NONE`。
2. **新 fixture**：脚本生成含 wrapSquare/wrapTight 图片的小 docx（仿 `scripts/preset-fixture` 做法），断言导入后 `layoutType`/dist。
3. **e2e**（docx-import-e2e-verification 技能）：demo.docx 截图确认内联图回到文字流；新 fixture 截图确认文字真正环绕图片。

## 验收标准

- demo.docx 内联图导入后 `layoutType === INLINE`，渲染时随文字排在文本流内、不再被文字环绕。
- 合成 OOXML 单测覆盖全部 6 种 wrap 映射 + align + polygon 解析，全绿。
- shape 路径无回归（wrapNone 文本框仍 WRAP_NONE）。
- 新 fixture e2e 截图显示 wrapSquare/wrapTight 图片被文字环绕。

## 范围外（后续）

- wrapPolygon 绝对坐标在 skeleton 侧的偏移修复（若 e2e 发现缺失）。
- 图片裁剪（`<a:srcRect>`）、`<a:xfrm rot>` 用于图片、gradFill/shadow。
- 更新 `packages/docs-exchange/IMPORT_NOTES.md`：将图片/shape 的 wrap 从"未实现/降级 WRAP_NONE"更正为"真实映射"。
