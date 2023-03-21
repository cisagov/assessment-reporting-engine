# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models

from . import abstract_models
from . import findings


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
    findings = models.ManyToManyField(findings.BaseFinding)
    finding_ids = models.TextField(blank=True)

    def __str__(self):
        return str(self.CIS_ID)

    class Meta:
        verbose_name_plural = 'CIS CSC'
        ordering = ['CIS_ID']
