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

import datetime

from . import abstract_models


class SensitiveDataExfil(abstract_models.TimeStampedModel):
    PROTOCOL_CHOICES = (
        ("HTTP", "HTTP"),
        ("HTTPS", "HTTPS"),
        ("FTP", "FTP"),
        ("ICMP", "ICMP"),
        ("SMB", "SMB"),
        ("DNS", "DNS"),
        ("SMTP", "SMTP"),
    )
    RESULT_CHOICES = (("B", "Blocked"), ("N", "Not Blocked"))
    protocol = models.CharField(
        choices=PROTOCOL_CHOICES, max_length=5, default="HTTP", verbose_name="Protocol"
    )
    datatype = models.CharField(
        default="Social Security Numbers (10MB)",
        max_length=55,
        verbose_name="Data Type",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    date_time = models.DateTimeField(verbose_name="Date Time", null=True, blank=True)
    result = models.CharField(
        max_length=12, choices=RESULT_CHOICES, default="B", verbose_name="Result"
    )

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return "Sensitive Data Exfiltration"

    class Meta:
        verbose_name_plural = "Sensitive Data Exfiltration"
