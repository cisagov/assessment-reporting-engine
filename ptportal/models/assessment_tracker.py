# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models
from . import abstract_models


class InfraTS(abstract_models.TimeStampedModel):

    ASSESSMENT_CHOICES = (('External', 'External'), ('Internal', 'Internal'))

    order = models.IntegerField(default=1, blank=True)
    assessment_type = models.CharField(max_length=8, choices=ASSESSMENT_CHOICES, default="External")
    hostname = models.CharField(max_length=100, blank=True)
    ip = models.CharField(max_length=15, blank=True)
    domain = models.CharField(max_length=100, blank=True)
    kill_date = models.DateField(verbose_name="Beacon Kill Date", null=True, blank=True)

    def __str__(self):
        return str(self.ip) + ": " + str(self.hostname)

    class Meta:
        verbose_name_plural = 'Activity Tracker: Infrastructure (Teamservers)'
        ordering = ['order']


class InfraPhishing(abstract_models.TimeStampedModel):

    order = models.IntegerField(default=1, blank=True)
    hostname = models.CharField(max_length=100, blank=True)
    ip = models.CharField(max_length=15, blank=True)
    domain = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return str(self.ip) + ": " + str(self.hostname)

    class Meta:
        verbose_name_plural = 'Activity Tracker: Infrastructure (Phishing)'
        ordering = ['order']


class InfraRedirectors(abstract_models.TimeStampedModel):

    ASSESSMENT_CHOICES = (('External', 'External'), ('Internal', 'Internal'))

    order = models.IntegerField(default=1, blank=True)
    url = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return str(self.url)

    class Meta:
        verbose_name_plural = 'Activity Tracker: Infrastructure (Redirectors)'
        ordering = ['order']


class InfraWS(abstract_models.TimeStampedModel):

    OS_CHOICES = (('Kali', 'Kali'), ('macOS', 'macOS'), ('Windows', 'Windows'), ('Linux', 'Linux'), ('ESXi', 'ESXi'), ('Other', 'Other'))
    ASSESSMENT_CHOICES = (('External', 'External'), ('Internal', 'Internal'))

    order = models.IntegerField(default=1, blank=True)
    assessment_type = models.CharField(max_length=8, choices=ASSESSMENT_CHOICES, default="External")
    hostname = models.CharField(max_length=100, blank=True)
    ip = models.CharField(max_length=15, blank=True)
    os = models.CharField(max_length=20, choices=OS_CHOICES, default="None", blank=True)
    operator = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return str(self.ip) + ": " + str(self.hostname)

    class Meta:
        verbose_name_plural = 'Activity Tracker: Infrastructure (Workstations)'
        ordering = ['order']


class LateralMovement(abstract_models.TimeStampedModel):

    order = models.IntegerField(default=1, blank=True)
    initial_beacon = models.DateTimeField(verbose_name="Initial Beacon", null=True, blank=True)
    hostname = models.CharField(max_length=100, blank=True)
    ip = models.CharField(max_length=15, blank=True)
    account = models.CharField(max_length=100, blank=True)
    host_moved_from = models.CharField(max_length=100, blank=True)
    method = models.CharField(max_length=200, blank=True)
    callback_server = models.CharField(max_length=100, blank=True)
    notes = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return str(self.ip) + ": " + str(self.hostname)

    class Meta:
        verbose_name_plural = 'Activity Tracker: Lateral Movement'
        ordering = ['order']


class Files(abstract_models.TimeStampedModel):

    DELETED_CHOICES = (('D', 'Deleted'), ('N', 'Not Deleted'))

    order = models.IntegerField(default=1, blank=True)
    hostname = models.CharField(max_length=100, blank=True)
    ip = models.CharField(max_length=15, blank=True)
    location = models.CharField(max_length=500, blank=True)
    filename = models.CharField(max_length=200, blank=True)
    status = models.CharField(max_length=12, choices=DELETED_CHOICES, blank=True)
    created = models.DateTimeField(verbose_name="Date/Time Created", null=True, blank=True)
    deleted = models.DateTimeField(verbose_name="Date/Time Deleted", null=True, blank=True)

    def __str__(self):
        return str(self.ip) + ": " + str(self.filename)

    class Meta:
        verbose_name_plural = 'Activity Tracker: Files'
        ordering = ['order']


class InteractiveLogons(abstract_models.TimeStampedModel):

    order = models.IntegerField(default=1, blank=True)
    hostname = models.CharField(max_length=100, blank=True)
    ip = models.CharField(max_length=15, blank=True)
    account = models.CharField(max_length=100, blank=True)
    method = models.CharField(max_length=200, blank=True)
    logon = models.DateTimeField(verbose_name="Logon Date/Time", null=True, blank=True)
    logoff = models.DateTimeField(verbose_name="Logoff Date/Time", null=True, blank=True)
    operator = models.CharField(max_length=50, blank=True)
    notes = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return str(self.account) + "@" + str(self.ip) + ": " + str(self.logon)

    class Meta:
        verbose_name_plural = 'Activity Tracker: Interactive Logons'
        ordering = ['order']


class HighImpactScans(abstract_models.TimeStampedModel):

    order = models.IntegerField(default=1, blank=True)
    scan_type = models.CharField(max_length=200, blank=True)
    tool = models.CharField(max_length=100, blank=True)
    ranges = models.CharField(max_length=1000, blank=True)
    domains = models.CharField(max_length=500, blank=True)
    start = models.DateTimeField(verbose_name="Scan Start Time", null=True, blank=True)
    end = models.DateTimeField(verbose_name="Scan End Time", null=True, blank=True)
    notes = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return str(self.scan_type) + " w/ " + str(self.tool) + " @" + str(self.start)

    class Meta:
        verbose_name_plural = 'Activity Tracker: High Impact Scans'
        ordering = ['order']


class SignificantEvents(abstract_models.TimeStampedModel):

    order = models.IntegerField(default=1, blank=True)
    event = models.CharField(max_length=500, blank=True)
    notes = models.CharField(max_length=1000, blank=True)
    start = models.DateTimeField(verbose_name="Event Start Time", null=True, blank=True)
    end = models.DateTimeField(verbose_name="Event End Time", null=True, blank=True)

    def __str__(self):
        return str(self.event)

    class Meta:
        verbose_name_plural = 'Activity Tracker: Significant Events'
        ordering = ['order']


class Artifact(abstract_models.TimeStampedModel):

    order = models.IntegerField(unique=False)
    file_name = models.CharField(max_length=256, default="Temp", unique=False)
    description = models.CharField(max_length=500)
    md5 = models.CharField(max_length=32)
    sha1 = models.CharField(max_length=40)
    sha256 = models.CharField(max_length=64)

    def __str__(self):
        return self.file_name

    class Meta:
        verbose_name_plural = 'Activity Tracker: Artifacts'
        ordering = ['order']
