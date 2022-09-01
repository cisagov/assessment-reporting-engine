# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.contrib import messages
from django.http import JsonResponse
from django.urls import reverse
from django import forms
from django.shortcuts import redirect
from django.views import generic, View

from extra_views import ModelFormSetView

from ptportal.models import UploadedFinding, Campaign


class Campaigns(ModelFormSetView):
    model = Campaign
    template_name = 'ptportal/finding/susceptibility/campaigns.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['finding'] = get_campaign_finding()
        context['edit'] = Campaign.objects.exists()
        return context

    def get_success_url(self):
        finding = get_campaign_finding()
        return finding.get_absolute_url()

    def get(self, request, *args, **kwargs):
        if Campaign.objects.exists():
            self.factory_kwargs['extra'] = 0
        else:
            self.factory_kwargs['extra'] = 1
        return super().get(self, request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        print(request.POST)
        if request.POST.get('delete') != '':
            deletions = request.POST.get('delete').split(",")
            for to_delete in deletions:
                Campaign.objects.filter(pk=to_delete).delete()

        formset = self.construct_formset()
        if formset.is_valid():
            print("is_valid(): ", formset.is_valid())
        else:
            print("invalid: ", formset)
        return super().post(self, request, *args, **kwargs)
