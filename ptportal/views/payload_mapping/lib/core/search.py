# -*- coding: utf-8 -*-
import re


class Search(object):
    """Searches Objects"""

    def __init__(self, parser):
        """For Each Payload Search For Every Instance Function"""
        self.parser = parser

    def execute_search_on_normal(self):
        """Performs the Search on Unmodified JSON File"""
        for payload in self.parser.payloads:
            self.init_tool_search(payload)
            self.init_obfuscation_search(payload)
            self.init_file_type_search(payload)
            self.init_command_search(payload)
            payload.concatenation()

    def execute_search_on_mapped(self):
        """Performs Search and Readjustments on already Mapped JSON Files"""
        pass

    def init_tool_search(self, payload):
        """Search for Every Possible Tool"""
        tool_list = []

        for tool_name, tool_instance in self.parser.tools.items():
            if not re.search(
                r'%s\b' % tool_name, payload.payload_description, re.IGNORECASE
            ):
                if tool_instance.aliases:
                    for aliase in tool_instance.aliases:
                        if re.search(
                            r'%s\b' % aliase, payload.payload_description, re.IGNORECASE
                        ):
                            payload.tool_used = True
                            tool_list.append(tool_instance)
                            break
            elif re.search(
                r'%s\b' % tool_name, payload.payload_description, re.IGNORECASE
            ):
                payload.tool_used = True
                tool_list.append(tool_instance)

        """ Search For Tools within Tools e.g (Macro -> MacroMe) """
        if len(tool_list) >= 2:
            updated_tool_list = []
            for tool in tool_list:
                for i in range(len(tool_list)):
                    if tool.name == tool_list[i].name:
                        continue
                    elif re.search(tool.name, tool_list[i].name, re.IGNORECASE):
                        tool.kill = True

            for tool in tool_list:
                if tool.kill:
                    continue
                else:
                    updated_tool_list.append(tool)

                """ Reset Value """
                tool.kill = False
                tool_list = updated_tool_list

        for tool in tool_list:
            for technique in tool.techniques:
                if technique not in payload.techniques:
                    payload.techniques.append(technique)

    def init_obfuscation_search(self, payload):
        """Searches for Obfuscation Instances"""
        for obfuscation_name, obfuscation_instance in self.parser.obfuscations.items():
            if not re.search(
                r'%s\b' % obfuscation_name, payload.payload_description, re.IGNORECASE
            ):
                if obfuscation_instance.aliases:
                    for aliase in obfuscation_instance.aliases:
                        if re.search(
                            r'%s\b' % aliase, payload.payload_description, re.IGNORECASE
                        ):
                            for technique in obfuscation_instance.techniques:
                                if technique not in payload.techniques:
                                    payload.techniques.append(technique)
                            break

            elif re.search(
                r'%s\b' % obfuscation_name, payload.payload_description, re.IGNORECASE
            ):
                payload.tool_used = True
                for technique in obfuscation_instance.techniques:
                    if technique not in payload.techniques:
                        payload.techniques.append(technique)

    def init_file_type_search(self, payload):
        """Searches for Filetypes"""
        found = False
        types = []

        for filetype_name, filetype_instance in self.parser.filetypes.items():
            if not re.search(
                r'%s\b' % filetype_name, payload.payload_description, re.IGNORECASE
            ):
                if filetype_instance.aliases:
                    for aliase in filetype_instance.aliases:
                        if re.search(
                            r'%s\b' % aliase, payload.payload_description, re.IGNORECASE
                        ):
                            if filetype_name not in types:
                                types.append(filetype_instance)
                                found = True

            elif re.search(
                r'%s\b' % filetype_name, payload.payload_description, re.IGNORECASE
            ):
                if filetype_name not in types:
                    types.append(filetype_instance)
                    found = True

        """ Add Techniques """
        if found:
            for t in types:
                for technique in t.techniques:
                    if technique not in payload.techniques:
                        payload.techniques.append(technique)

        if not found:
            payload.filetype = "Unknown"
        else:
            for i in range(len(types)):
                if payload.filetype is None:
                    payload.filetype = ""
                if i == (len(types) - 1):
                    payload.filetype += str(types[i].name)
                else:
                    payload.filetype += str(types[i].name) + "-"

    def init_command_search(self, payload):
        """Searches Command and Control Information Used"""
        command_found = False

        for command_name, command_instance in self.parser.commands.items():
            if not re.search(
                r'%s\b' % command_name, payload.payload_description, re.IGNORECASE
            ):
                if command_instance.aliases:
                    for aliase in command_instance.aliases:
                        if re.search(
                            r'%s\b' % aliase, payload.payload_description, re.IGNORECASE
                        ):
                            payload.command = command_instance
                            command_found = True
            elif re.search(
                r'%s\b' % command_name, payload.payload_description, re.IGNORECASE
            ):
                payload.command = command_instance
                command_found = True

        """ Sets the Default Command and Control to Defaulted Value """
        if not command_found:
            for command_name, command_instance in self.parser.commands.items():
                if command_instance.default:
                    payload.command = command_instance

        """ Sets Default Cobalt Techniques if No Tool Used """
        if not payload.tool_used:
            for technique in payload.command.techniques:
                if technique not in payload.techniques:
                    payload.techniques.append(technique)

        """ Sets the Protocol Ports """
        for payload_name, technique in payload.command.protocols.items():
            if re.search(r'%s\b' % payload_name, payload.c2_protocol, re.IGNORECASE):
                if technique not in payload.techniques:
                    payload.techniques.append(technique)
