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
from ..models import Ransomware, RansomwareScenarios


class RansomwareSusceptibility(generic.base.TemplateView):
    template_name = "ptportal/ransomware.html"

    def get_context_data(self, **kwargs):
        context = {}
        context['scenarios'] = RansomwareScenarios.objects.all().first()
        context['ransomware'] = Ransomware.objects.all().order_by('order')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)

        RansomwareScenarios.objects.all().delete()

        if postData['vuln'] != "" and postData['total'] != "":
            try:
                vuln = int(postData['vuln'])
                total = int(postData['total'])
                
            except ValueError:
                vuln = 0
                total = 0

            try:
                    RansomwareScenarios.objects.create(
                        vuln=vuln,
                        total=total
                    )

            except (KeyError, ValidationError) as e:
                return HttpResponse(status=400, reason=e)

        for order, data in enumerate(postData['results']):

            if data['time_start'] == None or data['disabled'] == True:
                time_start = ""
            else:
                time_start = data['time_start']

            if data['time_end'] == None or data['disabled'] == True or data['trigger'] == False:
                time_end = ""
            else:
                time_end = data['time_end']

            if (
                data['description']
                == data['trigger']
                == time_start
                == time_end
                == data['disabled']
                == ""
            ):
                continue

            if data['trigger'] == False:
                trigger = "N"
            else:
                trigger = "Y"

            obj = Ransomware.objects.filter(description=data['description'])

            if obj.exists():
                try:
                    obj.update(
                        trigger=trigger,
                        time_start=None if time_start == "" else time_start,
                        time_end=None if time_end == "" else time_end,
                        disabled=data['disabled']
                    )

                except (KeyError, ValidationError) as e:
                    return HttpResponse(status=400, reason=e)

            else:
                try:
                    Ransomware.objects.create(
                        order=order + 1,
                        description=data['description'],
                        trigger=trigger,
                        time_start=None if time_start == "" else time_start,
                        time_end=None if time_end == "" else time_end,
                        disabled=data['disabled']
                    )

                except (KeyError, ValidationError) as e:
                    return HttpResponse(status=400, reason=e)
        return HttpResponse(status=200)
