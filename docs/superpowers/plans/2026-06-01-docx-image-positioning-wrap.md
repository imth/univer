# DOCX 图片定位与文字环绕导入 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 让 DOCX 图片导入采集完整的锚定/环绕信息并设置正确的 `layoutType`，修复内联图被误当成浮动环绕图的 bug，并让 image 与 shape 共用一套真实 wrap 映射。

**Architecture:** 在 `parse-drawing.ts` 抽取共享的 `parseAnchorPositioning()`（解析 inline/anchor、extent、position+align、wrap 模式、dist、behindDoc、wrapPolygon），image 与 shape 两条路径都用它产出 `PositioningInfo`，再由共享的 `applyPositioning()` 把这些字段写到 `ISimpleDrawing` 上（含 `layoutType`、`wrapText`、`distL/T/R/B`、`start/lineTo`、`positionH/V`）。

**Tech Stack:** TypeScript、Vitest、fast-xml-parser（项目内 `xml.ts` 封装）、`@univerjs/core` 枚举。

**关键枚举值（测试用）：**
- `PositionedObjectLayoutType`：INLINE=0, WRAP_NONE=1, WRAP_POLYGON=2, WRAP_SQUARE=3, WRAP_THROUGH=4, WRAP_TIGHT=5, WRAP_TOP_AND_BOTTOM=6
- `WrapTextType`：BOTH_SIDES=0, LEFT=1, RIGHT=2, LARGEST=3
- `AlignTypeH`：CENTER=0, INSIDE=1, LEFT=2, OUTSIDE=3, RIGHT=4, BOTH=5, DISTRIBUTE=6
- `AlignTypeV`：BOTTOM=0, CENTER=1, INSIDE=2, OUTSIDE=3, TOP=4

**测试命令（统一）：**
```bash
npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts
```

---

## File Structure

- Modify: `packages/docs-exchange/src/utils/types.ts` — 给 `ISimpleDrawing` 增加 wrap 字段；放宽 `IDocTransform.positionH/V`（`posOffset` 可选 + 新增 `align`）。
- Modify: `packages/docs-exchange/src/utils/parse/parse-drawing.ts` — 新增 `PositioningInfo`、`parseAnchorPositioning()`、`mapWrapToLayoutType()`、`applyPositioning()`；重构 `parseShape`/`buildShapeDrawing`/`buildImageDrawing`；扩展 `ImageDrawingInfo`。
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts` — 新增单测，并把现有 shape 断言改成读 `info.positioning.*`。
- Create: `scripts/wrap-fixture/generate-wrap-fixture.py` — 生成含 wrapSquare/wrapTight 图片的 fixture docx。
- Create: `packages/docs-exchange/src/__tests__/fixtures/wrap-shapes-fixture.docx` — 由脚本生成。
- Modify: `packages/docs-exchange/IMPORT_NOTES.md` — 把图片/shape 的 wrap 从“未实现/降级 WRAP_NONE”更正为“真实映射”。

---

## Task 1: 扩展类型 — `ISimpleDrawing` + `IDocTransform` 增加 wrap/align 字段

**Files:**
- Modify: `packages/docs-exchange/src/utils/types.ts:46-68`

- [ ] **Step 1: 修改 `IDocTransform`（放宽 positionH/V）**

把 `packages/docs-exchange/src/utils/types.ts` 中现有的 `IDocTransform` 替换为：

```ts
export interface IDocPositionAxis {
    relativeFrom: number;
    /** EMU→px offset. Mutually exclusive with align. */
    posOffset?: number;
    /** AlignTypeH / AlignTypeV enum value (from <wp:align>). */
    align?: number;
}

export interface IDocTransform {
    size: { width: number; height: number };
    positionH: IDocPositionAxis;
    positionV: IDocPositionAxis;
    angle: number;
}
```

- [ ] **Step 2: 给 `ISimpleDrawing` 增加 wrap 字段**

在 `ISimpleDrawing` 接口（`layoutType?` 之后）追加：

```ts
    /** OOXML wrapSquare/Tight/Through wrapText → WrapTextType enum value. */
    wrapText?: number;
    /** Wrap distance margins (px). wrapSquare/Tight/Through use L/R; square/topAndBottom use T/B. */
    distL?: number;
    distT?: number;
    distR?: number;
    distB?: number;
    /** wrapPolygon start point (px, relative to drawing origin). */
    start?: number[];
    /** wrapPolygon subsequent points (px, relative to drawing origin). */
    lineTo?: number[][];
```

- [ ] **Step 3: 运行现有测试确认无回归（仅类型变更，行为不变）**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts`
Expected: PASS（9 个测试仍全绿；`posOffset` 变可选不影响现有赋值）

- [ ] **Step 4: Commit**

```bash
git add packages/docs-exchange/src/utils/types.ts
git commit -m "feat(docs-exchange): add wrap/align fields to ISimpleDrawing & IDocTransform"
```

---

## Task 2: 共享定位解析器 `parseAnchorPositioning` + 重构 `parseShape`

