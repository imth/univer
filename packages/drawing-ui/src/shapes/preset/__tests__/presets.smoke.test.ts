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
import { getPresetShapePath, presetShapes } from '../presets';
import { tracePath } from '../trace-path';

// 18 fixture-relevant presets from 全格式.docx that we expect to render
// with their actual outline (rather than a rectangle fallback).
// textArchUp/CascadeDown/Chevron/Inflate/Plain/Wave1 are intentionally
// omitted: they're WordArt text-warp containers whose geometry IS a
// rectangle, so the fallback path is correct.
const FIXTURE_PRESETS = [
    'rect',
    'roundRect',
    'ellipse',
    'diamond',
    'heart',
    'star5',
    'rightArrow',
    'sun',
    'moon',
    'cloud',
    'lightningBolt',
    'gear6',
    'mathPlus',
    'flowChartProcess',
    'smileyFace',
    'actionButtonHome',
    'actionButtonInformation',
];

describe('presetShapes — fixture coverage', () => {
    it.each(FIXTURE_PRESETS)('%s has a registered generator', (name) => {
        expect(presetShapes.has(name)).toBe(true);
    });

    it.each(FIXTURE_PRESETS)('%s emits a path that starts with M and ends with Z', (name) => {
        const d = getPresetShapePath(name, 100, 60);
        expect(d.length).toBeGreaterThan(0);
        expect(d.trimStart().startsWith('M')).toBe(true);
        expect(d.trimEnd().endsWith('Z')).toBe(true);
    });

    it.each(FIXTURE_PRESETS)('%s path traces without throwing', (name) => {
        // Smoke test: feed the generated path through tracePath with a
        // minimal recording ctx. If a generator emits an unexpected SVG
        // command, tracePath will throw and we'll catch it here rather
        // than at runtime in the browser.
        const noop = () => undefined;
        const ctx = {
            moveTo: noop,
            lineTo: noop,
            quadraticCurveTo: noop,
            bezierCurveTo: noop,
            closePath: noop,
            ellipse: noop,
        };
        const d = getPresetShapePath(name, 100, 60);
        expect(() => tracePath(ctx, d)).not.toThrow();
    });

    it('unknown preset name falls back to rectangle', () => {
        const d = getPresetShapePath('does-not-exist', 50, 30);
        expect(d).toMatch(/^M0,0 L50,0 L50,30 L0,30 Z$/);
    });

    it('textNoShape returns empty string (text-only container)', () => {
        expect(getPresetShapePath('textNoShape', 100, 60)).toBe('');
    });
});
