# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.core.exceptions import ValidationError
from django.views import generic
from django.http import HttpResponse
import json, re, os
from ..models import Payload


class PayloadResults(generic.base.TemplateView):
    template_name = "ptportal/payloads.html"

    def get_context_data(self, **kwargs):
        context = {}
        context['payloads'] = Payload.objects.all().order_by('order')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)
        #diff = Payload.objects.all().count() - len(postData)

        #if diff > 0:
        #    for i in range(diff):
        #        Payload.objects.order_by('-order')[0].delete()

        payloads = []

        for order, data in enumerate(postData):

            if (
                data['payload_description']
                == data['attack_name']
                == data['c2_protocol']
                == ""
            ):
                continue

            if data['host_protection'] == False:
                host = "N"
            else:
                host = "B"

            if data['border_protection'] == False:
                border = "N"
            else:
                border = "B"

            attack_name = ""

            if data['locked']:
                program = Program()

                payload = {'payload_description': data['payload_description'], 'c2_protocol': data['c2_protocol'], 'filename': ''}
                program.add_payload(payload)
                program.parse()
                attack_name = program.payloads[0].filename

            else:
                attack_name = data['attack_name']

            if Payload.objects.filter(order=order + 1).exists():
                obj = Payload.objects.filter(order=order + 1).first()
                obj.payload_description=data['payload_description']
                obj.attack_name=attack_name
                obj.c2_protocol=data['c2_protocol']
                obj.host_protection=host
                obj.border_protection=border
                obj.locked=data['locked']
                obj.save()

            else:
                try:
                    obj = Payload.objects.create(
                        order=order + 1,
                        payload_description=data['payload_description'],
                        attack_name=attack_name,
                        c2_protocol=data['c2_protocol'],
                        host_protection=host,
                        border_protection=border,
                        locked=data['locked']
                    )

                except (KeyError, ValidationError) as e:
                    print(e)
                    return HttpResponse(status=400, reason=e)
            payloads.append(obj)

        deletedItems = set(Payload.objects.all()) - set(payloads)

        for deleted in deletedItems:
            deleted.delete()
            
        return HttpResponse(status=200)


class PayloadObj(object):
    def __init__(self, data):
        self.payload_description = data["payload_description"]
        self.tool_used = False
        self.filetype = None
        self.codetype = None
        self.techniques = []
        self.filename = None
        self.c2_protocol = data["c2_protocol"]

    def concatenation(self):
        longname = ""
        longname += self.filetype.upper() + "-"

        if self.codetype:
            longname += self.codetype + "-"

        for i in range(len(self.techniques)):
            if i == (len(self.techniques)-1):
                longname += str(self.techniques[i])
            else:
                longname += str(self.techniques[i]) + "-"

        self.filename = longname


class Tool(object):
    def __init__(self, name, attributes):
        self.name = name
        self.technique_mapping = {},
        self.kill = False

        if attributes["techniques"]:
            self.techniques = attributes["techniques"]
        else:
            self.techniques = []

        if attributes["aliases"]:
            self.aliases = attributes["aliases"]
        else:
            self.aliases = []


class Obfuscation(object):
    def __init__(self, name, attributes):
        self.name = name

        if attributes["techniques"]:
            self.techniques = attributes["techniques"]
        else:
            self.techniques = []

        if attributes["aliases"]:
            self.aliases = attributes["aliases"]
        else:
            self.aliases = []


class Filetype(object):
    def __init__(self, name, attributes):
        self.name = name

        if attributes["techniques"]:
            self.techniques = attributes["techniques"]
        else:
            self.techniques = []

        if attributes["aliases"]:
            self.aliases = attributes["aliases"]
        else:
            self.aliases = []


class Command(object):
    def __init__(self, name, attributes):
        self.name = name

        if attributes["protocols"]:
            self.protocols = attributes["protocols"]
        else:
            self.protocols = {}

        if attributes["techniques"]:
            self.techniques = attributes["techniques"]
        else:
            self.techniques = {}

        if attributes["default"]:
            self.default = attributes["default"]
        else:
            self.default = False

        if attributes["aliases"]:
            self.aliases = attributes["aliases"]
        else:
            self.aliases = []


