# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.db import models

from . import abstract_models


class PortMappingHost(abstract_models.TimeStampedModel):

    ip = models.CharField(max_length=15)
    hostname = models.CharField(max_length=500, blank=True)
    ports = models.CharField(max_length=500, blank=True)
    services = models.CharField(max_length=500, blank=True)
    order = models.IntegerField(unique=False)

    def __str__(self):
        return str(self.ip)

    class Meta:
        verbose_name_plural = 'Port Mapping Host'
        ordering = ['order']
