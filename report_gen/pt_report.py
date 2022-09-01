"""
The RVA report generator takes a document template and information
from the RVA pen testing django app database to generate an RVA report
in docx format
"""
# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import sys
import os.path
import argparse
import datetime

from docx.oxml.ns import nsdecls
from docx.oxml import parse_xml
from docx.oxml.xmlchemy import OxmlElement
from docx.shared import Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.table import WD_TABLE_ALIGNMENT

from PIL import Image

from .mam_xml import *  # mitre att&ck matrix
import report_gen.mam_xml as mam_xml
import report_gen.utilities.assessment_facts as af
import report_gen.utilities.xml_util as xu
import report_gen.utilities.rt_parser as rtp

try:
    import docx
except ImportError:
    print("Must have python docx library installed")
    sys.exit(1)

colors = {
    "Critical": "C00000",
    "High": "FF0000",
    "Medium": "E36C0A",
    "Low": "548DD4",
    "Informational": "000000",
}
# ---- constants
tstamp = str(datetime.datetime.now().strftime("%Y%m%d_%H.%M.%S"))


def insert_rpt_appendix_b_table_one(doc, db):
    """Generates the domains table of the social enegineering section.

    Parameters
    ----------
    doc : docx document
        Template being edited.
    db : list
        Assessment data
    """
    p_tag = xu.find_paragraph(doc, "{Table: Identified Domains}")

    if p_tag is None:
        return

    domain_table = doc.add_table(1, 1)
    domain_table.style = doc.styles['MediumShading1-Accent1']
    domain_table.cell(0, 0).text = "Domain"

    for cnt, domain in enumerate(af.model_gen(db, "ptportal.rptidentifiednetworks")):
        ele = domain['fields']
        row = domain_table.add_row()
        row.cells[0].text = xu.xsafe(ele['domain'])

    for cell in domain_table.columns[0].cells:
        cell.width = Inches(1.2)
    xu.move_table_after(domain_table, p_tag)
    xu.delete_paragraph(p_tag)


def insert_rpt_appendix_b_table_two(doc, db):
    """Generates the networks table of the social engieering section.

    Args:
        doc (docx document): The docx template being edited.
        db (list): Assessment data
    """
    p_tag = xu.find_paragraph(doc, "{Table: Identified Networks}")

    if p_tag is None:
        return

    network_table = doc.add_table(1, 3)
    network_table.style = doc.styles['MediumShading1-Accent1']
    network_table.cell(0, 0).text = "Network or IP Address"
    network_table.cell(0, 1).text = "Domain"
    network_table.cell(0, 2).text = "Registrant"

    for cnt, domain in enumerate(af.model_gen(db, "ptportal.rptidentifiednetworks")):
        ele = domain['fields']
        row = network_table.add_row()

        row.cells[0].text = xu.xsafe(ele['ip_address'])
        row.cells[1].text = xu.xsafe(ele['domain'])
        row.cells[2].text = xu.xsafe(ele['registrant'])

    xu.move_table_after(network_table, p_tag)
    # Delete tag
    xu.delete_paragraph(p_tag)


def insert_rpt_appendix_b_table_three(doc, db):
    """Generates the breach information table of the social engineering section.

    Args:
        doc (docx document): The docx template being edited.
        db (list): Assessment data
    """
    p_tag = xu.find_paragraph(doc, "{Table: Breached Emails}")

    if p_tag is None:
        return

    email_table = doc.add_table(1, 2)
    email_table.style = doc.styles['MediumShading1-Accent1']
    email_table.cell(0, 0).text = "Email Address"
    email_table.cell(0, 1).text = "Breach Information"

    for cnt, domain in enumerate(af.model_gen(db, "ptportal.rptbreachedemails")):
        ele = domain['fields']
        row = email_table.add_row()

        row.cells[0].text = xu.xsafe(ele['breached_email'])
        row.cells[1].text = xu.xsafe(ele['breach_info'])

    xu.move_table_after(email_table, p_tag)
    # Delete tag
    xu.delete_paragraph(p_tag)


def insert_fse_table(doc, db):
    """Generates and inserts the findings summary of the HVA report.

    Args:
        doc (docx document): The docx template being edited.
        db (list): Assessment data
    """
    ef_tag_str = '{Table: External Findings}'
    if_tag_str = '{Table: Internal Findings}'
    se_tag_str = '{Table: Social E Findings}'

    ef_tag = xu.find_paragraph(doc, ef_tag_str)
    if ef_tag is None:
        return

    if_tag = xu.find_paragraph(doc, if_tag_str)
    if if_tag is None:
        return

    se_tag = xu.find_paragraph(doc, se_tag_str)
    if se_tag is None:
        return

    internal_table = doc.add_table(1, 3)
    external_table = doc.add_table(1, 3)
    social_table = doc.add_table(1, 3)

    internal_table.style = doc.styles['MediumShading1-Accent1']
    external_table.style = doc.styles['MediumShading1-Accent1']
    social_table.style = doc.styles['MediumShading1-Accent1']

    internal_table.cell(0, 1).text = "Internal Finding Name"
    internal_table.cell(0, 2).text = "Severity"
    external_table.cell(0, 1).text = "External Finding Name"
    external_table.cell(0, 2).text = "Severity"
    social_table.cell(0, 1).text = "Social Engineering Finding Name"
    social_table.cell(0, 2).text = "Severity"

    count = 1
    for cnt, finding in enumerate(af.model_gen(db, "ptportal.uploadedfinding")):
        fname = finding["fields"]["uploaded_finding_name"]
        ele = finding["fields"]

        severity_color = xu.hex_to_rgb(colors[ele['severity']])

        if ele['assessment_type'] == 'Internal/External':
            row = external_table.add_row()
            row.cells[0].text = str(count) + '.'
            row.cells[1].text = xu.xsafe(fname)
            row.cells[2].text = ele['severity']

            row.cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(42, 72, 121)
            row.cells[0].paragraphs[0].runs[0].font.bold = True
            row.cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                severity_color[0], severity_color[1], severity_color[2]
            )

            count += 1

            row = internal_table.add_row()
            row.cells[0].text = str(count) + '.'
            row.cells[1].text = xu.xsafe(fname)
            row.cells[2].text = ele['severity']

            row.cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(42, 72, 121)
            row.cells[0].paragraphs[0].runs[0].font.bold = True
            row.cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                severity_color[0], severity_color[1], severity_color[2]
            )

            count += 1

        if ele['assessment_type'] == 'External':
            row = external_table.add_row()
            row.cells[0].text = str(count) + '.'
            row.cells[1].text = xu.xsafe(fname)
            row.cells[2].text = ele['severity']

            row.cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(42, 72, 121)
            row.cells[0].paragraphs[0].runs[0].font.bold = True
            row.cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                severity_color[0], severity_color[1], severity_color[2]
            )

            count += 1

        if ele['assessment_type'] == 'Internal':
            row = internal_table.add_row()
            row.cells[0].text = str(count) + '.'
            row.cells[1].text = xu.xsafe(fname)
            row.cells[2].text = ele['severity']

            row.cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(42, 72, 121)
            row.cells[0].paragraphs[0].runs[0].font.bold = True
            row.cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                severity_color[0], severity_color[1], severity_color[2]
            )

            count += 1

        if ele['assessment_type'] == 'Phishing':
            row = social_table.add_row()
            row.cells[0].text = str(count) + '.'
            row.cells[1].text = xu.xsafe(fname)
            row.cells[2].text = ele['severity']

            row.cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(42, 72, 121)
            row.cells[0].paragraphs[0].runs[0].font.bold = True
            row.cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                severity_color[0], severity_color[1], severity_color[2]
            )

            count += 1

    xu.set_column_width(internal_table.columns[0], 0.61)
    xu.set_column_width(internal_table.columns[1], 3.01)
    xu.set_column_width(internal_table.columns[2], 1.1)
    xu.set_column_width(external_table.columns[0], 0.61)
    xu.set_column_width(external_table.columns[1], 3.01)
    xu.set_column_width(external_table.columns[2], 1.1)
    xu.set_column_width(social_table.columns[0], 0.61)
    xu.set_column_width(social_table.columns[1], 3.01)
    xu.set_column_width(social_table.columns[2], 1.1)

    xu.move_table_after(external_table, ef_tag)
    xu.move_table_after(social_table, se_tag)
    xu.move_table_after(internal_table, if_tag)
    # Delete tag
    xu.delete_paragraph(ef_tag)
    xu.delete_paragraph(if_tag)
    xu.delete_paragraph(se_tag)


