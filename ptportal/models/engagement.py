# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import datetime

from django.core.validators import (
    EmailValidator,
    MaxValueValidator,
    MinValueValidator,
    MinLengthValidator,
    RegexValidator,
)

from django.db import models
from django.db.models import signals
from django.dispatch import receiver
from django.urls import reverse
from django.utils import timezone

from ptportal.validators import scope_validator

from . import abstract_models
from . import findings
from . import report


def current_year():
    return datetime.date.today().year


def max_value_current_year():
    return MaxValueValidator(current_year() + 1)


STATUS_CHOICES = (
    ('Canceled', "Canceled"),
    ('Completed', "Completed"),
    ('In Progress', "In Progress"),
    ('Not Started', "Not Started"),
    ('On Hold', "On Hold"),
)


class HVATarget(abstract_models.TimeStampedModel):
    name = models.CharField(
        max_length=200,
        blank=True,
        verbose_name="HVA Name",
        help_text='Common Name of High Value Asset',
    )
    address = models.CharField(
        max_length=200,
        blank=True,
        verbose_name="HVA Address",
        help_text="Either a Hostname, FQDN, or IP Address",
    )
    status = models.CharField(
        max_length=255,
        blank=False,
        verbose_name='HVA Assessment Status',
        choices=STATUS_CHOICES,
        default='Not Started',
        help_text='Indicates the assessment status of the HVA',
    )

    # add system field to link to system
    class Meta:
        verbose_name_plural = 'HVA Targets'
        verbose_name = 'HVA Target'
        ordering = ['name']

    def __str__(self):
        return self.name


class EngagementMeta(abstract_models.TimeStampedModel):
    TLP_CHOICES = (('Amber', 'Amber'), ('Red', 'Red'))

    asmt_id = models.CharField(
        max_length=8,
        validators=[
            RegexValidator(
                regex="^[1-9]\d*[.]?\d{1,}$",
                # regex rules:
                # [1-9] any digit but 0
                # \d* any digit including 0 - equivilent to [0-9]
                # [.]? optional decimal/period
                # \d{1,} any digit - {1,} is a quantifier - one or more digits
                message="Please provide valid input: use only numeric values and ID cannot start with 0 or end with a period.",
                code="invalid_id",
            )
        ],
        unique=True,
    )
    # report_name = models.CharField(max_length=50,
    #                                    validators=[MinLengthValidator(13)],
    #                                    verbose_name="Create Assessment ID",
    #                                    )
    report_password = models.CharField(
        max_length=50,
        validators=[MinLengthValidator(13)],
        verbose_name="Create Report Password",
        help_text="Must be at least 13 characters",
    )
    confirm_report_password = models.CharField(
        max_length=50,
        validators=[MinLengthValidator(13)],
        verbose_name="Confirm Report Password",
        help_text="Passwords Must Match",
        default="",
    )
    traffic_light_protocol = models.CharField(
        max_length=20,
        verbose_name="Traffic Light Protocol",
        choices=TLP_CHOICES,
        blank=True,
        help_text="Select which TLP the generated report will be marked with",
        null=True,
    )

    # Stakeholder Information
    customer_long_name = models.CharField(
        max_length=200, blank=True, unique=True, verbose_name="Customer Long Name"
    )
    customer_initials = models.CharField(
        max_length=20, blank=True, verbose_name="Customer Initials"
    )
    customer_POC_name = models.CharField(
        max_length=100, blank=True, verbose_name="Customer POC"
    )
    customer_POC_email = models.EmailField(
        max_length=100,
        blank=True,
        validators=[EmailValidator()],
        verbose_name="Customer POC \n" + "Email Address",
    )

    # Test Details
    team_lead_name = models.CharField(
        max_length=50, blank=True, unique=True, verbose_name="Team Lead Name"
    )
    team_lead_email = models.EmailField(
        max_length=50,
        blank=True,
        validators=[EmailValidator()],
        verbose_name="Team Lead Email Address",
    )
    technical_lead_name = models.CharField(
        max_length=50, blank=True, unique=True, verbose_name="Technical Lead Name"
    )
    technical_lead_email = models.EmailField(
        max_length=50,
        blank=True,
        validators=[EmailValidator()],
        verbose_name="Technical Lead Email Address",
    )
    business_goal = models.TextField(blank=True, verbose_name="Business Goal")

    # External Assessment
    ext_start_date = models.DateField(
        default=datetime.date.today,
        max_length=10,
        blank=True,
        verbose_name="Start Date",
        null=True,
    )
    ext_end_date = models.DateField(
        default=datetime.date.today() + datetime.timedelta(days=4),
        max_length=10,
        blank=True,
        verbose_name="End Date",
        null=True,
    )
    ext_scope = models.TextField(
        blank=True,
        verbose_name="In Scope IP Addresses/Domain Names",
        validators=[scope_validator],
        help_text="Enter as a list of commas, space, and/or new line separated IPs, Ranges, and CIDRs",
        null=True,
    )
    ext_excluded_scope = models.TextField(
        blank=True,
        verbose_name="Out of Scope IP Addresses/Domain Names",
        validators=[scope_validator],
        help_text="Enter as a list of commas, space, and/or new line separated IPs, Ranges, and CIDRs",
        null=True,
    )

    # Internal Assessment
    int_start_date = models.DateField(
        default=datetime.date.today() + datetime.timedelta(days=7),
        max_length=10,
        blank=True,
        verbose_name="Start Date",
        null=True,
    )
    int_end_date = models.DateField(
        default=datetime.date.today() + datetime.timedelta(days=11),
        max_length=10,
        blank=True,
        verbose_name="End Date",
        null=True,
    )
    int_scope = models.TextField(
        blank=True,
        verbose_name="In Scope IP Addresses/Domain Names",
        validators=[scope_validator],
        help_text="Enter as a list of commas, space, and/or new line separated IPs, Ranges, and CIDRs",
        null=True,
    )
    int_excluded_scope = models.TextField(
        blank=True,
        verbose_name="Out of Scope IP Addresses/Domain Names",
        validators=[scope_validator],
        help_text="Enter as a list of commas, space, and/or new line separated IPs, Ranges, and CIDRs",
        null=True,
    )

    fy = models.PositiveIntegerField(
        default=current_year(),
        verbose_name='Fiscal Year',
        blank=True,
        validators=[MinValueValidator(1984), max_value_current_year()],
    )

    class Meta:
        verbose_name_plural = 'Engagement Metadata'
        ordering = ['asmt_id']

    @classmethod
    def object(cls):
        return (
            cls._default_manager.all().first()
        )  # since there is only one engagement object

    def __str__(self):
        return f"RV {str(self.asmt_id)}: {self.customer_long_name}"

    def get_int_scope(self):
        return self.int_scope

    def get_ext_scope(self):
        return self.ext_scope

    def get_int_excluded_scope(self):
        return self.int_excluded_scope

    def get_ext_excluded_scope(self):
        return self.ext_excluded_scope

    def save(self, *args, **kwargs):
        # to always run full clean before creating or saving to model
        super().full_clean()
        self.updated_at = timezone.now()
        self.id = 1
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("engagement")


