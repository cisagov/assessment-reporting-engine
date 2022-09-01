# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.views import generic, View
from ...forms import *
from ...models import *
from django.http import HttpResponse, JsonResponse
import json


def ajax_get_attack_paths(request):
    # narrative = AttackPathNarrative.objects.filter(slug=request.GET.get('narrative_slug')).first()
    paths = AttackPath.objects.all().values()
    data = {}
    data['paths'] = list(paths)
    return JsonResponse(data=data)


class AttackPathDisplay(generic.ListView):
    model = AttackPath
    template_name = 'ptportal/attack_paths.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['paths'] = AttackPath.objects.all()
        return context


class AttackPathView(View):
    def get(self, request, *args, **kwargs):
        view = AttackPathDisplay.as_view()
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.POST['data'])
        print(postData)
        files = [request.FILES.get('file%d' % i) for i in range(0, len(request.FILES))]
        uploadedPaths = []
        for index, data in enumerate(postData):
            if data['uuid'] is not None:
                obj = AttackPath.objects.get(figure_uuid=data['uuid'])
                obj.chronology = index
                obj.figure_description = data['description']
                obj.save()
                uploadedPaths.append(obj)
            else:
                file = files.pop()

                obj = AttackPath.objects.create(
                    chronology=index,
                    figure_description=data['description'],
                    image_upload=file,
                )
                # uploadedPaths.append(obj)

        deletedPaths = set(AttackPath.objects.all()) - set(uploadedPaths)
        for deleted in deletedPaths:
            deleted.delete()

        return HttpResponse(status=200)
