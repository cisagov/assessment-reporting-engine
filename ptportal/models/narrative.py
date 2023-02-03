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
from . import abstract_models
import uuid


def define_uploadpath(instance, filename):
    return f"screenshots/narrative/{instance.narrative.slug}/{str(instance.uuid) + '.' + filename.split('.')[-1]}"


class NarrativeType(models.Model):
    NARRATIVE_TYPE_CHOICES = (
        ('External', "External"),
        ('Internal', "Internal"),
        ('Phishing', "Phishing"),
    )
    name = models.CharField(
        max_length=255,
        choices=NARRATIVE_TYPE_CHOICES,
        blank=False,
        verbose_name="Narrative Type",
    )
    slug = models.SlugField(max_length=255, blank=True)

    class Meta:
        verbose_name_plural = 'Narrative Types'
        ordering = ['name']

    def __str__(self):
        return f"{self.name} Narrative"

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().full_clean()
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('narratives', args=[self.slug])


class Tools(models.Model):
    name = models.CharField(max_length=150, blank=True)
    url = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().full_clean()
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'Tools'
        ordering = ['name']


class ATTACK(models.Model):
    t_id = models.CharField(verbose_name="MITRE ATT&CK Technique ID", max_length=8, unique=True)
    name = models.CharField(verbose_name="MITRE ATT&CK Technique Name", max_length=200, unique=True)
    tactics = models. CharField(verbose_name="MITRE ATT&CK Tactic(s)", max_length=200)
    description = models.TextField(verbose_name="MITRE ATT&CK Technique Description", max_length=4000, blank=True)
    url = models.CharField(verbose_name="MITRE ATT&CK Technique URL", max_length=100, blank=True)

    def __str__(self):
        return f"{self.t_id}: {self.name}"

    class Meta:
        verbose_name_plural = 'ATT&CK Techniques'


class Narrative(abstract_models.TimeStampedModel):
    assessment_type = models.ForeignKey(
        NarrativeType, null=True, blank=True, on_delete=models.SET_NULL
    )

    name = models.CharField(
        max_length=255, verbose_name="Name of Narrative Section", blank=False
    )

    slug = models.SlugField(max_length=255, blank=True)
    
    tools = models.ManyToManyField(
        Tools,
        verbose_name='Tools',
        help_text='What tools were used for this attack path?',
        blank=True,
    )

    attack = models.ManyToManyField(
        ATTACK,
        verbose_name='MITRE ATT&CK Technique',
        blank=True
    )
    
    class Meta:
        ordering = ['assessment_type', 'name']

    def __str__(self):
        return f"{self.assessment_type}: {self.name}"

    def save(self, *args, **kwargs):
        self.slug = '-'.join((slugify(self.assessment_type), slugify(self.name)))
        super().full_clean()
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('narrative_edit', [self.assessment_type.slug, self.slug])


class NarrativeScreenshot(models.Model):
    file = models.ImageField(upload_to=define_uploadpath, blank=True)
    caption = models.CharField(max_length=250, blank=True)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    narrative = models.ForeignKey(
        Narrative,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Associated Narrative",
    )
    order = models.PositiveIntegerField(blank=True, default=1)

    class Meta:
        verbose_name_plural = 'Narrative Screenshots'
        ordering = ['narrative', 'order']

    def __str__(self):
        return str(self.narrative.name) + ":\t\t" + str(self.file.name)

    def delete(self, *args, **kwargs):
        self.file.delete(True)
        super(NarrativeScreenshot, self).delete(*args, **kwargs)
