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
from ..models import PortMappingHost


class PortMapping(generic.base.TemplateView):
    template_name = "ptportal/external_port_mapping.html"

    def get_context_data(self, **kwargs):
        context = {}
        context['hosts'] = PortMappingHost.objects.all().order_by('order')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.body)

        submittedIPs = []

        for order, mapping in enumerate(postData):
            if (
                mapping['ip']
                == mapping['hostname']
                == mapping['ports']
                == mapping['services']
                == ""
            ):
                continue

            if PortMappingHost.objects.filter(ip=mapping['ip']).exists():
                host = PortMappingHost.objects.filter(ip=mapping['ip']).first()
                host.order = order + 1
                host.hostname = mapping['hostname']
                host.ports = mapping['ports']
                host.services = mapping['services']
                host.save()

            else:
                try:
                    host = PortMappingHost.objects.create(
                        order = order + 1,
                        ip = mapping['ip'],
                        hostname = mapping['hostname'],
                        ports = mapping['ports'],
                        services = mapping['services'],
                    )
                except Exception as e:
                    print(e)
                    continue

            submittedIPs.append(host)

        deletedIPs = set(PortMappingHost.objects.all()) - set(submittedIPs)

        for deleted in deletedIPs:
            deleted.delete()

        return HttpResponse(status=200)