把 shape 路径内联的定位解析抽成共享函数，并一次性解析 wrap/dist/align/behindDoc/polygon。本任务行为对 shape 保持等价（wrapNone 仍 WRAP_NONE），由扩展后的现有 shape 测试守护。

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/parse-drawing.ts`
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts:110-167`

- [ ] **Step 1: 在 `parse-drawing.ts` 顶部（`EMU_PER_PX` 之后）新增类型与辅助**

```ts
export type WrapMode = 'none' | 'square' | 'tight' | 'through' | 'topAndBottom';

export interface PositioningInfo {
    isInline: boolean;
    widthPx?: number;
    heightPx?: number;
    posXPx?: number;
    posYPx?: number;
    relativeFromH?: string;
    relativeFromV?: string;
    /** <wp:align> text for H axis (left/center/right/inside/outside). */
    alignH?: string;
    alignV?: string;
    wrapMode?: WrapMode;
    /** <wp:wrapSquare/Tight/Through wrapText> (bothSides/left/right/largest). */
    wrapText?: string;
    distLPx?: number;
    distTPx?: number;
    distRPx?: number;
    distBPx?: number;
    behindDoc?: boolean;
    polygon?: { start: [number, number]; lineTo: [number, number][] };
}

function emuStrToPx(v: unknown): number | undefined {
    if (v === undefined || v === null) return undefined;
    const n = Number(v);
    return Number.isNaN(n) ? undefined : n / EMU_PER_PX;
}

function emuTextToPx(node: XmlNode | undefined): number | undefined {
    if (!node) return undefined;
    return emuStrToPx(textOf(node));
}

function parseWrapPolygon(
    polygon: XmlNode
): { start: [number, number]; lineTo: [number, number][] } | undefined {
    const startNode = findChild(polygon, 'wp:start');
    if (!startNode) return undefined;
    const sx = emuAttrToPx(startNode, '@_x');
    const sy = emuAttrToPx(startNode, '@_y');
    if (sx === undefined || sy === undefined) return undefined;
    const lineTo: [number, number][] = [];
    for (const child of nodeChildren(polygon)) {
        if (nodeName(child) !== 'wp:lineTo') continue;
        const x = emuAttrToPx(child, '@_x');
        const y = emuAttrToPx(child, '@_y');
        if (x !== undefined && y !== undefined) lineTo.push([x, y]);
    }
    return { start: [sx, sy], lineTo };
}

const WRAP_TAGS: Array<[string, WrapMode]> = [
    ['wp:wrapNone', 'none'],
    ['wp:wrapSquare', 'square'],
    ['wp:wrapTight', 'tight'],
    ['wp:wrapThrough', 'through'],
    ['wp:wrapTopAndBottom', 'topAndBottom'],
];

/**
 * Parse the <wp:anchor>/<wp:inline> positioning shared by image and shape
 * drawings: extent, position (posOffset or align), wrap mode, dist margins,
 * behindDoc, and wrapPolygon points. Inline drawings carry only extent.
 */
export function parseAnchorPositioning(drawingNode: XmlNode): PositioningInfo {
    const anchor = findFirstByName(drawingNode, 'wp:anchor');
    const inline = findFirstByName(drawingNode, 'wp:inline');
    const positioning = anchor ?? inline;
    const out: PositioningInfo = { isInline: !anchor && !!inline };
    if (!positioning) return out;

    const extent = findChild(positioning, 'wp:extent');
    out.widthPx = emuAttrToPx(extent, '@_cx');
    out.heightPx = emuAttrToPx(extent, '@_cy');

    if (!anchor) return out;

    const aAttrs = nodeAttrs(anchor);
    if (aAttrs['@_behindDoc'] === '1') out.behindDoc = true;
    out.distLPx = emuStrToPx(aAttrs['@_distL']);
    out.distTPx = emuStrToPx(aAttrs['@_distT']);
    out.distRPx = emuStrToPx(aAttrs['@_distR']);
    out.distBPx = emuStrToPx(aAttrs['@_distB']);

    const positionH = findChild(anchor, 'wp:positionH');
    if (positionH) {
        out.relativeFromH = nodeAttrs(positionH)['@_relativeFrom'] as string | undefined;
        const offset = findChild(positionH, 'wp:posOffset');
        const align = findChild(positionH, 'wp:align');
        if (offset) out.posXPx = emuTextToPx(offset);
        else if (align) out.alignH = textOf(align);
    }
    const positionV = findChild(anchor, 'wp:positionV');
    if (positionV) {
        out.relativeFromV = nodeAttrs(positionV)['@_relativeFrom'] as string | undefined;
        const offset = findChild(positionV, 'wp:posOffset');
        const align = findChild(positionV, 'wp:align');
        if (offset) out.posYPx = emuTextToPx(offset);
        else if (align) out.alignV = textOf(align);
    }

    for (const [tag, mode] of WRAP_TAGS) {
        const el = findChild(anchor, tag);
        if (!el) continue;
        out.wrapMode = mode;
        const wt = nodeAttrs(el)['@_wrapText'] as string | undefined;
        if (wt) out.wrapText = wt;
        const polygon = findChild(el, 'wp:wrapPolygon');
        if (polygon) out.polygon = parseWrapPolygon(polygon);
        break;
    }

    return out;
}
```

