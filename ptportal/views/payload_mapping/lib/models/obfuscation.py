# -*- coding: utf-8 -*-


class Obfuscation(object):
    """Loads Obfuscation Keys"""

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
