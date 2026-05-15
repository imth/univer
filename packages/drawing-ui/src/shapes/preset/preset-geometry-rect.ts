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

import type { IRectProps, UniverRenderingContext } from '@univerjs/engine-render';
import { Rect } from '@univerjs/engine-render';
import { getMultiPathPreset, getPresetShapePath, STROKE_ONLY_PRESETS } from './presets';
import { tracePath } from './trace-path';

export interface IPresetGeometryRectProps extends IRectProps {
    /** OOXML preset geometry name (e.g. `ellipse`, `diamond`, `star5`). */
    presetGeometry: string;
}

/**
 * OOXML 3D-shading modes used by `multiPathPresets`. Each sub-path
 * declares one of these to specify how its fill relates to the
 * shape's base color. Constants chosen to match Office's preview
 * renderer (PowerPoint flattens `<a:lumMod>` / `<a:lumOff>` to these
 * fixed ratios). The `darken*` modes blend toward black; the
 * `lighten*` modes blend toward white.
 */
const TINT_FACTORS: Record<string, { toward: 0 | 255; ratio: number }> = {
    darken: { toward: 0, ratio: 0.4 },
    darkenLess: { toward: 0, ratio: 0.2 },
    lighten: { toward: 255, ratio: 0.6 },
    lightenLess: { toward: 255, ratio: 0.4 },
};

function tintHex(baseHex: string, mode: keyof typeof TINT_FACTORS | 'norm'): string {
    if (mode === 'norm') return baseHex;
    const factor = TINT_FACTORS[mode];
    if (!factor) return baseHex;
    const hex = baseHex.startsWith('#') ? baseHex.slice(1) : baseHex;
    // Real DOCX always emits 6-hex sRGB, but the prop type is `string`
    // and theme-color resolution lives upstream — guard against
    // anything that would `parseInt(..., 16) === NaN`, which Canvas
    // treats as transparent and silently disappears the sub-path.
    const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
    if (full.length !== 6 || /[^0-9a-fA-F]/.test(full)) return baseHex;
    const r = Number.parseInt(full.slice(0, 2), 16);
    const g = Number.parseInt(full.slice(2, 4), 16);
    const b = Number.parseInt(full.slice(4, 6), 16);
    const blend = (c: number) => Math.round(c + (factor.toward - c) * factor.ratio);
    const out = [blend(r), blend(g), blend(b)].map((c) => c.toString(16).padStart(2, '0')).join('');
    return `#${out}`;
}

/**
 * Rect subclass that paints an OOXML preset geometry path instead of
 * the default rectangle. Falls back to the rectangle path when the
 * preset name is unknown to the vendored generators (handled inside
 * `getPresetShapePath`), so callers don't need to gate by support.
 *
 * Reuses the Rect transform / fill / stroke pipeline; only the path
 * step changes. `roundRect` is also handled by `presets.ts` via
 * `<a:avLst>`-driven adjust values, but we let the existing Rect
 * radius path keep handling it for now (importer doesn't yet parse
 * adjust values, see Stage C follow-up in IMPORT_NOTES).
 */
export class PresetGeometryRect extends Rect<IPresetGeometryRectProps> {
    presetGeometry: string;

    constructor(key: string, props: IPresetGeometryRectProps) {
        // OOXML preset geometries are authored against the even-odd fill
        // rule: ~25% of presets emit interior subpaths (donut hole, smiley
        // eyes, home-button door, info "i" glyph) whose winding direction
        // matches the outer outline, so Canvas's default nonzero rule
        // fills those overlaps solid instead of as cutouts. Even-odd is a
        // no-op for the ~75% of single-subpath presets, so we apply it
        // unconditionally and avoid maintaining a per-preset whitelist.
        super(key, { ...props, fillRule: 'evenodd' });
        this.presetGeometry = props.presetGeometry;
    }

