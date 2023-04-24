# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import datetime
from datetime import timezone
from dateutil.relativedelta import relativedelta
import json
import math
import os
import re, csv
import base64
from io import TextIOWrapper
from django.core import serializers as JSONserializers
from rest_framework import serializers
from django.core.exceptions import ObjectDoesNotExist
from django.utils.text import slugify
from cairosvg import svg2png

from rest_framework.renderers import JSONRenderer

from ptportal.serializers import *
from ptportal.models import *

# import payload mapping parser
from .payload_mapping.lib.core import Parser


def delete_uploaded_files(filename):
    """Delete Uploaded Files in Media Directory"""
    print(filename)
    if os.path.exists(filename):
        os.remove(filename)


def handle_uploaded_file(source, dest):
    print("source: ", source)
    print("dest: ", dest)
    dir = os.path.dirname(dest)
    if not os.path.exists(dir):
        os.makedirs(dir)
    with open(dest, 'wb+') as destination:
        for chunk in source.chunks():
            destination.write(chunk)


def get_nist_controls(all_findings=None, finding=None):
    """This returns nist controls list"""
    if finding:
        if finding.finding_type == 'specific':
            temp = NISTControl.objects.filter(spec_findings=finding)
        else:
            temp = NISTControl.objects.filter(gen_findings=finding)
        temp_list = ""
        for i in temp:
            # if the NIST ID exists,
            if i.NIST_ID:
                # if it's the first NIST ID
                if temp_list == "":
                    temp_list = temp_list + (str(i.NIST_ID))
                else:
                    temp_list = temp_list + ", " + (str(i.NIST_ID))
        return temp_list
    else:
        nist_controls = []
        for item in all_findings:
            if item.finding_type == 'specific':
                temp = NISTControl.objects.filter(spec_findings=item)
            else:
                temp = NISTControl.objects.filter(gen_findings=item)
            temp_list = ""
            for i in temp:
                # if the NIST ID exists,
                if i.NIST_ID:
                    # if it's the first NIST ID
                    if temp_list == "":
                        temp_list = temp_list + (str(i.NIST_ID))
                    else:
                        temp_list = temp_list + ", " + (str(i.NIST_ID))
            temp_dict = {'id': item.finding_ID, 'nist_list': temp_list}
            nist_controls.append(temp_dict)
        return nist_controls


def get_nist_csf(all_findings=None, finding=None):
    """This returns nist csf list"""
    if finding:
        if finding.finding_type == 'specific':
            temp = NIST_CSF.objects.filter(spec_findings=finding)
        else:
            temp = NIST_CSF.objects.filter(gen_findings=finding)
        temp_list = ""
        for i in temp:
            # if the NIST CSF ID exists,
            if i.NIST_CSF_ID:
                # if it's the first NIST CSF ID,
                if temp_list == "":
                    temp_list = temp_list + (str(i.NIST_CSF_ID))
                else:
                    temp_list = temp_list + ", " + (str(i.NIST_CSF_ID))
        return temp_list
    else:
        NIST_CSF_list = []
        for item in all_findings:
            if item.finding_type == 'specific':
                temp = NIST_CSF.objects.filter(spec_findings=item)
            else:
                temp = NIST_CSF.objects.filter(gen_findings=item)
            temp_list = ""
            for i in temp:
                # if the NIST CSF ID exists,
                if i.NIST_CSF_ID:
                    # if it's the first NIST CSF ID,
                    if temp_list == "":
                        temp_list = temp_list + (str(i.NIST_CSF_ID))
                    else:
                        temp_list = temp_list + ", " + (str(i.NIST_CSF_ID))
            temp_dict = {'id': item.finding_ID, 'nist_csf_list': temp_list}
        NIST_CSF_list.append(temp_dict)
        return NIST_CSF_list