def insert_mam_tactic(doc, mam_tag, mam_data):
    """
    Takes data containing information about the Mitre Attack Matrix
    (mam) and replaces the paragraph containing landscape table
    grouped by columns of tactics.
    """
    # if you update framework and there's a new tactic, have to add here
    tactics = [
        "Reconnaissance",
        "Resource Development",
        "Initial Access",
        "Execution",
        "Persistence",
        "Privilege Escalation",
        "Defense Evasion",
        "Credential Access",
        "Discovery",
        "Lateral Movement",
        "Collection",
        "Command and Control",
        "Exfiltration",
        "Impact",
    ]

    p = xu.find_paragraph(doc, mam_tag)
    if p is None:
        return  # tag must not be in the document

    matrix_entries = []
    for ele in af.model_gen(mam_data, "ptportal.attackframework"):
        matrix_entries.append(ele)

    # create an empty dictionary of lists to put the elements
    mtd = {}  # matrix tactics dictionary (mtd)
    for txt in tactics:
        mtd[txt] = []

    for ele in matrix_entries:
        m_ele = ele["fields"]
        tactic_type = m_ele["tactics"].split(',')
        tactic_type = [x.strip() for x in tactic_type]
        if m_ele["used"]:
            for m in tactic_type:
                mtd[m].append(ele)

    # find the max dict length, that is the number of rows you need
    # for max row
    #   walk through all the elements,
    #      if stack not empty: emit element name

    max_rows = 0
    for txt in tactics:
        max_rows = max(len(mtd[txt]), max_rows)

    table = doc.add_table(rows=1, cols=len(tactics))
    table.style = doc.styles['Table Grid']
    table.alignment = WD_TABLE_ALIGNMENT.CENTER

    hdr_cells = table.rows[0].cells
    for cnt, txt in enumerate(tactics):
        hdr_cells[cnt].text = txt
        hdr_cells[cnt].width = Inches(1.01)
        hdr_cells[cnt]._tc.get_or_add_tcPr().append(
            parse_xml(r'<w:shd {} w:fill="E1E9F0"/>'.format(nsdecls('w')))
        )

    # add in the rows
    for row in range(max_rows):
        row_cell = table.add_row().cells
        for cnt, txt in enumerate(tactics):
            if len(mtd[txt]) > row:
                name = mtd[txt][row]["fields"]["name"]
                url = mtd[txt][row]["fields"]["url"]
                tl = mam_xml.mam_link.format(
                    nsdecls('w'), ptp_mam_name=xu.xsafe(name), ptp_mam_url=xu.xsafe(url)
                )

                ptl = parse_xml(tl)
                row_cell[cnt].paragraphs[0]._p.addnext(ptl)
                xu.delete_paragraph(row_cell[cnt].paragraphs[0])

    xu.move_table_after(table, p)

    xu.delete_paragraph(p)


