# -*- coding: utf-8 -*-
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import datetime


class Assessment(object):
    def __init__(self, id):
        """Model for Assessment Information"""
        self.asmt_id = id
        self.phishing_assessment_date = None
        self.date_generated = (
            str(datetime.datetime.today().month)
            + "/"
            + str(datetime.datetime.today().day)
            + "/"
            + str(datetime.datetime.today().year)
        )
        self.security_solutions = {}
        self.fiscal_year = None

    def GatherSolutions(self):
        """Gathers the Solutions Name"""
        output = []

        for id, properties in self.security_solutions.items():
            if properties.name not in output:
                output.append(properties.name)

        return output

    def set_phishing_assessment_date(self, date, mapped=False):
        """Configures the Phishing Assessment Date"""
        if not mapped:
            today = datetime.datetime.today()
            full_date = date.split('/')
            year = str(today.year)[0] + str(today.year)[1] + str(full_date[2])
            date = '%s/%s/%s' % (full_date[0], full_date[1], year)

        format = '%m/%d/%Y'
        self.phishing_assessment_date = datetime.datetime.strptime(date, format).date()

    def output_phishing_date(self):
        """Configures Date for Reporting"""
        return "%s/%s/%s" % (
            str(self.phishing_assessment_date.month),
            str(self.phishing_assessment_date.day),
            str(self.phishing_assessment_date.year),
        )
