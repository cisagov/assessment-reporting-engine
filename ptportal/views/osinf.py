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
from django.core import serializers
from django.http import HttpResponse
import json, re, os
from ..models import BreachMetrics, BreachedEmail


class OSINF(generic.base.TemplateView):
    template_name = "ptportal/osinf.html"

    def get_context_data(self, **kwargs):
        context = {}
        context['emails'] = BreachedEmail.objects.all().order_by('order')
        context['metrics'] = BreachMetrics.objects.all().first()
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)

        try:
            tp_percentage = int(postData['emails_identified_tp']) / int(postData['emails_identified'])
        except:
            tp_percentage = 0.0

        if BreachMetrics.objects.all().count() > 0:
            obj = BreachMetrics.objects.all().first()
            obj.emails_identified=postData['emails_identified'] or 0
            obj.emails_identified_tp=postData['emails_identified_tp'] or 0
            obj.percentage_emails=tp_percentage
            obj.creds_identified=postData['creds_identified'] or 0
            obj.creds_identified_unique=postData['creds_identified_unique'] or 0
            obj.creds_validated=postData['creds_validated'] or 0
            obj.save()

        else:
            try:
                obj = BreachMetrics.objects.create(
                    emails_identified=postData['emails_identified'] or 0,
                    emails_identified_tp=postData['emails_identified_tp'] or 0,
                    percentage_emails=tp_percentage,
                    creds_identified=postData['creds_identified'] or 0,
                    creds_identified_unique=postData['creds_identified_unique'] or 0,
                    creds_validated=postData['creds_validated'] or 0
                )

            except (KeyError, ValidationError) as e:
                print(e)
                return HttpResponse(status=400, reason=e)

        emails = []

        for order, data in enumerate(postData['emails']):

            if (
                data['email']
                == data['information']
                == ""
            ):
                continue

            if BreachedEmail.objects.filter(order=order + 1).exists():
                obj = BreachedEmail.objects.filter(order=order + 1).first()
                obj.email_address=data['email']
                obj.breach_info=data['information']
                obj.save()

            else:
                try:
                    obj = BreachedEmail.objects.create(
                        order=order + 1,
                        email_address=data['email'],
                        breach_info=data['information']
                    )

                except (KeyError, ValidationError) as e:
                    print(e)
                    return HttpResponse(status=400, reason=e)
            emails.append(obj)

        deletedItems = set(BreachedEmail.objects.all()) - set(emails)

        for deleted in deletedItems:
            deleted.delete()

        return HttpResponse(status=200)