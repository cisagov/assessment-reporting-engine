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
    InfraTSFindings,
    InfraWSFindings,
    LateralMovementFindings,
    PersistenceFindings,
    FilesFindings,
    InteractiveLogonsFindings,
    SignificantEventsFindings,
    ArtifactFindings,
)


class ActivityTracker(generic.base.TemplateView):
    template_name = 'ptportal/assessment_activity_tracker.html'

    def get_context_data(self, **kwargs):
        context = {}
        context['infra_ts'] = InfraTSFindings.objects.all()
        context['infra_ws'] = InfraWSFindings.objects.all()
        context['lat_mov'] = LateralMovementFindings.objects.all()
        context['persist'] = PersistenceFindings.objects.all()
        context['files'] = FilesFindings.objects.all()
        context['int_log'] = InteractiveLogonsFindings.objects.all()
        context['sig_eve'] = SignificantEventsFindings.objects.all()
        context['arttrack'] = ArtifactFindings.objects.all()
        return context


def generate_file_hashes(filedata):
    md5 = hashlib.md5()
    sha1 = hashlib.sha1()
    sha256 = hashlib.sha256()

    md5.update(filedata)
    sha1.update(filedata)
    sha256.update(filedata)

    return (md5.hexdigest(), sha1.hexdigest(), sha256.hexdigest())


