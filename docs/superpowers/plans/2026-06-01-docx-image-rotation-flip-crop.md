# DOCX 图片旋转 / 翻转 / 裁剪导入 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 让 DOCX 图片导入解析并发出 `<pic:spPr><a:xfrm rot/flipH/flipV>` 旋转/翻转和 `<a:srcRect>` 裁剪，使图片在 Univer 中以正确的角度、翻转和裁剪渲染。

**Architecture:** 纯 importer 改动（`@univerjs/docs-exchange`）。在 `parse-drawing.ts` 的 image 分支解析 `<pic:pic>` 的 `<a:xfrm>`（rot/flip）和 `<a:srcRect>`（千分比裁剪），`buildImageDrawing` 把旋转角传给 `applyPositioning`、把 `flipX/flipY` 和换算后的 `srcRect` 挂到 drawing 上。渲染端（`renderImages`）已支持 `transform.angle/flipX/flipY` 与 `srcRect`，零改动。

**Tech Stack:** TypeScript、Vitest、项目内 `xml.ts` 解析封装、Python stdlib zipfile（fixture）。

**测试命令（统一）：**
```bash
npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts
```

**关键换算常量：** OOXML `rot` 为 60000ths-度；`<a:srcRect>` 的 `l/t/r/b` 为千分之一百分比（100000 = 100%）。EMU_PER_PX = 9525。

---

## File Structure

- Modify: `packages/docs-exchange/src/utils/types.ts` — `IDrawingTransform` 加 `flipX/flipY`；`ISimpleDrawing` 加 `srcRect`。
- Modify: `packages/docs-exchange/src/utils/parse/parse-drawing.ts` — `ImageDrawingInfo` 扩展；新增 `parsePicTransform`、`parsePicSrcRect`、`convertSrcRect`；image 分支接入；`buildImageDrawing` 发射 angle/flip/srcRect。
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts` — 单测。
- Create: `scripts/image-xfrm-fixture/generate-image-xfrm-fixture.py` — 生成含旋转图 + 裁剪图的 docx。
- Create: `packages/docs-exchange/src/__tests__/fixtures/image-xfrm-fixture.docx` — 由脚本生成。
- Create: `packages/docs-exchange/src/__tests__/image-xfrm-fixture.test.ts` — fixture 导入断言。

---

## Task 1: 扩展类型 — IDrawingTransform 加 flip，ISimpleDrawing 加 srcRect

**Files:**
- Modify: `packages/docs-exchange/src/utils/types.ts`

- [ ] **Step 1: 给 `IDrawingTransform` 加 flip 字段**

把现有 `IDrawingTransform` 接口里 `angle?: number;` 之后追加两行：

```ts
    /** OOXML <a:xfrm flipH>. Horizontal mirror. */
    flipX?: boolean;
    /** OOXML <a:xfrm flipV>. Vertical mirror. */
    flipY?: boolean;
```

- [ ] **Step 2: 给 `ISimpleDrawing` 加 srcRect 字段**

在 `ISimpleDrawing` 接口末尾（`lineTo?` 之后）追加：

```ts
    /** OOXML <a:srcRect> image crop, converted to Univer ISrcRect display px
     * (amount cropped off each edge). */
    srcRect?: { left?: number; top?: number; right?: number; bottom?: number };
```

- [ ] **Step 3: 运行现有测试确认无回归（仅类型变更）**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts`
Expected: PASS（所有现有测试仍绿）

- [ ] **Step 4: Commit**

```bash
git add packages/docs-exchange/src/utils/types.ts
git commit -m "feat(docs-exchange): add flipX/flipY and srcRect to drawing types"
```

---

## Task 2: 图片旋转 + 翻转 — 解析 `<pic:spPr><a:xfrm rot/flipH/flipV>`

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/parse-drawing.ts`
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts`

- [ ] **Step 1: 写失败测试 — 旋转 + 翻转**

在 `parse-drawing.test.ts` 的 `describe('buildDrawing', ...)` 内追加：

