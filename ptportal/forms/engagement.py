# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django import forms
from django.forms.models import modelformset_factory

from ptportal.models import EngagementMeta, Report

from . import BaseModelForm


class EngagementForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        #self.fields['ext_start_date'].widget.attrs.update(
        #    {'data-provide': 'datepicker', 'type': 'date'}
        #)
        #self.fields['ext_end_date'].widget.attrs.update(
        #    {'data-provide': 'datepicker', 'type': 'date'}
        #)

        self.fields['phishing_domains'].widget.attrs.update({'rows': '3'})

        self.fields['int_scope'].widget.attrs.update({'rows': '3'})
        self.fields['int_excluded_scope'].widget.attrs.update({'rows': '3'})

        #self.fields['int_start_date'].widget.attrs.update(
        #    {'data-provide': 'datepicker', 'type': 'date'}
        #)
        #self.fields['int_end_date'].widget.attrs.update(
        #    {'data-provide': 'datepicker', 'type': 'date'}
        #)

        self.fields['ext_scope'].widget.attrs.update({'rows': '3'})
        self.fields['ext_excluded_scope'].widget.attrs.update({'rows': '3'})

    class Meta:
        model = EngagementMeta
        fields = '__all__'
        widgets = {
            'traffic_light_protocol': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            )
        }
        exclude = ['fy']

    def clean(self):
        cleaned_data = super(EngagementForm, self).clean()
        password = cleaned_data.get("report_password")
        confirm_password = cleaned_data.get("confirm_report_password")

        if password != confirm_password:
            self.add_error('confirm_report_password', "Password does not match")

        return cleaned_data