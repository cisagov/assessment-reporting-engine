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


class DataExfil(abstract_models.TimeStampedModel):
    PROTOCOL_CHOICES = (
        ("HTTP", "HTTP"),
        ("HTTPS", "HTTPS"),
        ("FTP", "FTP"),
        ("SFTP", "SFTP"),
        ("ICMP", "ICMP"),
        ("SMB", "SMB"),
        ("DNS", "DNS"),
        ("SMTP", "SMTP"),
    )

    DETECTION_CHOICES = (("D", "Detected"), ("N", "Not Detected"))
    PREVENTION_CHOICES = (("B", "Blocked"), ("N", "Not Blocked"))

    order = models.IntegerField(unique=False)

    protocol = models.CharField(
        choices=PROTOCOL_CHOICES, max_length=5, default="HTTP", verbose_name="Protocol"
    )
    datatype = models.CharField(
        default="Social Security Numbers (10 MB)",
        max_length=100,
        verbose_name="Data Type",
    )
    # created_at = models.DateTimeField(auto_now_add=True)
    date_time = models.DateTimeField(verbose_name="Date Time", null=True, blank=True)
    detection = models.CharField(
        max_length=12, choices=DETECTION_CHOICES, default="D", verbose_name="Detection"
    )
    prevention = models.CharField(
        max_length=12, choices=PREVENTION_CHOICES, default="B", verbose_name="Prevention"
    )

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.protocol + ": " + self.datatype

    class Meta:
        verbose_name_plural = "Data Exfiltration"
