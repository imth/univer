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

export const DOCS_WATERMARK_PLUGIN_NAME = 'UNIVER_DOCS_WATERMARK_PLUGIN';

// Resource key stored on IDocumentData.resources. Must match the
// `DOC_*_PLUGIN` pattern enforced by IResourceManagerService for doc
// businesses. This string is shared with @univerjs/docs-exchange so
// imported DOCX watermarks land in the right slot.
export const DOC_WATERMARK_PLUGIN = 'DOC_WATERMARK_PLUGIN';

export const DOCS_WATERMARK_RENDER_LAYER_INDEX = 10;
