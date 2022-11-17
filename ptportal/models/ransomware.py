# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models
from django.template.defaultfilters import slugify
from django.urls import reverse
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from . import abstract_models


class Ransomware(abstract_models.TimeStampedModel):

    TRIGGER_CHOICES = (("Y", "Yes"), ("N", "No"))

    order = models.IntegerField(unique=False)

    disabled = models.IntegerField(unique=False)

    description = models.CharField(
        max_length=100, verbose_name="Description"
    )

    trigger = models.CharField(
        max_length=5, choices=TRIGGER_CHOICES, default="N", verbose_name="Action"
    )

    time_start = models.DateTimeField(verbose_name="Start Time", null=True, blank=True)
    time_end = models.DateTimeField(verbose_name="End Time", null=True, blank=True)

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.description

    class Meta:
        verbose_name_plural = "Ransomware Susceptibility"


class RansomwareScenarios(abstract_models.TimeStampedModel):

    vuln = models.IntegerField(unique=False)
    total = models.IntegerField(unique=False)

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return "Ransomware Scenarios"

    class Meta:
        verbose_name_plural = "Ransomware Scenarios"