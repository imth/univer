# scripts/merged-cells-fixture/generate-merged-cells-fixture.py
"""Generate a tiny DOCX exercising table merged cells for the importer test.

Run: python3 scripts/merged-cells-fixture/generate-merged-cells-fixture.py
Produces packages/docs-exchange/src/__tests__/fixtures/merged-cells-fixture.docx

Three tables:
  1. gridSpan: row0 = one cell spanning 2 cols; row1 = two cells (unequal widths).
  2. vMerge: a 2-row vertical merge in column 0.
  3. gridSpan+vMerge: a 2x2 merged block (master at top-left).
A paragraph after the tables provides an index-shift sanity anchor.
"""
import os
import zipfile

HERE = os.path.dirname(__file__)
OUT = os.path.normpath(os.path.join(
    HERE, '..', '..', 'packages', 'docs-exchange', 'src', '__tests__',
    'fixtures', 'merged-cells-fixture.docx'))

W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'

CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>'''

ROOT_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''


def tc(text, *, grid=None, vmerge=None, w=2400):
    props = f'<w:tcW w:w="{w}" w:type="dxa"/>'
    if grid:
        props += f'<w:gridSpan w:val="{grid}"/>'
    if vmerge is not None:
        props += f'<w:vMerge w:val="{vmerge}"/>' if vmerge else '<w:vMerge/>'
    return (f'<w:tc><w:tcPr>{props}</w:tcPr>'
            f'<w:p><w:r><w:t xml:space="preserve">{text}</w:t></w:r></w:p></w:tc>')


def borders():
    return ('<w:tblBorders>'
            '<w:top w:val="single" w:sz="4"/><w:left w:val="single" w:sz="4"/>'
            '<w:bottom w:val="single" w:sz="4"/><w:right w:val="single" w:sz="4"/>'
            '<w:insideH w:val="single" w:sz="4"/><w:insideV w:val="single" w:sz="4"/>'
            '</w:tblBorders>')


def main():
    t1 = (f'<w:tbl><w:tblPr>{borders()}</w:tblPr>'
          '<w:tblGrid><w:gridCol w:w="1600"/><w:gridCol w:w="3200"/></w:tblGrid>'
          f'<w:tr>{tc("A spans two", grid=2, w=4800)}</w:tr>'
          f'<w:tr>{tc("B", w=1600)}{tc("C", w=3200)}</w:tr></w:tbl>')

    t2 = (f'<w:tbl><w:tblPr>{borders()}</w:tblPr>'
          '<w:tblGrid><w:gridCol w:w="2400"/><w:gridCol w:w="2400"/></w:tblGrid>'
          f'<w:tr>{tc("merged down", vmerge="restart")}{tc("r0c1")}</w:tr>'
          f'<w:tr>{tc("", vmerge=False)}{tc("r1c1")}</w:tr></w:tbl>')

    t3 = (f'<w:tbl><w:tblPr>{borders()}</w:tblPr>'
          '<w:tblGrid><w:gridCol w:w="2400"/><w:gridCol w:w="2400"/></w:tblGrid>'
          f'<w:tr>{tc("2x2 block", grid=2, vmerge="restart", w=4800)}</w:tr>'
          f'<w:tr>{tc("", grid=2, vmerge=False, w=4800)}</w:tr></w:tbl>')

    body = (f'{t1}<w:p/>{t2}<w:p/>{t3}'
            '<w:p><w:r><w:t>After tables.</w:t></w:r></w:p>')

    document = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w:document xmlns:w="{W}"><w:body>{body}'
        '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>'
        '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>'
        '</w:sectPr></w:body></w:document>'
    )

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', CONTENT_TYPES)
        z.writestr('_rels/.rels', ROOT_RELS)
        z.writestr('word/document.xml', document)
    print('wrote', OUT)


if __name__ == '__main__':
    main()
