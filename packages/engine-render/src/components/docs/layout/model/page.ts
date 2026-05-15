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

import type { ITable, Nullable } from '@univerjs/core';
import type {
    IDocumentSkeletonHeaderFooter,
    IDocumentSkeletonPage,
    ISkeletonResourceReference,
} from '../../../../basics/i-document-skeleton-cached';
import type { ISectionBreakConfig } from '../../../../basics/interfaces';
import type { DataStreamTreeNode } from '../../view-model/data-stream-tree-node';
import type { DocumentViewModel } from '../../view-model/document-view-model';
import type { ILayoutContext } from '../tools';
import { BooleanNumber, PageOrientType } from '@univerjs/core';
import { BreakType, DocumentSkeletonPageType } from '../../../../basics/i-document-skeleton-cached';
import { dealWithSection } from '../block/section';
import { resetContext, updateBlockIndex, updateInlineDrawingCoordsAndBorder } from '../tools';
import { createSkeletonSection } from './section';

function getHeaderFooterMaxHeight(pageHeight: number) {
    return (pageHeight - 100) / 2;
}

// 新增数据结构框架
// 判断奇数和偶数页码
export function createSkeletonPage(
    ctx: ILayoutContext,
    sectionBreakConfig: ISectionBreakConfig,
    skeletonResourceReference: ISkeletonResourceReference,
    pageNumber = 1,
    breakType = BreakType.SECTION
): IDocumentSkeletonPage {
    const page: IDocumentSkeletonPage = _getNullPage();

    const {
        pageNumberStart = 1,
        pageSize = { width: Number.POSITIVE_INFINITY, height: Number.POSITIVE_INFINITY },
        pageOrient = PageOrientType.PORTRAIT,
        headerIds = {},
        footerIds = {},
        useFirstPageHeaderFooter,
        evenAndOddHeaders,
        footerTreeMap,
        headerTreeMap,
        columnProperties = [],
        columnSeparatorType,
        marginTop = 0,
        marginBottom = 0,
        marginHeader: _marginHeader = 0,
        marginFooter: _marginFooter = 0,
        marginLeft = 0,
        marginRight = 0,
        renderConfig = {},
    } = sectionBreakConfig;

    const { skeHeaders, skeFooters } = skeletonResourceReference;

    const { width: pageWidth = Number.POSITIVE_INFINITY, height: pageHeight = Number.POSITIVE_INFINITY } = pageSize;

    page.pageNumber = pageNumber;
    page.pageNumberStart = pageNumberStart;
    page.renderConfig = renderConfig;
    page.marginLeft = marginLeft;
    page.marginRight = marginRight;
    page.breakType = breakType;
    page.pageWidth = pageWidth;
    page.width = 0;
    page.pageHeight = pageHeight;
    page.height = 0;
    page.pageOrient = pageOrient;

    const { defaultHeaderId, evenPageHeaderId, firstPageHeaderId } = headerIds;
    const { defaultFooterId, evenPageFooterId, firstPageFooterId } = footerIds;

    let headerId = defaultHeaderId ?? '';
    let footerId = defaultFooterId ?? '';
    // Word's <w:titlePg/> is per-section: the "first page" header/footer applies to
    // the first page of EACH section, not just the first page of the document.
    // A page created via a section break has breakType === SECTION; an overflow
    // continuation page has breakType === PAGE.
    const isSectionFirstPage = breakType === BreakType.SECTION;
    if (isSectionFirstPage && useFirstPageHeaderFooter === BooleanNumber.TRUE) {
        headerId = firstPageHeaderId ?? '';
        footerId = firstPageFooterId ?? '';
    } else if (pageNumber % 2 === 0 && evenAndOddHeaders === BooleanNumber.TRUE) {
        headerId = evenPageHeaderId ?? '';
        footerId = evenPageFooterId ?? '';
    }

    let header: Nullable<IDocumentSkeletonHeaderFooter>;
    let footer: Nullable<IDocumentSkeletonHeaderFooter>;
    if (headerId) {
        if (skeHeaders.get(headerId)?.has(pageWidth)) {
            header = skeHeaders.get(headerId)?.get(pageWidth);
        } else if (headerTreeMap && headerTreeMap.has(headerId)) {
            header = _createSkeletonHeaderFooter(
                ctx,
                headerTreeMap.get(headerId)!,
                sectionBreakConfig,
                skeletonResourceReference,
                headerId,
                true
            );

            // Reuse the existing inner map: portrait and landscape sections share the
            // same headerId but have different pageWidths. Replacing the map with
            // `new Map([[pageWidth, header]])` would wipe the other orientation's
            // cached entry on every transition.
            const headerWidthMap = skeHeaders.get(headerId) ?? new Map();
            headerWidthMap.set(pageWidth, header);
            skeHeaders.set(headerId, headerWidthMap);
        }
        page.headerId = headerId;
    }

    if (footerId) {
        if (skeFooters.get(footerId)?.has(pageWidth)) {
            footer = skeFooters.get(footerId)?.get(pageWidth);
        } else if (footerTreeMap && footerTreeMap.has(footerId)) {
            footer = _createSkeletonHeaderFooter(
                ctx,
                footerTreeMap.get(footerId)!,
                sectionBreakConfig,
                skeletonResourceReference,
                footerId,
                false
            );

            // Same orientation-cache rationale as headers above.
            const footerWidthMap = skeFooters.get(footerId) ?? new Map();
            footerWidthMap.set(pageWidth, footer);
            skeFooters.set(footerId, footerWidthMap);
        }
        page.footerId = footerId;
    }

    page.originMarginTop = marginTop;
    page.originMarginBottom = marginBottom;
    page.marginTop = _getVerticalMargin(marginTop, header, pageHeight);
    page.marginBottom = _getVerticalMargin(marginBottom, footer, pageHeight);

    const sections = page.sections;
    const lastSection = sections[sections.length - 1];
    const { marginTop: curPageMT, marginBottom: curPageMB, marginLeft: curPageML, marginRight: curPageMR } = page;
    const pageContentWidth = pageWidth - curPageML - curPageMR;
    const pageContentHeight = pageHeight - curPageMT - curPageMB;
    let lastSectionBottom = 0;
    if (lastSection) {
        lastSectionBottom = lastSection.top + lastSection.height;
    }

    const newSection = createSkeletonSection(
        columnProperties,
        columnSeparatorType,
        lastSectionBottom,
        0,
        pageContentWidth,
        pageContentHeight - lastSectionBottom
    );
    newSection.parent = page;
    sections.push(newSection);

    return page;
}

