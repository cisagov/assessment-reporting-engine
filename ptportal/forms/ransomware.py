# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django import forms

from ptportal.models import Ransomware

from . import BaseModelForm


class RansomwareForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields['wormable_machines'].widget.attrs.update(
            {'class': 'form-control text-field', 'required': True}
        )
        self.fields['wormable_HVAs'].widget.attrs.update(
            {'class': 'form-control text-field', 'required': True}
        )
        self.fields['network_susc'].widget.attrs.update(
            {'class': 'form-control text-field', 'required': True}
        )

    class Meta:
        model = Ransomware
        fields = '__all__'
