# mitre att&ck matrix (mam)
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011


mam_tactic_tag = "{Table: ATTACK Matrix}"
mam_tag = "{Table: MITRE Attack Matrix details}"

desc_para = r'''
          <w:p>
            <w:pPr>
              <w:pStyle w:val="DetailedFindingsNormal"/>
            </w:pPr>
           {}
          </w:p>'''

desc_run = r'''
            <w:r>
              <w:t>{}</w:t>
            </w:r>'''

page_break = r'''<w:pageBreakBefore/>'''

mam_tab = r'''
    <w:tbl {}>
      <w:tblPr>
        <w:tblW w:w="4956" w:type="pct"/>
        <w:jc w:val="center"/>
        <w:tblBorders>
          <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
          <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
          <w:insideH w:val="single" w:sz="4" w:space="0" w:color="auto"/>
          <w:insideV w:val="single" w:sz="4" w:space="0" w:color="auto"/>
        </w:tblBorders>
        <w:tblLayout w:type="fixed"/>
        <w:tblCellMar>
          <w:top w:w="72" w:type="dxa"/>
          <w:left w:w="115" w:type="dxa"/>
          <w:bottom w:w="72" w:type="dxa"/>
          <w:right w:w="115" w:type="dxa"/>
        </w:tblCellMar>
        <w:tblLook w:val="04A0" w:firstRow="1" w:lastRow="0"
         w:firstColumn="1" w:lastColumn="0" w:noHBand="0" w:noVBand="1"/>
      </w:tblPr>
      <w:tblGrid>
        <w:gridCol w:w="1404"/>
        <w:gridCol w:w="3936"/>
        <w:gridCol w:w="3938"/>
      </w:tblGrid>
      <w:tr>
        <w:trPr>
          <w:jc w:val="center"/>
        </w:trPr>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="756" w:type="pct"/>
            <w:shd w:val="clear" w:color="auto"
                   w:fill="8EAADB" w:themeFill="accent1"
                   w:themeFillTint="99"/>
            <w:vAlign w:val="center"/>
            <w:hideMark/>
          </w:tcPr>
          <w:p>
            <w:pPr>
              <w:pStyle w:val="DetailedFindingHeader"/>
             {ptp_mam_page_break}
            </w:pPr>
            <w:r>
              <w:t>ID</w:t>
            </w:r>
          </w:p>
        </w:tc>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="2120" w:type="pct"/>
            <w:shd w:val="clear" w:color="auto" w:fill="8EAADB"
                   w:themeFill="accent1" w:themeFillTint="99"/>
            <w:vAlign w:val="center"/>
          </w:tcPr>
          <w:p>
            <w:pPr>
              <w:pStyle w:val="DetailedFindingHeader"/>
            </w:pPr>
            <w:r>
              <w:t>Technique</w:t>
            </w:r>
          </w:p>
        </w:tc>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="2121" w:type="pct"/>
            <w:shd w:val="clear" w:color="auto" w:fill="8EAADB"
                   w:themeFill="accent1" w:themeFillTint="99"/>
            <w:vAlign w:val="center"/>
          </w:tcPr>
          <w:p>
            <w:pPr>
              <w:pStyle w:val="DetailedFindingHeader"/>
            </w:pPr>
            <w:r>
              <w:t>Tactic</w:t>
            </w:r>
          </w:p>
        </w:tc>
      </w:tr>
      <w:tr>
        <w:trPr>
          <w:jc w:val="center"/>
        </w:trPr>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="756" w:type="pct"/>
            <w:vAlign w:val="center"/>
            <w:hideMark/>
          </w:tcPr>
          <w:p>
            <w:pPr>
              <w:pStyle w:val="DetailedFindingsTop"/>
            </w:pPr>
            <w:r>
              <w:t>{ptp_mam_id}</w:t>
            </w:r>
          </w:p>
        </w:tc>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="2120" w:type="pct"/>
            <w:vAlign w:val="center"/>
          </w:tcPr>
          <w:p>
            <w:pPr>
              <w:pStyle w:val="DetailedFindingsTop"/>
            </w:pPr>
            <w:r>
              <w:t>{ptp_mam_technique}</w:t>
            </w:r>
          </w:p>
        </w:tc>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="2121" w:type="pct"/>
            <w:vAlign w:val="center"/>
          </w:tcPr>
          <w:p>
            <w:pPr>
              <w:pStyle w:val="DetailedFindingsTop"/>
            </w:pPr>
            <w:r>
              <w:t>{ptp_mam_tactic}</w:t>
            </w:r>
          </w:p>
        </w:tc>
      </w:tr>
      <w:tr>
<!-- Merged description row -->
        <w:trPr>
          <w:jc w:val="center"/>
        </w:trPr>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="5000" w:type="pct"/>
            <w:gridSpan w:val="4"/>
            <w:shd w:val="clear" w:color="auto" w:fill="D9E2F3"
                   w:themeFill="accent1" w:themeFillTint="33"/>
            <w:vAlign w:val="center"/>
          </w:tcPr>
          <w:p>
            <w:pPr>
              <w:spacing w:after="0" w:line="240" w:lineRule="auto"/>
              <w:rPr>
                <w:rFonts w:asciiTheme="minorHAnsi" w:hAnsiTheme="minorHAnsi"
                          w:cs="Times New Roman"/>
                <w:b/>
                <w:color w:val="2F5496" w:themeColor="accent1"
                         w:themeShade="BF"/>
                <w:sz w:val="20"/>
                <w:szCs w:val="20"/>
              </w:rPr>
            </w:pPr>
            <w:r>
              <w:rPr>
                <w:rFonts w:asciiTheme="minorHAnsi" w:hAnsiTheme="minorHAnsi"
                          w:cs="Times New Roman"/>
                <w:b/>
                <w:color w:val="2F5496" w:themeColor="accent1"
                         w:themeShade="BF"/>
                <w:sz w:val="20"/>
                <w:szCs w:val="20"/>
              </w:rPr>
              <w:t>Description</w:t>
            </w:r>
          </w:p>
        </w:tc>
      </w:tr>
      <w:tr>
<!-- description details -->
        <w:trPr>
          <w:jc w:val="center"/>
        </w:trPr>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="5000" w:type="pct"/>
            <w:gridSpan w:val="4"/>
          </w:tcPr>
        {ptp_mam_desc_para}
        </w:tc>
      </w:tr>
<!-- add mitre hyperlink -->
      <w:tr>
        <w:trPr>
          <w:trHeight w:val="70"/>
          <w:jc w:val="center"/>
        </w:trPr>
        <w:tc>
          <w:tcPr>
            <w:tcW w:w="5000" w:type="pct"/>
            <w:gridSpan w:val="4"/>
            <w:shd w:val="clear" w:color="auto" w:fill="auto"/>
            <w:vAlign w:val="center"/>
          </w:tcPr>
          <w:p>
            <w:pPr>
              <w:pStyle w:val="DetailedFindingsNormal"/>
            </w:pPr>
            <w:r>
              <w:rPr>
                <w:rStyle w:val="Hyperlink"/>
              </w:rPr>
              <w:fldChar w:fldCharType="begin"/>
            </w:r>
            <w:r>
              <w:rPr>
                <w:rStyle w:val="Hyperlink"/>
              </w:rPr>
              <w:instrText> HYPERLINK
                {ptp_mam_url}
              </w:instrText>
            </w:r>
            <w:r>
              <w:rPr>
                <w:rStyle w:val="Hyperlink"/>
              </w:rPr>
              <w:fldChar w:fldCharType="separate"/>
            </w:r>
            <w:r>
              <w:rPr>
                <w:rStyle w:val="Hyperlink"/>
              </w:rPr>
              <w:t>{ptp_mam_url}</w:t>
            </w:r>
            <w:r>
              <w:rPr>
                <w:rStyle w:val="Hyperlink"/>
              </w:rPr>
              <w:fldChar w:fldCharType="end"/>
            </w:r>
            <w:r>
              <w:t xml:space="preserve"> </w:t>
            </w:r>
          </w:p>
        </w:tc>
      </w:tr>
    </w:tbl>'''

mam_link = r'''
      <w:p {}>
        <w:pPr>
          <w:jc w:val="center"/>
        </w:pPr>
        <w:r>
          <w:rPr>
            <w:rStyle w:val="Hyperlink"/>
          </w:rPr>
          <w:fldChar w:fldCharType="begin"/>
        </w:r>
        <w:r>
          <w:rPr>
            <w:rStyle w:val="Hyperlink"/>
          </w:rPr>
          <w:instrText>
            HYPERLINK {ptp_mam_url}
          </w:instrText>
        </w:r>
        <w:r>
          <w:rPr>
            <w:rStyle w:val="Hyperlink"/>
          </w:rPr>
          <w:fldChar w:fldCharType="separate"/>
        </w:r>
        <w:r>
          <w:rPr>
            <w:rStyle w:val="Hyperlink"/>
          </w:rPr>
          <w:t>
            {ptp_mam_name}
          </w:t>
        </w:r>
        <w:r>
          <w:rPr>
            <w:rStyle w:val="Hyperlink"/>
          </w:rPr>
          <w:fldChar w:fldCharType="end"/>
        </w:r>
        <w:r>
          <w:t xml:space="preserve"> </w:t>
        </w:r>
      </w:p>'''
