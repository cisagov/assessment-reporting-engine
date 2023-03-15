# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models
from django.db.models import Sum
from django.template.defaultfilters import slugify
from django.urls import reverse
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from collections import defaultdict

import datetime

from . import abstract_models


class CriticalManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(severity__severity_name='Critical')


class HighManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(severity__severity_name='High')


class MediumManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(severity__severity_name='Medium')


class LowManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(severity__severity_name='Low')


class InformationalManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(severity__severity_name='Informational')


class AffectedSystems(models.Model):
    name = models.CharField(max_length=150, blank=True)
    ip = models.CharField(max_length=255, blank=True, null=True)
    ip_int = models.BigIntegerField(blank=True, null=True)

    def __str__(self):
        return self.name or self.ip

    def save(self, *args, **kwargs):
        if self.ip:
            sets = [int(x) for x in self.ip.split('.')]
            self.ip_int = (
                sets[0] * 256**3 + sets[1] * 256**2 + sets[2] * 256 + sets[3]
            )
            self.name = self.ip
        super().save()

    class Meta:
        verbose_name_plural = 'Affected Systems'
        ordering = ['ip_int', 'name']


class Severities(models.Model):
    order = models.IntegerField(default=0, null=True, blank=True)
    severity_name = models.CharField(
        default="severities", max_length=14, blank=True, unique=True
    )
    severity_description = models.TextField(
        blank=True,
        verbose_name='Severity Description',
        help_text='Description of severity that is used for tooltips',
    )

    class Meta:
        verbose_name_plural = 'Severities'
        ordering = ['order']

    def __str__(self):
        return self.severity_name


class InternalAndExternalAssessmentManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(assessment_type='External/Internal')


class ExternalAssessmentManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(assessment_type='External')


class InternalAssessmentManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(assessment_type='Internal')


class PhishingAssessmentManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(assessment_type='Phishing')


class UploadedFindingsOrderManager(models.Manager):
    def get_preferred_order(self):
        uploaded_findings = UploadedFinding.objects.all()
        order = uploaded_findings.annotate(
            custom_order=models.Case(
                models.When(assessment_type="External/Internal", then=models.Value(0)),
                models.When(assessment_type="External", then=models.Value(1)),
                models.When(assessment_type="Internal", then=models.Value(2)),
                models.When(assessment_type="Phishing", then=models.Value(3)),
                default=models.Value(4),
                output_field=models.IntegerField(),
            )
        ).order_by('custom_order', 'severity')
        return order


class KEVMetadata(models.Model):
    title = models.TextField(blank=True)
    catalog_version = models.TextField(blank=True, unique=True)
    date_released = models.DateTimeField(null=True)
    count = models.IntegerField(null=True)

    def __str__(self):
        return f"{self.title}, version: {self.catalog_version}"

    class Meta:
        verbose_name_plural = 'KEV Metadata'


class KEV(models.Model):
    cve_id = models.CharField(max_length=20, unique=True)
    vulnerability_name = models.TextField()
    vendor_project = models.TextField(blank=True)
    product = models.TextField(blank=True)
    date_added = models.DateField(null=True)
    description = models.TextField(blank=True)
    action = models.TextField(blank=True)
    date_action_due = models.DateField(null=True)
    found = models.BooleanField(default=False, blank=True)
    notes = models.TextField(blank=True)
    kev_metadata = models.ForeignKey(KEVMetadata, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.cve_id}, vulnerability name: {self.vulnerability_name}"

    class Meta:
        verbose_name_plural = 'KEVs'


