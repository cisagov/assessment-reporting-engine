"""
Routines to support sizing and scaling for screenshots
"""
# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from PIL import Image

# --- constants for screenshot slide layout
MAX_IMG_HEIGHT = 342  # 4.75 in
MAX_IMG_WIDTH = 619  # 8.6 in
IMG_CENTER_X = 396  # 5.5 in
IMG_CENTER_Y = 270  # 3.75 in
ORIGIN_X = 36  # .5 in
ORIGIN_Y = 112  # 1.55 in
SCREEN_RES = 72.0  # used to convert to inches
IMG_DEBUG = False  # turn on to see dimension details


def get_screenshot_dimensions(sfile, in_inches=True):
    """
    This routine computes the upper left most point of a centered,
    scaled screenshot on a slide
    """
    with Image.open(sfile) as img:
        swidth, sheight = img.size  # screenshot size in pixels

    w_over = swidth - MAX_IMG_WIDTH
    h_over = sheight - MAX_IMG_HEIGHT

    # compute scale factor
    scale = 1.0
    if w_over > 0 or h_over > 0:
        scale = min(MAX_IMG_WIDTH / swidth, MAX_IMG_HEIGHT / sheight)

    new_swidth = swidth * scale
    new_sheight = sheight * scale

    new_y = ORIGIN_Y + (MAX_IMG_HEIGHT / 2.0 - new_sheight / 2.0)
    new_x = ORIGIN_X + (MAX_IMG_WIDTH / 2.0 - new_swidth / 2.0)

    if IMG_DEBUG:
        print("scale =", scale)
        print(w_over, h_over)
        print(new_x, new_x / SCREEN_RES, new_y, new_y / SCREEN_RES)
        print(swidth, sheight, new_swidth, new_sheight)

    res = SCREEN_RES
    if not in_inches:
        res = 1.0

    return (new_x / res, new_y / res, new_swidth / res, new_sheight / res)
