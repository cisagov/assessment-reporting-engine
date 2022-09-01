"""
This utility generates the pen testing's assessment activity tracker.
It takes json input and generates an excel worksheet
"""
# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744s
import sys
import os.path
import argparse
import datetime
import openpyxl as px
from openpyxl.styles import Alignment, NamedStyle, Font

import report_gen.utilities.assessment_facts as af

# ---- openpyxl settings

CENTER = Alignment(horizontal='center', vertical='center')
BOLD14 = px.styles.Font(bold=True, size=14)
BOLD = px.styles.Font(bold=True)
ITALIC = px.styles.Font(italic=True)
# DOUBLE = px.styles.Side(border_style="double", color="0000FF")
DOUBLE = px.styles.Side(border_style="hair")
TOP = px.styles.Border(top=DOUBLE)
BOTTOM = px.styles.Border(bottom=DOUBLE)


def write_header(ws, lst, r, border=True, space=True, cap=True):
    """
    lst - contains the column headers
    r - is the starting row_dimensions
    border - add a border to the bottom
    space - size the columns approx to size of string
    cap - capitilize name via json_name function
    note: no column is needed it since it is based on size of list
    """
    for col, name in enumerate(lst):
        # set style for header row
        if cap:
            display_name = json_name(name)
        else:
            display_name = name
        ws.cell(row=r, column=col + 1).value = display_name
        ws.cell(row=r, column=col + 1).font = BOLD14
        ws.cell(row=r, column=col + 1).alignment = CENTER
        if border:
            ws.cell(row=r, column=col + 1).border = BOTTOM

        # adjust the column widths
        if space:
            col_ltr = px.utils.get_column_letter(col + 1)
            width = int((len(name) + 2) * 1.5)
            ws.column_dimensions[col_ltr].width = width


# ---- tracker parameters

tabs = [
    "infrastructure",
    "lateralmovement",
    "persistence",
    "files",
    "interactivelogons",
    "significantevents",
]

tabs_display_name = {
    "infrastructure": "Infrastructure",
    "lateralmovement": "Lateral Movement",
    "persistence": "Persistence",
    "files": "Files",
    "interactivelogons": "Interactive Logons",
    "significantevents": "Significant Events",
}

cols = {}

cols["infrats"] = ["teamserver_ip", "linked_domain", "beacon_kill_date"]
cols["infraws"] = ["hostname", "ip_address", "assigned_to"]

cols["lateralmovement"] = [
    "initial_beacon",
    "ip_address",
    "hostname",
    "account_used",
    "host_moved_from",
    "movement_method",
    "callback_server",
    "notes",
]

cols["persistence"] = [
    "installation_time",
    "machine_ip",
    "machine_hostname",
    "description",
    "persistence_method",
    "persistence_info",
    "callback_server",
    "removal_time",
]

cols["files"] = [
    "host",
    "ip",
    "location",
    "filename",
    "deleted",
    "date",
    "time_dropped_to_disk",
    "time_deleted",
]

cols["interactivelogons"] = [
    "datetime",
    "operator",
    "host",
    "username",
    "password",
    "type",
    "access_ended",
    "notes",
]

cols["significantevents"] = ["event", "notes", "datetime"]


def json_name(s):
    """Takes django/json name and converts to tab ready name"""
    lst = s.split('_')
    lst = [x.capitalize() for x in lst]
    # special fixup for ip -> IP
    if "Ip" in lst:
        idx = lst.index('Ip')
        lst[idx] = lst[idx].upper()
    # special fixup for date/time
    if "Datetime" in lst:
        idx = lst.index("Datetime")
        lst[idx] = "Date/Time"

    return ' '.join(lst)


def add_infra_details(ws, tracker_data):

    # find the teamserver information
    ts_fnds = af.get_db_info(tracker_data, "infrats.fields", "findings")

    ts_fnds = ts_fnds[0]  # remove extra json level
    print('ts_fnds: ', ts_fnds)

    curr_row = 1
    add_sheet_details(ws, cols["infrats"], ts_fnds, curr_row)
    if isinstance(ts_fnds, str):  # didn't find a dictionary with data
        no_of_rows = 0
    else:
        no_of_rows = len(ts_fnds)
    curr_row += no_of_rows + 3  # add some blank rows

    # find the dhs workstation
    ws_fnds = af.get_db_info(tracker_data, "infraws.fields", "findings")
    ws_fnds = ws_fnds[0]  # remove extra json level

    # add a title
    ws.merge_cells('A' + str(curr_row) + ':C' + str(curr_row))
    write_header(
        ws, ["DHS Workstations"], curr_row, border=False, space=False, cap=False
    )

    curr_row += 1
    add_sheet_details(ws, cols["infraws"], ws_fnds, curr_row)


def add_sheet_details(ws, col_names, fnds, start_row=1):
    # write the header row
    for c, name in enumerate(col_names):
        # set style for header row
        write_header(ws, col_names, start_row)

    # add each finding to subsequent rows
    if isinstance(fnds, str):  # didn't find a dictionary with data
        return

    print('fnds: ', fnds)
    for r, ele in enumerate(fnds):
        for c, name in enumerate(col_names):
            print(ele)
            # +1 to skip of header row
            ws.cell(row=start_row + r + 1, column=c + 1).value = ele[name]


def create_tracker(outfile, json_file):
    print('create tracker')

    tracker_data = af.load_rva_info(json_file)
    # create the excel spreadsheet
    wb = px.Workbook()

    # name the initial sheet (deleted later if no coverpage wanted)
    ws = wb.active
    ws.title = "Cover Page"

    # create all the other tabs
    for t in tabs:
        ws = wb.create_sheet(tabs_display_name[t])

    # create the special case infra sheet
    add_infra_details(wb["Infrastructure"], tracker_data)

    # populate the rest of the tabs
    for t in tabs[1:]:
        if t in cols:
            fnds = af.get_db_info(tracker_data, t + ".fields", "findings")
            fnds = fnds[0]  # remove extra json level
            print('finds in create_tracker: ', fnds)
            add_sheet_details(wb[tabs_display_name[t]], cols[t], fnds)

    wb.create_sheet("Artifact Tracking")
    data = []
    fnds = af.model_gen(tracker_data, "ptportal.artifactfindings")
    for f in fnds:
        data.append(f["fields"])
    add_sheet_details(
        wb["Artifact Tracking"], ["file_name", "md5", "sha1", "sha256"], data
    )
    # clean up and save out spreadsheet
    del wb["Cover Page"]
    wb.save(outfile)


def main():
    description = "generate Assessment Activity Tracker"
    parser = argparse.ArgumentParser(description=description)

    parser.add_argument(
        "-o",
        "--output_file",
        action="store",
        default="Assessment Activity Tracker.xlsx",
        help="Report file name",
    )

    parser.add_argument("-j", "--json_file", action="store", required=True)

    args = parser.parse_args()

    create_tracker(args.output_file, args.json_file)


if __name__ == '__main__':
    main()
