# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import shutil

from django.core.management.base import BaseCommand
from ptportal.models import EngagementMeta
from ptportal.views.utils import generateEntryJson, gen_ptp_filename


class Command(BaseCommand):
    help = 'generate DHS JSON into folder path'

    def add_arguments(self, parser):
        parser.add_argument(
            'path',
            action='store',
            help='path to store DHS JSON',
        )

    def handle(self, *args, **options):
        try:
            engagement_obj = EngagementMeta.objects.all()[:1].get()
        except EngagementMeta.DoesNotExist:
            print('Engagement data was not entered.')
        except Exception as e:
            print('Exception Handler: ', e)
        rva_id = engagement_obj.asmt_id
        dhs_json_file = gen_ptp_filename(prefix=f'RVA{rva_id}-data', ext='json')
        generateEntryJson(dhs_json_file)
        shutil.move(dhs_json_file, options['path'])
