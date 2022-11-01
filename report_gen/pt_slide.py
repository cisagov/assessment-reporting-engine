"""
The RVA Outbrief slide generator takes a presentation template and
information from the RVA pen testing django app database to generate
an RVA Outbrief slide deck in pptx format
"""
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from os import terminal_size
import sys
import os.path
import argparse
import datetime
import report_gen.utilities.rt_parser as rt

try:
    import pptx
except ImportError:
    print("Must have python-pptx library installed")
    sys.exit(1)

if pptx.__version__ < "0.6.18":
    print("Must have python-pptx version 0.6.18 or greater")
    sys.exit(1)

import report_gen.utilities.assessment_facts as af
import report_gen.utilities.img_util as iu
from pptx.util import Inches, Pt

from pptx.enum.text import PP_ALIGN, MSO_AUTO_SIZE
from pptx.dml.color import RGBColor

# Constants
tstamp = str(datetime.datetime.now().strftime("%Y%m%d_%H.%M.%S"))
pr_tstamp = str(datetime.datetime.now().strftime("%b %d, %Y"))

notice = (
    "The information that follows in this presentation is "
    "preliminary and is not fully validated or finalized. "
    "Engineers and managers are still in the process of analyzing "
    "this information and preparing findings.  It is presented in "
    "its rough draft state and may be significantly modified "
    "prior to the publication of the final report or an official "
    "out-brief."
    "\n\n"
    "This {} is not an audit.  The services provided only "
    "demonstrates what actions an adversary could accomplish "
    "within the timeframe of the assessment."
)

red = RGBColor(255, 0, 0)
green = RGBColor(70, 200, 0)  # pure green is hard to read
blue = RGBColor(0, 82, 136)
tbl_text = RGBColor(90, 91, 93)
LightStyle1Accent6 = "{68D230F3-CF80-4859-8CE7-A43EE81993B5}"

# Master slide template numbers for corresponding report types.
report_type_opening = {"RVA": 10, "RPT": 12, "HVA": 13}


def iter_cells(table):
    """Walks through the cells of a table.

    Args:
        table (pptx table object): The table that will be iterated through.

    Yields:
        [Generator]: Returns a generator object that contains each cell inside of the table.
    """
    for row in table.rows:
        for cell in row.cells:
            yield cell


def table_adjust_fontsize(table, sz):
    """Adjust the text size in all of the cells of a table.

    Args:
        table ([type]): [description]
        sz ([type]): [description]
    """
    for cell in iter_cells(table):
        for paragraph in cell.text_frame.paragraphs:
            for run in paragraph.runs:
                run.font.size = Pt(sz)


def cell_text(t, r, c, s, alignment="n", color=None, size=None):
    """Helper function to assist in setting various options for cells in a table.

    Args:
        t (pptx table): The table that contains the cell being changed.
        r (int): The row of the cell.
        c (int): The column of the cell.
        s (str): The text inside of the cell.
        alignment (str, optional): Sets the alignment of the text inside of the cell. Defaults to 'n'.
        color (RGBColor, optional): The color of the text to be set. Defaults to None.
        size (int, optional): The size to set the text in the cell to. Defaults to None.
    """
    t.cell(r, c).text = s
    if color is not None:
        t.cell(r, c).text_frame.paragraphs[0].font.color.rgb = color

    if size is not None:
        t.cell(r, c).text_frame.paragraphs[0].font.size = size

    if alignment == "n":
        # no alignment specified
        return
    elif alignment == "c":
        alignment = PP_ALIGN.CENTER
    elif alignment == "l":
        alignment = PP_ALIGN.LEFT
    elif alignment == "j":
        alignment = PP_ALIGN.JUSTIFY
    else:
        alignment = PP_ALIGN.CENTER

    t.cell(r, c).text_frame.paragraphs[0].alignment = alignment


def blocked(s):
    """Returns proper strings and color of phishing table entries.

    Args:
        s (str): The short string of the phishing cell.

    Returns:
        (str, RGBColor): Returns a tuble containing the proper string and color for the text.
    """
    if s == "B":
        return ("Blocked", green)
    elif s == "N":
        return ("Not Blocked", red)
    else:
        return ("Not Set", None)


def add_hyperlink(para, link_text, link_address):
    """Adds a hyperlinked text inside of the slide.

    Args:
        para (pptx paragraph): The paragarph that the hyperlink will be inserted at.
        link_text (str): The text that holds the link.
        link_address (str): Where the hyperlink redirects to.
    """
    if link_text is None:
        link_text = link_address

    run = para.add_run()
    run.text = link_text
    hlink = run.hyperlink
    hlink.address = link_address


"""
def hva_attack_overview(prs, rva_info, rt_str, scenario_field, scenario):
    ao_slide_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(ao_slide_layout)
    content_hva_placeholder = slide.placeholders[1].text_frame
    title = slide.shapes.title
    title.text = "HVA Results"

    # ---- add content
    paragraph = content_hva_placeholder.paragraphs[0]
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = rt_str

    scenario = af.get_db_info(rva_info,
                              scenario_field,
                              scenario)
    paragraph = content_hva_placeholder.add_paragraph()
    paragraph.level = 2
    run = paragraph.add_run()
    run.text = scenario
    """


def add_section_title(prs, title):
    """Adds a section slide into the powerpoint.

    Args:
        prs (pptx presentation): The powerpoint presentation.
        title (str): Name of the section that will be inserted in the slide.
    """
    section_slide_layout = prs.slide_layouts[11]
    slide = prs.slides.add_slide(section_slide_layout)
    slide.shapes.title.text = title


def auto_size(shape):
    """Attempts to autosize the text inside of a textbox.

    Args:
        shape (powerpoint shape): The shape in which the text is being resized.
    """
    total_runs = 0
    font_size = 26

    for paragraph in shape.paragraphs:
        total_runs += len(paragraph.runs)

    if total_runs > 15:
        # don't font to go below 10 points.
        # user can always switch to 2 column mode manually.
        font_size = max(10, font_size - (total_runs - 5))

    for paragraph in shape.paragraphs:
        for run in paragraph.runs:
            run.font.size = Pt(font_size)


