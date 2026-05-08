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

import type { DocumentDataModel, IUser, Nullable } from '@univerjs/core';
import type { Documents, IPageRenderConfig, IRenderContext, IRenderModule, IWatermarkConfigWithType } from '@univerjs/engine-render';
import { Disposable, Inject, UserManagerService } from '@univerjs/core';
import { IWatermarkTypeEnum } from '@univerjs/engine-render';
import { DocsWatermarkService } from '../../services/docs-watermark.service';
import { renderWatermarkOnPage } from '../../views/render/render-watermark';

// Per-page watermark renderer. Hooks into Documents.pageBackgroundRender$,
// which fires BEFORE each page's body+header+footer draw with the canvas
// context still at the document origin (Documents tracks page offsets via
// Liquid but does not actually translate ctx). We translate by
// (pageLeft, pageTop) ourselves and draw within the page's clip — drawing
// before the body means the watermark sits UNDER the text, matching how
// Word/WPS render watermarks (washed-out grey behind the content).
//
// Per-section behaviour: a doc may carry per-header AND per-footer
// watermark lists (built by the importer from each headerN.xml /
// footerN.xml). We look up entries for both page.headerId and
// page.footerId; pages whose source has no entry render nothing for
// that source. This mirrors Word: a section break that switches to a
// header file without VML watermarks (e.g. landscape sections) drops
// the watermark from those pages onward.
export class DocsWatermarkRenderController extends Disposable implements IRenderModule {
    // dataUrl → preloaded HTMLImageElement. Image watermarks render via
    // <img>.complete check; multiple distinct images coexist in one doc
    // (e.g. one logo per section), so we cache by url.
    private readonly _images = new Map<string, HTMLImageElement>();

    constructor(
        private readonly _context: IRenderContext<DocumentDataModel>,
        @Inject(DocsWatermarkService) private readonly _watermarkService: DocsWatermarkService,
        @Inject(UserManagerService) private readonly _userManagerService: UserManagerService
    ) {
        super();
        this._initSubscription();
    }

    private _initSubscription(): void {
        const documents = this._context.mainComponent as Documents | null;
        if (!documents) return;

        this.disposeWithMe(
            documents.pageBackgroundRender$.subscribe((cfg: IPageRenderConfig) => {
                const items: IWatermarkConfigWithType[] = [
                    ...this._watermarkService.getForHeader(cfg.page.headerId),
                    ...this._watermarkService.getForFooter(cfg.page.footerId),
                ];
                if (items.length === 0) return;
                this._draw(cfg, items);
            })
        );

        this.disposeWithMe(
            this._watermarkService.resource$.subscribe((resource) => {
                this._images.clear();
                if (!resource) {
                    this._context.mainComponent?.makeDirty();
                    return;
                }
                const visit = (lists: Record<string, IWatermarkConfigWithType[]> | undefined) => {
                    if (!lists) return;
                    for (const list of Object.values(lists)) {
                        for (const item of list) {
                            if (item.type === IWatermarkTypeEnum.Image && item.config.image?.url) {
                                const url = item.config.image.url;
                                if (this._images.has(url)) continue;
                                const img = new Image();
                                img.src = url;
                                img.onload = () => this._context.mainComponent?.makeDirty();
                                this._images.set(url, img);
                            }
                        }
                    }
                };
                visit(resource.byHeader);
                visit(resource.byFooter);
                this._context.mainComponent?.makeDirty();
            })
        );
    }

    private _draw(cfg: IPageRenderConfig, items: IWatermarkConfigWithType[]): void {
        const { page, pageLeft, pageTop, ctx } = cfg;
        ctx.save();
        ctx.translate(pageLeft, pageTop);
        for (const item of items) {
            const user: Nullable<IUser> = item.type === IWatermarkTypeEnum.UserInfo
                ? this._userManagerService.getCurrentUser()
                : null;
            const image = item.type === IWatermarkTypeEnum.Image && item.config.image?.url
                ? this._images.get(item.config.image.url) ?? null
                : null;
            renderWatermarkOnPage(
                ctx,
                item,
                { width: page.pageWidth, height: page.pageHeight },
                image,
                user
            );
        }
        ctx.restore();
    }
}
