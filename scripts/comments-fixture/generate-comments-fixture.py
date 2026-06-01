"""Generate a tiny DOCX with comments for the importer fixture test.

Run: python3 scripts/comments-fixture/generate-comments-fixture.py
Produces packages/docs-exchange/src/__tests__/fixtures/comments-fixture.docx

Three paragraphs, each with a comment range:
  - comment 0 (Reviewer): a single-run range, top-level.
  - comment 1 (Editor): top-level.
  - comment 2 (QA): a reply to comment 1 (commentsExtended paraIdParent),
    and marked resolved (done="1").

Authored with the Python stdlib (zipfile + raw OOXML) — a .docx is just a zip
of XML parts. Comments live in comments.xml + commentsExtended.xml; the body
references them via <w:commentRangeStart/End> + <w:commentReference>.
"""
import os
import zipfile

HERE = os.path.dirname(__file__)
OUT = os.path.normpath(os.path.join(
    HERE, '..', '..', 'packages', 'docs-exchange', 'src', '__tests__',
    'fixtures', 'comments-fixture.docx'))

CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/comments.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml"/>
  <Override PartName="/word/commentsExtended.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.commentsExtended+xml"/>
</Types>'''

ROOT_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''

DOC_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdC" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments" Target="comments.xml"/>
  <Relationship Id="rIdCE" Type="http://schemas.microsoft.com/office/2011/relationships/commentsExtended" Target="commentsExtended.xml"/>
</Relationships>'''

W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
W14 = 'http://schemas.microsoft.com/office/word/2010/wordml'
W15 = 'http://schemas.microsoft.com/office/word/2012/wordml'


def commented_para(cid, text):
    # A paragraph whose text run is wrapped by a comment range + reference.
    return (
        f'<w:p>'
        f'<w:commentRangeStart w:id="{cid}"/>'
        f'<w:r><w:t xml:space="preserve">{text}</w:t></w:r>'
        f'<w:commentRangeEnd w:id="{cid}"/>'
        f'<w:r><w:commentReference w:id="{cid}"/></w:r>'
        f'</w:p>'
    )


def main():
    body = (
        commented_para(0, 'This text has a comment attached to it.')
        + commented_para(1, 'First part and second part of the commented range.')
        + commented_para(2, 'Entire paragraph is the comment anchor.')
    )
    document = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w:document xmlns:w="{W}" xmlns:w14="{W14}">'
        f'<w:body>{body}'
        '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>'
        '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>'
        '</w:sectPr></w:body></w:document>'
    )

    comments = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w:comments xmlns:w="{W}" xmlns:w14="{W14}">'
        '<w:comment w:id="0" w:author="Reviewer" w:date="2026-04-28T15:33:11Z" w:initials="R">'
        '<w:p w14:paraId="P0"><w:r><w:t>Review this wording.</w:t></w:r></w:p></w:comment>'
        '<w:comment w:id="1" w:author="Editor" w:date="2026-04-28T15:33:11Z" w:initials="E">'
        '<w:p w14:paraId="P1"><w:r><w:t>This comment spans multiple runs.</w:t></w:r></w:p></w:comment>'
        '<w:comment w:id="2" w:author="QA" w:date="2026-04-28T15:33:11Z" w:initials="Q">'
        '<w:p w14:paraId="P2"><w:r><w:t>Reply on the editor thread.</w:t></w:r></w:p></w:comment>'
        '</w:comments>'
    )

    # comment 2 is a reply to comment 1 (paraIdParent=P1) and resolved (done=1).
    comments_ex = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w15:commentsEx xmlns:w15="{W15}">'
        '<w15:commentEx w15:paraId="P0" w15:done="0"/>'
        '<w15:commentEx w15:paraId="P1" w15:done="0"/>'
        '<w15:commentEx w15:paraId="P2" w15:paraIdParent="P1" w15:done="1"/>'
        '</w15:commentsEx>'
    )

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', CONTENT_TYPES)
        z.writestr('_rels/.rels', ROOT_RELS)
        z.writestr('word/document.xml', document)
        z.writestr('word/_rels/document.xml.rels', DOC_RELS)
        z.writestr('word/comments.xml', comments)
        z.writestr('word/commentsExtended.xml', comments_ex)
    print('wrote', OUT)


if __name__ == '__main__':
    main()
