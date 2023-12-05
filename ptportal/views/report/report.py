# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.core.exceptions import ObjectDoesNotExist

from django.shortcuts import redirect
from django.views import generic
from django.urls import reverse
from django.core import serializers

from ptportal.models.findings import BaseFinding
from ...forms import *

from ...models import (
    CIS_CSC,
    ImageFinding,
    UploadedFinding,
    Report,
    Severities,
    PortMappingHost,
    Narrative,
    Acronym,
    BaseFinding,
    KEV,
    Ransomware,
    RansomwareScenarios,
    DataExfil,
    Payload,
    Campaign,
    NarrativeStep,
    BreachMetrics,
    BreachedEmail
)

from django.http import HttpResponse, JsonResponse
from django.db.models import Count, Q, CharField, TextField
from ..utils import report_read_csv, report_read_pwa
from datetime import timedelta
from itertools import combinations
from hashlib import sha256
from django.contrib import messages

import re
import json


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


def ajax_pwa_delete(request):
    print("in password analysis delete ajax")
    report = Report.object()
    if report.password_analysis:
        report.password_analysis = ""
        report.save()
        return JsonResponse({})
    else:
        return JsonResponse({})


def find_acronyms(text):
    """Finds acronyms in varoius models and attempts to identify definitions within the text the acronyms are located in.

    Args:
        text (string): The text that will be parsed for acronyms.

    Returns:
        List: List of acronym/definition pairs.

    Algorithm used is the one described in Schwartz & Hearst 2003 paper, "A simple algorithm for identifying abbreviation definitions in biomedical text"
    """
    acronym_pairs = []

    # Splits all the sentences into individual search terms.
    for sentence in text.split('.'):
        # Searches for 2 to 10 character words consiting of numbers and capital letters.
        short_forms = re.findall(r'\b[A-Z0-9]{2,10}\b', sentence)
        for sf in short_forms:
            # Discard any canidates that are only numbers. Cause then it is just a number.
            if not (any(x.isupper() for x in sf)):
                continue

            # Limit the length of which the definition for an acronym can be.
            max_def_length = min(len(sf) + 5, len(sf) * 2)
            max_offset = 10

            # Parsing the text to the left and right of the found acronym. We remove the parenthesis to avoid long form canidates with them included.
            if '(' + sf + ')' not in sentence:
                pre_text, canidate, post_text = sentence.partition(sf)
            else:
                pre_text, canidate, post_text = sentence.partition('(' + sf + ')')

            # Split all the text before and after the acronym into individual words to generate all the possible definitions.
            pre_text = pre_text.split()
            post_text = post_text.split()

            # If the text to the left or the right is longer than the max definition length then cut the extra length off the ends.
            if len(pre_text) > max_def_length + max_offset:
                pre_text = pre_text[(len(pre_text) - (max_def_length + max_offset)) :]
            if len(post_text) > max_def_length + max_offset:
                post_text = post_text[
                    (len(post_text) - (max_def_length + max_offset)) :
                ]

            long_form_canidates = []

            # Generates all combinations of consecutive words from the sentence into possible definition canidates.
            # If the first character of the long form canidate does not match the first character of the short form then discard it as it will not match in our search technique.
            for start, end in combinations(range(len(pre_text)), 2):
                if pre_text[start].lower()[0] != sf.lower()[0]:
                    continue
                long_form_canidates.append(' '.join(pre_text[start : end + 1]))
            for start, end in combinations(range(len(post_text)), 2):
                if post_text[start].lower()[0] != sf.lower()[0]:
                    continue
                long_form_canidates.append(' '.join(post_text[start : end + 1]))

            # Run through the long form canidates and verify that they contain every character of the short form to be a valid definition.
            match = None
            for lf in long_form_canidates[::-1]:
                lf_upper = lf.upper()
                acronym_letter = len(sf) - 1
                for letter in lf_upper[::-1]:
                    if not sf[acronym_letter].isalnum():
                        acronym_letter = acronym_letter - 1
                    if acronym_letter == 0:
                        match = lf
                        break
                    if sf[acronym_letter] == letter:
                        acronym_letter = acronym_letter - 1
                if match is not None:
                    break
            acronym_pairs.append((sf, match))

    return acronym_pairs