function _getNullPage(
    type = DocumentSkeletonPageType.BODY,
    segmentId = ''
): IDocumentSkeletonPage {
    return {
        sections: [],
        headerId: '',
        footerId: '',
        // page
        pageWidth: 0,
        pageHeight: 0,
        pageOrient: PageOrientType.PORTRAIT,
        pageNumber: 1,
        pageNumberStart: 1,
        verticalAlign: false,
        angle: 0,
        width: 0,
        height: 0,
        // Only use in cell.
        left: 0,
        marginLeft: 0,
        marginRight: 0,
        originMarginTop: 0,
        marginTop: 0,
        originMarginBottom: 0,
        marginBottom: 0,
        breakType: BreakType.SECTION,
        st: 0,
        ed: 0,
        skeDrawings: new Map(),
        skeTables: new Map(),
        type,
        segmentId,
    };
}

function _createSkeletonHeaderFooter(
    ctx: ILayoutContext,
    headerOrFooterViewModel: DocumentViewModel,
    sectionBreakConfig: ISectionBreakConfig,
    skeletonResourceReference: ISkeletonResourceReference,
    segmentId: string,
    isHeader = true,
    areaPage: Nullable<IDocumentSkeletonHeaderFooter>,
    count = 0
): IDocumentSkeletonHeaderFooter {
    const {
        lists,
        footerTreeMap,
        headerTreeMap,
        localeService,
        pageSize,
        drawings,
        marginLeft = 0,
        marginRight = 0,
        marginHeader = 0,
        marginFooter = 0,
    } = sectionBreakConfig;
    const pageWidth = pageSize?.width || Number.POSITIVE_INFINITY;
    const pageHeight = pageSize?.height || Number.POSITIVE_INFINITY;
    const headerFooterConfig: ISectionBreakConfig = {
        lists,
        footerTreeMap,
        headerTreeMap,
        pageSize: {
            width: pageWidth - marginLeft - marginRight,
            height: getHeaderFooterMaxHeight(pageHeight) - (isHeader ? marginHeader : marginFooter) - 5,
        },
        localeService,
        drawings,
    };

    if (areaPage == null) {
        areaPage = createSkeletonPage(ctx, headerFooterConfig, skeletonResourceReference);
        areaPage.type = isHeader ? DocumentSkeletonPageType.HEADER : DocumentSkeletonPageType.FOOTER;
        areaPage.segmentId = segmentId;
    }
    const layoutAnchor = ctx.layoutStartPointer[segmentId];
    // Reset layoutStartPointer.
    ctx.layoutStartPointer[segmentId] = null;

    const page = dealWithSection(
        ctx,
        headerOrFooterViewModel,
        headerOrFooterViewModel.getChildren()[0],
        areaPage,
        headerFooterConfig,
        layoutAnchor
    ).pages[0];

    if (ctx.isDirty && count < 10) {
        count++;
        resetContext(ctx);

        return _createSkeletonHeaderFooter(
            ctx,
            headerOrFooterViewModel,
            sectionBreakConfig,
            skeletonResourceReference,
            segmentId,
            isHeader,
            areaPage,
            count
        );
    }

    updateBlockIndex([page]);

    if (isHeader) {
        Object.assign(page, {
            marginTop: marginHeader,
            marginBottom: 5, // Space between header and content
        });
    } else {
        Object.assign(page, {
            marginTop: 5, // Space between content and footer
            marginBottom: marginFooter,
        });
    }

    return page;
}

