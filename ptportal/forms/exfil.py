# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django import forms

from ptportal.models import SensitiveDataExfil

from . import BaseModelForm


class SensitiveDataExfilForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # Specify Date and Time type attribute for the date_time widget
        date_time_widget = forms.SplitDateTimeWidget(
            date_attrs={'class': 'form-control', 'type': 'date', 'required': True},
            time_attrs={'class': 'form-control', 'type': 'time', 'required': True},
        )

        self.fields['datatype'].widget.attrs.update(
            {'class': 'form-control text-field', 'required': True}
        )
        self.fields['protocol'].required = True
        self.fields['datatype'].required = True
        # Convert date_time from DateTimeField -> SplitDateTimeField in form
        self.fields['date_time'] = forms.SplitDateTimeField(widget=date_time_widget)
        self.fields['date_time'].required = True
        self.fields['result'].required = True

    class Meta:
        model = SensitiveDataExfil
        fields = '__all__'

        widgets = {
            'protocol': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
            'result': forms.RadioSelect(
                {'class': 'form-check-input', 'required': True}
            ),
        }
