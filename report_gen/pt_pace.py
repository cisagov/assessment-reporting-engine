
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
import reportlab
import inflect

import report_gen.utilities.assessment_facts as af

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics, pdfform
from reportlab.platypus import Paragraph, SimpleDocTemplate, Flowable, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.units import inch

# Constants
tstamp = str(datetime.datetime.now().strftime("%Y%m%d_%H.%M.%S"))
pr_tstamp = str(datetime.datetime.now().strftime("%B %d, %Y"))

num = inflect.engine()

blue = colors.Color(red=(3.0/255), green=(82.0/255), blue=(136.0/255))
gray = colors.Color(red=(90.0/255), green=(91.0/255), blue=(92.0/255))

pdfmetrics.registerFont(TTFont('Franklin Gothic Demi', 'report_gen/templates/PACE/Franklin Gothic Demi Regular.ttf'))
pdfmetrics.registerFont(TTFont('Franklin Gothic Medium', 'report_gen/templates/PACE/Franklin Gothic Medium Regular.ttf'))
pdfmetrics.registerFont(TTFont('Franklin Gothic Book', 'report_gen/templates/PACE/Franklin Gothic Book Regular.ttf'))

class TextField(Flowable):
    def __init__(self, **options):
        Flowable.__init__(self)
        self.options = options
        self.width = options.get('width', 120)
        self.height = options.get('height', 36)

    def draw(self):
        self.canv.saveState()
        form = self.canv.acroForm
        form.textfieldRelative(**self.options)
        self.canv.restoreState()

        
class ChoiceField(Flowable):
    def __init__(self, **options):
        Flowable.__init__(self)
        options['relative'] = True
        self.options = options
        self.width = options.get('width', 120)
        self.height = options.get('height', 36)

    def draw(self):
        self.canv.saveState()
        form = self.canv.acroForm
        form.choice(**self.options)
        self.canv.restoreState()


def get_list(file):

    list_file = open(file, "r")
    new_list = []

    for line in list_file:
        line = line.replace("\n", "")
        new_list.append(line)

    list_file.close()

    return new_list


