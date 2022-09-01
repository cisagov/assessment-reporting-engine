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
# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import sys
import docx


indoc = sys.argv[1]  # a docx directory unzipped
outdoc = sys.argv[2]  # the name of the docx file to be saved

doc = docx.Document(indoc)
doc.save(outdoc)