export function createNullCellPage(
    ctx: ILayoutContext,
    sectionBreakConfig: ISectionBreakConfig,
    tableConfig: ITable,
    row: number,
    col: number,
    availableHeight: number = Number.POSITIVE_INFINITY,
    maxCellPageHeight: number = Number.POSITIVE_INFINITY,
    // Optional cell-array index. With vMerge / gridSpan, `col` is the
    // grid column (which drives width sizing) but the source cellConfig
    // lives in `tableCells[cellIdx]`. When omitted, fall back to `col`
    // for legacy callers that didn't distinguish the two.
    cellIdx?: number
) {
    const { lists, footerTreeMap, headerTreeMap, localeService, drawings } = sectionBreakConfig;
    const { skeletonResourceReference } = ctx;
    const { cellMargin, tableRows, tableColumns, tableId } = tableConfig;
    const cellConfig = tableRows[row].tableCells[cellIdx ?? col];

    const {
        start = { v: 10 },
        end = { v: 10 },
        top = { v: 5 },
        bottom = { v: 5 },
    } = cellConfig.margin ?? cellMargin ?? {};
    // OOXML w:gridSpan ≥ 2 makes a cell span multiple grid columns; its
    // width is the sum of the spanned column widths. With span=1 (default)
    // this collapses to the original `tableColumns[col].size.width.v`.
    const columnSpan = Math.max(1, cellConfig.columnSpan ?? 1);
    let pageWidth = 0;
    for (let i = 0; i < columnSpan && col + i < tableColumns.length; i++) {
        pageWidth += tableColumns[col + i].size.width.v;
    }
    const pageHeight = maxCellPageHeight;

    const cellSectionBreakConfig: ISectionBreakConfig = {
        lists,
        footerTreeMap,
        headerTreeMap,
        pageSize: {
            width: pageWidth,
            height: pageHeight,
        },
        marginTop: top.v,
        marginBottom: bottom.v,
        marginLeft: start.v,
        marginRight: end.v,
        localeService,
        drawings,
    };

    const areaPage = createSkeletonPage(
        ctx,
        // Set first page height to availableHeight.
        Object.assign({}, cellSectionBreakConfig, {
            pageSize: {
                width: pageWidth,
                height: Number.isFinite(availableHeight) ? availableHeight : pageHeight,
            },
        }),
        skeletonResourceReference
    );
    areaPage.type = DocumentSkeletonPageType.CELL;
    areaPage.segmentId = tableId;

    return {
        page: areaPage,
        sectionBreakConfig: cellSectionBreakConfig,
    };
}

export function createSkeletonCellPages(
    ctx: ILayoutContext,
    viewModel: DocumentViewModel,
    cellNode: DataStreamTreeNode,
    sectionBreakConfig: ISectionBreakConfig,
    tableConfig: ITable,
    row: number,
    col: number,
    availableHeight: number = Number.POSITIVE_INFINITY,
    maxCellPageHeight: number = Number.POSITIVE_INFINITY,
    cellIdx?: number
) {
    // Table cell only has one section.
    const sectionNode = cellNode.children[0];

    const { page: areaPage, sectionBreakConfig: cellSectionBreakConfig } = createNullCellPage(
        ctx,
        sectionBreakConfig,
        tableConfig,
        row,
        col,
        availableHeight,
        maxCellPageHeight,
        cellIdx
    );

    const { pages } = dealWithSection(
        ctx,
        viewModel,
        sectionNode,
        areaPage,
        cellSectionBreakConfig
    );

    for (const p of pages) {
        p.type = DocumentSkeletonPageType.CELL;
        p.segmentId = tableConfig.tableId;
    }

    updateBlockIndex(pages, cellNode.startIndex);

    updateInlineDrawingCoordsAndBorder(ctx, pages);

    return pages;
}

function _getVerticalMargin(
    marginTB: number,
    headerOrFooter: Nullable<IDocumentSkeletonHeaderFooter>,
    pageHeight: number
) {
    if (!headerOrFooter || headerOrFooter.sections[0].columns[0].lines.length === 0) {
        return marginTB;
    }

    const HeaderFooterPageHeight = headerOrFooter.height + headerOrFooter.marginTop + headerOrFooter.marginBottom;
    // Content height should be at least 100px.
    const maxMargin = getHeaderFooterMaxHeight(pageHeight);

    return Math.min(maxMargin, Math.max(marginTB, HeaderFooterPageHeight));
}

