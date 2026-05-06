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

// Multi-section integration test: imports a python-docx generated DOCX with
// 6 sections (portrait/continuous/landscape/first-page-header/...) and asserts
// the importer wires per-section header/footer/orient/sectionType correctly.

import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { docxToUniverData } from '../docx-to-univer';

const FIXTURE = path.resolve(__dirname, 'fixtures/multi-section.docx');

describe('multi-section: fixtures/multi-section.docx', () => {
    it('extracts headers / footers / per-section properties matching the source sectPrs', async () => {
        const buf = fs.readFileSync(FIXTURE);
        const doc = await docxToUniverData(buf);

        // 3 unique header xmls (header1/2/3) and 1 footer (footer1) should be parsed and deduped.
        expect(Object.keys(doc.headers ?? {}).sort()).toEqual(['header1', 'header2', 'header3']);
        expect(Object.keys(doc.footers ?? {})).toEqual(['footer1']);

        // Document-level fallback: body-end sectPr has no refs, so the fallback walks
        // inline sectPrs and picks the first one with refs (sectPr #0 → header1/footer1).
        expect(doc.documentStyle.defaultHeaderId).toBe('header1');
        expect(doc.documentStyle.defaultFooterId).toBe('footer1');

        // useFirstPageHeaderFooter is per-section in OOXML, NOT a document-level
        // default. The body-end sectPr (#5) has <w:titlePg/>, but section #0
        // doesn't — promoting the body-end value to documentStyle would make
        // section #0 walk the first-page-header path with no firstPageHeaderId
        // and render the cover page blank. Each section carries its own value
        // on the sectionBreak entry instead.
        expect(doc.documentStyle.useFirstPageHeaderFooter).toBeUndefined();

        // Document-level section breaks come from two sources:
        //   1. Inline `<w:pPr><w:sectPr>` and the body-end sectPr — these carry
        //      headers/footers/orient/sectionType from the source.
        //   2. Bare page-break paragraphs (`<w:p><w:r><w:br w:type="page"/></w:r></w:p>`)
        //      promoted to NEXT_PAGE section breaks. These inherit the body-end
        //      sectPr's fields and additionally set sectionType=NEXT_PAGE (=2).
        // Filter out the table-cell SECTION_BREAKs (they're bare { startIndex }).
        const sb = doc.body!.sectionBreaks!.filter((b) =>
            b.defaultHeaderId !== undefined
            || b.firstPageHeaderId !== undefined
            || b.evenPageHeaderId !== undefined
            || b.defaultFooterId !== undefined
            || b.sectionType !== undefined
            || b.useFirstPageHeaderFooter !== undefined
            || b.pageOrient !== undefined
        );

        // 全格式.docx has 3 bare page-break paragraphs that we promote to
        // NEXT_PAGE section breaks. Pick those out for separate inspection.
        const SectionType_NEXT_PAGE = 2;
        const pageBreakSb = sb.filter((b) => b.sectionType === SectionType_NEXT_PAGE);
        expect(pageBreakSb.length).toBe(3);

        // The 6 source sectPrs (excluding our promoted page-break entries).
        const sourceSb = sb.filter((b) => b.sectionType !== SectionType_NEXT_PAGE);
        expect(sourceSb.length).toBe(6);

        // sectPr #0: portrait, header1 + footer1.
        expect(sourceSb[0].defaultHeaderId).toBe('header1');
        expect(sourceSb[0].defaultFooterId).toBe('footer1');
        expect(sourceSb[0].pageOrient).toBeUndefined(); // portrait is the default (0), not emitted explicitly

        // sectPr #1: continuous, no own headerRef → inherits header1 from sectPr #0
        // (ECMA-376 §17.6 cross-section header inheritance).
        expect(sourceSb[1].sectionType).toBe(1); // SectionType.CONTINUOUS
        expect(sourceSb[1].defaultHeaderId).toBe('header1');

        // sectPr #2: landscape, own headerRef → header2.
        expect(sourceSb[2].pageOrient).toBe(1); // landscape
        expect(sourceSb[2].defaultHeaderId).toBe('header2');

        // sectPr #3: first-page header, titlePg=true. Inherits default from sectPr #2.
        expect(sourceSb[3].firstPageHeaderId).toBe('header3');
        expect(sourceSb[3].defaultHeaderId).toBe('header2');
        expect(sourceSb[3].useFirstPageHeaderFooter).toBe(1);

        // sectPr #4: continuous + titlePg, inherits default from sectPr #3 (still header2).
        expect(sourceSb[4].sectionType).toBe(1);
        expect(sourceSb[4].useFirstPageHeaderFooter).toBe(1);
        expect(sourceSb[4].defaultHeaderId).toBe('header2');

        // sectPr #5: body-end break. No own ref but inherits header2 from the chain.
        expect(sourceSb[5].sectionType).toBe(1);
        expect(sourceSb[5].useFirstPageHeaderFooter).toBe(1);
        expect(sourceSb[5].defaultHeaderId).toBe('header2');

        // Each promoted page-break entry inherits from the inline sectPr it
        // logically belongs to (the next inline sectPr that appears after the
        // page-break paragraph in document order, or body-end if none). The
        // first two page breaks fall under sectPr #0 (header1); the third one
        // falls after the last inline sectPr so it inherits from body-end —
        // body-end has no own header ref and carry-forward leaves it on
        // header2 (the most recent default).
        expect(pageBreakSb[0].defaultHeaderId).toBe('header1');
        expect(pageBreakSb[1].defaultHeaderId).toBe('header1');
        expect(pageBreakSb[2].defaultHeaderId).toBe('header2');
        // None of the page-break entries should carry titlePg / first-page IDs
        // (the page after a hard page break is not a section's first page).
        for (const pb of pageBreakSb) {
            expect(pb.useFirstPageHeaderFooter).toBeUndefined();
            expect(pb.firstPageHeaderId).toBeUndefined();
            expect(pb.firstPageFooterId).toBeUndefined();
        }
    });
});
