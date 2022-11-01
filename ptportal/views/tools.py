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
import pyminizip
import pyzipper
import shutil
import subprocess
from zipfile import ZipFile

from os.path import join
from rest_framework.renderers import JSONRenderer

from django.conf import settings
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404, JsonResponse
from django.shortcuts import HttpResponse, render

from report_gen.pt_remediation import generate_remediation
from report_gen.pt_report import generate_ptp_report
from report_gen.pt_summary import generate_ptp_summary
from report_gen.pt_slide import generate_ptp_slides
from report_gen.pt_tracker import create_tracker

from ptportal.serializers import ElectionInfrastructureSerializer, HVASerializer

from ptportal.models import (
    ElectionInfrastructureQuestionnaire,
    EngagementMeta,
    HVAData,
    CIS_CSC,
    Report,
    BaseFinding,
    GeneralFinding,
    SpecificFinding,
    ImageFinding,
    AttackPath,
)

from ptportal.views.utils import (
    serializeJSON,
    report_read_csv,
    generateEntryJson,
    generateHVA,
    save_chart,
    gen_ptp_filename,
)

from ptp import partial_backup as backup

media_path = settings.MEDIA_ROOT
DEFAULT_PASSWORD = 'rva123'

if settings.DEBUG:
    DOWNLOAD_ZIP = False


def tools(request):

    uploaded_list = GeneralFinding.objects.all()
    cis_csc_objects = CIS_CSC.objects.all()
    for c in cis_csc_objects:
        ciscsc_findings = c.gen_findings.all()
        finding_ids = []
        for count, u in enumerate(uploaded_list):
            if u in ciscsc_findings:
                finding_ids.append(count + 1)
        c.finding_ids = ', '.join(str(e) for e in finding_ids)
        c.save()

    if request.method == 'GET':
        engagement = EngagementMeta.object()
        context = {'engagement': engagement}

        # NIST_800_53
        context['nist_ac'] = UploadedFinding.objects.filter(
            NIST_800_53__icontains='AC'
        ).count()
        context['nist_at'] = UploadedFinding.objects.filter(
            NIST_800_53__icontains='AT'
        ).count()
        context['nist_cm'] = UploadedFinding.objects.filter(
            NIST_800_53__icontains='CM'
        ).count()
        context['nist_ia'] = UploadedFinding.objects.filter(
            NIST_800_53__icontains='IA'
        ).count()
        context['nist_ra'] = UploadedFinding.objects.filter(
            NIST_800_53__icontains='RA'
        ).count()
        context['nist_sc'] = UploadedFinding.objects.filter(
            NIST_800_53__icontains='SC'
        ).count()
        context['nist_si'] = UploadedFinding.objects.filter(
            NIST_800_53__icontains='SI'
        ).count()

        # NIST_CSF
        context['nist_iam'] = UploadedFinding.objects.filter(
            NIST_CSF__icontains='ID.AM'
        ).count()
        context['nist_ig'] = UploadedFinding.objects.filter(
            NIST_CSF__icontains='ID.GV'
        ).count()
        context['nist_ira'] = UploadedFinding.objects.filter(
            NIST_CSF__icontains='ID.RA'
        ).count()
        context['nist_pac'] = UploadedFinding.objects.filter(
            NIST_CSF__icontains='PR.AC'
        ).count()
        context['nist_pat'] = UploadedFinding.objects.filter(
            NIST_CSF__icontains='PR.AT'
        ).count()
        context['nist_pds'] = UploadedFinding.objects.filter(
            NIST_CSF__icontains='PR.DS'
        ).count()
        context['nist_pip'] = UploadedFinding.objects.filter(
            NIST_CSF__icontains='PR.IP'
        ).count()
        context['nist_ppt'] = UploadedFinding.objects.filter(
            NIST_CSF__icontains='PR.PT'
        ).count()

        findings_breakdown = dict()

        critical = UploadedFinding.critical.all()
        high = UploadedFinding.high.all()
        medium = UploadedFinding.medium.all()
        low = UploadedFinding.low.all()
        informational = UploadedFinding.informational.all()

        findings_breakdown['Critical'] = critical
        findings_breakdown['High'] = high
        findings_breakdown['Medium'] = medium
        findings_breakdown['Low'] = low
        findings_breakdown['Info'] = informational

        context['findings_breakdown'] = findings_breakdown

        context['ei_exists'] = ElectionInfrastructureQuestionnaire.objects.exists()

        return render(request, 'ptportal/tools.html', context)

    if request.method == 'POST':
        fschartdata = request.POST['fschart']
        nistcontroldata = request.POST['nistcontrol']
        nistcsfdata = request.POST['nistcsf']
        itriskdata = request.POST['itrisk']
        priskdata = request.POST['prisk']
        rriskdata = request.POST['rrisk']
        ddriskdata = request.POST['ddrisk']

        fschart = fschartdata.split(",", 1)[1]
        nistcontrol = nistcontroldata.split(",", 1)[1]
        nistcsf = nistcsfdata.split(",", 1)[1]
        itrisk = itriskdata.split(",", 1)[1]
        prisk = priskdata.split(",", 1)[1]
        rrisk = rriskdata.split(",", 1)[1]
        ddrisk = ddriskdata.split(",", 1)[1]

        save_chart(fschart, "fschart")
        save_chart(nistcontrol, "nistcontrol")
        save_chart(nistcsf, "nistcsf")
        save_chart(itrisk, "itrisk")
        save_chart(prisk, "prisk")
        save_chart(rrisk, "rrisk")
        save_chart(ddrisk, "ddrisk")

        return HttpResponse("Charts saved")


