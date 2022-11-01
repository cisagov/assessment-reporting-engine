"""
This simple utility will take a directory (an unzipped docx file)
which has the document.xml file pretty formatted for easier editing
and `unformats' the document.xml and saves it back out to a docx file

the reason to edit the xml is to overcome words insistence to bust
up a paragraph (w:p) with a bunch of extraneous xml tags therefore
splitting the text (w:t) over lots of runs (w:r).  The edit is
to consolidate the tag I care about into one run (w:p/w:r/w:t)

No error checking is done and indoc and outdoc are assumed to be correct
"""
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import sys
import docx


indoc = sys.argv[1]  # a docx directory unzipped
outdoc = sys.argv[2]  # the name of the docx file to be saved

doc = docx.Document(indoc)
doc.save(outdoc)
