# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.contrib.auth.forms import ReadOnlyPasswordHashField
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
    AffectedSystems,
    InfraTS,
    InfraPhishing,
    InfraRedirectors,
    InfraWS,
    LateralMovement,
    Files,
    InteractiveLogons,
    HighImpactScans,
    SignificantEvents,
    Artifact,
    RPTIdentifiedNetworks,
    RPTBreachedEmails,
    PortMappingHost,
    ElectionInfrastructureQuestionnaire,
    ElectionSystems,
    Campaign,
    Payload,
    NarrativeType,
    Narrative,
    NarrativeStep,
    Acronym,
    KEV,
    KEVMetadata,
    DataExfil,
    Ransomware,
    RansomwareScenarios,
    ATTACK,
    Tools,
    SecuritySolution,
    Report
]

# registering list of models
admin.site.register(allModels)

class UserCreationForm(UserCreationForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username',)

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        user.is_staff = user.is_admin
        if commit:
            user.save()
        return user


class UserChangeForm(UserChangeForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('username',)

    def clean_password(self):
        return self.initial['password']


class UserAdmin(BaseUserAdmin):
    add_form = UserCreationForm

    list_display = ('username', 'is_admin', 'is_active',)
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


admin.site.register(User, UserAdmin)