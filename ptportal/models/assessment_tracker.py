# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models
from . import abstract_models


class InfraTSFindings(abstract_models.TimeStampedModel):

    order = models.IntegerField(unique=False)
    teamserver_ip = models.CharField(max_length=15)
    linked_domain = models.CharField(max_length=50)
    beacon_kill_date = models.CharField(max_length=20)

    def __str__(self):
        return str(self.teamserver_ip) + " : " + str(self.linked_domain)

    class Meta:
        verbose_name_plural = 'Infrastructure (Teamservers)'
        ordering = ['order']


class InfraTS(models.Model):

    findings = models.ManyToManyField(InfraTSFindings)

    class Meta:
        verbose_name_plural = 'Infrastructure (Teamservers) Findings'


class InfraWSFindings(abstract_models.TimeStampedModel):

    OS_CHOICES = (('Kali', 'Kali'), ('Mac', 'Mac'), ('Windows', 'Windows'))

    order = models.IntegerField(unique=False)
    hostname = models.CharField(max_length=50)
    os = models.CharField(max_length=7, choices=OS_CHOICES, default="None")
    ip_address = models.CharField(max_length=15)
    assigned_to = models.CharField(max_length=50)

    def __str__(self):
        return str(self.hostname)

    class Meta:
        verbose_name_plural = 'Infrastructure (Workstations)'
        ordering = ['order']


class InfraWS(models.Model):

    findings = models.ManyToManyField(InfraWSFindings)

    class Meta:
        verbose_name_plural = 'Infrastructure (Workstations) Findings'


class LateralMovementFindings(abstract_models.TimeStampedModel):

    order = models.IntegerField(unique=False)
    initial_beacon = models.CharField(max_length=40)
    ip_address = models.CharField(max_length=15)
    hostname = models.CharField(max_length=100)
    account_used = models.CharField(max_length=100)
    host_moved_from = models.CharField(max_length=100)
    movement_method = models.CharField(max_length=100)
    callback_server = models.CharField(max_length=100)
    notes = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return str(self.ip_address) + " : " + str(self.hostname)

    class Meta:
        verbose_name_plural = 'Lateral Movement'
        ordering = ['order']


class LateralMovement(models.Model):

    findings = models.ManyToManyField(LateralMovementFindings)

    class Meta:
        verbose_name_plural = 'Lateral Movement Findings'


class PersistenceFindings(abstract_models.TimeStampedModel):

    order = models.IntegerField(unique=False)
    installation_time = models.CharField(max_length=40)
    machine_ip = models.CharField(max_length=15)
    machine_hostname = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    persistence_method = models.CharField(max_length=100)
    persistence_info = models.CharField(max_length=100)
    callback_server = models.CharField(max_length=100)
    removal_time = models.CharField(max_length=40)

    def __str__(self):
        return str(self.machine_ip) + " : " + str(self.machine_hostname)

    class Meta:
        verbose_name_plural = 'Persistence'
        ordering = ['order']


class Persistence(models.Model):

    findings = models.ManyToManyField(PersistenceFindings)

    class Meta:
        verbose_name_plural = 'Persistence Findings'


class FilesFindings(abstract_models.TimeStampedModel):

    DELETED_CHOICES = (('Y', 'Yes'), ('N', 'No'))

    order = models.IntegerField(unique=False)
    host = models.CharField(max_length=100)
    ip = models.CharField(max_length=15)
    location = models.CharField(max_length=200)
    filename = models.CharField(max_length=100)
    deleted = models.CharField(max_length=3, choices=DELETED_CHOICES)
    date = models.CharField(max_length=10)
    time_dropped_to_disk = models.CharField(max_length=20)
    time_deleted = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return str(self.filename)

    class Meta:
        verbose_name_plural = 'Files'
        ordering = ['order']


class Files(models.Model):

    findings = models.ManyToManyField(FilesFindings)

    class Meta:
        verbose_name_plural = 'Files Findings'


class InteractiveLogonsFindings(abstract_models.TimeStampedModel):

    order = models.IntegerField(unique=False)
    datetime = models.CharField(max_length=40)
    operator = models.CharField(max_length=50)
    host = models.CharField(max_length=100)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    access_ended = models.CharField(max_length=40)
    notes = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return str(self.operator) + " : " + str(self.host)

    class Meta:
        verbose_name_plural = 'Interactive Logons'
        ordering = ['order']


class InteractiveLogons(models.Model):

    findings = models.ManyToManyField(InteractiveLogonsFindings)

    class Meta:
        verbose_name_plural = 'Interactive Logons Findings'


class SignificantEventsFindings(abstract_models.TimeStampedModel):

    order = models.IntegerField(unique=False)
    event = models.CharField(max_length=100)
    notes = models.CharField(max_length=500, blank=True)
    datetime = models.CharField(max_length=40)

    def __str__(self):
        return str(self.event)

    class Meta:
        verbose_name_plural = 'Significant Events'
        ordering = ['order']


class SignificantEvents(models.Model):

    findings = models.ManyToManyField(SignificantEventsFindings)

    class Meta:
        verbose_name_plural = 'Significant Events Findings'


class ArtifactFindings(abstract_models.TimeStampedModel):

    order = models.IntegerField(unique=False)
    file_name = models.CharField(max_length=256, default="Temp", unique=False)
    file_content = models.TextField()
    md5 = models.CharField(max_length=128)
    sha1 = models.CharField(max_length=40)
    sha256 = models.CharField(max_length=256)

    def __str__(self):
        return self.file_name

    class Meta:
        verbose_name_plural = 'Artifacts'
        ordering = ['order']

    def delete(self, *args, **kwargs):
        self.file.delete(save=False)
        super(ArtifactFindings, self).delete(*args, **kwargs)


class Artifacts(models.Model):
    findings = models.ManyToManyField(ArtifactFindings)

    class Meta:
        verbose_name_plural = 'Artifact Findings'
