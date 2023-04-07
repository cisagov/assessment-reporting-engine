"""
Routines to support sizing and scaling for screenshots
"""
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from PIL import Image

# --- constants for screenshot slide layout
MAX_IMG_HEIGHT = 290 # 4.03 in
AP_IMG_HEIGHT = 324 # 4.5 in
MAX_IMG_WIDTH = 619  # 8.6 in
AP_IMG_WIDTH = 684 # 9.5 in
IMG_CENTER_X = 396  # 5.5 in
IMG_CENTER_Y = 270  # 3.75 in
ORIGIN_X = 50.5  # .7 in
AP_X = 18 # .25 in
ORIGIN_Y = 120  # 1.67 in
AP_Y = 108 # 1.5 in
SCREEN_RES = 72.0  # used to convert to inches
IMG_DEBUG = False  # turn on to see dimension details


def get_screenshot_dimensions(sfile, stype, in_inches=True):
    """
    This routine computes the upper left most point of a centered,
    scaled screenshot on a slide
    """
    if stype == "path":
        ih = AP_IMG_HEIGHT
        iw = AP_IMG_WIDTH
        xpos = AP_X
        ypos = AP_Y
    else:
        ih = MAX_IMG_HEIGHT
        iw = MAX_IMG_WIDTH
        xpos = ORIGIN_X
        ypos = ORIGIN_Y

    with Image.open(sfile) as img:
        swidth, sheight = img.size  # screenshot size in pixels

    w_over = swidth - iw
    h_over = sheight - ih

    # compute scale factor
    scale = 1.0
    if w_over > 0 or h_over > 0:
        scale = min(iw / swidth, ih / sheight)

    new_swidth = swidth * scale
    new_sheight = sheight * scale

    new_y = ypos + (ih / 2.0 - new_sheight / 2.0)
    new_x = xpos + (iw / 2.0 - new_swidth / 2.0)

    if IMG_DEBUG:
        print("scale =", scale)
        print(w_over, h_over)
        print(new_x, new_x / SCREEN_RES, new_y, new_y / SCREEN_RES)
        print(swidth, sheight, new_swidth, new_sheight)

    res = SCREEN_RES
    if not in_inches:
        res = 1.0

    return (new_x / res, new_y / res, new_swidth / res, new_sheight / res)
