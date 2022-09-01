# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
from django.shortcuts import redirect
from django.views import generic
from django.urls import reverse
from django.utils import timezone
from ...forms import AttackFrameworkForm
from ...models import AttackFramework
from django.forms.models import modelformset_factory
from datetime import timedelta


def get_attack_matrix_formset():
    tactics = (
        "Reconnaissance",
        "Resource Development",
        "Initial Access",
        "Execution",
        "Persistence",
        "Privilege Escalation",
        "Defense Evasion",
        "Credential Access",
        "Discovery",
        "Lateral Movement",
        "Collection",
        "Command and Control",
        "Exfiltration",
        "Impact",
    )
    formset = modelformset_factory(
        model=AttackFramework, fields=('used',), extra=0, can_order=False
    )
    return tactics, formset


class ATTACKMatrixUpdate(generic.base.TemplateView):
    model = AttackFramework
    template_name = 'ptportal/attack-matrix.html'

    def get_success_url(self):
        return reverse('att&ck-matrix')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        attack_matrix = dict()
        tactics, formset = get_attack_matrix_formset()
        techniques = AttackFramework.objects.all()

        # All Attack Frameworks are edited at the same time (minus seconds)
        # so use the first timestamp from the list of objects.
        last_modified = AttackFramework.objects.values_list('updated_at').first()
        created_on = AttackFramework.objects.values_list('created_at').first()

        # Avoid showing last modified when the object is first created
        if last_modified[0] > created_on[0] + timedelta(
            seconds=10
        ):  # values_list returns tuple
            context['previously_saved'] = last_modified[0]

        for tactic in tactics:
            attack_matrix[tactic] = formset(
                prefix=tactic,
                queryset=AttackFramework.objects.filter(tactics__contains=tactic)
                .distinct()
                .order_by('name'),
            )
        print('attack_matrix: ', attack_matrix)

        context['attack_matrix'] = attack_matrix
        return context

    def post(self, request, *args, **kwargs):
        tactics, formset = get_attack_matrix_formset()
        for tactic in tactics:
            attack_techniques = formset(request.POST or None, prefix=tactic)

            if attack_techniques.is_valid() is False:
                print("errors: ", attack_techniques.errors)
                context = super().get_context_data(**kwargs)
                # context['formset'] = payloads update formset with error'd out formset
                return render(request, self.template_name, context)
            else:
                AttackFramework.objects.all().update(updated_at=timezone.now())

                attack_techniques.save()

        return redirect('att&ck-matrix')
