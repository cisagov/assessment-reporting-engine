# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
