# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011

from gettext import find
from re import sub
import numpy as np
import pandas as pd
import json
from django.core.exceptions import ObjectDoesNotExist
from django.core.management import BaseCommand

from ptportal.models import (
    NISTControl,
    NIST_CSF,
    CIS_CSC,
    ATTACK,
    Tools,
    Report,
    AssessmentScenarios,
    Severities,
    NarrativeType,
    Narrative,
    Acronym,
    BaseFinding,
    GeneralFinding,
    Category,
    SpecificFinding,
    KEV,
    KEVMetadata,
)


class Command(BaseCommand):
    # For figure 2
    # TODO Hard coded for now, consider future implications
    def add_scenarios(self, report_type):

        # HVA
        if report_type == 'HVA':
            AssessmentScenarios.objects.get_or_create(
                order=1,
                assessment_scenario_type='External Assessment',
                scenario="Determine what vulnerabilities exist in {{eng_meta.customer_initials}} web presence and publicly available hosts that an unauthorized, Internet-based attacker could discover and exploit.",
            )
            AssessmentScenarios.objects.get_or_create(
                order=2,
                assessment_scenario_type='Phishing Assessment',
                scenario="Determine how effective a phishing campaign would be against {{eng_meta.customer_initials}} employees by using enticing emails to convince users to click malicious links.",
            )
            AssessmentScenarios.objects.get_or_create(
                order=3,
                assessment_scenario_type='Web Application Assessment',
                scenario="Determine the accessibility of sensitive information through the web application by evaluating how the application processes, protects, and stores data submitted by application users.",
            )
            AssessmentScenarios.objects.get_or_create(
                order=4,
                assessment_scenario_type='Internal Assessment',
                scenario="Determine what vulnerabilities exist within the {{eng_meta.customer_initials}} internal network that an attacker with physical access to the {Stakeholder Initials} network could discover and exploit.",
            )
            AssessmentScenarios.objects.get_or_create(
                order=5,
                assessment_scenario_type='Internal Threat Emulation',
                scenario="Determine how an attacker with assumed internal access, through phishing and other means, could navigate the {{eng_meta.customer_initials}} network to gain access to core servers, applications, and other sensitive information.",
            )
            AssessmentScenarios.objects.get_or_create(
                order=6,
                assessment_scenario_type='Data Exfiltration',
                scenario="Determine how a malicious insider could gather sensitive information and transfer the data outside of the {{eng_meta.customer_initials}} network.",
            )
        elif report_type == 'RVA':
            AssessmentScenarios.objects.get_or_create(
                order=1,
                assessment_scenario_type='External Assessment',
                scenario="Determine what exploitable vulnerabilities exist within the POC-provided external IP address ranges that an uncredentialed, Internet-based user can exploit.",
            )
            AssessmentScenarios.objects.get_or_create(
                order=2,
                assessment_scenario_type='Phishing Assessment',
                scenario="Determine the susceptibility of staff and infrastructure to phishing attacks, and determine what impact a phished user workstation could have on the internal network.",
            )
            AssessmentScenarios.objects.get_or_create(
                order=3,
                assessment_scenario_type='Internal Assessment',
                scenario="Determine what impact an internal attacker or disgruntled employee could have with access to the internal network.",
            )
        elif report_type == 'RPT':
            AssessmentScenarios.objects.get_or_create(
                order=1,
                assessment_scenario_type='External Assessment',
                scenario="Determine what exploitable vulnerabilities exist within the POC-provided external IP address ranges that an uncredentialed, Internet-based user can exploit.",
            )
            AssessmentScenarios.objects.get_or_create(
                order=2,
                assessment_scenario_type='Phishing Assessment',
                scenario="Determine the susceptibility of staff and infrastructure to phishing attacks.",
            )

    def add_severities(self):
        Severities.objects.get_or_create(
            order=1,
            severity_name='Critical',
            severity_description='Critical vulnerabilities pose an immediate and severe risk to the environment because of the ease of exploit and potential severe impact. Critical items are reported to the customer immediately.',
        )
        Severities.objects.get_or_create(
            order=2,
            severity_name='High',
            severity_description='Intruders may be able to exercise full control on the targeted device.\n'
            + 'Here are examples:\n'
            + '- Easily exploitable vulnerabilities that can lead to complete application, system, or network compromise, such as an intruder having the ability to remotely administer files on a web server\n'
            + '- Severe router/firewall/server misconfigurations\n'
            + '- Worm, Trojan, or backdoor detected\n'
            + '- Vulnerability that has tools readily available on the Internet to take advantage of it\n'
            + '- Weak passwords for remote administration and users',
        )
        Severities.objects.get_or_create(
            order=3,
            severity_name='Medium',
            severity_description='Intruders may be able to exercise some control of the targeted device.\n'
            + 'Here are examples:\n'
            + '- Disclosure of unauthorized sensitive customer information or user account information\n'
            + '- Ability of an intruder to obtain full read access to corporate confidential information\n'
            + '- Lack of basic logging and alerting capabilities\n'
            + '- Antivirus misconfigurations\n'
            + '- Untrusted networks having access to trusted networks',
        )
        Severities.objects.get_or_create(
            order=4,
            severity_name='Low',
            severity_description='The vulnerabilities discovered are items of interest but are not normally exploitable. Many low-severity items reported by security tools are not included in this report because they are often informational, unverified, or of minor risk.',
        )
        Severities.objects.get_or_create(
            order=5,
            severity_name='Informational',
            severity_description='These vulnerabilities are potential weaknesses within the system that cannot be readily exploited. These findings represent areas of which the customer team should be aware, but they do not require any immediate action.',
        )
        Severities.objects.get_or_create(
            order=6, severity_name='TBD', severity_description=''
        )

    def add_narrative_types(self):
        NarrativeType.objects.get_or_create(
            name='External',
            slug='external'
        )
        NarrativeType.objects.get_or_create(
            name='Internal',
            slug='internal'
        )
        NarrativeType.objects.get_or_create(
            name='Phishing',
            slug='phishing'
        )

    def add_acronyms(self):

        acronyms = [
            ("ADCS", "Active Directory Certificate Services"),
            ("AES", "Advanced Encryption Standard"),
            ("ARP", "Address Resolution Protocol"),
            ("ATT&CK", "Adversarial Tactic, Techniques, and Common Knowledge"),
            ("AV", "Anti-Virus"),
            ("C2", "Command-and-Control"),
            ("CA", "Certificate Authority"),
            ("CIFS", "Common Internet File System"),
            ("CIS", "Critical Infrastructure Security"),
            ("CISA", "Cybersecurity Infrastructure Security Agency"),
            ("CLI", "Command Line Interface"),
            ("CMS", "Content Management System"),
            ("CPL", "Control Panel (File Format)"),
            ("CSF", "Cybersecurity Framework"),
            ("DA", "Domain Administrator"),
            ("DC", "Domain Controller"),
            ("DCC2", "Domain Cached Credentials Version 2"),
            ("DHCP", "Dynamic Host Configuration Protocol"),
            ("DHS", "Department of Homeland Security"),
            ("DLL", "Dynamic-Link Library (File Format)"),
            ("DLP", "Data Loss Prevention"),
            ("DNS", "Domain Name System"),
            ("DoS", "Denial of Service"),
            ("EDR", "Endpoint Detection and Response"),
            ("EWS", "Exchange Web Services"),
            ("EXE", "Executable (File Format)"),
            ("FCRM", "Financial Crime Risk Management"),
            ("FTP", "File Transfer Protocol"),
            ("FTPS", "File Transfer Protocol Secure"),
            ("GPO", "Group Policy Object"),
            ("HTA", "Hyptertext Markup Language Application (File Format)"),
            ("HTML", "Hypertext Markup Language"),
            ("HTTP", "Hypertext Transfer Protocol"),
            ("HTTPS", "Hyper Text Transfer Protocol Secure"),
            ("iDRAC", "Integrated Dell Remote Access Controller"),
            ("IIS", "Internet Information Services"),
            ("IP", "Internet Protocol"),
            ("IPMI", "Intelligent Platform Management Interface"),
            ("ISCSI", "Internet Small Computer Systems Interface"),
            ("JS", "JScript (Microsoft File Format)"),
            ("LDAP", "Lightweight Directory Access Protocol"),
            ("LDAPS", "Secure Lightweight Directory Access Protocol"),
            ("LFI", "Local File Inclusion"),
            ("LLMNR", "Link-Local Multicast Name Resolution"),
            ("LSA", "Local Security Authority"),
            ("LSASS", "Local Security Authority Subsystem Service"),
            ("MAQ", "Machine Account Quota"),
            ("mDNS", "Multicast Domain Name System"),
            ("MitM", "Machine in the Middle"),
            ("MS-EFSRPC", "Microsoft Encrypting File System Remote Protocol"),
            ("NBT-NS", "NetBIOS Name Service"),
            ("NIST", "National Institute of Standards and Technology"),
            ("NTLM", "New Technology Local Area Network Manager"),
            ("OS", "Operating System"),
            ("OTP", "One Time Password"),
            ("OWA", "Outlook Web Access"),
            ("PHI", "Protected Health Information"),
            ("PHP", "Hypertext Preprocessor"),
            ("PII", "Personally Identifiable Information"),
            ("POC", "Point of Contact"),
            ("PSK", "Pre-Shared Key"),
            ("PTH", "Pass-the-Hash"),
            ("RADIUS", "Remote Authentication Dial-In User Service"),
            ("RC4", "Rivest Cipher 4"),
            ("RDP", "Remote Desktop Protocol"),
            ("RVA", "Risk and Vulnerability Assessment"),
            ("SAM", "Security Account Manager"),
            ("SAN", "Subject Alternate Name"),
            ("SDK", "Software Development Kit"),
            ("SDLC", "System Development Lifecycle"),
            ("SFTP", "Secure Shell File Transfer Protocol"),
            ("SMB", "Server Message Block"),
            ("SNMP", "Simple Network Management Protocol"),
            ("SOCKS", "Socket Secure"),
            ("SP", "Special Publication"),
            ("SPN", "Service Principal Name"),
            ("SQL", "Structured Query Language"),
            ("SSH", "Secure Shell"),
            ("SSL", "Secure Sockets Layer"),
            ("SSN", "Social Security Number"),
            ("TCP", "Transmission Control Protocol"),
            ("TGS", "Ticket Granting Server"),
            ("TGT", "Ticket Granting Ticket"),
            ("TLS", "Transport Layer Security"),
            ("UDP", "User Datagram Protocol"),
            ("UPnP", "Universal Plug and Play"),
            ("UPS", "Uninterruptible Power Supply"),
            ("VBA", "Visual Basic for Applications"),
            ("VPN", "Virtual Private Network"),
            ("Wi-Fi", "Wireless Fidelity"),
            ("WMI", "Windows Management Instrumentation"),
            ("WPA", "Wireless Fidelity Protected Access"),
            ("XDR", "Extended Detection and Response"),
            ("XLL", "Excell Add-In (File Format)"),
            ("XML", "Extensible Markup Language"),
            ("XSS", "Cross-Site Scripting"),
        ]

        for a in acronyms:
            Acronym.objects.get_or_create(
                acronym=a[0],
                definition=a[1],
                context="Standard acronym included in the application.",
                auto_found='M',
                belongs_to_report=Report.object(),
                include=True,
            )

    def handle(self, *args, **options):
        report = Report.object()
        if report:
            if report.report_type == 'RPT':
                report.external_business_scope = (
                    "Testing the general IT security of the external networks"
                )
            else:
                report.external_business_scope = (
                    "Publicly available customer endpoints discover during scan"
                )
            report.test_location_ext = "DHS Lab, Arlington, VA"
            report.save()
        else:
            report = Report(
                report_type='RVA',
                external_business_scope=(
                    "Publicly available customer endpoints discover during scan"
                ),
                test_location_ext="DHS Lab, Arlington, VA",
            )
            report.save()

        self.add_scenarios(report.report_type)
        self.add_severities()
        self.add_narrative_types()
        self.add_acronyms()

        # CIS Control Catalog data frame
        cis_csc_df = pd.read_csv('assets/CIS_CSC_v8.csv')
        cis_csc_iter = cis_csc_df.iterrows()

        cis_csc_objects = []

        for index, row in cis_csc_iter:
            cis_csc_objects.append(
                CIS_CSC.objects.get_or_create(
                    CIS_ID=row['CIS Control'],
                    name=row['Title'],
                    description=row['Description'],
                )
            )

        attack_matrix = pd.read_csv('assets/mitreATTaCK.csv')
        attack_iter = attack_matrix.iterrows()

        for index, row in attack_iter:
            try:
                ATTACK.objects.create(
                    t_id=row['ID'],
                    name=row['Name'],
                    tactics=row['Tactics'],
                    description=row['Description'],
                    url=row['URL']
                )
            except Exception as e:
                print(e)
                continue

        narrative_tools = pd.read_csv('assets/narrative-tools.csv')
        tools_iter = narrative_tools.iterrows()

        for index, row in tools_iter:
            try:
                Tools.objects.create(
                    name=row['Tool Name'],
                    url=row['URL']
                )
            except Exception as e:
                print(e)
                continue

        findings_df = pd.read_excel(
            'assets/Penetration Testing Findings Repository 1.0.xlsx',
            sheet_name=["Finding Category", "General Finding", "Specific Finding"],
            engine='openpyxl',
        )

        # ---Finding Categories---
        findings_df["Finding Category"] = findings_df["Finding Category"].loc[
            :, ~findings_df["Finding Category"].columns.str.contains('^Unnamed')
        ]
        findings_df["Finding Category"].dropna(
            subset=["Finding_Category_ID", "Finding_Category_Name"], inplace=True
        )

        # remove all spaces from column names for itertuples, which is faster than iterrows
        findings_df["Finding Category"].columns = findings_df[
            "Finding Category"
        ].columns.str.replace(' ', '')

        for row in findings_df["Finding Category"].itertuples():
            try:
                Category.objects.create(
                    name=row.Finding_Category_Name.strip(),
                    description=row.Description.strip(),
                    remediation=row.StandardRemediation.strip(),
                    resources=row.Resources,
                    cat_id=int(row.Finding_Category_ID),
                )
            except Exception as e:
                print(e)
                continue

        # ---General Findings---

        # drop unnamed columns
        findings_df["General Finding"] = findings_df["General Finding"].loc[
            :, ~findings_df["General Finding"].columns.str.contains('^Unnamed')
        ]
        findings_df["General Finding"].dropna(
            subset=["General_Finding_ID"], inplace=True
        )
        findings_df["General Finding"].columns = findings_df[
            "General Finding"
        ].columns.str.replace(' ', '')
        findings_df["General Finding"].fillna('', inplace=True)

        # Get raw NIST Controls from General Finding sheet (as a Series)
        findings_df["General Finding"].loc[:, 'NIST_Controls'] = np.nan

        gen_nist_controls = findings_df["General Finding"]['NISTSP800-53Rev.5']
        gen_nist_controls = gen_nist_controls.str.replace('\n', ",")
        gen_nist_controls = gen_nist_controls.fillna('')
        gen_nist_controls = gen_nist_controls.str.strip()

        # Get raw NIST CSF data from General Finding sheet (as a Series)
        gen_nist_csf = findings_df["General Finding"]['NISTCSF1.1']
        gen_nist_csf = gen_nist_csf.str.replace('\n', ",")
        gen_nist_csf = gen_nist_csf.fillna('')
        gen_nist_csf = gen_nist_csf.str.strip()

        # Get raw CIS CSC data from General Finding sheet (as a Series)
        gen_cis_controls = findings_df["General Finding"]['CISCSCv8']
        gen_cis_controls = gen_cis_controls.str.replace('\n', ",")
        gen_cis_controls = gen_cis_controls.fillna('')
        gen_cis_controls = gen_cis_controls.str.strip()

        findings_df["General Finding"].loc[:, 'NIST_Controls'] = gen_nist_controls
        findings_df["General Finding"].loc[:, 'NIST_CSF'] = gen_nist_csf
        findings_df["General Finding"].loc[:, 'CIS_Recommendations'] = gen_cis_controls

        # Save General Findings data to database
        for row in findings_df["General Finding"].itertuples():
            try:
                GeneralFinding.objects.create(
                    name=row.General_Finding_Name.strip(),
                    general_finding_id=int(row.General_Finding_ID),
                    description=row.Description.strip(),
                    remediation=row.StandardRemediation.strip(),
                    resources=row.Resources.strip(),
                    references=row.References.strip(),
                    severity=row.Severity.strip(),
                    NIST_800_53=row.NIST_Controls,
                    NIST_CSF=row.NIST_CSF,
                    CIS_CSC=row.CIS_Recommendations,
                    finding_type='general',
                    category=Category.objects.get(
                        name=(row.Finding_Category_Name).strip()
                    ),
                )
            except Exception as e:
                print(e)
                continue

        # Save NIST Control objects related to General Findings to database
        gen_unique_control = set()
        for index, value in gen_nist_controls.items():
            value_list = value.split(',')
            for y in value_list:
                if y != ' ':
                    gen_unique_control.add(y.lstrip())

        for control in gen_unique_control:
            nist_ob, __ = NISTControl.objects.get_or_create(NIST_ID=control)
            gen_findings = GeneralFinding.objects.filter(NIST_800_53__contains=control)
            nist_ob.gen_findings.add(*gen_findings)

        # Save NIST CSF objects related to General Findings to database
        gen_unique_csf = set()
        for index, value in gen_nist_csf.items():
            value_list = value.split(',')
            for y in value_list:
                gen_unique_csf.add(y.lstrip())

        for csf in gen_unique_csf:
            nist_ob, __ = NIST_CSF.objects.get_or_create(NIST_CSF_ID=csf)
            gen_findings_csf = GeneralFinding.objects.filter(NIST_CSF__contains=csf)
            nist_ob.gen_findings.add(*gen_findings_csf)

        # Save CIS CSC objects related to General Findings to database
        gen_unique_cis_controls = set()
        for index, value in gen_cis_controls.items():
            value_list = value.split(',')
            for y in value_list:
                if y != ' ':
                    gen_unique_cis_controls.add(y.strip())

        for control in gen_unique_cis_controls:
            cis_csc_obj, __ = CIS_CSC.objects.get_or_create(CIS_ID=control)
            gen_findings = GeneralFinding.objects.filter(CIS_CSC__contains=control)
            cis_csc_obj.gen_findings.add(*gen_findings)

        # ---Specific Findings---

        findings_df["Specific Finding"] = findings_df["Specific Finding"].loc[
            :, ~findings_df["Specific Finding"].columns.str.contains('^Unnamed')
        ]
        findings_df["Specific Finding"].dropna(
            subset=["Specific_Finding_ID"], inplace=True
        )
        findings_df["Specific Finding"].columns = findings_df[
            "Specific Finding"
        ].columns.str.replace(' ', '')
        findings_df["Specific Finding"].fillna('', inplace=True)

        # Get raw NIST Controls from Specific Finding sheet (as a Series)
        findings_df["Specific Finding"].loc[:, 'NIST_Controls'] = np.nan

        spec_nist_controls = findings_df["Specific Finding"]['NISTSP800-53Rev.5']
        spec_nist_controls = spec_nist_controls.str.replace('\n', ",")
        spec_nist_controls = spec_nist_controls.fillna('')
        spec_nist_controls = spec_nist_controls.str.strip()

        findings_df["Specific Finding"].loc[:, 'NIST_Controls'] = spec_nist_controls

        # Get raw NIST CSF data from Specific Finding sheet (as a Series)
        spec_nist_csf = findings_df["Specific Finding"]['NISTCSF1.1']
        spec_nist_csf = spec_nist_csf.str.replace('\n', ",")
        spec_nist_csf = spec_nist_csf.fillna('')
        spec_nist_csf = spec_nist_csf.str.strip()

        findings_df["Specific Finding"].loc[:, 'NIST_CSF'] = spec_nist_csf

        # Get raw CIS CSC data from Specific Finding sheet (as a Series)
        spec_cis_controls = findings_df["Specific Finding"]['CISCSCv8']
        spec_cis_controls = spec_cis_controls.str.replace('\n', ",")
        spec_cis_controls = spec_cis_controls.fillna('')
        spec_cis_controls = spec_cis_controls.str.strip()

        findings_df["Specific Finding"].loc[
            :, 'CIS_Recommendations'
        ] = spec_cis_controls

        for row in findings_df["Specific Finding"].itertuples():

            try:
                SpecificFinding.objects.create(
                    name=row.Specific_Finding_Name.strip(),
                    description=row.Description.strip(),
                    remediation=row.StandardRemediation.strip(),
                    resources=row.Resources,
                    references=row.References,
                    specific_finding_id=int(row.Specific_Finding_ID),
                    NIST_800_53=row.NIST_Controls,
                    NIST_CSF=row.NIST_CSF,
                    CIS_CSC=row.CIS_Recommendations,
                    general_finding=GeneralFinding.objects.get(
                        name=(row.General_Finding_Name.strip())
                    ),
                    gen_finding=row.General_Finding_Name.strip(),
                    severity=row.Severity,
                    finding_type='specific',
                )
            except Exception as e:
                print(e)
                continue

        # Save NIST Control objects related to Specific Findings to database
        spec_unique_control = set()
        for index, value in spec_nist_controls.items():
            value_list = value.split(',')
            for y in value_list:
                if y != ' ':
                    spec_unique_control.add(y.lstrip())

        for control in spec_unique_control:
            nist_ob, __ = NISTControl.objects.get_or_create(NIST_ID=control)
            spec_findings = SpecificFinding.objects.filter(
                NIST_800_53__contains=control
            )
            nist_ob.spec_findings.add(*spec_findings)

        # Save NIST CSF objects related to Specific Findings to database
        spec_unique_csf = set()
        for index, value in spec_nist_csf.items():
            value_list = value.split(',')
            for y in value_list:
                spec_unique_csf.add(y.lstrip())

        for csf in spec_unique_csf:
            nist_ob, __ = NIST_CSF.objects.get_or_create(NIST_CSF_ID=csf)
            spec_findings_csf = SpecificFinding.objects.filter(NIST_CSF__contains=csf)
            nist_ob.spec_findings.add(*spec_findings_csf)

        # Save CIS CSC objects related to Specific Findings to database
        spec_unique_cis_controls = set()
        for index, value in spec_cis_controls.items():
            value_list = value.split(',')
            for y in value_list:
                if y != '':
                    spec_unique_cis_controls.add(y.strip())

        for control in spec_unique_cis_controls:
            cis_csc_obj, __ = CIS_CSC.objects.get_or_create(CIS_ID=control)
            spec_findings = SpecificFinding.objects.filter(CIS_CSC__contains=control)
            cis_csc_obj.spec_findings.add(*spec_findings)

        # --- Known Exploited Vulnerabilities ---

        # load KEVs
        with open('assets/known_exploited_vulnerabilities.json', 'r') as kev_json_file:
            KEVs_json = json.loads(kev_json_file.read())

        try:
            KEVs_df_metadata = KEVMetadata.objects.create(
                title=KEVs_json["title"],
                catalog_version=KEVs_json["catalogVersion"],
                date_released=KEVs_json["dateReleased"],
                count=KEVs_json["count"],
            )
        except:
            pass

        # flatten the nested vulnerabilities list into its own df
        KEVs_df = pd.json_normalize(KEVs_json, record_path=['vulnerabilities'])

        KEVs_objects = []
        for row in KEVs_df.itertuples():
            try:
                KEVs_objects.append(
                    KEV.objects.create(
                        cve_id=row.cveID,
                        vulnerability_name=row.vulnerabilityName,
                        vendor_project=row.vendorProject,
                        product=row.product,
                        date_added=row.dateAdded,
                        description=row.shortDescription,
                        action=row.requiredAction,
                        date_action_due=row.dueDate,
                        notes=row.notes,
                        kev_metadata=KEVs_df_metadata,
                    )
                )
            except:
                continue
