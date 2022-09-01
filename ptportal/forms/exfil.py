# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
