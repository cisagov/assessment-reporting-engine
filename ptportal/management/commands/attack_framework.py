# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
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
