# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import contextlib
import datetime
import glob
import os
import netaddr, socket
import re
import pyzipper
import shutil
import subprocess
import json
from zipfile import ZipFile
from django.views import generic

from os.path import join
from rest_framework.renderers import JSONRenderer

from django.conf import settings
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404, JsonResponse
from django.shortcuts import HttpResponse, render

from report_gen.pt_report import generate_ptp_report
from report_gen.pt_kev import generate_kev_report
from report_gen.pt_slide import generate_ptp_slides
from report_gen.pt_tracker import create_tracker
from report_gen.pt_pace import generate_pace_document

from ptportal.serializers import ElectionInfrastructureSerializer, HVASerializer

from ptportal.models import (
    ElectionInfrastructureQuestionnaire,
    EngagementMeta,
    CIS_CSC,
    Report,
    BaseFinding,
    GeneralFinding,
    SpecificFinding,
    ImageFinding,
    UploadedFinding
)

from ptportal.views.utils import (
    serializeJSON,
    report_read_csv,
    generateEntryJson,
    generateElectionJson,
    save_chart,
    gen_ptp_filename,
)

from ptp import partial_backup as backup

media_path = settings.MEDIA_ROOT

if settings.DEBUG:
    DOWNLOAD_ZIP = False

def report_findings_counts():
    # Findings Breakdown counts
    findings_breakdown = dict()

    critical = UploadedFinding.critical.all()
    high = UploadedFinding.high.all()
    medium = UploadedFinding.medium.all()
    low = UploadedFinding.low.all()
    informational = UploadedFinding.informational.all()

    internal_external = UploadedFinding.internal_and_external.all()
    external = UploadedFinding.external.all()
    internal = UploadedFinding.internal.all()
    phishing = UploadedFinding.phishing.all()

    findings_breakdown['Critical'] = critical
    findings_breakdown['High'] = high
    findings_breakdown['Medium'] = medium
    findings_breakdown['Low'] = low
    findings_breakdown['Info'] = informational

    findings_breakdown['Internal/External'] = internal_external
    findings_breakdown['External'] = external
    findings_breakdown['Internal'] = internal
    findings_breakdown['Phishing'] = phishing

    findings_breakdown['Internal/External_Critical'] = critical.intersection(
        internal_external
    )
    findings_breakdown['Internal/External_High'] = high.intersection(internal_external)
    findings_breakdown['Internal/External_Medium'] = medium.intersection(
        internal_external
    )
    findings_breakdown['Internal/External_Low'] = low.intersection(internal_external)
    findings_breakdown['Internal/External_Info'] = informational.intersection(
        internal_external
    )

    findings_breakdown['External_Critical'] = critical.intersection(external)
    findings_breakdown['External_High'] = high.intersection(external)
    findings_breakdown['External_Medium'] = medium.intersection(external)
    findings_breakdown['External_Low'] = low.intersection(external)
    findings_breakdown['External_Info'] = informational.intersection(external)

    findings_breakdown['Internal_Critical'] = critical.intersection(internal)
    findings_breakdown['Internal_High'] = high.intersection(internal)
    findings_breakdown['Internal_Medium'] = medium.intersection(internal)
    findings_breakdown['Internal_Low'] = low.intersection(internal)
    findings_breakdown['Internal_Info'] = informational.intersection(internal)

    findings_breakdown['Phishing_Critical'] = critical.intersection(phishing)
    findings_breakdown['Phishing_High'] = high.intersection(phishing)
    findings_breakdown['Phishing_Medium'] = medium.intersection(phishing)
    findings_breakdown['Phishing_Low'] = low.intersection(phishing)
    findings_breakdown['Phishing_Info'] = informational.intersection(phishing)
    return findings_breakdown