def insert_mam_table(doc, mam_tag, mam_data):
    """
    Takes data containing information about the Mitre Attack Matrix
    (mam) and replaces the paragraph containing the mam_tag
    """

    # ---- constants used for hueristic to size the number of
    #      mitre attack matrix (mam) entries per page
    # the hueristic looks if the total of
    #    paragraphs_seperator + lines_from_description + base_table_headers
    # contributed by each entry does not exceed the total lines per page.
    # if it does, add a page break and reset the counters
    #
    # these numbers were derived looking through various examples of
    # attack matrix descriptions and estimating how much they contribute
    # to the totals.  these are not precise values and may be tweaked
    # in the future.
    BASE_TABLE_LINES = 5
    LINES_PER_CHAR = 100
    LINES_PER_PAGE = 70
    # ---- find the tag
    p_tag = xu.find_paragraph(doc, mam_tag)

    if p_tag is None:
        return  # tag must not be in the document

    matrix_entries = []
    for ele in af.model_gen(mam_data, "ptportal.attackframework"):
        m_ele = ele["fields"]
        if m_ele["used"]:
            matrix_entries.append(m_ele)

    # ---- create the mam table
    p = p_tag._p  # starting point
    cnt = 0
    idx = 0
    for ele in matrix_entries:
        idx += 1
        # XXX the description may come in one string line break separated.
        d = ele["description"]
        desc = []
        for d_ele in d.split('\\n\\n'):
            d_ele = xu.xsafe(d_ele)

            d_ele = d_ele.encode('latin1', errors='ignore').decode(
                'cp1252', errors='ignore'
            )
            # d_ele = d_ele.encode('utf-8').decode('cp1252')

            desc.append(mam_xml.desc_para.format(mam_xml.desc_run.format(d_ele)))
            # add a blank paragraph
            desc.append(mam_xml.desc_para.format(""))

        descr_paras = len(desc)
        descr_len = len(''.join(desc))

        cnt += BASE_TABLE_LINES  # overall base table lines
        cnt += descr_paras
        cnt += (descr_len // LINES_PER_CHAR) + 1

        # uncomment to get info for tuning constants
        # print("--->", idx, ">"+ele["name"]+"<", descr_paras,
        #       descr_len, (descr_len // 100) + 1, cnt)

        if cnt > LINES_PER_PAGE:
            break_page = mam_xml.page_break
            # reset the count
            cnt = BASE_TABLE_LINES
            cnt += descr_paras
            cnt += (descr_len // 100) + 1
        else:
            break_page = ""

        # XXX - for now, don't worry about page breaks, but may change back
        break_page = ""

        # ---- replace information in generic xml string - `mam_tab'
        mtab = mam_xml.mam_tab  # convience variable
        mamns = mtab.format(
            nsdecls('w'),
            ptp_mam_id=ele["T_id"],
            ptp_mam_url=xu.xsafe(ele["url"]),
            ptp_mam_technique=xu.xsafe(ele["name"]),
            ptp_mam_tactic=xu.xsafe(ele["tactics"]),
            ptp_mam_desc_para=''.join(desc),
            ptp_mam_page_break=break_page,
        )

        tbl = parse_xml(mamns)
        p.addnext(tbl)

        # get a handle on the newly inserted table
        t = p.getnext()
        # create a new paragraph and add after table
        new_p = OxmlElement("w:p")
        t.addnext(new_p)
        # point to the new paragraph
        p = new_p

    # ---- remove the paragraph containing the tag
    xu.delete_paragraph(p_tag)


def insert_cis_csc_table(doc, db, cis_csc_tag):
    """Generates and inserts the cis_csc controls table for the findings that are in the report.

    Args:
        doc (docx document): The docx template being edited.
        db (list): Assessment data
        cis_csc_tag (string): The string inside of the docx document that will be replaced with the table.
    """
    p_tag = xu.find_paragraph(doc, cis_csc_tag)

    # Stop if location does not exist
    if p_tag is None:
        return

    cis_csc_table = doc.add_table(1, 3)
    cis_csc_table.style = doc.styles['MediumShading1-Accent1']

    cis_csc_table.cell(0, 0).text = "ID"
    cis_csc_table.cell(0, 1).text = "Controls"
    cis_csc_table.cell(0, 2).text = "Finding ID"
    cis_csc_table.columns[0].width = Inches(0.16)
    cis_csc_table.columns[1].width = Inches(5.38)
    cis_csc_table.columns[2].width = Inches(0.85)

    for cnt, rec in enumerate(af.model_gen(db, "ptportal.cis_csc")):
        ele = rec['fields']
        row = cis_csc_table.add_row()

        row.cells[0].text = str(ele['CIS_ID'])
        row.cells[1].text = xu.xsafe(ele['name'])

        cis_csc_fid = ele['findings']
        f_list = []
        fid_list = ""
        for f_cnt, f in enumerate(af.model_gen(db, "ptportal.uploadedfinding")):
            fid = f['fields']['finding']
            if fid in cis_csc_fid:
                f_list.append(f_cnt + 1)
            fid_list = ', '.join(str(e) for e in f_list)

        row.cells[2].text = fid_list
        row.height = Inches(0.25)

    xu.move_table_after(cis_csc_table, p_tag)
    print(cis_csc_table.autofit)
    xu.delete_paragraph(p_tag)


def insert_hva_targets_table(doc, db, hva_targets_tag):
    """Generates the HVA table that lists the high value assets of the report.

    Args:
        doc (docx document): The docx template being edited.
        db (list): Assessment data
        hva_targets_tag (string): The string inside of the docx document that will be replaced with the table.
    """
    p_tag = xu.find_paragraph(doc, hva_targets_tag)

    # Stop if location does not exist
    if p_tag is None:
        return

    targets_table = doc.add_table(1, 3)
    targets_table.style = doc.styles['MediumShading1-Accent1']
    targets_table.cell(0, 0).text = "Target"
    targets_table.cell(0, 1).text = "Address"
    targets_table.cell(0, 2).text = "Status"

    for cnt, rec in enumerate(af.model_gen(db, "ptportal.hvatarget")):
        ele = rec['fields']
        row = targets_table.add_row()

        row.cells[0].text = xu.xsafe(ele['name'])
        row.cells[1].text = xu.xsafe(ele['address'])
        row.cells[2].text = xu.xsafe(ele['status'])

    xu.move_table_after(targets_table, p_tag)
    # Delete tag
    xu.delete_paragraph(p_tag)


def insert_hva_str_table(doc, db, hva_str_tag):
    """Generates and inserts the table which lists out the HVA scenarios for the assessment.

    Args:
        doc (docx document): The docx template being edited.
        db (list): Assessment data
        hva_str_tag (string): The string inside of the docx document that will be replaced with the table.
    """

    hva_str_keys = [
        ["HVA_external_scenario", "Scenario #1 – External Assessment - "],
        ["HVA_phishing_scenario", "Scenario #2 – Phishing Assessment - "],
        ["HVA_web_application_scenario", "Scenario #3 – Web Application Assessment - "],
        ["HVA_internal_scenario", "Scenario #4 – Internal Assessment - "],
        ["HVA_ITE_scenario", "Scenario #5 – Internal Threat Emulation (ITE) - "],
        ["HVA_data_exfiltration_scenario", "Scenario #6 – Data Exfiltration - "],
    ]

    # Find tag location in document
    p_tag = xu.find_paragraph(doc, hva_str_tag)

    # Stop if location does not exist
    if p_tag is None:
        return
    hva_str_table = doc.add_table(len(hva_str_keys), 1)
    hva_str_table.style = doc.styles['LightShading-Accent1']

    for cnt, k in enumerate(hva_str_keys):
        val = k[1] + af.get_db_info(
            db, "report.fields." + k[0], "keyNA", allow_empty=True
        )
        hva_str_table.cell(cnt, 0).text = xu.xsafe(val)

    xu.move_table_after(hva_str_table, p_tag)
    # Delete tag
    xu.delete_paragraph(p_tag)


def insert_ndf_table(doc, db, ndf_tag, media_path):
    """Generates the NCATS Detailed findings table for each finding that is listed/added to the report.

    Args:
        doc (docx document): The docx template being edited.
        db (list): Assessment data
        ndf_tag (string): The string inside of the docx document that will be replaced with the tables.
        media_path (string): Path to the location where the report screenshots are.
    """

    # ---- find the tag
    p_tag = xu.find_paragraph(doc, ndf_tag)

    if p_tag is None:
        return  # tag must not be in the document

    current_mark = p_tag

    # ---- find all screenshot information
    ss_info = af.build_screenshot_info(db)
    as_info = af.build_affected_systems_info(db)
    # make sure the affected systems are xml safe
    as_info = {k: xu.xsafe(v) for k, v in as_info.items()}

    for cnt, finding in enumerate(af.model_gen(db, "ptportal.uploadedfinding")):
        fpk = finding['pk']
        fname = finding["fields"]["uploaded_finding_name"]
        ele = finding["fields"]

        # ---- replace information in generic xml string - `ndf_tab'
        if fname.startswith("Spear Phishing Weaknesses"):
            ptp_ndf_screen_text = 'Payload Testing Results'
            ptp_ndf_screenshot_note = ele["payload_description"]

        elif fname.startswith("Spear Phishing Susceptibility"):
            ptp_ndf_screen_text = 'Phishing Assessment Results'
            ptp_ndf_screenshot_note = ele["campaign_description"]

        elif fname.startswith("Sensitive Data Exfiltration"):
            ptp_ndf_screen_text = 'Sensitive Data Exfiltration Results'
            ptp_ndf_screenshot_note = ele["data_exfil_description"]
        elif fname.startswith("Ransomware"):
            ptp_ndf_screen_text = 'Ransomware Impact'
            ptp_ndf_screenshot_note = ""
        else:
            finding_sshot = af.find_screenshots(ss_info, fpk)

            have_ss = ""
            if len(finding_sshot) == 0:
                have_ss = "No "
            ptp_ndf_screen_text = have_ss + 'Relevant Screenshot'
            ptp_ndf_screenshot_note = ele['screenshot_description']

        # ---- build the affected systems string
        affected_systems = af.find_affected_systems(as_info, ele["affected_systems"])

        ndf_table = doc.add_table(12, 5)
        ndf_table.style = doc.styles['NDF Table']
        rgb = xu.hex_to_rgb(colors[ele['severity']])

        ndf_table.cell(0, 0).text = "ID"
        ndf_table.cell(0, 1).text = "Finding"
        ndf_table.cell(0, 2).text = "Severity"
        ndf_table.cell(0, 3).text = "Location"
        ndf_table.cell(0, 4).text = "Mitigated"
        ndf_table.cell(1, 0).text = str(cnt + 1)
        ndf_table.cell(1, 1).text = xu.xsafe(fname)
        ndf_table.cell(1, 2).text = ele["severity"]
        ndf_table.cell(1, 3).text = xu.xsafe(ele['assessment_type'])
        if xu.xsafe(str(ele['mitigation'])) == "True":
            ndf_table.cell(1, 4).text = "Yes"
        else:
            ndf_table.cell(1, 4).text = "No"
        ndf_table.cell(1, 2).paragraphs[0].runs[0].font.color.rgb = RGBColor(
            rgb[0], rgb[1], rgb[2]
        )
        xu.set_cell_border(
            ndf_table.cell(1, 0), end={"sz": 8, "val": "single", "color": "#000000"}
        )
        xu.set_cell_border(
            ndf_table.cell(1, 1), end={"sz": 8, "val": "single", "color": "#000000"}
        )
        xu.set_cell_border(
            ndf_table.cell(1, 2), end={"sz": 8, "val": "single", "color": "#000000"}
        )
        xu.set_cell_border(
            ndf_table.cell(1, 3), end={"sz": 8, "val": "single", "color": "#000000"}
        )

        ndf_table.cell(2, 0).merge(ndf_table.cell(2, 3))
        ndf_table.cell(2, 0).text = "Affected Systems"
        ndf_table.cell(3, 0).merge(ndf_table.cell(3, 3))
        ndf_table.cell(3, 0).text = affected_systems

        ndf_table.cell(4, 0).merge(ndf_table.cell(4, 3))
        ndf_table.cell(4, 0).text = "Description"
        ndf_table.cell(5, 0).merge(ndf_table.cell(5, 3))
        ndf_table.cell(5, 0).text = xu.xsafe(ele["description"])

        ndf_table.cell(6, 0).merge(ndf_table.cell(6, 3))
        ndf_table.cell(6, 0).text = "Recommended Mitigation"
        ndf_table.cell(7, 0).merge(ndf_table.cell(7, 3))
        ndf_table.cell(7, 0).text = xu.xsafe(ele["remediation"])

        ndf_table.cell(8, 0).merge(ndf_table.cell(8, 3))
        ndf_table.cell(8, 0).text = xu.xsafe(ptp_ndf_screen_text)
        ndf_table.cell(9, 0).merge(ndf_table.cell(9, 3))
        ndf_table.cell(9, 0).paragraphs[0].text = ptp_ndf_screenshot_note

        ndf_table.cell(10, 0).merge(ndf_table.cell(10, 3))
        ndf_table.cell(10, 0).text = "Security Reference (FCRM, NIST, etc.)"
        ndf_table.cell(11, 0).merge(ndf_table.cell(11, 3))
        nist_800 = ndf_table.cell(11, 0).paragraphs[0]
        nist_800.add_run("NIST 800-53: ").bold = True
        nist_800.add_run(str(ele["NIST_800_53"]) + '\n')
        nist_csf = ndf_table.cell(11, 0).paragraphs[0]
        nist_csf.add_run("NIST CSF: ").bold = True
        nist_csf.add_run(str(ele["NIST_CSF"]) + '\n')
        cmmc = ndf_table.cell(11, 0).paragraphs[0]
        cmmc.add_run("CMMC: ").bold = True
        cmmc.add_run(str(ele["CMMC"]) + '\n')
        ncats_id = ndf_table.cell(11, 0).paragraphs[0]
        ncats_id.add_run("CISA ID: ").bold = True
        ncats_id.add_run(str(ele["finding"]))

        page_break = doc.add_paragraph()
        page_break.add_run().add_break(WD_BREAK.PAGE)
        current_mark._p.addnext(page_break._p)
        xu.move_table_after(ndf_table, current_mark)

        if fname.startswith("Spear Phishing Weaknesses"):
            spw_payloads = af.model_gen(db, "ptportal.spearphishingweaknesses")
            spw_table = ndf_table.cell(9, 0).add_table(1, 4)
            spw_table.style = doc.styles['Report Default Table']

            spw_table.cell(0, 0).text = "Payload"
            spw_table.cell(0, 1).text = "C2 Protocol"
            spw_table.cell(0, 2).text = "Border Protection"
            spw_table.cell(0, 3).text = "Host Protection"

            for ele in spw_payloads:
                # build up the payload rows
                vals = ele['fields']
                row = spw_table.add_row()
                row.cells[0].text = vals['payload_description']
                row.cells[1].text = vals['c2_protocol']

                if vals['border_protection'] == 'B':
                    row.cells[2].text = "Blocked"
                    row.cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                        79, 174, 91
                    )
                else:
                    row.cells[2].text = "Not Blocked"
                    row.cells[2].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                        255, 0, 0
                    )

                if vals['host_protection'] == 'B':
                    row.cells[3].text = "Blocked"
                    row.cells[3].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                        79, 174, 91
                    )
                else:
                    row.cells[3].text = "Not Blocked"
                    row.cells[3].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                        255, 0, 0
                    )

            caption = xu.insert_caption(doc, "Payload Testing Results")
            spw_table._tbl.addnext(caption._p)

        elif fname.startswith("Spear Phishing Susceptibility"):
            sps_payloads = af.model_gen(db, "ptportal.spearphishingsusceptibility")

            for idx, ele in enumerate(sps_payloads):
                val = ele['fields']
                campaign_table = ndf_table.cell(9, 0).add_table(9, 2)

                campaign_table.style = doc.styles['Report Default Table']

                campaign_table.cell(0, 0).text = "Campaign"
                campaign_table.cell(0, 1).text = str(idx + 1)
                campaign_table.cell(1, 0).text = "Emails sent:"
                campaign_table.cell(1, 1).text = str(val["emails_sent"])
                campaign_table.cell(2, 0).text = "Emails successfully delivered:"
                campaign_table.cell(2, 1).text = str(val["emails_delivered"])
                campaign_table.cell(3, 0).text = "Click-through rate:"
                campaign_table.cell(3, 1).text = "{0:.2%}".format(
                    float(val["click_rate"])
                )
                campaign_table.cell(4, 0).text = "Total Clicks:"
                campaign_table.cell(4, 1).text = str(val['total_clicks'])
                campaign_table.cell(5, 0).text = "Unique Clicks:"
                campaign_table.cell(5, 1).text = str(val['unique_clicks'])
                campaign_table.cell(6, 0).text = "Time to first click:"
                campaign_table.cell(6, 1).text = str(val['time_to_first_click'])
                campaign_table.cell(7, 0).text = "Users exploited:"
                campaign_table.cell(7, 1).text = str(val['number_exploited'])
                campaign_table.cell(8, 0).text = "Length of Campaign:"
                campaign_table.cell(8, 1).text = str(val['length_of_campaign'])

            caption = xu.insert_caption(doc, "Phishing Assessment Results")
            campaign_table._tbl.addnext(caption._p)

        elif fname.startswith("Sensitive Data Exfiltration"):
            sde = af.model_gen(db, "ptportal.sensitivedataexfil")

            sde_table = ndf_table.cell(9, 0).add_table(1, 4)
            sde_table.style = doc.styles['Report Default Table']

            sde_table.cell(0, 0).text = "Protocol"
            sde_table.cell(0, 1).text = "Datatype"
            sde_table.cell(0, 2).text = "Date/Time Started"
            sde_table.cell(0, 3).text = "Result"

            for idx, ele in enumerate(sde):
                vals = ele['fields']
                row = sde_table.add_row()

                row.cells[0].text = vals['protocol']
                row.cells[1].text = vals['datatype']
                row.cells[2].text = vals['date_time']

                if vals['result'] == 'B':
                    row.cells[3].text = "Blocked"
                    row.cells[3].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                        79, 174, 91
                    )
                else:
                    row.cells[3].text = "Not Blocked"
                    row.cells[3].paragraphs[0].runs[0].font.color.rgb = RGBColor(
                        255, 0, 0
                    )

            caption = xu.insert_caption(doc, "Sensitive Data Exfiltration")
            sde_table._tbl.addnext(caption._p)
        elif fname.startswith("Ransomware"):
            rsw_info = af.get_db_info(db, "ransomware", "keyNA", True)
            vals = rsw_info["fields"]

            rsw_table = ndf_table.cell(9, 0).add_table(4, 2)
            rsw_table.style = doc.styles['Report Default Table']

            rsw_table.cell(0, 0).text = "Ransomware Impact"
            rsw_table.cell(1, 0).text = "Wormable machines:"
            rsw_table.cell(1, 1).text = str(vals['wormable_machines'])
            rsw_table.cell(2, 0).text = "Wormable High Value Assets:"
            rsw_table.cell(2, 1).text = str(vals['wormable_HVAs'])
            rsw_table.cell(3, 0).text = "Network susceptibility:"
            rsw_table.cell(3, 1).text = str(vals["network_susc"]) + "%"

            caption = xu.insert_caption(doc, "Ransomware Impact Results")
            rsw_table._tbl.addnext(caption._p)
        else:
            screenshot_cell = ndf_table.cell(9, 0)
            for sshot in finding_sshot:
                ssf = sshot["fields"]
                sfile = media_path + ssf['file']
                if not os.path.exists(sfile):
                    print("Can't find screenshot file", sfile)
                    sys.exit(1)

                screenshot = screenshot_cell.add_paragraph()
                screenshot.alignment = WD_ALIGN_PARAGRAPH.CENTER
                screenshot_run = screenshot.add_run()

                scap = xu.xsafe(ssf['caption'])

                with Image.open(sfile) as img:
                    swidth = img.size[0]
                    xu.dpi_safe(sfile, img)

                if swidth < 455:
                    screenshot_run.add_picture(sfile)
                else:
                    screenshot_run.add_picture(sfile, width=Inches(5.5))

                caption = xu.insert_caption(doc, scap)
                screenshot._p.addnext(caption._p)
        # now delete the temporary screenshot xml tag
        current_mark = page_break

    # ---- remove the paragraph containing the tag
    xu.delete_paragraph(p_tag)


