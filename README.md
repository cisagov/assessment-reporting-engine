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

This is a development version, so includes source code with docker images. In future versions, source code will be contained within the images so that you only need the docker files and the images. This version does not require you to download information during the docker build process. The nginx.tar, db.tar and web.tar are images that have already been created for you.

There are two setup options that are used at different times of an assessment to run the application:

1. **External Setup** - (Week 1)
   Since internet connection is available during Week 1 of an assessment, simply move the PTP archive to the host machine and obtain the source code and prerequisites of Reporting Engine. There is no need to download the nginx.tar, db.tar, or web.tar docker images. At the end of Week 1, you should ensure that a backup zip file containing all of your assessment data is downloaded from the application. Simply navigate to the Tools screen of the application and click on the "Download Backup" button. See the [PTP Script Commands - Backup](#backup) section for further instruction on how to backup your application data. In the case that there is no internet connection during Internal/On-site setup, you should also ensure the docker images are properly saved at the end of Week 1 in order to restore assessment data during Week 2. See the [Docker Commands - Save Image](#save-image) section for further instruction on how to save docker images.

2. **Internal/On-site Setup** - (Week 2)
   During Week 2, data from Week 1 must be restored and internet connection may or may not be available. When internet connection is not available, the application should be restored using the saved docker images (nginx.tar, db.tar, or web.tar) from Week 1. See the [Docker Commands - Load Image](#load-image) section for further instruction on how to load saved docker images and [Install (Without Internet Connection)](#install-without-internet-connection) to restore saved docker images.
   &nbsp;
   If internet connection is available, you can use the PTP restore command to then recover all assessment information from Week 1. See the [PTP Script Commands - Restore](#restore) section for further instruction on how to restore application data from your backup zip file.

For troubleshooting purposes, do not change the names of the pen-testing-portal root directory or the .tar image files. To avoid setup issues, make sure all .tar files are contained in the same directory and no extra .tar files are in that directory.

This README explains how to install, backup, and tear down the application.

## Table of Contents

-   [Table of Contents](#table-of-contents)
-   [Prerequisites](#prerequisites)
    -   [Installing Docker](#installing-docker)
        -   [Requirements](#requirements)
    -   [Installing Docker-Compose](#installing-docker-compose)
        -   [Requirements](#requirements-1)
    -   [Installing Python](#installing-python)
        -   [Requirements](#requirements-2)
-   [Getting Started](#getting-started)
    -   [Installation for Penetration Testers](#installation-for-penetration-testers)
        -   [Requirements](#requirements-3)
        -   [Install (Using Internet Connection)](#install-using-internet-connection)
            -   [How to Configure a Proxy File](#how-to-configure-a-proxy-file)
        -   [Install (Without Internet Connection)](#install-without-internet-connection)
    -   [Installation for Developers](#installation-for-developers)
    -   [Browse to the Application](#browse-to-the-application)
-   [Using the Application](#using-the-application)
    -   [Help Templates](#help-templates)
-   [Technical Constraints](#technical-constraints)
-   [Common PTP Script Commands](#common-ptp-script-commands)
    -   [Pause](#pause)
    -   [Resume](#resume)
    -   [Backup](#backup)
    -   [Logs](#logs)
    -   [Jump into Shell](#jump-into-shell)
    -   [Tear Down](#tear-down)
    -   [Restore](#restore)
-   [Common Docker Commands](#common-docker-commands)
    -   [Save Image](#save-image)
    -   [Load Image](#load-image)
-   [Troubleshooting](#troubleshooting)
    -   [Docker Interface Uses Same Subnet as Client](#docker-interface-uses-same-subnet-as-client)
    -   [Issue Communicating with deb.debian.com](#issue-communicating-with-debdebiancom)
    -   [Automatically Mount VMware Shared Folders](#automatically-mount-vmware-shared-folders)

<a name='prerequisites'></a>

## Prerequisites

<a name='installing-docker'></a>

### Installing Docker

Docker Engine must be installed to run PTP. The latest version of the Docker Engine is recommended or at least a version greater than v4.5.0.

#### Requirements

Internet connectivity is required to install Docker. The latest version of the Docker Engine is recommended or at least a version greater than v4.5.0.

**Debian Instructions**

```sh
> sudo apt-get update
> sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
> curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
> echo ‘deb [arch=amd64] https://download.docker.com/linux/debian buster stable’ | sudo tee /etc/apt/sources.list.d/docker.list
> sudo apt-get update
> sudo apt-get install docker-ce
> docker --version
```

### Installing Docker Compose

Docker Compose must be installed to run PTP. Docker Compose comes installed by default with Docker Desktop for Windows and MacOS. Make sure that the version of Docker Compose is the latest or at least a version greater than v2.2.3. Linux requires downloading the appropriate binary to use. Internet connectivity is required to download Docker Compose.

**Debian Instructions**

###### Install using the repository (Recommended option)

1. Once Docker Engine is successfully installed, run the following command to update the `apt` package index, and install the latest version of Docker Compose:

    ```bash
     > sudo apt-get update
     > sudo apt-get install docker-compose-plugin
    ```

2. To install a specific version of Docker Engine, run the following commands to list the versions available in your repository, then select and install:
    ```bash
     > apt-cache madison docker-compose-plugin
     docker-compose-plugin | 2.3.3~ubuntu-focal | https://download.docker.com/linux/ubuntu focal/stable arm64 Packages
     > sudo apt-get install docker-compose-plugin=<VERSION_STRING>
    ```
3. Test that the installation of Docker Compose was sucessful.
    ```bash
    > docker compose version
    Docker Compose version v2.3.3
    ```

###### Install the binary manually

1. Run the following command to download the current stable version of Docker Compose:

    ```bash
    DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
    mkdir -p $DOCKER_CONFIG/cli-plugins
    curl -SL https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
    ```

2. Apply executable permissions to the library.

    ```bash
    chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
    ```

3. Test that installation was successful.

    ```bash
    > docker compose version
    Docker Compose version v2.2.3
    ```

<a name='installing-python'></a>

### Installing Python

Python 3.8.0 must be installed to run PTP.

#### Requirements

Internet connectivity is required to install Python.

**Debian Instructions**

```sh
> sudo apt update
> sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl libbz2-dev
> curl -O https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tar.xz
> tar -xf Python-3.8.2.tar.xz
> cd Python-3.8.2
> ./configure --enable-optimizations
> sudo make altinstall
> python3 --version
```

<a name='getting-started'></a>

## Getting Started

<a name='installation-for-penetration-testers'></a>

### Installation for Penetration Testers

A python3 script ptp.py is included.

#### Requirements

-   python3.8
-   Docker Desktop 4.5.0 , Engine Version: 20.10.12
-   Docker Compose v2.3.3
-   Zip

Docker and docker-compose must be installed on the host system. Additionally, Zip must be installed in order to use the CLI backup utility.

Copy the zip archive of the Reporting Engine source code to the host machine and unzip it. Then apply executable permissions to ptp.py and wait-for-it.sh.

```sh
> chmod +x ptp.py
> chmod +x docker/dev/wait-for-it.sh
```

#### Install (Using Internet Connection)

To run in production mode with TLS and without a proxy use the command:

```sh
> python3 ptp.py run -r [RVA/RPT/HVA]
```

To run in production mode with a proxy, make sure to specify a proxy configuration file as a parameter:

```sh
> python3 ptp.py run -r [RVA/RPT/HVA] -p proxy.txt
```

Note: The default assessment type of the application is set to **RVA**.

During set up, you will automatically be prompted to create a superuser. Once the application is running, users on networked machines can create their accounts with the sign up button on the login screen. If you need to create additional superusers in the future, use the following command:

```sh
> python3 ptp.py su
```

#### Install (Without Internet Connection)

Retrieve the prod_web:latest.tar, prod_db:latest.tar, and prod_nginx:latest.tar files and save them to your local host. See the [Common Docker Commands](#common-docker-commands) section for further instruction on how to save and load docker images.

###### Restoring From New Docker Images

To set up an instance of pen test portal from newly retrieved docker images, run the following command, making sure to
specify the type of assessment (RVA, RPT, or HVA) and the directory that
contains your web, db, and nginx .tar files:

```sh
> ptp.py restore [-h] -b BACKUP -r [RVA/RPT/HVA]
```

###### Restoring From Saved Docker Images (Week 1)

To set up an instance of pen test portal from the retrieved docker images, run the following commands:

```sh
# Save docker images as tar files, and transfer to an external directory
> docker save -o prod_web.tar:latest prod_web
> docker save -o prod_db.tar:latest prod_db
> docker save -o prod_nginx.tar:latest prod_nginx
# Generate backup file of assessment data from CLI or Tools Page, transfer to external directory
# Stop and remove app containers
> ./ptp.py remove
# Transfer backup files and docker image tar files to target system and load and restore
> docker load --input prod_web.tar:latest
> docker load --input prod_db.tar:latest
> docker load --input prod_nginx.tar:latest
# Restore application from backup zip
> ./ptp.py restore [-h] -b BACKUP -r [RVA/RPT/HVA]
```

After running ptp.py resume, navigate to the application in your browser and login with your existing user credentials to access saved application data.

**Please use `python3 ptp.py -h` for additional information on using the ptp.py script.**

#### How to Configure a Proxy File

To configure proxy settings, create a proxy.txt file and set the following configurations using the specified format:

###### Linux Machine

```sh
http_proxy=http://proxy-address:port/
https_proxy=http://proxy-address:port/
ftp_proxy=http://proxy-address:port/
no_proxy=localhost,127.0.0.1,.local
HTTP_PROXY=http://proxy-address:port/
HTTPS_PROXY=http://proxy-address:port/
FTP_PROXY=http://proxy-address:port/
NO_PROXY=localhost,127.0.0.1,.local
```

If the proxy server requires authentication, set the proxy configurations as follows:

```sh
http_proxy=http://username:password@proxy-address:port/
https_proxy=http://username:password@proxy-address:port/
ftp_proxy=http://username:password@proxy-address:port/
no_proxy=localhost,127.0.0.1,.local
HTTP_PROXY=http://username:password@proxy-address:port/
HTTPS_PROXY=http://username:password@proxy-address:port/
FTP_PROXY=http://username:password@proxy-address:port/
NO_PROXY=localhost,127.0.0.1,.local
```

<a name='installation-for-developers'></a>

### Installation for Developers

<!-- # add directory layout notes -->

Developer installation can be done via the ptp script or by manual installation. The developer version mounts the host's code directory as a volume, allowing for live reload of code changes in the application.

<a name='automated-set-up-with-ptp-script'></a>1. **Automated Setup**

```shell
> ./ptp.py dev -r [RVA/RPT/HVA]
```

If you want to build without a proxy use the following command:

```shell
> ./ptp.py dev -p False
```

Note: The default assessment type of the application is set to **RVA** `./ptp.py dev`.

<a name='manual-set-up'></a> 2. **Manual Setup**

To build and run the docker containers use the command:

```sh
> docker-compose -f docker-compose.yml up -d
```

Once the containers are created, run the following commands:

```sh
> docker-compose run web python manage.py makemigrations
> docker-compose run web python manage.py migrate
> docker-compose run web python manage.py set_report_type --type [RVA/RPT/HVA]
> docker-compose run web python manage.py dbLoader
```

The database is populated now with the information needed to enter findings. The final step is to create a login for yourself by running the command:

```sh
> docker-compose run web python manage.py createsuperuser
```

Once the application is running, users on networked machines can create their accounts with the sign up button on the login screen.

<a name='browse-to-the-application'></a>

### Browse to the Application

**Production Mode URL**
Point your browser to <https://localhost/ptportal>.

**Development Mode URL**
Point your browser to <http://localhost:8080/ptportal>.

#### Admin Interface

Upon login, superusers will see an option to view the admin interface in the account dropdown menu on the top right. Superusers can also login to the interface here:

**Production Mode URL**
<https://localhost/admin>

**Development Mode URL**
<http://localhost:8080/admin>

<a name='using-application'></a>

## Using the Application

<a name='help-templates'></a>

### Help Templates

There are three templates that might be useful to penetration testers as they are performing assessments located at ./help-templates:

-   **emails.csv**: An example of the expected csv format for the emails upload in the RPT Open Source Information section of Report.
-   **domains.csv**: An example of the expected csv format for the domains upload in the RPT Open Source Information section of Report.
-   **BugReportHowTo.txt**: A template for reporting bugs to the development team.

<a name='technical-constraints'></a>

## Technical Constraints

In the current version, collaborating on the report screen and saving at the same time as another user may lead to data loss. The maximum number of screenshots that can be uploaded at one time with a finding is 20, and for technical overview is 40. The max file size is 5MB. These maximums are configurable.

<a name='common-commands'></a>

## Common PTP Script Commands

<a name='pause'></a>

### Pause

If you would like to pause the docker containers to save memory and battery life when not in use, use the pause command:

```sh
> ./ptp.py pause
```

<a name='resume'></a>

### Resume

The resume command of the application is useful for any of following instances:

-   The application is paused and you need to resume it
-   You need to resume the application from loaded docker images
-   The docker application quit unexpectedly and you need to resume the application
-   Docker images stopped running and you need to resume the application

To resume the application, run the following command:

```sh
> ./ptp.py resume
```

<a name='backup'></a>

### Backup

There are two ways to backup your data. The preferred method is to click the "Download Backup" button in the Tools screen of the GUI of the application. This will download a database dump and media files as a zip file (PTP_Backup....zip).

To backup your assessment data via ptp.py run the command:

```sh
> ./ptp.py backup
```

You will be prompted to enter a password in order to encrypt the backup zip file.

<a name='logs'></a>

### Logs

If you need to access logs for troubleshooting purposes you can attach to the web container by running the command:

```sh
> ./ptp.py logs
```

<a name='shell'></a>

### Jump into Shell

If you want to jump into a bash shell of the web container, run the command:

```sh
> ./ptp.py shell
```

<a name='tear-down'></a>

### Tear Down

After you have backed up the database with the above method, and moved the backup files from the container, you can stop the containers and remove them.

```sh
> ./ptp.py remove
```

<a name='restore'></a>

### Restore

In order to smoothly restore a PTP instance, make sure your backup zip file (i.e. PTP_Backup....zip) is in the same directory as manage.py and ptp.py. Specify the backup file path as an argument in the following command:

```sh
> ptp.py restore [-h] -b BACKUP -r [RVA/RPT/HVA]
```

You will be prompted to enter the password that was used to encrypt the backup zip file.

<a name='common-docker-commands'></a>

## Common Docker Commands

<a name='save-image'></a>

### Save Image

To properly save the prod_nginx, prod_db and prod_web docker images to a tar archive run the following commands:

```bash
> docker save -o prod_web.tar:latest prod_web
> docker save -o prod_db.tar:latest prod_db
> docker save -o prod_nginx.tar:latest prod_nginx
```

<a name='save-image'></a>

### Load Image

To properly load prod_nginx, prod_db and prod_web docker images from a tar archive, run the following commands:

```bash
> docker load --input prod_web.tar:latest
Loaded image: prod_web:latest
> docker load --input prod_db.tar:latest
Loaded image: prod_db:latest
> docker load --input prod_nginx.tar:latest
Loaded image: prod_nginx:latest
```

<a name='troubleshooting'></a>

## Troubleshooting

### Docker Interface Uses Same Subnet as Client

###### Linux Installation

1. Open the following json config: `/etc/docker/dameon.json`
2. Add/edit the following lines:

```sh
"default-address-pools":
[
    {"base":"10.10.0.0/16","size":24}
],
```

You can change the IP and subnet mask to the range you desire. The size parameter is to specify the subnet mask in created networks within the base range. Don't make the base subnet mask smaller than the size parameter or else you will run into issues creating networks.

3. Restart docker: `service docker restart`

This should change the network addresses that a docker network will assign to its networks.

### Issue Communicating with deb.debian.com

When creating containers or images, you may face the issue of not being able to connect to deb.debian.com. This can be due to VPN/proxy server configurations, or an unstable network connection. If you encounter this issue:

1. Check that your proxy settings are configured correctly
2. Try to create containers or images off the VPN
3. Restart Docker
4. Reboot your VM
5. Try to create the containers or images at a later time

### Automatically Mount VMware Shared Folders

If you want the VMware Linux VM to automatically mount a VMware shared folder on boot, run the following commands:

1. Open the `/etc/fstab` file:

```sh
> sudo nano /etc/fstab
```

2. Add the following line at the end of the `/etc/fstab` file:

```sh
.host:/<VMwareShareName> <MountDirectoryOnVM> fuse.vmhgfs-fuse allow_other,uid=<YourUserID>,gid=<YourGroupID> 0  0
```

Note: Make sure to replace **VMwareShareName**, **MountDirectoryOnVM**, **YourUserID** and **YourGroupID** with the appropriate information.

3. To find **YourUserID** and **YourGroupID**, run the following commands:

```sh
> id -u
1000
> id -g
1000
```

4. Save the `/etc/fstab` file
5. Reboot the Linux VM

```sh
> sudo reboot
```

6. Verify that the VMware shared folder was mounted successfully onto the VM

```sh
> df -h | grep <VMwareShareName>
```
