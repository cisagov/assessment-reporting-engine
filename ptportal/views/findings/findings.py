# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.http import JsonResponse
from django.shortcuts import redirect, render, get_object_or_404
from django.views import generic, View
from django.urls import reverse_lazy, reverse
from django.contrib import messages
from django.core import serializers
from ...forms import UploadedFindingForm, EditUploadedFindingForm
from ...models import (
    AffectedSystems,
    EngagementMeta,
    ImageFinding,
    BaseFinding,
    GeneralFinding,
    SpecificFinding,
    UploadedFinding,
    Campaign,
    Payload,
    Severities,
    CIS_CSC,
    KEV,
)
from ..utils import (
    get_nist_csf,
    get_cis_csc,
    get_timetable,
)
from django.http import HttpResponse, JsonResponse
import json
import ipaddress
import os
import shutil
import json


class UploadedFindingUpdateView(generic.edit.UpdateView):
    model = UploadedFinding
    form_class = EditUploadedFindingForm
    template_name = 'ptportal/finding/finding_form.html'

    def get_object(self):
        return get_object_or_404(
            UploadedFinding,
            slug=self.kwargs['slug'],
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        finding = self.get_object()

        context['findings'] = serializers.serialize("json", BaseFinding.objects.all())
        context['severity'] = Severities.objects.all()
        context['kevs'] = serializers.serialize("json", KEV.objects.filter(found=True).order_by('cve_id'))
        context['selected_systems'] = serializers.serialize("json", finding.affected_systems.all())
        context['screenshots'] = ImageFinding.objects.filter(finding=finding)
        context['affected_systems'] = serializers.serialize("json", AffectedSystems.objects.all())

        engagement = EngagementMeta.object()
        context["engagement"] = engagement
        context["engagement_exists"] = True if engagement else False

        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.POST['data'])
        finding = self.get_object()

        affected_systems = []
        kevs = []
        screenshots = []

        severity = Severities.objects.filter(severity_name=postData['findingSeverity']).first()

        finding.description = postData['findingDescription']
        finding.remediation = postData['findingRemediation']
        finding.severity = severity
        finding.assessment_type = postData['assessmentType']
        finding.mitigation = False if postData['findingMitigation'] == 'False' else True
        finding.screenshot_description = postData['screenshotDescription']
        finding.save()

        for i in postData['affectedSystemList']:
            if AffectedSystems.objects.filter(name=i['value']).exists():
                affected_systems.append(AffectedSystems.objects.get(name=i['value']))

            else:
                try:
                    system = AffectedSystems.objects.create(
                        name = i['value']
                    )
                    affected_systems.append(system)
                except Exception as e:
                    print(e)
                    continue

        affected_system_backup = finding.affected_systems

        try:
            finding.affected_systems.clear()
            finding.affected_systems.add(*affected_systems)
        except Exception as e:
            print(e)
            finding.affected_systems = affected_system_backup

        for i in postData['kevs']:
            try:
                kevs.append(KEV.objects.get(cve_id=i))
            except Exception as e:
                print(e)
                continue

        kev_backup = finding.KEV

        try:
            finding.KEV.clear()
            finding.KEV.add(*kevs)
        except Exception as e:
            print(e)
            finding.KEV = kev_backup

        for index, data in enumerate(postData['screenshots']):
            if data['uuid'] is not None:
                img = ImageFinding.objects.get(uuid=data['uuid'])
                img.order = index + 1
                img.caption = data['caption']
                img.save()
            else:
                filename = "file" + str(data['imgOrder'])
                file = request.FILES[filename]
                try:
                    ext = str(file).split('.')[-1].lower()
                except:
                    ext = ""
                try:
                    img = ImageFinding.objects.create(
                        order = index + 1,
                        caption = data['caption'],
                        file = file,
                        ext = ext,
                        finding = finding
                    )
                except Exception as e:
                    print(e)
            screenshots.append(img)

        deletedScreenshots = set(ImageFinding.objects.filter(finding=finding)) - set(screenshots)

        for deleted in deletedScreenshots:
            deleted.delete()

        return HttpResponse(status=200)


