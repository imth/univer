#!/usr/bin/env python3
"""Generate a DOCX containing every OOXML preset shape, one per cell, grouped
by category. Used to compare Univer's preset-geometry rendering against Word.

Output: packages/docs-exchange/src/__tests__/fixtures/preset-shapes-fixture.docx
(committed; checked-in fixture).

Run:
    python3 scripts/preset-fixture/generate-preset-fixture.py
"""

from __future__ import annotations

from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Cm, Pt
from lxml import etree

REPO = Path(__file__).resolve().parents[2]
OUT = (
    REPO
    / "packages"
    / "docs-exchange"
    / "src"
    / "__tests__"
    / "fixtures"
    / "preset-shapes-fixture.docx"
)

# (category title, [preset names ...]) — categorization from
# ECMA-376 / LibreOffice presetShapeDefinitions.xml.
CATEGORIES: list[tuple[str, list[str]]] = [
    (
        "01 — Basic geometric shapes",
        sorted(
            [
                "rect",
                "roundRect",
                "round1Rect",
                "round2SameRect",
                "round2DiagRect",
                "snip1Rect",
                "snip2SameRect",
                "snip2DiagRect",
                "snipRoundRect",
                "ellipse",
                "triangle",
                "rtTriangle",
                "parallelogram",
                "trapezoid",
                "diamond",
                "pentagon",
                "hexagon",
                "heptagon",
                "octagon",
                "decagon",
                "dodecagon",
                "pie",
                "pieWedge",
                "chord",
                "teardrop",
                "frame",
                "halfFrame",
                "corner",
                "diagStripe",
                "plus",
                "plaque",
                "can",
                "cube",
                "bevel",
                "donut",
                "noSmoking",
                "blockArc",
                "foldedCorner",
                "smileyFace",
                "heart",
                "lightningBolt",
                "sun",
                "moon",
                "cloud",
                "arc",
                "line",
                "lineInv",
                "irregularSeal1",
                "irregularSeal2",
                "funnel",
                "gear6",
                "gear9",
                "wave",
                "doubleWave",
                "homePlate",
                "chevron",
                "nonIsoscelesTrapezoid",
                "leftBrace",
                "rightBrace",
                "bracePair",
                "leftBracket",
                "rightBracket",
                "bracketPair",
                "cornerTabs",
                "squareTabs",
                "plaqueTabs",
                "ribbon",
                "ribbon2",
                "chartPlus",
                "chartX",
            ]
        ),
    ),
    (
        "02 — Arrows",
        sorted(
            [
                "rightArrow",
                "leftArrow",
                "upArrow",
                "downArrow",
                "leftRightArrow",
                "upDownArrow",
                "quadArrow",
                "leftRightUpArrow",
                "bentArrow",
                "uturnArrow",
                "leftUpArrow",
                "bentUpArrow",
                "curvedRightArrow",
                "curvedLeftArrow",
                "curvedUpArrow",
                "curvedDownArrow",
                "stripedRightArrow",
                "notchedRightArrow",
                "circularArrow",
                "leftCircularArrow",
                "leftRightCircularArrow",
                "swooshArrow",
            ]
        ),
    ),
    (
        "03 — Stars",
        sorted(
            [
                "star4",
                "star5",
                "star6",
                "star7",
                "star8",
                "star10",
                "star12",
                "star16",
                "star24",
                "star32",
                "chartStar",
            ]
        ),
    ),
    (
        "04 — Banners / Ribbons / Scrolls",
        sorted(
            [
                "ellipseRibbon",
                "ellipseRibbon2",
                "horizontalScroll",
                "verticalScroll",
                "leftRightRibbon",
            ]
        ),
    ),
    (
        "05 — Callouts",
        sorted(
            [
                "callout1",
                "callout2",
                "callout3",
                "accentCallout1",
                "accentCallout2",
                "accentCallout3",
                "borderCallout1",
                "borderCallout2",
                "borderCallout3",
                "accentBorderCallout1",
                "accentBorderCallout2",
                "accentBorderCallout3",
                "wedgeRectCallout",
                "wedgeRoundRectCallout",
                "wedgeEllipseCallout",
                "cloudCallout",
                "leftArrowCallout",
                "rightArrowCallout",
                "upArrowCallout",
                "downArrowCallout",
                "leftRightArrowCallout",
                "upDownArrowCallout",
                "quadArrowCallout",
            ]
        ),
    ),
    (
        "06 — Math",
        sorted(
            [
                "mathPlus",
                "mathMinus",
                "mathMultiply",
                "mathDivide",
                "mathEqual",
                "mathNotEqual",
            ]
        ),
    ),
    (
        "07 — Flowchart",
        sorted(
            [
                "flowChartProcess",
                "flowChartAlternateProcess",
                "flowChartDecision",
                "flowChartInputOutput",
                "flowChartPredefinedProcess",
                "flowChartInternalStorage",
                "flowChartDocument",
                "flowChartMultidocument",
                "flowChartTerminator",
                "flowChartPreparation",
                "flowChartManualInput",
                "flowChartManualOperation",
                "flowChartConnector",
                "flowChartOffpageConnector",
                "flowChartPunchedCard",
                "flowChartPunchedTape",
                "flowChartSummingJunction",
                "flowChartOr",
                "flowChartCollate",
                "flowChartSort",
                "flowChartExtract",
                "flowChartMerge",
                "flowChartOnlineStorage",
                "flowChartMagneticTape",
                "flowChartMagneticDisk",
                "flowChartMagneticDrum",
                "flowChartDisplay",
                "flowChartDelay",
                "flowChartOfflineStorage",
            ]
        ),
    ),
    (
        "08 — Action buttons",
        sorted(
            [
                "actionButtonBackPrevious",
                "actionButtonBeginning",
                "actionButtonBlank",
                "actionButtonDocument",
                "actionButtonEnd",
                "actionButtonForwardNext",
                "actionButtonHelp",
                "actionButtonHome",
                "actionButtonInformation",
                "actionButtonMovie",
                "actionButtonReturn",
                "actionButtonSound",
            ]
        ),
    ),
    (
        "09 — Connectors / Misc",
        sorted(
            [
                "straightConnector1",
                "bentConnector2",
                "bentConnector3",
                "bentConnector4",
                "bentConnector5",
                "curvedConnector2",
                "curvedConnector3",
                "curvedConnector4",
                "curvedConnector5",
            ]
        ),
    ),
]

