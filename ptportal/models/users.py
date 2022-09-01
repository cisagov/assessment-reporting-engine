# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models


class MyUserManager(BaseUserManager):
    def create_user(self, username, password=None, is_admin=False, is_active=False):
        if not username:
            raise ValueError('Username is a required field.')
        user = self.model(
            username=username,
            is_staff=is_admin,  # Make is_staff for admin pages == is_admin
            is_admin=is_admin,
            is_active=is_active,
        )

        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_superuser(self, username, password):
        user = self.create_user(
            username=username,
            password=password,
            is_admin=True,
            is_active=True,
        )
        user.user_permissions.add()
        user.save(using=self.db)
        return user


class User(AbstractUser):
    username = models.CharField(unique=True, null=True, max_length=255)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    objects = MyUserManager()

    def __str__(self):
        return self.username

    def get_username(self):
        return self.username

    def has_perm(self, perm, obj=None):
        if self.is_active and self.is_admin:
            return True

    def has_module_perms(self, app_label):
        if self.is_active and self.is_admin:
            return True

    def update(self, *args, **kwargs):
        self.is_staff = self.is_admin
        super(User, self).update(*args, **kwargs)

    def save(self, *args, **kwargs):
        self.is_staff = self.is_admin
        super(User, self).save(*args, **kwargs)