def insert_title_slide(prs, report_type, rva_info, draft):
    """Inserts the title slide into the presentation.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
        rva_info (List[Dict]): The Json data from the engagement.
        draft (bool): Boolean to mark if the presentation is a draft or not.
    """
    open_slide_layout = prs.slide_layouts[report_type_opening[report_type]]
    slide = prs.slides.add_slide(open_slide_layout)

    body_info = slide.placeholders[13]
    date_info = slide.placeholders[14]
    draft_info = slide.placeholders[15]
    fouo_info = slide.placeholders[16]

    customer = af.get_db_info(
        rva_info, "engagementmeta.fields.customer_long_name", "Stakeholder Long Name"
    )
    customer_initials = af.get_db_info(
        rva_info, "engagementmeta.fields.customer_initials", "Stakeholder Initials"
    )

    body_info.text = customer + "\n (" + customer_initials + ")"
    date_info.text = pr_tstamp  # "7/3/2000"
    draft_info.text = " "  # must be a space, otherwise it drops
    fouo_info.text = "FOR OFFICIAL USE ONLY"

    if draft:
        draft_info.text = "— DRAFT —"


def insert_notice_slide(prs, report_type):
    """Insert the notice slide into the powerpoint.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
    """
    notice_slide_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(notice_slide_layout)

    title = slide.shapes.title
    title.text = "NOTICE:"

    notice_placeholder = slide.placeholders[1]
    notice_placeholder.text = notice.format(report_type)


def insert_agenda_slide(prs, report_type, rware):
    """Generates the agenda slide. Puts in specific agenda depending on the report.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
        rware (bool): Wether ransomware is part of the presentation.
    """
    agenda_slide_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(agenda_slide_layout)

    title = slide.shapes.title
    title.text = "Agenda"

    agenda_placeholder = slide.placeholders[1].text_frame
    paragraph = agenda_placeholder.paragraphs[0]
    paragraph.level = 1

    run = paragraph.add_run()
    run.text = (
        "Assessment Timeframe & Team\nScope and Limitations\nTargets and Status\n"
    )
    run.text += "Goals\n"

    if report_type == "RPT":
        run.text += "Open Source Information Gathering\n"
    else:
        run.text += "Attack Path\n"

    run.text += "Findings\n"

    if rware:
        run.text += "Ransomware\n"

    run.text += "Observations\n"

    if report_type == "HVA":
        run.text += "BOD 18-02 Requirements\n"

    run.text += "Next Steps\nQuestions"


def insert_timeframe(prs, report_type, rva_info):
    """Inserts the slide with details of the timeframe from the engagement.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
        rva_info (List[Dict]): The Json data from the engagement.
    """
    title_only = prs.slide_layouts[4]
    slide = prs.slides.add_slide(title_only)
    shapes = slide.shapes
    shapes.title.text = "Assessment Timeframe & Team"

    if report_type != "RPT":
        rows = 3
    else:
        rows = 2

    # Date table
    cols = 2
    left = Inches(1.60)
    top = Inches(1.45)
    width = Inches(7.9)
    height = Inches(0.8)
    table = shapes.add_table(rows, cols, left, top, width, height).table
    tbl = table._graphic_frame._element.graphic.graphicData.tbl
    tbl[0][-1].text = LightStyle1Accent6

    # set column widths
    table.columns[0].width = Inches(3.2)
    table.columns[1].width = Inches(4.7)

    # write body cells
    start_date = af.get_db_info(
        rva_info, "engagementmeta.fields.ext_start_date", "External Start Date"
    )
    end_date = af.get_db_info(
        rva_info, "engagementmeta.fields.ext_end_date", "External End Date"
    )

    cell_text(table, 0, 0, "Date", "c", tbl_text)
    cell_text(table, 0, 1, "Activity", "c", tbl_text)

    cell_text(table, 1, 0, str(start_date) + " to " + str(end_date), color=tbl_text)
    cell_text(table, 1, 1, "External Assessment", color=tbl_text)

    if report_type != "RPT":
        int_start_date = af.get_db_info(
            rva_info, "engagementmeta.fields.int_start_date", "Internal Start Date"
        )
        int_end_date = af.get_db_info(
            rva_info, "engagementmeta.fields.int_end_date", "Internal End Date"
        )
        cell_text(
            table,
            2,
            0,
            str(int_start_date) + " to " + str(int_end_date),
            color=tbl_text,
        )
        cell_text(table, 2, 1, "Internal Assessment", color=tbl_text)

    # - poc table
    rows = 2
    cols = 2
    left = Inches(1.60)
    top = Inches(3.05)
    width = Inches(7.9)
    height = Inches(0.8)
    table = shapes.add_table(rows, cols, left, top, width, height).table
    tbl = table._graphic_frame._element.graphic.graphicData.tbl
    tbl[0][-1].text = LightStyle1Accent6

    # set column widths
    table.columns[0].width = Inches(3.2)
    table.columns[1].width = Inches(4.7)

    # write body cells
    poc_name = af.get_db_info(
        rva_info, "engagementmeta.fields.customer_POC_name", "Customer Name"
    )
    poc_email = af.get_db_info(
        rva_info, "engagementmeta.fields.customer_POC_email", "Customer Email"
    )

    cell_text(table, 0, 0, "Customer Point of Contact (POC)", "c", color=tbl_text)
    table.cell(0, 0).merge(table.cell(0, 1))

    cell_text(table, 1, 0, poc_name, color=tbl_text)
    cell_text(table, 1, 1, poc_email, color=tbl_text)

    # - rva fed lead table
    rows = 2
    cols = 2
    left = Inches(1.60)
    top = Inches(4.18)
    width = Inches(7.9)
    height = Inches(0.8)
    table = shapes.add_table(rows, cols, left, top, width, height).table
    tbl = table._graphic_frame._element.graphic.graphicData.tbl
    tbl[0][-1].text = LightStyle1Accent6

    # set column widths
    table.columns[0].width = Inches(3.2)
    table.columns[1].width = Inches(4.7)

    # write body cells
    fed_name = af.get_db_info(
        rva_info, "engagementmeta.fields.team_lead_name", "Fed Lead Name"
    )
    fed_email = af.get_db_info(
        rva_info, "engagementmeta.fields.team_lead_email", "Fed Lead Email"
    )

    cell_text(table, 0, 0, "{} Fed Lead".format(report_type), "c", color=tbl_text)
    table.cell(0, 0).merge(table.cell(0, 1))

    cell_text(table, 1, 0, fed_name, color=tbl_text)
    cell_text(table, 1, 1, fed_email, color=tbl_text)

    # - rva team table
    rows = 3
    cols = 2
    left = Inches(1.60)
    top = Inches(5.30)
    width = Inches(7.9)
    height = Inches(0.8)
    table = shapes.add_table(rows, cols, left, top, width, height).table
    tbl = table._graphic_frame._element.graphic.graphicData.tbl
    tbl[0][-1].text = LightStyle1Accent6

    # set column widths
    table.columns[0].width = Inches(3.95)
    table.columns[1].width = Inches(3.95)

    # write body cells
    cell_text(table, 0, 0, "{} Team".format(report_type), "c", color=tbl_text)
    table.cell(0, 0).merge(table.cell(0, 1))

    cell_text(table, 1, 0, "SEI Person", color=tbl_text)
    cell_text(table, 1, 1, "Sub-contractor 1", color=tbl_text)
    cell_text(table, 2, 0, "Sub-contractor 2", color=tbl_text)


