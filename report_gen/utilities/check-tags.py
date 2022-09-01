"""
This simple utility will check the spefiied docx template file and
determine if the tags in document.xml file are balanced.

No error checking is done on the indoc file and is assummed to be correct
"""
# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import sys
import zipfile
import xml.dom.minidom

indoc = sys.argv[1]

zf = zipfile.ZipFile(indoc)

dxml = zf.read("word/document.xml")
dom = xml.dom.minidom.parseString(dxml)
dstr = dom.toprettyxml()

unbalanced = False

for l in dstr.split('\n'):
    if "{" in l:
        lcurly = l.count("{")
        rcurly = l.count("}")
        if lcurly != rcurly:
            print(l)
            unbalanced = True


if unbalanced:
    print(
        "Please fix above errors and rebuild (recompess.py) to create a new --", indoc
    )
else:
    print(indoc, "appears to have balanced tags.  no action needed.")
