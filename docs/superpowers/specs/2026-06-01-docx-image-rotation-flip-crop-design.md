# DOCX 图片旋转 / 翻转 / 裁剪导入

**日期：** 2026-06-01
**状态：** 已批准设计，待实现

## 背景

前一轮（PR #26）补齐了 DOCX 图片的定位与文字环绕。图片导入仍缺三项 `<pic:pic>` 变换：旋转（`<a:xfrm rot>`）、翻转（`flipH`/`flipV`）、裁剪（`<a:srcRect>`）。`buildImageDrawing` 当前给 `applyPositioning` 写死 `angle=0`，且完全不解析翻转/裁剪。

### 关键事实（可行性确认）

- 渲染端 `renderImages`（[drawing-render.service.ts:184](../../../packages/drawing-ui/src/services/drawing-render.service.ts#L184)）创建图片时 `{ ...transform }` 已带 `angle`/`flipX`/`flipY`（[:222](../../../packages/drawing-ui/src/services/drawing-render.service.ts#L222),[:234](../../../packages/drawing-ui/src/services/drawing-render.service.ts#L234)），并 `if (srcRect != null) image.setSrcRect(srcRect)`（[:291](../../../packages/drawing-ui/src/services/drawing-render.service.ts#L291)）。
- `Image` shape 的 `calculateTransformWithSrcRect()`（[engine-render/src/shape/image.ts](../../../packages/engine-render/src/shape/image.ts#L236)）已实现裁剪绘制。
- `IImageData`（[drawing/src/models/image-model-interface.ts](../../../packages/drawing/src/models/image-model-interface.ts)）携带 `srcRect`；`ITransformState` 携带 `angle`/`flipX`/`flipY`。
- 已合并的 preset 几何（#24）证明：给 docs 图片 drawing 加 image-extra 字段（`prstGeom`/`adjustValues`）即可透传渲染。

**结论：渲染端零改动**，本轮只需 importer 解析并发出 `angle` / `flipX/flipY` / `srcRect`。范围限定 `@univerjs/docs-exchange`（+ fixture 脚本）。

## 决策（已确认）

1. 本轮同时做 **旋转 + 翻转 + 裁剪**。
2. srcRect 负值 / 退化（裁没了）→ **跳过**该 srcRect（不裁），记 TODO。
3. e2e fixture 纳入本轮（造一个含旋转+裁剪图片的 docx，浏览器验证）。

## 设计

### 第 1 节 — 解析（image 分支）

`parseDrawingFromXmlNode` 的 image 分支扩展，读 `<pic:pic>` 下两处：

- `<pic:spPr><a:xfrm rot flipH flipV>`：
  - `rot`：60000ths→度，`(rot/60000)%360`（复用 shape 现有逻辑）
  - `flipH="1"`→`flipH:true`，`flipV="1"`→`flipV:true`
- `<pic:blipFill><a:srcRect l t r b>`：四属性为千分之一百分比（100000=100%），表示每边从源图裁掉的比例。

`ImageDrawingInfo` 增补字段：`rotationDegrees?: number`、`flipH?: boolean`、`flipV?: boolean`、`srcRectPermille?: { l: number; t: number; r: number; b: number }`（保留原始千分比，换算延到 build 阶段，因为需要可见 extent）。

### 第 2 节 — srcRect 换算

Univer `ISrcRect = { left?, top?, right?, bottom? }` 为**显示像素**：源图画进 `(W_vis+left+right) × (H_vis+top+bottom)` 放大框，裁到可见 `W_vis × H_vis`。OOXML 给的是源图裁掉的**比例**。换算（水平，`l_f=l/100000`、`r_f=r/100000`）：

```
denom = 1 - l_f - r_f
left_px  = W_vis * l_f / denom
right_px = W_vis * r_f / denom
```

竖直同理用 `H_vis` 与 `t_f`/`b_f`。`W_vis`/`H_vis` 取 `widthPx`/`heightPx`。

- 退化：`denom <= 0` → 跳过整个 srcRect。
- 负值：任一 `l/t/r/b < 0` → 跳过该 srcRect（OOXML 外扩语义罕见，v1 不支持）。
- 全 0 或无 `<a:srcRect>` → 不发 `srcRect`。
- 结果只保留非 0 的边（`left/top/right/bottom` 各自 `> 0` 才写）。

### 第 3 节 — 发射（buildImageDrawing）

- `ISimpleDrawing`（[docs-exchange/src/utils/types.ts](../../../packages/docs-exchange/src/utils/types.ts)）增加 `srcRect?: { left?: number; top?: number; right?: number; bottom?: number }`，`IDrawingTransform` 增加 `flipX?: boolean`、`flipY?: boolean`。
- 旋转：`applyPositioning(drawing, positioning, w, h, angle)` 的 `angle` 实参从写死 `0` 改为 `info.rotationDegrees ?? 0`。
- 翻转：把 `flipX/flipY` 写到 `drawing.transform`（`renderImages` 从 transform 解构）。在 `applyPositioning` 之后补设，或扩展其签名；实现期决定（倾向 build 端补设，避免污染 shape 路径）。
- 裁剪：算出的 `srcRect` 挂到 drawing 上。

### 第 4 节 — 测试

1. **单测**（[parse-drawing.test.ts](../../../packages/docs-exchange/src/__tests__/parse-drawing.test.ts)）：
   - `<pic:spPr><a:xfrm rot="2700000">` → `transform.angle===45`、`docTransform.angle===45`
   - `flipH="1" flipV="1"` → `transform.flipX===true`、`transform.flipY===true`
   - `<a:srcRect l="25000" r="25000"/>` + extent 100px → `srcRect.left≈50`、`srcRect.right≈50`（`100*0.25/0.5`）
   - 退化 `l="60000" r="60000"` → 不发 `srcRect`
   - 负值 `l="-10000"` → 不发 `srcRect`
   - 无 / 全 0 → `srcRect` undefined
2. **fixture + e2e**：脚本（stdlib zipfile，仿 wrap-fixture）生成含一张旋转图 + 一张裁剪图的 docx；单测断言导入后 `angle`/`srcRect`；浏览器导入截图确认图片旋转且被裁。

## 验收标准

- 含 `rot`/`flipH`/`flipV`/`srcRect` 的图片导入后，drawing 上携带正确的 `transform.angle`/`flipX`/`flipY`/`srcRect`。
- 退化/负值 srcRect 安全跳过，不发非法值。
- 渲染端零改动；浏览器 e2e 截图显示图片旋转 + 裁剪生效。
- 既有图片/shape 测试无回归。

## 范围外（后续）

- srcRect 负值（外扩/留白）语义。
- 图片 `<a:duotone>`/`<a:alphaModFix>` 等 blip 效果、gradFill、阴影。
