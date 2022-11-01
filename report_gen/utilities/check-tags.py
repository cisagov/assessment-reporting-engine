"""
This simple utility will check the spefiied docx template file and
determine if the tags in document.xml file are balanced.

No error checking is done on the indoc file and is assummed to be correct
"""
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

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