def insert_as_table(doc, db, as_tag):
    """Generates and inserts the table with the assessment scenarios for a HVA assessment.

    Args:
        doc (docx document): The docx template being edited.
        db (list): Assessment data
        as_tag (string): The string in the docx document that will be replaced with the table.
    """
    # Find tag location in document
    p_tag = xu.find_paragraph(doc, as_tag)

    # Stop if location does not exist
    if p_tag is None:
        return

    as_list = []
    for ascenario in af.model_gen(db, "ptportal.assessmentscenarios"):
        as_list.append(ascenario)

    if len(as_list) == 0:
        as_table = doc.add_table(1, 1)
        as_table.style = doc.styles['LightShading-Accent1']
        as_table.cell(0, 0).text = "No Assessment Scenarios found"
    else:
        as_table = doc.add_table(len(as_list), 1)
        as_table.style = doc.styles['LightShading-Accent1']
        for cnt, ele in enumerate(as_list):
            ascenario_descr = ele['fields']['scenario']
            ascenario_type = ele['fields']['assessment_scenario_type']
            tmp_str = "Scenario #{} - {} - {}".format(
                cnt + 1, ascenario_type, ascenario_descr
            )
            as_table.cell(cnt, 0).text = xu.xsafe(tmp_str)

    xu.move_table_after(as_table, p_tag)
    # Delete tag
    xu.delete_paragraph(p_tag)


