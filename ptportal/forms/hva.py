# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
