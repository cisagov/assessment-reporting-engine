# -*- coding: utf-8 -*-
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from .subtechnique import SubTechnique


class Technique(object):
    def __init__(self, id, data):
        """Holds Information About a Technique"""
        self.id = str(id)
        self.name = data["Name"]
        self.sub_techniques = []
        self.tactics = {}

        "Links Sub-Techniques"
        if data["Sub"]:
            for id, name in data["Sub"].items():
                temp = SubTechnique(id, name)
                self.sub_techniques.append(temp)

    def linkTactics(self, tactics):
        """Links Technique to All Associated Tactics"""
        for tactic_name, tactic in tactics.items():
            for tech_id, technique in tactic.techniques.items():
                if tech_id == self.id:
                    self.tactics[tactic_name] = tactic