- [ ] **Step 2: 重构 `ShapeDrawingInfo` 用嵌套 `positioning`**

把 `ShapeDrawingInfo` 接口替换为：

```ts
export interface ShapeDrawingInfo {
    kind: 'shape';
    positioning: PositioningInfo;
    shapeProps: IDocShapeProperties;
    textBoxBody?: IDocumentBody;
    rotationDegrees?: number;
}
```

（删除原来的 `widthPx/heightPx/posXPx/posYPx/relativeFromH/relativeFromV/behindDoc/isInline` 平铺字段及其上方的 JSDoc 注释，它们现在都在 `PositioningInfo` 里。）

- [ ] **Step 3: 重构 `parseShape`，用 `parseAnchorPositioning` 替换内联定位解析**

把 `parseShape` 函数体开头（从 `const anchor = findFirstByName...` 到构造 `out` 再到 `if (anchor) { ... }` 整段位置解析，即原 parse-drawing.ts 第 172-211 行）替换为：

```ts
    const positioning = parseAnchorPositioning(drawingNode);
    if (positioning.widthPx === undefined || positioning.heightPx === undefined) return undefined;

    const out: ShapeDrawingInfo = {
        kind: 'shape',
        positioning,
        shapeProps: {},
    };
```

`parseShape` 后续读 `wsp` 的 spPr/bodyPr/txbx 逻辑保持不变；末尾把 `out.rotationDegrees`、`out.textBoxBody`、`out.shapeProps` 的赋值保留原样。

- [ ] **Step 4: 重构 `buildShapeDrawing` 用共享 `applyPositioning`（real wrap 映射）**

在 `parse-drawing.ts` 新增共享映射与应用函数（放在 `REL_FROM_V_MAP` 之后）：

```ts
const ALIGN_H_MAP: Record<string, number> = { left: 2, center: 0, right: 4, inside: 1, outside: 3 };
const ALIGN_V_MAP: Record<string, number> = { top: 4, center: 1, bottom: 0, inside: 2, outside: 3 };

// PositionedObjectLayoutType numeric values (see @univerjs/core).
function mapWrapToLayoutType(p: PositioningInfo): number {
    if (p.isInline) return 0; // INLINE
    switch (p.wrapMode) {
        case 'square': return 3; // WRAP_SQUARE
        case 'through': return 4; // WRAP_THROUGH
        case 'tight': return 5; // WRAP_TIGHT
        case 'topAndBottom': return 6; // WRAP_TOP_AND_BOTTOM
        case 'none':
        default: return 1; // WRAP_NONE
    }
}

// WrapTextType numeric values (see @univerjs/core).
function mapWrapText(wrapText: string | undefined): number | undefined {
    switch (wrapText) {
        case 'bothSides': return 0;
        case 'left': return 1;
        case 'right': return 2;
        case 'largest': return 3;
        default: return undefined;
    }
}

function buildAxis(relFrom: number, offsetPx: number | undefined, align: string | undefined, alignMap: Record<string, number>): IDocPositionAxis {
    const axis: IDocPositionAxis = { relativeFrom: relFrom };
    if (align && alignMap[align] !== undefined) axis.align = alignMap[align];
    else axis.posOffset = offsetPx ?? 0;
    return axis;
}

/**
 * Write layoutType + wrap fields + position onto a drawing from PositioningInfo.
 * Shared by image and shape builders.
 */
function applyPositioning(drawing: ISimpleDrawing, p: PositioningInfo, width: number, height: number, angle: number): void {
    drawing.layoutType = mapWrapToLayoutType(p);
    if (p.behindDoc) drawing.behindDoc = 1;

    const wrapText = mapWrapText(p.wrapText);
    if (wrapText !== undefined) drawing.wrapText = wrapText;
    if (p.distLPx !== undefined) drawing.distL = p.distLPx;
    if (p.distTPx !== undefined) drawing.distT = p.distTPx;
    if (p.distRPx !== undefined) drawing.distR = p.distRPx;
    if (p.distBPx !== undefined) drawing.distB = p.distBPx;
    if (p.polygon) {
        drawing.start = p.polygon.start;
        drawing.lineTo = p.polygon.lineTo;
    }

    const relH = p.relativeFromH ? REL_FROM_H_MAP[p.relativeFromH] ?? 2 : 2;
    const relV = p.relativeFromV ? REL_FROM_V_MAP[p.relativeFromV] ?? 2 : 2;
    drawing.transform = { left: p.posXPx ?? 0, top: p.posYPx ?? 0, width, height, angle };
    drawing.docTransform = {
        size: { width, height },
        positionH: buildAxis(relH, p.posXPx, p.alignH, ALIGN_H_MAP),
        positionV: buildAxis(relV, p.posYPx, p.alignV, ALIGN_V_MAP),
        angle,
    };
}
```

需要在文件顶部 import 里加上 `IDocPositionAxis`：把
`import type { ISimpleDrawing } from '../types';`
改为
`import type { IDocPositionAxis, ISimpleDrawing } from '../types';`

然后把 `buildShapeDrawing` 替换为：

