# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import json
from django import forms
from django.shortcuts import redirect, render
from django.views import generic
from django.urls import reverse_lazy
from django.contrib import messages
from django.forms.models import modelformset_factory

from ptportal.forms import ElectionInfrastructureForm
from ptportal.models import ElectionInfrastructureQuestionnaire, ElectionSystems


def EI_redirect(request):
    if ElectionInfrastructureQuestionnaire.objects.exists():
        return redirect('ei_update')
    else:
        return redirect('ei_create')


class EICreate(generic.edit.CreateView):
    model = ElectionInfrastructureQuestionnaire
    form_class = ElectionInfrastructureForm
    template_name = 'ptportal/ei/election_infrastructure_form.html'
    success_url = reverse_lazy('ei_update')

    def get_object(self):
        return ElectionInfrastructureQuestionnaire.object()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['systems'] = ElectionSystems.objects.all().order_by('order')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)

        diff = ElectionSystems.objects.all().count() - len(postData['systems'])

        if diff > 0:
            for i in range(diff):
                ElectionSystems.objects.order_by('-order')[0].delete()

        for order, data in enumerate(postData['systems']):
            if (
                data['ei_make']
                == data['ei_model']
                == data['ei_model_num']
                == ""
            ):
                continue

            obj = ElectionSystems.objects.filter(order=order + 1)

            if obj.exists():
                try:
                    obj.update(
                        ei_make=data['ei_make'],
                        ei_model=data['ei_model'],
                        ei_model_num=data['ei_model_num']
                    )
                    

                except (KeyError, ValidationError) as e:
                    return HttpResponse(status=400, reason=e)
                

            else:
                try:
                    ElectionSystems.objects.create(
                        order=order + 1,
                        ei_make=data['ei_make'],
                        ei_model=data['ei_model'],
                        ei_model_num=data['ei_model_num']
                    )

                except (KeyError, ValidationError) as e:
                    return HttpResponse(status=400, reason=e)

        form = ElectionInfrastructureForm(postData['questions'])
        
        if form.is_valid():
            form.save()
            return redirect(self.success_url)
        else:
            return HttpResponse(status=400, reason=form.errors)


class EIUpdate(generic.edit.UpdateView):
    model = ElectionInfrastructureQuestionnaire
    form_class = ElectionInfrastructureForm
    template_name = 'ptportal/ei/election_infrastructure_form.html'
    success_url = reverse_lazy('ei_update')

    def get_object(self):
        return ElectionInfrastructureQuestionnaire.object()

    def get_form_kwargs(self):
        """Return the keyword arguments for instantiating the form."""
        kwargs = super().get_form_kwargs()
        if hasattr(self, 'object'):
            kwargs.update({'instance': self.object})
        return kwargs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['systems'] = ElectionSystems.objects.all().order_by('order')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)

        diff = ElectionSystems.objects.all().count() - len(postData['systems'])

        if diff > 0:
            for i in range(diff):
                ElectionSystems.objects.order_by('-order')[0].delete()

        for order, data in enumerate(postData['systems']):
            if (
                data['ei_make']
                == data['ei_model']
                == data['ei_model_num']
                == ""
            ):
                continue

            obj = ElectionSystems.objects.filter(order=order + 1)

            if obj.exists():
                try:
                    obj.update(
                        ei_make=data['ei_make'],
                        ei_model=data['ei_model'],
                        ei_model_num=data['ei_model_num']
                    )
                    

                except (KeyError, ValidationError) as e:
                    return HttpResponse(status=400, reason=e)
                

            else:
                try:
                    ElectionSystems.objects.create(
                        order=order + 1,
                        ei_make=data['ei_make'],
                        ei_model=data['ei_model'],
                        ei_model_num=data['ei_model_num']
                    )

                except (KeyError, ValidationError) as e:
                    return HttpResponse(status=400, reason=e)

        form = ElectionInfrastructureForm(postData['questions'], instance=ElectionInfrastructureQuestionnaire.objects.first())
        if form.is_valid():
            form.save()
            return redirect(self.success_url)
        else:
            return HttpResponse(status=400, reason=form.errors)


def EIModalDelete(request):
    ElectionInfrastructureQuestionnaire.objects.first().delete()
    return redirect('ei_create')