class Search(object):
    """ Searches Objects """

    def __init__(self, parser):
        """ For Each Payload Search For Every Instance Function """
        self.parser = parser

    def execute_search_on_normal(self):
        """ Performs the Search on Unmodified JSON File """
        for payload in self.parser.payloads:
            self.init_tool_search(payload)
            self.init_obfuscation_search(payload)
            self.init_file_type_search(payload)
            self.init_command_search(payload)
            payload.concatenation()

    def init_tool_search(self, payload):
        """ Search for Every Possible Tool """
        tool_list = []

        for tool_name, tool_instance in self.parser.tools.items():
            if not re.search(r'%s\b' %tool_name, payload.payload_description, re.IGNORECASE):
                if tool_instance.aliases:
                    for aliase in tool_instance.aliases:
                        if re.search(r'%s\b' %aliase, payload.payload_description, re.IGNORECASE):
                            payload.tool_used = True
                            tool_list.append(tool_instance)
                            break
            elif re.search(r'%s\b' %tool_name, payload.payload_description, re.IGNORECASE):
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
        """ Searches for Obfuscation Instances """
        for obfuscation_name, obfuscation_instance in self.parser.obfuscations.items():
            if not re.search(r'%s\b' %obfuscation_name, payload.payload_description, re.IGNORECASE):
                if obfuscation_instance.aliases:
                    for aliase in obfuscation_instance.aliases:
                        if re.search(r'%s\b' %aliase, payload.payload_description, re.IGNORECASE):
                            for technique in obfuscation_instance.techniques:
                                if technique not in payload.techniques:
                                    payload.techniques.append(technique)
                            break

            elif re.search(r'%s\b' %obfuscation_name, payload.payload_description, re.IGNORECASE):
                payload.tool_used = True
                for technique in obfuscation_instance.techniques:
                    if technique not in payload.techniques:
                        payload.techniques.append(technique)

    def init_file_type_search(self, payload):
        """ Searches for Filetypes """
        found = False
        types = []

        for filetype_name, filetype_instance in self.parser.filetypes.items():
            if not re.search(r'%s\b' % filetype_name, payload.payload_description, re.IGNORECASE):
                if filetype_instance.aliases:
                    for aliase in filetype_instance.aliases:
                        if re.search(r'%s\b' % aliase, payload.payload_description, re.IGNORECASE):
                            if filetype_name not in types:
                                types.append(filetype_instance)
                                found = True

            elif re.search(r'%s\b' % filetype_name, payload.payload_description, re.IGNORECASE):
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
        """ Searches Command and Control Information Used """
        command_found = False

        for command_name, command_instance in self.parser.commands.items():
            if not re.search(r'%s\b' % command_name, payload.payload_description, re.IGNORECASE):
                if command_instance.aliases:
                    for aliase in command_instance.aliases:
                        if re.search(r'%s\b' % aliase, payload.payload_description, re.IGNORECASE):
                            payload.command = command_instance
                            command_found = True
            elif re.search(r'%s\b' % command_name, payload.payload_description, re.IGNORECASE):
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


class Program(object):
    def __init__(self):
        self.path = (os.path.dirname(os.path.realpath(__file__)))
        self.assessment_tool_map = json.loads(open(self.path + "/payload_mapping/lib/data/assessment-tool-map.json", "r").read())
        self.tools = {}
        self.filetypes = {}
        self.obfuscations = {}
        self.commands = {}
        self.payloads = []

        self.initialize_tools()
        self.initialize_obfuscations()
        self.initialize_commands()
        self.initialize_filetypes()

    def initialize_tools(self):
        for tool_name, tool_properties in self.assessment_tool_map["tools"].items():
            tool_instance = Tool(tool_name, tool_properties)
            self.tools[tool_instance.name] = tool_instance

    def initialize_filetypes(self):
        for file_type_name, file_type_properties in self.assessment_tool_map["filetypes"].items():
            file_type_instance = Filetype(file_type_name, file_type_properties)
            self.filetypes[file_type_name] = file_type_instance

    def initialize_obfuscations(self):
        for obfuscation_name, obfuscation_properties in self.assessment_tool_map["obfuscations"].items():
            obfuscation_instance = Obfuscation(obfuscation_name, obfuscation_properties)
            self.obfuscations[obfuscation_name] = obfuscation_instance

    def initialize_commands(self):
        for command_name, command_properties in self.assessment_tool_map["commands"].items():
            command_instance = Command(command_name, command_properties)
            self.commands[command_name] = command_instance

    def add_payload(self, data):
        self.payloads.append(PayloadObj(data))

    def parse(self):
        Search(self).execute_search_on_normal()

    def print_techniques(self):
        for payload in self.payloads:
            payload.concatenation()