```ts
function buildShapeDrawing(drawingId: string, info: ShapeDrawingInfo): ISimpleDrawing {
    const width = info.positioning.widthPx ?? 0;
    const height = info.positioning.heightPx ?? 0;
    const angle = info.rotationDegrees ?? 0;
    const drawing: ISimpleDrawing = {
        drawingId,
        drawingType: 1, // DrawingTypeEnum.DRAWING_SHAPE
        shapeProperties: info.shapeProps,
        textBoxContent: info.textBoxBody ? { body: info.textBoxBody } : undefined,
    };
    applyPositioning(drawing, info.positioning, width, height, angle);
    return drawing;
}
```

- [ ] **Step 5: 更新现有 shape 测试读 `info.positioning.*`**

在 `parse-drawing.test.ts` 的 “parses geometry, fill, stroke, bodyPr, and embedded text” 用例中，把这几行：

```ts
        expect(info.widthPx).toBe(288);
        expect(info.heightPx).toBe(96);
        expect(info.relativeFromH).toBe('column');
        expect(info.relativeFromV).toBe('paragraph');
        expect(info.posXPx).toBeCloseTo(10, 0); // 95250/9525
        expect(info.posYPx).toBeCloseTo(20, 0); // 190500/9525
        expect(info.behindDoc).toBe(undefined);
```

替换为：

```ts
        expect(info.positioning.widthPx).toBe(288);
        expect(info.positioning.heightPx).toBe(96);
        expect(info.positioning.relativeFromH).toBe('column');
        expect(info.positioning.relativeFromV).toBe('paragraph');
        expect(info.positioning.posXPx).toBeCloseTo(10, 0); // 95250/9525
        expect(info.positioning.posYPx).toBeCloseTo(20, 0); // 190500/9525
        expect(info.positioning.behindDoc).toBe(undefined);
        // distL/distR from anchor attributes (114300 EMU = 12 px).
        expect(info.positioning.distLPx).toBeCloseTo(12, 0);
        expect(info.positioning.distRPx).toBeCloseTo(12, 0);
        expect(info.positioning.wrapMode).toBe('none');
```

- [ ] **Step 6: 运行测试确认全绿**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts`
Expected: PASS（shape 路径行为不变：`built.layoutType === 1`；新增的 distL/distR/wrapMode 断言通过）

- [ ] **Step 7: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/parse-drawing.ts packages/docs-exchange/src/__tests__/parse-drawing.test.ts
git commit -m "refactor(docs-exchange): extract parseAnchorPositioning shared by image & shape"
```

---

## Task 3: 修复内联图 — `layoutType === INLINE`（核心 bug）

**Files:**
- Modify: `packages/docs-exchange/src/utils/parse/parse-drawing.ts`（`ImageDrawingInfo`、image 分支、`buildImageDrawing`）
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts`

- [ ] **Step 1: 写失败测试 — 内联图应为 INLINE**

在 `parse-drawing.test.ts` 的 `describe('buildDrawing', ...)` 内追加：

```ts
    it('inline image gets layoutType INLINE (0)', () => {
        const xml = `<w:drawing xmlns:w="x" xmlns:wp="y" xmlns:a="z" xmlns:r="r">
          <wp:inline>
            <wp:extent cx="952500" cy="952500"/>
            <a:graphic><a:graphicData><pic:pic xmlns:pic="p"><pic:blipFill><a:blip r:embed="rId7"/></pic:blipFill></pic:pic></a:graphicData></a:graphic>
          </wp:inline>
        </w:drawing>`;
        const info = parseDrawingFromRunXml(xml);
        expect(info?.kind).toBe('image');
        const rels = new Map([['rId7', { type: 'image' as const, target: 'media/i.png' }]]);
        const media = new Map([['word/media/i.png', new Uint8Array([0x89, 0x50])]]);
        const d = buildDrawing('img-inline', info!, rels, media);
        expect(d?.layoutType).toBe(0); // PositionedObjectLayoutType.INLINE
    });
```

- [ ] **Step 2: 运行确认失败**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts -t "inline image gets layoutType"`
Expected: FAIL（`d?.layoutType` 当前为 `undefined`）

- [ ] **Step 3: 扩展 `ImageDrawingInfo` 携带 positioning**

把 `ImageDrawingInfo` 接口替换为：

```ts
export interface ImageDrawingInfo {
    kind: 'image';
    rId: string;
    positioning: PositioningInfo;
}
```

- [ ] **Step 4: image 分支接入 `parseAnchorPositioning`**

在 `parseDrawingFromXmlNode` 的 image 路径里，把构造 `out` 那段（原 `const out: ImageDrawingInfo = { kind: 'image', rId };` 到 `return out;`）替换为：

```ts
            const positioning = parseAnchorPositioning(node);
            // wp:extent on the picture sits under the same drawing node; if
            // parseAnchorPositioning didn't capture it (defensive), fall back
            // to the nearest wp:extent.
            if (positioning.widthPx === undefined) {
                const extent = findFirstByName(node, 'wp:extent');
                positioning.widthPx = emuAttrToPx(extent, '@_cx');
                positioning.heightPx = emuAttrToPx(extent, '@_cy');
            }
            const out: ImageDrawingInfo = { kind: 'image', rId, positioning };
            return out;
```

