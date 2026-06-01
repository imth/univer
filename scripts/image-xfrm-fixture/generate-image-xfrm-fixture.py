"""Generate a tiny DOCX with a rotated image and a cropped image.

Run: python3 scripts/image-xfrm-fixture/generate-image-xfrm-fixture.py
Produces packages/docs-exchange/src/__tests__/fixtures/image-xfrm-fixture.docx

Paragraph 1: a 1-inch inline image rotated 45deg (rot=2700000) + flipH.
Paragraph 2: a 1-inch inline image cropped 25% off left & right (srcRect
l=r=25000). Authored with the Python stdlib (zipfile + raw OOXML).
"""
import os
import zipfile

HERE = os.path.dirname(__file__)
OUT = os.path.normpath(os.path.join(
    HERE, '..', '..', 'packages', 'docs-exchange', 'src', '__tests__',
    'fixtures', 'image-xfrm-fixture.docx'))

# Known-good 1x1 PNG (proven valid in the wrap fixture). The unit assertions
# (angle / srcRect numbers) don't depend on pixel content; for a richer e2e
# screenshot the implementer may swap in any real PNG here.
PNG = bytes.fromhex(
    '89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4'
    '890000000d49444154789c6360000002000154a24f5e0000000049454e44ae426082')

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


def inline_image(doc_pr_id, xfrm_attrs, srcrect_xml):
    return f'''<w:r><w:drawing>
      <wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing">
        <wp:extent cx="914400" cy="914400"/>
        <wp:docPr id="{doc_pr_id}" name="Picture {doc_pr_id}"/>
        <a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
          <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
            <pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
              <pic:nvPicPr><pic:cNvPr id="{doc_pr_id}" name="Picture {doc_pr_id}"/><pic:cNvPicPr/></pic:nvPicPr>
              <pic:blipFill>
                <a:blip r:embed="rId10" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>
                {srcrect_xml}
                <a:stretch><a:fillRect/></a:stretch>
              </pic:blipFill>
              <pic:spPr>
                <a:xfrm {xfrm_attrs}><a:off x="0" y="0"/><a:ext cx="914400" cy="914400"/></a:xfrm>
                <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
              </pic:spPr>
            </pic:pic>
          </a:graphicData>
        </a:graphic>
      </wp:inline>
    </w:drawing></w:r>'''


def main():
    img1 = inline_image(1, 'rot="2700000" flipH="1"', '')
    img2 = inline_image(2, '', '<a:srcRect l="25000" r="25000"/>')
    p1 = '<w:p>' + img1 + '</w:p>'
    p2 = '<w:p>' + img2 + '</w:p>'
    document = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        f'<w:body>{p1}{p2}'
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