def get_cis_csc(all_finding=None, finding=None):
    if finding:
        if finding.finding_type == 'specific':
            temp = CIS_CSC.objects.filter(spec_findings=finding)
        else:
            temp = CIS_CSC.objects.filter(gen_findings=finding)
        temp_list = ""
        for i in temp:
            if i.CIS_ID:
                if temp_list == "":
                    temp_list = temp_list + (str(i.CIS_ID))
                else:
                    temp_list = temp_list + ", " + (str(i.CIS_ID))
        return temp_list
    else:
        CIS_CSC_list = []
        for item in all_findings:
            if item.finding_type == 'specific':
                temp = CIS_CSC.objects.filter(spec_findings=item)
            else:
                temp = CIS_CSC.objects.filter(gen_findings=item)
            temp_list = ""
            for i in temp:
                if i.CIS_ID:
                    if temp_list == "":
                        temp_list = temp_list + (str(i.CIS_ID))
                    else:
                        temp_list = temp_list + ", " + (str(i.CIS_ID))
            temp_dict = {'id': item.finding_ID, 'cis_csc_list': temp_list}
        CIS_CIC_list.append(temp_dict)
        return CIS_CSC_list


def get_timetable(all_finding=None, finding=None):
    if finding:
        cisa_finding = Finding.objects.get(name=finding.name)
        timetable = cisa_finding.timetable
        return timetable


def report_read_csv(csv_file, upload_type):

    f = TextIOWrapper(csv_file, encoding='utf-8-sig')
    items = csv.DictReader(f)

    if upload_type == "domains":
        RPTIdentifiedNetworks.objects.all().delete()
        for row in items:
            fields = {"Domain": "", "Network": "", "Registrant": ""}

            if "Domain" in row and (row["Domain"] != "" and row["Domain"] != None):
                fields["Domain"] = row["Domain"]
            if "Network" in row and (row["Network"] != "" and row["Network"] != None):
                fields["Network"] = row["Network"]
            if "Registrant" in row and (
                row["Registrant"] != "" and row["Registrant"] != None
            ):
                fields["Registrant"] = row["Registrant"]

            if (
                fields["Registrant"] == ""
                and fields["Domain"] == ""
                and fields["Network"] == ""
                or fields["Domain"] == ""
            ):
                continue

            network_rows, created = RPTIdentifiedNetworks.objects.get_or_create(
                ip_address=fields['Network'].strip(),
                domain=fields['Domain'].strip(),
                registrant=fields['Registrant'].strip(),
            )

    if upload_type == "emails":
        row_count = 0
        if (
            "Email Address" in items.fieldnames
            and "Breach Information" in items.fieldnames
        ):
            RPTBreachedEmails.objects.all().delete()
            for row in items:
                if row["Breach Information"] != "":
                    breached_email, created = RPTBreachedEmails.objects.get_or_create(
                        breached_email=row['Email Address'].strip(),
                        breach_info=row['Breach Information'].strip(),
                    )
                    if created:
                        row_count += 1
        return row_count


def report_read_pwa(text_file):
    pwd_file = text_file.read()
    pwd_text = pwd_file.decode("utf-8")
    return pwd_text


