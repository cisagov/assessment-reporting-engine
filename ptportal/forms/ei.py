# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django import forms

from ptportal.models import ElectionInfrastructureQuestionnaire

from .base import BaseForm, BaseModelForm


class ElectionInfrastructureForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    class Meta:
        model = ElectionInfrastructureQuestionnaire
        fields = '__all__'

    def fields_required(self, fields):
        """Used for conditionally marking fields as required."""
        # https://www.fusionbox.com/blog/detail/creating-conditionally-required-fields-in-django-forms/577/
        for field in fields:
            if not self.cleaned_data.get(field, ''):
                msg = forms.ValidationError("This field is required.")
                self.add_error(field, msg)

    def clean(self):
        cleaned_data = super(ElectionInfrastructureForm, self).clean()
        if cleaned_data.get('q4') is True:
            self.fields_required(['q4A'])
        if cleaned_data.get('q9') is True:
            self.fields_required(['q9A'])
        return cleaned_data
