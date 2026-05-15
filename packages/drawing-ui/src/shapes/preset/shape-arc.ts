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

/**
 * Convert OOXML arc specification to SVG path arc command.
 * Based on PPTXjs shapeArc() implementation.
 *
 * @param cx - Center X coordinate
 * @param cy - Center Y coordinate
 * @param rx - Horizontal radius
 * @param ry - Vertical radius
 * @param startAngle - Start angle in degrees
 * @param endAngle - End angle in degrees
 * @param isClose - Whether to close the path with Z
 * @returns SVG path string for the arc
 */
export function shapeArc(
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    startAngle: number,
    endAngle: number,
    isClose: boolean
): string {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + rx * Math.cos(startRad);
    const y1 = cy + ry * Math.sin(startRad);
    const x2 = cx + rx * Math.cos(endRad);
    const y2 = cy + ry * Math.sin(endRad);

  // OOXML convention: always sweep clockwise from startAngle to endAngle.
  // Compute the clockwise sweep in degrees, handling angle wrapping.
    let sweepDeg = (((endAngle - startAngle) % 360) + 360) % 360;
    if (sweepDeg === 0 && startAngle !== endAngle) sweepDeg = 360;

  // Full-circle / full-ellipse (sweep === 360°): start point == end point,
  // which makes a single SVG `A` command undefined. Emit as two half-arcs
  // through the antipodal point so endpoint→centre conversion stays
  // well-defined for both halves.
    if (sweepDeg === 360) {
        const midRad = startRad + Math.PI;
        const xm = cx + rx * Math.cos(midRad);
        const ym = cy + ry * Math.sin(midRad);
        let d = `M${x1},${y1} A${rx},${ry} 0 0,1 ${xm},${ym} A${rx},${ry} 0 0,1 ${x2},${y2}`;
        if (isClose) {
            d += ' Z';
        }
        return d;
    }

    const largeArc = sweepDeg > 180 ? 1 : 0;
    const sweep = 1; // always clockwise

    let d = `M${x1},${y1} A${rx},${ry} 0 ${largeArc},${sweep} ${x2},${y2}`;
    if (isClose) {
        d += ' Z';
    }
    return d;
}
