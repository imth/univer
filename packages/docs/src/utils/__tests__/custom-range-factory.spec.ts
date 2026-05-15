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

import { DocumentDataModel } from '@univerjs/core';
import { describe, expect, it } from 'vitest';
import { getRichTextEditPath } from '../custom-range-factory';

function buildModel() {
    return new DocumentDataModel({
        id: 'd',
        body: { dataStream: 'body\r\n', textRuns: [], paragraphs: [{ startIndex: 5 }] },
        headers: { h1: { headerId: 'h1', body: { dataStream: 'h\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } },
        footers: { f1: { footerId: 'f1', body: { dataStream: 'f\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } },
        drawings: { tb1: { drawingId: 'tb1', textBoxContent: { body: { dataStream: 't\r\n', textRuns: [], paragraphs: [{ startIndex: 2 }] } } } as any },
        drawingsOrder: ['tb1'],
        documentStyle: {},
    });
}

describe('getRichTextEditPath', () => {
    it('returns body path when segmentId is empty', () => {
        expect(getRichTextEditPath(buildModel(), '')).toEqual(['body']);
        expect(getRichTextEditPath(buildModel())).toEqual(['body']);
    });

    it('returns headers path for a header segmentId', () => {
        expect(getRichTextEditPath(buildModel(), 'h1')).toEqual(['headers', 'h1', 'body']);
    });

    it('returns footers path for a footer segmentId', () => {
        expect(getRichTextEditPath(buildModel(), 'f1')).toEqual(['footers', 'f1', 'body']);
    });

    it('returns drawings textBoxContent path for a textbox segmentId', () => {
        expect(getRichTextEditPath(buildModel(), 'tb1')).toEqual(['drawings', 'tb1', 'textBoxContent', 'body']);
    });

    it('throws for an unknown segmentId', () => {
        expect(() => getRichTextEditPath(buildModel(), 'nope')).toThrow();
    });
});
