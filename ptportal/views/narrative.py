# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from itertools import zip_longest

from django.http import JsonResponse
from django.shortcuts import redirect, get_object_or_404
from django.views import generic
from django.contrib import messages
from django.template.defaultfilters import slugify
from ptportal.forms import NarrativeForm
from ptportal.models import Narrative, NarrativeType, ToolScreenshot


def ajax_get_narrative_images(request):
    narrative = Narrative.objects.filter(slug=request.GET.get('narrative')).first()
    images = ToolScreenshot.objects.filter(narrative=narrative).values()
    data = {}
    data['images'] = list(images)
    return JsonResponse(data, safe=False)


def ajax_delete_narrative_images(request):
    if ToolScreenshot.objects.filter(file=request.POST.get('image')).exists():
        image = ToolScreenshot.objects.filter(file=request.POST.get('image')).first()
        image.delete()
        return JsonResponse({})
    else:
        return JsonResponse({})


class NarrativeEdit(generic.edit.UpdateView):
    model = Narrative
    form_class = NarrativeForm
    template_name = 'ptportal/narrative/narrative_form.html'

    def get_object(self):
        return get_object_or_404(
            Narrative,
            type__slug=self.kwargs['narrative_type'],
            slug=self.kwargs['narrative_name'],
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['screenshots'] = ToolScreenshot.objects.filter(
            narrative=self.get_object()
        )
        return context

    def post(self, request, *args, **kwargs):
        narrative = self.get_object()
        form = NarrativeForm(request.POST or None, instance=narrative)
        files = [
            request.FILES.get('file[%d]' % i) for i in range(0, len(request.FILES))
        ]
        files = list(reversed(files))
        names = request.POST.getlist('file_name')
        captions = request.POST.getlist('file_captions')
        pks = request.POST.getlist('file_pk')
        order = 0
        for pk, name, caption in zip_longest(pks, names, captions):
            if pk == "":
                f = files.pop()
                image = ToolScreenshot(
                    narrative=narrative,
                    file=f,
                    slug=slugify(name),
                    caption=caption,
                    order=order,
                    ext=f.name.split('.')[-1],
                )
                image.save()
            else:
                image = ToolScreenshot.objects.get(pk=pk)
                image.caption = caption
                image.order = order
                image.save()
            order += 1

        if form.is_valid():
            print("form is valid!")
            narrative = form.save()
        else:
            print('form is not valid')
            print('form.errors: ', form.errors)
            return super().post(self, request, *args, **kwargs)

        return redirect(narrative.type)


class Narratives(generic.ListView):
    model = Narrative
    template_name = 'ptportal/narrative/narrative_list.html'

    def get_queryset(self):
        self.type = get_object_or_404(NarrativeType, slug=self.kwargs['narrative_type'])
        return Narrative.objects.filter(type=self.type)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['narrative_type'] = get_object_or_404(
            NarrativeType, slug=self.kwargs['narrative_type']
        )
        return context


class NarrativeTypes(generic.ListView):
    model = NarrativeType
    template_name = 'ptportal/narrative/narrative_types_list.html'
