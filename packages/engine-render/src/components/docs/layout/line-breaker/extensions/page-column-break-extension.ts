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

import type { LineBreaker } from '../line-breaker';

const PAGE_BREAK_CODE_POINT = 12; // DataStreamTreeTokenType.PAGE_BREAK = '\f'
const COLUMN_BREAK_CODE_POINT = 11; // DataStreamTreeTokenType.COLUMN_BREAK = '\v'

// Force shaping to terminate a chunk at every PAGE_BREAK / COLUMN_BREAK so
// that linebreaking.ts can detect the break by inspecting the last glyph's
// streamType. Without these rules the break char would be buried in a larger
// chunk and never trigger the page/column dispatch (a Word mid-paragraph
// `<w:br w:type="page|column"/>` would render as if the chars on either side
// were concatenated).
export function pageColumnBreakExtension(breaker: LineBreaker) {
    breaker.addRule('break_before_page_or_column_break', (codePoint) => {
        return codePoint === PAGE_BREAK_CODE_POINT || codePoint === COLUMN_BREAK_CODE_POINT;
    });
    breaker.addRule('break_after_page_or_column_break', (_codePoint, lastCodePoint) => {
        return lastCodePoint === PAGE_BREAK_CODE_POINT || lastCodePoint === COLUMN_BREAK_CODE_POINT;
    });
}
