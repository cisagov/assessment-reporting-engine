# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from itertools import zip_longest

from django.http import JsonResponse, Http404
from django.shortcuts import redirect
from django.template.defaultfilters import slugify
from django.views import generic, View
from django.contrib import messages

from ...models import *


def ajax_image_delete(request):
    images = request.POST.getlist('images[]')
    for image in images:
        if ImageFinding.objects.filter(file=image).exists():
            image = ImageFinding.objects.filter(file=image).first()
            image.delete()
    return JsonResponse({})


class ImageDisplay(generic.ListView):
    model = ImageFinding
    template_name = 'ptportal/finding/image_upload.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['finding'] = UploadedFinding.objects.filter(
            slug=self.kwargs['slug']
        ).first()
        return context

    def get_queryset(self):
        finding = UploadedFinding.objects.filter(slug=self.kwargs['slug']).first()
        images = ImageFinding.objects.filter(belongs_to_finding=finding)
        print('get_quetset_finding: ', finding)
        print('images: ', images)
        return images


class ImagePosts(View):
    def post(self, request, *args, **kwargs):
        print('image request.POST: ', request.POST)
        print('image request.FILES: ', request.FILES)
        finding = UploadedFinding.objects.filter(slug=self.kwargs['slug']).first()
        order = 0
        files = [
            request.FILES.get('file[%d]' % i) for i in range(0, len(request.FILES))
        ]
        files = list(reversed(files))
        for id, caption, name in zip_longest(
            request.POST.getlist('file_pk'),
            request.POST.getlist('file_captions'),
            request.POST.getlist('file_name'),
        ):
            # if there is no id
            if id == "":
                print('id is blank')
                f = files.pop()
                name = name
                ext = f.name.split('.')[-1]
                img = ImageFinding(
                    file=f,
                    ext=ext,
                    slug=slugify(name),
                    caption=caption,
                    order=order,
                    belongs_to_finding=finding,
                )
                img.save()
            else:
                obj = ImageFinding.objects.get(pk=id)
                obj.caption = caption
                obj.order = order
                obj.save()
            order += 1
        finding.screenshot_description = request.POST['screenshot_description']
        finding.save(update_fields=['screenshot_description'])
        messages.get_messages(
            request
        )  # Clears the messages to eliminate duplicates alerts in template
        messages.success(request, finding.finding, extra_tags=self.kwargs['slug'])
        return redirect("/")


class FindingImages(View):
    def get(self, request, *args, **kwargs):
        finding = UploadedFinding.objects.filter(slug=self.kwargs['slug']).first()
        view = ImageDisplay.as_view()
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        view = ImagePosts.as_view()
        return view(request, *args, **kwargs)