def insert_scope_slide(prs, report_type, rva_info, ip_ext, ip_int):
    """Generates the slide containing the scope of the engagement.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
        rva_info (List[Dict]): The Json data from the engagement.
        ip_ext (int): The number of external IP addresses scanned.
        ip_int (int): The number of internal IP addresses scanned.
    """
    # ---- add scope and limitations slide
    scope_slide_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(scope_slide_layout)
    scope_placeholder = slide.placeholders[1].text_frame

    title = slide.shapes.title
    title.text = "Scope and Limitations"

    # external bullet
    paragraph = scope_placeholder.paragraphs[0]
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = "External IP Ranges"

    # external information
    paragraph = scope_placeholder.add_paragraph()
    paragraph.level = 2
    run = paragraph.add_run()
    run.text = "{} IP addresses across several subnets.".format(ip_ext)

    # internal bullet
    if report_type != "RPT":
        paragraph = scope_placeholder.add_paragraph()
        paragraph.level = 1
        run = paragraph.add_run()
        run.text = "Internal IP Ranges"

        # internal information
        paragraph = scope_placeholder.add_paragraph()
        paragraph.level = 2
        run = paragraph.add_run()
        run.text = "{} IP addresses across several subnets.".format(ip_int)

    # testing limitations bullet
    paragraph = scope_placeholder.add_paragraph()
    paragraph.level = 0
    run = paragraph.add_run()
    paragraph = scope_placeholder.add_paragraph()
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = "Testing Limitations"

    # limitations
    paragraph = scope_placeholder.add_paragraph()
    paragraph.level = 2
    run = paragraph.add_run()
    run.text = "Short timeframe - overcome by working with {} staff".format(
        af.get_db_info(rva_info, "engagementmeta.fields.customer_initials", "CI")
    )

    paragraph = scope_placeholder.add_paragraph()
    paragraph.level = 2
    run = paragraph.add_run()
    run.text = "Testing assumes in-scope systems are a fair representation of all production systems"

    """
    #HVA Assessment Targets
    if report_type == "HVA":
        oo_layout = prs.slide_layouts[3]
        slide = prs.slides.add_slide(oo_layout)
        title = slide.shapes.title
        oo_placeholder = slide.placeholders[1].text_frame
        title.text = "Targets and Status"

        # gather HVA Target Data
        targets = []
        for cnt, target in enumerate(af.model_gen(rva_info, "ptportal.hvatarget")):
            ele = target['fields']
            targets.append(ele)

        # set the shape and create the table
        rows = 1 + len(targets)
        cols = 3
        left = Inches(0.75)
        top = Inches(2.0)
        width = Inches(9)  # need additional room for padding, etc over cols
        height = Inches(0)

        shapes = slide.shapes
        table = shapes.add_table(rows, cols, left,
                                 top, width, height).table
        tbl = table._graphic_frame._element.graphic.graphicData.tbl
        tbl[0][-1].text = LightStyle1Accent6
        table.columns[0].width = Inches(3)
        table.columns[1].width = Inches(3)
        table.columns[2].width = Inches(1.5)

        # add the table header
        cell_text(table, 0, 0, 'Target Name', 'c', tbl_text, Pt(14))
        cell_text(table, 0, 1, 'Target Addresses', 'c', tbl_text, Pt(14))
        cell_text(table, 0, 2, 'Status', 'c', tbl_text, Pt(14))

        # output the table
        i = 0
        for item in targets:
            name_str = item['name']
            addr_str = item['address']
            status_str = item['status']
            cell_text(table, i + 1, 0, name_str, 'l', tbl_text, Pt(12))
            cell_text(table, i + 1, 1, addr_str, 'l', tbl_text, Pt(12))
            cell_text(table, i + 1, 2, status_str, 'l', tbl_text, Pt(12))
            i += 1
    """


def insert_goals_slide(prs, report_type):
    """Generates the goals of the assessment slide.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
    """
    add_section_title(prs, "Goals")

    goals_slide_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(goals_slide_layout)
    goals_placeholder = slide.placeholders[1].text_frame

    title = slide.shapes.title
    title.text = "Goals"

    paragraph = goals_placeholder.paragraphs[0]
    paragraph.level = 1
    run = paragraph.add_run()
    if report_type != "RPT":
        run.text = (
            "Identify risks within the environment\nProvide an actionable report that will increase security"
            " posture\nIdentify specific external and internal attack vectors that can be used to compromise assets"
            "\nDetermine extent of possible compromise utilizing existing vulnerabilities"
        )
    else:
        run.text = (
            "Identify risks within the environment\nProvide an actionable report that will increase security"
            " posture\nIdentify specific external attack vectors that can be used to compromise assets"
            "\nDetermine extent of possible compromise utilizing existing vulnerabilities"
        )


def generate_narrative_data(db):
    """
    Generates and returns all of the data needed to populate the narrative section of the report.

    Args:
        db (List of dict(s)): The JSON output of the assessment facts.

    Returns:
        List: List with the needed narrative information.
    """
    narrative = af.model_gen(db, "ptportal.narrative")
    # Narrative is sorted by PK to get all of the sections sorted based on their main narrative.
    sorted_narrative = sorted(narrative, key=lambda i: i["pk"])
    screenshots = af.model_gen(db, "ptportal.toolscreenshot")

    for s in screenshots:
        n = sorted_narrative[s.get("fields").get("narrative") - 1]
        # Screenshots are seperated from the main narrative so have to match up narratives with their respective screenshots.
        if "Screenshots" not in n:
            n["Screenshots"] = []
        n["Screenshots"].append(s)
    return sorted_narrative


