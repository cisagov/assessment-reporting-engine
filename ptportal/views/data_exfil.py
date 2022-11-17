# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.core.exceptions import ValidationError
from django.views import generic
from django.http import HttpResponse
import json
from ..models import DataExfil


class DataExfiltration(generic.base.TemplateView):
    template_name = "ptportal/data_exfiltration.html"

    def get_context_data(self, **kwargs):
        context = {}
        context['data_exfil'] = DataExfil.objects.all().order_by('order')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)

        DataExfil.objects.all().delete()
        for order, data in enumerate(postData):
            if (
                data['protocol']
                == data['datatype']
                == data['date_time']
                == data['detection']
                == data['prevention']
                == ""
            ):
                continue

            if data['detection'] == False:
                detect = "N"
            else:
                detect = "D"

            if data['prevention'] == False:
                prevent = "N"
            else:
                prevent = "B"

            try:
                DataExfil.objects.create(
                    order=order + 1,
                    protocol=data['protocol'],
                    datatype=data['datatype'],
                    date_time=data['date_time'],
                    detection=detect,
                    prevention=prevent
                )

            except (KeyError, ValidationError) as e:
                return HttpResponse(status=400, reason=e)
        return HttpResponse(status=200)