```ts
    it('image <a:xfrm rot/flipH/flipV> → angle + flipX/flipY', () => {
        const rels = new Map([['rId8', { type: 'image' as const, target: 'media/i.png' }]]);
        const media = new Map([['word/media/i.png', new Uint8Array([0x89, 0x50])]]);
        const xml = `<w:drawing xmlns:w="x" xmlns:wp="y" xmlns:a="z" xmlns:r="r" xmlns:pic="p">
          <wp:inline>
            <wp:extent cx="952500" cy="952500"/>
            <a:graphic><a:graphicData><pic:pic>
              <pic:blipFill><a:blip r:embed="rId8"/></pic:blipFill>
              <pic:spPr><a:xfrm rot="2700000" flipH="1" flipV="1"><a:off x="0" y="0"/><a:ext cx="952500" cy="952500"/></a:xfrm></pic:spPr>
            </pic:pic></a:graphicData></a:graphic>
          </wp:inline>
        </w:drawing>`;
        const d = buildDrawing('img-xfrm', parseDrawingFromRunXml(xml)!, rels, media);
        expect(d?.transform?.angle).toBeCloseTo(45, 5); // 2700000/60000
        expect(d?.docTransform?.angle).toBeCloseTo(45, 5);
        expect(d?.transform?.flipX).toBe(true);
        expect(d?.transform?.flipY).toBe(true);
    });
```

- [ ] **Step 2: 运行确认失败**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts -t "rot/flipH/flipV"`
Expected: FAIL（`angle` 当前为 0，`flipX` 为 undefined）

- [ ] **Step 3: 新增 `parsePicTransform` 辅助函数**

在 `parse-drawing.ts` 中 `parseWrapPolygon` 函数附近（同类纯解析辅助处）新增：

```ts
function parsePicTransform(node: XmlNode): { rotationDegrees?: number; flipH?: boolean; flipV?: boolean } {
    const out: { rotationDegrees?: number; flipH?: boolean; flipV?: boolean } = {};
    // Images carry their transform in <pic:spPr><a:xfrm>; there is no wps shape
    // on the image path, so the first a:xfrm under the drawing is the picture's.
    const xfrm = findFirstByName(node, 'a:xfrm');
    if (!xfrm) return out;
    const a = nodeAttrs(xfrm);
    const rotAttr = a['@_rot'] as string | undefined;
    const rotRaw = rotAttr !== undefined ? Number(rotAttr) : 0;
    if (!Number.isNaN(rotRaw) && rotRaw !== 0) {
        // OOXML rot is 60000ths of a degree, range [0, 21600000).
        out.rotationDegrees = (rotRaw / 60000) % 360;
    }
    if (a['@_flipH'] === '1') out.flipH = true;
    if (a['@_flipV'] === '1') out.flipV = true;
    return out;
}
```

- [ ] **Step 4: 扩展 `ImageDrawingInfo` 并在 image 分支接入**

把 `ImageDrawingInfo` 接口替换为：

```ts
export interface ImageDrawingInfo {
    kind: 'image';
    rId: string;
    positioning: PositioningInfo;
    rotationDegrees?: number;
    flipH?: boolean;
    flipV?: boolean;
    /** Raw OOXML <a:srcRect> in 1/100000 (per-mille-percent); converted at build. */
    srcRectPermille?: { l: number; t: number; r: number; b: number };
}
```

在 image 分支里，把：

```ts
            const out: ImageDrawingInfo = { kind: 'image', rId, positioning };
            return out;
```

替换为：

```ts
            const out: ImageDrawingInfo = { kind: 'image', rId, positioning, ...parsePicTransform(node) };
            return out;
```

- [ ] **Step 5: `buildImageDrawing` 发射 angle + flip**

把 `buildImageDrawing` 末尾的：

```ts
    applyPositioning(drawing, info.positioning, width, height, 0);
    return drawing;
```

替换为：

```ts
    applyPositioning(drawing, info.positioning, width, height, info.rotationDegrees ?? 0);
    if (drawing.transform) {
        if (info.flipH) drawing.transform.flipX = true;
        if (info.flipV) drawing.transform.flipY = true;
    }
    return drawing;
```

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts`
Expected: PASS（含新旋转/翻转测试；既有图片测试仍绿，因为无 a:xfrm 时 `parsePicTransform` 返回空对象、angle 仍为 0）