def generateEntryJson(filename):

    engagement = EngagementMeta.object()
    if not engagement:
        return ""

    report = Report.objects.first()
    if not report:
        return ""

    if report.report_type == "RVA":
        report_type = "Risk and Vulnerability Assessment (RVA)"
    elif report.report_type == "RPT":
        report_type = "Remote Penetration Test (RPT)"
    elif report.report_type == "FAST":
        report_type = "Federal Attack Surface Testing (FAST)"
    elif report.report_type == "HVA":
        report_type = "High Value Asset (HVA) Assessment"
    else:
        report_type = report.report_type

    asmt_id = "RV" + engagement.asmt_id
    start_date = ""
    end_date = ""

    if engagement.ext_start_date < engagement.int_start_date:
        start_date = engagement.ext_start_date
        end_date = engagement.int_start_date
    else:
        start_date = engagement.int_start_date
        end_date = engagement.ext_end_date

    if end_date.month < 10:
        fiscal_year = end_date.year
    else:
        fiscal_year = end_date.year + 1

    asmt_data = {
        'type': report_type,
        'id': asmt_id,
        'fiscal_year': fiscal_year,
        'sector': engagement.customer_sector,
        'critical_infrastructure_sector': engagement.customer_ci_type,
        'testing_start_date': str(start_date),
        'testing_completion_date': str(end_date),
        'state': engagement.customer_state
    }

    findings = UploadedFinding.objects.all()
    findings_list = []
    total_risk_score = 0
    mitigated_risk_score = 0

    for finding in findings:
        if finding.finding.finding_type == "specific":
            general_finding_name = finding.finding.gen_finding
            specific_finding_name = finding.finding.name
        else:
            general_finding_name = finding.finding.name
            specific_finding_name = "N/A"

        if len(finding.KEV.all()) > 0:
            kev = True
        else:
            kev = False

        total_risk_score += finding.risk_score

        if not finding.mitigation:
            mitigated_risk_score += finding.risk_score
            mitigation_status = "No Action Taken"
        else:
            mitigation_status = "Fully Mitigated"

        findings_list.append({
            'finding_category': str(finding.finding.category),
            'general_finding_name': general_finding_name,
            'specific_finding_name': specific_finding_name,
            'severity': str(finding.severity.severity_name),
            'location': finding.assessment_type,
            'date_generated': str(finding.created_at.strftime('%Y-%m-%d')),
            'kev': kev,
            'mitigation_status': mitigation_status,
            'date_of_mitigation': "",
            'mitigation_action': "",
            'mitigation_challenge': "",
            'cis_csc': finding.CIS_CSC,
            'cmmc': "",
            'nist_800_53': finding.NIST_800_53,
            'nist_csf': finding.NIST_CSF,
            'finding_risk_score': str(finding.risk_score)
        })

    asmt_data['findings'] = {
        'total_findings': len(findings_list),
        'original_risk_score': total_risk_score,
        'mitigated_risk_score': mitigated_risk_score,
        'final_risk_score': "",
        'individual_findings': findings_list
    }

    campaigns = Campaign.objects.all()
    campaign_list = []

    for campaign in campaigns:
        if str(campaign.creds_harvested) == "None":
            creds_harvested = "N/A"
        else:
            creds_harvested = campaign.creds_harvested

        if str(campaign.number_exploited) == "None":
            number_exploited = "N/A"
        else:
            number_exploited = campaign.number_exploited

        campaign_list.append({
            'emails_sent': campaign.emails_sent,
            'emails_delivered': campaign.emails_delivered,
            'total_clicks': campaign.total_clicks,
            'unique_clicks': campaign.unique_clicks,
            'time_to_first_click': str(campaign.time_to_first_click),
            'users_exploited': number_exploited,
            'length_of_campaign': campaign.length_of_campaign,
            'credentials_harvested': creds_harvested
        })

    payloads = Payload.objects.all()
    if Payload.objects.first():
        payload_date = str(Payload.objects.first().created_at.strftime('%Y-%m-%d'))
    else:
        payload_date = ""
    attack = ATTACK.objects.all()
    payload_list = []
    tactics_map = {'Reconnaissance': 'TA0043', 'Resource Development': 'TA0042', 'Initial Access': 'TA0001', 'Execution': 'TA0002', 'Persistence': 'TA0003', 'Privilege Escalation': 'TA0004', 'Defense Evasion': 'TA0005', 'Credential Access': 'TA0006', 'Discovery': 'TA0007', 'Lateral Movement': 'TA0008', 'Collection': 'TA0009', 'Command and Control': 'TA0011', 'Exfiltration': 'TA0010', 'Impact': 'TA0040'}

    for payload in payloads:
        technique_list = {}
        techniques = payload.techniques.split(", ")

        for technique in techniques:
            tactic_list = {}
            technique_name = ""
            if ATTACK.objects.filter(t_id="T"+technique).exists():
                attack = ATTACK.objects.filter(t_id="T"+technique).first() 
                technique_name = attack.name
                tactics = attack.tactics.split(", ")

                for tactic in tactics:
                    if tactics_map[tactic]:
                        tactic_id = tactics_map[tactic]
                        tactic_list[tactic_id] = tactic
                    else:
                        continue

            technique_list[technique] = {
                'name': technique_name,
                'tactics': tactic_list
            }

        payload_list.append({
            'payload_description': payload.payload_description,
            'c2_protocol': payload.c2_protocol,
            'border_protection': payload.border_protection,
            'host_protection': payload.host_protection,
            'command': payload.command,
            'code_type': payload.code_type,
            'techniques': technique_list,
            'file_types': payload.file_types,
            'filename': payload.attack_name
        })

    asmt_data['phishing_assessment'] = {
        'date_generated': payload_date,
        'phishing_assessment_date': str(engagement.ext_start_date),
        'security_solutions': [],
        'campaigns': campaign_list,
        'payloads': payload_list
    }

    narratives = Narrative.objects.all()
    narrative_list = []

    for narrative in narratives:
        attack_list = []
        tool_list = []

        for a in narrative.attack.all():
            attack_list.append(a.t_id)
        for t in narrative.tools.all():
            tool_list.append(t.name)
        
        narrative_list.append({
            'location': str(narrative.assessment_type),
            'mitre_techniques': attack_list,
            'tools_used': tool_list
        })

    asmt_data['attack_paths'] = {
        'total_attack_paths': len(narrative_list),
        'paths': narrative_list
    }

    kevs = KEV.objects.all()
    kev_list = []

    for kev in kevs:
        if kev.found:
            kev_list.append(kev.cve_id)

    asmt_data['known_exploited_vulnerabilities'] = {
        'total_kevs': len(kev_list),
        'kevs': kev_list
    }

    ransomware = Ransomware.objects.all()
    if RansomwareScenarios.objects.first():
        vuln_ransomware_scenarios = RansomwareScenarios.objects.first().vuln
    else:
        vuln_ransomware_scenarios = "N/A"
    security_solution_detection = "N/A"
    time_to_solution_detection = "N/A"
    security_solution_prevention = "N/A"
    time_to_solution_prevention = "N/A"
    security_personnel_detection = "N/A"
    time_to_personnel_detection = "N/A"
    end_user_detection = "N/A"
    time_to_user_detection = "N/A"

    for item in ransomware:
        if "detected by security software" in item.description:
            if not item.disabled:
                if item.trigger == "Y":
                    security_solution_detection = "Detected"
                    if item.time_start and item.time_end:
                        start = item.time_start.astimezone(timezone.utc)
                        end = item.time_end.astimezone(timezone.utc)
                        difference = relativedelta(end, start)

                        if difference.days == 1:
                            days = "1 day "
                        else:
                            days = str(difference.days) + " days "
                        if difference.hours == 1:
                            hours = "1 hour "
                        else:
                            hours = str(difference.hours) + " hours "
                        if difference.minutes == 1:
                            minutes = "and 1 minute"
                        else:
                            minutes = "and " + str(difference.minutes) + " minutes"
                    else:
                        days = "0 days "
                        hours = "0 hours "
                        minutes = "and 0 minutes"
                    time_to_solution_detection = days + hours + minutes
                else:
                    security_solution_detection = "Not Detected"
        elif "prevented by security software" in item.description:
            if not item.disabled:
                if item.trigger == "Y":
                    security_solution_prevention = "Prevented"
                    if item.time_start and item.time_end:
                        start = item.time_start.astimezone(timezone.utc)
                        end = item.time_end.astimezone(timezone.utc)
                        difference = relativedelta(end, start)

                        if difference.days == 1:
                            days = "1 day "
                        else:
                            days = str(difference.days) + " days "
                        if difference.hours == 1:
                            hours = "1 hour "
                        else:
                            hours = str(difference.hours) + " hours "
                        if difference.minutes == 1:
                            minutes = "and 1 minute"
                        else:
                            minutes = "and " + str(difference.minutes) + " minutes"
                    else:
                        days = "0 days "
                        hours = "0 hours "
                        minutes = "and 0 minutes"
                    time_to_solution_prevention = days + hours + minutes
                else:
                    security_solution_prevention = "Not Prevented"
        elif "detected by security and/or IT personnel" in item.description:
            if not item.disabled:
                if item.trigger == "Y":
                    security_personnel_detection = "Detected"
                    if item.time_start and item.time_end:
                        start = item.time_start.astimezone(timezone.utc)
                        end = item.time_end.astimezone(timezone.utc)
                        difference = relativedelta(end, start)

                        if difference.days == 1:
                            days = "1 day "
                        else:
                            days = str(difference.days) + " days "
                        if difference.hours == 1:
                            hours = "1 hour "
                        else:
                            hours = str(difference.hours) + " hours "
                        if difference.minutes == 1:
                            minutes = "and 1 minute"
                        else:
                            minutes = "and " + str(difference.minutes) + " minutes"
                    else:
                        days = "0 days "
                        hours = "0 hours "
                        minutes = "and 0 minutes"
                    time_to_personnel_detection = days + hours + minutes
                else:
                    security_personnel_detection = "Not Detected"
        elif "reported by end users" in item.description:
            if not item.disabled:
                if item.trigger == "Y":
                    end_user_detection = "Detected"
                    if item.time_start and item.time_end:
                        start = item.time_start.astimezone(timezone.utc)
                        end = item.time_end.astimezone(timezone.utc)
                        difference = relativedelta(end, start)

                        if difference.days == 1:
                            days = "1 day "
                        else:
                            days = str(difference.days) + " days "
                        if difference.hours == 1:
                            hours = "1 hour "
                        else:
                            hours = str(difference.hours) + " hours "
                        if difference.minutes == 1:
                            minutes = "and 1 minute"
                        else:
                            minutes = "and " + str(difference.minutes) + " minutes"
                    else:
                        days = "0 days "
                        hours = "0 hours "
                        minutes = "and 0 minutes"
                    time_to_user_detection = days + hours + minutes
                else:
                    end_user_detection = "Not Detected"
        else:
            continue

    asmt_data['ransomware_susceptibility'] = {
        'total_vulnerable_scenarios': vuln_ransomware_scenarios,
        'security_solution_detection': security_solution_detection,
        'time_to_solution_detection': time_to_solution_detection,
        'security_solution_prevention': security_solution_prevention,
        'time_to_solution_prevention': time_to_solution_prevention,
        'security_personnel_detection': security_personnel_detection,
        'time_to_personnel_detection': time_to_personnel_detection,
        'end_user_detection': end_user_detection,
        'time_to_user_detection': time_to_user_detection
    }

    data_exfil = DataExfil.objects.all()
    data_exfil_list = []
    data_exfil_count = 0

    for item in data_exfil:
        if item.detection == "N" and item.prevention == "N":
            data_exfil_count+=1

        if item.detection == "D":
            detection = "Detected"
        else:
            detection = "Not Detected"

        if item.prevention == "B":
            prevention = "Blocked"
        else:
            prevention = "Not Blocked"

        data_exfil_list.append({
            'protocol': item.protocol,
            'data_type': item.datatype,
            'detection': detection,
            'prevention': prevention
        })

    asmt_data['data_exfiltration'] = {
        'total_vulnerable_protocols': data_exfil_count,
        'results': data_exfil_list
    }

    port_mapping = PortMappingHost.objects.all()
    port_mapping_list = []
    total_open_ports = 0

    for item in port_mapping:
        ports = item.ports.split(", ")
        for p in ports:
            total_open_ports+=1
            if p not in port_mapping_list:
                port_mapping_list.append(p)

    asmt_data['external_port_mapping'] = {
        'total_open_ports': total_open_ports,
        'open_ports': port_mapping_list
    }

    with open(filename, "wb+") as f:
        f.write(json.dumps(asmt_data).encode())

    return filename


