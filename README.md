<!-- Risk and Vulnerability Assessment Reporting Engine

Risk & Vulnerability Reporting Engine

Copyright 2022 Carnegie Mellon University.

NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

This Software includes and/or makes use of Third-Party Software each subject to its own license.

DM22-0744 -->

---

This is a development version, so includes source code with docker images. In future versions, source code will be contained within the images so that you only need the docker files and the images. RE has been primarily tested on Debian Linux and all instructions below assume a Debian environment.

## Table of Contents

-   [Prerequisites](#prerequisites)
    -   [Docker Engine](#docker-engine)
    -   [Docker Compose](#docker-compose)
    -   [Python](#python)
-   [Getting Started](#getting-started)
    -   [Install Dependencies](#install-dependencies)
    -   [Setup (Production)](#setup-production)
-    [Back Up/Restore](#backup-restore)
        -   [Back Up for Online Restore](#backup-online)
        -   [Restore Online](#restore-online)
        -   [Back Up for Offline Restore](#backup-offline)
        -   [Restore Offline](#restore-offline)
-   [Other Functions](#other-functions)
    -   [Create a Superuser](#create-superuser)
    -   [View Logs](#view-logs)
    -   [Connect to Shell](#connect-shell)
    -   [Tear Down](#tear-down)
-   [Development Guide](#development-guide)
    -   [Setup (Development)](#development-setup)
-   [Help Templates](#help-templates)
-   [Technical Constraints](#technical-constraints)
-   [Troubleshooting](#troubleshooting)

<a name='prerequisites'></a>

## Prerequisites

<a name='docker-engine'></a>

### Docker Engine

Docker Engine (v20.10.12+) must be installed to run RE. It is recommended to install the latest version of Docker Engine.

**Verify Docker Engine Version**

Once `docker` is successfully installed, run the following command to verify that a compatible version is installed:

```bash
> docker version
```
    
<a name='docker-compose'></a>

### Docker Compose

Docker Compose (v2.2.3+) must be installed to run RE. It is recommended to install the latest version of Docker Compose.

**Verify Docker Compose Version**

Once `docker compose` is successfully installed, run the following command to verify that a compatible version is installed:

```bash
> docker compose version
```
    
<a name='python'></a>

### Python

Python (v3.8.0+) must be installed to run RE. In some cases, running the most up-to-date version of Python could present issues if the maintainers of this repository have not completed testing with the latest version. RE has been primarily tested using v3.8.0-3.11.2.

**Verify Python Version**

Once `python` is successfully installed, run the following command to verify that a compatible version is installed:

```bash
> python3 --version
```

<a name='getting-started'></a>

## Getting Started

```bash
> git clone https://github.com/cisagov/assessment-reporting-engine.git
> cd assessment-reporting-engine
```

<a name='install-dependencies'></a>

### Install Dependencies

A python3 script ptp.py is included to automate various functions, including the set up, backup, restore, and tear down processes. In order to use the ptp.py script and set up RE, the following dependencies must be met (in addition to the prerequisites outlined in the previous section). Note that RE has only been tested with the following dependency versions and may not function correctly with other versions.

#### Node v18.13.x and NPM v9.2.x

Any alternate versions of Node and NPM that may be running on the system where RE is being installed could conflict with RE set up. For that reason, it is recommended to purge any existing versions of Node and NPM if they are not needed. The following command will install Node and NPM:

```bash
> curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
> NODE_MAJOR=18
> echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
> apt-get update && apt-get install nodejs -y && apt-get install npm -y
```

Reboot system after installation.

Verify `node` and `npm` versions by running the following commands:

```bash
> node --version
> npm --version
```

#### Python3-Django v2.2.x

The following command will install Python3-Django:

```bash
> apt install python3-django
```

Verify `python3-django` version by running the following command:

```bash
> python3 -m django --version
```

#### TailwindCSS 3

The following command should be run from the root of the RE directory and will install TailwindCSS 3 dependencies (requires that a valid version of `npm` already be installed) - note that this installation is performed when the `python3 ptp.py setup` command is run.

```bash
> npm install -D node/dependencies/tailwindcss-3 --legacy-peer-deps
```

#### Vue.js 3

The following command should be run from the root of the RE directory and will install Vue.js 3 dependencies (requires that a valid version of `npm` already be installed) - note that this installation is performed when the `python3 ptp.py setup` command is run.

```bash
> npm install -D node/dependencies/components-vue3 --legacy-peer-deps
```

<a name='setup-production'></a>

### Setup (Production)

The following command can be run from the root of the RE directory to install the TailwindCSS 3 and Vue.js 3 dependencies (if this has not already been done manually per the last section):

```bash
> python3 ptp.py setup
```

Once all prerequisites and dependencies are met, an instance of RE can be spun up by running the following command (be sure to specify the correct assessment type with the `-r` flag):

```bash
> python3 ptp.py run -r [FAST/RPT/RVA]
```

The default assessment type of the application is set to **RVA** in cases where an assessment type is not specified.

#### Browse to the Application

The application can be accessed at: https://localhost/ptportal

#### Admin Interface

Superusers can access the admin interface by logging in and selecting their username from the account dropdown menu, then selecting **Admin**. Alternatively, the admin interface can be accessed at the following URL in development mode: https://localhost/admin

<a name='backup-restore'></a>

## Back Up/Restore RE

<a name='backup-online'></a>

### Back Up for Online Restore

A back up ZIP file can be downloaded through the GUI by logging in and navigating to the **Export** page. The required Assessment Details fields must already be completed since the password set on that form is what is used to encrypt the ZIP file. Alternatively, the following command can be run to generate a backup ZIP (user will be prompted to enter a password to encrypt the file):

```bash
> python3 ptp.py backup
```

<a name='restore-online'></a>

### Restore Online

It is assumed that a copy of the assessment-reporting-engine directory (whether its backed up from the previous instance or a new copy) is on the system where RE is being restored. ***The version of RE must match the version the backup was generated from and the same assessment type from the previous instance must be specified with the `-r` flag.*** The following command will restore the RE instance from a backup ZIP file:

```bash
> python3 ptp.py restore -r [FAST/RPT/RVA] -b [/path/to/backup.zip]
```

<a name='backup-offline'></a>

### Back Up for Offline Restore

While the initial set up of RE involves internet connectivity, the application can be restored without internet connectivity (this requires the instance of RE being backed up to still be running normally). 

This method involves a lot of overhead in terms of large files transferred between systems, so if internet connectivity is available on the system where RE is being restored, it is recommended to follow the [Back Up for Online Restore](#backup-online) and [Restore Online](#restore-online) steps:

```bash
> python3 ptp.py backup
> docker save prod-web > web.tar
> docker save prod-nginx > nginx.tar
> docker save prod-db > db.tar
```

The ***entire assessment-reporting-engine directory***, including the web/nginx/db TAR files and the backup ZIP file must be transferred to the new system due to various dependencies and files that were generated with internet connectivity, and which cannot be re-generated in the offline environment. This will fulfill the **TailwindCSS** and **Vue.js** requirements, however, ***the system where RE is being restored must already meet all other prerequisites and dependency requirements***.

<a name='restore-offline'></a>

### Restore Offline

**Requirements:**

 - All prerequisites and dependency requirements are met on the new system
 - [Back Up for Offline Restore](#backup-offline) steps have been completed correctly
 - All required files from the offline backup process are on the new system

Once the above requirements are met, the following commands can be run from the root of the transferred RE directory to restore the application:

```bash
> docker load < web.tar
> docker load < nginx.tar
> docker load < db.tar
> python3 ptp.py restore -r [FAST/RPT/RVA] -b [/path/to/backup.zip]
```

<a name='other-functions'></a>

## Other Functions

<a name='create-superuser'></a>

### Create a Superuser

During set up, you will automatically be prompted to create a superuser. Once the application is running, users on networked machines can create their accounts with the sign up button on the login screen or an admin user can add accounts through the Admin panel. If additional superusers are needed, the following command can be run (user will be prompted to set a username and password for the new superuser):

```bash
> python3 ptp.py su
```

<a name='view-logs'></a>

### View Logs

Logs for each container can be viewed by running the following command (be sure to specify the container associated with the logs you wish to view):

```bash
> python3 ptp.py logs -c [db/nginx/web]
```

<a name='connect-shell'></a>

### Connect to Shell

To connect to a shell for a particular container, use the following command (be sure to specify the container associated with the shell you wish to connect to):

```bash
> python3 ptp.py shell -c [db/nginx/web]
```

<a name='tear-down'></a>

### Tear Down

To tear down the application, the following command can be run (***note that this will remove all containers and their data - be sure to back up RE before tearing down***):

```bash
> python3 ptp.py remove
```

<a name='development-guide'></a>

## Development Guide

<a name='development-setup'></a>

### Setup (Development)

Once all prerequisites and dependencies are met, a development instance of RE can be set up by mounting the code directory as a volume, allowing for live reload of most code changes in the application. A developer instance of RE can be spun up by running the following command:

```bash
> python3 ptp.py dev -r [FAST/RPT/RVA]
```

The default assessment type of the application is set to **RVA** in cases where an assessment type is not specified.

#### Browse to the Application (Development)

The development instance of the application can be accessed at: http://localhost:8080/ptportal

#### Admin Interface (Development)

Superusers can access the admin interface by logging in and selecting their username from the account dropdown menu, then selecting **Admin**. Alternatively, the admin interface can be accessed at the following URL in development mode: http://localhost:8080/admin

**Additional development information coming soon**

<a name='help-templates'></a>

## Help Templates

Help templates are provided as examples of the expected format of CSV files that are uploaded to RE, including sample data:

-   **emails.csv**: CSV format for the emails upload function in the Open Source Information section of Report (RPT)
-   **domains.csv**: CSV format for the domains upload function in the Open Source Information section of Report (RPT)
-   **payloads.csv**: CSV format for the payloads upload function on the Payloads screen

<a name='technical-constraints'></a>

## Technical Constraints

In the current version, collaborating on the same screen as another user is not possible and could lead to overwriting another user's changes or other conflicts. If users are editing and saving separate screens or separate findings, this should not cause any issues. There are some file size and number constraints within the application to prevent poor performance and crashing.

<a name='troubleshooting'></a>

## Troubleshooting

It is recommended to refer to Docker and Django documentation for troubleshooting guidance. This section will be updated at a later time to reflect common issues.