STATUS_CHOICES = (
    ('Canceled', "Canceled"),
    ('Completed', "Completed"),
    ('In Progress', "In Progress"),
    ('Not Started', "Not Started"),
    ('On Hold', "On Hold"),
)


class HVAData(models.Model):
    asmt_id = models.CharField(max_length=255)
    agency = models.CharField(max_length=255, blank=True)
    # TODO NEXT RELEASE--
    target = models.ManyToManyField(
        HVATarget,
        verbose_name='HVA Target(s)',
        help_text='What are the designated high valued asset targets?',
        blank=True,
    )
    federal_lead = models.CharField(max_length=255, blank=True)

    # Scenario - Susceptibility
    external_suscep = models.BooleanField(
        null=True,
        default=None,
        verbose_name='Susceptibility to External Threats',
        help_text='Is this HVA susceptibile to external threats?',
        blank=True,
    )
    phish_suscep = models.BooleanField(
        null=True,
        default=None,
        verbose_name='Susceptibility to Phishing Threats',
        help_text='Is this HVA susceptibile to phishing threats?',
        blank=True,
    )
    web_suscep = models.BooleanField(
        null=True,
        default=None,
        verbose_name='Susceptibility to Web Application Threats',
        help_text='Is this HVA susceptibile to web application threats?',
        blank=True,
    )
    internal_suscep = models.BooleanField(
        null=True,
        default=None,
        verbose_name='Susceptibility to Internal Threats',
        help_text='Is this HVA susceptibile to internal threats?',
        blank=True,
    )
    internal_emaulation_suscep = models.BooleanField(
        null=True,
        default=None,
        verbose_name='Susceptibility to Internal Emulation Threats (ITE)',
        help_text='Is this HVA susceptibile to internal emulation threats?',
        blank=True,
    )
    data_exfil_suscep = models.BooleanField(
        null=True,
        default=None,
        verbose_name='Susceptibility to Data Exfiltration Threats',
        help_text='Is this HVA susceptibile to data exfiltration threats?',
        blank=True,
    )

    # Scenario - Findings
    external_findings = models.ManyToManyField(
        findings.UploadedFinding,
        verbose_name='External Assessment Scenario Findings',
        help_text='What are the findings related to the external assessment scenario?',
        blank=True,
        related_name='related_external_findings',
    )
    phish_findings = models.ManyToManyField(
        findings.UploadedFinding,
        verbose_name='Phishing Scenario Findings',
        help_text='What are the findings related to the phishing campaign scenario?',
        blank=True,
        related_name='related_phishing_findings',
    )
    web_findings = models.ManyToManyField(
        findings.UploadedFinding,
        verbose_name='Web App Scenario Findings',
        help_text='What are the findings related to the web app scenario?',
        blank=True,
        related_name='related_web_app_findings',
    )
    internal_findings = models.ManyToManyField(
        findings.UploadedFinding,
        verbose_name='Internal Assessment Scenario Findings',
        help_text='What are the findings related to the internal assessment scenario?',
        blank=True,
        related_name='related_internal_findings',
    )
    internal_emulation_findings = models.ManyToManyField(
        findings.UploadedFinding,
        verbose_name='Internal Emultional Scenario Findings',
        help_text='What are the findings related to the internal emulation scenario?',
        blank=True,
        related_name='related_internal_emulation_findings',
    )
    data_exfil_findings = models.ManyToManyField(
        findings.UploadedFinding,
        verbose_name='Data Exfiltration Scenario Findings',
        help_text='What are the findings related to the data exfiltration scenario?',
        blank=True,
        related_name='related_data_exfil_findings',
    )

    @classmethod
    def object(cls):
        return cls._default_manager.all().first()  # since there is only one HVA object

    class Meta:
        verbose_name_plural = 'HVA Details'

    def __str__(self):
        return f"HVA {str(self.asmt_id)}: {self.agency}"


