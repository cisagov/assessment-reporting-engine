# -*- coding: utf-8 -*-


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


