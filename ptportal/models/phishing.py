# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import datetime

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.db.models import signals
from django.dispatch import receiver

from . import abstract_models
import uuid
import os


class Campaign(abstract_models.TimeStampedModel):

    emails_sent = models.PositiveIntegerField(
        default=0,
        blank=True,
        verbose_name="Emails Sent"
    )
    
    emails_delivered = models.PositiveIntegerField(
        default=0,
        blank=True,
        verbose_name="Emails Delivered"
    )

    total_clicks = models.PositiveIntegerField(
        default=0,
        blank=True,
        verbose_name="Total Clicks"
    )

    unique_clicks = models.PositiveIntegerField(
        default=0,
        blank=True,
        verbose_name="Unique Clicks"
    )

    click_rate = models.FloatField(
        default=0.0,
        blank=True,
        validators=[MinValueValidator(0.0), MaxValueValidator(1.0)],
        verbose_name="Click Rate (%)"
    )
    
    time_to_first_click = models.DurationField(
        default=datetime.time.min,
        blank=True,
        verbose_name="Time to First Click"
    )

    creds_harvested = models.PositiveIntegerField(
        default=0,
        blank=True,
        verbose_name="Credentials Harvested"
    )

    number_exploited = models.PositiveIntegerField(
        default=0,
        blank=True,
        verbose_name="Users Exploited"
    )

    length_of_campaign = models.PositiveIntegerField(
        default=0,
        blank=True,
        verbose_name="Length of Campaign (Days)"
    )

    campaign_description = models.TextField(
        blank=True,
        verbose_name='Campaign Description'
    )

    order = models.PositiveIntegerField(
        blank=True,
        default=1
    )
    

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return "Campaign " + str(self.order)

    class Meta:
        verbose_name_plural = "Phishing Campaign Results"
        ordering = ["order"]


class Payload(abstract_models.TimeStampedModel):
    RESULT_CHOICES = (("B", "Blocked"), ("N", "Not Blocked"))

    payload_description = models.CharField(
        max_length=500,
        verbose_name="Payload Description"
    )

    attack_name = models.CharField(
        blank=True,
        max_length=500,
        verbose_name="MITRE ATT&CK Format"
    )

    c2_protocol = models.CharField(
        blank=True,
        max_length=10,
        verbose_name="C2 Protocol"
    )

    host_protection = models.CharField(
        blank=True,
        max_length=12,
        choices=RESULT_CHOICES,
        default="B",
    )

    border_protection = models.CharField(
        blank=True,
        max_length=12,
        choices=RESULT_CHOICES,
        default="N",
    )

    command = models.CharField(
        blank=True,
        null=True,
        max_length=500,
    )

    code_type = models.CharField(
        blank=True,
        null=True,
        max_length=500,
    )

    techniques = models.CharField(
        blank=True,
        null=True,
        max_length=1000,
    )

    file_types = models.CharField(
        blank=True,
        null=True,
        max_length=500,
    )
    
    order = models.PositiveIntegerField(
        blank=True, 
        default=1
    )

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.payload_description + " (" + self.c2_protocol + ")" 

    class Meta:
        verbose_name_plural = "Payload Testing Results"
        ordering = ["order"]
