# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.forms.models import modelformset_factory

from . import BaseModelForm

from ptportal.models import HVATarget, HVAData


class HVATargetForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super(HVATargetForm, self).__init__(*args, **kwargs)
        for visible in self.visible_fields():
            visible.field.widget.attrs.update(
                {'class': 'form-control', 'required': True}
            )
        self.fields['status'].widget.attrs.update(
            {
                'class': 'form-control wh-100 status',
                'required': True,
                'data-live-search': True,
            }
        )

    class Meta:
        model = HVATarget
        fields = ['name', 'address', 'status']


HVATargetFormSet0 = modelformset_factory(
    model=HVATarget,
    form=HVATargetForm,
    extra=0,
    can_delete=True,
)

HVATargetFormSet1 = modelformset_factory(
    model=HVATarget,
    form=HVATargetForm,
    extra=1,
    can_delete=True,
)
