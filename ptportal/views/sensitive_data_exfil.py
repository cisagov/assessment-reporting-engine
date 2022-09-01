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
from ..forms import SensitiveDataExfilForm
from ..models import UploadedFinding, SensitiveDataExfil

from datetime import datetime


def get_sensitive_data_exfil_finding():
    return UploadedFinding.objects.filter(slug="sensitive-data-exfiltration").first()


class SensitiveDataExfiltration(ModelFormSetView):
    model = SensitiveDataExfil
    template_name = "ptportal/finding/data-exfil/data-exfil.html"
    form_class = SensitiveDataExfilForm

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['finding'] = get_sensitive_data_exfil_finding()
        context['edit'] = SensitiveDataExfil.objects.exists()
        return context

    def get_success_url(self):
        finding = get_sensitive_data_exfil_finding()
        return finding.get_absolute_url()

    def get(self, request, *args, **kwargs):
        if SensitiveDataExfil.objects.exists():
            self.factory_kwargs['extra'] = 0
        else:
            self.factory_kwargs['extra'] = 1
        return super().post(self, request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        print(request.POST)
        if request.POST.get('delete') != '':
            data_exfils = request.POST.get('delete').split(',')
            for exfil in data_exfils:
                SensitiveDataExfil.objects.filter(pk=exfil).delete()

        if request.POST.get('data_exfil_description'):
            finding = get_sensitive_data_exfil_finding()
            # not a safe way to handle user data
            finding.data_exfil_description = request.POST['data_exfil_description']
            finding.save(update_fields=['data_exfil_description'])
            messages.get_messages(
                request
            )  # Clears the messages to eliminate duplicates alerts in template
            messages.success(request, finding.finding, extra_tags=finding.slug)
        return super().post(self, request, *args, **kwargs)
