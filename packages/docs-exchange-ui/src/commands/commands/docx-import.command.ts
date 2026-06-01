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

import type { DocumentDataModel, IAccessor, IDocumentData } from '@univerjs/core';
import { CommandType, ILogService, IUniverInstanceService, UniverInstanceType, UserManagerService } from '@univerjs/core';
import { docxToUniverData } from '@univerjs/docs-exchange';

// Must match the resource name docx-to-univer emits for thread comments
// (inlined there to avoid a @univerjs/thread-comment dependency).
const THREAD_COMMENT_RESOURCE = 'SHEET_UNIVER_THREAD_COMMENT_PLUGIN';

interface IImportedComment { personId?: string; children?: IImportedComment[] }

// Imported comments carry the author display name as `personId`. The thread-
// comment UI resolves author names via UserManagerService.getUser(personId), so
// register each distinct author as a user (id = name) — otherwise the panel
// shows no author. Runtime-only: the importer snapshot can't touch services.
function registerCommentAuthors(accessor: IAccessor, data: IDocumentData): void {
    const res = (data.resources ?? []).find((r) => r.name === THREAD_COMMENT_RESOURCE);
    if (!res) return;
    let parsed: Record<string, IImportedComment[]>;
    try {
        parsed = JSON.parse(res.data);
    } catch {
        return;
    }
    const authors = new Set<string>();
    const collect = (c: IImportedComment) => {
        if (c.personId) authors.add(c.personId);
        c.children?.forEach(collect);
    };
    Object.values(parsed).forEach((list) => list.forEach(collect));
    if (authors.size === 0) return;
    const userManager = accessor.get(UserManagerService);
    authors.forEach((name) => {
        if (!userManager.getUser(name)) {
            userManager.addUser({ userID: name, name, avatar: '', anonymous: false });
        }
    });
}

export interface IDocxImportCommandParams {
    /**
     * Optional pre-fetched DOCX bytes. When omitted, the command opens a
     * native file picker to obtain the file from the user.
     */
    file?: ArrayBuffer | Uint8Array;
}

async function pickDocxFile(): Promise<ArrayBuffer | null> {
    return new Promise((resolve) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        input.style.display = 'none';
        input.addEventListener('change', async () => {
            const file = input.files?.[0];
            input.remove();
            if (!file) {
                resolve(null);
                return;
            }
            resolve(await file.arrayBuffer());
        });
        input.addEventListener('cancel', () => {
            input.remove();
            resolve(null);
        });
        document.body.appendChild(input);
        input.click();
    });
}

export const DocxImportOperation = {
    id: 'docs-exchange.operation.docx-import',
    type: CommandType.OPERATION,
    handler: async (accessor: IAccessor, params?: IDocxImportCommandParams) => {
        const logService = accessor.get(ILogService);
        const instanceService = accessor.get(IUniverInstanceService);

        const bytes = params?.file ?? await pickDocxFile();
        if (!bytes) return false;

        try {
            const data = await docxToUniverData(bytes);
            // Register comment authors as users before the unit renders so the
            // thread-comment panel can resolve author display names.
            registerCommentAuthors(accessor, data);
            const previous = instanceService.getCurrentUnitOfType<DocumentDataModel>(UniverInstanceType.UNIVER_DOC);
            const unit = instanceService.createUnit<typeof data, DocumentDataModel>(
                UniverInstanceType.UNIVER_DOC,
                data
            );
            instanceService.focusUnit(unit.getUnitId());
            if (previous && previous.getUnitId() !== unit.getUnitId()) {
                instanceService.disposeUnit(previous.getUnitId());
            }
            return true;
        } catch (err) {
            logService.error('[docs-exchange-ui] DOCX import failed:', err);
            return false;
        }
    },
};