def ajax_check_ip_scope(request):
    """Checks various forms of IP address and domain names and verifies if they are within the scope of the engagement.

    Accepts the following for verification:
    Normal IP addresses: 127.0.0.1
    CIDR Ranges: 127.0.0.1/32
    IP Range last octet: 127.0.0.1-2
    IP ranges with two IPs: 127.0.0.1-127.0.0.8
    Domain Names: www.example.com

    Parameters
    ----------
    request : request object
        The ajax request from the web app page. Contains the IP address that the user submitted to be verified.

    """
    data = {'flag': False, 'message': '', 'warning': ''}
    submission = request.POST['ipaddress'].replace(" ", "")

    """
    The IP regex matches the following:
    Normal IP addresses: 127.0.0.1
    CIDR Ranges: 127.0.0.1/32
    IP Range last octet: 127.0.0.1-2
    IP ranges with two IPs: 127.0.0.1-127.0.0.8
    """
    ipregex = r"^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])($|\/3[0-2]$|\/[1-2][0-9]$|\/[1-9]$|-((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$|-25[0-5]|-2[0-4][0-9]|-1[0-9][0-9]|-[1-9]?[0-9]$)"
    domain_parser = r"^(?:[a-z]+:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)"

    ul = '\u00a1-\uffff'  # unicode letters range (must not be a raw string)
    # protocol patterns
    protocol_re = r'(?:http|ftp)s?://)?'  # http:// or https://
    # Host patterns
    hostname_re = (
        r'([a-z' + ul + r'0-9](?:[a-z' + ul + r'0-9-]{0,61}[a-z' + ul + r'0-9])?'
    )
    # Max length for domain name labels is 63 characters per RFC 1034 sec. 3.1
    domain_re = r'(?:\.(?!-)[a-z' + ul + r'0-9-]{1,63}(?<!-))*'
    tld_re = (
        r'\.'  # dot
        r'(?!-)'  # can't start with a dash
        r'(?:[a-z' + ul + '-]{2,63}'  # domain label
        r'|xn--[a-z0-9]{1,59})'  # or punycode label
        r'(?<!-)'  # can't end with a dash
        r'\.?'  # may have a trailing dot
        r'(?:/?|[/?]\S+)?'  # optional end slash
        r'|localhost'  # localhost
        r'(?::\d+)?'  # optional port
        r'(?:/?|[/?]\S+)?'  # optional end slash
    )
    host_re = '^(' + protocol_re + hostname_re + domain_re + tld_re + ')$'

    hostname_pattern = re.compile(host_re, re.IGNORECASE)
    ip_pattern = re.compile(ipregex)
    domain_pattern = re.compile(domain_parser)

    ip_match = ip_pattern.match(submission)

    # Checks to see if it is an ip address or a domain name. Rejects it otherwise.
    if not ip_match:
        regex_match = hostname_pattern.match(submission)
        if not regex_match:
            data.update({'flag': False, 'message': 'Invalid input.'})
            return JsonResponse(data)
        try:
            ip_match = socket.gethostbyname(domain_pattern.match(submission).group(1))
        except socket.gaierror:
            data.update(
                {'flag': False, 'message': 'Error resolving domain name input.'}
            )
            return JsonResponse(data)
    else:
        ip_match = ip_match.group(0)

    engagement = EngagementMeta.object()
    if not engagement:
        data.update({'flag': False, 'message': 'Error getting engagement info.'})
        return JsonResponse(data)

    # Generates a list of IPs or an ip from the input provided by the user.
    if "/" in ip_match:
        ip_match = list(netaddr.IPNetwork(ip_match))
    elif "-" in ip_match:
        ip_split = ip_match.split("-")
        # Checking if the second part after the dash if a full IP address. Otherwise we will have to build it out from the first ip address.
        if not ip_pattern.match(ip_split[1]):
            next_range = ".".join(ip_split[0].split(".", 3)[:-1]) + "." + ip_split[1]
            if netaddr.IPAddress(ip_split[0]) == netaddr.IPAddress(next_range):
                data.update({'flag': False, 'message': 'Invalid input.'})
                return JsonResponse(data)
            try:
                ip_match = list(
                    netaddr.IPRange(
                        netaddr.IPAddress(ip_split[0]), netaddr.IPAddress(next_range)
                    )
                )
            except:
                data.update({'flag': False, 'message': 'Invalid input.'})
                return JsonResponse(data)
        else:
            if netaddr.IPAddress(ip_split[0]) == netaddr.IPAddress(ip_split[1]):
                data.update({'flag': False, 'message': 'Invalid input.'})
                return JsonResponse(data)
            try:
                ip_match = list(
                    netaddr.IPRange(
                        netaddr.IPAddress(ip_split[0]), netaddr.IPAddress(ip_split[1])
                    )
                )
            except:
                data.update({'flag': False, 'message': 'Invalid input.'})
                return JsonResponse(data)
    else:
        ip_match = [netaddr.IPAddress(ip_match)]

    included_ips = engagement.get_int_scope() + "\n" + engagement.get_ext_scope()
    excluded_ips = (
        engagement.get_int_excluded_scope() + "\n" + engagement.get_ext_excluded_scope()
    )

    included_list = included_ips.split()
    excluded_list = excluded_ips.split()

    # Checking to see if any of the IPs in the user supplied input is in an exclusion list. Otherwise it is rejected.
    domain_warning = []
    for exclusion in excluded_list:
        if ip_pattern.match(exclusion):
            if "/" in str(exclusion):
                ip = list(netaddr.IPNetwork(exclusion))
                if any(x in ip for x in ip_match):
                    data.update(
                        {'flag': False, 'message': 'Not in scope.', 'warning': ''}
                    )
                    return JsonResponse(data)
            elif "-" in str(exclusion):
                range = str(exclusion).split("-")
                if not ip_pattern.match(range[1]):
                    next_range = ".".join(range[0].split(".", 3)[:-1]) + "." + range[1]
                else:
                    next_range = range[1]

                ip = list(netaddr.IPRange(range[0], next_range))
                if any(x in ip for x in ip_match):
                    data.update(
                        {'flag': False, 'message': 'Not in scope.', 'warning': ''}
                    )
                    return JsonResponse(data)
            else:
                ip = netaddr.IPAddress(exclusion)
                if ip in ip_match:
                    data.update(
                        {'flag': False, 'message': 'Not in scope.', 'warning': ''}
                    )
                    return JsonResponse(data)
        else:
            try:
                domain_ip = socket.gethostbyname(
                    domain_pattern.match(exclusion).group(1)
                )
                if netaddr.IPAddress(domain_ip) in ip_match:
                    data.update({'flag': False, 'message': 'Not in scope.'})
                    return JsonResponse(data)
            except socket.gaierror:
                domain_warning.append(exclusion)
                data.update(
                    {
                        'warning': 'WARNING: Unable to resolve the following scoped domains. ',
                        'domain_warning': domain_warning,
                    }
                )

    # Using list comprehension we slowly cut down the list of IPs in the user supplied one. This is to account for possible IPs spread across multiple ranges.
    for inclusion in included_list:
        if ip_pattern.match(inclusion):
            if "/" in str(inclusion):
                ip = list(netaddr.IPNetwork(inclusion))
                ip_match = [x for x in ip_match if x not in ip]
            elif "-" in str(inclusion):
                range = str(inclusion).split("-")
                if not ip_pattern.match(range[1]):
                    next_range = ".".join(range[0].split(".", 3)[:-1]) + "." + range[1]
                else:
                    next_range = range[1]

                ip = list(netaddr.IPRange(range[0], next_range))
                ip_match = [x for x in ip_match if x not in ip]
            else:
                ip = [netaddr.IPAddress(inclusion)]
                ip_match = [x for x in ip_match if x not in ip]
        else:
            domain_ip = socket.gethostbyname(domain_pattern.match(inclusion).group(1))
            ip = [netaddr.IPAddress(domain_ip)]
            ip_match = [x for x in ip_match if x not in ip]

    # If all of the IPs were removed then every IP was in the scope.
    if len(ip_match) == 0:
        data.update({'flag': True, 'message': ' In Scope'})
        return JsonResponse(data)

    data.update({'flag': False, 'message': 'Not in scope.'})
    return JsonResponse(data)


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
    print(dir(engagement_obj))
    rva_id = engagement_obj.asmt_id
    print('data is:', data)
    if data == 'election':
        json_file = f'RVA{rva_id}-election.json'
        serializer = ElectionInfrastructureSerializer(
            ElectionInfrastructureQuestionnaire.objects.first()
        )
        json = JSONRenderer().render(serializer.data)
        with open(json_file, 'wb+') as f:
            f.write(json)
        zip_name = gen_ptp_filename(prefix=f'RVA{rva_id}-Election', ext="zip")
    elif data == 'hva':
        json_file = 'hva.json'
        serializer = HVASerializer(HVAData.objects.first())
        json = JSONRenderer().render(serializer.data)
        with open(json_file, 'wb+') as f:
            f.write(json)
        zip_name = gen_ptp_filename(prefix="PTP_HVA", ext="zip")
    elif data == 'dhs':
        json_file = gen_ptp_filename(prefix=f'RVA{rva_id}-data', ext='json')
        zip_name = gen_ptp_filename(prefix=f'RVA{rva_id}-Data', ext='zip')
        generateEntryJson(json_file)
    elif data == 'report':
        # serialize report data
        if anon_report:
            json_file = gen_ptp_filename(suffix="anon", ext="json")
            zip_file = gen_ptp_filename(suffix="anon", ext="zip")
        else:
            json_file = gen_ptp_filename(ext="json")
            zip_file = gen_ptp_filename(ext="zip")
        serializeJSON(filename=json_file)
        if anon_report:
            # for efficiency only import on demand
            from ptportal import anonymize

            anonymize.anonymize_json_file_in_place(json_file)
    elif data is None and json_file and zip_name:
        print('will use provided json_file(s) and zip file name')
    else:
        return HttpResponse('')

    # download a zip file
    if zip:
        with pyzipper.AESZipFile(zip_name, 'w', compression=pyzipper.ZIP_LZMA) as zf:
            if password_protected:
                if EngagementMeta.object():
                    password = EngagementMeta.object().report_password
                else:
                    password = DEFAULT_PASSWORD
                zf.setpassword(password.encode())
                zf.setencryption(pyzipper.WZ_AES, nbits=128)
            if isinstance(json_file, list):
                for f in json_file:
                    zf.write(f)
            else:
                zf.write(json_file)
        with open(zip_name, 'rb') as fh:
            response = HttpResponse(
                fh.read(),
                content_type="application/x-7z-compressed, application/octet-stream",
            )
            response[
                'Content-Disposition'
            ] = 'attachment; filename=' + os.path.basename(zip_name)
            # remove_unnecessary_files()
            return response
    # download a json file
    else:
        with open(json_file, 'rb') as fh:
            response = HttpResponse(
                fh.read(), content_type="application/json, application/octet-stream"
            )
            response[
                'Content-Disposition'
            ] = 'attachment; filename=' + os.path.basename(json_file)
            # remove_unnecessary_files(zip=False)
            return response


