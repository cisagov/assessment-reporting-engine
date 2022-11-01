# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from django.shortcuts import redirect
from django.conf import settings
import re


class LoginRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.login_url = settings.LOGIN_URL
        self.open_urls = [self.login_url] + getattr(settings, 'OPEN_URLS', [])

    def __call__(self, request):
        pattern = re.compile(
            '/ptportal/reset/[0-9A-Za-z_\-]+/[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20}/'
        )
        password_reset = pattern.match(request.path_info)

        if not (
            request.user.is_authenticated
            or request.path_info in self.open_urls
            or password_reset
        ):
            return redirect(self.login_url)

        return self.get_response(request)