def collect_acronyms():
    """The function takes specific models in the application and searches all of its fields for potential acronyms that may exist with their definitions.
    It will then add them as acronym objects to be loaded by the table after.
    """
    found_acronyms = []
    formatted_acronyms = []

    # We ignore certain fields in the findings cause they will end up littering the table with numerous duplicates.
    acronym_searches = [Report, UploadedFinding, Narrative]
    acronym_exclusions = [[], ["NIST_800_53", "NIST_CSF", "CIS_CSC", "CMMC"], []]

    # Have to verify that the field we are searching is an actual string or else we can't parse it properly. Have to properly get each field and their names.
    for idx, search in enumerate(acronym_searches):
        for f in search.objects.all():
            for field in f._meta.fields:
                if isinstance(field, CharField) or isinstance(field, TextField):
                    if field.name in acronym_exclusions[idx]:
                        continue
                    if isinstance(f, Narrative):
                        found = (
                            find_acronyms(getattr(f, field.name)),
                            (search.__name__, f.name),
                        )
                    elif isinstance(f, UploadedFinding):
                        found = (
                            find_acronyms(getattr(f, field.name)),
                            (search.__name__, f.uploaded_finding_name),
                        )
                    else:
                        found = (
                            find_acronyms(getattr(f, field.name)),
                            (search.__name__, field.name),
                        )
                    found_acronyms.append(found)
    found_acronyms = [x for x in found_acronyms if x[0] != []]

    for f in found_acronyms:
        for a in f[0]:
            if f[1][0] == "UploadedFinding":
                formatted_acronyms.append(
                    {
                        'acronym': a[0],
                        'definition': a[1],
                        'context': "Found in uploaded findings under " + f[1][1],
                    }
                )
            elif f[1][0] == "Report":
                formatted_acronyms.append(
                    {
                        'acronym': a[0],
                        'definition': a[1],
                        'context': "Found on report screen",
                    }
                )
            else:
                formatted_acronyms.append(
                    {
                        'acronym': a[0],
                        'definition': a[1],
                        'context': "Found in " + f[1][0] + " under " + f[1][1],
                    }
                )

    # Since not every pair found will be accurate user can edit the acronyms in the app. Since we don't want to readd the wrong definition we hash the original
    # automatic find and store it so when we attempt to re add searched defintions we can check if they edited the original automatic finding.
    for acronym in formatted_acronyms:
        if acronym['definition'] is not None:
            hashValue = sha256(
                str.encode(acronym['acronym'])
                + str.encode(acronym['definition'])
                + str.encode(acronym['context'])
            ).hexdigest()
        else:
            hashValue = sha256(
                str.encode(acronym['acronym'])
                + str.encode("")
                + str.encode(acronym['context'])
            ).hexdigest()
        obj = Acronym.objects.filter(original_hash=hashValue)
        if not obj:
            Acronym.objects.create(
                acronym=acronym['acronym'],
                context=acronym['context'],
                definition=acronym['definition']
                if acronym['definition'] is not None
                else "",
                auto_found='A',
                include=False,
                belongs_to_report=Report.object(),
            )


class FigureCounter:
    # Counter used in the template to maintain the figure count number dynamically
    count = 1

    def increment(self):
        self.count += 1
        return self.count

    def get_future_count(self, steps):
        return self.count + steps

    def get_past_count(self, steps):
        step_value = self.count - steps
        return step_value if step_value > 1 else 1


class ReportUpdate(generic.edit.UpdateView):
    model = Report
    form_class = ReportForm
    context_object_name = 'post'
    template_name = 'ptportal/report.html'

    def get_success_url(self):
        return reverse('report')

    def get_object(self):
        return Report.object()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        report = Report.object()
        context['report'] = report

        if report.updated_at > report.created_at + timedelta(seconds=10):
            context['previously_saved'] = report.updated_at

        engagement = EngagementMeta.object()
        if engagement:
            context['eng_meta'] = engagement

        uploaded_list = UploadedFinding.objects.all().order_by('assessment_type', 'severity', 'uploaded_finding_name')
        context['findings'] = uploaded_list
        context['screenshots'] = ImageFinding.objects.all().order_by('finding', 'order')
        context['kevs'] = KEV.objects.filter(found=True).order_by('cve_id')
        context['findings_breakdown'] = report_findings_counts()
        context['ransomware'] = Ransomware.objects.all()
        context['ransomware_scenarios'] = RansomwareScenarios.objects.all()
        context['data_exfil'] = DataExfil.objects.all()
        context['payloads'] = Payload.objects.all()
        context['campaigns'] = Campaign.objects.all()
        context['breach_metrics'] = BreachMetrics.objects.all().first()
        context['osinf'] = BreachedEmail.objects.all()
        context['narratives_external'] = Narrative.objects.all().filter(assessment_type__name__contains="External").order_by('order')
        context['narratives_internal'] = Narrative.objects.all().filter(assessment_type__name__contains="Internal").order_by('order')
        context['narratives_phishing'] = Narrative.objects.all().filter(assessment_type__name__contains="Phishing").order_by('order')
        context['phishing_steps'] = NarrativeStep.objects.all().filter(narrative__assessment_type__name__contains="Phishing").order_by('narrative', 'order')
        context['external_steps'] = NarrativeStep.objects.all().filter(narrative__assessment_type__name__contains="External").order_by('narrative', 'order')
        context['internal_steps'] = NarrativeStep.objects.all().filter(narrative__assessment_type__name__contains="Internal").order_by('narrative', 'order')
        context['port_mapping'] = PortMappingHost.objects.all().order_by('order')
        
        cis_csc_objects = CIS_CSC.objects.all().order_by('CIS_ID')
        context['cis_csc'] = cis_csc_objects
        
        for c in cis_csc_objects:
            ciscsc_findings = c.findings.all()
            finding_ids = []
            for count, u in enumerate(uploaded_list):
                if u.finding in ciscsc_findings:
                    finding_ids.append(count + 1)
            c.finding_ids = ', '.join(str(e) for e in finding_ids)
            c.save()

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
        context['nist_pt'] = UploadedFinding.objects.filter(
            finding__NIST_800_53__icontains='PT'
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
        context['nist_ddp'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='DE.DP'
        ).count()
        context['nist_rmi'] = UploadedFinding.objects.filter(
            finding__NIST_CSF__icontains='RS.MI'
        ).count()

        # Used in the template to maintain the figure count
        context['figure_count'] = FigureCounter()
        context['table_count'] = FigureCounter()

        return context

    def post(self, request, *args, **kwargs):
        messages.get_messages(
            request
        )
        report = Report.object()

        postData = json.loads(request.POST['data'])

        reportForm = ReportForm(postData, instance=Report.objects.get(id=1))
        if reportForm.is_valid():
            reportForm.save()
        else:
            print(reportForm.errors)
            return HttpResponse(status=400, reason=reportForm.errors)

        return HttpResponse(status=200)