def get_engagement_dates(instance):
    print('instance: ', instance)

    start_date = (
        instance.int_start_date
        if instance.int_start_date < instance.ext_start_date
        else instance.ext_start_date
    )
    end_date = (
        instance.ext_end_date
        if instance.ext_end_date > instance.int_end_date
        else instance.int_end_date
    )
    engagement_dates = (
        f"{start_date.strftime('%m/%d/%Y')} to {end_date.strftime('%m/%d/%Y')}"
    )

    return engagement_dates


@receiver(signals.pre_save, sender=EngagementMeta)
def pre_save_engagement(sender, instance, **kwargs):
    date = instance.int_end_date
    month = date.month
    if month < 10:
        instance.fy = date.year
    else:
        instance.fy = date.year + 1


@receiver(signals.post_save, sender=EngagementMeta)
def post_save_engagement(sender, instance, **kwargs):
    r = report.Report.object()
    if r.report_type == 'HVA':
        if HVAData.objects.exists():
            hva_obj = HVAData.objects.first()
            hva_obj.asmt_id = instance.asmt_id
            hva_obj.agency = instance.customer_long_name
            hva_obj.federal_lead = instance.team_lead_name
            hva_obj.save()
        else:
            hva_obj = HVAData.objects.create(
                asmt_id=instance.asmt_id,
                agency=instance.customer_long_name,
                federal_lead=instance.team_lead_name,
            )
    if HVATarget.objects.exists():
        hva_obj.target.add(*HVATarget.objects.all())

    if instance.customer_initials:
        scenarios = report.AssessmentScenarios.objects.all()
        for i in scenarios:
            i.scenario = i.scenario.replace(
                "{{eng_meta.customer_initials}}", instance.customer_initials
            )
            i.save()


@receiver(signals.pre_delete, sender=EngagementMeta)
def pre_delete_engagement(sender, instance, **kwargs):
    if instance.customer_initials:
        scenarios = report.AssessmentScenarios.objects.all()
        for i in scenarios:
            i.scenario = i.scenario.replace(
                instance.customer_initials, "{{eng_meta.customer_initials}}"
            )
            i.save()


@receiver(signals.post_delete, sender=EngagementMeta)
def post_delete_engagement(sender, instance, **kwargs):

    HVAData.objects.all().delete()
    HVATarget.objects.all().delete()
