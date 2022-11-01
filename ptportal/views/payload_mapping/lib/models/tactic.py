# -*- coding: utf-8 -*-
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from .technique import Technique


class Tactic(object):
    def __init__(self, tactic_name, data):
        """Holds Information Regarding Mitre Tactics"""
        self.name = tactic_name
        self.id = data["ID"]
        self.total = data["Total"]
        self.techniques = {}

        """ Links to Techniques """
        if data["Techniques"]:
            for tech_id, tech_meta in data["Techniques"].items():
                temp = Technique(tech_id, tech_meta)
                self.techniques[temp.id] = temp
