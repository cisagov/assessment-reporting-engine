# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.core.exceptions import ObjectDoesNotExist
from django.conf import settings

from .models import EngagementMeta, UploadedFinding, Report


def asmt_id(request):
    engagement = EngagementMeta.object()
    if engagement:
        asmt_id = engagement.asmt_id
    else:
        asmt_id = ''
    return {'asmt_id': asmt_id}


def report_type(request):
    report = Report.object()
    report_type = report.report_type if report else ""
    return {'report_type': report_type}


def version_number(request):
    return {'version_number': settings.VERSION_NUMBER}
