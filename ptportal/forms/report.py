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
        self.fields['significant_findings'].widget.attrs.update({'rows': '3'})
        self.fields['recommendations'].widget.attrs.update({'rows': '3'})
        self.fields['observed_strengths'].widget.attrs.update({'rows': '3'})
        self.fields['external_scanned'].widget.attrs.update({'rows': '1'})
        self.fields['external_discovered'].widget.attrs.update({'rows': '1'})
        self.fields['internal_scanned'].widget.attrs.update({'rows': '1'})
        self.fields['internal_discovered'].widget.attrs.update({'rows': '1'})
        self.fields['password_analysis'].widget.attrs.update({'rows': '3'})

    class Meta:
        model = Report
        fields = '__all__'
        exclude = ('report_type','exception','browser')
        widgets = {}
