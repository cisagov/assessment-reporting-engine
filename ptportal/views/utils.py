# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import datetime
import json
import math
import os
import re, csv
import base64
from cairosvg import svg2png
from io import TextIOWrapper
from django.core import serializers as JSONserializers
from rest_framework import serializers
from django.core.exceptions import ObjectDoesNotExist
from django.utils.text import slugify
from iptools import IpRange

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


def generateHVA(filename):
    serializer = HVASerializer(HVAData.objects.first())
    json = JSONRenderer().render(serializer.data)
    with open(filename, 'wb+') as f:
        f.write(json)


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

    asmt_id = engagement.asmt_id
    uploaded_findings = UploadedFinding.objects.all()
    campaigns = Campaign.objects.all()
    payloads = Payload.objects.all()
    af = AttackFramework.objects.all()
    csc = CIS_CSC.objects.all()
    data = []

    # initialize finding_entries list
    finding_entries = []

    # for each finding, add finding_entry to finding_entries list
    for finding in uploaded_findings:
        print('finding: ', finding)
        std_modify = finding.finding.cisa_id == 1
        finding_entry = {}
        finding_entry['asmt_id'] = 'RV' + str(asmt_id)
        finding_entry['fy'] = engagement.fy
        finding_entry['NCATS ID'] = str(finding.finding.cisa_id)
        finding_entry['severity'] = str(finding.severity)
        finding_entry['man/tool'] = str(finding.discovery)
        finding_entry['Assessment Type'] = str(finding.assessment_type)
        if str(finding.mitigation) == "True":
            finding_entry['Mitigated'] = "Yes"
        else:
            finding_entry['Mitigated'] = "No"

        finding_entry['Std Text Modify'] = std_modify

        finding_entry['NIST_800_53'] = str(finding.NIST_800_53)
        finding_entry['NIST_CSF'] = str(finding.NIST_CSF)
        finding_entry['CIS_CSC'] = str(finding.CIS_CSC)

        if std_modify:
            finding_entry['custom_name'] = finding.uploaded_finding_name
        finding_entry['Date Generated'] = finding.created_at.strftime('%m/%d/%y')
        findings = {}
        findings.update(finding_entry)
        finding_entries.append(findings)

    # concatenate data with the updated finding_entries list
    data.extend(finding_entries)

    for campaign in campaigns:
        campaign_entry = {}
        campaign_entry['asmt_id'] = 'RV' + str(asmt_id)
        campaign_entry['Number of Email Targets'] = str(campaign.emails_sent)
        campaign_entry['Number of Clicks'] = str(campaign.total_clicks)
        campaign_entry['Number of Users Click'] = str(campaign.unique_clicks)
        campaign_entry['Time to First Click'] = str(campaign.time_to_first_click)
        campaign_entry['Payload'] = payloads.count() > 0
        campaign_entry['Number of Users Exploited'] = str(campaign.number_exploited)
        campaign_entry['Length of Campaign (Days)'] = str(campaign.length_of_campaign)
        full_campaign = {}
        full_campaign.update(campaign_entry)
        data.append(full_campaign)

    # initialize payload_entries list
    payload_entries = []

    # for each payload, add payload_entry to payload_entries list
    for payload in payloads:
        payload_entry = {}
        payload_entry['asmt_id'] = 'RV' + str(asmt_id)
        payload_entry['payload_description'] = str(payload.payload_description)
        payload_entry['c2_protocol '] = str(payload.c2_protocol)
        payload_entry['border_protection'] = str(payload.border_protection)
        payload_entry['host_protection'] = str(payload.host_protection)
        full_payload = {}
        full_payload.update(payload_entry)
        payload_entries.append(full_payload)

    # if there are payload_entries to map
    if len(payload_entries) > 0:
        # map mitre attack techniques to each payload_entry
        parser = Parser(finding_entries, payload_entries)
        mapped_payloads = parser.report.output["Payloads"]

        # concatenate data with the updated mapped_payloads list
        data.extend(mapped_payloads)

    for ex in exfil:
        ex_entry = {}
        ex_entry['asmt_id'] = 'RV' + str(asmt_id)
        ex_entry['protocol'] = str(ex.protocol)
        ex_entry['datatype '] = str(ex.datatype)
        ex_entry['created_at'] = str(ex.created_at)
        ex_entry['date_time'] = str(ex.date_time)
        ex_entry['result'] = str(ex.result)
        full_exfil = {}
        full_exfil.update(ex_entry)
        data.append(full_exfil)

    if ransom:
        ransom_entry = {}
        ransom_entry['asmt_id'] = 'RV' + str(asmt_id)
        ransom_entry['wormable_machines'] = str(ransom.wormable_machines)
        ransom_entry['wormable_HVAs'] = str(ransom.wormable_HVAs)
        ransom_entry['network_susc'] = str(ransom.network_susc)
        full_rans = {}
        full_rans.update(ransom_entry)
        data.append(full_rans)

    af_entry = {}
    full_af = {}
    af_entry['asmt_id'] = 'RV' + str(asmt_id)
    af_entry['Initial Access'] = []
    af_entry['Execution'] = []
    af_entry['Persistence'] = []
    af_entry['Privilege Escalation'] = []
    af_entry['Defense Evasion'] = []
    af_entry['Credential Access'] = []
    af_entry['Discovery'] = []
    af_entry['Lateral Movement'] = []
    af_entry['Collection'] = []
    af_entry['Exfiltration'] = []
    af_entry['Command and Control'] = []

    for item in af:
        if item.used:
            if ',' in item.tactics:
                tactics = str(item.tactics).split(', ')
                for tactic in tactics:
                    af_entry[tactic].append(str(item))
            else:
                af_entry[item.tactics].append(str(item))

    full_af.update(af_entry)
    data.append(full_af)

    with open(filename, "wb+") as f:
        f.write(json.dumps(data).encode())

    return filename