def insert_pass_analysis(doc, db):
    """Inserts the password analysis file into the appendix.

    Args:
        doc (Docx object): The docx template.
        db (List of dictionaries): Json of the engagement data.
    """
    p_tag = xu.find_paragraph(doc, '{Password Analysis Output}')
    if p_tag is None:
        return

    p_tag.style = doc.styles['Tech Text']
    p_tag.text = af.get_db_info(db, 'report.fields.password_analysis', 'NA')


def insert_acronyms(doc, db):
    """Inserts list of acronyms into the appendix.

    Args:
        doc (Docx object): The docx template.
        db (List of dictionaries): Json of the engagement data.
    """

    p_tag = xu.find_paragraph(doc, '{Table: Abbreviations and Acronyms}')
    if p_tag is None:
        return

    acronym_table = doc.add_table(2, 2)

    acronym_table.style = "Report Default Table"
    acronym_table.cell(0, 0).text = "Acronym"
    acronym_table.cell(0, 1).text = "Definition"

    acronym_table.cell(1, 0).text = af.get_db_info(
        db, 'engagementmeta.fields.customer_initials', 'Customer Acronym'
    )
    acronym_table.cell(1, 1).text = af.get_db_info(
        db, 'engagementmeta.fields.customer_long_name', 'Customer Name'
    )

    for a in af.model_gen(db, "ptportal.acronym"):
        cells = acronym_table.add_row().cells
        cells[0].text = a["fields"]["acronym"]
        cells[1].text = a["fields"]["definition"]

    xu.move_table_after(acronym_table, p_tag)
    xu.delete_paragraph(p_tag)


