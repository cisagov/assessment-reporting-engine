# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.db import models
from django.template.defaultfilters import slugify
from django.urls import reverse
from . import abstract_models


def define_uploadpath(instance, filename):
    return f"screenshots/narrative/{instance.narrative.type}/{instance.narrative.name}/{instance.slug+'.'+instance.ext}"


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
        ordering = ['name']

    def __str__(self):
        return f"{self.name} Narrative"

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().full_clean()
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('narratives', args=[self.slug])


class Narrative(abstract_models.TimeStampedModel):
    type = models.ForeignKey(
        NarrativeType, null=True, blank=True, on_delete=models.SET_NULL
    )
    name = models.CharField(
        max_length=255, verbose_name="Name of Narrative Section", blank=False
    )
    slug = models.SlugField(max_length=255, blank=True)

    explanation = models.TextField(help_text="Explanation of Narrative", blank=True)
    tools = models.TextField(help_text="Tools Used", blank=True)
    tool_configuration = models.TextField(
        verbose_name="Tool Configuration", help_text="Tool Configuration", blank=True
    )
    tool_input_description = models.TextField(
        verbose_name="Tool Input Description",
        help_text="Description of how tool is configured and any necessary data inputs",
        blank=True,
    )
    tool_output_description = models.TextField(
        verbose_name="Tool Output Description",
        help_text="Description of tool output, such as how to interpret the results",
        blank=True,
    )
    tool_output = models.TextField(
        verbose_name="Formatted Tool Output",
        help_text="Paste terminal output into the box below",
        blank=True,
    )

    class Meta:
        ordering = ['type', 'name']

    def __str__(self):
        return f"{self.type}: {self.name}"

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().full_clean()
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('narrative_edit', [self.type.slug, self.slug])


class ToolScreenshot(models.Model):
    file = models.ImageField(upload_to=define_uploadpath)
    slug = models.SlugField(max_length=150, blank=True)
    ext = models.CharField(max_length=10, blank=True)
    caption = models.CharField(max_length=250, blank=True)
    narrative = models.ForeignKey(
        Narrative,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        verbose_name="Associated Narratives",
    )
    order = models.PositiveIntegerField(blank=True, default=1)

    class Meta:
        ordering = ['narrative', 'order']

    def __str__(self):
        return str(self.narrative.name) + ":\t\t" + str(self.file.name)

    def delete(self, *args, **kwargs):
        """delete -- Remove to leave file."""
        self.file.delete(True)
        super(ToolScreenshot, self).delete(*args, **kwargs)