- [ ] **Step 5: 重构 `buildImageDrawing` 用 `applyPositioning`**

把 `buildImageDrawing` 末尾的 `return { ... }` 替换为：

```ts
    const width = info.positioning.widthPx ?? 100;
    const height = info.positioning.heightPx ?? 100;
    const drawing: ISimpleDrawing = {
        drawingId,
        drawingType: 0,
        imageSourceType: 'BASE64',
        source: `data:${mime};base64,${base64}`,
    };
    applyPositioning(drawing, info.positioning, width, height, 0);
    return drawing;
```

- [ ] **Step 6: 修现有 image 测试构造（直接传 info 的用例）**

`buildDrawing` describe 中有 3 处直接传字面量 `{ kind: 'image', rId: 'rId1', widthPx: 50, heightPx: 60 }` 等。把它们的 `widthPx/heightPx` 移到 `positioning` 下、并补 `positioning`：

- “returns ISimpleDrawing with all required fields”：
  ```ts
  const d = buildDrawing('d1', { kind: 'image', rId: 'rId1', positioning: { isInline: true, widthPx: 50, heightPx: 60 } }, rels, media);
  ```
- “resolves "../media/X"…”：
  ```ts
  const d = buildDrawing('d2', { kind: 'image', rId: 'rId2', positioning: { isInline: true } }, rels, media);
  ```
- “returns undefined when media bytes missing”：
  ```ts
  expect(buildDrawing('d3', { kind: 'image', rId: 'rId3', positioning: { isInline: true } }, rels, new Map())).toBeUndefined();
  ```
- “returns undefined when rId resolves to non-image”：
  ```ts
  expect(buildDrawing('d4', { kind: 'image', rId: 'rId4', positioning: { isInline: true } }, rels, new Map())).toBeUndefined();
  ```

并在 “extracts blip rId and EMU size” 用例里把 `info.widthPx/heightPx` 改为 `info.positioning.widthPx/heightPx`：

```ts
            expect(info.rId).toBe('rId5');
            expect(info.positioning.widthPx).toBe(100);
            expect(info.positioning.heightPx).toBe(100);
            expect(info.positioning.isInline).toBe(true);
```

- [ ] **Step 7: 运行测试确认全绿**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts`
Expected: PASS（含新内联图 INLINE 断言）

- [ ] **Step 8: Commit**

```bash
git add packages/docs-exchange/src/utils/parse/parse-drawing.ts packages/docs-exchange/src/__tests__/parse-drawing.test.ts
git commit -m "fix(docs-exchange): inline image imports as INLINE, not floating wrap"
```

---

## Task 4: 锚定图 wrap 映射 — none / square / topAndBottom + dist + wrapText + behindDoc

**Files:**
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts`

逻辑已在 Task 2/3 实现（`applyPositioning` 对 image 生效），本任务补测试覆盖各 wrap 模式。

- [ ] **Step 1: 写测试 — 一个含可参数化 wrap 的内联图片 helper + 三种 wrap**

在 `parse-drawing.test.ts` 末尾追加新 describe：

```ts
describe('image anchor wrap mapping', () => {
    function anchorImageXml(wrapXml: string, anchorAttrs = 'distT="91440" distB="91440" distL="114300" distR="114300" behindDoc="0"'): string {
        return `<w:drawing xmlns:w="x" xmlns:wp="y" xmlns:a="z" xmlns:r="r">
          <wp:anchor ${anchorAttrs}>
            <wp:positionH relativeFrom="page"><wp:posOffset>952500</wp:posOffset></wp:positionH>
            <wp:positionV relativeFrom="page"><wp:posOffset>476250</wp:posOffset></wp:positionV>
            <wp:extent cx="952500" cy="952500"/>
            ${wrapXml}
            <a:graphic><a:graphicData><pic:pic xmlns:pic="p"><pic:blipFill><a:blip r:embed="rId9"/></pic:blipFill></pic:pic></a:graphicData></a:graphic>
          </wp:anchor>
        </w:drawing>`;
    }
    const rels = new Map([['rId9', { type: 'image' as const, target: 'media/i.png' }]]);
    const media = new Map([['word/media/i.png', new Uint8Array([0x89, 0x50])]]);
    const build = (wrapXml: string, attrs?: string) =>
        buildDrawing('img', parseDrawingFromRunXml(anchorImageXml(wrapXml, attrs))!, rels, media);

    it('wrapNone → WRAP_NONE (1) with behindDoc', () => {
        const d = build('<wp:wrapNone/>', 'behindDoc="1"');
        expect(d?.layoutType).toBe(1);
        expect(d?.behindDoc).toBe(1);
        // position carried through: 952500/9525 = 100, relativeFrom page = 0
        expect(d?.docTransform?.positionH.relativeFrom).toBe(0);
        expect(d?.docTransform?.positionH.posOffset).toBeCloseTo(100, 0);
        expect(d?.transform?.left).toBeCloseTo(100, 0);
    });

    it('wrapSquare → WRAP_SQUARE (3) with dist + wrapText', () => {
        const d = build('<wp:wrapSquare wrapText="bothSides"/>');
        expect(d?.layoutType).toBe(3);
        expect(d?.wrapText).toBe(0); // BOTH_SIDES
        expect(d?.distL).toBeCloseTo(12, 0); // 114300/9525
        expect(d?.distT).toBeCloseTo(9.6, 1); // 91440/9525
    });

    it('wrapTopAndBottom → WRAP_TOP_AND_BOTTOM (6)', () => {
        const d = build('<wp:wrapTopAndBottom/>');
        expect(d?.layoutType).toBe(6);
        expect(d?.distT).toBeCloseTo(9.6, 1);
        expect(d?.distB).toBeCloseTo(9.6, 1);
    });
});
```

