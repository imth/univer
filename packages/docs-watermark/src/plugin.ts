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

import type { Dependency } from '@univerjs/core';
import { Inject, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import pkg from '../package.json';
import { DOCS_WATERMARK_PLUGIN_NAME } from './common/const';
import { DocsWatermarkResourceController } from './controllers/docs-watermark-resource.controller';
import { DocsWatermarkRenderController } from './controllers/render-controllers/docs-watermark.render-controller';
import { DocsWatermarkService } from './services/docs-watermark.service';

export class UniverDocsWatermarkPlugin extends Plugin {
    static override pluginName = DOCS_WATERMARK_PLUGIN_NAME;
    static override packageName = pkg.name;
    static override version = pkg.version;
    static override type = UniverInstanceType.UNIVER_DOC;

    constructor(
        _config: unknown,
        @Inject(Injector) protected _injector: Injector,
        @IRenderManagerService private readonly _renderManagerSrv: IRenderManagerService
    ) {
        super();
    }

    override onStarting(): void {
        ([
            [DocsWatermarkResourceController],
        ] as Dependency[]).forEach((dep) => {
            this._injector.add(dep);
        });
    }

    override onRendered(): void {
        this._initRenderModule();
        // Force-instantiate the resource controller so its registration
        // runs before any IDocumentData with watermark resources is loaded.
        this._injector.get(DocsWatermarkResourceController);
    }

    private _initRenderModule(): void {
        ([
            [DocsWatermarkService],
            [DocsWatermarkRenderController],
        ] as Dependency[]).forEach((dep) => {
            this._renderManagerSrv.registerRenderModule(UniverInstanceType.UNIVER_DOC, dep);
        });
    }
}
