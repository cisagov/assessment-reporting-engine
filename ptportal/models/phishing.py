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
        default=0, verbose_name="Number of Emails Sent"
    )
    unique_clicks = models.PositiveIntegerField(
        default=0, verbose_name="Number of Unique Clicks"
    )
    emails_delivered = models.PositiveIntegerField(
        default=0, verbose_name="Number of Emails Delivered"
    )
    click_rate = models.FloatField(
        default=0.0,
        blank=True,
        validators=[MinValueValidator(0.0), MaxValueValidator(1.0)],
        verbose_name="Click Rate %",
    )
    total_clicks = models.PositiveIntegerField(default=0, verbose_name="Total Clicks")
    time_to_first_click = models.DurationField(
        default=datetime.time.min, verbose_name="Time to First Click"
    )
    creds_harvested = models.PositiveIntegerField(
        default=0, verbose_name="Credentials Harvested"
    )
    number_exploited = models.PositiveIntegerField(
        default=0, verbose_name="Number of Users Exploited"
    )
    length_of_campaign = models.PositiveIntegerField(
        default=0, verbose_name="Length of Campaign (Days)"
    )
    order = models.PositiveIntegerField(blank=True, default=1)

    campaign_description = models.TextField(
        blank=True, verbose_name='Campaign Description'
    )

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return "Order: " + str(self.order) + " Campaign ID: " + str(self.id)

    class Meta:
        verbose_name_plural = "Spearphishing Campaigns"
        ordering = ["order"]


class Payload(abstract_models.TimeStampedModel):
    WEAKNESSES_CHOICES = ((True, 'Blocked'), (False, 'Not Blocked'))
    payload_description = models.TextField()
    c2_protocol = models.TextField(default="HTTPS")
    border_protection = models.BooleanField(
        blank=True,
        choices=WEAKNESSES_CHOICES,
        default=False,
    )
    host_protection = models.BooleanField(
        blank=True,
        choices=WEAKNESSES_CHOICES,
        default=True,
    )
    order = models.PositiveIntegerField(blank=True, default=1)

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return "Spearphishing Weaknesses"

    class Meta:
        verbose_name_plural = "Spearphishing Payloads"
        ordering = ["order"]