class Export(generic.base.TemplateView):
    template_name = "ptportal/export.html"

    def get_context_data(self, **kwargs):
        context = {}
        engagement = EngagementMeta.object()
        if engagement:
            context['eng_meta'] = engagement

        uploaded_list = UploadedFinding.objects.all().order_by('assessment_type', 'severity', 'uploaded_finding_name')
        cis_csc_objects = CIS_CSC.objects.all().order_by('CIS_ID')
        
        for c in cis_csc_objects:
            ciscsc_findings = c.findings.all()
            finding_ids = []
            for count, u in enumerate(uploaded_list):
                if u.finding in ciscsc_findings:
                    finding_ids.append(count + 1)
            c.finding_ids = ', '.join(str(e) for e in finding_ids)
            c.save()

        context['findings_breakdown'] = report_findings_counts()

        # NIST_800_53
        context['nist_ac'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='AC'
        ).count()
        context['nist_at'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='AT'
        ).count()
        context['nist_au'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='AU'
        ).count()
        context['nist_ca'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='CA'
        ).count()
        context['nist_cm'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='CM'
        ).count()
        context['nist_cp'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='CP'
        ).count()
        context['nist_ia'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='IA'
        ).count()
        context['nist_ir'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='IR'
        ).count()
        context['nist_ma'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='MA'
        ).count()
        context['nist_mp'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='MP'
        ).count()
        context['nist_pe'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='PE'
        ).count()
        context['nist_pl'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='PL'
        ).count()
        context['nist_pm'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='PM'
        ).count()
        context['nist_ps'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='PS'
        ).count()
        context['nist_ra'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='RA'
        ).count()
        context['nist_sa'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='SA'
        ).count()
        context['nist_sc'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='SC'
        ).count()
        context['nist_si'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='SI'
        ).count()
        context['nist_sr'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='SR'
        ).count()

        # NIST_CSF
        context['nist_iam'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='ID.AM'
        ).count()
        context['nist_ig'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='ID.GV'
        ).count()
        context['nist_ira'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='ID.RA'
        ).count()
        context['nist_isc'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='ID.SC'
        ).count()
        context['nist_pac'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='PR.AC'
        ).count()
        context['nist_pat'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='PR.AT'
        ).count()
        context['nist_pds'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='PR.DS'
        ).count()
        context['nist_pip'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='PR.IP'
        ).count()
        context['nist_pma'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='PR.MA'
        ).count()
        context['nist_ppt'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='PR.PT'
        ).count()
        context['nist_dae'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='DE.AE'
        ).count()
        context['nist_dcm'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='DE.CM'
        ).count()
        context['nist_rmi'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='RS.MI'
        ).count()

        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)
        riskChart = bytes(postData['riskChart'], 'utf-8')
        nistSPChart = bytes(postData['nistSPChart'], 'utf-8')
        nistFrameworkChart = bytes(postData['nistFrameworkChart'], 'utf-8')
        save_chart(riskChart, 'riskchart')
        save_chart(nistSPChart, 'nistspchart')
        save_chart(nistFrameworkChart, 'nistframeworkchart')
        return HttpResponse(status=200)


def remove_unnecessary_files(json=True, zip=True):
    # remove all unnecessary .json and .zip files
    if json:
        json_files = glob.glob(os.getcwd() + '/*.json')
        for f in json_files:
            os.remove(f)
    if zip:
        zip_files = glob.glob(os.getcwd() + '/*.zip')
        for f in zip_files:
            os.remove(f)


def export_json(
    data=None,
    zip=False,
    password_protected=True,
    json_file='json_file.json',
    zip_name=None,
    anon_report=False,
):
    engagement_obj = EngagementMeta.objects.all()[:1].get()
    asmt_id = engagement_obj.asmt_id

    if data == 'standard':
        json_file = gen_ptp_filename(prefix=f'RV{asmt_id}-data', ext='json')
        generateEntryJson(json_file)
    elif data == 'election':
        json_file = gen_ptp_filename(prefix=f'RV{asmt_id}-election', ext='json')
        generateElectionJson(json_file)
    with open(json_file, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="application/json, application/octet-stream")
        response['Content-Disposition'] = 'attachment; filename=' + os.path.basename(json_file)

    remove_unnecessary_files()
        
    return response


