# -*- coding: utf-8 -*-


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