- [ ] **Step 2: 运行测试**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts -t "image anchor wrap mapping"`
Expected: PASS（实现已就绪）

- [ ] **Step 3: Commit**

```bash
git add packages/docs-exchange/src/__tests__/parse-drawing.test.ts
git commit -m "test(docs-exchange): cover image wrapNone/Square/TopAndBottom mapping"
```

---

## Task 5: wrapTight/Through → WRAP_TIGHT/THROUGH + wrapPolygon 点解析

**Files:**
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts`

- [ ] **Step 1: 写测试 — wrapTight 带 polygon**

在 `describe('image anchor wrap mapping', ...)` 内追加：

```ts
    it('wrapTight → WRAP_TIGHT (5) with parsed polygon points', () => {
        const wrap = `<wp:wrapTight wrapText="left">
            <wp:wrapPolygon edited="0">
              <wp:start x="0" y="0"/>
              <wp:lineTo x="0" y="952500"/>
              <wp:lineTo x="952500" y="952500"/>
              <wp:lineTo x="952500" y="0"/>
              <wp:lineTo x="0" y="0"/>
            </wp:wrapPolygon>
          </wp:wrapTight>`;
        const d = build(wrap);
        expect(d?.layoutType).toBe(5);
        expect(d?.wrapText).toBe(1); // LEFT
        expect(d?.start).toEqual([0, 0]);
        // 952500/9525 = 100
        expect(d?.lineTo?.length).toBe(4);
        expect(d?.lineTo?.[0]).toEqual([0, 100]);
        expect(d?.lineTo?.[1]).toEqual([100, 100]);
    });

    it('wrapThrough → WRAP_THROUGH (4)', () => {
        const d = build('<wp:wrapThrough wrapText="largest"/>');
        expect(d?.layoutType).toBe(4);
        expect(d?.wrapText).toBe(3); // LARGEST
    });
```

- [ ] **Step 2: 运行测试**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts -t "wrapTight"`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add packages/docs-exchange/src/__tests__/parse-drawing.test.ts
git commit -m "test(docs-exchange): cover wrapTight/Through + wrapPolygon parsing"
```

---

## Task 6: `<wp:align>` → `positionH/V.align`

**Files:**
- Modify: `packages/docs-exchange/src/__tests__/parse-drawing.test.ts`

- [ ] **Step 1: 写测试 — align 替代 posOffset**

在 `describe('image anchor wrap mapping', ...)` 内追加：

```ts
    it('maps <wp:align> to positionH/V.align instead of posOffset', () => {
        const xml = `<w:drawing xmlns:w="x" xmlns:wp="y" xmlns:a="z" xmlns:r="r">
          <wp:anchor distL="0" distR="0">
            <wp:positionH relativeFrom="margin"><wp:align>center</wp:align></wp:positionH>
            <wp:positionV relativeFrom="page"><wp:align>top</wp:align></wp:positionV>
            <wp:extent cx="952500" cy="952500"/>
            <wp:wrapSquare/>
            <a:graphic><a:graphicData><pic:pic xmlns:pic="p"><pic:blipFill><a:blip r:embed="rId9"/></pic:blipFill></pic:pic></a:graphicData></a:graphic>
          </wp:anchor>
        </w:drawing>`;
        const d = buildDrawing('img', parseDrawingFromRunXml(xml)!, rels, media);
        expect(d?.docTransform?.positionH.align).toBe(0); // AlignTypeH.CENTER
        expect(d?.docTransform?.positionH.posOffset).toBeUndefined();
        expect(d?.docTransform?.positionV.align).toBe(4); // AlignTypeV.TOP
        expect(d?.docTransform?.positionV.relativeFrom).toBe(0); // page
    });
```