- [ ] **Step 7: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/parse-drawing.ts packages/docs-exchange/src/__tests__/parse-drawing.test.ts
git commit -m "feat(docs-exchange): import image rotation & flip (<pic> a:xfrm rot/flipH/flipV)"
```

---

## Task 3: 图片裁剪 — 解析并换算 `<a:srcRect>`

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/parse-drawing.ts`
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts`

- [ ] **Step 1: 写失败测试 — 正常裁剪 + 退化/负值/空**

在 `parse-drawing.test.ts` 的 `describe('buildDrawing', ...)` 内追加：

```ts
    describe('image srcRect crop', () => {
        const rels = new Map([['rIdC', { type: 'image' as const, target: 'media/i.png' }]]);
        const media = new Map([['word/media/i.png', new Uint8Array([0x89, 0x50])]]);
        const build = (srcRectXml: string) => {
            const xml = `<w:drawing xmlns:w="x" xmlns:wp="y" xmlns:a="z" xmlns:r="r" xmlns:pic="p">
              <wp:inline>
                <wp:extent cx="952500" cy="952500"/>
                <a:graphic><a:graphicData><pic:pic>
                  <pic:blipFill><a:blip r:embed="rIdC"/>${srcRectXml}</pic:blipFill>
                  <pic:spPr/>
                </pic:pic></a:graphicData></a:graphic>
              </wp:inline>
            </w:drawing>`;
            return buildDrawing('img-c', parseDrawingFromRunXml(xml)!, rels, media);
        };

        it('converts l/r 25% to display px (extent 100px)', () => {
            // l_f=r_f=0.25, denom=0.5, W_vis=100 → 100*0.25/0.5 = 50
            const d = build('<a:srcRect l="25000" r="25000"/>');
            expect(d?.srcRect?.left).toBeCloseTo(50, 0);
            expect(d?.srcRect?.right).toBeCloseTo(50, 0);
            expect(d?.srcRect?.top).toBeUndefined();
            expect(d?.srcRect?.bottom).toBeUndefined();
        });

        it('skips degenerate srcRect (l+r >= 100%)', () => {
            const d = build('<a:srcRect l="60000" r="60000"/>');
            expect(d?.srcRect).toBeUndefined();
        });

        it('skips srcRect with negative edge', () => {
            const d = build('<a:srcRect l="-10000"/>');
            expect(d?.srcRect).toBeUndefined();
        });

        it('emits no srcRect when absent or all-zero', () => {
            expect(build('')?.srcRect).toBeUndefined();
            expect(build('<a:srcRect/>')?.srcRect).toBeUndefined();
        });
    });
```

- [ ] **Step 2: 运行确认失败**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts -t "image srcRect crop"`
Expected: FAIL（`srcRect` 当前始终 undefined，首个用例断言 50 失败）

- [ ] **Step 3: 新增 `parsePicSrcRect` 与 `convertSrcRect` 辅助**

在 `parse-drawing.ts` 中 `parsePicTransform` 附近新增：

```ts
function parsePicSrcRect(node: XmlNode): { l: number; t: number; r: number; b: number } | undefined {
    const sr = findFirstByName(node, 'a:srcRect');
    if (!sr) return undefined;
    const a = nodeAttrs(sr);
    const num = (v: unknown): number => {
        const n = Number(v);
        return Number.isNaN(n) ? 0 : n;
    };
    return { l: num(a['@_l']), t: num(a['@_t']), r: num(a['@_r']), b: num(a['@_b']) };
}

// OOXML <a:srcRect> gives the per-edge crop as a fraction of the *source*
// (1/100000 units). Univer's ISrcRect is the cropped-off amount in *display*
// px: the source fills (Wvis + left + right) x (Hvis + top + bottom), clipped
// to the visible Wvis x Hvis. So left_px = Wvis * lf / (1 - lf - rf), etc.
function convertSrcRect(
    p: { l: number; t: number; r: number; b: number },
    wVis: number,
    hVis: number
): { left?: number; top?: number; right?: number; bottom?: number } | undefined {
    const lf = p.l / 100000;
    const rf = p.r / 100000;
    const tf = p.t / 100000;
    const bf = p.b / 100000;
    // OOXML allows negative (outset) values; v1 supports positive crops only.
    if (lf < 0 || rf < 0 || tf < 0 || bf < 0) return undefined;
    const hDenom = 1 - lf - rf;
    const vDenom = 1 - tf - bf;
    if (hDenom <= 0 || vDenom <= 0) return undefined; // fully cropped away
    const out: { left?: number; top?: number; right?: number; bottom?: number } = {};
    const left = (wVis * lf) / hDenom;
    const right = (wVis * rf) / hDenom;
    const top = (hVis * tf) / vDenom;
    const bottom = (hVis * bf) / vDenom;
    if (left > 0) out.left = left;
    if (right > 0) out.right = right;
    if (top > 0) out.top = top;
    if (bottom > 0) out.bottom = bottom;
    return Object.keys(out).length > 0 ? out : undefined;
}
```

- [ ] **Step 4: image 分支采集 srcRectPermille**

在 image 分支里，把：

```ts
            const out: ImageDrawingInfo = { kind: 'image', rId, positioning, ...parsePicTransform(node) };
            return out;
```

替换为：

```ts
            const out: ImageDrawingInfo = { kind: 'image', rId, positioning, ...parsePicTransform(node) };
            const srcRectPermille = parsePicSrcRect(node);
            if (srcRectPermille) out.srcRectPermille = srcRectPermille;
            return out;
```

