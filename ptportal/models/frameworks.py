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
from . import findings


class AttackFramework(abstract_models.TimeStampedModel):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    tactics = models.CharField(blank=True, max_length=200)
    mitigation = models.TextField(blank=True)
    examples = models.TextField(blank=True)
    url = models.CharField(max_length=60)
    is_subtechnique = models.BooleanField(default=False, blank=True, null=True)
    T_id = models.CharField(max_length=10)
    subtechnique_id = models.CharField(max_length=255, blank=True)
    used = models.BooleanField(default=False, blank=True)

    class Meta:
        verbose_name_plural = 'MITRE Attack Framework'
        ordering = ['T_id']

    def __str__(self):
        return self.name


class NISTControl(models.Model):
    NIST_ID = models.TextField(blank=True)
    name = models.TextField(blank=True)
    gen_findings = models.ManyToManyField(findings.GeneralFinding)
    spec_findings = models.ManyToManyField(findings.SpecificFinding)

    def __str__(self):
        return self.NIST_ID

    class Meta:
        verbose_name_plural = 'NIST Controls'


class NIST_CSF(models.Model):
    NIST_CSF_ID = models.CharField(max_length=10)
    name = models.TextField(blank=True)
    gen_findings = models.ManyToManyField(findings.GeneralFinding)
    spec_findings = models.ManyToManyField(findings.SpecificFinding)

    def __str__(self):
        return self.NIST_CSF_ID

    class Meta:
        verbose_name_plural = 'NIST CSF'


class CIS_CSC(models.Model):
    CIS_ID = models.IntegerField(default=0000, null=True, blank=True)
    name = models.TextField(blank=True)
    description = models.TextField(blank=True)
    gen_findings = models.ManyToManyField(findings.GeneralFinding)
    spec_findings = models.ManyToManyField(findings.SpecificFinding)

    def __str__(self):
        return str(self.CIS_ID)

    class Meta:
        verbose_name_plural = 'CIS CSC'
        ordering = ['CIS_ID']
