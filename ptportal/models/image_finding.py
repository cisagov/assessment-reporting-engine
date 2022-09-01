# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
