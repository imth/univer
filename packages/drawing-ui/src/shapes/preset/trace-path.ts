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

interface ICtxLike {
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(
        x: number,
        y: number,
        radiusX: number,
        radiusY: number,
        rotation: number,
        startAngle: number,
        endAngle: number,
        counterclockwise?: boolean
    ): void;
}

const TOKEN_RE = /[MLAQCZ]|-?\d*\.?\d+(?:e[-+]?\d+)?/g;

/**
 * Trace an absolute SVG path `d` string onto the given canvas context.
 *
 * Supports the command subset emitted by the vendored preset generators
 * in `./presets.ts`: M (moveTo), L (lineTo), Q (quadraticCurveTo),
 * C (bezierCurveTo), A (elliptic arc), Z (closePath). All commands use
 * absolute coordinates — the upstream generators never emit relative
 * variants.
 *
 * The path is appended to the ctx's *current* path, so the caller
 * controls `beginPath` / `fill` / `stroke` and can compose multiple
 * paths if needed.
 *
 * @throws if an unsupported command (e.g. relative `m`/`l`, smooth
 *   curve `S`/`T`, horizontal/vertical line `H`/`V`) is encountered —
 *   the upstream code should never emit these, so reaching this branch
 *   means an upstream change has broken our assumption.
 */
export function tracePath(ctx: ICtxLike, d: string): void {
    if (!d) return;
    const tokens = d.match(TOKEN_RE);
    if (!tokens) return;

    let i = 0;
    let cx = 0;
    let cy = 0;
    while (i < tokens.length) {
        const cmd = tokens[i++];
        switch (cmd) {
            case 'M': {
                cx = Number(tokens[i++]);
                cy = Number(tokens[i++]);
                ctx.moveTo(cx, cy);
                break;
            }
            case 'L': {
                cx = Number(tokens[i++]);
                cy = Number(tokens[i++]);
                ctx.lineTo(cx, cy);
                break;
            }
            case 'Q': {
                const cpx = Number(tokens[i++]);
                const cpy = Number(tokens[i++]);
                cx = Number(tokens[i++]);
                cy = Number(tokens[i++]);
                ctx.quadraticCurveTo(cpx, cpy, cx, cy);
                break;
            }
            case 'C': {
                const c1x = Number(tokens[i++]);
                const c1y = Number(tokens[i++]);
                const c2x = Number(tokens[i++]);
                const c2y = Number(tokens[i++]);
                cx = Number(tokens[i++]);
                cy = Number(tokens[i++]);
                ctx.bezierCurveTo(c1x, c1y, c2x, c2y, cx, cy);
                break;
            }
            case 'A': {
                const rx = Number(tokens[i++]);
                const ry = Number(tokens[i++]);
                const xAxisRot = Number(tokens[i++]);
                const largeArc = Number(tokens[i++]);
                const sweep = Number(tokens[i++]);
                const ex = Number(tokens[i++]);
                const ey = Number(tokens[i++]);
                drawSvgArc(ctx, cx, cy, ex, ey, rx, ry, xAxisRot, largeArc !== 0, sweep !== 0);
                cx = ex;
                cy = ey;
                break;
            }
            case 'Z': {
                ctx.closePath();
                break;
            }
            default:
                throw new Error(`tracePath: unsupported SVG path command "${cmd}"`);
        }
    }
}

/**
 * Convert SVG endpoint-form arc parameters (rx, ry, x-axis-rotation,
 * large-arc-flag, sweep-flag, end x, end y) into a `ctx.ellipse` call.
 *
 * Implementation follows the SVG 1.1 spec, Appendix F.6
 * "Conversion from endpoint to center parameterization":
 * https://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
 *
 * Required because `ctx.arc` only handles circles; preset shapes (e.g.
 * sun, moon, ellipse) use elliptic arcs with rx ≠ ry.
 */
