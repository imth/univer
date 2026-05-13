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

import type { IDocumentStyle, ISectionBreak } from '@univerjs/core';
import type { XmlNode } from './xml';
import { ColumnSeparatorType } from '@univerjs/core';
import { dxaToPx as dxaToPxRaw } from '../units';
import { findChild, findChildren, nodeAttrs } from './xml';

/** Default A4 page in CSS pixels (A4 is 595pt × 842pt → 793.7px × 1122.7px). */
const DEFAULT_A4: { width: number; height: number } = { width: 793.7, height: 1122.7 };

const PAGE_ORIENT_PORTRAIT = 0;
const PAGE_ORIENT_LANDSCAPE = 1;

/**
 * DocumentFlavor.TRADITIONAL — Word-style paginated layout.
 * Without this, Univer renders MODERN/continuous flow with no page breaks.
 */
const DOCUMENT_FLAVOR_TRADITIONAL = 1;

/** GridType — mirrors Univer's enum (default=0, lines=1, linesAndChars=2, snapToChars=3). */
const GRID_TYPE_BY_NAME: Record<string, number> = {
    default: 0,
    lines: 1,
    linesAndChars: 2,
    snapToChars: 3,
};

export interface ParsedSection {
    documentStyle: IDocumentStyle;
  /** Fields to merge onto every body.sectionBreaks[] entry (linePitch, gridType, etc). */
    sectionBreakDefaults: Partial<ISectionBreak>;
  /**
   * Header/footer references collected from <w:headerReference>/<w:footerReference>.
   * Maps each type to the relationship id; the caller resolves to a header/footer file
   * via document rels.
   */
    headerRefs: { default?: string; first?: string; even?: string };
    footerRefs: { default?: string; first?: string; even?: string };
  /** <w:titlePg/> on the section — first page uses its own header/footer. */
    titlePage: boolean;
  /**
   * OOXML `<w:type w:val="continuous|nextPage|evenPage|oddPage|nextColumn">`
   * if present. Mapped to Univer's SectionType enum at assemble time.
   */
    sectionTypeRaw?: string;
  /**
   * rId → stem header IDs after `parseHF` has run. Filled in by docx-to-univer.ts
   * (only it has access to the document rels map). Empty until then.
   */
    resolvedHeaderIds?: { default?: string; first?: string; even?: string };
    resolvedFooterIds?: { default?: string; first?: string; even?: string };
}

function dxaAttrToPx(value: string | undefined): number | undefined {
    if (value === undefined) return undefined;
    const n = Number(value);
    if (!Number.isFinite(n)) return undefined;
    return dxaToPxRaw(n);
}

/**
 * Build IDocumentStyle from the body's <w:sectPr>.
 * If sectPr is missing, returns documentStyle with A4 defaults so Univer
 * still paginates instead of rendering as a continuous flow.
 */
export function parseSectionProperties(body: XmlNode | undefined): ParsedSection {
    const sectPr = body ? findChild(body, 'w:sectPr') : undefined;
    if (!sectPr) {
        return {
            documentStyle: { pageSize: { ...DEFAULT_A4 }, documentFlavor: DOCUMENT_FLAVOR_TRADITIONAL },
            sectionBreakDefaults: {},
            headerRefs: {},
            footerRefs: {},
            titlePage: false,
        };
    }
    return parseSectionPropertiesFromNode(sectPr);
}

/**
 * Parse a single <w:sectPr> XML node into a ParsedSection. Used for both the
 * body-end sectPr (via `parseSectionProperties`) and inline `<w:pPr><w:sectPr>`
 * elements that terminate a section mid-document. The schema is identical in
 * both positions.
 */
