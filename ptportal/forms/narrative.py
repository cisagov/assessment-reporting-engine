# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011
from django import forms
from ptportal.models import Narrative, Tools
from django.contrib.admin.widgets import FilteredSelectMultiple

from . import BaseModelForm


class NarrativeForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields['tools'].widget.attrs.update(
            {'class': 'form-control', 'rows': 2, 'multiple': True, 'required': False, 'tabIndex': '-1'}
        )

    class Meta:
        model = Narrative
        fields = ['tools']
