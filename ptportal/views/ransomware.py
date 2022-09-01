# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.contrib import messages
from ..forms import RansomwareForm
from ..models import UploadedFinding, Ransomware
from django.shortcuts import redirect, render
from django.views import generic
from django.urls import reverse


def ransomware_redirect(request):
    if Ransomware.objects.exists():
        return redirect('ransomware_update', Ransomware.objects.first().pk)
    else:
        return redirect('ransomware')


def get_ransomware_finding():
    return UploadedFinding.objects.filter(slug="ransomware").first()


class RansomwareCreate(generic.edit.CreateView):
    model = Ransomware
    template_name = "ptportal/finding/ransomware/ransomware.html"
    form_class = RansomwareForm

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['finding'] = get_ransomware_finding()
        context['edit'] = UploadedFinding.objects.filter(slug="ransomware").exists()
        print(context)
        return context

    def get_success_url(self):
        finding = get_ransomware_finding()
        return finding.get_absolute_url()

    def post(self, request, *args, **kwargs):
        print("in ransomware vreate view")
        form = self.get_form()
        finding = get_ransomware_finding()
        if form.is_valid():
            form.save()
            print(form)
        else:
            print(form.errors)
            return super().post(self, request, *args, **kwargs)
        messages.get_messages(
            request
        )  # Clears the messages to eliminate duplicates alerts in template
        messages.success(request, finding.finding, extra_tags=finding.slug)
        return redirect('index')


class RansomwareUpdate(generic.edit.UpdateView):
    model = Ransomware
    template_name = "ptportal/finding/ransomware/ransomware.html"
    form_class = RansomwareForm

    def get_success_url(self):
        finding = get_ransomware_finding()
        return finding.get_absolute_url()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['finding'] = get_ransomware_finding()
        context['edit'] = UploadedFinding.objects.filter(slug="ransomware").exists()
        return context

    def post(self, request, *args, **kwargs):
        print("in update------------------")
        self.object = self.get_object()
        context = super().get_context_data(**kwargs)
        form = self.get_form()
        finding = get_ransomware_finding()
        if form.is_valid():
            form.save()
        else:
            print(form.errors)
            context = super().get_context_data(**kwargs)
            context['object'] = form
            return super().post(self, request, *args, **kwargs)
        messages.get_messages(
            request
        )  # Clears the messages to eliminate duplicates alerts in template
        messages.success(request, finding.finding, extra_tags=finding.slug)
        return redirect('index')