def generate_EI_json(request):
    return export_json(data='election')


def generate_json(request):
    return export_json(data='standard')


def download_backup(request):
    # reference backup method used in ptp.py CLI
    backup_file = backup(
        in_docker=True, password=EngagementMeta.objects.first().report_password
    )

    # Download backup zip through browser
    content_type = "application/octet-stream"
    if os.path.exists(backup_file):
        with open(backup_file, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type=content_type)
            response[
                'Content-Disposition'
            ] = 'attachment; filename=' + os.path.basename(backup_file)
        remove_unnecessary_files()
        return response

    return render(request, 'ptportal/export.html')


def generate_artifact(artifact_type, anon_report=False):
    base_ctype = "application/vnd.openxmlformats-officedocument."

    report_obj = Report.objects.all()[:1].get()
    engagement_obj = EngagementMeta.objects.all()[:1].get()

    asmt_id = engagement_obj.asmt_id
    cust_initials = engagement_obj.customer_initials

    if report_obj.report_type == "":
        print("Report type is not set.")
        report_type = "RVA"
    else:
        report_type = report_obj.report_type

    report_type_template = report_type.lower()
    json_filename = serializeJSON()
    artifact_name_base = (
        report_type
        + "-"
        + asmt_id
        + "-"
        + cust_initials
        + "-"
        + artifact_type
        + "_Draft-YYYYMMDD"
    )

    template_name_base = "report_gen/templates/" + report_type_template + "-template"

    if artifact_type == "Report":
        content_type = base_ctype + "wordprocessingml.document"
        template_name = template_name_base + '.docx'
        artifact_name = artifact_name_base + '.docx'

        generate_ptp_report(template_name, artifact_name, True, json_filename, settings.MEDIA_ROOT)

    elif artifact_type == "Out-Brief":
        content_type = base_ctype + "presentationml.presentation"
        template_name = template_name_base + '.pptx'
        artifact_name = artifact_name_base + '.pptx'

        generate_ptp_slides(template_name, artifact_name, True, json_filename, settings.MEDIA_ROOT)

    elif artifact_type == "PACE":
        content_type = base_ctype + "pdf"
        assets = "report_gen/templates/PACE/"
        artifact_name = report_type + "-" + asmt_id + "-" + cust_initials + "-PACE.pdf"

        generate_pace_document(artifact_name, json_filename, assets)

    elif artifact_type == "KEV":
        content_type = base_ctype + "wordprocessingml.document"
        template_name = 'report_gen/templates/KEV-template.docx'
        artifact_name = report_type + "-" + asmt_id + "-" + "Known-Exploited-Vulnerabilities" + '.docx'

        generate_kev_report(template_name, artifact_name, json_filename, settings.MEDIA_ROOT)

    elif artifact_type == "Tracker":
        content_type = base_ctype + "spreadsheetml.sheet"
        artifact_name = report_type + "-" + asmt_id + "-" + cust_initials + "-ActivityTracker.xlsx"

        create_tracker(artifact_name, json_filename)

    with contextlib.suppress(FileNotFoundError):
        os.remove(json_filename)

    download_file = artifact_name

    if os.path.exists(download_file):
        with open(download_file, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type=content_type)
            response[
                'Content-Disposition'
            ] = 'attachment; filename=' + os.path.basename(download_file)

    os.remove(download_file)
    return response


def generate_report(request):
    return generate_artifact("Report")


def generate_outbrief(request):
    return generate_artifact("Out-Brief")


def generate_tracker(request):
    return generate_artifact("Tracker")


def generate_pace(request):
    return generate_artifact("PACE")


def generate_kevs(request):
    return generate_artifact("KEV")

