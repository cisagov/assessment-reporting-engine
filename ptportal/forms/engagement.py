# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django import forms
from django.forms.models import modelformset_factory

from ptportal.models import AssessmentScenarios, EngagementMeta, Report

from . import BaseModelForm

ScenarioFormSet = modelformset_factory(
    model=AssessmentScenarios, fields='__all__', extra=0, can_delete=True
)


class EngagementScenariosForm(forms.ModelForm):
    assessment_scenario_type = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 1, 'cols': 10}), label="scenario type"
    )
    scenario = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 2}), label="Scenario #"
    )

    class Meta:
        model = AssessmentScenarios
        exclude = ('belongs_to_report', 'belongs_to_eng', 'order')


class EngagementForm(BaseModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields['business_goal'].widget.attrs.update({'rows': '2'})
        report = Report.object()
        if report.report_type == 'RPT':
            self.fields[
                'business_goal'
            ].initial = "Testing of the general IT security of the external networks"
        else:
            self.fields[
                'business_goal'
            ].initial = "Testing of the general IT security of the external and internal networks"
        self.fields['ext_start_date'].widget.attrs.update(
            {'data-provide': 'datepicker', 'type': 'date'}
        )
        self.fields['ext_end_date'].widget.attrs.update(
            {'data-provide': 'datepicker', 'type': 'date'}
        )

        self.fields['int_scope'].widget.attrs.update({'rows': '3'})
        self.fields['int_excluded_scope'].widget.attrs.update({'rows': '3'})

        self.fields['int_start_date'].widget.attrs.update(
            {'data-provide': 'datepicker', 'type': 'date'}
        )
        self.fields['int_end_date'].widget.attrs.update(
            {'data-provide': 'datepicker', 'type': 'date'}
        )

        self.fields['ext_scope'].widget.attrs.update({'rows': '3'})
        self.fields['ext_excluded_scope'].widget.attrs.update({'rows': '3'})

    class Meta:
        model = EngagementMeta
        fields = '__all__'
        widgets = {
            'traffic_light_protocol': forms.RadioSelect(
                {'class': 'form-check-input', 'required': False}
            )
        }
        exclude = ['fy']

    def clean(self):
        cleaned_data = super(EngagementForm, self).clean()
        password = cleaned_data.get("report_password")
        confirm_password = cleaned_data.get("confirm_report_password")

        if password != confirm_password:
            self.add_error('confirm_report_password', "Password does not match")

        return cleaned_data
