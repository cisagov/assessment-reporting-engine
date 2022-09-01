# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744s
from rest_framework import serializers

from ptportal.models import (
    AssessmentScenarios,
    AttackPath,
    ElectionInfrastructureQuestionnaire,
    EngagementMeta,
    FilesFindings,
    Files,
    HVATarget,
    HVAData,
    InfraTSFindings,
    InfraTS,
    InfraWSFindings,
    InfraWS,
    InteractiveLogonsFindings,
    InteractiveLogons,
    LateralMovementFindings,
    LateralMovement,
    PersistenceFindings,
    Persistence,
    SignificantEventsFindings,
    SignificantEvents,
)


class AttackPathSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttackPath
        fields = '__all__'


class EngagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngagementMeta
        exclude = ['id']


class ElectionInfrastructureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectionInfrastructureQuestionnaire
        fields = '__all__'


class InfraTSFindingsSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField(source='created_by.username', read_only=True)
    last_modified_by = serializers.CharField(
        source='modified_by.username', read_only=True
    )

    class Meta:
        model = InfraTSFindings
        fields = (
            'teamserver_ip',
            'linked_domain',
            'beacon_kill_date',
            'created_by',
            'last_modified_by',
        )
        depth = 1


class InfraTSSerializer(serializers.ModelSerializer):
    findings = InfraTSFindingsSerializer(many=True)

    class Meta:
        model = InfraTS
        fields = ('findings',)


class InfraWSFindingsSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField(source='created_by.username', read_only=True)
    last_modified_by = serializers.CharField(
        source='modified_by.username', read_only=True
    )

    class Meta:
        model = InfraWSFindings
        fields = (
            'hostname',
            'os',
            'ip_address',
            'assigned_to',
            'created_by',
            'last_modified_by',
        )


class InfraWSSerializer(serializers.ModelSerializer):
    findings = InfraWSFindingsSerializer(many=True)

    class Meta:
        model = InfraWS
        fields = ('findings',)


class LateralMovementFindingsSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField(source='created_by.username', read_only=True)
    last_modified_by = serializers.CharField(
        source='modified_by.username', read_only=True
    )

    class Meta:
        model = LateralMovementFindings
        fields = (
            'initial_beacon',
            'ip_address',
            'hostname',
            'account_used',
            'host_moved_from',
            'movement_method',
            'callback_server',
            'notes',
            'created_by',
            'last_modified_by',
        )


class LateralMovementSerializer(serializers.ModelSerializer):
    findings = LateralMovementFindingsSerializer(many=True)

    class Meta:
        model = LateralMovement
        fields = ('findings',)


class PersistenceFindingsSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField(source='created_by.username', read_only=True)
    last_modified_by = serializers.CharField(
        source='modified_by.username', read_only=True
    )

    class Meta:
        model = PersistenceFindings
        fields = (
            'installation_time',
            'machine_ip',
            'machine_hostname',
            'description',
            'persistence_method',
            'persistence_info',
            'callback_server',
            'removal_time',
            'created_by',
            'last_modified_by',
        )


class PersistenceSerializer(serializers.ModelSerializer):
    findings = PersistenceFindingsSerializer(many=True)

    class Meta:
        model = Persistence
        fields = ('findings',)


class FilesFindingsSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField(source='created_by.username', read_only=True)
    last_modified_by = serializers.CharField(
        source='modified_by.username', read_only=True
    )

    class Meta:
        model = FilesFindings
        fields = (
            'host',
            'ip',
            'location',
            'filename',
            'deleted',
            'date',
            'time_dropped_to_disk',
            'time_deleted',
            'created_by',
            'last_modified_by',
        )


class FilesSerializer(serializers.ModelSerializer):
    findings = FilesFindingsSerializer(many=True)

    class Meta:
        model = Files
        fields = ('findings',)


class InteractiveLogonsFindingsSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField(source='created_by.username', read_only=True)
    last_modified_by = serializers.CharField(
        source='modified_by.username', read_only=True
    )

    class Meta:
        model = InteractiveLogonsFindings
        fields = (
            'datetime',
            'operator',
            'host',
            'username',
            'password',
            'type',
            'access_ended',
            'notes',
            'created_by',
            'last_modified_by',
        )


class InteractiveLogonsSerializer(serializers.ModelSerializer):
    findings = InteractiveLogonsFindingsSerializer(many=True)

    class Meta:
        model = InteractiveLogons
        fields = ('findings',)


class SignificantEventsFindingsSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField(source='created_by.username', read_only=True)
    last_modified_by = serializers.CharField(
        source='modified_by.username', read_only=True
    )

    class Meta:
        model = SignificantEventsFindings
        fields = ('event', 'notes', 'datetime', 'created_by', 'last_modified_by')


class SignificantEventsSerializer(serializers.ModelSerializer):
    findings = SignificantEventsFindingsSerializer(many=True)

    class Meta:
        model = SignificantEvents
        fields = ('findings',)


class HVATargetSerializer(serializers.ModelSerializer):
    class Meta:
        model = HVATarget
        # exclude = ['id']


class ScenarioSerializer(serializers.ModelSerializer):
    status = serializers.CharField()

    class Meta:
        model = AssessmentScenarios
        exclude = ['id']


class HVASerializer(serializers.ModelSerializer):
    class Meta:
        model = HVAData
        fields = "__all__"
