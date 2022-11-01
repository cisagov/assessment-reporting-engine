# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import argparse
import pandas as pd

from django.core.management import BaseCommand

from ptportal.models import AttackFramework


# loads the Attack_framework model by passing in a tab separated filename
# 'python manage.py attack_framework attack.csv'
class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('filename', nargs='?', type=argparse.FileType('r'))

    def handle(self, *args, **options):
        AttackFramework.objects.all().delete()

        df = pd.read_csv(options['filename'], sep=None, engine='python')
        row_iter = df.iterrows()

        objects = [
            AttackFramework(
                T_id=row['Technique ID'],
                subtechnique_id=row['Subtechnique ID'],
                name=row['Name'],
                description=row['Description'],
                tactics=row['Tactics'],
                mitigation=row['Mitigation'],
                url=row['URL'],
                is_subtechnique=row['Subtechnique'],
            )
            for index, row in row_iter
        ]

        AttackFramework.objects.bulk_create(objects)