export function parseSectionPropertiesFromNode(sectPr: XmlNode): ParsedSection {
    const style: IDocumentStyle = { documentFlavor: DOCUMENT_FLAVOR_TRADITIONAL };
    const sectionBreakDefaults: Partial<ISectionBreak> = {};
    const headerRefs: ParsedSection['headerRefs'] = {};
    const footerRefs: ParsedSection['footerRefs'] = {};

  // <w:headerReference w:type="default|first|even" r:id="rId8"/>
    for (const ref of findChildren(sectPr, 'w:headerReference')) {
        const a = nodeAttrs(ref);
        const type = (a['@_w:type'] as string | undefined) ?? 'default';
        const rId = a['@_r:id'] as string | undefined;
        if (rId && (type === 'default' || type === 'first' || type === 'even')) headerRefs[type] = rId;
    }
    for (const ref of findChildren(sectPr, 'w:footerReference')) {
        const a = nodeAttrs(ref);
        const type = (a['@_w:type'] as string | undefined) ?? 'default';
        const rId = a['@_r:id'] as string | undefined;
        if (rId && (type === 'default' || type === 'first' || type === 'even')) footerRefs[type] = rId;
    }

    const titlePage = findChild(sectPr, 'w:titlePg') !== undefined;

    const typeNode = findChild(sectPr, 'w:type');
    const sectionTypeRaw = typeNode ? (nodeAttrs(typeNode)['@_w:val'] as string | undefined) : undefined;

    const pgSz = findChild(sectPr, 'w:pgSz');
    if (pgSz) {
        const attrs = nodeAttrs(pgSz);
        const width = dxaAttrToPx(attrs['@_w:w']);
        const height = dxaAttrToPx(attrs['@_w:h']);
        style.pageSize = {
            width: width ?? DEFAULT_A4.width,
            height: height ?? DEFAULT_A4.height,
        };
        if (attrs['@_w:orient'] === 'landscape') {
            style.pageOrient = PAGE_ORIENT_LANDSCAPE;
        } else if (attrs['@_w:orient'] === 'portrait') {
            style.pageOrient = PAGE_ORIENT_PORTRAIT;
        }
    } else {
        style.pageSize = { ...DEFAULT_A4 };
    }

    const pgMar = findChild(sectPr, 'w:pgMar');
    if (pgMar) {
        const attrs = nodeAttrs(pgMar);
        const top = dxaAttrToPx(attrs['@_w:top']);
        const right = dxaAttrToPx(attrs['@_w:right']);
        const bottom = dxaAttrToPx(attrs['@_w:bottom']);
        const left = dxaAttrToPx(attrs['@_w:left']);
        const header = dxaAttrToPx(attrs['@_w:header']);
        const footer = dxaAttrToPx(attrs['@_w:footer']);
        if (top !== undefined) style.marginTop = top;
        if (right !== undefined) style.marginRight = right;
        if (bottom !== undefined) style.marginBottom = bottom;
        if (left !== undefined) style.marginLeft = left;
        if (header !== undefined) style.marginHeader = header;
        if (footer !== undefined) style.marginFooter = footer;
    }

  // <w:docGrid w:type="lines" w:linePitch="312"/>
  // linePitch is in dxa (CSS px = dxa / 15). gridType maps to Univer's enum.
  // These belong on each body.sectionBreaks[] entry (ISectionBreakBase),
  // NOT on documentStyle. Without them, Univer falls back to linePitch=15.6
  // and 1.5x line spacing (for example) won't match what Word renders.
    const docGrid = findChild(sectPr, 'w:docGrid');
    if (docGrid) {
        const attrs = nodeAttrs(docGrid);
        const linePitch = dxaAttrToPx(attrs['@_w:linePitch']);
        if (linePitch !== undefined) sectionBreakDefaults.linePitch = linePitch;
        const typeName = attrs['@_w:type'] as string | undefined;
        if (typeName !== undefined && typeName in GRID_TYPE_BY_NAME) {
            sectionBreakDefaults.gridType = GRID_TYPE_BY_NAME[typeName];
        }
    }

  // <w:cols w:num="2" w:space="720" w:sep="true" w:equalWidth="false">
  //   <w:col w:w="3960" w:space="720"/>
  //   <w:col w:w="3960"/>
  // </w:cols>
  // OOXML 17.6.4. Width / space units are dxa.
  // - When `equalWidth` is true (or omitted with no <w:col> children), split the
  //   page content width evenly: colWidth = (contentWidth - totalGutter) / num.
  // - When false, use explicit `<w:col>` widths; gutter comes from each col's
  //   `w:space` (last col has no gutter).
  // - `w:sep="true"|"1"` draws a vertical line between columns; default = no separator.
    const cols = findChild(sectPr, 'w:cols');
    if (cols) {
        const a = nodeAttrs(cols);
        const numAttr = Number(a['@_w:num']);
        const num = Number.isFinite(numAttr) && numAttr > 0 ? Math.floor(numAttr) : 1;
        const defaultSpace = dxaAttrToPx(a['@_w:space']) ?? 0;
        const sepRaw = a['@_w:sep'];
        const sep = sepRaw === 'true' || sepRaw === '1';
        const equalWidthRaw = a['@_w:equalWidth'];
        const equalWidth = equalWidthRaw === undefined ? true : !(equalWidthRaw === 'false' || equalWidthRaw === '0');

        const colNodes = findChildren(cols, 'w:col');

        const properties: { width: number; paddingEnd: number }[] = [];
        if (!equalWidth && colNodes.length > 0) {
            for (let i = 0; i < colNodes.length; i++) {
                const ca = nodeAttrs(colNodes[i]);
                const width = dxaAttrToPx(ca['@_w:w']) ?? 0;
                // Last column has no trailing gutter in Word — w:space on the last
                // <w:col> is ignored.
                const padding = i === colNodes.length - 1 ? 0 : (dxaAttrToPx(ca['@_w:space']) ?? defaultSpace);
                properties.push({ width, paddingEnd: padding });
            }
        } else if (num > 1) {
            const pageW = style.pageSize?.width ?? DEFAULT_A4.width;
            const marginL = style.marginLeft ?? 0;
            const marginR = style.marginRight ?? 0;
            const contentWidth = Math.max(0, pageW - marginL - marginR);
            const totalGutter = defaultSpace * (num - 1);
            const each = (contentWidth - totalGutter) / num;
            for (let i = 0; i < num; i++) {
                properties.push({ width: each, paddingEnd: i === num - 1 ? 0 : defaultSpace });
            }
        }

        if (properties.length > 1) {
            sectionBreakDefaults.columnProperties = properties;
            sectionBreakDefaults.columnSeparatorType = sep
                ? ColumnSeparatorType.BETWEEN_EACH_COLUMN
                : ColumnSeparatorType.NONE;
        }
    }

    return { documentStyle: style, sectionBreakDefaults, headerRefs, footerRefs, titlePage, sectionTypeRaw };
}

/**
 * Parse word/settings.xml for the small subset we care about (so far just
 * <w:evenAndOddHeaders/>, which switches even-page header/footer on).
 */
export function parseEvenAndOddHeaders(settingsXml: string | undefined): boolean {
    if (!settingsXml) return false;
  // Minimal regex-based check — settings.xml is tiny and we only need this one toggle.
  // The element is a present/absent toggle (no w:val=false convention in practice).
    return /<w:evenAndOddHeaders\b/.test(settingsXml);
}
