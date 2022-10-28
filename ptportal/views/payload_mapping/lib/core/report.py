# -*- coding: utf-8 -*-

import json
import os


class Report(object):
    def __init__(self, parser):
        """Generates Report JSON File with Extracted Data"""
        self.parser = parser
        self.output = {
            "asmt_id": self.parser.assessment.asmt_id,
            "fiscal_year": self.parser.assessment.fiscal_year,
            "Date Generated": self.parser.assessment.date_generated,
            "phishing_assessment_date": self.parser.assessment.output_phishing_date(),
            "security_solutions": self.parser.assessment.GatherSolutions(),
            "Payloads": [],
        }

    def execute_normal_report(self):
        """Perform Normal Reporting to Output Directory"""
        self.init_add_payloads(self.parser.payloads)
        # self.write_to_output_directory()    # DEBUG

    def init_add_payloads(self, payloads):
        """Populates the Payload Property"""
        for payload in payloads:
            self.output["Payloads"].append(
                {
                    "payload_description": payload.payload_description,
                    "c2_protocol ": payload.c2_protocol,
                    "border_protection": payload.border_protection,
                    "host_protection": payload.host_protection,
                    "command": payload.command.name,
                    "file_types": payload.filetype.upper(),
                    "code_type": "",
                    "techniques": payload.technique_mapping,
                    "filename": payload.filename,
                }
            )

    def write_to_output_directory(self):
        """DEBUG -- Write Assessment Payload Map to Output Directory"""
        filename = "%s-payload-mappings.json" % str(self.output["asmt_id"])
        with open(filename, "w") as outfile:
            json.dump(self.output, outfile, indent=2)