def save_tracker(request):

    if request.method == 'POST':
        infrats_data = request.POST['infrats_findings']
        infraws_data = request.POST['infraws_findings']
        latmov_data = request.POST['latmov_findings']
        persist_data = request.POST['persist_findings']
        files_data = request.POST['files_findings']
        intlog_data = request.POST['intlog_findings']
        sigeve_data = request.POST['sigeve_findings']
        artifact_file_data = request.POST['artifact_files']

        delete_infrats = request.POST['delete_infrats']
        delete_infraws = request.POST['delete_infraws']
        delete_latmov = request.POST['delete_latmov']
        delete_persist = request.POST['delete_persist']
        delete_files = request.POST['delete_files']
        delete_intlog = request.POST['delete_intlog']
        delete_sigeve = request.POST['delete_sigeve']
        delete_arttrack = request.POST['delete_arttrack']

        infrats = json.loads(infrats_data)
        infraws = json.loads(infraws_data)
        latmov = json.loads(latmov_data)
        persist = json.loads(persist_data)
        files = json.loads(files_data)
        intlog = json.loads(intlog_data)
        sigeve = json.loads(sigeve_data)
        artifact_files = json.loads(artifact_file_data)

        dinfrats = json.loads(delete_infrats)
        dinfraws = json.loads(delete_infraws)
        dlatmov = json.loads(delete_latmov)
        dpersist = json.loads(delete_persist)
        dfiles = json.loads(delete_files)
        dintlog = json.loads(delete_intlog)
        dsigeve = json.loads(delete_sigeve)
        darttrack = json.loads(delete_arttrack)

        if dinfrats:
            for item in dinfrats:
                obj = InfraTSFindings.objects.filter(pk=item)
                obj.delete()

        if infrats:
            for item in infrats:
                if item['id'] == "":
                    InfraTSFindings.objects.create(
                        order=item['order'],
                        teamserver_ip=item['teamserver_ip'],
                        linked_domain=item['linked_domain'],
                        beacon_kill_date=item['beacon_kill_date'],
                    )
                else:
                    obj = InfraTSFindings.objects.filter(pk=item['id'])
                    obj.update(
                        order=item['order'],
                        teamserver_ip=item['teamserver_ip'],
                        linked_domain=item['linked_domain'],
                        beacon_kill_date=item['beacon_kill_date'],
                    )
                    # modified_by=request.user)

        if dinfraws:
            for item in dinfraws:
                obj = InfraWSFindings.objects.filter(pk=item)
                obj.delete()

        if infraws:
            for item in infraws:
                if item['id'] == "":
                    InfraWSFindings.objects.create(
                        order=item['order'],
                        hostname=item['hostname'],
                        os=item['os'],
                        ip_address=item['ip_address'],
                        assigned_to=item['assigned_to'],
                    )
                else:
                    obj = InfraWSFindings.objects.filter(pk=item['id'])
                    obj.update(
                        order=item['order'],
                        hostname=item['hostname'],
                        os=item['os'],
                        ip_address=item['ip_address'],
                        assigned_to=item['assigned_to'],
                    )
                    # modified_by=request.user)

        if dlatmov:
            for item in dlatmov:
                obj = LateralMovementFindings.objects.filter(pk=item)
                obj.delete()

        if latmov:
            for item in latmov:
                if item['id'] == "":
                    LateralMovementFindings.objects.create(
                        order=item['order'],
                        initial_beacon=item['initial_beacon'],
                        ip_address=item['ip_address'],
                        hostname=item['hostname'],
                        account_used=item['account_used'],
                        host_moved_from=item['host_moved_from'],
                        movement_method=item['movement_method'],
                        callback_server=item['callback_server'],
                        notes=item['notes'],
                    )
                else:
                    obj = LateralMovementFindings.objects.filter(pk=item['id'])
                    obj.update(
                        order=item['order'],
                        initial_beacon=item['initial_beacon'],
                        ip_address=item['ip_address'],
                        hostname=item['hostname'],
                        account_used=item['account_used'],
                        host_moved_from=item['host_moved_from'],
                        movement_method=item['movement_method'],
                        callback_server=item['callback_server'],
                        notes=item['notes'],
                    )
                    # modified_by=request.user)

        if dpersist:
            for item in dpersist:
                obj = PersistenceFindings.objects.filter(pk=item)
                obj.delete()

        if persist:
            for item in persist:
                if item['id'] == "":
                    PersistenceFindings.objects.create(
                        order=item['order'],
                        installation_time=item['installation_time'],
                        machine_ip=item['machine_ip'],
                        machine_hostname=item['machine_hostname'],
                        description=item['description'],
                        persistence_method=item['persistence_method'],
                        persistence_info=item['persistence_info'],
                        callback_server=item['callback_server'],
                        removal_time=item['removal_time'],
                    )
                else:
                    obj = PersistenceFindings.objects.filter(pk=item['id'])
                    obj.update(
                        order=item['order'],
                        installation_time=item['installation_time'],
                        machine_ip=item['machine_ip'],
                        machine_hostname=item['machine_hostname'],
                        description=item['description'],
                        persistence_method=item['persistence_method'],
                        persistence_info=item['persistence_info'],
                        callback_server=item['callback_server'],
                        removal_time=item['removal_time'],
                    )
                    # modified_by=request.user)

        if dfiles:
            for item in dfiles:
                obj = FilesFindings.objects.filter(pk=item)
                obj.delete()

        if files:
            for item in files:
                if item['id'] == "":
                    FilesFindings.objects.create(
                        order=item['order'],
                        host=item['host'],
                        ip=item['ip'],
                        location=item['location'],
                        filename=item['filename'],
                        deleted=item['deleted'],
                        date=item['date'],
                        time_dropped_to_disk=item['time_dropped_to_disk'],
                        time_deleted=item['time_deleted'],
                    )
                else:
                    obj = FilesFindings.objects.filter(pk=item['id'])
                    obj.update(
                        order=item['order'],
                        host=item['host'],
                        ip=item['ip'],
                        location=item['location'],
                        filename=item['filename'],
                        deleted=item['deleted'],
                        date=item['date'],
                        time_dropped_to_disk=item['time_dropped_to_disk'],
                        time_deleted=item['time_deleted'],
                    )
                    # modified_by=request.user)

        if dintlog:
            for item in dintlog:
                obj = InteractiveLogonsFindings.objects.filter(pk=item)
                obj.delete()

        if intlog:
            for item in intlog:
                if item['id'] == "":
                    InteractiveLogonsFindings.objects.create(
                        order=item['order'],
                        datetime=item['datetime'],
                        operator=item['operator'],
                        host=item['host'],
                        username=item['username'],
                        password=item['password'],
                        type=item['type'],
                        access_ended=item['access_ended'],
                        notes=item['notes'],
                    )
                else:
                    obj = InteractiveLogonsFindings.objects.filter(pk=item['id'])
                    obj.update(
                        order=item['order'],
                        datetime=item['datetime'],
                        operator=item['operator'],
                        host=item['host'],
                        username=item['username'],
                        password=item['password'],
                        type=item['type'],
                        access_ended=item['access_ended'],
                        notes=item['notes'],
                    )
                    # modified_by=request.user)

        if dsigeve:
            for item in dsigeve:
                obj = SignificantEventsFindings.objects.filter(pk=item)
                obj.delete()

        if sigeve:
            for item in sigeve:
                if item['id'] == "":
                    SignificantEventsFindings.objects.create(
                        order=item['order'],
                        event=item['event'],
                        notes=item['notes'],
                        datetime=item['datetime'],
                    )
                else:
                    obj = SignificantEventsFindings.objects.filter(pk=item['id'])
                    obj.update(
                        order=item['order'],
                        event=item['event'],
                        notes=item['notes'],
                        datetime=item['datetime'],
                    )
                    # modified_by=request.user)

        # Loop through all of the artifacts to be deleted.
        if darttrack:
            for item in darttrack:
                obj = ArtifactFindings.objects.filter(pk=item)
                obj.delete()

        # Since we don't post the original information from the table since they can't edit it we just update the order in the table.
        current_artifacts = ArtifactFindings.objects.all()
        for idx, artifact in enumerate(current_artifacts):
            artifact.order = idx
            artifact.save()

        # Generate a file and hashes then save it to the back end.
        current_order = ArtifactFindings.objects.all().count()
        if artifact_files:
            for artifact in artifact_files:
                hashes = generate_file_hashes(base64.b64decode(artifact['file']))

                obj = ArtifactFindings.objects.filter(sha256=hashes[2])
                if obj:
                    continue

                ArtifactFindings.objects.create(
                    order=current_order,
                    file_name=artifact['name'],
                    file_content=artifact['file'],
                    md5=hashes[0],
                    sha1=hashes[1],
                    sha256=hashes[2],
                )

                current_order += 1

        return HttpResponse("Saved")
