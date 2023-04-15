# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.core.exceptions import ObjectDoesNotExist
from django.core.files.base import ContentFile
from django.shortcuts import redirect
from django.views import generic
from django.urls import reverse_lazy, reverse
from django.utils import timezone
from django.http import HttpResponse
import json, base64, hashlib

from ..models import (
    InfraTS,
    InfraWS,
    InfraPhishing,
    InfraRedirectors,
    LateralMovement,
    Files,
    InteractiveLogons,
    HighImpactScans,
    SignificantEvents,
    Artifact
)


class ActivityTracker(generic.base.TemplateView):
    template_name = "ptportal/assessment_activity_tracker.html"

    def get_context_data(self, **kwargs):
        context = {}
        context['infra_ext_ts'] = InfraTS.objects.filter(assessment_type='External').order_by('order')
        context['infra_int_ts'] = InfraTS.objects.filter(assessment_type='Internal').order_by('order')
        context['infra_phi'] = InfraPhishing.objects.all().order_by('order')
        context['infra_red'] = InfraRedirectors.objects.all().order_by('order')
        context['infra_ext_ws'] = InfraWS.objects.filter(assessment_type='External').order_by('order')
        context['infra_int_ws'] = InfraWS.objects.filter(assessment_type='Internal').order_by('order')
        context['lat_mov'] = LateralMovement.objects.all().order_by('order')
        context['files'] = Files.objects.all().order_by('order')
        context['int_log'] = InteractiveLogons.objects.all().order_by('order')
        context['scans'] = HighImpactScans.objects.all().order_by('order')
        context['sig_eve'] = SignificantEvents.objects.all().order_by('order')
        context['art'] = Artifact.objects.all().order_by('order')
        return context

    def post(self, request, *args, **kwargs):
        postData = json.loads(request.POST['data'])

        items = {}

        for i in postData:
            items.update(i)

        newItems = []

        for order, data in enumerate(items['ext_ts']):

            if data['killdate'] == None:
                killdate = ""
            else:
                killdate = data['killdate']

            if (
                data['hostname']
                == data['ip']
                == data['domain']
                == killdate
                == ""
            ):
                continue

            if InfraTS.objects.filter(order=order + 1, assessment_type="External").exists():
                obj = InfraTS.objects.filter(order=order + 1, assessment_type="External").first()
                obj.hostname = data['hostname']
                obj.ip_address = data['ip']
                obj.domain = data['domain']
                obj.beacon_kill_date = None if data['killdate'] == None else data['killdate'][0:10]
                obj.save()
            else:
                try:
                    obj = InfraTS.objects.create(
                        order = order + 1,
                        assessment_type = "External",
                        hostname = data['hostname'],
                        ip_address = data['ip'],
                        domain = data['domain'],
                        beacon_kill_date = None if data['killdate'] == None else data['killdate'][0:10]
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(InfraTS.objects.filter(assessment_type="External")) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['ext_ph']):

            if (
                data['hostname']
                == data['ip']
                == data['domain']
                == ""
            ):
                continue

            if InfraPhishing.objects.filter(order=order + 1).exists():
                obj = InfraPhishing.objects.filter(order=order + 1).first()
                obj.hostname = data['hostname']
                obj.ip_address = data['ip']
                obj.domain = data['domain']
                obj.save()
            else:
                try:
                    obj = InfraPhishing.objects.create(
                        order = order + 1,
                        hostname = data['hostname'],
                        ip_address = data['ip'],
                        domain = data['domain'],
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(InfraPhishing.objects.all()) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['ext_rd']):

            if (
                data['url']
                == ""
            ):
                continue

            if InfraRedirectors.objects.filter(order=order + 1).exists():
                obj = InfraRedirectors.objects.filter(order=order + 1).first()
                obj.url = data['url']
                obj.save()
            else:
                try:
                    obj = InfraRedirectors.objects.create(
                        order = order + 1,
                        url = data['url']
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(InfraRedirectors.objects.all()) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['ext_ws']):

            if (
                data['hostname']
                == data['ip']
                == data['os']
                == data['operator']
                == ""
            ):
                continue

            if InfraWS.objects.filter(order=order + 1, assessment_type="External").exists():
                obj = InfraWS.objects.filter(order=order + 1, assessment_type="External").first()
                obj.hostname = data['hostname']
                obj.ip_address = data['ip']
                obj.operating_system = data['os']
                obj.operator = data['operator']
                obj.save()
            else:
                try:
                    obj = InfraWS.objects.create(
                        order = order + 1,
                        assessment_type = "External",
                        hostname = data['hostname'],
                        ip_address = data['ip'],
                        operating_system = data['os'],
                        operator = data['operator']
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(InfraWS.objects.filter(assessment_type="External")) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['int_ts']):

            if data['killdate'] == None:
                killdate = ""
            else:
                killdate = data['killdate']

            if (
                data['hostname']
                == data['ip']
                == data['domain']
                == killdate
                == ""
            ):
                continue

            if InfraTS.objects.filter(order=order + 1, assessment_type="Internal").exists():
                obj = InfraTS.objects.filter(order=order + 1, assessment_type="Internal").first()
                obj.hostname = data['hostname']
                obj.ip_address = data['ip']
                obj.domain = data['domain']
                obj.beacon_kill_date = None if data['killdate'] == None else data['killdate'][0:10]
                obj.save()
            else:
                try:
                    obj = InfraTS.objects.create(
                        order = order + 1,
                        assessment_type = "Internal",
                        hostname = data['hostname'],
                        ip_address = data['ip'],
                        domain = data['domain'],
                        beacon_kill_date = None if data['killdate'] == None else data['killdate'][0:10]
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(InfraTS.objects.filter(assessment_type="Internal")) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['int_ws']):

            if (
                data['hostname']
                == data['ip']
                == data['os']
                == data['operator']
                == ""
            ):
                continue

            if InfraWS.objects.filter(order=order + 1, assessment_type="Internal").exists():
                obj = InfraWS.objects.filter(order=order + 1, assessment_type="Internal").first()
                obj.hostname = data['hostname']
                obj.ip_address = data['ip']
                obj.operating_system = data['os']
                obj.operator = data['operator']
                obj.save()
            else:
                try:
                    obj = InfraWS.objects.create(
                        order = order + 1,
                        assessment_type = "Internal",
                        hostname = data['hostname'],
                        ip_address = data['ip'],
                        operating_system = data['os'],
                        operator = data['operator']
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(InfraWS.objects.filter(assessment_type="Internal")) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['lat_mov']):

            if data['beacon'] == None:
                beacon = ""
            else:
                beacon = data['beacon']

            if (
                beacon
                == data['hostname']
                == data['ip']
                == data['account']
                == data['moved']
                == data['method']
                == data['callback']
                == data['notes']
                == ""
            ):
                continue

            if LateralMovement.objects.filter(order=order + 1).exists():
                obj = LateralMovement.objects.filter(order=order + 1).first()
                obj.initial_beacon = data['beacon']
                obj.hostname = data['hostname']
                obj.ip_address = data['ip']
                obj.account_used = data['account']
                obj.host_moved_from = data['moved']
                obj.movement_method = data['method']
                obj.callback_server = data['callback']
                obj.notes = data['notes']
                obj.save()
            else:
                try:
                    obj = LateralMovement.objects.create(
                        order = order + 1,
                        initial_beacon = data['beacon'],
                        hostname = data['hostname'],
                        ip_address = data['ip'],
                        account_used = data['account'],
                        host_moved_from = data['moved'],
                        movement_method = data['method'],
                        callback_server = data['callback'],
                        notes = data['notes']
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(LateralMovement.objects.all()) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['file']):

            if data['created'] == None:
                created = ""
            else:
                created = data['created']

            if data['deleted'] == None:
                deleted = ""
            else:
                deleted = data['deleted']

            if (
                data['hostname']
                == data['ip']
                == data['location']
                == data['filename']
                == data['status']
                == created
                == deleted
                == ""
            ):
                continue

            if Files.objects.filter(order=order + 1).exists():
                obj = Files.objects.filter(order=order + 1).first()
                obj.hostname = data['hostname']
                obj.ip_address = data['ip']
                obj.file_location = data['location']
                obj.file_name = data['filename']
                obj.status = data['status']
                obj.datetime_created = data['created']
                obj.datetime_deleted = data['deleted']
                obj.save()
            else:
                try:
                    obj = Files.objects.create(
                        order = order + 1,
                        hostname = data['hostname'],
                        ip_address = data['ip'],
                        file_location = data['location'],
                        file_name = data['filename'],
                        status = data['status'],
                        datetime_created = data['created'],
                        datetime_deleted = data['deleted']
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(Files.objects.all()) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['int_log']):

            if data['logon'] == None:
                logon = ""
            else:
                logon = data['logon']

            if data['logoff'] == None:
                logoff = ""
            else:
                logoff = data['logoff']

            if (
                data['hostname']
                == data['ip']
                == data['account']
                == data['method']
                == logon
                == logoff
                == data['operator']
                == data['notes']
                == ""
            ):
                continue

            if InteractiveLogons.objects.filter(order=order + 1).exists():
                obj = InteractiveLogons.objects.filter(order=order + 1).first()
                obj.hostname = data['hostname']
                obj.ip_address = data['ip']
                obj.account = data['account']
                obj.method = data['method']
                obj.logon_datetime = data['logon']
                obj.logoff_datetime = data['logoff']
                obj.operator = data['operator']
                obj.notes = data['notes']
                obj.save()
            else:
                try:
                    obj = InteractiveLogons.objects.create(
                        order = order + 1,
                        hostname = data['hostname'],
                        ip_address = data['ip'],
                        account = data['account'],
                        method = data['method'],
                        logon_datetime = data['logon'],
                        logoff_datetime = data['logoff'],
                        operator = data['operator'],
                        notes = data['notes']
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(InteractiveLogons.objects.all()) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['scan']):

            if data['start'] == None:
                start = ""
            else:
                start = data['start']

            if data['end'] == None:
                end = ""
            else:
                end = data['end']

            if (
                data['type']
                == data['tool']
                == data['range']
                == data['domain']
                == start
                == end
                == data['notes']
                == ""
            ):
                continue

            if HighImpactScans.objects.filter(order=order + 1).exists():
                obj = HighImpactScans.objects.filter(order=order + 1).first()
                obj.scan_type = data['type']
                obj.tool_used = data['tool']
                obj.ip_ranges_targeted = data['range']
                obj.domains_targeted = data['domain']
                obj.scan_start = data['start']
                obj.scan_end = data['end']
                obj.notes = data['notes']
                obj.save()
            else:
                try:
                    obj = HighImpactScans.objects.create(
                        order = order + 1,
                        scan_type = data['type'],
                        tool_used = data['tool'],
                        ip_ranges_targeted = data['range'],
                        domains_targeted = data['domain'],
                        scan_start = data['start'],
                        scan_end = data['end'],
                        notes = data['notes']
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(HighImpactScans.objects.all()) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()
        
        newItems = []

        for order, data in enumerate(items['sig_eve']):

            if data['start'] == None:
                start = ""
            else:
                start = data['start']

            if data['end'] == None:
                end = ""
            else:
                end = data['end']

            if (
                data['event']
                == data['notes']
                == start
                == end
                == ""
            ):
                continue

            if SignificantEvents.objects.filter(order=order + 1).exists():
                obj = SignificantEvents.objects.filter(order=order + 1).first()
                obj.event = data['event']
                obj.notes = data['notes']
                obj.start_datetime = data['start']
                obj.end_datetime = data['end']
                obj.save()
            else:
                try:
                    obj = SignificantEvents.objects.create(
                        order = order + 1,
                        event = data['event'],
                        notes = data['notes'],
                        start_datetime = data['start'],
                        end_datetime = data['end']
                    )
                except Exception as e:
                    print(e)
                    continue

            newItems.append(obj)

        deletedItems = set(SignificantEvents.objects.all()) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        newItems = []

        for order, data in enumerate(items['art']):

            if (
                data['name']
                == data['description']
                == data['md5']
                == data['sha1']
                == data['sha256']
                == ""
            ):
                continue

            if Artifact.objects.filter(order=order + 1).exists():
                if data['fileOrder'] == None:
                    obj = Artifact.objects.filter(order=order + 1).first()
                    obj.file_name = data['name']
                    obj.description = data['description']
                    obj.md5 = data['md5']
                    obj.sha1 = data['sha1']
                    obj.sha256 = data['sha256']
                    obj.save()
                else:
                    filename = "file" + str(data['fileOrder'])
                    file = request.FILES[filename]
                    try:
                        hashes = generate_file_hashes(file.read())
                        obj = Artifact.objects.filter(order=order + 1).first()
                        obj.file_name = data['name']
                        obj.description = data['description']
                        obj.md5 = hashes[0]
                        obj.sha1 = hashes[1]
                        obj.sha256 = hashes[2]
                        obj.save()   
                    except Exception as e:
                        print(e)  
                        continue
                    
            else:
                if data['fileOrder'] == None:
                    try:
                        obj = Artifact.objects.create(
                            order = order + 1,
                            file_name = data['name'],
                            description = data['description'],
                            md5 = data['md5'],
                            sha1 = data['sha1'],
                            sha256 = data['sha256']
                        )
                    except Exception as e:
                        print(e)
                        continue
                else:
                    filename = "file" + str(data['fileOrder'])
                    file = request.FILES[filename]
                    try:
                        hashes = generate_file_hashes(file.read())
                        obj = Artifact.objects.create(
                            order = order + 1,
                            file_name = data['name'],
                            description = data['description'],
                            md5 = hashes[0],
                            sha1 = hashes[1],
                            sha256 = hashes[2]
                        ) 
                    except Exception as e:
                        print(e)
                        continue

            newItems.append(obj)

        deletedItems = set(Artifact.objects.all()) - set(newItems)

        for deleted in deletedItems:
            deleted.delete()

        return HttpResponse(status=200)


def generate_file_hashes(filedata):
    md5 = hashlib.md5()
    sha1 = hashlib.sha1()
    sha256 = hashlib.sha256()

    md5.update(filedata)
    sha1.update(filedata)
    sha256.update(filedata)

    return (md5.hexdigest(), sha1.hexdigest(), sha256.hexdigest())

