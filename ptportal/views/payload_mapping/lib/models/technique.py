# -*- coding: utf-8 -*-

from .subtechnique import SubTechnique


class Technique(object):
    def __init__(self, id, data):
        """ Holds Information About a Technique """
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
        """ Links Technique to All Associated Tactics """
        for tactic_name, tactic in tactics.items():
            for tech_id, technique in tactic.techniques.items():
                if tech_id == self.id:
                    self.tactics[tactic_name] = tactic