def insert_narrative_slide(prs, report_type, rva_info, media_path):
    """Generates the narrative slides and inserts each step of the narrative.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
        rva_info (List[Dict]): The Json data from the engagement.
        media_path (str): The media file path.
    """
    add_section_title(prs, "Narrative")

    narrative_data = generate_narrative_data(rva_info)
    order = ["Phishing", "External", "Internal"]

    for o in order:
        add_section_title(prs, o)

        narrative = [x for x in narrative_data if x.get("fields").get("type") == o]
        for n in narrative:
            if "Screenshots" not in n and n["fields"]["tool_output"] == "":
                continue

            if "Screenshots" in n:
                for s in n["Screenshots"]:
                    screenshot = prs.slides.add_slide(prs.slide_layouts[9])

                    screenshot.shapes.title.text = n["fields"]["name"]

                    for shape in screenshot.shapes:
                        if hasattr(shape, "text"):
                            if shape.text == "":
                                shape.text = s["fields"]["caption"]

                    sfile = media_path + s["fields"]["file"]
                    (x, y, w, h) = iu.get_screenshot_dimensions(sfile)
                    screenshot.shapes.add_picture(
                        sfile, Inches(x), Inches(y), width=Inches(w), height=Inches(h)
                    )

                    notes_slide = screenshot.notes_slide
                    text_frame = notes_slide.notes_text_frame
                    text_frame.text = (
                        "Image Caption\n"
                        + s["fields"]["caption"]
                        + "\n\nScreenshot Description\n"
                        + n["fields"]["tool_output_description"]
                    )

            if n["fields"]["tool_output"] != "":
                code_slide = prs.slides.add_slide(prs.slide_layouts[14])
                code_slide.shapes.title.text = n["fields"]["name"]

                code_paragraph = code_slide.placeholders[1].text_frame
                parser = rt.RichTextParser(code_paragraph)
                parser.feed(n["fields"]["tool_output"])
                parser.emit_pptx()

                for shape in code_slide.shapes:
                    if hasattr(shape, "text"):
                        if shape.text == "":
                            shape.text = n["fields"]["tool_output_description"]

    """
    # ---- HVA attack overview results slides
    if report_type == "HVA":
        # ---- External Assessment slide
        hva_attack_overview(prs, rva_info,
                            "External Assessment",
                            "report.fields.HVA_external_scenario",
                            "External Assessment Scenario")

        # ---- Phishing Assessment slide
        hva_attack_overview(prs, rva_info,
                            "Phishing Assessment",
                            "report.fields.HVA_phishing_scenario",
                            "Phishing Assessment Scenario")

        # ---- Web Application Assessment slide
        hva_attack_overview(prs, rva_info,
                            "Web Application Assessment",
                            "report.fields.HVA_web_application_scenario",
                            "Web Application Assessment Scenario")

        # ---- Internal Assessment slide
        hva_attack_overview(prs, rva_info,
                            "Internal Assessment",
                            "report.fields.HVA_internal_scenario",
                            "Internal Assessment Scenario")

        # ---- Internal Threat Emulation slide
        hva_attack_overview(prs, rva_info,
                            "Internal Threat Emulation",
                            "report.fields.HVA_ITE_scenario",
                            "Internal Threat Emulation Scenario")

        # ---- Data Exfiltration slide
        hva_attack_overview(prs, rva_info,
                            "Data Exfiltration",
                            "report.fields.HVA_data_exfiltration_scenario",
                            "Data Exfiltration Scenario")
    """


def insert_OSINT_slide(prs, report_type, rva_info):
    """Generate the OSINT slides if the report is a RPT.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
        rva_info (List[Dict]): The Json data from the engagement.
    """
    osint_slide_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(osint_slide_layout)

    rpt_info = af.get_db_info(rva_info, "report.fields", "keyNA")

    email_id = str(rpt_info["emails_identified"])
    email_brch = str(rpt_info["emails_breached"])
    creds_identified = str(rpt_info["credentials_identified"])
    creds_validated = str(rpt_info["credentials_validated"])

    if email_id == "0":
        email_id = "<NOT SET>"
    if email_brch == "0":
        email_brch = "<NOT SET>"
    if creds_identified == "0":
        creds_identified = "<NOT SET>"
    if creds_validated == "0":
        creds_validated = "<NOT SET>"

    title = slide.shapes.title
    agenda_placeholder = slide.placeholders[1].text_frame
    title.text = "Open Source Information Gathering"
    paragraph = agenda_placeholder.paragraphs[0]
    # Title is two lines at font size 40, add_paragraph() adds space from title to stop font overlap
    paragraph = agenda_placeholder.add_paragraph()
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = email_id + " emails were scraped from various Internet sources."

    paragraph = agenda_placeholder.add_paragraph()
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = (
        email_brch
        + " scraped emails were identified as existing in previous data breaches (according to HaveIBeenPwned database)"
    )

    paragraph = agenda_placeholder.add_paragraph()
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = (
        creds_identified
        + " sets of credentials (emails and passwords) identified in the wild."
    )

    paragraph = agenda_placeholder.add_paragraph()
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = creds_validated + " sets of credentials were validated."