def generateEIJSON(request):
    return export_json(zip=False, data='election')


def generateHVAJSON(request):
    return export_json(zip=False, data='hva')


def generateDHSJSON(request):
    return export_json(data='dhs')


def generateJSON(request):
    return export_json(data='report')


def generateAnonymizedJSON(request):
    return export_json(data='report', anon_report=True)


def downloadBackup(request):
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
            return response

    return render(request, 'ptportal/tools.html')


def generateArtifact(artifact_type, anon_report=False):
    base_ctype = "application/vnd.openxmlformats-officedocument."

    report_obj = Report.objects.all()[:1].get()
    engagement_obj = EngagementMeta.objects.all()[:1].get()

    report_type_name = report_obj.report_type
    asmt_id_name = engagement_obj.asmt_id
    customer_initials_name = engagement_obj.customer_initials

    # catch case if admin started some other way
    if report_obj.report_type == "":
        print("empty report type")
        report_type_name = "RVA"

    report_type_template = report_type_name.lower()
    json_filename = serializeJSON()

    tstamp = str(datetime.datetime.now().strftime("%Y%m%d-%H%M"))
    artifact_name_base = (
        report_type_name
        + asmt_id_name
        + "_"
        + customer_initials_name
        + "_"
        + artifact_type
        + "_"
        + tstamp
    )
    template_name_base = "report_gen/templates/" + report_type_template + "-template"

    validchars = "-_."
    artifact_name_base = "".join(
        c for c in artifact_name_base if c.isalnum() or c in validchars
    ).rstrip()

    if artifact_type == "Tracker":
        content_type = base_ctype + "spreadsheetml.sheet"
        artifact_name = artifact_name_base + '.xlsx'
        template_name = template_name_base + '.xlsx'
        create_tracker(artifact_name, json_filename)
    elif artifact_type == "Outbrief":
        content_type = base_ctype + "presentationml.presentation"
        artifact_name = artifact_name_base + '.pptx'
        template_name = template_name_base + '.pptx'
        generate_ptp_slides(
            template_name, artifact_name, True, json_filename, settings.MEDIA_ROOT
        )
    elif artifact_type == "Report":
        if anon_report:
            # for efficiency only import on demand
            from ptportal import anonymize

            anonymize.anonymize_json_file_in_place(json_filename)
        content_type = base_ctype + "wordprocessingml.document"
        template_name = template_name_base + '.docx'
        if anon_report:
            artifact_name = artifact_name_base + "_anon" + '.docx'
        else:
            artifact_name = artifact_name_base + '.docx'

        generate_ptp_report(
            template_name, artifact_name, True, json_filename, settings.MEDIA_ROOT
        )
    elif artifact_type == "Summary":
        content_type = base_ctype + "wordprocessingml.document"
        template_name = "report_gen/templates/rva-template-summary.docx"
        artifact_name = artifact_name_base + '.docx'
        generate_ptp_summary(
            template_name, artifact_name, True, json_filename, settings.MEDIA_ROOT
        )
    elif artifact_type == "Remediation":
        content_type = (
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        )
        template_name = "report_gen/templates/Remediation_Template.xlsm"
        artifact_name = artifact_name_base + '.xlsm'
        generate_remediation(template_name, json_filename, artifact_name)
    else:
        raise Http404

    with contextlib.suppress(FileNotFoundError):
        os.remove(json_filename)

    if DOWNLOAD_ZIP:
        eng = EngagementMeta.object()
        if not eng:
            eng = False
        if eng and eng.report_password:
            zip_pass = eng.report_password
        else:
            zip_pass = DEFAULT_PASSWORD
        print("download zipfile")
        zip_name = os.path.splitext(artifact_name)[0] + '.zip'
        rc = subprocess.call(
            ['7z', 'a', zip_name, '-mx9', '-p' + zip_pass, artifact_name]
        )
        content_type = "application/x-7z-compressed, application/octet-stream"
        download_file = zip_name
    else:
        print("download", artifact_type)
        download_file = artifact_name

    if os.path.exists(download_file):
        with open(download_file, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type=content_type)
            response[
                'Content-Disposition'
            ] = 'attachment; filename=' + os.path.basename(download_file)

    os.remove(download_file)
    return response