    static override drawWith(ctx: UniverRenderingContext, props: IPresetGeometryRectProps) {
        const width = props.width ?? 0;
        const height = props.height ?? 0;

        ctx.save();
        if (props.strokeDashArray) {
            ctx.setLineDash(props.strokeDashArray);
        }

        const multi = getMultiPathPreset(props.presetGeometry, width, height);
        if (multi && multi.length > 0) {
            // Render each sub-path with its declared fill mode:
            //   - `norm` / `darken*` / `lighten*` → fill (with the
            //     base color blended toward black/white per the
            //     OOXML shading mode) plus stroke. Painted in order
            //     so the 3D shading layers (chimney darkenLess on
            //     top of the cut-out wall) stack the way Word does.
            //   - `none` + `stroke` → stroke only; detail lines like
            //     the chart `+` glyph or speaker grill on action
            //     buttons. Filling them would auto-close their open
            //     subpaths into spurious filled triangles.
            //
            // Each fillable sub-path is its own ctx path so evenodd
            // works per-layer. Painting them all into one combined
            // path with the same fill collapses the cut-out structure
            // into a flat blob (e.g. `actionButtonHome` becomes a
            // plain blue square with no visible house).
            const baseFillRaw = (props as { fill?: string }).fill;
            const baseFill = typeof baseFillRaw === 'string' ? baseFillRaw : undefined;
            const instance = props as unknown as { _fill?: string };
            const savedFill = instance._fill;

            try {
                for (const p of multi) {
                    if (p.fill === 'none') continue;
                    const tintedFill = baseFill ? tintHex(baseFill, p.fill) : undefined;
                    instance._fill = tintedFill;
                    ctx.beginPath();
                    tracePath(ctx as unknown as Parameters<typeof tracePath>[0], p.d);

                    (Rect as unknown as {
                        _renderPaintInOrder: (
                            ctx: UniverRenderingContext,
                            props: IRectProps
                        ) => void;
                    })._renderPaintInOrder(ctx, props);
                }

                // Stroke-only detail lines on top.
                const strokeOnly = multi.filter((p) => p.fill === 'none' && p.stroke);
                if (strokeOnly.length > 0) {
                    // Clearing `_fill` here makes `_renderPaintInOrder`
                    // skip the fill pass entirely — `Shape._renderFill`
                    // (engine-render/shape.ts) early-returns when
                    // `props.fill` is falsy. If that early-return is
                    // ever removed, detail lines will start filling
                    // their open subpaths into spurious shapes.
                    instance._fill = undefined;
                    ctx.beginPath();
                    for (const p of strokeOnly) {
                        tracePath(ctx as unknown as Parameters<typeof tracePath>[0], p.d);
                    }

                    (Rect as unknown as {
                        _renderPaintInOrder: (
                            ctx: UniverRenderingContext,
                            props: IRectProps
                        ) => void;
                    })._renderPaintInOrder(ctx, props);
                }
            } finally {
                instance._fill = savedFill;
            }

            ctx.restore();
            return;
        }

        ctx.beginPath();
        const d = getPresetShapePath(props.presetGeometry, width, height);
        tracePath(ctx as unknown as Parameters<typeof tracePath>[0], d);

        // OOXML connector / line presets are authored as
        // `<a:pathLst><a:path stroke="true" fill="none">` — open
        // polylines/curves that should be stroked, never filled. Word
        // renders an L-shaped `bentConnector3` as a thin polyline; if
        // we let Canvas `fill()` it, the open subpath is auto-closed
        // back to the start point, painting it as a filled triangle.
        // The vendored generators discard the per-`<a:path>` fill
        // metadata so we restore it via STROKE_ONLY_PRESETS.
        //
        // We can't `{ ...props, fill: undefined }` here: `props` is
        // the Shape instance and `stroke`/`strokeWidth` are prototype
        // getters that wouldn't survive a spread, leaving the stroke
        // pass with no color/width. Instead temporarily flip the
        // backing `_fill` field around the paint call.
        const isStrokeOnly = STROKE_ONLY_PRESETS.has(props.presetGeometry);
        const instance = props as unknown as { _fill?: string };
        const savedFill = instance._fill;
        if (isStrokeOnly) instance._fill = undefined;
        try {
            (Rect as unknown as {
                _renderPaintInOrder: (ctx: UniverRenderingContext, props: IRectProps) => void;
            })._renderPaintInOrder(ctx, props);
        } finally {
            if (isStrokeOnly) instance._fill = savedFill;
        }

        ctx.restore();
    }

    protected override _draw(ctx: UniverRenderingContext) {
        PresetGeometryRect.drawWith(ctx, this as unknown as IPresetGeometryRectProps);
    }
}
