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

import { describe, expect, it, vi } from 'vitest';
import { tracePath } from '../trace-path';

function recordingCtx() {
    return {
        moveTo: vi.fn(),
        lineTo: vi.fn(),
        quadraticCurveTo: vi.fn(),
        bezierCurveTo: vi.fn(),
        closePath: vi.fn(),
        ellipse: vi.fn(),
    };
}

describe('tracePath', () => {
    it('empty / null path is a no-op', () => {
        const ctx = recordingCtx();
        tracePath(ctx, '');
        expect(ctx.moveTo).not.toHaveBeenCalled();
        expect(ctx.closePath).not.toHaveBeenCalled();
    });

    it('basic rect: M L L L L Z', () => {
        const ctx = recordingCtx();
        tracePath(ctx, 'M0,0 L100,0 L100,60 L0,60 Z');
        expect(ctx.moveTo).toHaveBeenCalledWith(0, 0);
        expect(ctx.lineTo).toHaveBeenNthCalledWith(1, 100, 0);
        expect(ctx.lineTo).toHaveBeenNthCalledWith(2, 100, 60);
        expect(ctx.lineTo).toHaveBeenNthCalledWith(3, 0, 60);
        expect(ctx.closePath).toHaveBeenCalledOnce();
    });

    it('multi-subpath (action button hole): two M-L-Z subpaths', () => {
        const ctx = recordingCtx();
        tracePath(ctx, 'M0,0 L10,0 L10,10 Z M2,2 L8,2 L8,8 Z');
        expect(ctx.moveTo).toHaveBeenCalledTimes(2);
        expect(ctx.moveTo).toHaveBeenNthCalledWith(1, 0, 0);
        expect(ctx.moveTo).toHaveBeenNthCalledWith(2, 2, 2);
        expect(ctx.closePath).toHaveBeenCalledTimes(2);
    });

    it('quadratic bezier: Q', () => {
        const ctx = recordingCtx();
        tracePath(ctx, 'M0,0 Q50,100 100,0');
        expect(ctx.quadraticCurveTo).toHaveBeenCalledWith(50, 100, 100, 0);
    });

    it('cubic bezier: C', () => {
        const ctx = recordingCtx();
        tracePath(ctx, 'M0,0 C25,100 75,100 100,0');
        expect(ctx.bezierCurveTo).toHaveBeenCalledWith(25, 100, 75, 100, 100, 0);
    });

    it('A arc: half-circle from (0,0) to (100,0), rx=ry=50, large=0 sweep=1', () => {
        // A circle-arc: rx==ry, expected to translate to ctx.ellipse with
        // centre on the chord midpoint.
        const ctx = recordingCtx();
        tracePath(ctx, 'M0,0 A50,50 0 0,1 100,0');
        expect(ctx.ellipse).toHaveBeenCalledOnce();
        const call = ctx.ellipse.mock.calls[0];
        // Centre should be at (50, 0) for a sweep-1 (clockwise) half circle.
        expect(call[0]).toBeCloseTo(50, 5);
        expect(call[1]).toBeCloseTo(0, 5);
        expect(call[2]).toBeCloseTo(50, 5); // rx
        expect(call[3]).toBeCloseTo(50, 5); // ry
    });

    it('A arc: zero radius degenerates to lineTo', () => {
        const ctx = recordingCtx();
        tracePath(ctx, 'M0,0 A0,50 0 0,1 100,0');
        expect(ctx.lineTo).toHaveBeenCalledWith(100, 0);
        expect(ctx.ellipse).not.toHaveBeenCalled();
    });

    it('floating point coords with comma+space mixed delimiters', () => {
        const ctx = recordingCtx();
        tracePath(ctx, 'M1.5 2.5 L 3.25, 4.75 Z');
        expect(ctx.moveTo).toHaveBeenCalledWith(1.5, 2.5);
        expect(ctx.lineTo).toHaveBeenCalledWith(3.25, 4.75);
    });

    it('negative coordinates parse correctly', () => {
        const ctx = recordingCtx();
        tracePath(ctx, 'M-5,-10 L20,-30');
        expect(ctx.moveTo).toHaveBeenCalledWith(-5, -10);
        expect(ctx.lineTo).toHaveBeenCalledWith(20, -30);
    });

    it('throws on unsupported relative command', () => {
        const ctx = recordingCtx();
        // Lowercase 'l' is the SVG relative-line command; upstream presets
        // never emit it. If they ever do, our absolute-only assumption is
        // broken — fail loudly rather than silently mis-render.
        expect(() => tracePath(ctx, 'M0,0 l10,10')).toThrow(/unsupported/);
    });

    it('throws on unsupported smooth-curve command', () => {
        const ctx = recordingCtx();
        expect(() => tracePath(ctx, 'M0,0 S5,5 10,10')).toThrow(/unsupported/);
    });

    it('full ellipse (start == end) splits into two valid halves', () => {
        // shapeArc(cx, cy, rx, ry, 180, 540) emits M(cx-rx, cy) A rx,ry 0 1,1 (cx-rx, cy)
        // — start == end. A naive endpoint→centre conversion divides by zero
        // and emits NaN to ctx.ellipse, drawing nothing. We split into halves.
        const ctx = recordingCtx();
        tracePath(ctx, 'M0,10 A20,10 0 1,1 0,10');
        expect(ctx.ellipse).toHaveBeenCalledTimes(2);
        for (const call of ctx.ellipse.mock.calls) {
            // First 7 args are numeric (cx, cy, rx, ry, rot, start, end);
            // arg 8 is the boolean counterclockwise flag.
            for (let i = 0; i < 7; i++) {
                expect(Number.isFinite(call[i] as number)).toBe(true);
            }
        }
    });

    it('near-equal full ellipse endpoints (floating point ULP drift) also split', () => {
        // shapeArc emits sin/cos of 540°, which is not exactly 180° in
        // floating point — the endpoints differ by a few ULPs. The fix
        // uses an epsilon tied to radius, not strict equality.
        const ctx = recordingCtx();
        tracePath(ctx, 'M0,19 A19,19 0 1,1 0,19.000000000000007');
        expect(ctx.ellipse).toHaveBeenCalledTimes(2);
        for (const call of ctx.ellipse.mock.calls) {
            for (let i = 0; i < 7; i++) {
                expect(Number.isFinite(call[i] as number)).toBe(true);
            }
        }
    });
});