- [ ] **Step 5: `buildImageDrawing` 发射 srcRect**

把 `buildImageDrawing` 中 Task 2 加好的 flip 块之后、`return drawing;` 之前插入：

```ts
    if (info.srcRectPermille) {
        const srcRect = convertSrcRect(info.srcRectPermille, width, height);
        if (srcRect) drawing.srcRect = srcRect;
    }
```

（即 `buildImageDrawing` 末尾顺序为：applyPositioning → flip → srcRect → return drawing。）

- [ ] **Step 6: 运行测试确认通过**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts`
Expected: PASS（含全部 srcRect 用例；既有测试无回归）

- [ ] **Step 7: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/parse-drawing.ts packages/docs-exchange/src/__tests__/parse-drawing.test.ts
git commit -m "feat(docs-exchange): import image crop (<a:srcRect> → ISrcRect px)"
```

---

## Task 4: fixture + e2e 验证

**Files:**
- Create: `scripts/image-xfrm-fixture/generate-image-xfrm-fixture.py`
- Create: `packages/docs-exchange/src/__tests__/fixtures/image-xfrm-fixture.docx`
- Create: `packages/docs-exchange/src/__tests__/image-xfrm-fixture.test.ts`

- [ ] **Step 1: 写 fixture 生成脚本**

创建 `scripts/image-xfrm-fixture/generate-image-xfrm-fixture.py`：

```python
"""Generate a tiny DOCX with a rotated image and a cropped image.

Run: python3 scripts/image-xfrm-fixture/generate-image-xfrm-fixture.py
Produces packages/docs-exchange/src/__tests__/fixtures/image-xfrm-fixture.docx

Paragraph 1: a 1-inch inline image rotated 45deg (rot=2700000) + flipH.
Paragraph 2: a 1-inch inline image cropped 25% off left & right (srcRect
l=r=25000). Authored with the Python stdlib (zipfile + raw OOXML).
"""
import os
import zipfile

HERE = os.path.dirname(__file__)
OUT = os.path.normpath(os.path.join(
    HERE, '..', '..', 'packages', 'docs-exchange', 'src', '__tests__',
    'fixtures', 'image-xfrm-fixture.docx'))

# Known-good 1x1 PNG (proven valid in the wrap fixture). The unit assertions
# (angle / srcRect numbers) don't depend on pixel content; for a richer e2e
# screenshot the implementer may swap in any real PNG here.
PNG = bytes.fromhex(
    '89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4'
    '890000000d49444154789c6360000002000154a24f5e0000000049454e44ae426082')

CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>'''

ROOT_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''

DOC_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId10" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image1.png"/>
</Relationships>'''


def inline_image(doc_pr_id, xfrm_attrs, srcrect_xml):
    return f'''<w:r><w:drawing>
      <wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing">
        <wp:extent cx="914400" cy="914400"/>
        <wp:docPr id="{doc_pr_id}" name="Picture {doc_pr_id}"/>
        <a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
          <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
            <pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
              <pic:nvPicPr><pic:cNvPr id="{doc_pr_id}" name="Picture {doc_pr_id}"/><pic:cNvPicPr/></pic:nvPicPr>
              <pic:blipFill>
                <a:blip r:embed="rId10" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>
                {srcrect_xml}
                <a:stretch><a:fillRect/></a:stretch>
              </pic:blipFill>
              <pic:spPr>
                <a:xfrm {xfrm_attrs}><a:off x="0" y="0"/><a:ext cx="914400" cy="914400"/></a:xfrm>
                <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
              </pic:spPr>
            </pic:pic>
          </a:graphicData>
        </a:graphic>
      </wp:inline>
    </w:drawing></w:r>'''


def main():
    img1 = inline_image(1, 'rot="2700000" flipH="1"', '')
    img2 = inline_image(2, '', '<a:srcRect l="25000" r="25000"/>')
    p1 = '<w:p>' + img1 + '</w:p>'
    p2 = '<w:p>' + img2 + '</w:p>'
    document = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        f'<w:body>{p1}{p2}'
        '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>'
        '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>'
        '</w:sectPr></w:body></w:document>'
    )
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', CONTENT_TYPES)
        z.writestr('_rels/.rels', ROOT_RELS)
        z.writestr('word/document.xml', document)
        z.writestr('word/_rels/document.xml.rels', DOC_RELS)
        z.writestr('word/media/image1.png', PNG)
    print('wrote', OUT)


if __name__ == '__main__':
    main()
```

- [ ] **Step 2: 生成 fixture**