def generate_pace_document(output, json, assets):
    """Generates an outbrief for the current assessment.

    Args:
        output (string): Name of the file that will be saved and returned.
        json (string): Path to the json file with the assessment data.
    """

    rva_info = af.load_asmt_info(json)

    asmt_id = af.get_db_info(
        rva_info, "engagementmeta.fields.asmt_id", "ASMT ID"
    )
    stakeholder_name = af.get_db_info(
        rva_info, "engagementmeta.fields.customer_long_name", "Stakeholder Long Name"
    )
    if stakeholder_name == "<not set: Stakeholder Long Name>":
        stakeholder_name = ""

    sector = af.get_db_info(
        rva_info, "engagementmeta.fields.customer_sector", "Stakeholder Sector"
    )

    if sector == "<not set: Stakeholder Sector>":
        sector = " "

    ci_type = af.get_db_info(
        rva_info, "engagementmeta.fields.customer_ci_type", "Stakeholder CI Type"
    )

    if ci_type == "<not set: Stakeholder CI Type>":
        ci_type = " "

    ext_start_date = af.get_db_info(
        rva_info, "engagementmeta.fields.ext_start_date", "Ext Start Date"
    )

    if ext_start_date == "<not set: Ext Start Date>":
        ext_start_date = ""

    ext_end_date = af.get_db_info(
        rva_info, "engagementmeta.fields.ext_end_date", "Ext End Date"
    )

    if ext_end_date == "<not set: Ext End Date>":
        ext_end_date = ""

    int_start_date = af.get_db_info(
        rva_info, "engagementmeta.fields.int_start_date", "Int Start Date"
    )

    if int_start_date == "<not set: Int Start Date>":
        int_start_date = ""

    int_end_date = af.get_db_info(
        rva_info, "engagementmeta.fields.int_end_date", "Int End Date"
    )

    if int_end_date == "<not set: Int End Date>":
        int_end_date = ""

    report_type_acronym = af.get_db_info(
        rva_info, "report.fields.report_type", "Report Type"
    )

    if report_type_acronym == "RVA":
        report_type = "Risk and Vulnerability Assessment (RVA)"
    elif report_type_acronym == "RPT":
        report_type = "Remote Penetration Test (RPT)"
    else:
        report_type = ""

    if ext_start_date and ext_end_date and int_start_date and int_end_date:
        ext_start = datetime.datetime.strptime(ext_start_date, '%Y-%m-%d').date()
        ext_end = datetime.datetime.strptime(ext_end_date, '%Y-%m-%d').date()
        int_start = datetime.datetime.strptime(int_start_date, '%Y-%m-%d').date()
        int_end = datetime.datetime.strptime(int_end_date, '%Y-%m-%d').date()

        if ext_start < int_start:
            start_date = str(ext_start)
            end_date = str(int_end)
        else:
            start_date = str(int_start)
            end_date = str(ext_end)
    else:
        start_date = ""
        end_date = ""

    findings = []
    severity_count = {"Informational": 0, "Low": 0, "Medium": 0, "High": 0, "Critical": 0}
    total_risk_score = 0
    mitigated_risk_score = 0

    for cnt, finding in enumerate(af.model_gen(rva_info, 'ptportal.uploadedfinding')):
        ele = finding['fields']
        f_data = {"order": cnt + 1, "name": ele['uploaded_finding_name'], "severity": ele['severity'], "mitigation": ele['mitigation'], "risk_score": ele['risk_score']}
        total_risk_score += ele['risk_score']
        if not ele['mitigation']:
            mitigated_risk_score += ele['risk_score']
        severity_count[ele['severity']] += 1
        findings.append(f_data)

    order = {"Critical": 0, "High": 1, "Medium": 2, "Low": 3, "Informational": 4}
    findings_list = sorted(findings, key=lambda s: order[s['severity']])

    subtitle = "RV" + str(asmt_id) + " - " + stakeholder_name
    page = []

    assessment_types = get_list(assets+"assessment_types.txt")
    sector_types = get_list(assets+"sectors.txt")
    ci_types = get_list(assets+"ci_sectors.txt")
    status_types = get_list(assets+"mitigation_status.txt")
    action_types = get_list(assets+"mitigation_actions.txt")
    challenge_types = get_list(assets+"mitigation_challenges.txt")

    doc = SimpleDocTemplate(output, pagesize = letter, leftMargin=0.8*inch, rightMargin=0.8*inch, topMargin=0.8*inch, bottomMargin=0.8*inch, title="Post-Assessment Closure Evaluation", allowSplitting=1)

    styles = getSampleStyleSheet()

    line_break = Spacer(0, 10)
    small_space = Spacer(0, 20)
    large_space = Spacer(0, 100)
    page_break = PageBreak()

    title_style = styles['Title']
    title_style.alignment = TA_LEFT
    title_style.fontName = 'Franklin Gothic Demi'

    header_style = styles['Heading1']
    header_style.alignment = TA_LEFT
    header_style.fontName = 'Franklin Gothic Medium'

    body_style = styles['BodyText']
    body_style.alignment = TA_LEFT
    body_style.fontName = 'Franklin Gothic Book'

    doc_title = Paragraph('<font size="16" color="#035288">POST-ASSESSMENT CLOSURE EVALUATION</font>', title_style)

    purpose = Paragraph('<font size="14" color="#5A5B5C">Purpose</font>', header_style)
    purpose_description = Paragraph('<font size="10" color="#5A5B5C">As a follow up to the CISA assessment performed for '+stakeholder_name+' approximately ninety (90) days ago, the CISA Assessments team is requesting feedback regarding the status of mitigation and remediation efforts. These responses will help the CISA Assessments team measure and validate the effectiveness of the recommendations and mitigations supplied within the assessment report. Additionally, the responses will help identify opportunities for enhancing CISA products and services.</font>', body_style)

    instructions = Paragraph('<font size="14" color="#5A5B5C">Instructions</font>', header_style)
    instructions_1 = Paragraph('<font size="10" color="#5A5B5C">1.  The Assessment Information section should be completed by a CISA representative, then reviewed and validated by '+stakeholder_name+'.</font>', body_style)
    instructions_2 = Paragraph('<font size="10" color="#5A5B5C">2.  The Mitigated Findings section should be completed by a CISA representative in coordination with a representative from '+stakeholder_name+' by selecting the most accurate mitigation status, action, and/or challenge preventing full remediation for each finding.</font>', body_style)
    instructions_3 = Paragraph('<font size="10" color="#5A5B5C">3.  The Risk Score section provides the Total and Mitigated Risk Scores that were calculated during the assessment timeframe. The 90-Day Mitigated Risk Score will be determined by a CISA representative based on the responses received within the Mitigated Findings section</font>', body_style)

    information = Paragraph('<font size="14" color="#5A5B5C">Assessment Information</font>', header_style)

    data = [['Assessment Type', ChoiceField(name='asmt_type', tooltip='Assessment Type', value=report_type, options=assessment_types, height=18, width=270, fontSize=10)],
            ['Assessment ID', TextField(name='asmt_id', value='RV'+asmt_id, tooltip='Assessment ID', height=18, width=270, fontSize=10)],
            ['Sector', ChoiceField(name='sector', tooltip='Sector', value=sector, options=sector_types, height=18, width=270, fontSize=10)],
            ['Critical Infrastructure Type', ChoiceField(name='ci_type', tooltip='Critical Infrastructure Type', value=ci_type, options=ci_types, height=18, width=270, fontSize=10)],
            ['Testing Start Date', TextField(name='start_date', value=start_date, tooltip='Start Date', height=18, width=270, fontSize=10)],
            ['Testing Completion Date', TextField(name='end_date', value=end_date, tooltip='End Date', height=18, width=270, fontSize=10)]]

    info_col_widths = (2.7*inch, 4*inch)
    info_table = Table(data, info_col_widths, 6*[0.4*inch])
    info_table.setStyle(TableStyle([('FONT', (0, 0), (0, 5), 'Franklin Gothic Demi'),
                                    ('FONT', (1, 0), (1, 5), 'Franklin Gothic Book'),
                                    ('FONTSIZE', (0, 0), (1, 5), 10),
                                    ('VALIGN', (0, 0), (1, 5), 'MIDDLE'),
                                    ('BACKGROUND', (0, 0), (0, 5), blue),
                                    ('LINEABOVE', (0, 0), (1, 5), 0.5, colors.black),
                                    ('LINEBELOW', (0, 0), (1, 5), 0.5, colors.black),
                                    ('LINEBEFORE', (0, 0), (1, 5), 0.5, colors.black),
                                    ('LINEAFTER', (0, 0), (1, 5), 0.5, colors.black),
                                    ('TEXTCOLOR', (0, 0), (0, 5), colors.white),
                                    ('TEXTCOLOR', (1, 0), (1, 5), gray)]))

    mitigated_findings = Paragraph('<font size="16" color="#035288">MITIGATED FINDINGS</font>', title_style)

    status = Paragraph('<font size="14" color="#5A5B5C">Mitigation Status</font>', header_style)
    status_description = Paragraph('<font size="10" color="#5A5B5C">Use the drop-down in the Mitigation Status column to select the option that most accurately reflects the status of each finding. For fully mitigated findings, please enter the date of mitigation. For findings marked as partially mitigated or no action taken, please enter an estimated date of mitigation.</font>', body_style)

    mitigation_status = [['Severity', 'Finding Name', 'Mitigation Status', 'Date of Mitigation']]
    mitigation_actions = [['Finding Name', 'Mitigation Action']]
    mitigation_challenges = [['Finding Name', 'Mitigation Challenge']]

    for cnt, finding in enumerate(findings_list):
        finding_name = Paragraph('<font size="10" color="#5A5B5C">'+finding['name']+' ['+str(finding['risk_score'])+']</font>', body_style)
        if finding['mitigation']:
            mitigation_status.append([finding['severity'], finding_name, ChoiceField(name='status'+str(cnt), tooltip='Status', value='Fully Mitigated', options=status_types, height=18, width=90, fontSize=10), TextField(name='status_date'+str(cnt), value=end_date, tooltip='Mitigation Date', height=18, width=90, fontSize=10)])
        else:
            mitigation_status.append([finding['severity'], finding_name, ChoiceField(name='status'+str(cnt), tooltip='Status', value='No Action Taken', options=status_types, height=18, width=90, fontSize=10), TextField(name='status_date'+str(cnt), value='YYYY-MM-DD', tooltip='Mitigation Date', height=18, width=90, fontSize=10)])
        
        mitigation_actions.append([finding_name, ChoiceField(name='action'+str(cnt), tooltip='Action', value='N/A', options=action_types, height=18, width=230, fontSize=10)])
        mitigation_challenges.append([finding_name, ChoiceField(name='challenge'+str(cnt), tooltip='Challenge', value='N/A', options=challenge_types, height=18, width=230, fontSize=10)])
    
    status_col_widths = (1*inch, 2.9*inch, 1.4*inch, 1.4*inch)
    status_table = Table(mitigation_status, status_col_widths, (len(findings_list)+1)*[0.4*inch])
    status_table.setStyle(TableStyle([('FONT', (0, 0), (3, 0), 'Franklin Gothic Demi'),
                                    ('FONT', (0, 1), (3, len(findings_list)), 'Franklin Gothic Book'),
                                    ('FONTSIZE', (0, 0), (3, len(findings_list)), 10),
                                    ('VALIGN', (0, 0), (3, len(findings_list)), 'MIDDLE'),
                                    ('ALIGNMENT', (0, 0), (3, 0), 'CENTER'),
                                    ('BACKGROUND', (0, 0), (3, 0), blue),
                                    ('LINEABOVE', (0, 0), (3, len(findings_list)), 0.5, colors.black),
                                    ('LINEBELOW', (0, 0), (3, len(findings_list)), 0.5, colors.black),
                                    ('LINEBEFORE', (0, 0), (3, len(findings_list)), 0.5, colors.black),
                                    ('LINEAFTER', (0, 0), (3, len(findings_list)), 0.5, colors.black),
                                    ('TEXTCOLOR', (0, 0), (3, 0), colors.white),
                                    ('TEXTCOLOR', (0, 1), (3, len(findings_list)), gray)]))

    actions = Paragraph('<font size="14" color="#5A5B5C">Mitigation Actions</font>', header_style)
    actions_description = Paragraph('<font size="10" color="#5A5B5C">For each fully mitigated finding, please select the option that most accurately reflects the primary action taken to mitigate the finding. Select \'N/A\' for findings that were not mitigated.</font>', body_style)

    actions_col_widths = (3.35*inch, 3.35*inch)
    actions_table = Table(mitigation_actions, actions_col_widths, (len(findings_list)+1)*[0.4*inch])
    actions_table.setStyle(TableStyle([('FONT', (0, 0), (1, 0), 'Franklin Gothic Demi'),
                                    ('FONT', (0, 1), (1, len(findings_list)), 'Franklin Gothic Book'),
                                    ('FONTSIZE', (0, 0), (1, len(findings_list)), 10),
                                    ('VALIGN', (0, 0), (1, len(findings_list)), 'MIDDLE'),
                                    ('ALIGNMENT', (0, 0), (1, 0), 'CENTER'),
                                    ('BACKGROUND', (0, 0), (1, 0), blue),
                                    ('LINEABOVE', (0, 0), (1, len(findings_list)), 0.5, colors.black),
                                    ('LINEBELOW', (0, 0), (1, len(findings_list)), 0.5, colors.black),
                                    ('LINEBEFORE', (0, 0), (1, len(findings_list)), 0.5, colors.black),
                                    ('LINEAFTER', (0, 0), (1, len(findings_list)), 0.5, colors.black),
                                    ('TEXTCOLOR', (0, 0), (1, 0), colors.white),
                                    ('TEXTCOLOR', (0, 1), (1, len(findings_list)), gray)]))

    actions_other = Paragraph('<font size="10" color="#5A5B5C">Please provide additional context of any mitigation actions that were taken below, including what specific findings they pertain to:</font>', body_style)
    actions_other_field = TextField(name='mitigation_actions_other', value='', tooltip='Mitigation Actions Context', height=54, width=500, fontSize=10, maxlen=1000, fieldFlags='multiline')

    challenges = Paragraph('<font size="14" color="#5A5B5C">Mitigation Challenges</font>', header_style)
    challenges_description = Paragraph('<font size="10" color="#5A5B5C">For each non-mitigated finding, please select the option that most accurately reflects the primary challenge that prevented full remediation. Select \'N/A\' for findings that were mitigated.</font>', body_style)

    challenges_col_widths = (3.35*inch, 3.35*inch)
    challenges_table = Table(mitigation_challenges, challenges_col_widths, (len(findings_list)+1)*[0.4*inch])
    challenges_table.setStyle(TableStyle([('FONT', (0, 0), (1, 0), 'Franklin Gothic Demi'),
                                    ('FONT', (0, 1), (1, len(findings_list)), 'Franklin Gothic Book'),
                                    ('FONTSIZE', (0, 0), (1, len(findings_list)), 10),
                                    ('VALIGN', (0, 0), (1, len(findings_list)), 'MIDDLE'),
                                    ('ALIGNMENT', (0, 0), (1, 0), 'CENTER'),
                                    ('BACKGROUND', (0, 0), (1, 0), blue),
                                    ('LINEABOVE', (0, 0), (1, len(findings_list)), 0.5, colors.black),
                                    ('LINEBELOW', (0, 0), (1, len(findings_list)), 0.5, colors.black),
                                    ('LINEBEFORE', (0, 0), (1, len(findings_list)), 0.5, colors.black),
                                    ('LINEAFTER', (0, 0), (1, len(findings_list)), 0.5, colors.black),
                                    ('TEXTCOLOR', (0, 0), (1, 0), colors.white),
                                    ('TEXTCOLOR', (0, 1), (1, len(findings_list)), gray)]))

    w, h = challenges_table.wrap(0, 0)

    challenges_other = Paragraph('<font size="10" color="#5A5B5C">Please provide additional context of any mitigation challenges that were encountered below, including what specific findings they pertain to:</font>', body_style)
    challenges_other_field = TextField(name='mitigation_challenges_other', value='', tooltip='Mitigation Challenges Context', height=54, width=500, fontSize=10, maxlen=1000, fieldFlags='multiline')

    risk_section = Paragraph('<font size="16" color="#035288">RISK SCORE</font>', title_style)
    risk_description = Paragraph('<font size="10" color="#5A5B5C">From the findings, a Total Risk Score was calculated to measure progress as findings are mitigated. If a finding was mitigated during the assessment timeframe and the CISA team was able to validate mitigation, the Mitigated Risk Score represents the deduction of those mitigated findings. Based on the responses to this questionnaire, an updated 90-Day Risk Score will be calculated.</font>', body_style)
    risk_data = [['Total Risk Score', 'Mitigated Risk Score', '90-Day Risk Score'],
                [str(total_risk_score), str(mitigated_risk_score), TextField(name='risk_score', value='', tooltip='90-Day Risk Score', height=50, width=90, fontSize=36)]]

    risk_col_widths = (2.23*inch, 2.23*inch, 2.23*inch)
    risk_row_heights = (0.4*inch, 0.8*inch)
    risk_table = Table(risk_data, risk_col_widths, risk_row_heights)
    risk_table.setStyle(TableStyle([('FONT', (0, 0), (2, 0), 'Franklin Gothic Demi'),
                                    ('FONT', (0, 1), (2, 1), 'Helvetica'),
                                    ('FONTSIZE', (0, 0), (2, 0), 10),
                                    ('FONTSIZE', (0, 1), (2, 1), 36),
                                    ('VALIGN', (0, 0), (2, 0), 'MIDDLE'),
                                    ('VALIGN', (0, 1), (3, 1), 'TOP'),
                                    ('ALIGNMENT', (0, 0), (2, 0), 'CENTER'),
                                    ('ALIGNMENT', (0, 1), (2, 1), 'CENTER'),
                                    ('BACKGROUND', (0, 0), (2, 0), blue),
                                    ('LINEABOVE', (0, 0), (2, 1), 0.5, colors.black),
                                    ('LINEBELOW', (0, 0), (2, 1), 0.5, colors.black),
                                    ('LINEBEFORE', (0, 0), (2, 1), 0.5, colors.black),
                                    ('LINEAFTER', (0, 0), (2, 1), 0.5, colors.black),
                                    ('TEXTCOLOR', (0, 0), (2, 0), colors.white),
                                    ('TEXTCOLOR', (0, 1), (2, 1), gray)]))

    risk_end = Paragraph('<font size="10" color="#5A5B5C">CISA identified '+num.number_to_words(severity_count['Critical'])+' ('+str(severity_count['Critical'])+') critical findings, '+num.number_to_words(severity_count['High'])+' ('+str(severity_count['High'])+') high findings, '+num.number_to_words(severity_count['Medium'])+' ('+str(severity_count['Medium'])+') medium findings, '+num.number_to_words(severity_count['Low'])+' ('+str(severity_count['Low'])+') low findings, '+num.number_to_words(severity_count['Informational'])+' ('+str(severity_count['Informational'])+') informational findings. The Total Risk Score for this assessment is '+str(total_risk_score)+' and the Mitigated Risk Score after deducting mitigated findings is '+str(mitigated_risk_score)+'. The 90-Day Risk Score will be calculated once this evaluation is completed.</font>', body_style)

    # intro page
    page.append(doc_title)
    page.append(purpose)
    page.append(purpose_description)
    page.append(small_space)
    page.append(instructions)
    page.append(instructions_1)
    page.append(instructions_2)
    page.append(instructions_3)
    page.append(small_space)
    page.append(information)
    page.append(info_table)
    page.append(page_break)

    # mitigation status page
    page.append(mitigated_findings)
    page.append(status)
    page.append(status_description)
    page.append(small_space)
    page.append(status_table)
    page.append(page_break)

    # mitigation actions page
    page.append(actions)
    page.append(actions_description)
    page.append(small_space)
    page.append(actions_table)
    if h > 900 and h % 550 < 140:
        page.append(page_break)
    elif h > 450 and h < 900 and h % 450 < 130:
        page.append(page_break)
    else:
        page.append(line_break)
    page.append(actions_other)
    page.append(line_break)
    page.append(actions_other_field)
    page.append(page_break)

    # mitigation challenges page
    page.append(challenges)
    page.append(challenges_description)
    page.append(small_space)
    page.append(challenges_table)
    if h > 900 and h % 550 < 140:
        page.append(page_break)
    elif h > 450 and h % 450 < 130:
        page.append(page_break)
    else:
        page.append(line_break)
    page.append(challenges_other)
    page.append(line_break)
    page.append(challenges_other_field)
    page.append(page_break)

    # risk page
    page.append(risk_section)
    page.append(risk_description)
    page.append(small_space)
    page.append(risk_table)
    page.append(line_break)
    page.append(risk_end)
    
    doc.build(page)


def main():
    description = "Generate Post-Assessment Closure Evaluation document"
    parser = argparse.ArgumentParser(description=description)

    parser.add_argument(
        "-o",
        "--output_file",
        action="store",
        default="RVA_PACE_" + tstamp + ".pdf",
        help="PACE file name",
    )
    parser.add_argument("-j", "--json_file", action="store", required=True)
    parser.add_argument("-a" "--assets", action="store", required=True)
    args = parser.parse_args()

    generate_pace_document(
        args.output_file, args.json_file, args.assets
    )


if __name__ == "__main__":
    main()
