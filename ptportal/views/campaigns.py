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
from ..models import Campaign
import datetime


class Campaigns(generic.base.TemplateView):
    template_name = "ptportal/campaigns.html"

    def get_context_data(self, **kwargs):
        context = {}
        context['campaigns'] = Campaign.objects.all().order_by('order')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)
        campaigns = []

        for order, data in enumerate(postData['results']):
            if (
                data['emails_sent']
                == data['emails_delivered']
                == data['total_clicks']
                == data['unique_clicks']
                == data['time_to_first_click']
                == data['creds_harvested']
                == data['number_exploited']
                == data['length_of_campaign']
                == ""
            ):
                continue

            try:
                click_rate = int(data['unique_clicks']) / int(data['emails_delivered'])
            except:
                click_rate = 0.0

            if data['creds_harvested'] == "":
                creds_harvested = None
            else:
                creds_harvested = int(data['creds_harvested'])

            if data['number_exploited'] == "":
                number_exploited = None
            else:
                number_exploited = int(data['number_exploited'])

            if Campaign.objects.filter(order=order + 1).exists():
                obj = Campaign.objects.filter(order=order + 1).first()
                obj.emails_sent=data['emails_sent'] or 0
                obj.emails_delivered=data['emails_delivered'] or 0
                obj.total_clicks=data['total_clicks'] or 0
                obj.unique_clicks=data['unique_clicks'] or 0
                obj.click_rate=click_rate
                obj.time_to_first_click=data['time_to_first_click'] or "00:00:00"
                obj.creds_harvested=creds_harvested
                obj.number_exploited=number_exploited
                obj.length_of_campaign=data['length_of_campaign'] or 0
                obj.campaign_description=postData['descriptions'][order]['campaign_description'] or ""
                obj.save()

            else:
                try:
                    obj = Campaign.objects.create(
                        order=order + 1,
                        emails_sent=data['emails_sent'] or 0,
                        emails_delivered=data['emails_delivered'] or 0,
                        total_clicks=data['total_clicks'] or 0,
                        unique_clicks=data['unique_clicks'] or 0,
                        click_rate=click_rate,
                        time_to_first_click=data['time_to_first_click'] or "00:00:00",
                        creds_harvested=creds_harvested,
                        number_exploited=number_exploited,
                        length_of_campaign=data['length_of_campaign'] or 0,
                        campaign_description=postData['descriptions'][order]['campaign_description'] or ""
                    )

                except (KeyError, ValidationError) as e:
                    print(e)
                    return HttpResponse(status=400, reason=e)

            campaigns.append(obj)

        deletedItems = set(Campaign.objects.all()) - set(campaigns)

        for deleted in deletedItems:
            deleted.delete()

        return HttpResponse(status=200)
