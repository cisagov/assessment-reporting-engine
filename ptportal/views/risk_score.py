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
                == finding['probability']
                == finding['kev']
                == finding['mitigation']
                == finding['risk_score']
                == ""
            ):
                continue

            if (int(finding['magnitude']) < 0 or int(finding['magnitude']) > 100):
                return HttpResponse(status=400, reason="Magnitude must be integer between 0 and 100.")

            if (int(finding['probability']) < 0 or int(finding['probability']) > 100):
                return HttpResponse(status=400, reason="Probability must be integer between 0 and 100.")

            # placeholder - to be replaced with risk score weights and formula
            sev_map = {'Critical': 10, 'High': 8, 'Medium': 5, 'Low': 3, 'Informational': 1}
            kev_map = {'True': 10, 'False': 1}
            sev = finding['severity']
            kev = finding['kev']
            mag = int(finding['magnitude'])
            prob = int(finding['probability'])
            score = sev_map[sev] + kev_map[kev] + mag + prob

            try:
                UploadedFinding.objects.filter(
                    uploaded_finding_name=finding['uploaded_finding_name']).update(
                        magnitude=finding['magnitude'], 
                        probability=finding['probability'],
                        risk_score=score
                    )
            except (KeyError, ValidationError) as e:
                return HttpResponse(status=400, reason=e)
        return HttpResponse(status=200)
        