def gen_ptp_filename(
    prefix="ptp-export", suffix=None, ext="dat"
):  # extra param deleted: now=''
    filename = []
    if prefix:
        filename.append(prefix)
    if suffix:
        filename.append(suffix)
    # if now is not None:  ## temporarily commenting to confirm perminent delete
    # if not now:
    # now = str(datetime.datetime.now().strftime("%m%d%Y-%H.%M.%S"))
    # filename.append(now)
    filename = ['-'.join(filename)]
    if ext:
        filename.append(ext)
    return '.'.join(filename)


def serializeJSON(filename=None):
    # Get uploaded findings in order of External -> Internal -> Phishing(Critical-Low)
    uploaded_findings = UploadedFinding.preferred_order.get_preferred_order()
    eng_meta_serializer = EngagementSerializer(EngagementMeta.objects.all(), many=True)
    eng_meta_model = str(EngagementMeta._meta)
    all_data = (
        list(CIS_CSC.objects.all())
        + list(HVATarget.objects.all())
        + list(uploaded_findings)
        + list(ImageFinding.objects.all())
        + list(AffectedSystems.objects.all())
        + list(Report.objects.all())
        + list(AssumptionsConstraints.objects.all())
        + list(AssessmentScenarios.objects.filter(used=True))
        + list(Campaign.objects.all())
        + list(Payload.objects.all())
        + list(AttackPath.objects.all())
        + list(AttackFramework.objects.filter(used=True))
        + list(RPTBreachedEmails.objects.all())
        + list(RPTIdentifiedNetworks.objects.all())
        + list(NarrativeType.objects.all())
        + list(Narrative.objects.all())
        + list(ToolScreenshot.objects.all())
        + list(PortMappingHost.objects.all())
        + list(ArtifactFindings.objects.all())
        + list(
            Acronym.objects.filter(
                belongs_to_report=Report.object(), include=True
            ).order_by('acronym')
        )
    )

    InfraTS.objects.all().delete()
    InfraWS.objects.all().delete()
    LateralMovement.objects.all().delete()
    Persistence.objects.all().delete()
    Files.objects.all().delete()
    InteractiveLogons.objects.all().delete()
    SignificantEvents.objects.all().delete()

    infrats = InfraTS.objects.create()
    for object in InfraTSFindings.objects.all():
        infrats.findings.add(object)
    infrats_serializer = InfraTSSerializer(InfraTS.objects.all(), many=True)
    infrats_model = str(InfraTS._meta)

    infraws = InfraWS.objects.create()
    for object in InfraWSFindings.objects.all():
        infraws.findings.add(object)
    infraws_serializer = InfraWSSerializer(InfraWS.objects.all(), many=True)
    infraws_model = str(InfraWS._meta)

    lat_move = LateralMovement.objects.create()
    for object in LateralMovementFindings.objects.all():
        lat_move.findings.add(object)
    lat_move_serializer = LateralMovementSerializer(
        LateralMovement.objects.all(), many=True
    )
    lat_move_model = str(LateralMovement._meta)

    persist = Persistence.objects.create()
    for object in PersistenceFindings.objects.all():
        persist.findings.add(object)
    persist_serializer = PersistenceSerializer(Persistence.objects.all(), many=True)
    persist_model = str(Persistence._meta)

    files = Files.objects.create()
    for object in FilesFindings.objects.all():
        files.findings.add(object)
    files_serializer = FilesSerializer(Files.objects.all(), many=True)
    files_model = str(Files._meta)

    int_logons = InteractiveLogons.objects.create()
    for object in InteractiveLogonsFindings.objects.all():
        int_logons.findings.add(object)
    int_logons_serializer = InteractiveLogonsSerializer(
        InteractiveLogons.objects.all(), many=True
    )
    int_logons_model = str(InteractiveLogons._meta)

    sig_events = SignificantEvents.objects.create()
    for object in SignificantEventsFindings.objects.all():
        sig_events.findings.add(object)
    sig_events_serializer = SignificantEventsSerializer(
        SignificantEvents.objects.all(), many=True
    )
    sig_events_model = str(SignificantEvents._meta)

    activity_tracker = (
        json.dumps({'model': infrats_model, 'fields': infrats_serializer.data})
        + ", "
        + json.dumps({'model': infraws_model, 'fields': infraws_serializer.data})
        + ", "
        + json.dumps({'model': lat_move_model, 'fields': lat_move_serializer.data})
        + ", "
        + json.dumps({'model': persist_model, 'fields': persist_serializer.data})
        + ", "
        + json.dumps({'model': files_model, 'fields': files_serializer.data})
        + ", "
        + json.dumps({'model': int_logons_model, 'fields': int_logons_serializer.data})
        + ", "
        + json.dumps({'model': sig_events_model, 'fields': sig_events_serializer.data})
        + ", "
        + json.dumps(
            {'model': eng_meta_model, 'fields': dict(eng_meta_serializer.data[0])}
        )
    )

    data = JSONserializers.serialize("json", all_data)
    if not filename:
        filename = gen_ptp_filename(ext="json")
    data_aat = data[:-1] + ", " + activity_tracker + data[-1:]
    with open(filename, "wb+") as f:
        f.write(data_aat.encode())
    return filename


def save_chart(data, chart):
    if not os.path.exists("pentestportal/media"):
        os.makedirs("pentestportal/media")
    if not os.path.exists("pentestportal/media/charts"):
        os.makedirs("pentestportal/media/charts")

    if data:
        imgdata = base64.b64decode(data)
        filename = 'pentestportal/media/charts/' + chart + '.png'
        with open(filename, 'wb') as f:
            f.write(imgdata)

    return True


def split_to_3(queryset):
    split = int(math.ceil(queryset.count() / 3.0))
    columns = list()
    for i in range(3):
        columns.append(queryset[i * split : (i + 1) * split])
    return columns
