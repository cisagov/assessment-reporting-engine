# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
