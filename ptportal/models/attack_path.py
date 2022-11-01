# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models
from django.dispatch import receiver
from django.template.defaultfilters import slugify
from . import abstract_models

import uuid
import os


def define_uploadpath(instance, filename):
    return f"screenshots/attackpath/{str(instance.figure_uuid) + '.' + filename.split('.')[-1]}"


class AttackPath(abstract_models.TimeStampedModel):
    chronology = models.IntegerField(default=0000)
    figure_description = models.CharField(max_length=150, blank=True)
    figure_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    image_upload = models.ImageField(upload_to=define_uploadpath, blank=True)

    class Meta:
        verbose_name_plural = 'Attack Paths'
        ordering = ('chronology', 'figure_description')

    def __str__(self):
        return "Attack Path " + str(self.chronology)


@receiver(models.signals.post_delete, sender=AttackPath)
def deleteImageFile(sender, instance, **kwargs):
    if instance.image_upload:
        if os.path.isfile(instance.image_upload.path):
            os.remove(instance.image_upload.path)
