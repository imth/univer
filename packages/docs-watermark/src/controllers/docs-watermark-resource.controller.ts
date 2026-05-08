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

import type { IDocsWatermarkResource } from '../services/docs-watermark.service';
import { Disposable, IResourceManagerService, toDisposable, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { DOC_WATERMARK_PLUGIN } from '../common/const';
import { DocsWatermarkService } from '../services/docs-watermark.service';

// Bridges IDocumentData.resources[DOC_WATERMARK_PLUGIN] → per-unit
// DocsWatermarkService. ResourceManagerService is global, but the service
// itself lives in each render unit's injector, so we route by unitId via
// IRenderManagerService.
//
// Resource onLoad fires from getTypeOfUnitAdded$ subscribers in
// ResourceLoaderService — this can run BEFORE the doc's render unit is
// created (the render is created in a sibling subscription whose order is
// not guaranteed). When the render isn't ready yet, we stash the value
// and flush it from created$ once the matching render appears.
export class DocsWatermarkResourceController extends Disposable {
    private readonly _pendingByUnit = new Map<string, IDocsWatermarkResource | null>();

    constructor(
        @IResourceManagerService private readonly _resourceManagerService: IResourceManagerService,
        @IRenderManagerService private readonly _renderManagerService: IRenderManagerService
    ) {
        super();
        this._register();
        this._initFlushOnRenderCreated();
    }

    private _getService(unitId: string): DocsWatermarkService | null {
        const render = this._renderManagerService.getRenderById(unitId);
        if (!render) return null;
        try {
            return render.with(DocsWatermarkService);
        } catch {
            return null;
        }
    }

    private _push(unitId: string, value: IDocsWatermarkResource | null): void {
        const svc = this._getService(unitId);
        if (svc) {
            svc.setResource(value ?? null);
        } else {
            this._pendingByUnit.set(unitId, value);
        }
    }

    private _initFlushOnRenderCreated(): void {
        this.disposeWithMe(
            this._renderManagerService.created$.subscribe((render) => {
                const unitId = render.unitId;
                if (!this._pendingByUnit.has(unitId)) return;
                const value = this._pendingByUnit.get(unitId) ?? null;
                this._pendingByUnit.delete(unitId);
                const svc = this._getService(unitId);
                svc?.setResource(value ?? null);
            })
        );
        this.disposeWithMe(toDisposable(() => this._pendingByUnit.clear()));
    }

    private _register(): void {
        this.disposeWithMe(
            this._resourceManagerService.registerPluginResource<IDocsWatermarkResource>({
                pluginName: DOC_WATERMARK_PLUGIN,
                businesses: [UniverInstanceType.UNIVER_DOC],
                toJson: (_unitId, model) => JSON.stringify(model),
                parseJson: (json) => JSON.parse(json) as IDocsWatermarkResource,
                onLoad: (unitId, value) => {
                    this._push(unitId, value);
                },
                onUnLoad: (unitId) => {
                    this._pendingByUnit.delete(unitId);
                    this._getService(unitId)?.setResource(null);
                },
            })
        );
    }
}
