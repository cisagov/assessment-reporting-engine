# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.http import JsonResponse
from django.shortcuts import redirect, render
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
    KEV
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


def ip_check(system):
    # TODO update this. See System model FormSetManager branch
    try:
        ip = ipaddress.ip_address(system)
        return True
    except ValueError:
        print("Not an IP Address")
        return False


def ajax_create_affected_system(request):
    # TODO: need to validate and clean this
    system = request.POST["affected_system"]
    if ip_check(system):
        obj, created = AffectedSystems.objects.get_or_create(ip=system)
    else:
        obj, created = AffectedSystems.objects.get_or_create(name=system)
    print("system: ", system)
    print("obj: ", obj.pk)
    print("created: ", created)
    data = {}
    data["pk"] = obj.pk
    return JsonResponse(data)


def ajax_get_uploaded_finding_details(request):
    print("in ajax_get_uploaded_finding_details")
    finding = Finding.objects.filter(cisa_id=request.GET.get("finding")).first()
    data = {}
    if request.GET.get("field"):
        field = request.GET.get("field")
        data[field] = getattr(finding, field)
    else:
        data["description"] = finding.description
        data["recommendation"] = finding.remediation
        data["severity"] = finding.severity
        data["assessment_type"] = finding.assessment_type

    return JsonResponse(data)


def ajax_get_uploaded_findings(request):
    uploaded_findings = UploadedFinding.objects.all().values()
    uploaded_findings = list(uploaded_findings)
    return JsonResponse(uploaded_findings, safe=False)


def ajax_get_uploaded_findings_images(request):
    finding = UploadedFinding.objects.filter(slug=request.GET.get("finding")).first()
    images = ImageFinding.objects.filter(belongs_to_finding=finding).values()
    data = {}
    data["images"] = list(images)
    return JsonResponse(data, safe=False)


def redirect_finding_second_form(request, finding_slug, edit_finding=False):
    print(finding_slug)
    messages.get_messages(
        request
    )  # Clears the messages to eliminate duplicate alerts in template
    if edit_finding:
        messages.success(request, " Successfully Updated.")
    else:
        messages.success(request, " Successfully Created.")

    return redirect(reverse("finding_create_image_form", kwargs={"slug": finding_slug}))


def ajax_get_payloads(request):
    paths = Payload.objects.all().values()
    data = {}
    data['paths'] = list(paths)
    return JsonResponse(data=data)


class UploadedFindingSeverityDisplay(generic.ListView):
    model = Payload
    template_name = 'ptportal/finding/finding_severity_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['paths'] = Payload.objects.all()
        return context


class UploadedFindingSeverityListView(View):
    def get(self, request, *args, **kwargs):
        view = UploadedFindingSeverityDisplay.as_view()
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.POST['data'])
        uploadedPaths = []
        for index, data in enumerate(postData):
            obj = Payload.objects.create(
                payload_description=data['payload_description'],
                c2_protocol=data['c2_protocol'],
                border_protection=data['border_protection'],
                host_protection=data['host_protection'],
            )
            obj.save()
            uploadedPaths.append(obj)

        return HttpResponse(status=200)


