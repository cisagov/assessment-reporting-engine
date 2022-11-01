"""Tempory file to gather local assessment facts from a local json
file and other locations.  This will eventually be retrieved from the
django app

"""
# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import json
from collections import OrderedDict
from datetime import date


# ---- Get the json information
def load_rva_info(json_file):
    with open(json_file) as f:
        return json.load(f)


def get_db_info(rva_db, db_loc, key, allow_empty=False):
    """This function is used to get values from elements that have a
    single model, such as `report'
    Using `allow_empty', the user will receieve an empty string
    instead of `<not set:...>' if the key is not set. The user can
    test for empty string and change behavior.
    """
    # print(db_loc)

    db_path = db_loc.split('.')

    found_ele = None
    for ele in rva_db:
        if ele["model"] == 'ptportal.' + db_path[0]:
            found_ele = ele
            break

    field = found_ele
    try:
        for j in db_path[1:]:
            if type(field[j]) == list:
                if len(field[j]) > 0:
                    if type(field[j][0]) == dict:
                        all_dict_values = []
                        for x in field[j]:
                            all_dict_values.extend(list(x.values()))
                        field[j] = all_dict_values
                    else:  # make sure it is a string
                        field[j] = [str(s) for s in field[j]]
            field = field[j]
    except:
        field = ""

    if field == "":
        if allow_empty:
            return ""
        else:
            field = "<not set: " + key + ">"
    return field


# map tags in template to database locations
tag_db_map = {
    "{Stakeholder Long Name}": "engagementmeta.fields.customer_long_name",
    "{Stakeholder Initials}": "engagementmeta.fields.customer_initials",
    "{Customer Name}": "engagementmeta.fields.customer_POC_name",
    "{Customer Email}": "engagementmeta.fields.customer_POC_email",
    "{ASMT ID Number}": "engagementmeta.fields.asmt_id",
    "{Fed lead Name}": "engagementmeta.fields.team_lead_name",
    "{Fed lead Email}": "engagementmeta.fields.team_lead_email",
    "{External Start Date}": "engagementmeta.fields.ext_start_date",
    "{External End Date}": "engagementmeta.fields.ext_end_date",
    "{Short business level external scope – tech scope is in appendix.}": "report.fields.scanned_scope_ext",
    "{Internal Start Date}": "engagementmeta.fields.int_start_date",
    "{Internal End Date}": "engagementmeta.fields.int_end_date",
    "{Short business level internal scope – tech scope is in appendix.}": "report.fields.scanned_scope_int",
    "{Internal Test Location}": "report.fields.test_location_int",
    "{External Test Location}": "report.fields.test_location_ext",
    "{Short business level internal scope – tech scope is in appendix.}": "report.fields.scanned_scope_int",
    "{Number of External Addresses Scanned}": "report.fields.IP_scanned_ext",
    "{Number of Internal Addresses Scanned}": "report.fields.IP_scanned_int",
    "{Number of External Hosts Identified}": "report.fields.hosts_IDd_ext",
    "{Number of Internal Hosts Identified}": "report.fields.hosts_IDd_int",
    "{total number of emails found}": "report.fields.emails_identified",
    "{total number of breached emails found}": "report.fields.emails_breached",
    "{number of credentials identified}": "report.fields.credentials_identified",
    "{number of credentials validated}": "report.fields.credentials_validated",
    "{Calculate Percent of Breached Emails}": "report.fields.email_percentage",
    "[Enter Assessment Title]": "report.fields.report_title",
}


def set_draft(db):
    """Update the report date string to include the word DRAFT"""
    for ele in db:
        if ele["model"] == "ptportal.report":
            break

    rdate = date.today().strftime("%Y-%m-%d")
    ele["fields"]["report_date"] = "DRAFT - " + rdate


# ---- NIST Control information retrieval

nist80053 = OrderedDict(
    [("AC", 0), ("AT", 0), ("CM", 0), ("IA", 0), ("RA", 0), ("SC", 0), ("SI", 0)]
)

nistCSF = OrderedDict(
    [
        ("ID.AM", 0),
        ("ID.GV", 0),
        ("ID.RA", 0),
        ("PR.AC", 0),
        ("PR.AT", 0),
        ("PR.DS", 0),
        ("PR.IP", 0),
        ("PR.PT", 0),
    ]
)


def set_title(db):
    """The TOC uses standard paragraph tags to set the title. So this sets
    the report_title in the json map. It could eventually be replaced
    with the django model and this function will be obsoleted.
    """

    # build the title
    emeta = get_db_info(db, "engagementmeta.fields", "keyNA", allow_empty=True)
    rpt = get_db_info(db, "report.fields", "keyNA")

    if emeta != "":
        cust_name = emeta["customer_long_name"]
    else:
        cust_name = "<not set: {Customer Name}>"
    report_type = rpt["report_type"]

    title = report_type + " prepared for " + cust_name

    # set the title
    rpt["report_title"] = title


def clean_nist_vals(lst, numchars):
    """
    lst -- a list of NIST controls
    numchars -- the number of chars returning only the control
                family part of the string
    """
    vals = lst.split(',')
    vals = [x.strip() for x in vals]
    vals = [x[0:numchars] for x in vals]
    return vals


def model_gen(db, model):
    """Walks the rva data dump looking for a given `model'"""
    for ele in db:
        if ele["model"] == model:
            yield ele


def build_screenshot_info(db):
    """Generate a list of all screenshot entries in the rva data dump"""
    sshots = []
    for ele in model_gen(db, "ptportal.imagefinding"):
        sshots.append(ele)
    return sshots


def find_screenshots(ss_list, fkey):
    """Walk through list of screenshot elements and return a list of
    screenshot elements associated with the finding's key `fkey'
    """
    ss_fkey = []
    for ss in ss_list:
        ssf = ss['fields']
        if ssf["belongs_to_finding"] == fkey:
            ss_fkey.append(ss)
    return ss_fkey


def build_affected_systems_info(db):
    """Generate a dictionary of all affected systems"""
    asys = {}
    for ele in model_gen(db, "ptportal.affectedsystems"):
        asys_name = ele['fields']['name']
        pk = ele['pk']
        asys[pk] = asys_name
    return asys


def find_affected_systems(as_info, keys):
    """Generate a concatenated string of affected systems based on passed in keys"""
    asys = []
    for i in keys:
        if i in as_info:
            asys.append(as_info[i])
    return ', '.join(asys)


def get_nist_control_data(ndf_data):
    csf_count = 0

    for finding in model_gen(ndf_data, "ptportal.uploadedfinding"):
        ele = finding["fields"]

        vals = clean_nist_vals(ele["NIST_800_53"], 2)
        for v in vals:
            try:
                nist80053[v] += 1
            except:
                print("Untracked nist 800.53 key", v)

        vals = clean_nist_vals(ele["NIST_CSF"], 5)
        for v in vals:
            csf_count += 1
            try:
                nistCSF[v] += 1
            except:
                print("Untracked nist CSF key", v)

    # update nistCSF as percentage
    for k, v in nistCSF.items():
        try:
            nistCSF[k] = float(v) / float(csf_count)
        except:
            print("no CSF elements found")


if __name__ == '__main__':
    import sys

    rva_info = load_rva_info(sys.argv[1])  # json file

    get_nist_control_data(rva_info)

    for k, v in nist80053.items():
        print(k, v)

    print("-" * 20)

    for k, v in nistCSF.items():
        print(k, v)
