# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.db import models
from django.urls import reverse

from . import abstract_models

ANSWER_CHOICES = (
    ('Yes', "Yes"),
    ('No', "No"),
    ('Not Applicable', "Not Applicable"),
    ('', "To Be Determined"),
)


class ElectionInfrastructureQuestionnaire(abstract_models.TimeStampedModel):

    ei_make = models.TextField(blank=True)
    ei_model = models.TextField(blank=True)
    ei_model_num = models.TextField(blank=True)
    q1 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='1.)',
        help_text='Does the testing of EI include Voter Registration Web Site(s)?',
    )
    q2 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='2.)',
        help_text='Does the testing of EI include Voter Registration Database(s)?',
    )
    q3 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='3.)',
        help_text='Does the testing of EI include Poll Book applications/devices?',
    )
    q4 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='4.)',
        help_text='Does the testing of EI include any vote tabulation equipment?',
    )
    q4A = models.TextField(
        blank=True,
        verbose_name='4a.) If yes to Question 4, ',
        help_text='describe characteristics of the Vote Tabulation Equipment that was included',
    )
    q5 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='5.)',
        help_text='Does the testing of EI include any Election Results Publishing Systems?',
    )
    q6 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='6.)',
        help_text='Did we test Voter Registration Web Sites?',
    )
    q7 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='7.)',
        help_text='Did We test Voter Registration Databases?',
    )
    q8 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='8.)',
        help_text='Did we test Poll Book applications/devices?',
    )
    q9 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='9.)',
        help_text='Did we test any vote tabulation equipment?',
    )
    q9A = models.TextField(
        blank=True,
        verbose_name='9a.) If yes to Question 9, ',
        help_text='describe characteristics of the Vote Tabulation Equipment that was tested',
    )
    q10 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='10.)',
        help_text='Did we test any Election Results Publishing Systems?',
    )
    q11 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='11.)',
        help_text='Did the entity use a 3rd party for any of it EI?',
    )
    q12 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='12.)',
        help_text='Did the entity have a direct connection to other entities supporting EI activities (such as state <->local; local election <-> county)?',
    )
    q13 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='13.)',
        help_text="Was the Election entity independent from other gov't organizations or a subordinate  department/agency  (ex.  County Board of elections independent from county with own facilities/infrastructure/employees/IT)?",
    )

    q14 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='14.)',
        help_text='Did the EI on the Internet present any discoverable attack paths that would allow manipulation of EI data?',
    )
    q15 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='15.)',
        help_text='Did the EI internally allow an attacker with no special rights to manipulate EI data?',
    )
    q16 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='16.)',
        help_text='Did the EI rely on Microsoft Domain architecture for significant part of their user security (authentication/authorization)?',
    )
    q17 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='17.)',
        help_text='In testing was the team able to obtain Domain Admin or higher privileges?',
    )
    q18 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='18.)',
        help_text='In testing was the team able to access registration information?',
    )
    q19 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='19.)',
        help_text='In testing was the team able to modify registration information?',
    )
    q20 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='20.)',
        help_text='In testing was the team able to access tabulation information?',
    )
    q21 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='21.)',
        help_text='In testing was the team able to modify tabulation information?',
    )
    q22 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='22.)',
        help_text='In testing was the team able to access results information?',
    )
    q23 = models.CharField(
        max_length=14,
        choices=ANSWER_CHOICES,
        default='',
        blank=True,
        verbose_name='23.)',
        help_text='In testing was the team able to modify results information?',
    )
    SECURE_CHOICES = [
        ('1', "Least Secure"),
        ('2', "Moderately Secure"),
        ('3', "Secure"),
        ('4', "Very Secure"),
        ('5', "Most Secure"),
        ('', "To Be Determined"),
    ]
    q24 = models.CharField(
        choices=SECURE_CHOICES,
        max_length=255,
        blank=True,
        verbose_name='24.)',
        help_text='Was the network patched against major vulnerabilities?',
    )
    q25 = models.CharField(
        choices=SECURE_CHOICES,
        max_length=255,
        blank=True,
        verbose_name='25.)',
        help_text='Was the network segmented to protect election data from external connections (to partners and 3rd parties)?',
    )
    q26 = models.CharField(
        choices=SECURE_CHOICES,
        max_length=255,
        blank=True,
        verbose_name='26.)',
        help_text='Was the network segmented to protect against insider threat?',
    )
    q27 = models.CharField(
        choices=SECURE_CHOICES,
        max_length=255,
        blank=True,
        verbose_name='27.)',
        help_text='Was the concept of "least privilege" implemented?',
    )

    def get_absolute_url(self):
        return reverse("ei")

    def __str__(self):
        return "Election Infrastructure Questionnaire"

    class Meta:
        verbose_name = 'Election Infrastructure Questionnaire'
