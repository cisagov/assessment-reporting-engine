# -*- coding: utf-8 -*-

import json


class SecurityUpdate(object):
    def __init__(self, id, name):
        self.id = str(id)
        self.name = name
        self.assessments = None
        self.filenames = {}
        self.success = {}
        self.fail = {}

    @property
    def assessments_seen(self):
        return len(self.assessments)

    def search_for_successful_payloads(self):
        for assessment, assessment_data in self.assessments.items():
            for payload in assessment_data["Payloads"]:
                if payload["host_protection"] == "N":
                    if assessment not in self.success:
                        self.success[assessment] = []
                    self.success[assessment].append(payload)
                else:
                    if assessment not in self.fail:
                        self.fail[assessment] = []
                    self.fail[assessment].append(payload)


class Security(object):
    def __init__(self, id, name):
        self.id = str(id)
        self.name = name
        self.assessments_seen = 0

        self.success_payloads = {}
        self.failed_payloads = {}

        self.filename_failed_map = {}
        self.filename_success_map = {}

        """ For Results Reporting """
        self.successful_techniques = []
        self.most_common_techniques = {}

    def FilenameSearch_update(self):
        """Updated Function for FilenameSearch"""
        for assessment, assessment_data in self.success_payloads.items():
            for payload in assessment_data:
                if payload["filename"] not in self.filename_success_map:
                    self.filename_success_map[payload["filename"]] = {
                        "payloads": [],
                        "seen_in": {},
                        "success_rate_similar": 0.0,
                        "success_rate_all": 0.0,
                        "success_rate_within": 0.0,
                    }

                if (
                    assessment
                    not in self.filename_success_map[payload["filename"]]["seen_in"]
                ):
                    self.filename_success_map[payload["filename"]]["seen_in"][
                        assessment
                    ] = 0

                self.filename_success_map[payload["filename"]]["seen_in"][
                    assessment
                ] += 1
                self.filename_success_map[payload["filename"]]["payloads"].append(
                    payload
                )

    def FilenameSearch(self):
        """Updated Function for FilenameSearch -> Deprecated (Has Been Updated)"""
        for assessment, assessment_data in self.success_payloads.items():
            for payload in assessment_data:
                if payload["filename"] not in self.filename_success_map:
                    self.filename_success_map[payload["filename"]] = {
                        "payloads": [],
                        "seen_in": [],
                        "success_rate_similar": 0.0,
                        "success_rate_all": 0.0,
                        "success_rate_within": 0.0,
                    }

                if (
                    assessment
                    not in self.filename_success_map[payload["filename"]]["seen_in"]
                ):
                    self.filename_success_map[payload["filename"]]["seen_in"].append(
                        assessment
                    )

                self.filename_success_map[payload["filename"]]["payloads"].append(
                    payload
                )

    def SuccessAcrossAssessments(
        self,
        global_filename_success_map,
        global_filename_failed_map,
        assessment_window_list=None,
    ):
        """Collects Occurrence Across All Assessments Tracked (Success)"""
        focus_success_map = {}
        focus_failed_map = {}

        for filename, assessment_data in self.filename_success_map.items():
            if filename in global_filename_success_map:
                focus_success_map[filename] = global_filename_success_map[filename]

            if filename in global_filename_failed_map:
                focus_failed_map[filename] = global_filename_failed_map[filename]

        for filename, assessment_data in focus_success_map.items():
            if filename in focus_failed_map:
                success_attempts = len(focus_success_map[filename]["payloads"])
                failed_attempts = len(focus_failed_map[filename]["payloads"])
                self.filename_success_map[filename]["success_rate_all"] = round(
                    success_attempts / (success_attempts + failed_attempts) * 100, 2
                )
            else:
                self.filename_success_map[filename]["success_rate_all"] = round(
                    len(focus_success_map[filename]["payloads"])
                    / len(focus_success_map[filename]["payloads"])
                    * 100,
                    2,
                )

    def success_fail_attempts_within_window(
        self, focus_success_map, focus_failed_map, assessment_window_list=None
    ):
        """Gathers Metrics for Assessments within the 'Days' window -> (Working)"""

        for filename, assessment_data in focus_success_map.items():
            success_attempts = 0
            failed_attempts = 0
            in_fail = False
            if filename in focus_failed_map:
                for assessment_name in assessment_data["seen_in"]:
                    if (
                        assessment_name in assessment_window_list
                        and assessment_name in focus_failed_map[filename]["seen_in"]
                    ):
                        success_attempts += focus_success_map[filename]["seen_in"][
                            assessment_name
                        ]
                        failed_attempts += focus_failed_map[filename]["seen_in"][
                            assessment_name
                        ]
                        in_fail = True

            else:
                for assessment_name in assessment_data["seen_in"]:
                    if assessment_name in assessment_window_list:
                        success_attempts += focus_success_map[filename]["seen_in"][
                            assessment_name
                        ]

            if in_fail:
                self.filename_success_map[filename]["success_rate_within"] = round(
                    success_attempts / (success_attempts + failed_attempts) * 100, 2
                )
            else:
                self.filename_success_map[filename]["success_rate_within"] = round(
                    (success_attempts / success_attempts) * 100, 2
                )

    def SuccessAcrossSimilarAssessments(self, assessment_window_list=None):
        """Collects Success Rate if Seen in Other Environments"""
        for filename, assessment_data in self.filename_success_map.items():
            if filename in self.filename_failed_map:
                success_attempts = len(self.filename_success_map[filename]["payloads"])
                failed_attempts = len(self.filename_failed_map[filename]["payloads"])
                self.filename_success_map[filename]["success_rate_similar"] = round(
                    (success_attempts / (success_attempts + failed_attempts)) * 100, 2
                )
            else:
                self.filename_success_map[filename]["success_rate_similar"] = round(
                    len(self.filename_success_map[filename]["payloads"])
                    / len(self.filename_success_map[filename]["payloads"])
                    * 100,
                    2,
                )

    def OccurrenceFailedAcrossAssessments(self):
        """Collects Occurrence Across All Assessments Tracked (Failed)"""
        for assessment, assessment_data in self.failed_payloads.items():
            for payload in assessment_data:
                for filename, filename_data in self.filename_failed_map.items():
                    if filename == payload["filename"]:
                        if assessment not in filename_data["seen_in"]:
                            filename_data["seen_in"].append(assessment)
                            break

    def GenerateSuccessTechniques(self):
        """Extracts the Most Successful Techniques with the Payloads"""
        most_common = []

        if len(self.filename_success_map) == 1:
            """If there is only 1 filename, then it is the most successful"""
            for filename, assessment_data in self.filename_success_map.items():
                most_common.append(filename)
        else:
            success_filenames = []
            top_number = 0

            """ Plant the Filenames in an Array for Checking """
            for filename, assessment_data in self.filename_success_map.items():
                if filename not in success_filenames:
                    success_filenames.append(filename)

            """ Perform the Checking to Determine Filename with Most Payloads """
            for i in range(len(success_filenames)):
                """First Filename Tested Gets Added When Starting"""
                if not most_common:
                    most_common.append(success_filenames[i])
                    top_number = len(
                        self.filename_success_map[success_filenames[i]]["payloads"]
                    )
                    continue

                """ If Filename has more payloads, then empty array and add new filename and restart loop """
                if (
                    len(self.filename_success_map[success_filenames[i]]["payloads"])
                    > top_number
                ):
                    most_common = [success_filenames[i]]
                    top_number = len(
                        self.filename_success_map[success_filenames[i]]["payloads"]
                    )
                    i = 0
                    continue

            """ Check for Filenames Having Equal Payloads """
            updated_list = []
            for success_name in most_common:
                for filename, assessment_data in self.filename_success_map.items():
                    if success_name == filename:
                        continue
                    else:
                        if len(assessment_data["seen_in"]) == len(
                            self.filename_success_map[success_name]["payloads"]
                        ):
                            updated_list.append(filename)

            """ Update List If Necessary """
            if updated_list:
                for update in updated_list:
                    if update not in most_common:
                        most_common.append(update)

        self.add_most_common_techniques(most_common)

        self.add_most_successful_techniques()

    def ExtractSuccessPayloads(self, assessment_map, global_success_payloads):
        """Retrieves successful payloads to add to instance"""
        for assessment_name in assessment_map:
            self.success_payloads = {
                assessment_name: global_success_payloads[assessment_name]
            }

    def ExtractFailedPayloads(self, assessment_map, global_failed_payloads):
        for assessment_name in assessment_map:
            self.failed_payloads = {
                assessment_name: global_failed_payloads[assessment_name]
            }

    def add_most_common_techniques(self, most_common):
        """Updates the Most Successful Techniques"""
        for filename in most_common:
            if filename not in self.most_common_techniques:
                self.most_common_techniques[filename] = self.filename_success_map[
                    filename
                ]

    def add_most_successful_techniques(self):
        """Looks for the Most Successful Techniques by Success Rate -> (Working)"""
        # print(json.dumps(self.filename_success_map, indent=4))
        pass

    def GetSuccessRateAcrossSimilar(self):
        """Gets the Percentage of Success Rates Across All Like Environments"""
        pass
