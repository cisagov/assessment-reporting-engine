# -*- coding: utf-8 -*-

from ..models.assessment import Assessment
from ..models.codetype import CodeType
from ..models.command import Command
from ..models.filetype import FileType
from ..models.obfuscation import Obfuscation
from ..models.payload import Payload
from ..models.tactic import Tactic
from ..models.tool import Tool
from .report import Report
from .search import Search
import json
import sys
import os


class Parser(object):
    def __init__(self, finding_entries, payload_entries):
        """Declaring Parser Properties"""
        self.finding_entries = finding_entries
        self.payload_entries = payload_entries
        self.mapping_data_dir = "/code/ptportal/views/" + "payload_mapping/lib/data/"

        # construct attribs
        self.assessment_map = {}
        self.mitre_map = {}
        self.tools = {}
        self.tactics = {}
        self.techniques = {}
        self.technique_map = {}
        self.codetypes = {}
        self.commands = {}
        self.filetypes = {}
        self.obfuscations = {}
        self.payloads = []
        self.assessment = None

        # initialize attribs
        self.init_assessment_map()
        self.init_mitre_map()
        self.init_tools()
        self.init_tactics()
        self.init_technique_map()
        self.link_techniques_to_tactics()
        self.init_code_types()
        self.init_commands()
        self.init_file_types()
        self.init_obfuscations()
        self.init_payloads()
        self.init_assessment_meta()

        Search(self).execute_search_on_normal()
        self.build_payload_technique_map()
        self.report = Report(self)
        self.report.execute_normal_report()

    def build_payload_technique_map(self):
        """Instructs Payloads to Build Technique Map"""
        for payload in self.payloads:
            if payload.techniques:
                payload.construct_payload_to_technique_map(self.technique_map)

    def init_assessment_meta(self):
        """Initialize Assessment Instance"""
        self.assessment = Assessment(self.payloads[0].asmt_id)
        self.assessment.fiscal_year = self.finding_entries[0]["fy"]
        self.assessment.set_phishing_assessment_date(
            self.finding_entries[0]["Date Generated"]
        )

    def init_mitre_map(self):
        """Loads the Mitre Attack Map"""
        self.mitre_map = json.loads(
            open(self.mapping_data_dir + "mitre-techniques.json").read()
        )

    def init_assessment_map(self):
        """Loads the Assessment Tool Map"""
        self.assessment_map = json.loads(
            open(self.mapping_data_dir + "assessment-tool-map.json").read()
        )

    def init_code_types(self):
        """Creates Code Type Objects"""
        for code_name, code_properties in self.assessment_map["code_types"].items():
            code_type_instance = CodeType(code_name, code_properties)
            self.codetypes[code_name] = code_type_instance

    def init_commands(self):
        """Creates Command Instances"""
        for command_name, command_properties in self.assessment_map["commands"].items():
            command_instance = Command(command_name, command_properties)
            self.commands[command_name] = command_instance

    def init_file_types(self):
        """Creates File Types"""
        for file_type_name, file_type_properties in self.assessment_map[
            "filetypes"
        ].items():
            file_type_instance = FileType(file_type_name, file_type_properties)
            self.filetypes[file_type_name] = file_type_instance

    def init_obfuscations(self):
        """Creates Obfuscations"""
        for obfuscation_name, obfuscation_properties in self.assessment_map[
            "obfuscations"
        ].items():
            obfuscation_instance = Obfuscation(obfuscation_name, obfuscation_properties)
            self.obfuscations[obfuscation_name] = obfuscation_instance

    def init_payloads(self):
        """Create Payloads"""
        for entry in self.payload_entries:
            payload_instance = Payload(entry)
            self.payloads.append(payload_instance)

    def init_tools(self):
        """Creates Tool Instances"""
        for tool_name, tool_properties in self.assessment_map["tools"].items():
            tool_instance = Tool(tool_name, tool_properties)
            self.tools[tool_instance.name] = tool_instance

    def link_techniques_to_tactics(self):
        """Links Techniques to Tactics"""
        for technique_id, technique in self.technique_map.items():
            technique.linkTactics(self.tactics)

    def init_tactics(self):
        """Creates Tactics"""
        for tactic_name, tactic_data in self.mitre_map.items():
            tactic_instance = Tactic(tactic_name, tactic_data)
            self.tactics[tactic_name] = tactic_instance

    def init_technique_map(self):
        """Technique to Tactic Mapping"""
        for tactic_name, tactic in self.tactics.items():
            for technique_id, technique in tactic.techniques.items():
                if technique_id not in self.technique_map:
                    self.technique_map[technique_id] = technique
