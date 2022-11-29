# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from ptportal.views.tools import generateRemediationSheet
from django.conf import settings
from django.conf.urls import url
from django.conf.urls import include
from django.urls import path, re_path, include
from django.contrib.auth import views as auth_views

# from .forms import CustomPasswordResetForm
from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.logout_view, name='logout_view'),
    path('signup/', views.signup, name='signup'),
]

# Tools
urlpatterns += [
    path('tools/', views.tools, name='tools'),
    path('generate-DHS-JSON/', views.generateDHSJSON, name='generate_dhs_json'),
    path('generate-EI-JSON/', views.generateEIJSON, name='generateEIJSON'),
    path('generateJSON/', views.generateJSON, name='generateJSON'),
    path('generateReport/', views.generateReport, name='generateReport'),
    path(
        'generateReportSummary/',
        views.generateReportSummary,
        name='generateReportSummary',
    ),
    path(
        'generateAnonymizedJSON/',
        views.generateAnonymizedJSON,
        name='generateAnonymizedJSON',
    ),
    path(
        'generateAnonymizedReport/',
        views.generateAnonymizedReport,
        name='generateAnonymizedReport',
    ),
    path('generateOutbrief/', views.generateOutbrief, name='generateOutbrief'),
    path('generateTracker/', views.generateTracker, name='generateTracker'),
    path(
        'generateRemediation/',
        views.generateRemediationSheet,
        name='generateRemediation',
    ),
    path('generate-HVA-JSON/', views.generateHVAJSON, name='generateHVA'),
    path('generate-<str:ip_type>-ips/', views.generateIpList, name='generate-ips'),
    path('download-backup/', views.downloadBackup, name='downloadBackup'),
    path(
        'ajax/ajax-check-ip-scope/',
        views.ajax_check_ip_scope,
        name='ajax_check_ip_scope',
    ),
    path(
        'password_change/',
        auth_views.PasswordChangeView.as_view(),
        name='password_change',
    ),
    path(
        'password_change/done',
        auth_views.PasswordChangeDoneView.as_view(),
        name='password_change_done',
    ),
]
# Report
urlpatterns += [
    path('report', views.ReportUpdate.as_view(), name='report'),
    path('attack-matrix/', views.ATTACKMatrixUpdate.as_view(), name="attack-matrix"),
    path('attack-paths', views.AttackPathView.as_view(), name="attack-paths"),
    path(
        'ajax/ajax-get-attack-paths/',
        views.ajax_get_attack_paths,
        name='ajax_get_attack_paths',
    ),
]

# Assessment Activity Tracker
urlpatterns += [
    path('activity_tracker/', views.ActivityTracker.as_view(), name='activity_tracker'),
    path('activity_tracker/save', views.save_tracker, name='save_tracker'),
]

# External Port Mapping
urlpatterns += [
    path('port_mapping/', views.PortMapping.as_view(), name='port_mapping'),
]

# Engagement Metadata
urlpatterns += [
    path(
        'engagement', views.engagement_redirect, name='engagement'
    ),  # test if there is a engagement and redirect
    path(
        'engagement/create/', views.EngagementCreate.as_view(), name='engagement_create'
    ),
    path(
        'engagement/update/',
        views.EngagementUpdate.as_view(),
        name='engagement_update',
    ),
    path(
        'engagement/detail',
        views.EngagementDetail.as_view(),
        name='engagement_detail',
    ),
    path(
        'engagement/delete/',
        views.EngagementDelete.as_view(),
        name='engagement_delete',
    ),
]

# Narrative
urlpatterns += [
    path('narrative/', views.NarrativeTypes.as_view(), name='narrative-types'),
    path(
        'narrative/<slug:narrative_type>/',
        views.Narratives.as_view(),
        name='narratives',
    ),
    path(
        'narrative/<slug:narrative_type>/<slug:narrative_name>/edit/',
        views.NarrativeEdit.as_view(),
        name='narrative_edit',
    ),
    path(
        'ajax/ajax-get-narrative-screenshots/',
        views.ajax_get_narrative_images,
        name='ajax_get_narrative_images',
    ),
    path(
        'ajax/ajax-delete-narrative-screenshot/',
        views.ajax_delete_narrative_images,
        name='ajax_delete_narrative_image',
    ),
]

# Election Infrastructure Questionnaire
urlpatterns += [
    path(
        'election-infrastructure-questionnaire', views.EI_redirect, name='ei'
    ),  # test if there is a saved EI object and redirect
    path(
        'election-infrastructure-questionnaire/create/',
        views.EICreate.as_view(),
        name='ei_create',
    ),
    path(
        'election-infrastructure-questionnaire/update/',
        views.EIUpdate.as_view(),
        name='ei_update',
    ),
    path('election-infrastructure/delete', views.EIModalDelete, name='ei_modal_delete'),
]

# Upload Findings
urlpatterns += [
    path(
        'uploaded-finding/create/',
        views.UploadedFindingCreateView.as_view(),
        name='finding_create',
    ),
    path(
        'uploaded-finding/<slug:slug>/edit/',
        views.UploadedFindingUpdateView.as_view(),
        name='finding_edit',
    ),
    path(
        'uploaded-finding/<slug:slug>/images/',
        views.FindingImages.as_view(),
        name='finding_create_image_form',
    ),
    path(
        'uploaded-finding/<slug:slug>/detail/',
        views.UploadedFindingDetail.as_view(),
        name='finding_detail',
    ),
    path(
        'uploaded-finding/<slug:slug>/delete/',
        views.UploadedFindingDelete.as_view(),
        name='finding_delete',
    ),
    path(
        'ajax/ajax-get-payloads/',
        views.ajax_get_payloads,
        name='ajax_get_payloads',
    ),
]

# Uploaded Finding Views to create, update, view, delete, and list
urlpatterns += [
    path('ajax/ajax-image-delete/', views.ajax_image_delete, name='ajax_image_delete'),
    path(
        'ajax/ajax-get-uploaded-finding-details/',
        views.ajax_get_uploaded_finding_details,
        name='ajax_get_uploaded_finding_details',
    ),
    path(
        'ajax/ajax-get-uploaded-findings/',
        views.ajax_get_uploaded_findings,
        name='ajax_get_uploaded_findings',
    ),
    path(
        'ajax/ajax-get-uploaded-finding-images/',
        views.ajax_get_uploaded_findings_images,
        name='ajax_get_uploaded_finding_images',
    ),
    path(
        'ajax/ajax-create-affected-system/',
        views.ajax_create_affected_system,
        name='ajax_create_affected_system',
    ),
]

# Additional Finding Data
urlpatterns += [
    path('payloads/', views.PayloadResults.as_view(), name='payloads'),
    path('campaigns/', views.Campaigns.as_view(), name='campaigns'),
]

# Services
urlpatterns += [
    path('data_exfiltration/', views.DataExfiltration.as_view(), name='data_exfiltration'),
    path('ransomware/', views.RansomwareSusceptibility.as_view(), name='ransomware'),
]

urlpatterns += [
    path('risk_score/', views.RiskScoring.as_view(), name='risk_score'),
]

# error handlers
urlpatterns += [
    path('404/', views.custom_page_not_found, name='handler404'),
    path('500/', views.custom_server_error, name='handler500'),
    path('403/', views.custom_permission_denied, name='handler403'),
    path('400/', views.custom_bad_request, name='handler400'),
]
