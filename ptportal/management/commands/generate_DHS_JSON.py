# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