class Category(abstract_models.TimeStampedModel):

    name = models.CharField(max_length=51, unique=True)
    remediation = models.TextField(verbose_name="Remediation", blank=True)
    description = models.TextField(verbose_name="Description", blank=True)
    resources = models.TextField(verbose_name="Resources", blank=True)
    cat_id = models.CharField(
        max_length=50, verbose_name='Category ID', unique=True, default=0
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Finding Categories'


class BaseFinding(abstract_models.TimeStampedModel):
    name = models.CharField(max_length=100)

    finding_id = models.CharField(
        max_length=50, verbose_name='Finding ID', unique=True, default=0
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        verbose_name="Category",
        blank=True,
        null=True,
        to_field='name',
    )
    description = models.TextField(verbose_name="Description", blank=True)
    remediation = models.TextField(verbose_name="Standard Remediation", blank=True)
    references = models.TextField(verbose_name="References", blank=True)
    resources = models.TextField(verbose_name="Resources", blank=True)

    severity = models.CharField(max_length=14, default='TBD')
    assessment_type = models.TextField(
        max_length=20, default='TBD'
    )
    timetable = models.TextField(verbose_name="Recommendation Timetable", blank=True)

    NIST_800_53 = models.TextField(blank=True)
    NIST_CSF = models.TextField(blank=True)
    CIS_CSC = models.TextField(blank=True)
    finding_type = models.CharField(max_length=10)
    gen_finding = models.TextField(
        verbose_name="If Specific, what's the general?", blank=True
    )

    slug = models.SlugField(max_length=255, unique=True, blank=True)

    objects = models.Manager()
    critical = CriticalManager()
    high = HighManager()
    medium = MediumManager()
    low = LowManager()
    informational = InformationalManager()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().full_clean()
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("index")

    def __str__(self):
        return self.name


class GeneralFinding(BaseFinding):
    general_finding_id = models.IntegerField(
        verbose_name='General Finding ID', unique=True, default=0
    )

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        self.finding_id = str(self.category.cat_id) + "-" + str(self.general_finding_id)
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class SpecificFinding(BaseFinding):
    specific_finding_id = models.IntegerField(
        verbose_name='Specific Finding ID', unique=True
    )
    general_finding = models.ForeignKey(
        GeneralFinding, on_delete=models.CASCADE, verbose_name="General Finding"
    )

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        self.category = self.general_finding.category
        self.finding_id = (
            str(self.category.cat_id)
            + "-"
            + str(self.general_finding.general_finding_id)
            + "-"
            + str(self.specific_finding_id)
        )
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Specific Findings'
        ordering = ['name']


class UploadedFinding(abstract_models.TimeStampedModel):

    ASSESSMENT_TYPE_CHOICES = (
        ('External/Internal', 'External/Internal'),
        ('External', 'External'),
        ('Internal', 'Internal'),
    )

    MITIGATION_CHOICES = ((True, 'Yes'), (False, 'No'))

    finding = models.ForeignKey(
        BaseFinding,
        to_field='finding_id',
        on_delete=models.CASCADE,
        verbose_name='CISA Finding',
        default='Unspecified',
        help_text='What is the name of this Finding?',
    )

    uploaded_finding_name = models.CharField(max_length=50000)
    uploaded_finding_id = models.IntegerField(default=0)

    description = models.TextField(
        blank=False,
        verbose_name='Finding Description',
        help_text='Contains the description of this finding from the database. Edit the text below to clarify the description for this specific case.',
    )

    remediation = models.TextField(
        blank=False,
        verbose_name='Finding \n' + 'Remediation',
        help_text='Contains the standard \n'
        + 'remediation of this finding \n'
        + 'from the database. Edit the \n'
        + 'text below to clarify the \n'
        + 'remediation for this specific case',
    )

    timetable = models.TextField(blank=True, verbose_name='Recommendation Timetable')

    severity = models.ForeignKey(
        Severities,
        to_field='severity_name',
        max_length=14,
        on_delete=models.CASCADE,
        blank=False,
        default='Unspecified',
        help_text='If severity is different than \n'
        + 'default for this finding type, \n'
        + 'select below',
    )

    assessment_type = models.CharField(
        max_length=17,
        choices=ASSESSMENT_TYPE_CHOICES,
        blank=False,
        default='Unspecified',
        verbose_name='Assessment Type',
        help_text='What kind of assessment is this?',
    )

    mitigation = models.BooleanField(
        choices=MITIGATION_CHOICES,
        verbose_name='Mitigation',
        default=False,
        help_text='Was this finding mitigated within the assessment timeframe?',
    )

    affected_systems = models.ManyToManyField(
        AffectedSystems,
        verbose_name='Affected Systems',
        help_text='What affected system(s) does this finding relate to?',
        blank=True,
    )

    screenshot_description = models.TextField(
        blank=True, verbose_name='Screenshot Description'
    )

    KEV = models.ManyToManyField(
        KEV,
        verbose_name='Known Exploited Vulnerability',
        help_text='What KEV(s) pertain to this finding?',
        blank=True
    )

    magnitude = models.IntegerField(
        default=0,
        blank=True,
        null=True,
        verbose_name='Magnitude'
    )

    probability = models.IntegerField(
        default=0,
        blank=True,
        null=True,
        verbose_name='Probability'
    )

    risk_score = models.IntegerField(
        default=0,
        blank=True,
        null=True,
        verbose_name='Risk Score'
    )

    slug = models.SlugField(max_length=255, blank=True)

    objects = UploadedFindingsOrderManager()
    critical = CriticalManager()
    high = HighManager()
    medium = MediumManager()
    low = LowManager()

    informational = InformationalManager()
    internal_and_external = InternalAndExternalAssessmentManager()
    external = ExternalAssessmentManager()
    internal = InternalAssessmentManager()
    phishing = PhishingAssessmentManager()

    preferred_order = UploadedFindingsOrderManager()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.uploaded_finding_name)
        super().full_clean()
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("index")

    def __str__(self):
        return self.uploaded_finding_name

    class Meta:
        verbose_name_plural = 'Uploaded Findings'