def insert_port_mappings(doc, db):
    """Inserts the port mappings from the portal into the report.

    Args:
        doc (docx object): The docx template.
        db (List of dictionaries): The json data of the engagement.
    """
    p_tag = xu.find_paragraph(doc, '{Table: Port Mapping')
    if p_tag is None:
        return

    port_data = af.model_gen(db, 'ptportal.portmappinghost')
    port_table = doc.add_table(sum(1 for _ in port_data) + 1, 4)
    port_table.style = doc.styles['Report Default Table']
    port_table.cell(0, 0).text = "IP"
    port_table.cell(0, 1).text = "Hostname"
    port_table.cell(0, 2).text = "Ports"
    port_table.cell(0, 3).text = "Services"

    # We collect the data twice due to a generator only being able to be used once.
    port_data = af.model_gen(db, 'ptportal.portmappinghost')
    for port in enumerate(port_data):
        port_table.cell(port[0] + 1, 0).text = port[1]['fields']['ip']
        port_table.cell(port[0] + 1, 1).text = port[1]['fields']['hostname']
        port_table.cell(port[0] + 1, 2).text = port[1]['fields']['ports']
        port_table.cell(port[0] + 1, 3).text = port[1]['fields']['services']

    xu.move_table_after(port_table, p_tag)
    xu.delete_paragraph(p_tag)


def insert_attack_paths(doc, db, media_path):
    """Inserts all the attack paths that were uploaded and inserts them into the template. Function centers images and adds a page break after every single one.

    Args:
        doc (docx object): The docx template.
        db (List of dictionaries): The JSON of the engagment data.
        media_path (String): Path to the media files
    """
    maxHeight = 6.2
    maxWidth = 9
    p_tag = xu.find_paragraph(doc, '{Attack Path Diagrams}')

    if p_tag is None:
        return

    p = p_tag._p
    images = list(af.model_gen(db, 'ptportal.attackpath'))

    for i in images[::-1]:
        screen_p = doc.add_paragraph()
        screen_p.alignment = WD_ALIGN_PARAGRAPH.CENTER

        dimension = Image.open(media_path + i.get("fields").get("image_upload"))
        oldWidth, oldHeight = dimension.size
        dimension.close()
        # The division is to convert the pixels into inches for the docx.
        newWidth, newHeight = xu.resize_image(
            oldWidth / 72.0, oldHeight / 72.0, maxWidth, maxHeight
        )

        r = screen_p.add_run()
        r.add_picture(
            media_path + i.get("fields").get("image_upload"),
            width=Inches(newWidth),
            height=Inches(newHeight),
        )

        caption = xu.insert_caption(doc, i.get("fields").get("figure_description"))
        caption.add_run().add_break(WD_BREAK.PAGE)

        p.addnext(screen_p._p)
        screen_p._p.addnext(caption._p)

    xu.delete_paragraph(p_tag)


def generate_narrative_data(db):
    """
    Generates and returns all of the data needed to populate the narrative section of the report.

    Args:
        db (List of dict(s)): The JSON output of the assessment facts.

    Returns:
        List: List with the needed narrative information.
    """
    narrative = af.model_gen(db, 'ptportal.narrative')
    # Narrative is sorted by PK to get all of the sections sorted based on their main narrative.
    sorted_narrative = sorted(narrative, key=lambda i: i['pk'])
    screenshots = af.model_gen(db, 'ptportal.toolscreenshot')

    for s in screenshots:
        n = sorted_narrative[s.get("fields").get("narrative") - 1]
        # Screenshots are seperated from the main narrative so have to match up narratives with their respective screenshots.
        if "Screenshots" not in n:
            n["Screenshots"] = []
        n["Screenshots"].append(s)
    return sorted_narrative