class UploadedFindingUpdateView(generic.edit.UpdateView):
    model = UploadedFinding
    form_class = EditUploadedFindingForm
    template_name = "ptportal/finding/finding_form.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        finding = self.object.finding
        findings_count = Finding.objects.all().count()
        first = (findings_count // 3) + 1
        second = first * 2

        context["first"] = first
        context["second"] = second

        context["default_description"] = finding.description.replace("\n", "")
        context["default_remediation"] = finding.remediation.replace("\n", "")

        severity_objects = Severities.objects.all()
        context["severity_description"] = {
            sev.severity_name: sev.severity_description for sev in severity_objects
        }

        engagement = EngagementMeta.object()
        context["engagement"] = engagement
        context["engagement_exists"] = True if engagement else False

        return context

    def post(self, request, *args, **kwargs):
        uploaded_finding_slug = self.kwargs["slug"]
        uploaded_finding = UploadedFinding.objects.filter(
            slug=uploaded_finding_slug
        ).first()
        form = EditUploadedFindingForm(
            request.POST or None,
            instance=uploaded_finding,
            initial={"finding": uploaded_finding.finding},
        )

        if form.is_valid():
            finding = form.save(commit=False)
            if request.POST.get("customer_specific_finding"):
                finding.uploaded_finding_name = form.clean_customer_specific_finding()
            finding.save()
            # Clear current affected systems, then add the ones saved.
            if request.POST.get("affected_systems"):
                finding.affected_systems.clear()
                finding.affected_systems.add(*form.cleaned_data["affected_systems"])
            finding_slug = finding.slug
            return redirect_finding_second_form(request, finding_slug, True)
        else:
            # TODO: fix this.
            print("form is not valid")
            print("form.errors: ", form.errors)
            context = super().get_context_data(**kwargs)
            context["object"] = form
            return render(request, self.template_name, context)


class UploadedFindingCreateView(generic.edit.CreateView):
    model = UploadedFinding
    form_class = UploadedFindingForm
    template_name = "ptportal/finding/finding_form.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context['findings'] = serializers.serialize("json", BaseFinding.objects.all())


        context["severity"] = Severities.objects.all()
        context['kevs'] = serializers.serialize("json", KEV.objects.all())
        print ("in get_context_data")

        engagement = EngagementMeta.object()
        context["engagement"] = engagement
        # Check to see if an engagement exists.
        context["engagement_exists"] = True if engagement else False

        return context

    def post(self, request, *args, **kwargs):
        self.object = self.get_object() 
        postData = json.loads(request.POST['data'])

        print(postData)
        form = self.get_form()

        if form.is_valid():
            print("form is valid!")
            finding = form.save(commit=False)
            finding.NIST_800_53 = get_nist_controls(finding=finding.finding)
            finding.NIST_CSF = get_nist_csf(finding=finding.finding)
            finding.CIS_CSC = get_cis_csc(finding=finding.finding)
            finding.timetable = get_timetable(finding=finding.finding)

            # Assign the ID to the last ID + 1
            last_finding = UploadedFinding.objects.last()
            if last_finding:
                finding.uploaded_finding_id = last_finding.uploaded_finding_id + 1

            finding.save()

            # set many-to-many field (affected systems) after object creation
            if request.POST.get("affected_systems"):
                finding.affected_systems.add(*form.cleaned_data["affected_systems"])
            finding_slug = finding.slug
            return redirect_finding_second_form(request, finding_slug, False)
        else:
            print("form.errors", form.errors)
            context = super().get_context_data(**kwargs)
            context["form"] = form
            return render(request, self.template_name, context)


class UploadedFindingDetail(generic.DetailView):
    model = UploadedFinding
    template_name = "ptportal/finding/finding_detail.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        previous_url = self.request.META.get("HTTP_REFERER")
        previous_url = previous_url.split("/")
        if previous_url[-1]:
            previous_url = previous_url[-1]
        else:
            previous_url = previous_url[-2]
        context["previous_url"] = previous_url
        context["uploaded_files"] = ImageFinding.objects.filter(
            belongs_to_finding=self.object
        )
        return context

class UploadedFindingDelete(generic.edit.DeleteView):
    model = UploadedFinding
    template_name = "ptportal/finding/finding_confirm_delete.html"
    success_url = reverse_lazy("index")

    def post(self, request, *args, **kwargs):
        finding = UploadedFinding.objects.filter(slug=self.kwargs["slug"]).first()

        # Delete all images associated with finding
        ImageFinding.objects.filter(belongs_to_finding=finding).delete()

        # Delete Finding Media Directory
        screenshot_dir_path = os.path.join("pentestportal", "media", "screenshots")

        try:
            shutil.rmtree(os.path.join(screenshot_dir_path, finding.slug))
        except:
            print("Unable to delete finding media directory")

        id_to_move = finding.uploaded_finding_id
        # Delete the Finding
        finding.delete()

        # Reorder remaining uploaded finding ids
        max_count = UploadedFinding.objects.all().count()
        while id_to_move <= max_count:
            next_finding = UploadedFinding.objects.get(
                uploaded_finding_id=id_to_move + 1
            )
            next_finding.uploaded_finding_id = id_to_move
            next_finding.save()
            id_to_move += 1

        return redirect(self.success_url)