def generateReport(request):
    if request.user.is_admin:
        print("Made it into generateReport")
        return generateArtifact("Report")
    else:
        return HttpResponse("Must be an admin to generate a report.")


def generateAnonymizedReport(request):
    if request.user.is_admin:
        print("Made it into generateAnonymizedReport")
        return generateArtifact("Report", anon_report=True)
    else:
        return HttpResponse("Must be an admin to generate a report.")


def generateReportSummary(request):
    if request.user.is_admin:
        print("Made it into generateReportSummary")
        return generateArtifact("Summary")
    else:
        return HttpResponse("Must be an admin to generate a report summary.")


def generateOutbrief(request):
    print("Made it into generateOutbrief")
    return generateArtifact("Outbrief")


def generateTracker(request):
    print("Made it into generateTracker")
    return generateArtifact("Tracker")


def generateRemediationSheet(request):
    return generateArtifact("Remediation")


def generateIpList(request, ip_type):
    if request.method == 'GET':
        engagement = EngagementMeta.object()
        if not engagement:
            return False

        internal_success = False
        external_success = False
        filename = "scope.txt"

        if ip_type == "internal":
            internal_success = True
            included_ips = engagement.get_int_scope()
            excluded_ips = engagement.get_int_excluded_scope()
            filename = "internal_scope.txt"
        elif ip_type == "external":
            external_success = True
            included_ips = engagement.get_ext_scope()
            excluded_ips = engagement.get_ext_excluded_scope()
            filename = "external_scope.txt"

        ip_list = []
        excluded = []

        included_list = filter(None, re.split("[, \r\n]+", str(included_ips)))
        excluded_list = filter(None, re.split("[, \r\n]+", str(excluded_ips)))

        for exclusion in excluded_list:
            if "/" in str(exclusion):
                ip = netaddr.IPNetwork(exclusion)
                for i in ip:
                    excluded.append(str(i))
            elif "-" in str(exclusion):
                range = str(ip).split("-")
                ip = netaddr.IPRange(range[0], range[1])
                for i in ip:
                    excluded.append(str(i))
            else:
                excluded.append(str(exclusion))

        for inclusion in included_list:
            if "/" in str(inclusion):
                ip = netaddr.IPNetwork(inclusion)
                for i in ip:
                    if str(i) not in excluded:
                        ip_list.append(str(i))
            elif "-" in str(inclusion):
                range = str(inclusion).split("-")
                ip = netaddr.IPRange(range[0], range[1])
                for i in ip:
                    if str(i) not in excluded:
                        ip_list.append(str(i))
            else:
                if str(inclusion) not in excluded:
                    ip_list.append(str(inclusion))

        content = "\n".join(ip_list)
        response = HttpResponse(content, content_type='text/plain')
        response['Content-Disposition'] = 'attachment; filename={0}'.format(filename)
        return response
