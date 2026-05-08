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

import type { Nullable } from '@univerjs/core';
import type { IWatermarkConfigWithType } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';

// Per-source watermark map. The key is the docs header/footer id (i.e.
// the IHeaderData.headerId / IFooterData.footerId, which the importer
// derives from the DOCX "headerN" / "footerN" stem). Pages whose source
// has no entry render with no watermark — Word's standard behaviour for
// sections that drop the watermark by switching to a different
// header/footer file (e.g. landscape sections that link a brand-new
// header without a VML watermark).
//
// The value is a LIST so a single header can carry multiple shapes
// (Word allows e.g. a logo image plus a "DRAFT" text overlay).
export type IDocsWatermarkBySource = Record<string, IWatermarkConfigWithType[]>;

export interface IDocsWatermarkResource {
    byHeader: IDocsWatermarkBySource;
    byFooter?: IDocsWatermarkBySource;
}

// Holds per-document watermarks keyed by header/footer source id. Lives
// in the per-render injector so each doc unit gets its own instance —
// no cross-document leak. The resource controller pushes the map on
// IDocumentData.resources load; the render controller subscribes and
// looks up the right entries per page.
export class DocsWatermarkService extends Disposable {
    private readonly _resource$ = new BehaviorSubject<Nullable<IDocsWatermarkResource>>(null);
    readonly resource$ = this._resource$.asObservable();

    get resource(): Nullable<IDocsWatermarkResource> {
        return this._resource$.getValue();
    }

    setResource(value: Nullable<IDocsWatermarkResource>): void {
        this._resource$.next(value);
    }

    getForHeader(headerId: string | undefined): IWatermarkConfigWithType[] {
        if (!headerId) return [];
        return this._resource$.getValue()?.byHeader?.[headerId] ?? [];
    }

    getForFooter(footerId: string | undefined): IWatermarkConfigWithType[] {
        if (!footerId) return [];
        return this._resource$.getValue()?.byFooter?.[footerId] ?? [];
    }

    override dispose(): void {
        super.dispose();
        this._resource$.complete();
    }
}
