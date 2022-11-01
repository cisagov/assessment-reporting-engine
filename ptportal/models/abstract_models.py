# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


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


class Finding(TimeStampedModel):
    SEVERITY_CHOICES = (
        ('Critical', 'Critical'),
        ('High', 'High'),
        ('Medium', 'Medium'),
        ('Low', 'Low'),
        ('Informational', 'Informational'),
        ('TBD', 'TBD'),
    )
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    remediation = models.TextField(blank=True)
    slug = models.SlugField()

    objects = models.Manager()
    critical = CriticalManager()
    high = HighManager()
    medium = MediumManager()
    low = LowManager()
    informational = InformationalManager()

    class Meta:
        abstract = True
