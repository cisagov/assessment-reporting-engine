# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django import forms
from django.forms.models import modelformset_factory

from ptportal.models import Report

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
        self.fields['credentials_identified'].widget.attrs.update(
            {'class': ' form-control'}
        )
        self.fields['credentials_validated'].widget.attrs.update(
            {'class': ' form-control'}
        )
        self.fields['email_percentage'].widget.attrs.update(
            {'class': ' form-control', 'rows': '1'}
        )

    class Meta:
        model = Report
        exclude = ('report_type',)
        widgets = {}