def insert_findings_slides(prs, report_type, rva_info, ss_info, media_path):
    """Generates the slides for each finding in the assessment.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
        rva_info (List[Dict]): The Json data from the engagement.
        ss_info (list): The informatoin about all of the findings screenshots.
        media_path (str): The media file location.
    """

    # ---- append all the findings (screenshots) to the slide deck
    add_section_title(prs, "Findings")

    # ---- add Findings Severity Classification
    title_only = prs.slide_layouts[16]
    slide = prs.slides.add_slide(title_only)

    # create findings overview slide based on existing layout
    findings_overview_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(findings_overview_layout)

    # set findings overview slide title
    title = slide.shapes.title
    title.text = "Findings Overview"

    # bold, center, underline PRELIMINARY text
    slide_text = slide.placeholders[1].text_frame
    slide_text.auto_size = MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE
    slide_text.paragraphs[0].alignment = PP_ALIGN.CENTER
    run = slide_text.paragraphs[0].add_run()
    run.text = "-- PRELIMINARY --"
    run.font.bold = True
    run.font.underline = True

    # create two paragraphs for each severity (one for header, one for contents)
    critical_p = slide_text.add_paragraph()
    critical_p_bullet = slide_text.add_paragraph()
    critical_p_bullet.level = 1
    critical_p_bullet.add_run()

    high_p = slide_text.add_paragraph()
    high_p_bullet = slide_text.add_paragraph()
    high_p_bullet.level = 1
    high_p_bullet.add_run()

    medium_p = slide_text.add_paragraph()
    medium_p_bullet = slide_text.add_paragraph()
    medium_p_bullet.level = 1
    medium_p_bullet.add_run()

    low_p = slide_text.add_paragraph()
    low_p_bullet = slide_text.add_paragraph()
    low_p_bullet.level = 1
    low_p_bullet.add_run()

    info_p = slide_text.add_paragraph()
    info_p_bullet = slide_text.add_paragraph()
    info_p_bullet.level = 1
    info_p_bullet.add_run()

    # create and populate severity : findings dictionary
    findings_overview = {}

    for cnt, finding in enumerate(af.model_gen(rva_info, "ptportal.uploadedfinding")):
        fname = finding['fields']
        severity = fname['severity']
        if severity in findings_overview:
            findings_overview[severity].append(fname)
        else:
            findings_overview[severity] = [fname]

    for severity, findings in findings_overview.items():
        findings_overview[severity] = sorted(
            findings, key=lambda i: (i['assessment_type'], i['uploaded_finding_name'])
        )

    for severity, findings in findings_overview.items():
        findings_overview[severity] = sorted(
            findings, key=lambda i: (i["assessment_type"], i["uploaded_finding_name"])
        )

    # create header for each existing severity level
    for severity in findings_overview:
        if severity == "Critical":
            c_run = critical_p.add_run()
            c_run.text = "Critical"
            c_run.font.bold = True
            c_run.font.underline = True
        elif severity == "High":
            h_run = high_p.add_run()
            h_run.text = "High"
            h_run.font.bold = True
            h_run.font.underline = True
        elif severity == "Medium":
            m_run = medium_p.add_run()
            m_run.text = "Medium"
            m_run.font.bold = True
            m_run.font.underline = True
        elif severity == "Low":
            l_run = low_p.add_run()
            l_run.text = "Low"
            l_run.font.bold = True
            l_run.font.underline = True
        elif severity == "Informational":
            i_run = info_p.add_run()
            i_run.text = "Informational"
            i_run.font.bold = True
            i_run.font.underline = True

    # create bullet for each finding that exists under each severity level
    for severity, findings in findings_overview.items():
        for finding in findings:
            if severity == "Critical":
                c_run = critical_p_bullet.add_run()
                c_run.text = str(finding['uploaded_finding_name']) + "\n"
            elif severity == 'High':
                h_run = high_p_bullet.add_run()
                h_run.text = str(finding['uploaded_finding_name']) + "\n"
            elif severity == 'Medium':
                m_run = medium_p_bullet.add_run()
                m_run.text = str(finding['uploaded_finding_name']) + "\n"
            elif severity == 'Low':
                l_run = low_p_bullet.add_run()
                l_run.text = str(finding['uploaded_finding_name']) + "\n"
            elif severity == 'Informational':
                i_run = info_p_bullet.add_run()
                i_run.text = str(finding['uploaded_finding_name']) + "\n"

    # remove trailing newlines which turn into extra bullets (has to be a better way to do this entire process)
    critical_p_bullet.runs[-1].text = critical_p_bullet.runs[-1].text.rstrip()
    high_p_bullet.runs[-1].text = high_p_bullet.runs[-1].text.rstrip()
    medium_p_bullet.runs[-1].text = medium_p_bullet.runs[-1].text.rstrip()
    low_p_bullet.runs[-1].text = low_p_bullet.runs[-1].text.rstrip()
    info_p_bullet.runs[-1].text = info_p_bullet.runs[-1].text.rstrip()

    # call auto_size helper method to ensure all findings fit on page
    auto_size(slide_text)

    sshot_slide_layout = prs.slide_layouts[9]

    ordering = {'Critical': 0, 'High': 1, 'Medium': 2, 'Low': 3, 'Informational': 4}
    sorted_findings = sorted(
        af.model_gen(rva_info, "ptportal.uploadedfinding"),
        key=lambda i: (
            ordering[i['fields']['severity']],
            i['fields']['assessment_type'],
            i['fields']['uploaded_finding_name'],
        ),
    )
    for cnt, finding in enumerate(sorted_findings):

        fpk = finding["pk"]
        finding_fields = finding["fields"]
        fname = finding_fields["uploaded_finding_name"]

        severity = finding_fields["severity"]
        scrn_shots = af.find_screenshots(ss_info, fpk)

        if fname.startswith("Spear Phishing Weaknesses"):
            # find and record the payloads
            spw_payloads = af.model_gen(rva_info, "ptportal.spearphishingweaknesses")
            spw_row_info = []
            for ele in spw_payloads:
                spw_row_info.append(ele["fields"])

            # determine number of slides needed
            SPW_PER_SLIDE = 5

            pages_needed = ((len(spw_row_info) - 1) // SPW_PER_SLIDE) + 1
            rows_needed = len(spw_row_info)

            for pg in range(pages_needed):
                slide = prs.slides.add_slide(sshot_slide_layout)
                title = slide.shapes.title
                run = title.text_frame.paragraphs[0].add_run()
                run.text = severity
                run.font.size = Pt(40)
                title.text_frame.add_paragraph()
                run = title.text_frame.paragraphs[1].add_run()
                run.text = fname
                run.font.size = Pt(24)

                # set the shape and create the table
                # rows = 1 + len(spw_row_info)
                if rows_needed > SPW_PER_SLIDE:
                    rows = SPW_PER_SLIDE + 1
                else:
                    rows = rows_needed + 1
                cols = 4
                left = Inches(1.0)
                top = Inches(2.0)
                width = Inches(5.6)
                height = Inches(0.8)

                shapes = slide.shapes
                table = shapes.add_table(rows, cols, left, top, width, height).table
                tbl = table._graphic_frame._element.graphic.graphicData.tbl
                tbl[0][-1].text = LightStyle1Accent6
                # give the payload description a bit more room
                table.columns[0].width = Inches(3.4)

                # add the table header
                cell_text(table, 0, 0, "Payload", "c", tbl_text, Pt(16))
                cell_text(table, 0, 1, "C2 Protocol", "c", tbl_text, Pt(16))
                cell_text(table, 0, 2, "Border Protection", "c", tbl_text, Pt(16))
                cell_text(table, 0, 3, "Host Protection", "c", tbl_text, Pt(16))

                # fill in the the rows
                start_row = pg * SPW_PER_SLIDE
                end_row = (pg + 1) * SPW_PER_SLIDE
                rows_needed = rows_needed - SPW_PER_SLIDE
                for i, r in enumerate(spw_row_info[start_row:end_row]):
                    cell_text(
                        table, i + 1, 0, r["payload_description"], "l", tbl_text, Pt(16)
                    )
                    cell_text(table, i + 1, 1, r["c2_protocol"], "c", tbl_text, Pt(16))
                    b_txt, b_color = blocked(r["border_protection"])
                    cell_text(table, i + 1, 2, b_txt, "c", b_color, Pt(16))
                    h_txt, h_color = blocked(r["host_protection"])
                    cell_text(table, i + 1, 3, h_txt, "c", h_color, Pt(16))

        elif fname.startswith("Spear Phishing Susceptibility"):
            slide = prs.slides.add_slide(sshot_slide_layout)
            title = slide.shapes.title
            run = title.text_frame.paragraphs[0].add_run()
            run.text = severity
            run.font.size = Pt(40)
            title.text_frame.add_paragraph()
            run = title.text_frame.paragraphs[1].add_run()
            run.text = fname
            run.font.size = Pt(24)

            # find and record the payloads(campaigns)
            sps_payloads = af.model_gen(
                rva_info, "ptportal.spearphishingsusceptibility"
            )

            sps_row_info = []
            for ele in sps_payloads:
                sps_row_info.append(ele["fields"])

            # set the shape and create the table
            rows = 1 + len(sps_row_info)
            cols = 9
            left = Inches(1.0)
            top = Inches(2.0)
            width = Inches(8.3)
            height = Inches(0.8)

            shapes = slide.shapes
            table = shapes.add_table(rows, cols, left, top, width, height).table
            tbl = table._graphic_frame._element.graphic.graphicData.tbl
            tbl[0][-1].text = LightStyle1Accent6

            # add the table header
            cell_text(table, 0, 0, 'Campaign', 'c', tbl_text)
            cell_text(table, 0, 1, 'Emails Sent', 'c', tbl_text)
            cell_text(table, 0, 2, 'Emails Delivered', 'c', tbl_text)
            cell_text(table, 0, 3, 'Unique Clicks', 'c', tbl_text)
            cell_text(table, 0, 4, 'Total Clicks', 'c', tbl_text)
            cell_text(table, 0, 5, 'Click Rate', 'c', tbl_text)
            cell_text(table, 0, 6, 'Time to fist click', 'c', tbl_text)
            cell_text(table, 0, 7, 'Users Exploited', 'c', tbl_text)
            cell_text(table, 0, 8, 'Length of campaign', 'c', tbl_text)

            # fill in the the rows
            for i, r in enumerate(sps_row_info):
                cell_text(table, i + 1, 0, str(i + 1), 'j', tbl_text)
                cell_text(table, i + 1, 1, str(r['emails_sent']), 'j', tbl_text)
                cell_text(table, i + 1, 2, str(r['emails_delivered']), 'j', tbl_text)
                cell_text(table, i + 1, 3, str(r['unique_clicks']), 'j', tbl_text)
                cell_text(table, i + 1, 4, str(r['total_clicks']), 'j', tbl_text)
                cell_text(
                    table,
                    i + 1,
                    5,
                    "{0:.2%}".format(float(r["click_rate"])),
                    'j',
                    tbl_text,
                )
                cell_text(table, i + 1, 6, str(r['time_to_first_click']), 'j', tbl_text)
                cell_text(table, i + 1, 7, str(r['number_exploited']), 'j', tbl_text)
                cell_text(table, i + 1, 8, str(r['length_of_campaign']), 'j', tbl_text)

            # since table is wide, adjust the font size
            table_adjust_fontsize(table, 10)

        elif fname.startswith("Sensitive Data Exfiltration"):
            slide = prs.slides.add_slide(sshot_slide_layout)
            title = slide.shapes.title
            run = title.text_frame.paragraphs[0].add_run()
            run.text = severity
            run.font.size = Pt(40)
            title.text_frame.add_paragraph()
            run = title.text_frame.paragraphs[1].add_run()
            run.text = fname
            run.font.size = Pt(24)

            sde_payloads = af.model_gen(rva_info, "ptportal.sensitivedataexfil")

            sde_row_info = []
            for ele in sde_payloads:
                sde_row_info.append(ele["fields"])

            # set the shape and create the table
            rows = 1 + len(sde_row_info)
            cols = 4
            left = Inches(0.4)
            top = Inches(2.0)
            width = Inches(15)
            height = Inches(0.8)

            shapes = slide.shapes
            table = shapes.add_table(rows, cols, left, top, width, height).table
            tbl = table._graphic_frame._element.graphic.graphicData.tbl
            tbl[0][-1].text = LightStyle1Accent6
            table.columns[0].width = Inches(1.3)
            table.columns[1].width = Inches(3.7)
            table.columns[2].width = Inches(2.7)
            table.columns[3].width = Inches(1.5)

            # add the table header
            cell_text(table, 0, 0, "Protocol", "c", tbl_text)
            cell_text(table, 0, 1, "Datatype", "c", tbl_text)
            cell_text(table, 0, 2, "Date/Time Started", "c", tbl_text)
            cell_text(table, 0, 3, "Result", "c", tbl_text)

            # fill in the the rows
            for i, r in enumerate(sde_row_info):
                cell_text(table, i + 1, 0, r["protocol"], "c", tbl_text, Pt(16))
                cell_text(table, i + 1, 1, r["datatype"], "l", tbl_text, Pt(16))
                cell_text(table, i + 1, 2, r["date_time"], "c", tbl_text, Pt(16))
                r_txt, r_color = blocked(r["result"])
                cell_text(table, i + 1, 3, r_txt, "c", r_color, Pt(16))

        else:
            if len(scrn_shots) == 0:
                slide = prs.slides.add_slide(sshot_slide_layout)
                title = slide.shapes.title
                run = title.text_frame.paragraphs[0].add_run()
                run.text = severity
                run.font.size = Pt(40)
                title.text_frame.add_paragraph()
                run = title.text_frame.paragraphs[1].add_run()
                run.text = fname
                run.font.size = Pt(24)
            else:
                for sshot in scrn_shots:
                    ssf = sshot["fields"]
                    slide = prs.slides.add_slide(sshot_slide_layout)
                    title = slide.shapes.title
                    run = title.text_frame.paragraphs[0].add_run()
                    run.text = severity
                    run.font.size = Pt(40)
                    title.text_frame.add_paragraph()
                    run = title.text_frame.paragraphs[1].add_run()
                    run.text = fname
                    run.font.size = Pt(24)

                    # insert the screenshot
                    sfile = media_path + ssf["file"]
                    (x, y, w, h) = iu.get_screenshot_dimensions(sfile)

                    slide.shapes.add_picture(
                        sfile, Inches(x), Inches(y), width=Inches(w), height=Inches(h)
                    )

                    notes_slide = slide.notes_slide
                    text_frame = notes_slide.notes_text_frame
                    text_frame.text = (
                        "Image Caption\n"
                        + ssf["caption"]
                        + "\n\nScreenshot Description\n"
                        + finding["fields"]["screenshot_description"]
                    )


"""
def insert_ransomware_slide(prs, report_type, rva_info, rware):
    if rware:
        add_section_title(prs, "Ransomware")

        # add ransomware Susceptibility slide
        rware = prs.slide_layouts[14]
        slide = prs.slides.add_slide(rware)
        title = slide.shapes.title.text = 'Ransomware Susceptibility'

        para1 = "Ransomware thrives on easily-accessible avenues of infection, privilege escalation, and lateral movement"

        para2 = "Phishing" + \
            "\nVulnerable network services resulting in RCE (e.g. EternalBlue)" + \
            "\nAccount credential acquisition via discovery (T1078, T1171), credential dumping (T1003), kerberoasting (T1208), or LLMNR/NBT-NS poisoning (T1171)" + \
            "\nLack of network segmentation" + \
            "\nFaulty patch management"

        details = slide.placeholders[1].text_frame
        paragraph = details.paragraphs[0]
        paragraph.level = 1
        run = paragraph.add_run()
        run.text = para1

        paragraph = details.add_paragraph()
        paragraph.level = 2
        run = paragraph.add_run()
        run.text = para2


        # add ransomware Impact slide
        # XXX need to pull variables in from JSON for impact information
        rware = prs.slide_layouts[14]
        slide = prs.slides.add_slide(rware)
        title = slide.shapes.title.text = 'Ransomware Impact'


        wormable_machines = str(rware_info["wormable_machines"])
        wormable_hvas = str(rware_info["wormable_HVAs"])
        network_susc = str(rware_info["network_susc"])

        impact1 = wormable_machines + " wormable machines" + \
            "\n" + wormable_hvas + " wormable high value assets" + \
            "\n" + network_susc + "% of the network susceptibility "

        impact2 = "The median cost of a ransomware attack " + \
            "on businesses was $133,000 in 2018. " + \
            "\nRecovery costs can include legal, hardware, software, " + \
            "and labor costs to execute a recovery plan"

        details = slide.placeholders[1].text_frame
        paragraph = details.paragraphs[0]
        paragraph.level = 1
        run = paragraph.add_run()
        run.text = impact1

        paragraph = details.add_paragraph() # add some space

        paragraph = details.add_paragraph()
        paragraph.level = 1
        run = paragraph.add_run()
        run.text = impact2

        # add ransomware Prevention slide

        rware = prs.slide_layouts[15]
        slide = prs.slides.add_slide(rware)
        title = slide.shapes.title.text = 'Prevention'

        # add ransomware What to do slide
        if_infected = ["Isolate the infected computer immediately",
                       "Isolate or power-off affected devices that have not yet been completely corrupted. ",
                       "Immediately secure backup data or systems by taking them offline.",
                       "LINK-LINE",
                       "If available, collect and secure partial portions of the ransomed data that might exist. ",
                       "If possible, change all online account passwords and network passwords after removing the system from the network",
                       "Delete Registry values and files to stop the program from loading" ]

        rware = prs.slide_layouts[14]
        slide = prs.slides.add_slide(rware)
        title = slide.shapes.title.text = 'What to do if you’re infected'

        # use the default first paragraph before adding more paragraphs
        details = slide.placeholders[1].text_frame
        paragraph = details.paragraphs[0]
        paragraph.level = 1
        run = paragraph.add_run()
        run.font.size = Pt(20)
        run.text = if_infected[0]

        for infected in if_infected[1:]:
            paragraph = details.add_paragraph()
            paragraph.level = 1
            # special case the one sentence with links embedded
            if "LINK-LINE" in infected:
                rtmp = paragraph.add_run()
                rtmp.font.size = Pt(20)
                rtmp.text = "Contact law enforcement immediately. We encourage you to contact "
                add_hyperlink(paragraph,
                              "CISA",
                              "https://www.us-cert.gov/report")

                rtmp = paragraph.add_run()
                rtmp.font.size = Pt(20)
                rtmp.text = ", local "

                add_hyperlink(paragraph,
                         "FBI",
                         "https://www.fbi.gov/contact-us/field-offices/listing_by_state")

                rtmp = paragraph.add_run()
                rtmp.font.size = Pt(20)
                rtmp.text = " or "

                add_hyperlink(paragraph,
                         "USSS",
                         "https://www.secretservice.gov/contact/")

                rtmp = paragraph.add_run()
                rtmp.font.size = Pt(20)
                rtmp.text = " field office immediately."

            else:
                run = paragraph.add_run()
                run.font.size = Pt(20)
                run.text = infected

    # add ransomware Sources
        rware = prs.slide_layouts[14]
        slide = prs.slides.add_slide(rware)
        title = slide.shapes.title.text = 'Sources'


        details = slide.placeholders[1].text_frame
        paragraph = details.paragraphs[0]
        paragraph.level = 1
        add_hyperlink(paragraph, None,
                      "https://attack.mitre.org/")

        paragraph = details.add_paragraph()
        paragraph.level = 1
        add_hyperlink(paragraph, None,
                      "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-184.pdf")

        paragraph = details.add_paragraph()
        paragraph.level = 1
        add_hyperlink(paragraph, None,
                      "https://www.us-cert.gov/sites/default/files/publications/Ransomware_Executive_One-Pager_and_Technical_Document-FINAL.pdf")
"""


def insert_observation_slide(prs):
    """Generates the final observations slide.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
    """
    add_section_title(prs, "Observations")

    # ---- add overall observations slide
    oo_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(oo_layout)
    oo_placeholder = slide.placeholders[1].text_frame

    title = slide.shapes.title
    title.text = "Overall Observations"

    # external bullet
    paragraph = oo_placeholder.paragraphs[0]
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = "Observations"


def insert_requirements_slide(prs, report_type, rva_info):
    ####Better to put this in the master template than trying to create it from scratch. This will probably be removed.
    if report_type == "HVA":
        oo_layout = prs.slide_layouts[3]
        slide = prs.slides.add_slide(oo_layout)
        title = slide.shapes.title
        oo_placeholder = slide.placeholders[1].text_frame
        title.text = "BOD 18-02 Requirements"

        findings = []

        for cnt, finding in enumerate(
            af.model_gen(rva_info, "ptportal.uploadedfinding")
        ):
            findings.append(finding["fields"])

        # set the shape and create the table
        rows = 1 + len(findings)
        cols = 3
        left = Inches(0.75)
        top = Inches(2.0)
        width = Inches(9)  # need additional room for padding, etc over cols
        height = Inches(0)

        shapes = slide.shapes
        table = shapes.add_table(rows, cols, left, top, width, height).table
        tbl = table._graphic_frame._element.graphic.graphicData.tbl
        tbl[0][-1].text = LightStyle1Accent6
        table.columns[0].width = Inches(3)
        table.columns[1].width = Inches(2.5)
        table.columns[1].width = Inches(2.5)

        # add the table header
        cell_text(table, 0, 0, "Finding", "c", tbl_text, Pt(14))
        cell_text(table, 0, 1, "RVA Recommendation Timetable", "c", tbl_text, Pt(14))
        cell_text(table, 0, 2, "BOD 18-02 Requirements", "c", tbl_text, Pt(14))

        # output the table
        i = 0
        for finding in findings:
            print(finding)
            fnd_str = (
                finding["uploaded_finding_name"] + " (" + finding["severity"] + ")"
            )
            tt_str = finding["timetable"]
            cell_text(table, i + 1, 0, fnd_str, "l", tbl_text, Pt(12))
            cell_text(table, i + 1, 1, tt_str, "l", tbl_text, Pt(12))
            cell_text(table, i + 1, 2, tt_str, "l", tbl_text, Pt(12))
            i = i + 1

        left = Inches(3.75)
        top = Inches(6.5)
        width = Inches(5.8)
        height = Inches(1)
        txBox = slide.shapes.add_textbox(left, top, width, height)
        tf = txBox.text_frame
        tf.word_wrap = True

        p = tf.paragraphs[0]
        p.text = "In accordance with BOD 18-02 requirements the time table must require agencies to remediate or submit a SAORM approved remediation plan within 30 days of receipt of the RVA and/or SAR report (BOD 18-02, page 3, Action Four). This requirement is the same for all types of recommendations in the HVA Report template."

        p.font.size = Pt(10)
        p.font.color.rgb = tbl_text


def insert_nextstep_slide(prs, report_type, rva_info):
    """Generatest the slide containing the next steps of the engagement.

    Args:
        prs (pptx presentation): The Powerpoint presentation.
        report_type (str): The type of report being generated. I.e. RVA, RPT, or HVA.
        rva_info (List[Dict]): The Json data from the engagement.
    """
    ns_layout = prs.slide_layouts[3]
    slide = prs.slides.add_slide(ns_layout)
    ns_placeholder = slide.placeholders[1].text_frame

    title = slide.shapes.title
    title.text = "Next Steps"

    # RVA Team Bullet
    paragraph = ns_placeholder.paragraphs[0]
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = "{} Team".format(report_type)

    paragraph_two = ns_placeholder.add_paragraph()
    paragraph_two.level = 2
    run = paragraph_two.add_run()
    run.text = "Additional Analysis"

    paragraph_two = ns_placeholder.add_paragraph()
    paragraph_two.level = 2
    run = paragraph_two.add_run()
    run.text = "Draft Report to POC"

    # FN Bullet
    ns_placeholder.add_paragraph()
    paragraph = ns_placeholder.add_paragraph()
    paragraph.level = 1
    run = paragraph.add_run()
    run.text = af.get_db_info(
        rva_info, "engagementmeta.fields.customer_POC_name", "POC Name"
    )

    paragraph_two = ns_placeholder.add_paragraph()
    paragraph_two.level = 2
    run = paragraph_two.add_run()
    run.text = "Review & validate findings"

    paragraph_two = ns_placeholder.add_paragraph()
    paragraph_two.level = 2
    run = paragraph_two.add_run()
    run.text = "Action Plans to remediate, as appropriate"

    paragraph_two = ns_placeholder.add_paragraph()
    paragraph_two.level = 2
    run = paragraph_two.add_run()
    run.text = "Future work with DHS CISA"

    add_section_title(prs, "Questions?")


def generate_ptp_slides(template, output, draft, json, media):
    """Generates an outbrief for the current assessment.

    Args:
        template (string): Path to the docx template that will be used to generate the report.
        output (string): Name of the file that will be saved and returned.
        draft (boolean): Marks the docx document with a draft watermark.
        json (string): Path to the json file with the assessment data.
        media (string): Path to the media folder that contains the assessment screenshots.
    """
    # ---- constant group to type
    to_groups = {
        "phishing-assessment": "Phishing Assessment",
        "penetration-testing": "Penetration Testing",
        "web-application-assessment": "Web Application Assessment",
    }

    # ---- find all screenshot information
    rva_info = af.load_rva_info(json)
    ss_info = af.build_screenshot_info(rva_info)

    rep_fields = af.get_db_info(rva_info, "report.fields", "keyNA")
    report_type = rep_fields["report_type"]
    ip_ext = rep_fields["IP_scanned_ext"]
    ip_int = rep_fields["IP_scanned_int"]

    rware_info = af.get_db_info(rva_info, "ransomware.fields", "keyNA")
    rware = True  # ransomware model is in JSON output
    if rware_info == "<not set: keyNA>":
        rware = False

    # ---- open the powerpoint template
    prs = pptx.Presentation(template)

    insert_title_slide(prs, report_type, rva_info, draft)
    insert_notice_slide(prs, report_type)
    insert_agenda_slide(prs, report_type, rware)
    insert_timeframe(prs, report_type, rva_info)
    insert_scope_slide(prs, report_type, rva_info, ip_ext, ip_int)

    insert_goals_slide(prs, report_type)

    insert_narrative_slide(prs, report_type, rva_info, media)
    if report_type == "RPT":
        insert_OSINT_slide(prs, report_type, rva_info)
    insert_findings_slides(prs, report_type, rva_info, ss_info, media)

    insert_observation_slide(prs)
    insert_requirements_slide(prs, report_type, rva_info)
    insert_nextstep_slide(prs, report_type, rva_info)

    prs.save(output)


def main():
    description = "Generate RVA briefing slide deck"
    parser = argparse.ArgumentParser(description=description)

    parser.add_argument("TEMPLATE", help="Briefing slide deck template.")
    parser.add_argument(
        "-o",
        "--output_file",
        action="store",
        default="RVA_OutBrief_" + tstamp + ".pptx",
        help="Out briefing file name",
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

    generate_ptp_slides(
        args.TEMPLATE, args.output_file, args.draft, args.json_file, args.media_path
    )


if __name__ == "__main__":
    main()