def generateElectionJson(filename):

    engagement = EngagementMeta.object()
    if not engagement:
        return ""

    report = Report.objects.first()
    if not report:
        return ""

    if report.report_type == "RVA":
        report_type = "Risk and Vulnerability Assessment (RVA)"
    elif report.report_type == "RPT":
        report_type = "Remote Penetration Test (RPT)"
    elif report.report_type == "FAST":
        report_type = "Federal Attack Surface Testing (FAST)"
    elif report.report_type == "HVA":
        report_type = "High Value Asset (HVA) Assessment"
    else:
        report_type = report.report_type

    asmt_id = "RV" + engagement.asmt_id
    start_date = ""
    end_date = ""

    if engagement.ext_start_date < engagement.int_start_date:
        start_date = engagement.ext_start_date
        end_date = engagement.int_start_date
    else:
        start_date = engagement.int_start_date
        end_date = engagement.ext_end_date

    if end_date.month < 10:
        fiscal_year = end_date.year
    else:
        fiscal_year = end_date.year + 1

    elec_data = {
        'type': report_type,
        'id': asmt_id,
        'fiscal_year': fiscal_year,
        'sector': engagement.customer_sector,
        'critical_infrastructure_sector': engagement.customer_ci_type,
        'testing_start_date': str(start_date),
        'testing_completion_date': str(end_date),
        'state': engagement.customer_state
    }

    systems = list(ElectionSystems.objects.all().values())

    if len(systems) > 0:
        for i in range(0, len(systems)):
            systems[i].pop('id')
            systems[i].pop('order')
            systems[i].pop('created_at')
            systems[i].pop('updated_at')
            elec_data['systems'] = systems
    else:
        elec_data['systems'] = []

    if ElectionInfrastructureQuestionnaire.objects.filter(pk=1).exists():
        questionnaire = list(ElectionInfrastructureQuestionnaire.objects.filter(pk=1).values())
        questionnaire[0].pop('id')
        questionnaire[0].pop('created_at')
        questionnaire[0].pop('updated_at')
        elec_data['questionnaire'] = questionnaire[0]
    else:
        elec_data['questionnaire'] = {}

    with open(filename, "wb+") as f:
        f.write(json.dumps(elec_data).encode())

    return filename

