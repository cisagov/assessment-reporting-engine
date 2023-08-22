# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.core.management import BaseCommand
from ptportal.models import Report


class Command(BaseCommand):
    help = 'Set Application Report Type'
    args = '--type [RVA/FAST/RPT/HVA]'

    def add_arguments(self, parser):
        super(Command, self).add_arguments(parser)
        parser.add_argument(
            '--type',
            action='store',
            dest='report_type',
            help='Set report type',
            required=True,
            choices=['RPT', 'FAST', 'RVA', 'HVA'],
            type=str.upper,
        )

    def handle(self, *args, **options):
        report = Report.object()
        if not report:
            report = Report.objects.create(report_type=options.get('report_type'))
        report.save()