class UploadedFindingCreateView(generic.edit.CreateView):
    model = UploadedFinding
    form_class = UploadedFindingForm
    template_name = 'ptportal/finding/finding_form.html'

    def get_object(self):
        return EngagementMeta.object()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        uploaded_findings = [o.uploaded_finding_name for o in UploadedFinding.objects.all()]

        context['findings'] = serializers.serialize("json", BaseFinding.objects.exclude(name__in=uploaded_findings).order_by('name'))
        context['severity'] = Severities.objects.all()
        context['kevs'] = serializers.serialize("json", KEV.objects.filter(found=True).order_by('cve_id'))
        context['affected_systems'] = serializers.serialize("json", AffectedSystems.objects.all())

        engagement = EngagementMeta.object()
        context["engagement"] = engagement
        context["engagement_exists"] = True if engagement else False

        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.POST['data'])

        affected_systems = []
        kevs = []

        for i in postData['affectedSystemList']:
            if AffectedSystems.objects.filter(name=i['value']).exists():
                affected_systems.append(AffectedSystems.objects.get(name=i['value']))

            else:
                try:
                    system = AffectedSystems.objects.create(
                        name = i['value']
                    )
                    affected_systems.append(system)
                except Exception as e:
                    print(e)
                    continue

        for i in postData['kevs']:
            try:
                kevs.append(KEV.objects.get(cve_id=i))
            except Exception as e:
                print(e)
                continue

        base_finding = BaseFinding.objects.filter(pk=postData['selectedFinding']['pk']).first()
        severity = Severities.objects.filter(severity_name=postData['findingSeverity']).first()

        try:
            finding = UploadedFinding.objects.create(
                finding = base_finding,
                NIST_800_53 = base_finding.NIST_800_53,
                NIST_CSF = base_finding.NIST_CSF,
                CIS_CSC = base_finding.CIS_CSC,
                uploaded_finding_name = postData['selectedFinding']['fields']['name'],
                uploaded_finding_id = UploadedFinding.objects.all().count() + 1,
                description = postData['findingDescription'],
                remediation = postData['findingRemediation'],
                severity = severity,
                assessment_type = postData['assessmentType'],
                mitigation = False if postData['findingMitigation'] == 'False' else True,
                screenshot_description = postData['screenshotDescription']
            )
        except Exception as e:
            print(e)
            return HttpResponse(status=500)

        try:
            finding.affected_systems.add(*affected_systems)
        except Exception as e:
            print(e)
        
        try:
            finding.KEV.add(*kevs)
        except Exception as e:
            print(e)

        for index, data in enumerate(postData['screenshots']):
            filename = "file" + str(data['imgOrder'])
            file = request.FILES[filename]
            try:
                ext = str(file).split('.')[-1].lower()
            except:
                ext = ""
            try:
                img = ImageFinding.objects.create(
                    order = index + 1,
                    caption = data['caption'],
                    file = file,
                    ext = ext,
                    finding = finding
                )
            except Exception as e:
                print(e)
                continue

        return HttpResponse(status=200)


class UploadedFindingDetail(generic.DetailView):
    model = UploadedFinding
    template_name = 'ptportal/finding/finding_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        finding = self.get_object()
        context['screenshots'] = ImageFinding.objects.filter(finding=finding)

        return context


class UploadedFindingDelete(generic.edit.DeleteView):
    model = UploadedFinding
    template_name = 'ptportal/finding/finding_confirm_delete.html'
    success_url = reverse_lazy('index')

    def post(self, request, *args, **kwargs):
        finding = self.get_object()
        finding_id = finding.uploaded_finding_id

        screenshot_dir_path = os.path.join("pentestportal", "media", "screenshots")

        try:
            for file in os.listdir(screenshot_dir_path):
                if file.startswith(finding.slug):
                    os.remove(os.path.join(screenshot_dir_path, file))
        except:
            print("Unable to delete finding screenshots from media directory.")

        finding.delete()

        for i in UploadedFinding.objects.all():
            if finding_id < i.uploaded_finding_id:
                try:
                    i.uploaded_finding_id -= 1
                    i.save()
                except:
                    continue

        return redirect(self.success_url)


class KEVs(generic.base.TemplateView):
    model = KEV
    template_name = 'ptportal/finding/kevs.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['json_kevs'] = serializers.serialize("json", KEV.objects.all().order_by('cve_id'))
        context['all_kevs'] = KEV.objects.all().order_by('cve_id')
        context['found_kevs'] = KEV.objects.filter(found=True)

        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.POST['data'])
        kevs = []

        for i in postData['kevs']:
            try:
                obj = KEV.objects.get(cve_id=i)
                obj.found = True
                obj.save()
                kevs.append(obj)
            except Exception as e:
                print(e)
                continue

        deletedKEVs = set(KEV.objects.filter(found=True)) - set(kevs)

        for deleted in deletedKEVs:
            try:
                deleted.found = False
                deleted.save()
            except Exception as e:
                print(e)
                continue

        return HttpResponse(status=200)