/**
 * Stage C — lay out a textbox body inside the drawing's content rect, mirroring
 * the header/footer pattern in `_createSkeletonHeaderFooter` above. The
 * difference is the layout area: `_createSkeletonHeaderFooter` uses page
 * margins; this function uses the drawing's `width × height` minus `bodyPr`
 * insets.
 *
 * `bodyPr` insets are pre-converted to px by the importer
 * (parse-drawing.ts:266 with EMU_PER_PX = 9525). When the wire `<wps:bodyPr>`
 * element is absent the importer leaves bodyPr undefined, so we apply Word's
 * defaults here: 91440 EMU (0.1 in) lIns/rIns and 45720 EMU (0.05 in)
 * tIns/bIns, both at 96 DPI.
 *
 * Reuses `DocumentSkeletonPageType.TEXT_BOX` (added in Stage C) so downstream
 * layout / hit-test code that branches on `page.type === HEADER | FOOTER`
 * doesn't accidentally process textbox sub-skeletons.
 */
function _createSkeletonTextBox(
    ctx: ILayoutContext,
    textBoxViewModel: DocumentViewModel,
    sectionBreakConfig: ISectionBreakConfig,
    skeletonResourceReference: ISkeletonResourceReference,
    drawingId: string,
    textBoxWidth: number,
    textBoxHeight: number,
    bodyPr: { lIns?: number; tIns?: number; rIns?: number; bIns?: number } | undefined
): IDocumentSkeletonHeaderFooter {
    const { lists, footerTreeMap, headerTreeMap, textBoxTreeMap, localeService, drawings } = sectionBreakConfig;

    const lIns = bodyPr?.lIns ?? 9.6;
    const rIns = bodyPr?.rIns ?? 9.6;
    const tIns = bodyPr?.tIns ?? 4.8;
    const bIns = bodyPr?.bIns ?? 4.8;

    const innerWidth = Math.max(0, textBoxWidth - lIns - rIns);
    const innerHeight = Math.max(0, textBoxHeight - tIns - bIns);

    const textBoxConfig: ISectionBreakConfig = {
        lists,
        footerTreeMap,
        headerTreeMap,
        textBoxTreeMap,
        pageSize: { width: innerWidth, height: innerHeight },
        localeService,
        drawings,
    };

    const areaPage = createSkeletonPage(ctx, textBoxConfig, skeletonResourceReference);
    areaPage.type = DocumentSkeletonPageType.TEXT_BOX;
    areaPage.segmentId = drawingId;

    ctx.layoutStartPointer[drawingId] = ctx.layoutStartPointer[drawingId] ?? null;
    const layoutAnchor = ctx.layoutStartPointer[drawingId];
    ctx.layoutStartPointer[drawingId] = null;

    const firstSection = textBoxViewModel.getChildren()[0];
    if (firstSection == null) {
        areaPage.marginTop = tIns;
        areaPage.marginBottom = bIns;
        areaPage.marginLeft = lIns;
        areaPage.marginRight = rIns;
        return areaPage;
    }

    const page = dealWithSection(
        ctx,
        textBoxViewModel,
        firstSection,
        areaPage,
        textBoxConfig,
        layoutAnchor
    ).pages[0];

    updateBlockIndex([page]);
    Object.assign(page, { marginTop: tIns, marginBottom: bIns, marginLeft: lIns, marginRight: rIns });

    return page;
}

/**
 * Stage C — populate `bodySke` on every textbox drawing in `parentPage.skeDrawings`.
 * Idempotent: skips drawings without `textBoxContent` (image-only) and skips
 * drawings whose sub-view-model isn't in `textBoxTreeMap` (feature off).
 *
 * Called from the post-layout finalisation step in `doc-skeleton.ts` after
 * `page.skeDrawings` has been populated by linebreaking.
 */
export function populateTextBoxBodies(
    ctx: ILayoutContext,
    parentPage: IDocumentSkeletonPage,
    sectionBreakConfig: ISectionBreakConfig,
    skeletonResourceReference: ISkeletonResourceReference
): void {
    const { textBoxTreeMap } = sectionBreakConfig;
    if (!textBoxTreeMap || !parentPage.skeDrawings || parentPage.skeDrawings.size === 0) return;

    for (const [drawingId, skeDrawing] of parentPage.skeDrawings) {
        const textBoxVm = textBoxTreeMap.get(drawingId);
        if (!textBoxVm) continue;

        skeDrawing.bodySke = _createSkeletonTextBox(
            ctx,
            textBoxVm,
            sectionBreakConfig,
            skeletonResourceReference,
            drawingId,
            skeDrawing.width,
            skeDrawing.height,
            skeDrawing.drawingOrigin.shapeProperties?.bodyPr
        );
    }
}
