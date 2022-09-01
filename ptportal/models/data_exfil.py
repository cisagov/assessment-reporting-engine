# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
