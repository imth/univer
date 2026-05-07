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

import { describe, expect, it } from 'vitest';
import { LineBreaker } from '../../line-breaker';
import { pageColumnBreakExtension } from '../page-column-break-extension';

function collectBreakPositions(text: string): number[] {
    const breaker = new LineBreaker(text);
    pageColumnBreakExtension(breaker);
    const positions: number[] = [];
    let bk;
    // eslint-disable-next-line no-cond-assign
    while ((bk = breaker.nextBreakPoint())) {
        positions.push(bk.position);
    }
    return positions;
}

describe('pageColumnBreakExtension', () => {
    it('breaks before and after PAGE_BREAK', () => {
        const positions = collectBreakPositions('foo\fbar');
        // Expect a break at position 3 (right before \f) and 4 (right after \f).
        expect(positions).toContain(3);
        expect(positions).toContain(4);
    });

    it('breaks before and after COLUMN_BREAK', () => {
        const positions = collectBreakPositions('foo\vbar');
        expect(positions).toContain(3);
        expect(positions).toContain(4);
    });

    it('isolates a break char between two words into its own chunk', () => {
        // Slicing the input by consecutive break positions should yield a
        // standalone "\v" (or "\f") chunk, which is what shaping needs to
        // attach the streamType to a final glyph.
        const text = 'before\vafter';
        const positions = collectBreakPositions(text);
        const chunks: string[] = [];
        let last = 0;
        for (const p of positions) {
            chunks.push(text.slice(last, p));
            last = p;
        }
        expect(chunks).toContain('\v');
    });
});
