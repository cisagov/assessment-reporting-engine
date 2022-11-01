# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models
from django.urls import reverse

from . import findings


def define_uploadpath(instance, filename):
    return f"screenshots/{instance.belongs_to_finding.slug}/{instance.slug+'.'+instance.ext}"


class ImageFinding(models.Model):
    file = models.ImageField(upload_to=define_uploadpath)
    slug = models.SlugField(max_length=255, blank=True)
    ext = models.CharField(max_length=10, blank=True)
    caption = models.CharField(max_length=250, blank=True)
    belongs_to_finding = models.ForeignKey(
        findings.UploadedFinding, null=True, on_delete=models.CASCADE
    )
    order = models.PositiveIntegerField(blank=True, default=1)

    def __str__(self):
        return (
            str(self.belongs_to_finding.uploaded_finding_name)
            + ":\t\t"
            + str(self.file.name)
        )

    def get_absolute_url(self):
        return reverse(
            'finding_image_detail',
            [
                self.slug,
            ],
        )

    def delete(self, *args, **kwargs):
        """delete -- Remove to leave file."""
        self.file.delete(True)
        super(ImageFinding, self).delete(*args, **kwargs)

    class Meta:
        ordering = ['belongs_to_finding', 'order']