- [ ] **Step 2: 运行测试**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/parse-drawing.test.ts -t "wp:align"`
Expected: PASS（`buildAxis` 已实现 align 分支）

- [ ] **Step 3: Commit**

```bash
git add packages/docs-exchange/src/__tests__/parse-drawing.test.ts
git commit -m "test(docs-exchange): cover <wp:align> → positionH/V.align mapping"
```

---

## Task 7: 全量单测 + 全包构建守护

**Files:**（无新增，验证性任务）

- [ ] **Step 1: 跑 docs-exchange 全量测试**

Run: `npx vitest run --root packages/docs-exchange`
Expected: PASS（包含 assemble/parse 等所有既有测试，确认重构无回归）

- [ ] **Step 2: 类型检查 parse-drawing 改动**

Run: `npx tsc --noEmit -p packages/docs-exchange/tsconfig.json 2>&1 | head -20`
Expected: 无与 `parse-drawing.ts` / `types.ts` 相关的类型错误（若该包无独立 tsconfig，改跑 `npm run lint --workspace @univerjs/docs-exchange` 或仓库根 `npx tsc -b`）

- [ ] **Step 3: Commit（如有 lint 自动修复）**

```bash
git add -A packages/docs-exchange
git commit -m "chore(docs-exchange): typecheck/lint pass for image wrap import" || echo "nothing to commit"
```

---

## Task 8: wrap fixture + e2e 验证

**Files:**
- Create: `scripts/wrap-fixture/generate-wrap-fixture.py`
- Create: `packages/docs-exchange/src/__tests__/fixtures/wrap-shapes-fixture.docx`

- [ ] **Step 1: 写 fixture 生成脚本**

创建 `scripts/wrap-fixture/generate-wrap-fixture.py`：

```python
"""Generate a tiny DOCX with floating images using different wrap modes.

Run: python3 scripts/wrap-fixture/generate-wrap-fixture.py
Produces packages/docs-exchange/src/__tests__/fixtures/wrap-shapes-fixture.docx
with three paragraphs of filler text, each carrying an anchored 1-inch image
using wrapSquare / wrapTight / wrapTopAndBottom respectively.
"""
import os
from docx import Document
from docx.shared import Emu
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

HERE = os.path.dirname(__file__)
OUT = os.path.join(HERE, '..', '..', 'packages', 'docs-exchange', 'src', '__tests__', 'fixtures', 'wrap-shapes-fixture.docx')

# 1x1 px PNG bytes.
PNG = bytes.fromhex(
    '89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4'
    '890000000d49444154789c6360000002000154a24f5e0000000049454e44ae426082'
)

FILLER = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do '
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. ') * 4


def add_anchored_image(paragraph, png_path, wrap_tag):
    run = paragraph.add_run()
    # Insert an inline picture first, then rewrite it into an anchor with the
    # requested wrap mode (python-docx has no public floating-image API).
    inline = run.add_picture(png_path, width=Emu(914400), height=Emu(914400))
    # inline is a CT_Inline-bearing drawing; grab the <wp:inline> and swap it.
    drawing = run._r.find(qn('w:drawing'))
    wp_inline = drawing.find(qn('wp:inline'))
    anchor = OxmlElement('wp:anchor')
    for attr in ('distT', 'distB', 'distL', 'distR'):
        anchor.set(attr, '114300')
    anchor.set('behindDoc', '0')
    anchor.set('simplePos', '0')
    anchor.set('relativeHeight', '1')
    anchor.set('locked', '0')
    anchor.set('layoutInCell', '1')
    anchor.set('allowOverlap', '1')

    simplePos = OxmlElement('wp:simplePos'); simplePos.set('x', '0'); simplePos.set('y', '0')
    anchor.append(simplePos)
    posH = OxmlElement('wp:positionH'); posH.set('relativeFrom', 'column')
    offH = OxmlElement('wp:posOffset'); offH.text = '0'; posH.append(offH); anchor.append(posH)
    posV = OxmlElement('wp:positionV'); posV.set('relativeFrom', 'paragraph')
    offV = OxmlElement('wp:posOffset'); offV.text = '0'; posV.append(offV); anchor.append(posV)
    # carry over extent / docPr / graphic from the inline node
    for child_tag in ('wp:extent', 'wp:effectExtent', 'wp:docPr',
                      'wp:cNvGraphicFramePr', 'a:graphic'):
        el = wp_inline.find(qn(child_tag))
        if el is not None:
            anchor.append(el)
    wrap = OxmlElement(wrap_tag)
    # insert wrap right after positionV (before docPr/graphic ordering is lax for our parser)
    anchor.insert(list(anchor).index(posV) + 1, wrap)
    drawing.replace(wp_inline, anchor)


def main():
    doc = Document()
    tmp_png = os.path.join(HERE, '_1x1.png')
    with open(tmp_png, 'wb') as f:
        f.write(PNG)
    for wrap in ('wp:wrapSquare', 'wp:wrapTight', 'wp:wrapTopAndBottom'):
        p = doc.add_paragraph(FILLER)
        add_anchored_image(p, tmp_png, wrap)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    doc.save(OUT)
    os.remove(tmp_png)
    print('wrote', os.path.normpath(OUT))


if __name__ == '__main__':
    main()
