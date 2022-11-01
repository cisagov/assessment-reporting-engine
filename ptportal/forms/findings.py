# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django import forms
from django.forms.models import modelformset_factory
from django.contrib.contenttypes.forms import generic_inlineformset_factory

from ptportal.models import (
    UploadedFinding,
)

from . import BaseModelForm


class UploadedFindingForm(BaseModelForm):
    customer_specific_finding = forms.CharField(required=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        label_suffix = ''
        self.fields['description'].widget.attrs.update(
            {'class': 'form-control', 'rows': 5, 'required': True, 'tabIndex': '-1'}
        )
        self.fields['remediation'].widget.attrs.update(
            {'class': 'form-control', 'rows': 5, 'required': True, 'tabIndex': '-1'}
        )
        self.fields['affected_systems'].widget.attrs.update(
            {'class': 'form-control wh-100', 'multiple': True, 'required': True}
        )
        self.fields['customer_specific_finding'].widget.attrs.update(
            {
                'class': 'form-control',
                'rows': 1,
                'required': False,
                'style': 'resize: none;',
                'disabled': 'disabled',
            }
        )

    class Meta:
        model = UploadedFinding
        exclude = (
            'uploaded_finding_name',
            'uploaded_finding_id',
            'business_description',
            'NIST_800_53',
            'NIST_CSF',
            'slug',
            'created_at',
            'updated_at',
            'screenshot_description',
            'campaign_description',
            'payload_description',
            'data_exfil_description',
        )
        widgets = {
            'finding': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'severity': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'assessment_type': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'discovery': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'mitigation': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
        }


class EditUploadedFindingForm(BaseModelForm):
    customer_specific_finding = forms.CharField(
        required=False, label='Custom Finding', help_text='Update Custom Finding Label'
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        label_suffix = ''
        self.fields['description'].widget.attrs.update(
            {'class': 'form-control', 'rows': 5, 'required': True, 'tabIndex': '-1'}
        )
        self.fields['remediation'].widget.attrs.update(
            {'class': 'form-control', 'rows': 5, 'required': True, 'tabIndex': '-1'}
        )
        self.fields['affected_systems'].widget.attrs.update(
            {'class': 'form-control wh-100', 'multiple': True, 'required': True}
        )
        self.fields['customer_specific_finding'].widget.attrs.update(
            {
                'class': 'form-control',
                'rows': 1,
                'required': False,
                'style': 'resize: none;',
            }
        )

    class Meta:
        model = UploadedFinding
        exclude = (
            'finding',
            'uploaded_finding_name',
            'uploaded_finding_id',
            'business_description',
            'NIST_800_53',
            'NIST_CSF',
            'slug',
            'created_at',
            'updated_at',
            'screenshot_description',
            'campaign_description',
            'payload_description',
            'data_exfil_description',
        )
        widgets = {
            'severity': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'assessment_type': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'discovery': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'mitigation': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
        }


class FindingForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update(
            {'class': 'form-control', 'required': True}
        )
        self.fields['description'].widget.attrs.update(
            {'class': 'form-control', 'required': True}
        )
        self.fields['business_description'].widget.attrs.update(
            {'class': 'form-control', 'required': False}
        )
        self.fields['remediation'].widget.attrs.update(
            {'class': 'form-control', 'required': True}
        )
        self.fields['name'].required = True
        self.fields['description'].required = True
        self.fields['business_description'].required = False
        self.fields['remediation'].required = True

    class Meta:
        model = UploadedFinding
        exclude = [
            'finding_ID',
            'slug',
            'objects',
            'critical',
            'high',
            'medium',
            'low',
            'informational',
        ]
        widgets = {
            'severity': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'assessment_type': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
        }


FindingFormset = modelformset_factory(
    model=UploadedFinding,
    extra=1,
    exclude=[
        'finding_ID',
        'slug',
        'objects',
        'critical',
        'high',
        'medium',
        'low',
        'informational',
    ],
)
