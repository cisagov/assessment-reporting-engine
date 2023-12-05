# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.db import models

from . import abstract_models
from . import engagement, findings
from hashlib import sha256

REPORT_TYPE_CHOICES = (('RVA', 'RVA'), ('FAST', 'FAST'), ('RPT', 'RPT'), ('HVA', 'HVA'))
EXCEPTION_CHOICES = (("was", "was"), ("was not", "was not"))


class Report(abstract_models.TimeStampedModel):
    report_type = models.CharField(max_length=4, choices=REPORT_TYPE_CHOICES)
    significant_findings = models.TextField(blank=True)
    recommendations = models.TextField(blank=True)
    observed_strengths = models.TextField(blank=True)
    users_targeted = models.IntegerField(blank=True, null=True)
    external_scanned = models.IntegerField(blank=True, null=True)
    external_discovered = models.IntegerField(blank=True, null=True)
    internal_scanned = models.IntegerField(blank=True, null=True)
    internal_discovered = models.IntegerField(blank=True, null=True)
    password_analysis = models.TextField(blank=True)

    exception = models.CharField(
        blank=True,
        max_length=7,
        choices=EXCEPTION_CHOICES,
    )

    browser = models.CharField(
        blank=True,
        max_length=100,
    )

    payload_testing_date = models.DateField(verbose_name="Payload Testing Date", null=True, blank=True)
    phishing_campaign_date = models.DateField(verbose_name="Phishing Campaign Date", null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Report'

    @classmethod
    def object(cls):
        return (
            cls._default_manager.all().first()
        )  # since there is only one report object

    def __str__(self):
        return "Report"

    def save(self, *args, **kwargs):
        super().full_clean()
        super().save(*args, **kwargs)


class Acronym(models.Model):
    found_choices = [('M', 'Manual'), ('A', 'Auto')]

    acronym = models.CharField(max_length=14, null=False, blank=False)
    definition = models.CharField(max_length=254, blank=True, null=False)
    context = models.TextField(blank=True)
    auto_found = models.CharField(
        blank=True, choices=found_choices, max_length=1, default="M"
    )
    include = models.BooleanField(default=False)
    belongs_to_report = models.ForeignKey(Report, null=True, on_delete=models.CASCADE)
    original_hash = models.CharField(max_length=256, blank=True)

    def save(self, *args, **kwargs):
        super().save()
        if self.original_hash == "":
            hashValue = sha256(
                str.encode(self.acronym)
                + str.encode(self.definition)
                + str.encode(self.context)
            ).hexdigest()
            self.original_hash = hashValue
            self.save()

    class Meta:
        verbose_name_plural = 'Acronyms'

    def __str__(self):
        return self.acronym + " " + self.definition