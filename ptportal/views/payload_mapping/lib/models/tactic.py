# -*- coding: utf-8 -*-

from .technique import Technique


class Tactic(object):
    def __init__(self, tactic_name, data):
        """ Holds Information Regarding Mitre Tactics """
        self.name = tactic_name
        self.id = data["ID"]
        self.total = data["Total"]
        self.techniques = {}

        """ Links to Techniques """
        if data["Techniques"]:
            for tech_id, tech_meta in data["Techniques"].items():
                temp = Technique(tech_id, tech_meta)
                self.techniques[temp.id] = temp