def gen_ptp_filename(
    prefix="ptp-export", suffix=None, ext="dat"
):
    filename = []
    if prefix:
        filename.append(prefix)
    if suffix:
        filename.append(suffix)
    filename = ['-'.join(filename)]
    if ext:
        filename.append(ext)
    return '.'.join(filename)


def serializeJSON(filename=None):
    # Get uploaded findings in order of External -> Internal -> Phishing(Critical-Low)
    uploaded_findings = UploadedFinding.objects.all().order_by('assessment_type', 'severity', 'uploaded_finding_name')
    eng_meta_serializer = EngagementSerializer(EngagementMeta.objects.all(), many=True)
    eng_meta_model = str(EngagementMeta._meta)
    all_data = list(CIS_CSC.objects.all().order_by('CIS_ID')) \
        + list(NIST_CSF.objects.all()) \
        + list(NISTControl.objects.all()) \
        + list(uploaded_findings) \
        + list(EngagementMeta.objects.all()) \
        + list(ImageFinding.objects.all().order_by('finding', 'order')) \
        + list(AffectedSystems.objects.all().order_by('name')) \
        + list(KEV.objects.all()) \
        + list(DataExfil.objects.all().order_by('order')) \
        + list(Campaign.objects.all().order_by('order')) \
        + list(Payload.objects.all().order_by('order')) \
        + list(Ransomware.objects.all().order_by('order')) \
        + list(RansomwareScenarios.objects.all()) \
        + list(PortMappingHost.objects.all().order_by('order')) \
        + list(ElectionSystems.objects.all()) \
        + list(ElectionInfrastructureQuestionnaire.objects.all()) \
        + list(NarrativeType.objects.all().order_by('name')) \
        + list(Tools.objects.all().order_by('name')) \
        + list(ATTACK.objects.all().order_by('t_id')) \
        + list(Narrative.objects.all().order_by('assessment_type', 'order')) \
        + list(NarrativeStep.objects.all().order_by('narrative', 'order')) \
        + list(Report.objects.all()) \
        + list(Acronym.objects.all().order_by('acronym')) \
        + list(InfraTS.objects.all().order_by('assessment_type', 'order')) \
        + list(InfraPhishing.objects.all().order_by('order')) \
        + list(InfraRedirectors.objects.all().order_by('order')) \
        + list(InfraWS.objects.all().order_by('assessment_type', 'order')) \
        + list(LateralMovement.objects.all().order_by('order')) \
        + list(Files.objects.all().order_by('order')) \
        + list(InteractiveLogons.objects.all().order_by('order')) \
        + list(HighImpactScans.objects.all().order_by('order')) \
        + list(SignificantEvents.objects.all().order_by('order')) \
        + list(Artifact.objects.all().order_by('order'))

    data = JSONserializers.serialize("json", all_data)
    if not filename:
        filename = gen_ptp_filename(ext="json")
    data_aat = data[:-1] + data[-1:]

    with open(filename, "wb+") as f:
        f.write(data_aat.encode())
    
    return filename


def save_chart(data, chart):
    if not os.path.exists("pentestportal/media"):
        os.makedirs("pentestportal/media")
    if not os.path.exists("pentestportal/media/charts"):
        os.makedirs("pentestportal/media/charts")

    if data:
        filename = 'pentestportal/media/charts/' + chart + '.png'
        svg2png(bytestring=data, write_to=filename)

    return True


def split_to_3(queryset):
    split = int(math.ceil(queryset.count() / 3.0))
    columns = list()
    for i in range(3):
        columns.append(queryset[i * split : (i + 1) * split])
    return columns
