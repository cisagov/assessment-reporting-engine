# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744


import json
import pandas as pd
import requests
import sys

from pandas.io.json import json_normalize
from stix2 import Filter, MemoryStore

pd.set_option('mode.chained_assignment', None)

# See https://github.com/mitre/cti/blob/master/USAGE.md#access-a-specific-version-of-attck
def get_data_from_version(domain, version):
    """
    Return  the ATT&CK STIX data for a given domain and version from MITRE/CTI.

    Input  - (domain : string) value of 'enterprise-attack', 'mobile-attack',
             or 'ics-attack'.
           - (version : string) valid version number ['1.0', '2.0', ...]
    Output - (-- : MemoryStore) interface to an in-memory dict of STIX objs
    """
    stix_json = requests.get(f'https://raw.githubusercontent.com/mitre/cti/ATT%26CK-v{version}/{domain}/{domain}.json').json()
    return MemoryStore(stix_data=stix_json['objects'])

src = get_data_from_version('enterprise-attack', '10.1')

technique_mitigation_relationships = src.query(
    Filter('relationship_type', '=', 'mitigates')
)
mitigations = src.query(Filter('type', '=', 'course-of-action'))
techniques = src.query(Filter('type', '=', 'attack-pattern'))

mitigation_relationships_list = []
for r in technique_mitigation_relationships:
    mitigation_relationships_list.append(json.loads(r.serialize()))

mitigation_relationships_df = pd.DataFrame(mitigation_relationships_list)
mitigation_relationships_df = mitigation_relationships_df.rename(
    columns={
        'id': 'relationship_id',
        'source_ref': 'course_of_action_id',
        'target_ref': 'attack_pattern_id',
    }
)
mitigation_relationships_df = mitigation_relationships_df[
    ['relationship_id', 'attack_pattern_id', 'course_of_action_id']
]

mitigations_list = []
for m in mitigations:
    mitigations_list.append(json.loads(m.serialize()))

mitigations_df = pd.DataFrame(mitigations_list)
mitigations_df['mitigation_url'] = mitigations_df['external_references'].apply(
    lambda x: x[0]['url']
)
mitigations_df['mitigation_id'] = mitigations_df['external_references'].apply(
    lambda x: x[0]['external_id']
)
mitigations_df = mitigations_df.rename(
    columns={
        'name': 'mitigation_name',
        'id': 'course_of_action_id',
        'description': 'mitigation_description',
    }
)
mitigations_df = mitigations_df[
    [
        'mitigation_id',
        'course_of_action_id',
        'mitigation_name',
        'mitigation_description',
        'mitigation_url',
    ]
]

techniques_list = []
for t in techniques:
    techniques_list.append(json.loads(t.serialize()))

def extract_tactic(x):
    tactics = []
    if isinstance(x, list):
        for phase in x:
            tactics.append(phase['phase_name'])
    return tactics


techniques_df = pd.DataFrame(techniques_list)
techniques_df['technique_url'] = techniques_df['external_references'].apply(
    lambda x: x[0]['url']
)
techniques_df['technique_id'] = techniques_df['external_references'].apply(
    lambda x: x[0]['external_id']
)

techniques_df[['tech_id','subtechnique_id']] = techniques_df['technique_id'].str.split('.',expand=True)
techniques_df = techniques_df.drop(columns=['technique_id'], axis=1)

techniques_df['tactics'] = techniques_df['kill_chain_phases'].apply(
    lambda x: extract_tactic(x)
)

techniques_df['x_mitre_is_subtechnique'] = techniques_df['x_mitre_is_subtechnique'].fillna(False)

techniques_df = techniques_df.rename(
    columns={
        'name': 'technique_name',
        'id': 'attack_pattern_id',
        'description': 'technique_description',
        'x_mitre_is_subtechnique': 'is_subtechnique',
        'tech_id': 'technique_id'
    }
)
techniques_df = techniques_df[
    [
        'technique_id',
        'subtechnique_id',
        'attack_pattern_id',
        'technique_name',
        'technique_description',
        'technique_url',
        'tactics',
        'is_subtechnique'
    ]
]


relationships_with_attacks = pd.merge(
    mitigation_relationships_df, techniques_df, on='attack_pattern_id'
)
relationships_with_attacks = pd.merge(
    relationships_with_attacks, mitigations_df, on='course_of_action_id'
)

unique_techniques = (
    relationships_with_attacks.groupby('technique_name').first().reset_index()
)
attack_matrix = unique_techniques[
    [
        'technique_id',
        'subtechnique_id',
        'technique_name',
        'technique_description',
        'tactics',
        'mitigation_description',
        'technique_url',
        'is_subtechnique'
    ]
]


def clean_tactics(tactic_list):
    cleaned = []
    for x in tactic_list:
        x = x.replace('-', ' ').title().replace('And', 'and')
        cleaned.append(x)
    return ', '.join(cleaned)


attack_matrix.loc[:, 'tactics'] = attack_matrix['tactics'].apply(
    lambda x: clean_tactics(x)
)

attack_matrix.columns = ['Technique ID', 'Subtechnique ID', 'Name', 'Description', 'Tactics', 'Mitigation', 'URL', 'Subtechnique']
attack_matrix.sort_values(by=['Technique ID', 'Subtechnique ID'], inplace=True, key=lambda s: s.where(~s.isnull(),''))

attack_matrix.to_csv('attack-10.1.csv', index=False)
