# -*- coding: utf-8 -*-

import re


class Payload(object):
    def __init__(self, data, asmt_id=None):
        """JSON Related Fields"""
        if asmt_id:
            self.asmt_id = asmt_id
        else:
            self.asmt_id = data["asmt_id"]

        self.payload_description = data["payload_description"]
        self.c2_protocol = data["c2_protocol "]
        self.border_protection = data["border_protection"]
        self.host_protection = data["host_protection"]
        self.command = None
        self.tool_used = False

        """ Extraction Fields """
        self.filetype = None
        self.codetype = None
        self.techniques = []
        self.filename = None
        self.technique_mapping = {}

    def concatenation(self):
        """Concatenates All Attributes to Generate Long Filename"""
        longname = ""
        longname += self.filetype.upper() + "-"

        if self.codetype:
            longname += self.codetype + "-"

        for i in range(len(self.techniques)):
            if i == (len(self.techniques) - 1):
                longname += str(self.techniques[i])
            else:
                longname += str(self.techniques[i]) + "-"

        self.filename = longname
        # print(self.payload_description)
        # print(self.techniques)
        # print(self.filename)

    def build_demo_1(self, technique_map):
        """Build Technique Map with Captured Techniques"""

        for technique in self.techniques:
            """Break Down Sub Technique"""
            if "." in str(technique):
                tech, sub = str(technique).split(".")
                if tech in technique_map:
                    for sub_tech in technique_map[tech].sub_techniques:
                        if tech not in self.technique_mapping:
                            self.technique_mapping[technique_map[tech].id] = {}
                            self.technique_mapping[technique_map[tech].id][
                                "name"
                            ] = technique_map[tech].name
                            if (
                                "sub_techniques"
                                not in self.technique_mapping[technique_map[tech].id]
                            ):
                                self.technique_mapping[technique_map[tech].id][
                                    "sub_techniques"
                                ] = {}

                        if re.match(str(sub), str(sub_tech.id)):
                            self.technique_mapping[technique_map[tech].id][
                                "sub_techniques"
                            ][sub_tech.id] = sub_tech.name

                    if "tactics" not in self.technique_mapping[technique_map[tech].id]:
                        self.technique_mapping[technique_map[tech].id]["tactics"] = {}

                    for tactic_name, tactic in technique_map[tech].tactics.items():
                        self.technique_mapping[technique_map[tech].id]["tactics"][
                            tactic.id
                        ] = tactic_name
            else:
                if technique in technique_map:
                    if technique not in self.technique_mapping:
                        self.technique_mapping[technique_map[technique].id] = {}
                        self.technique_mapping[technique_map[technique].id][
                            "name"
                        ] = technique_map[technique].name

                    if (
                        "tactics"
                        not in self.technique_mapping[technique_map[technique].id]
                    ):
                        self.technique_mapping[technique_map[technique].id][
                            "tactics"
                        ] = {}

                    for tactic_name, tactic in technique_map[technique].tactics.items():
                        self.technique_mapping[technique_map[technique].id]["tactics"][
                            tactic.id
                        ] = tactic_name

    def construct_payload_to_technique_map(self, technique_map):
        """Build Technique Map with Captured Techniques"""

        for technique in self.techniques:
            """Break Down Sub Technique"""
            if "." in str(technique):
                tech, sub = str(technique).split(".")
                if tech in technique_map:

                    for sub_tech in technique_map[tech].sub_techniques:
                        if tech + "." + sub not in self.technique_mapping:
                            self.technique_mapping[
                                technique_map[tech].id + "." + sub
                            ] = {}

                        if re.match(str(sub), str(sub_tech.id)):
                            self.technique_mapping[technique_map[tech].id + "." + sub][
                                "name"
                            ] = sub_tech.name

                    if (
                        "tactics"
                        not in self.technique_mapping[
                            technique_map[tech].id + "." + sub
                        ]
                    ):
                        self.technique_mapping[technique_map[tech].id + "." + sub][
                            "tactics"
                        ] = {}

                    for tactic_name, tactic in technique_map[tech].tactics.items():
                        self.technique_mapping[technique_map[tech].id + "." + sub][
                            "tactics"
                        ][tactic.id] = tactic_name
            else:
                if str(technique) in technique_map:
                    if str(technique) not in self.technique_mapping:
                        self.technique_mapping[technique_map[str(technique)].id] = {}
                        self.technique_mapping[technique_map[str(technique)].id][
                            "name"
                        ] = technique_map[str(technique)].name

                    if (
                        "tactics"
                        not in self.technique_mapping[technique_map[str(technique)].id]
                    ):
                        self.technique_mapping[technique_map[str(technique)].id][
                            "tactics"
                        ] = {}

                    for tactic_name, tactic in technique_map[
                        str(technique)
                    ].tactics.items():
                        self.technique_mapping[technique_map[str(technique)].id][
                            "tactics"
                        ][tactic.id] = tactic_name
