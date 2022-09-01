# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
