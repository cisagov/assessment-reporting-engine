# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django import forms
from django.shortcuts import redirect, render
from django.views import generic
from django.urls import reverse_lazy
from django.contrib import messages

from ptportal.forms import ElectionInfrastructureForm
from ptportal.models import ElectionInfrastructureQuestionnaire


def EI_redirect(request):
    if ElectionInfrastructureQuestionnaire.objects.exists():
        return redirect('ei_update')
    else:
        return redirect('ei_create')


class EICreate(generic.edit.CreateView):
    model = ElectionInfrastructureQuestionnaire
    form_class = ElectionInfrastructureForm
    template_name = 'ptportal/ei/election_infrastructure_form.html'
    success_url = reverse_lazy('index')

    def get_object(self):
        return ElectionInfrastructureQuestionnaire.objects.first()

    def post(self, request, *args, **kwargs):
        form = self.get_form()
        if form.is_valid():
            print('form is valid!')
            form.save()
            messages.get_messages(
                request
            )  # Clears the messages to eliminate duplicate alerts in template
            messages.success(request, "EI Questionnaire")
            return redirect(self.success_url)
        else:
            print('form.errors', form.errors)
            # print('form.clean: ', form.cleaned_data)
            context = super().get_context_data(**kwargs)
            context['form'] = form
            return render(request, self.template_name, context)


class EIUpdate(generic.edit.UpdateView):
    model = ElectionInfrastructureQuestionnaire
    form_class = ElectionInfrastructureForm
    template_name = 'ptportal/ei/election_infrastructure_form.html'

    def get_object(self):
        return ElectionInfrastructureQuestionnaire.objects.first()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        print('context: ', context)
        return context

    def post(self, request, *args, **kwargs):
        questionnaire = self.get_object()
        form = ElectionInfrastructureForm(request.POST, instance=questionnaire)
        if form.is_valid():
            print('form is valid!')
            form.save()
            messages.get_messages(
                request
            )  # Clears the messages to eliminate duplicate alerts in template
            messages.success(request, "EI Questionnaire Successfully Updated!")

            return redirect(questionnaire)
        else:
            print('form.errors', form.errors)
            # print('form.clean: ', form.cleaned_data)
            context = super().get_context_data(**kwargs)
            context['form'] = form
            return render(request, self.template_name, context)


# class EIDetail(generic.DetailView):
#     model = ElectionInfrastructureQuestionnaire
#     template_name = 'ptportal/ei/election_infrastructure_detail.html'

#     def get_object(self):
#         return ElectionInfrastructureQuestionnaire.objects.first()


class EIDelete(generic.edit.DeleteView):
    model = ElectionInfrastructureQuestionnaire
    success_url = reverse_lazy('index')
    template_name = 'ptportal/ei/election_infrastructure_confirm_delete.html'

    def get_object(self):
        return ElectionInfrastructureQuestionnaire.objects.first()


def EIModalDelete(request):
    ElectionInfrastructureQuestionnaire.objects.first().delete()
    return redirect('index')
