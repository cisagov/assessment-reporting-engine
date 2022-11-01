# -*- coding: utf-8 -*-
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011


class Tool(object):
    def __init__(self, name, attributes):
        self.name = name
        self.technique_mapping = ({},)
        self.kill = False

        if attributes["techniques"]:
            self.techniques = attributes["techniques"]
        else:
            self.techniques = []

        if attributes["aliases"]:
            self.aliases = attributes["aliases"]
        else:
            self.aliases = []
