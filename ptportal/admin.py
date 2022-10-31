# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import *

# list of all model classes to be registered
allModels = [
    Severities,
    Category,
    BaseFinding,
    GeneralFinding,
    SpecificFinding,
    UploadedFinding,
    NISTControl,
    NIST_CSF,
    CIS_CSC,
    EngagementMeta,
    HVAData,
    HVATarget,
    ImageFinding,
    AttackFramework,
    AssumptionsConstraints,
    AssessmentScenarios,
    AffectedSystems,
    InfraTSFindings,
    InfraWSFindings,
    LateralMovementFindings,
    PersistenceFindings,
    FilesFindings,
    InteractiveLogonsFindings,
    SignificantEventsFindings,
    ArtifactFindings,
    RPTIdentifiedNetworks,
    RPTBreachedEmails,
    PortMappingHost,
    ElectionInfrastructureQuestionnaire,
    AttackPath,
    Campaign,
    Payload,
    NarrativeType,
    Narrative,
    ToolScreenshot,
    Acronym,
    KEV,
    KEVMetadata,
]

# registering list of models
admin.site.register(allModels)


@admin.register(Report)
# class ReportModelAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
#     summernote_fields = 'password_analysis'


class UserCreationForm(admin.ModelAdmin, forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(
        label='Password Confirmation', widget=forms.PasswordInput
    )

    class Meta:
        model = User
        fields = ('username',)

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords do not match!")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        user.is_staff = user.is_admin
        if commit:
            user.save()
        return user


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    add_form = UserCreationForm

    list_display = ('username', 'is_admin', 'is_active')
    list_filter = ('is_admin', 'is_active')
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Permissions', {'fields': ('is_admin', 'is_active')}),
    )

    add_fieldsets = (
        (
            None,
            {'classes': ('wide',), 'fields': ('username', 'password1', 'password2')},
        ),
    )
    search_fields = ('username',)
    ordering = ('username',)
    filter_horizontal = ()