def insert_narrative(doc, db, media_path):
    """Fills out the narrative section of the report.

    Args:
        doc (docx object): The docx template.
        db (List of dictionaries): The JSON of the engagment data.
        media_path (String): Path to the media files.
    """
    p_tag = xu.find_paragraph(doc, '{Narrative Sections}')
    if p_tag is None:
        return

    narrative_data = generate_narrative_data(db)
    order = ['External', 'Phishing']

    if af.get_db_info(db, 'report.fields.report_type', 'NA') != 'RPT':
        order.insert(1, 'Internal')

    # Due to the way sections are added everything is created in reverse order.
    for idx, o in enumerate(order):
        # heading  = doc.add_paragraph(o,style='Heading 2')
        heading = p_tag.insert_paragraph_before(o, style="Heading 2")
        # p_tag._p.addnext(heading._p)

        # Collect all narrative sections corresponding to the current main section since they are not in the correct order.
        narrative = [
            x for x in narrative_data if x.get("fields").get("type") == idx + 1
        ]
        for n in narrative[::-1]:
            # If the section has no screenshots or tool output then skip the section.
            if "Screenshots" not in n and n["fields"]["tool_output"] == "":
                print("Skipping narrative")
                continue

            subheading = doc.add_paragraph(n["fields"]["name"], style='Heading 3')
            heading._p.addnext(subheading._p)

            if n["fields"]["tool_output"] != "":
                tool_description = doc.add_paragraph()
                tool_description.text = n['fields']['tool_output_description']
                subheading._p.addnext(tool_description._p)

                codeblock = doc.add_paragraph("")
                subheading._p.addnext(codeblock._p)

                parser = rtp.RichTextParser(codeblock, text_style='Tech Text')
                parser.feed(n["fields"]["tool_output"])
                parser.emit_docx()

                xu.delete_paragraph(codeblock)

            if "Screenshots" in n:
                for s in n['Screenshots']:
                    screen_p = doc.add_paragraph()

                    r = screen_p.add_run()
                    screen_p.alignment = WD_ALIGN_PARAGRAPH.CENTER

                    sfile = media_path + s['fields']['file']
                    with Image.open(sfile) as img:
                        xu.dpi_safe(sfile, img)

                    r.add_picture(sfile, width=Inches(5.24))
                    subheading._p.addnext(screen_p._p)

                    caption = xu.insert_caption(doc, s['fields']['caption'])
                    screen_p._p.addnext(caption._p)

        # Adds a page break for each major section except for the phishing.
        if idx < 2:
            page_break = heading.insert_paragraph_before()
            r = page_break.add_run()
            r.add_break(WD_BREAK.PAGE)

    xu.delete_paragraph(p_tag)


def insert_risk_assessment(doc, db, mediapath):
    """Inserts the risk gauges into the report.

    Args:
        doc (docx document): The docx template being filled in.
        db (List of lists): Json format of assessment facts
        mediapath (String): Location of screenshots
    """

    # Build the findings lists for the verified exposures/risk assessments
    ite_exp = []
    dde_exp = []
    pe_exp = []
    re_exp = []
    for finding in af.model_gen(db, 'ptportal.uploadedfinding'):
        if finding.get("fields").get("insider_threat_exp") != 0.0:
            ite_exp.append(finding)
        if finding.get("fields").get("data_disclosure_exp") != 0.0:
            dde_exp.append(finding)
        if finding.get("fields").get("phishing_exp") != 0.0:
            pe_exp.append(finding)
        if finding.get("fields").get("ransomware_exp") != 0.0:
            re_exp.append(finding)

    table_tag = xu.find_paragraph(doc, '{Table: Verified Exposures}')
    # Makes it easier to then just loop through each entry associated with each section.
    risk_gauges = [
        ('Insider Threat', '/charts/itrisk.png', ite_exp),
        ('Phishing', '/charts/prisk.png', pe_exp),
        ('Ransomware', '/charts/rrisk.png', re_exp),
        ('Data Disclosure', '/charts/ddrisk.png', dde_exp),
    ]

    for gauge in risk_gauges[::-1]:
        p_tag = xu.find_paragraph(doc, "{" + gauge[0] + " Risk Gauge}")
        if p_tag is None:
            continue

        p = p_tag._p

        screen_p = doc.add_paragraph()
        r = screen_p.add_run()
        screen_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r.add_picture(mediapath + gauge[1], width=Inches(5.24))
        p.addnext(screen_p._p)

        # Caption under the gauge.
        caption = xu.insert_caption(doc, gauge[0] + " Exposure")
        screen_p._p.addnext(caption._p)

        if table_tag is not None:
            # Setting up finding table and headers.
            finding_table = doc.add_table(len(gauge[2]) + 1, 3)
            finding_table.style = doc.styles['Report Default Table']
            finding_table.cell(0, 0).text = 'Finding'
            finding_table.cell(0, 1).text = 'Weight'
            finding_table.cell(0, 2).text = 'Affected Systems'

            # Get the Affected systems
            as_info = af.build_affected_systems_info(db)
            as_info = {k: xu.xsafe(v) for k, v in as_info.items()}

            # Enumerate through the findings list and populate the table.
            for num, f in enumerate(gauge[2]):
                finding_table.cell(num + 1, 0).text = f['fields'][
                    'uploaded_finding_name'
                ]

                if gauge[0] == "Insider Threat":
                    finding_table.cell(num + 1, 1).text = str(
                        f['fields']['insider_threat_exp']
                    )
                elif gauge[0] == "Phishing":
                    finding_table.cell(num + 1, 1).text = str(
                        f['fields']['phishing_exp']
                    )
                elif gauge[0] == "Ransomware":
                    finding_table.cell(num + 1, 1).text = str(
                        f['fields']['ransomware_exp']
                    )
                elif gauge[0] == "Data Disclosure":
                    finding_table.cell(num + 1, 1).text = str(
                        f['fields']['data_disclosure_exp']
                    )

                finding_table.cell(num + 1, 2).text = af.find_affected_systems(
                    as_info, f["fields"]["affected_systems"]
                )

            xu.move_table_after(finding_table, table_tag)
            table_tag._p.addnext(doc.add_paragraph(gauge[0], style='Heading 2')._p)

        xu.delete_paragraph(p_tag)

    if table_tag is not None:
        xu.delete_paragraph(table_tag)