```

- [ ] **Step 2: 生成 fixture**

Run: `python3 scripts/wrap-fixture/generate-wrap-fixture.py`
Expected: 打印 `wrote .../wrap-shapes-fixture.docx`；文件存在。
（若环境缺 `python-docx`：`pip3 install python-docx` 后重试。）

- [ ] **Step 3: 写 fixture 导入断言测试**

`parse-drawing.test.ts` 只测单个 drawing；fixture 的端到端导入断言放到独立文件，沿用 `multi-section.test.ts` 的加载模式（`__dirname` + `fs.readFileSync` + `docxToUniverData(buf)`，`DocxInput` 接受 `Buffer`）。新增文件 `packages/docs-exchange/src/__tests__/wrap-fixture.test.ts`：

```ts
/**
 * Copyright 2023-present DreamNum Co., Ltd.
 * Licensed under the Apache License, Version 2.0.
 */
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { docxToUniverData } from '../docx-to-univer';

const FIXTURE = path.resolve(__dirname, 'fixtures/wrap-shapes-fixture.docx');

describe('wrap-shapes-fixture.docx', () => {
    it('imports floating images with real wrap layoutTypes', async () => {
        const buf = fs.readFileSync(FIXTURE);
        const doc = await docxToUniverData(buf);
        const drawings = Object.values(doc.drawings ?? {});
        const layoutTypes = drawings.map((d) => (d as { layoutType?: number }).layoutType).sort();
        // WRAP_SQUARE=3, WRAP_TIGHT=5, WRAP_TOP_AND_BOTTOM=6
        expect(layoutTypes).toEqual([3, 5, 6]);
    });
});
```

- [ ] **Step 4: 运行 fixture 测试**

Run: `npx vitest run --root packages/docs-exchange src/__tests__/wrap-fixture.test.ts`
Expected: PASS（三张图分别为 layoutType 3/5/6）

- [ ] **Step 5: Commit**

```bash
git add scripts/wrap-fixture/generate-wrap-fixture.py packages/docs-exchange/src/__tests__/fixtures/wrap-shapes-fixture.docx packages/docs-exchange/src/__tests__/wrap-fixture.test.ts
git commit -m "test(docs-exchange): wrap-shapes fixture asserts real wrap layoutTypes"
```

- [ ] **Step 6: 浏览器 e2e 验证（docx-import-e2e-verification 技能）**

调用 `docx-import-e2e-verification` 技能：
1. 导入 `examples/public/demo.docx`，截图确认那张内联图随文字排在文本流里、不再被文字环绕（对比修复前）。
2. 导入 `wrap-shapes-fixture.docx`，截图确认 wrapSquare/wrapTight 图片周围文字真正环绕。
3. 若 wrapPolygon/坐标偏移异常，记录到 IMPORT_NOTES 的“后续”而非阻塞本任务（属渲染侧 skeleton 偏移问题）。

---

## Task 9: 更新 IMPORT_NOTES.md

**Files:**
- Modify: `packages/docs-exchange/IMPORT_NOTES.md`

- [ ] **Step 1: 更正 wrap 记载**

在 `packages/docs-exchange/IMPORT_NOTES.md` 的浮动 drawings 小节，把“Floating wrap modes other than wrapNone … all currently render as WRAP_NONE”及 parse-drawing.ts:27 的 TODO 注释，更新为现状：

- 图片与 shape 现在按真实 wrap 映射 `layoutType`（inline→INLINE、wrapNone→WRAP_NONE、wrapSquare→WRAP_SQUARE、wrapTight→WRAP_TIGHT、wrapThrough→WRAP_THROUGH、wrapTopAndBottom→WRAP_TOP_AND_BOTTOM），携带 `distL/T/R/B`、`wrapText`、`behindDoc`、`<wp:align>`。
- 已知后续：wrapPolygon 的点坐标按 EMU→px 输出且相对图形左上角，若 skeleton 未叠加绝对位置则环绕轮廓可能偏移（渲染侧后续）；`<a:srcRect>` 裁剪、图片 `rot`、gradFill/shadow 仍未支持。

同时把 `parse-drawing.ts:27` 的 `// TODO(unsupported): wp:wrapSquare/Tight/Through actual flow-around...` 注释收窄为只列仍未支持项（srcRect 裁剪、图片 rot、custGeom、gradFill、shadow、VML fallback、wrapPolygon 绝对坐标偏移）。

- [ ] **Step 2: Commit**

```bash
git add packages/docs-exchange/IMPORT_NOTES.md packages/docs-exchange/src/utils/parse/parse-drawing.ts
git commit -m "docs(docs-exchange): record real image/shape wrap mapping in IMPORT_NOTES"
```

---

## Self-Review 结果

- **Spec 覆盖：** 第 1 节共享解析器→Task 2；第 2 节 wrap 映射→Task 2/4/5；第 3 节 align/位置→Task 3/6；第 4 节测试→Task 4-8；内联图 bug→Task 3；fixture+e2e→Task 8；IMPORT_NOTES→Task 9。无遗漏。
- **类型一致：** `PositioningInfo`、`parseAnchorPositioning`、`mapWrapToLayoutType`、`mapWrapText`、`buildAxis`、`applyPositioning`、`IDocPositionAxis` 在各任务中命名一致；`ImageDrawingInfo`/`ShapeDrawingInfo` 均改为嵌套 `positioning`，相关测试同步更新。
- **占位符：** 无 TBD/TODO 残留（仅 Task 8 Step 3 明确要求先 Read 入口确认导出名——这是必要的事实核对，非占位）。