function drawSvgArc(
    ctx: ICtxLike,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    rx: number,
    ry: number,
    xAxisRotDeg: number,
    largeArc: boolean,
    sweep: boolean
): void {
    if (rx === 0 || ry === 0) {
        ctx.lineTo(x2, y2);
        return;
    }

    const rxAbs = Math.abs(rx);
    const ryAbs = Math.abs(ry);
    const phi = (xAxisRotDeg * Math.PI) / 180;
    const cosPhi = Math.cos(phi);
    const sinPhi = Math.sin(phi);

    // SVG `A` is undefined when start == end — the spec says the segment
    // is dropped. Our preset generators legitimately ask for a full
    // ellipse (start == end, sweep flag set, large-arc set). Floating
    // point error in shapeArc means the points are usually within a few
    // ULPs of equal but not exactly equal, so use an absolute epsilon
    // tied to the radius. Split into two halves at the antipodal point
    // on the local x-axis when triggered.
    const eps = Math.max(rxAbs, ryAbs) * 1e-9;
    if (Math.abs(x1 - x2) < eps && Math.abs(y1 - y2) < eps) {
        const mx = x1 + 2 * rxAbs * cosPhi;
        const my = y1 + 2 * rxAbs * sinPhi;
        drawSvgArc(ctx, x1, y1, mx, my, rxAbs, ryAbs, xAxisRotDeg, false, sweep);
        drawSvgArc(ctx, mx, my, x2, y2, rxAbs, ryAbs, xAxisRotDeg, false, sweep);
        return;
    }

    // Step 1: transform to origin-centred frame.
    const dx = (x1 - x2) / 2;
    const dy = (y1 - y2) / 2;
    const x1p = cosPhi * dx + sinPhi * dy;
    const y1p = -sinPhi * dx + cosPhi * dy;

    // Scale up radii if they're too small to span the chord (per SVG spec).
    let rxSq = rxAbs * rxAbs;
    let rySq = ryAbs * ryAbs;
    const x1pSq = x1p * x1p;
    const y1pSq = y1p * y1p;
    const radiiCheck = x1pSq / rxSq + y1pSq / rySq;
    let rxScaled = rxAbs;
    let ryScaled = ryAbs;
    if (radiiCheck > 1) {
        const s = Math.sqrt(radiiCheck);
        rxScaled = s * rxAbs;
        ryScaled = s * ryAbs;
        rxSq = rxScaled * rxScaled;
        rySq = ryScaled * ryScaled;
    }

    // Step 2: compute centre in origin-centred frame.
    const sign = largeArc === sweep ? -1 : 1;
    const denom = rxSq * y1pSq + rySq * x1pSq;
    const numer = Math.max(0, rxSq * rySq - denom);
    const coef = sign * Math.sqrt(numer / denom);
    const cxp = (coef * (rxScaled * y1p)) / ryScaled;
    const cyp = (coef * -(ryScaled * x1p)) / rxScaled;

    // Step 3: transform centre back.
    const ccx = cosPhi * cxp - sinPhi * cyp + (x1 + x2) / 2;
    const ccy = sinPhi * cxp + cosPhi * cyp + (y1 + y2) / 2;

    // Step 4: angles.
    const startAngle = angleBetween(1, 0, (x1p - cxp) / rxScaled, (y1p - cyp) / ryScaled);
    let deltaAngle = angleBetween(
        (x1p - cxp) / rxScaled,
        (y1p - cyp) / ryScaled,
        (-x1p - cxp) / rxScaled,
        (-y1p - cyp) / ryScaled
    );
    if (!sweep && deltaAngle > 0) deltaAngle -= 2 * Math.PI;
    if (sweep && deltaAngle < 0) deltaAngle += 2 * Math.PI;

    ctx.ellipse(ccx, ccy, rxScaled, ryScaled, phi, startAngle, startAngle + deltaAngle, !sweep);
}

function angleBetween(ux: number, uy: number, vx: number, vy: number): number {
    const dot = ux * vx + uy * vy;
    const len = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
    let cosA = dot / len;
    if (cosA < -1) cosA = -1;
    if (cosA > 1) cosA = 1;
    const sign = ux * vy - uy * vx < 0 ? -1 : 1;
    return sign * Math.acos(cosA);
}
