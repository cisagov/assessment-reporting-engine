# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

import datetime

from django.db import models
from django.urls import reverse

from . import abstract_models
from django.utils import timezone



class ElectionSystems(abstract_models.TimeStampedModel):

    ei_make = models.CharField(
        max_length=200,
        blank=True,
        verbose_name="EI Make"
    )

    ei_model = models.CharField(
        max_length=200,
        blank=True,
        verbose_name="EI Model"
    )

    ei_model_num = models.CharField(
        max_length=200,
        blank=True,
        verbose_name="EI Model Number"
    )

    order = models.PositiveIntegerField(
        blank=True,
        default=1
    )

    def __str__(self):
        return self.ei_make + " " + self.ei_model + " " + self.ei_model_num

    class Meta:
        verbose_name = 'Election System'


class ElectionInfrastructureQuestionnaire(abstract_models.TimeStampedModel):

    ANSWER_CHOICES = (
        ('Yes', 'Yes'),
        ('No', 'No'),
        ('Not Applicable', 'Not Applicable'),
        ('TBD', 'To Be Determined'),
    )

    SECURE_CHOICES = (
        ('1', 'Least Secure'),
        ('2', 'Moderately Secure'),
        ('3', 'Secure'),
        ('4', 'Very Secure'),
        ('5', 'Most Secure'),
        ('TBD', 'To Be Determined'),
    )

    q1 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='1.)',
        help_text='Does the scope include voter registration web site(s)?',
    )

    q2 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='2.)',
        help_text='Does the scope include voter registration database(s)?',
    )

    q3 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='3.)',
        help_text='Does the scope include poll book application(s)/device(s)?',
    )

    q4 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='4.)',
        help_text='Does the scope include vote tabulation equipment?',
    )

    q4A = models.TextField(
        blank=True,
        verbose_name='4a.) If yes to Question 4, ',
        help_text='describe characteristics of the vote tabulation equipment that was in-scope:',
    )

    q5 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='5.)',
        help_text='Does the scope include any election results publishing systems?',
    )

    q6 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='6.)',
        help_text='Was the voter registration web site(s) tested by the CISA team?',
    )

    q7 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='7.)',
        help_text='Was the voter registration database(s) tested by the CISA team?',
    )

    q8 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='8.)',
        help_text='Was the poll book application(s)/device(s) tested by the CISA team?',
    )

    q9 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='9.)',
        help_text='Was the vote tabulation equipment tested by the CISA team?',
    )

    q9A = models.TextField(
        blank=True,
        verbose_name='9a.) If yes to Question 9, ',
        help_text='describe characteristics of the vote tabulation equipment that was tested:',
    )

    q10 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='10.)',
        help_text='Was the election results publishing system(s) tested by the CISA team?',
    )

    q11 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='11.)',
        help_text='Did the entity use a third party for any of their EI?',
    )

    q12 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='12.)',
        help_text='Did the entity have a direct connection to other entities supporting EI activities (such as state <-> local; local <-> county)?',
    )

    q13 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='13.)',
        help_text="Was the election entity independent from other government organizations or a subordinate department/agency (e.g., a County Board of Elections with own facilities/infrastructure/employees/IT, independent from the county)?",
    )

    q14 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='14.)',
        help_text='Did testing of external-facing EI present any attack paths that would allow manipulation of EI data?',
    )

    q15 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='15.)',
        help_text='Did testing of the internal network demonstrate that an attacker with no special rights could manipulate EI data?',
    )

    q16 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='16.)',
        help_text='Did the EI rely on Microsoft Domain architecture for a significant part of user security (authentication/authorization)?',
    )

    q17 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='17.)',
        help_text='During testing, was the CISA team able to obtain Domain Admin or higher privileges?',
    )

    q18 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='18.)',
        help_text='During testing, was the CISA team able to access voter registration information?',
    )

    q19 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='19.)',
        help_text='During testing, was the CISA team able to modify voter registration information?',
    )

    q20 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='20.)',
        help_text='During testing, was the CISA team able to access tabulation information?',
    )

    q21 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='21.)',
        help_text='During testing, was the CISA team able to modify tabulation information?',
    )

    q22 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='22.)',
        help_text='During testing, was the team able to access election results information?',
    )

    q23 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='TBD',
        blank=True,
        verbose_name='23.)',
        help_text='During testing, was the CISA team able to modify election results information?',
    )

    q24 = models.CharField(
        choices=SECURE_CHOICES,
        max_length=255,
        blank=True,
        verbose_name='24.)',
        help_text='How well was the network patched against major vulnerabilities?',
    )

    q25 = models.CharField(
        choices=SECURE_CHOICES,
        default='TBD',
        max_length=255,
        blank=True,
        verbose_name='25.)',
        help_text='How well was the network segmented to protect election data from external connections (to partners and third parties)?',
    )

    q26 = models.CharField(
        choices=SECURE_CHOICES,
        default='TBD',
        max_length=255,
        blank=True,
        verbose_name='26.)',
        help_text='How well was the network segmented to protect election data from insider threats?',
    )

    q27 = models.CharField(
        choices=SECURE_CHOICES,
        default='TBD',
        max_length=255,
        blank=True,
        verbose_name='27.)',
        help_text='How well was the principle of least privilege implemented?',
    )

    class Meta:
        verbose_name = 'Election Infrastructure Questionnaire'

    @classmethod
    def object(cls):
        return (
            cls._default_manager.all().first()
        )

    def __str__(self):
        return "Election Infrastructure Questionnaire"

    def save(self, *args, **kwargs):
        # to always run full clean before creating or saving to model
        super().full_clean()
        self.updated_at = timezone.now()
        self.id = 1
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("ei")