# DrawingML / WordprocessingDrawing namespaces (python-docx exposes a small
# nsmap helper; we extend it for the namespaces we need below).
NSMAP = {
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
    "wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
}


def make_inline_shape(preset: str, cx_emu: int, cy_emu: int, doc_id: int) -> str:
    """Return an OOXML XML string for an inline preset shape (60×60 px).

    Uses <w:drawing> / <wp:inline> / wps:wsp so that the shape sits in line
    with the surrounding text (per cell in our table). Solid blue fill
    (#5B9BD5, Office accent 1) so colored cutouts are obvious.
    """
    return f"""
<w:drawing xmlns:w="{NSMAP["w"]}">
  <wp:inline distT="0" distB="0" distL="0" distR="0"
             xmlns:wp="{NSMAP["wp"]}"
             xmlns:a="{NSMAP["a"]}"
             xmlns:r="{NSMAP["r"]}"
             xmlns:wps="{NSMAP["wps"]}">
    <wp:extent cx="{cx_emu}" cy="{cy_emu}"/>
    <wp:effectExtent l="0" t="0" r="0" b="0"/>
    <wp:docPr id="{doc_id}" name="{preset}_{doc_id}"/>
    <wp:cNvGraphicFramePr/>
    <a:graphic>
      <a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape">
        <wps:wsp>
          <wps:cNvSpPr/>
          <wps:spPr>
            <a:xfrm>
              <a:off x="0" y="0"/>
              <a:ext cx="{cx_emu}" cy="{cy_emu}"/>
            </a:xfrm>
            <a:prstGeom prst="{preset}">
              <a:avLst/>
            </a:prstGeom>
            <a:solidFill>
              <a:srgbClr val="5B9BD5"/>
            </a:solidFill>
            <a:ln w="9525">
              <a:solidFill>
                <a:srgbClr val="2E75B6"/>
              </a:solidFill>
            </a:ln>
          </wps:spPr>
          <wps:bodyPr/>
        </wps:wsp>
      </a:graphicData>
    </a:graphic>
  </wp:inline>
</w:drawing>"""


def append_inline_drawing(cell, preset: str, doc_id: int) -> None:
    """(Unused — kept for reference; previous table-cell layout.) Append a
    centered paragraph containing one inline shape to a cell.

    Univer's docs renderer doesn't currently render inline drawings inside
    table cells (38×38 inline icons in 全格式.docx hit the same issue), so
    we emit each shape as its own top-level paragraph instead.
    """
    para = cell.paragraphs[0]
    para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = para.add_run()
    drawing_xml = make_inline_shape(preset, 60 * 9525, 60 * 9525, doc_id).strip()
    drawing_el = etree.fromstring(drawing_xml)
    run._r.append(drawing_el)

    caption = cell.add_paragraph(preset)
    caption.alignment = WD_ALIGN_PARAGRAPH.CENTER
    for run in caption.runs:
        run.font.size = Pt(8)


def main() -> None:
    doc = Document()
    # Wider margins → more cells per row.
    for section in doc.sections:
        section.left_margin = Cm(1.5)
        section.right_margin = Cm(1.5)
        section.top_margin = Cm(1.5)
        section.bottom_margin = Cm(1.5)

    doc.add_heading("OOXML preset geometry fixture", level=0)
    intro = doc.add_paragraph()
    intro.add_run(
        "Every shape supported by ECMA-376 (Office Open XML) is rendered below, "
        "grouped by category. Open this file in Word to capture a reference "
        "rendering, then import the same file in Univer to compare. All shapes "
        "use a 60×60 px box, solid Office Accent-1 blue fill, with a 1pt "
        "darker-blue outline. Each shape sits on its own line followed by the "
        "preset name — one per paragraph rather than in a table cell so that "
        "Univer's docs renderer doesn't have to handle inline drawings inside "
        "table cells (a separate, pre-existing limitation).\n"
    )

    doc_id = 1000

    for cat_title, presets in CATEGORIES:
        doc.add_heading(f"{cat_title}  ({len(presets)})", level=1)

        for preset in presets:
            para = doc.add_paragraph()
            run = para.add_run()
            drawing_xml = make_inline_shape(
                preset, 60 * 9525, 60 * 9525, doc_id
            ).strip()
            drawing_el = etree.fromstring(drawing_xml)
            run._r.append(drawing_el)
            # Two spaces, then preset name as caption, all in one paragraph
            # so the shape and label stay on the same line.
            label = para.add_run(f"  {preset}")
            label.font.size = Pt(10)
            doc_id += 1

        doc.add_paragraph()  # spacer between sections

    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc.save(str(OUT))
    total = sum(len(p) for _, p in CATEGORIES)
    print(f"Wrote {OUT} ({total} presets, {len(CATEGORIES)} categories)")


if __name__ == "__main__":
    main()