def insert_report_summary(doc, db, media_path):
    """Function that fills out all the tags inside of the summary section of the report.

    Args:
        doc (docx object): The docx template.
        db (List of dictionaries): The JSON of the engagment data.
        media_path (String): Path to the media files
    """

    # Update all the charts in that section.
    xu.update_charts(doc, media_path, '{Table: CISA Findings}', 'fschart.png')
    xu.update_charts(doc, media_path, "{NIST 800-53 Controls}", "nistcontrol.png")
    xu.update_charts(doc, media_path, "{NIST CSF}", "nistcsf.png")

    # Creates the bulleted sections in the summary.
    bullet_lists = [
        ('{Cisa Results}', 'report.fields.cisa_results'),
        ('{Cisa Recommendations}', 'report.fields.cisa_recommendations'),
    ]
    for bl in bullet_lists:
        p_tag = xu.find_paragraph(doc, bl[0])
        if p_tag is not None:
            text = af.get_db_info(db, bl[1], "").replace("\r", "\n")
            for bullet in text.split("\n")[::-1]:
                para = doc.add_paragraph()
                para.text = bullet
                para.style = "MemoBullet1"
                p_tag._p.addnext(para._p)
            xu.delete_paragraph(p_tag)

    # Counts the number of findings of the severities.
    counts = {"Critical": 0, "High": 0, "Medium": 0, "Low": 0, "Informational": 0}
    for finding in af.model_gen(db, 'ptportal.uploadedfinding'):
        counts[finding.get("fields").get("severity")] = (
            counts.get(finding.get("fields").get("severity"), 0) + 1
        )

    p_tag = xu.find_paragraph(doc, "{CISA Findings Summary}")
    if p_tag is not None:
        p_tag.text = f"CISA identified {counts['Critical']} critical-severity finding(s), {counts['High']} high-severity finding(s), {counts['Medium']} medium-severity finding(s), {counts['Low']} low-severity finding(s), and {counts['Informational']} informational-severity finding(s)."

    # Inserts all of the risk assessment section.
    insert_risk_assessment(doc, db, media_path)


def generate_ptp_report(template, output, draft, json, media):
    """Generates a PTP report based on the provided json data.

    Args:
        template (string): Path to the docx template that will be used to generate the report.
        output (string): Name of the file that will be saved and returned.
        draft (boolean): Marks the docx document with a draft watermark.
        json (string): Path to the json file with the assessment data.
        media (string): Path to the media folder that contains the assessment screenshots.
    """
    if not os.path.exists(json):
        print("Invalid json file: ", json)
        sys.exit(1)
    if not os.path.exists(media):
        print("Invalid media path: ", media)
        sys.exit(1)
    if not os.path.exists(template):
        print("Invalid template file: ", template)
        sys.exit(1)

    # ---- Get data
    # gather meta, ndf, mam stats for charts, tables, etc.
    rva_info = af.load_rva_info(json)

    if draft:
        af.set_draft(rva_info)

    af.set_title(rva_info)

    # populate the nist information from the ndf data
    af.get_nist_control_data(rva_info)

    # ---- open the report template
    doc = docx.Document(template)

    # ---- update the document header
    xu.update_title(doc, rva_info)

    # ---- replace paragraph tags
    for para in doc.paragraphs:
        for key in af.tag_db_map.keys():
            if key in para.text:
                inline = para.runs
                # Loop added to work with runs (strings with same style)
                for i in range(len(inline)):
                    if key in inline[i].text:
                        replace_str = af.get_db_info(rva_info, af.tag_db_map[key], key)
                        if isinstance(replace_str, list):
                            replace_str = ', '.join(replace_str)

                        text = inline[i].text.replace(key, str(replace_str))
                        inline[i].text = text

    for tbl in doc.tables:
        for row in tbl.rows:
            for cell in row.cells:
                for key in af.tag_db_map.keys():
                    for para in cell.paragraphs:
                        if key in para.text:
                            replace_str = af.get_db_info(
                                rva_info, af.tag_db_map[key], key
                            )
                            if isinstance(replace_str, list):
                                replace_str = ', '.join(replace_str)

                            text = para.text.replace(key, str(replace_str))
                            para.text = text

    # RVA 2.0 Template Insertions
    insert_report_summary(doc, rva_info, media)
    insert_narrative(doc, rva_info, media)
    insert_attack_paths(doc, rva_info, media)
    insert_port_mappings(doc, rva_info)
    insert_pass_analysis(doc, rva_info)
    insert_acronyms(doc, rva_info)

    # ---- update tables
    # ---- update assumption scenarios
    insert_as_table(doc, rva_info, "{Table: Assessment Scenarios}")

    # ---- add ndf appendix
    insert_ndf_table(doc, rva_info, "{Table: NCATS Detailed Findings}", media)

    insert_hva_str_table(doc, rva_info, "{Table: HVA Scenario Testing Results}")

    # ---- add HVA Targets
    insert_hva_targets_table(doc, rva_info, "{Table: HVA Targets}")

    # ---- add cis_csc recommendations
    insert_cis_csc_table(doc, rva_info, "{Table: CIS_CSC}")

    # ---- add mam appendix
    insert_mam_table(doc, mam_xml.mam_tag, rva_info)
    insert_mam_tactic(doc, mam_xml.mam_tactic_tag, rva_info)

    # ---- add fse appendix
    insert_fse_table(doc, rva_info)

    # ---- add appendix b for RPT
    insert_rpt_appendix_b_table_one(doc, rva_info)
    insert_rpt_appendix_b_table_two(doc, rva_info)
    insert_rpt_appendix_b_table_three(doc, rva_info)

    # ---- save the report
    doc.save(output)


def main():
    description = "Generate RVA report"
    parser = argparse.ArgumentParser(description=description)

    parser.add_argument("TEMPLATE", help="Report template.")
    parser.add_argument(
        "-o",
        "--output_file",
        action="store",
        default="RVA_Report_" + tstamp + ".docx",
        help="Report file name",
    )
    parser.add_argument(
        "-d", "--draft", action="store_true", help="Label report as a draft"
    )
    parser.add_argument("-j", "--json_file", action="store", required=True)
    parser.add_argument(
        "-m",
        "--media_path",
        action="store",
        default="./",
        help="Location of screenshots, etc.",
    )
    args = parser.parse_args()

    generate_ptp_report(
        args.TEMPLATE, args.output_file, args.draft, args.json_file, args.media_path
    )


if __name__ == '__main__':
    main()
