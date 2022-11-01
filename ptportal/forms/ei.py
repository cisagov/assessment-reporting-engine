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
        super(ElectionInfrastructureForm, self).__init__(*args, **kwargs)
        select_list = {'q24', 'q25', 'q26', 'q27'}
        text_list = {'ei_make', 'ei_model', 'ei_model_num', 'q4A', 'q9A'}
        for visible in self.visible_fields():
            if visible.name in select_list:
                visible.field.widget.attrs.update(
                    {'class': 'wh-100', 'required': True, 'data-live-search': True}
                )
            elif visible.name in text_list:
                visible.field.widget.attrs.update({'rows': 2})
            else:
                visible.field.widget = forms.RadioSelect(
                    choices=visible.field.widget.choices,
                    # default=None,
                    attrs={'required': False},
                )

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
        data = self.cleaned_data
        if data.get('q4') is True:
            self.fields_required(['q4A'])
        if data.get('q9') is True:
            self.fields_required(['q9A'])
        return self.cleaned_data