Run: `python3 scripts/image-xfrm-fixture/generate-image-xfrm-fixture.py`
Expected: 打印 `wrote .../image-xfrm-fixture.docx`，文件存在。需 Python 3。

- [ ] **Step 3: 写 fixture 导入断言测试**

创建 `packages/docs-exchange/src/__tests__/image-xfrm-fixture.test.ts`（沿用 `multi-section.test.ts` 的加载模式）：

```ts
/**
 * Copyright 2023-present DreamNum Co., Ltd.
 * Licensed under the Apache License, Version 2.0.
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
```

注意：以 `docx-to-univer.ts` 实际导出 `docxToUniverData(input: DocxInput)` 为准（`DocxInput` 接受 `Buffer`）。

- [ ] **Step 4: 运行 fixture 测试**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/image-xfrm-fixture.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add scripts/image-xfrm-fixture/generate-image-xfrm-fixture.py packages/docs-exchange/src/__tests__/fixtures/image-xfrm-fixture.docx packages/docs-exchange/src/__tests__/image-xfrm-fixture.test.ts
git commit -m "test(docs-exchange): image rotation/flip/crop fixture + assertions"
```

- [ ] **Step 6: 浏览器 e2e（docx-import-e2e-verification 技能）**

1. 把 fixture 复制到 `examples/public/`（ASCII 名，如 `img-xfrm.docx`）。
2. 用 `docs-exchange.operation.docx-import` 导入，截图确认第一张图旋转 45° 且水平镜像、第二张图左右各裁掉 1/4（红蓝半图变化可见）。
3. 检查 console 无报错。
4. 清理：删除 `examples/public/img-xfrm.docx` 与截图，不提交。

---

## Task 5: 全量回归 + IMPORT_NOTES 更新

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/parse-drawing.ts`（注释）
- Modify: `packages/docs-exchange/IMPORT_NOTES.md`

- [ ] **Step 1: 全量测试 + 类型检查**

Run: `npx vitest run --root packages/docs-exchange`
Expected: PASS（全部）
Run: `npx tsc --noEmit -p packages/docs-exchange/tsconfig.json`
Expected: 无错误

- [ ] **Step 2: 收窄顶部 TODO 注释**

`parse-drawing.ts` 顶部 TODO 注释当前含 `a:xfrm rot for images, image cropping (a:srcRect)`。把这两项移除（已实现），保留其余未支持项：

```ts
// TODO(unsupported): VML fallback (mc:Fallback path), custGeom, gradFill,
// shadows. wrapPolygon points are parsed onto start/lineTo but only consumed
// by engine-render for layoutType WRAP_POLYGON; promoting tight/through to
// WRAP_POLYGON + the absolute-coordinate offset is a layer-2 follow-up.
```

（若当前注释文本与此不完全一致，按现有文本删除 `a:xfrm rot for images` 和 `image cropping (a:srcRect)` 两处即可，保留其余。）

- [ ] **Step 3: 更新 IMPORT_NOTES.md**

在 `packages/docs-exchange/IMPORT_NOTES.md` 的图片/drawing 小节，新增一条说明：图片导入现在解析 `<pic:spPr><a:xfrm rot/flipH/flipV>` → `transform.angle/flipX/flipY`，和 `<a:srcRect>`（千分比裁剪）→ `srcRect`（显示 px，`Wvis*lf/(1-lf-rf)` 换算）；渲染端 `renderImages` 原生支持，零改动。已知后续：srcRect 负值（外扩）未支持。

- [ ] **Step 4: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/parse-drawing.ts packages/docs-exchange/IMPORT_NOTES.md
git commit -m "docs(docs-exchange): record image rotation/flip/crop import in IMPORT_NOTES"
```

---

## Self-Review 结果

- **Spec 覆盖：** 第 1 节解析（rot/flip→Task 2，srcRect→Task 3）；第 2 节换算→Task 3 `convertSrcRect`；第 3 节发射→Task 2/3 `buildImageDrawing`；第 4 节测试→Task 2/3/4。类型→Task 1。文档→Task 5。无遗漏。
- **类型一致：** `parsePicTransform`/`parsePicSrcRect`/`convertSrcRect`、`ImageDrawingInfo.rotationDegrees/flipH/flipV/srcRectPermille`、`IDrawingTransform.flipX/flipY`、`ISimpleDrawing.srcRect` 全程命名一致。`buildImageDrawing` 末尾顺序 applyPositioning→flip→srcRect→return 在 Task 2/3 中一致。
- **占位符：** 无 TBD/TODO；Task 4 Step 2 对 PNG 字节的兜底说明是必要的健壮性提示，非占位。
