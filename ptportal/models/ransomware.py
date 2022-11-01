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
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType

import datetime

from . import abstract_models


class Ransomware(abstract_models.TimeStampedModel):
    created_at = models.DateTimeField(auto_now_add=True)

    wormable_machines = models.PositiveIntegerField(
        default=0, verbose_name="Wormable Machines", blank=True, null=True
    )

    wormable_HVAs = models.PositiveIntegerField(
        default=0, verbose_name="Wormable High Value Assets", blank=True, null=True
    )

    network_susc = models.FloatField(
        default=0,
        blank=True,
        verbose_name="Network Susceptibility %",
        validators=[MinValueValidator(0.00), MaxValueValidator(100)],
        null=True,
    )

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return "Ransomware"

    class Meta:
        verbose_name_plural = "Ransomware"
