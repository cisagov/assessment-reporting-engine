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
from django.core import serializers
from django.template.defaultfilters import slugify
from django.http import HttpResponse
from django.urls import reverse_lazy, reverse
import json
from ptportal.forms import NarrativeForm
from ptportal.models import Narrative, NarrativeType, NarrativeScreenshot, Tools, ATTACK


def ajax_get_narrative_images(request):
    narrative = Narrative.objects.filter(slug=request.GET.get('narrative')).first()
    images = NarrativeScreenshot.objects.filter(narrative=narrative).values()
    data = {}
    data['images'] = list(images)
    return JsonResponse(data, safe=False)


def ajax_delete_narrative_images(request):
    if NarrativeScreenshot.objects.filter(file=request.POST.get('image')).exists():
        image = NarrativeScreenshot.objects.filter(file=request.POST.get('image')).first()
        image.delete()
        return JsonResponse({})
    else:
        return JsonResponse({})


class NarrativeCreate(generic.edit.CreateView):
    model = Narrative
    form_class = NarrativeForm
    template_name = 'ptportal/narrative/narrative_form.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['all_tools'] = serializers.serialize("json", Tools.objects.all())
        context['techniques'] = serializers.serialize("json", ATTACK.objects.all())

        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.POST['data'])

        try:
            diagram = request.FILES['file']
        except:
            diagram = False

        order = Narrative.objects.filter(assessment_type__slug=self.kwargs['narrative_assessment_type']).count() + 1
        narrative_type = NarrativeType.objects.filter(slug=self.kwargs['narrative_assessment_type']).first()

        try:
            narrative = Narrative.objects.create(
                        assessment_type=narrative_type,
                        order=order,
                        name=str(self.kwargs['narrative_assessment_type']).capitalize() + " Attack Path",
                    )
        except Exception as e:
            print(e)
            return HttpResponse(status=500)

        techniques = []
        tools = []

        if len(postData['imageUpload']) == 0 or postData['newImage'] == True:
            try:
                NarrativeScreenshot.objects.filter(narrative=narrative).first().delete()
            except Exception as e:
                print(e)

        if len(postData['imageUpload']) > 0:
            for index, data in enumerate(postData['imageUpload']):
                try:
                    if postData['newImage'] == False:
                        obj = NarrativeScreenshot.objects.get(narrative=narrative)
                        obj.caption = data['caption']
                        obj.save()
                    else:
                        obj = NarrativeScreenshot.objects.create(
                            file=diagram,
                            caption=data['caption'],
                            narrative=narrative
                        )
                except Exception as e:
                    continue

        for i in postData['newTools']:
            try:
                Tools.objects.create(
                    name=i['toolName'],
                    url=i['toolURL']
                )
            except Exception as e:
                print(e)
                continue

        for i in postData['selectedTools']:
            tool = Tools.objects.get(name=i)
            try:
                tools.append(Tools.objects.get(
                    name=i)
                )
            except Exception as e:
                print(e)
                continue

        try:
            narrative.tools.clear()
            narrative.tools.add(*tools)
        except Exception as e:
            print(e)

        for i in postData['selectedTechniques']:
            try:
                techniques.append(ATTACK.objects.get(
                    name=i)
                )
            except Exception as e:
                print(e)
                continue

        try:
            narrative.attack.clear()
            narrative.attack.add(*techniques)
        except Exception as e:
            print(e)

        return HttpResponse(status=200)


class NarrativeEdit(generic.edit.UpdateView):
    model = Narrative
    form_class = NarrativeForm
    template_name = 'ptportal/narrative/narrative_form.html'

    def get_object(self):
        return get_object_or_404(
            Narrative,
            assessment_type__slug=self.kwargs['narrative_assessment_type'],
            slug=self.kwargs['narrative_name'],
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        narrative = self.get_object()
        context['diagram'] = NarrativeScreenshot.objects.filter(narrative=self.get_object()).first()
        context['all_tools'] = serializers.serialize("json", Tools.objects.all())
        context['used_tools'] = serializers.serialize("json", narrative.tools.all())
        context['techniques'] = serializers.serialize("json", ATTACK.objects.all())

        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.POST['data'])

        try:
            diagram = request.FILES['file']
        except Exception as e:
            print(e)
            diagram = False

        narrative = self.get_object()
        techniques = []
        tools = []

        if len(postData['imageUpload']) == 0 or postData['newImage'] == True:
            try:
                NarrativeScreenshot.objects.filter(narrative=narrative).first().delete()
            except Exception as e:
                print(e)

        if len(postData['imageUpload']) > 0:
            for index, data in enumerate(postData['imageUpload']):
                try:
                    if postData['newImage'] == False:
                        obj = NarrativeScreenshot.objects.get(narrative=narrative)
                        obj.caption = data['caption']
                        obj.save()
                    else:
                        obj = NarrativeScreenshot.objects.create(
                            file=diagram,
                            caption=data['caption'],
                            narrative=narrative
                        )
                except Exception as e:
                    print(e)
                    continue

        for i in postData['newTools']:
            try:
                Tools.objects.create(
                    name=i['toolName'],
                    url=i['toolURL']
                )
            except Exception as e:
                print(e)
                continue

        for i in postData['selectedTools']:
            tool = Tools.objects.get(name=i)
            try:
                tools.append(Tools.objects.get(
                    name=i)
                )
            except Exception as e:
                print(e)
                continue

        try:
            narrative.tools.clear()
            narrative.tools.add(*tools)
        except Exception as e:
            print(e)

        for i in postData['selectedTechniques']:
            try:
                techniques.append(ATTACK.objects.get(
                    name=i)
                )
            except Exception as e:
                print(e)
                continue

        try:
            narrative.attack.clear()
            narrative.attack.add(*techniques)
        except Exception as e:
            print(e)

        return HttpResponse(status=200)


class NarrativeDelete(generic.edit.DeleteView):
    model = Narrative
    template_name = 'ptportal/narrative/narrative_confirm_delete.html'
    success_url = reverse_lazy('index')

    def get_object(self):
        return get_object_or_404(
            Narrative,
            assessment_type__slug=self.kwargs['narrative_assessment_type'],
            slug=self.kwargs['narrative_name'],
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

    def delete(self, request, *args, **kwargs):
        narrative = self.get_object()
        order = narrative.order
        assessment_type = narrative.assessment_type
        slug = narrative.assessment_type.slug
        super().delete(request, *args, **kwargs)
        
        for i in Narrative.objects.filter(assessment_type=assessment_type):
            if order < i.order:
                try:
                    i.order -= 1
                    i.save()
                except:
                    continue
        return redirect(reverse('narratives', args=(slug,)))


class Narratives(generic.ListView):
    model = Narrative
    template_name = 'ptportal/narrative/narrative_list.html'

    def get_queryset(self):
        self.assessment_type = get_object_or_404(NarrativeType, slug=self.kwargs['narrative_assessment_type'])
        return Narrative.objects.filter(assessment_type=self.assessment_type)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['narrative_assessment_type'] = get_object_or_404(
            NarrativeType, slug=self.kwargs['narrative_assessment_type']
        )
        
        self.assessment_type = get_object_or_404(NarrativeType, slug=self.kwargs['narrative_assessment_type'])
        context['paths'] = []

        for i in Narrative.objects.filter(assessment_type=self.assessment_type):
            context['paths'].append(tuple((i, i.screenshots.first())))

        return context


class NarrativeTypes(generic.ListView):
    model = NarrativeType
    template_name = 'ptportal/narrative/narrative_types_list.html'