# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django import forms
from django.forms.models import modelformset_factory

from ptportal.models import (
    Report
)

from . import BaseModelForm

class ReportForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['scanned_scope_ext'].widget.attrs.update({'rows': '1'})
        self.fields['scanned_scope_int'].widget.attrs.update({'rows': '1'})
        self.fields['IP_scanned_ext'].widget.attrs.update({'rows': '1'})
        self.fields['IP_scanned_int'].widget.attrs.update({'rows': '1'})
        self.fields['hosts_IDd_ext'].widget.attrs.update({'rows': '1'})
        self.fields['hosts_IDd_int'].widget.attrs.update({'rows': '1'})
        # For HVA Figure 5
        self.fields['noted_system_strengths'].widget.attrs.update({'rows': '5'})
        # for RPT app B:
        self.fields['emails_identified'].widget.attrs.update({'class': ' form-control'})
        self.fields['emails_breached'].widget.attrs.update({'class': ' form-control'})
        self.fields['credentials_identified'].widget.attrs.update({'class': ' form-control'})
        self.fields['credentials_validated'].widget.attrs.update({'class': ' form-control'})     
        self.fields['email_percentage'].widget.attrs.update({'class': ' form-control', 'rows': '1'})

    class Meta:
        model = Report
        exclude = ('report_type',)
        widgets = {}
