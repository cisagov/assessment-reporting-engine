# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011
from rest_framework import serializers

from ptportal.models import (
    AssessmentScenarios,
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
