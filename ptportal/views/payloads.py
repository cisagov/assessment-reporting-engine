# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from extra_views import ModelFormSetView

from django.http import JsonResponse
from django.contrib import messages

from ptportal.models import UploadedFinding, Payload


class Payloads(ModelFormSetView):
    model = Payload
    template_name = 'ptportal/finding/weakness/payloads.html'
    factory_kwargs = {"can_order": True}

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['edit'] = Payload.objects.exists()
        return context

    def get(self, request, *args, **kwargs):
        if Payload.objects.exists():
            self.factory_kwargs['extra'] = 0
        else:
            self.factory_kwargs['extra'] = 1
        return super().get(self, request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        print(request.POST)
        if request.POST.get('delete') != '':
            payloads = request.POST.get('delete').split(',')
            for payload in payloads:
                Payload.objects.filter(pk=payload).delete()

        if formset.is_valid():
            print("is_valid(): ", formset.is_valid())
        else:
            print("invalid: ", formset)
        return super().post(self, request, *args, **kwargs)
