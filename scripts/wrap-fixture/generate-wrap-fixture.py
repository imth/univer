"""Generate a tiny DOCX with floating images using different wrap modes.

Run: python3 scripts/wrap-fixture/generate-wrap-fixture.py
Produces packages/docs-exchange/src/__tests__/fixtures/wrap-images-fixture.docx

The doc has three paragraphs of filler text, each carrying an anchored 1-inch
(914400 EMU) image: paragraph 1 uses <wp:wrapSquare>, paragraph 2 uses
<wp:wrapTight> (with a <wp:wrapPolygon>), paragraph 3 uses
<wp:wrapTopAndBottom>. The docs-exchange importer should map these to
PositionedObjectLayoutType WRAP_SQUARE(3) / WRAP_TIGHT(5) / WRAP_TOP_AND_BOTTOM(6).

Authored with the Python stdlib (zipfile + raw OOXML) so it needs no
third-party packages — a .docx is just a zip of XML parts.
"""
import os
import zipfile

HERE = os.path.dirname(__file__)
OUT = os.path.normpath(os.path.join(
    HERE, '..', '..', 'packages', 'docs-exchange', 'src', '__tests__',
    'fixtures', 'wrap-images-fixture.docx'))

# 1x1 transparent PNG.
PNG = bytes.fromhex(
    '89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4'
    '890000000d49444154789c6360000002000154a24f5e0000000049454e44ae426082')

FILLER = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do '
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. ') * 4

CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>'''

ROOT_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''

DOC_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId10" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image1.png"/>
</Relationships>'''


def drawing(doc_pr_id, wrap_xml):
    # 914400 EMU = 1 inch. positionH/V offset 0 relative to column/paragraph.
    return f'''<w:r><w:drawing>
      <wp:anchor xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
                 distT="91440" distB="91440" distL="114300" distR="114300"
                 simplePos="0" relativeHeight="2" behindDoc="0" locked="0"
                 layoutInCell="1" allowOverlap="1">
        <wp:simplePos x="0" y="0"/>
        <wp:positionH relativeFrom="column"><wp:posOffset>0</wp:posOffset></wp:positionH>
        <wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV>
        <wp:extent cx="914400" cy="914400"/>
        <wp:effectExtent l="0" t="0" r="0" b="0"/>
        {wrap_xml}
        <wp:docPr id="{doc_pr_id}" name="Picture {doc_pr_id}"/>
        <wp:cNvGraphicFramePr/>
        <a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
          <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
            <pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
              <pic:nvPicPr>
                <pic:cNvPr id="{doc_pr_id}" name="Picture {doc_pr_id}"/>
                <pic:cNvPicPr/>
              </pic:nvPicPr>
              <pic:blipFill>
                <a:blip r:embed="rId10" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>
                <a:stretch><a:fillRect/></a:stretch>
              </pic:blipFill>
              <pic:spPr>
                <a:xfrm><a:off x="0" y="0"/><a:ext cx="914400" cy="914400"/></a:xfrm>
                <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
              </pic:spPr>
            </pic:pic>
          </a:graphicData>
        </a:graphic>
      </wp:anchor>
    </w:drawing></w:r>'''


WRAP_SQUARE = '<wp:wrapSquare wrapText="bothSides"/>'
WRAP_TIGHT = '''<wp:wrapTight wrapText="bothSides">
          <wp:wrapPolygon edited="0">
            <wp:start x="0" y="0"/>
            <wp:lineTo x="0" y="21600"/>
            <wp:lineTo x="21600" y="21600"/>
            <wp:lineTo x="21600" y="0"/>
            <wp:lineTo x="0" y="0"/>
          </wp:wrapPolygon>
        </wp:wrapTight>'''
WRAP_TOP_AND_BOTTOM = '<wp:wrapTopAndBottom/>'


def paragraph(text, doc_pr_id, wrap_xml):
    return f'<w:p><w:r><w:t xml:space="preserve">{text}</w:t></w:r>{drawing(doc_pr_id, wrap_xml)}</w:p>'


def main():
    body = (
        paragraph(FILLER, 1, WRAP_SQUARE)
        + paragraph(FILLER, 2, WRAP_TIGHT)
        + paragraph(FILLER, 3, WRAP_TOP_AND_BOTTOM)
    )
    document = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        f'<w:body>{body}'
        '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>'
        '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>'
        '</w:sectPr></w:body></w:document>'
    )

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', CONTENT_TYPES)
        z.writestr('_rels/.rels', ROOT_RELS)
        z.writestr('word/document.xml', document)
        z.writestr('word/_rels/document.xml.rels', DOC_RELS)
        z.writestr('word/media/image1.png', PNG)
    print('wrote', OUT)


if __name__ == '__main__':
    main()
