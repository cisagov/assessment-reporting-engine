# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import re
from netaddr import *
from django.core.exceptions import ValidationError


def scope_validator(scope):
    ipregex = r"^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(?:$|(?:\/3[0-2]$|\/[1-2][0-9]$|\/[1-9]$)|-(?:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3})(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$|-(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$)"
    ip_pattern = re.compile(ipregex)
    split = filter(None, re.split("[, \r\n]+", scope))

    for ip in split:
        ip_match = ip_pattern.match(ip)
        if not ip_match:
            host_name_validator(ip)
        else:
            ip_match = ip_match.group(0)
            if "-" in ip_match:
                ip_split = ip_match.split("-")
                if not ip_pattern.match(ip_split[1]):
                    if int(ip_split[0].split(".")[-1]) >= int(ip_split[1]):
                        raise (
                            ValidationError(
                                "The value ["
                                + ip
                                + "] is not formatted correctly. (i.e. cmu-sei.cert.org, 192.168.1.1, 10.0.0.0-10.0.0.255, or 10.0.0.0-255 are valid examples)"
                            )
                        )
                else:
                    if int(ip_split[0].split(".")[-1]) >= int(
                        ip_split[1].split(".")[-1]
                    ):
                        raise (
                            ValidationError(
                                "The value ["
                                + ip
                                + "] is not formatted correctly. (i.e. cmu-sei.cert.org, 192.168.1.1, 10.0.0.0-10.0.0.255, or 10.0.0.0-255 are valid examples)"
                            )
                        )


def host_name_validator(ip):
    '''
    Validate against hostname validation before returning the error
    Validation adapted from:
    - https://docs.djangoproject.com/en/3.0/_modules/django/core/validators/#URLValidator
    - https://github.com/django/django/blob/stable/1.3.x/django/core/validators.py#L45
    '''

    ul = '\u00a1-\uffff'  # unicode letters range (must not be a raw string)

    # protocol patterns
    protocol_re = r'(?:http|ftp)s?://)?'  # http:// or https://
    # Host patterns
    hostname_re = (
        r'([a-z' + ul + r'0-9](?:[a-z' + ul + r'0-9-]{0,61}[a-z' + ul + r'0-9])?'
    )

    # Max length for domain name labels is 63 characters per RFC 1034 sec. 3.1
    domain_re = r'(?:\.(?!-)[a-z' + ul + r'0-9-]{1,63}(?<!-))*'
    tld_re = (
        r'\.'  # dot
        r'(?!-)'  # can't start with a dash
        r'(?:[a-z' + ul + '-]{2,63}'  # domain label
        r'|xn--[a-z0-9]{1,59})'  # or punycode label
        r'(?<!-)'  # can't end with a dash
        r'\.?'  # may have a trailing dot
        r'(?:/?|[/?]\S+)?'  # optional end slash
        r'|localhost'  # localhost
        r'(?::\d+)?'  # optional port
        r'(?:/?|[/?]\S+)?'  # optional end slash
    )
    host_re = '^(' + protocol_re + hostname_re + domain_re + tld_re + ')$'

    valid_hostname_pattern = re.compile(host_re, re.IGNORECASE)

    match_found = valid_hostname_pattern.match(ip)

    if not match_found:
        raise (
            ValidationError(  # Both IP and Hostname validation failed
                'The value ['
                + ip
                + '] is not formatted correctly. (i.e. cmu-sei.cert.org, 192.168.1.1, 10.0.0.0-10.0.0.255, or 10.0.0.0-255 are valid examples)'
            )
        )
