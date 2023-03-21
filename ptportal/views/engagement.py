# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import datetime, json

from django import forms
from django.core.exceptions import ObjectDoesNotExist, ValidationError
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.urls import reverse_lazy, reverse
from django.utils import timezone
from django.views import generic
from django.forms.models import modelformset_factory

from ptportal.forms import (
    EngagementForm,
    HVATargetForm,
    HVATargetFormSet0,
    HVATargetFormSet1,
)

from ptportal.models import (
    EngagementMeta,
    HVAData,
    HVATarget,
    Report,
)


def engagement_redirect(request):
    if EngagementMeta.object():
        return redirect('engagement_detail')
    else:
        return redirect('engagement_create')


class EngagementCreate(generic.edit.CreateView):
    model = EngagementMeta
    form_class = EngagementForm
    template_name = 'ptportal/engagement/engagement_meta_form.html'

    def get_object(self):
        return EngagementMeta.object()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['report'] = Report.object()

        if context['report'].report_type == 'HVA':
            context['hvas'] = HVATarget.objects.all()

        return context

    def post(self, request, *args, **kwargs):

        postData = json.loads(request.body)
        report = Report.object()

        if postData['ext_date']['start']:
            postData['ext_start_date'] = datetime.date.fromisoformat(
                postData['ext_date']['start'].split("T")[0]
            )
        if postData['ext_date']['end']:
            postData['ext_end_date'] = datetime.date.fromisoformat(
                postData['ext_date']['end'].split("T")[0]
            )
        if postData['int_date']['start']:
            postData['int_start_date'] = datetime.date.fromisoformat(
                postData['int_date']['start'].split("T")[0]
            )
        if postData['int_date']['end']:
            postData['int_end_date'] = datetime.date.fromisoformat(
                postData['int_date']['end'].split("T")[0]
            )

        engageForm = EngagementForm(postData)

        if engageForm.is_valid():
            engageForm.save()
        else:
            return HttpResponse(status=400, reason=engageForm.errors)

        newHVA = []
        if report.report_type == 'HVA':
            for hva in postData['hvas']:
                try:
                    obj = HVATarget(**hva)
                    obj.full_clean()
                    newHVA.append(obj)
                except ValidationError as e:
                    print(e)
                    return HttpResponse(status=400)

            for hva in newHVA:
                hva.save()

        return super().post(self, request, *args, **kwargs)


class EngagementUpdate(generic.edit.UpdateView):
    model = EngagementMeta
    form_class = EngagementForm
    context_object_name = 'post'
    template_name = 'ptportal/engagement/engagement_meta_form.html'

    def get_object(self):
        return EngagementMeta.object()

    def get_form_kwargs(self):
        """Return the keyword arguments for instantiating the form."""
        kwargs = super().get_form_kwargs()
        if hasattr(self, 'object'):
            kwargs.update({'instance': self.object})
        return kwargs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['report'] = Report.object()

        if context['report'].report_type == 'HVA':
            context['hvas'] = HVATarget.objects.all()

        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)
        report = Report.object()

        if postData['ext_date']['start']:
            postData['ext_start_date'] = datetime.date.fromisoformat(
                postData['ext_date']['start'].split("T")[0]
            )
        if postData['ext_date']['end']:
            postData['ext_end_date'] = datetime.date.fromisoformat(
                postData['ext_date']['end'].split("T")[0]
            )
        if postData['int_date']['start']:
            postData['int_start_date'] = datetime.date.fromisoformat(
                postData['int_date']['start'].split("T")[0]
            )
        if postData['int_date']['end']:
            postData['int_end_date'] = datetime.date.fromisoformat(
                postData['int_date']['end'].split("T")[0]
            )
        if postData['traffic_light_protocol'] == 'None':
            postData['traffic_light_protocol'] = None

        engageForm = EngagementForm(postData, instance=EngagementMeta.objects.get(id=1))
        if engageForm.is_valid():
            engageForm.save()
        else:
            print(engageForm.errors)
            return HttpResponse(status=400, reason=engageForm.errors)

        newHVA = []
        if report.report_type == 'HVA':
            for hva in postData['hvas']:
                try:
                    obj = HVATarget(**hva)
                    obj.full_clean()
                    newHVA.append(obj)
                except ValidationError as e:
                    print(e)
                    return HttpResponse(status=400, reason=e)

            HVATarget.objects.all().delete()
            for hva in newHVA:
                hva.save()

        return super().post(self, request, *args, **kwargs)


class EngagementDelete(generic.edit.DeleteView):
    model = EngagementMeta
    template_name = 'ptportal/engagement/engagement_meta_confirm_delete.html'
    success_url = reverse_lazy('index')

    def get_object(self):
        return EngagementMeta.object()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['report'] = Report.object()
        if context['report'].report_type == 'HVA':
            context['hvas'] = HVATarget.objects.all()
        return context


class EngagementDetail(generic.DetailView):
    model = EngagementMeta
    template_name = 'ptportal/engagement/engagement_meta_detail.html'

    def get_object(self):
        return EngagementMeta.object()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['report'] = Report.object()
        if context['report'].report_type == 'HVA':
            context['hvas'] = HVATarget.objects.all()
        return context
