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
from django.http import HttpResponse, JsonResponse
import json

from ..models import UploadedFinding


class RiskScoring(generic.base.TemplateView):
    template_name = 'ptportal/risk_score.html'

    def get_context_data(self, **kwargs):
        context = {}
        context['findings'] = UploadedFinding.objects.all().order_by('uploaded_finding_id')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)

        for order, finding in enumerate(postData):
            if (
                finding['uploaded_finding_id']
                == finding['uploaded_finding_name']
                == finding['severity']
                == finding['magnitude']
                == finding['likelihood']
                == finding['kev']
                == finding['mitigation']
                == finding['risk_score']
                == ""
            ):
                continue

            if finding['kev'] == 'True':
                likelihood = 100
            elif finding['likelihood'] == '':
                likelihood = None
            elif (int(finding['likelihood']) < 0 or int(finding['likelihood']) > 100):
                return HttpResponse(status=400, reason="Likelihood must be integer between 1 and 100.")
            else:
                likelihood = int(finding['likelihood'])

            '''
            ******************************************************************************
             The mappings and risk score formula below should be adjusted based on the
             methodology of the assessing entity. All values are placeholders and do not 
             reflect an actual risk scoring methodology.
            ******************************************************************************
            '''
            sev_map = {'Critical': 10, 'High': 9, 'Medium': 8, 'Low': 7, 'Informational': 6}
            mag_map = {'': 0, '1-10': 10, '11-20': 20, '21-30': 30, '31+': 40}
            sev = finding['severity']
            mag = finding['magnitude']

            if likelihood == None:
                lkd = 0
            else:
                lkd = likelihood

            score = sev_map[sev] + mag_map[mag] + lkd

            try:
                UploadedFinding.objects.filter(
                    uploaded_finding_name=finding['uploaded_finding_name']).update(
                        magnitude=finding['magnitude'], 
                        likelihood=likelihood,
                        risk_score=score
                    )
            except (KeyError, ValidationError) as e:
                return HttpResponse(status=400, reason=e)
        return HttpResponse(status=200)
        