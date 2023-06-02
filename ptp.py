#!/usr/bin/env python3

# Risk & Vulnerability Assessment Reporting Engine

# Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
# (see Contributors.txt for a full list of Contributors)

# SPDX-License-Identifier: BSD-3-Clause

# Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

# Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

# DM22-1011


import argparse
import datetime
import glob
import logging
import os, getpass, zipfile
import platform
import subprocess
import sys
import shutil

from pathlib import Path
from zipfile import ZipFile

import docker as d
from pentestportal import settings


def get_mode():
    if os.path.exists("mode.txt"):
        with open('mode.txt', 'r') as f:
            mode = f.read()
        return mode
    else:
        return None


def set_mode(mode):
    with open('mode.txt', 'w') as f:
        f.write(mode)


def get_web_container():
    mode = get_mode()
    return mode + '-web-1'


def logger(log_file='ptportal.log', initial=None, verbosity=logging.INFO):
    logger = logging.getLogger("pipeline")
    logger.setLevel(verbosity)

    fh = logging.FileHandler(log_file)
    ch = logging.StreamHandler()

    logger.addHandler(fh)
    logger.addHandler(ch)

    logger.info("PT Portal")
    return logger


def clear_migrations():
    """Remove any dangling migrations to avoid conflicts -- completely rebuild each run"""

    migrations_path = Path('ptportal/migrations')
    migrations_pycache_path = Path('ptportal/migrations/__pycache__')

    shutil.rmtree(migrations_pycache_path, ignore_errors=True)
    shutil.rmtree(migrations_path, ignore_errors=True)

    Path('ptportal/migrations').mkdir(parents=True, exist_ok=True)
    Path('ptportal/migrations/__init__.py').touch()


def compose_env(proxy=None):
    """Compose environment file"""
    mode = get_mode()

    if not os.path.exists(f'docker/{mode}/env.txt'):

        docker_env_path = Path(f'docker/{mode}/env.txt')
        docker_env_backup_path = Path(f'docker/{mode}/env-backup.txt')
        docker_env_backup_path.touch()

        shutil.copyfile(docker_env_path, docker_env_backup_path)

        if proxy and proxy != 'False':
            with open(proxy, 'r') as f:
                proxy_info = f.read()

            with open(docker_env_path, 'w') as f:
                f.write('\n')
                f.write(proxy_info)


def restore_env():
    """Restore environment variable file to original state"""
    mode = get_mode()

    docker_env_path = Path(f'docker/{mode}/env.txt')
    docker_env_backup_path = Path(f'docker/{mode}/env-backup.txt')

    if os.path.exists(docker_env_backup_path):
        shutil.move(docker_env_backup_path, docker_env_path)


def build_ptportal(report_type, su=True, restore=False, migrations_file=None):
    """Run commands to prep pentestportal app and run django server"""
    web_container = get_web_container()

    if not migrations_file:
        subprocess.run(
            ['docker', 'exec', web_container, 'python', 'manage.py', 'makemigrations']
        )
    subprocess.run(['docker', 'exec', web_container, 'python', 'manage.py', 'migrate'])

    subprocess.run(
        [
            'docker',
            'exec',
            web_container,
            'python',
            'manage.py',
            'set_report_type',
            '--type',
            report_type,
        ]
    )
    subprocess.run(['docker', 'exec', web_container, 'python', 'manage.py', 'dbLoader'])
    subprocess.run(
        [
            'docker',
            'exec',
            web_container,
            'python',
            'manage.py',
            'collectstatic',
            '--no-input',
            '--verbosity',
            '0',
            '--ignore',
            'admin/*',
        ]
    )

    if su:
        subprocess.run(
            [
                'docker',
                'exec',
                '-it',
                web_container,
                'python',
                'manage.py',
                'createsuperuser',
            ]
        )


def rebuild_ptportal():
    web_container = get_web_container()

    subprocess.run(['docker', 'exec', web_container, 'python', 'manage.py', 'migrate'])


def check_if_ptportal_exists(log_handler=None):
    old_project_exists, _, _ = check_if_project_exited()
    if old_project_exists:
        res = input(
            'Are you sure you want to build a new ptportal instance? Existing ptportal app exists. All data will be lost. [y/n]'
        )
        if res == 'n' or res == 'no':
            if log_handler:
                log_handler.info('PT Portal Exists. Resuming...')
            docker_compose_up(force_recreate=False, rm_orphans=False)
            sys.exit()


def build_existing_images(
    compose_file='docker-compose.prod.yml',
    project_name='prod',
    image_path='docker/images',
):
    containers = ['web', 'db']
    if project_name == 'prod':
        containers += ['nginx']

    for container in containers:
        image_file = Path(f'{image_path}/{project_name}-{container}:latest.tar')
        d.load_image(image_file)

    subprocess.run(
        [
            'docker',
            'compose' '-f',
            compose_file,
            '-p',
            project_name,
            'up',
            '--no-recreate',
            '-d',
        ]
    )


def check_if_project_exited():
    """Checks to see if a project was built and if the containers are exited"""

    possible_project_names = [
        'prod',
        'dev',
        'test',
        'pentestportal',
        'pen-testing-portal',
    ]
    possible_docker_compose_files = ['docker-compose.prod.yml', 'docker-compose.yml']

    for project_name in possible_project_names:
        for docker_compose_file in possible_docker_compose_files:
            process = subprocess.run(
                [
                    'docker',
                    'compose',
                    '-f',
                    docker_compose_file,
                    '-p',
                    project_name,
                    'ps',
                ],
                stdout=subprocess.PIPE,
                encoding='utf-8',
            )
            exited_web_containers = [
                line for line in process.stdout.split('\n') if 'web' in line
            ]
            if exited_web_containers:
                print('project name: ', project_name)
                print('docker compose file: ', docker_compose_file)
                print('found exited containers: ', exited_web_containers)
                return True, project_name, docker_compose_file
    return False, None, None


def setup(args):
    log_handler = logger()
    log_handler.info('Installing dependencies...')

    install_dependencies()

    log_handler.info('Dependency installation complete.')


def dev(args, clear_docker=True):
    log_handler = logger()
    log_handler.info('Loading PT Portal with docker-compose for developers')

    check_if_ptportal_exists(log_handler)

    mode = 'dev'
    set_mode(mode)

    clear_migrations()
    if args.proxy:
        log_handler.info('composing environment variable file for docker-compose')
        compose_env(args.proxy)

    docker_compose_up(force_recreate=True, rm_orphans=True)
    build_ptportal(report_type=args.report_type)

    restore_env()
    log_handler.info('App is ready at localhost:8080!')


def run(args):
    log_handler = logger()
    log_handler.info('Loading PT Portal with docker-compose')

    check_if_ptportal_exists(log_handler)

    has_secret_key = False
    new_line = False

    with open('docker/prod/env.txt', 'r') as f:
        lines = f.readlines()

        if "\n" in lines[-1]:
            new_line = True

        for line in lines:
            if line.find("SECRET_KEY=") != -1:
                has_secret_key = True
                break

    if not has_secret_key:
        f=open('docker/prod/env.txt', 'a')
        if not new_line:
            f.write("\n")
        f.write("SECRET_KEY=\'")
        f.close()
        secret_key_cmd = "python3 -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key(), end=\"\")' >> docker/prod/env.txt"
        subprocess.run(secret_key_cmd, shell=True)
        f=open('docker/prod/env.txt', 'a')
        f.write("\'\n")
        f.close()

    if os.path.isfile("docker/prod/nginx/ssl/selfsigned.crt") and os.path.isfile("docker/prod/nginx/ssl/selfsigned.key"):
        print("Using existing SSL files in docker/prod/nginx/ssl")
    else:
        if os.path.exists("docker/prod/nginx/ssl/"):
            print("SSL directory exists. Generating SSL files...")
        else:
            print("SSL directory does not exist. Creating SSL directory and generating SSL files...")
            make_ssl = "mkdir docker/prod/nginx/ssl"
            subprocess.run(make_ssl, shell=True)
        ssl_cmd = "openssl req -x509 -nodes -days 365 -subj \"/C=CA/ST=QC/O=Assessment Team/CN=reporting_engine\" -newkey rsa:2048 -keyout docker/prod/nginx/ssl/selfsigned.key -out docker/prod/nginx/ssl/selfsigned.crt"
        subprocess.run(ssl_cmd, shell=True)
        print("SSL files saved to: docker/prod/nginx/ssl")

    mode = 'prod'
    set_mode(mode)

    clear_migrations()
    if args.proxy:
        compose_env(args.proxy)

    docker_compose_down(rm_images=True, rm_volumes=True, rm_orphans=True)
    docker_compose_up(force_recreate=True, rm_orphans=True)
    build_ptportal(report_type=args.report_type)

    restore_env()
    log_handler.info('App is ready at https://[IP_ADDRESS]:443')


def install_dependencies():
    print("Installing Tailwind CSS...")
    try:
        tailwind_cmd = "npm install -D node/dependencies/tailwindcss-3 --legacy-peer-deps"
        subprocess.run(tailwind_cmd, shell=True)
    except Exception as e:
        print("Error installing Tailwind CSS: " + e)

    print("Installing Vue.js...")
    try:
        vue_cmd = "npm install -D node/dependencies/components-vue3 --legacy-peer-deps"
        subprocess.run(vue_cmd, shell=True)
    except Exception as e:
        print("Error installing Vue.js: " + e)


def docker_compose_start():
    """Starts old containers"""
    mode = get_mode()

    docker_compose_file = (
        'docker-compose.prod.yml' if mode == 'prod' else 'docker-compose.yml'
    )
    project_name = 'prod' if mode == 'prod' else 'dev'

    try:
        subprocess.run(
            f'docker compose -f {docker_compose_file} -p {project_name} start',
            shell=True,
        )
    except Exception as e:
        print('exception handler: ', e)
        subprocess.run(f'docker compose start', shell=True)


def docker_compose_down(rm_images=True, rm_volumes=True, rm_orphans=True):
    """Stops containers and removes containers, networks, volumes, and images created by up."""
    mode = get_mode()

    remove_images = '--rmi=local' if rm_images else ''
    remove_volumes = '--volumes' if rm_volumes else ''
    remove_orphans = '--remove-orphans' if rm_orphans else ''
    docker_compose_file = (
        'docker-compose.prod.yml' if mode == 'prod' else 'docker-compose.yml'
    )
    project_name = 'prod' if mode == 'prod' else 'dev'

    try:
        subprocess.run(
            f'docker compose -f {docker_compose_file} -p {project_name} down {remove_images} {remove_volumes} {remove_orphans}',
            shell=True,
        )
    except Exception as e:
        print('exception handler: ', e)
        subprocess.run(
            f'docker compose -f {docker_compose_file} -p {project_name} down',
            shell=True,
        )
        subprocess.run(f'docker compose -f {docker_compose_file} down', shell=True)


def docker_compose_up(force_recreate=True, rm_orphans=True):
    """Builds, (re)creates, starts, and attaches to containers for a service."""
    mode = get_mode()

    force_recreate = '--force-recreate' if force_recreate else ''
    remove_orphans = '--remove-orphans' if rm_orphans else ''
    docker_compose_file = (
        'docker-compose.prod.yml' if mode == 'prod' else 'docker-compose.yml'
    )
    project_name = 'prod' if mode == 'prod' else 'dev'

    try:
        subprocess.run(
            f'docker compose -f {docker_compose_file} -p {project_name} up -d {force_recreate} {remove_orphans}',
            shell=True,
        )
    except Exception as e:
        print('exception handler: ', e)
        subprocess.run(
            f'docker compose -f {docker_compose_file} -p {project_name} up -d',
            shell=True,
        )
        subprocess.run(f'docker compose -f {docker_compose_file} up -d', shell=True)


def docker_compose_rebuild_service(service):
    """Starts rebuilds specific service"""
    mode = get_mode()

    docker_compose_file = (
        'docker-compose.prod.yml' if mode == 'prod' else 'docker-compose.yml'
    )
    project_name = 'prod' if mode == 'prod' else 'dev'

    try:
        subprocess.run(
            f'docker compose -f {docker_compose_file} -p {project_name} build {service}',
            shell=True,
        )
    except Exception as e:
        print('exception handler: ', e)
        subprocess.run(f'docker compose start', shell=True)


def clear_docker_cache(args, verbose=True):
    if verbose:
        print('Stop Containers')
    docker_compose_down()


def clear_media_content():
    """Removes subfolders from pentestportal/media/"""
    media_folder = os.path.join('pentestportal', 'media')

    try:
        if os.path.exists(media_folder) and os.path.isdir(media_folder):
            log_handler = logger()
            log_handler.info(f'Removing contents from {media_folder}')
            for inode in os.listdir(media_folder):
                currPath = os.path.join(media_folder, inode)
                try:
                    if os.path.isdir(currPath):  # if inode is dir, remove
                        shutil.rmtree(currPath, ignore_errors=True)
                except Exception as e:
                    print('exception handler: ', e)
    except Exception as e:
        print('exception handler: ', e)


def remove(args):
    res = input(
        'WARNING: If you did not back up your docker images, database, and media files to your system, you will lose your data by proceeding and will not be able to restore it. Are you sure you wish to proceed? [y/n]'
    )
    if res == 'y' or res == 'yes':
        clear_docker_cache(args, verbose=True)
        clear_media_content()
    exit()


def save_containers(container_folder_path='docker/containers/'):
    mode = get_mode()

    container_folder_path = Path(container_folder_path)
    mode = get_mode()

    containers = {
        mode + '-db-1': f'{container_folder_path}{mode}_db_container.tar',
        mode + '-web-1': f'{container_folder_path}{mode}_web_container.tar',
    }

    if mode == 'prod':
        containers['prod-nginx-1'] = f'{container_folder_path}prod_nginx_container.tar'

    for container, name in enumerate(containers):
        print(f'saving  container {container} to file: {name}')
        d.save_container(container, name)


def load_containers(container_folder_path='docker/containers/'):
    mode = get_mode()

    container_folder_path = Path(container_folder_path)
    containers = [
        f'{container_folder_path}{mode}_db_container.tar',
        f'{container_folder_path}{mode}_web_container.tar',
    ]
    if mode == 'prod':
        containers += Path(f'{container_folder_path}prod_nginx_container.tar')

    for container in containers:
        print(f'loading container {container}')
        d.load_container(container)


def backup_app_repo(backup_name='repo-backup'):
    # Copy entire repo into folder
    shutil.rmtree(backup_name, ignore_errors=True)
    shutil.copytree('.', backup_name)
    return backup_name


def backup_json(
    container, backup_name='json-backup', json_file='datadump.json', in_docker=False
):
    if in_docker:
        subprocess.run(
            [
                'python',
                'manage.py',
                'dumpdata',
                '--exclude=contenttypes',
                '--exclude=auth.Permission',
                '--indent=2',
                '--format=json',
                '--output=' + json_file,
            ]
        )
        _ = subprocess.run(
            [
                'python',
                'manage.py',
                'generate_DHS_JSON',
                backup_name,
            ]
        )
    else:
        subprocess.run(
            [
                'docker',
                'exec',
                '-it',
                container,
                'python',
                'manage.py',
                'dumpdata',
                '--exclude=contenttypes',
                '--exclude=auth.Permission',
                '--indent=2',
                '--format=json',
                '--output=' + json_file,
            ]
        )
        _ = subprocess.run(
            [
                'docker',
                'exec',
                '-it',
                container,
                'python',
                'manage.py',
                'generate_DHS_JSON',
                backup_name,
            ]
        )
    if not Path(backup_name).exists():
        Path(backup_name).mkdir()
    shutil.move(json_file, backup_name)
    return backup_name


def backup_media(backup_name='media-backup'):
    # using distutils copy_tree function because it
    # copies a directory into an existing directory w/o problems
    shutil.copytree(Path('pentestportal/media'), backup_name)
    return backup_name


def backup_migrations(backup_name='migrations-backup'):
    # Only backup first migrations file since we only use the first
    # migrations file
    shutil.copy('ptportal/migrations/0001_initial.py', backup_name)
    return backup_name


def backup_mode(backup_name='mode-backup'):
    shutil.copy('mode.txt', backup_name)
    return backup_name


def backup_env(backup_name='env-backup'):
    mode = get_mode()
    shutil.copy('docker/' + mode + '/env.txt', backup_name)
    return backup_name

def image_backup(args=None, in_docker=False):
    mode = get_mode()

    web_image = mode + '-web'
    db_image = mode + '-db'
    path = 'docker/' + mode + '/'

    print('Backing up web image to: ' + path + 'web.tar')
    subprocess.run(
        [
            'docker',
            'save',
            web_image,
            '-o',
            path + 'web.tar'
        ]
    )

    print('Backing up db image to: ' + path + 'db.tar')
    subprocess.run(
        [
            'docker',
            'save',
            db_image,
            '-o',
            path + 'db.tar'
        ]
    )

    if mode == 'prod':
        nginx_image = mode + '-nginx'
        print('Backing up nginx image to: ' + path + 'nginx.tar')
        subprocess.run(
            [
                'docker',
                'save',
                nginx_image,
                '-o',
                path + 'nginx.tar'
            ]
        )


def partial_backup(args=None, in_docker=False, password=None):
    """This method only backs up the JSON data
    and media images.
    This data can then be ingested into a new
    PT Portal instance.
    The migration file is kept, so this is
    comptabile with future releases that don't
    rely on model changes"""
    mode = get_mode()
    container = mode + '-web-1'
    backup_folder = 'backup_folder'
    shutil.rmtree(backup_folder, ignore_errors=True)
    backup_media(backup_folder)
    backup_json(container, backup_folder, in_docker=in_docker)
    backup_migrations(backup_folder)
    backup_mode(backup_folder)
    backup_env(backup_folder)
    with open('backup_folder/app_info.txt', 'w+') as f:
        f.write(settings.VERSION_NUMBER)
    backup_file = (
        'backup-' + datetime.datetime.now().strftime("%m-%d-%Y-%H-%M") + '.zip'
    )
    if in_docker:
        # From the application interface.
        # The password is the engagement password
        subprocess.run(
            [
                'zip',
                '--encrypt',
                backup_file,
                '-r',
                backup_folder,
                '--password=' + password,
            ]
        )
    else:
        # From the command line interface
        print('Please enter a password to encrypt the backup')
        subprocess.run(
            [
                'docker',
                'exec',
                '-it',
                container,
                'zip',
                '--encrypt',
                backup_file,
                '-r',
                backup_folder,
            ]
        )
    shutil.rmtree(backup_folder)
    return backup_file


def backup(args):
    image_backup(args)
    partial_backup(args)


def partial_restore(args):
    """Takes a 'backup-XXX.zip'
    backup zip that contains the datadump json, a
    migrations file to rebuild the database schema,
    and the media folder with all of the images"""

    choice = input(
        "Restoring will delete all the data currently in the portal. Make sure to backup existing data before running a restore. Are you sure you want to restore the portal from a backup? [y/n]: "
    )
    if choice != "y":
        exit()

    docker_compose_down(rm_images=True, rm_volumes=True, rm_orphans=True)

    if os.path.exists(Path('backup_folder')):
        shutil.rmtree(Path('backup_folder'))

    try:
        with zipfile.ZipFile(args.backup, 'r') as zip:
            zip.extractall(pwd=bytes(getpass.getpass('Enter ZIP password: '), 'utf-8'))
            zip.close()
    except Exception as e:
        print("Failed to open zip.")
        print(e)
        shutil.rmtree(Path('backup_folder'))

    if os.path.exists(Path('backup_folder/mode.txt').resolve()):
        shutil.copy(Path('backup_folder/mode.txt'), Path('mode.txt'))
        with open(Path('mode.txt')) as mf:
            mode = mf.read()
    else:
        print("Unknown mode. Defaulting to prod.")
        mode = 'prod'

    if os.path.exists(Path('backup_folder/env.txt').resolve()):
        shutil.copy('backup_folder/env.txt', 'docker/' + mode + '/')

    if mode == 'dev':
        compose_file = 'docker-compose.yml'
    else:
        compose_file = 'docker-compose.prod.yml'

    path = 'docker/' + mode + '/'

    try:
        subprocess.run(
            [
                'docker',
                'load',
                '-i',
                path + 'db.tar'
            ]
        )
    except Exception as e:
        print(e)
        print('Existing database image (db.tar) not found. Will attempt to build database image from scratch...')

    try:
        subprocess.run(
            [
                'docker',
                'load',
                '-i',
                path + 'web.tar'
            ]
        )
    except Exception as e:
        print(e)
        print('Existing web image (web.tar) not found. Will attempt to build web image from scratch...')

    if mode == 'prod':
        try:
            subprocess.run(
                [
                    'docker',
                    'load',
                    '-i',
                    path + 'nginx.tar'
                ]
            )
        except Exception as e:
            print(e)
            print('Existing nginx image (nginx.tar) not found. Will attempt to build nginx image from scratch...')

    has_secret_key = False

    with open('docker/' + mode + '/env.txt', 'r') as f:
        lines = f.readlines()

        if "\n" in lines[-1]:
            new_line = True

        for line in lines:
            if line.find("SECRET_KEY=") != -1:
                has_secret_key = True
                break

    if not has_secret_key:
        f=open('docker/prod/env.txt', 'a')
        if not new_line:
            f.write("\n")
        f.write("SECRET_KEY=\'")
        f.close()
        secret_key_cmd = "python3 -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key(), end=\"\")' >> docker/prod/env.txt"
        subprocess.run(secret_key_cmd, shell=True)
        f=open('docker/prod/env.txt', 'a')
        f.write("\'\n")
        f.close()

    if os.path.isfile("docker/prod/nginx/ssl/selfsigned.crt") and os.path.isfile("docker/prod/nginx/ssl/selfsigned.key"):
        print("Using existing SSL files in docker/prod/nginx/ssl")
    else:
        if os.path.exists("docker/prod/nginx/ssl/"):
            print("SSL directory exists. Generating SSL files...")
        else:
            print("SSL directory does not exist. Creating SSL directory and generating SSL files...")
            make_ssl = "mkdir docker/prod/nginx/ssl"
            subprocess.run(make_ssl, shell=True)
        ssl_cmd = "openssl req -x509 -nodes -days 365 -subj \"/C=CA/ST=QC/O=Assessment Team/CN=reporting_engine\" -newkey rsa:2048 -keyout docker/prod/nginx/ssl/selfsigned.key -out docker/prod/nginx/ssl/selfsigned.crt"
        subprocess.run(ssl_cmd, shell=True)
        print("SSL files saved to: docker/prod/nginx/ssl")

    web_container = mode + '-web-1'
    # check if setting.version is the same.  if not, warn user
    with open('backup_folder/app_info.txt', 'r') as f:
        if f.read() != settings.VERSION_NUMBER:
            print(
                f'WARNING! Backup Built with a Different Version Number.  Backup Version: {f.read()}'
            )

    if os.path.isfile('ptportal/migrations/0001_initial.py'):
        os.remove(Path('ptportal/migrations/0001_initial.py'))

    if os.path.exists("ptportal/migrations"):
        shutil.copy('backup_folder/0001_initial.py', 'ptportal/migrations/')
    else:
        make_dir = "mkdir ptportal/migrations"
        subprocess.run(make_dir, shell=True)
        shutil.copy('backup_folder/0001_initial.py', 'ptportal/migrations/')
    

    docker_compose_up(force_recreate=True, rm_orphans=True)
    rebuild_ptportal()

    subprocess.run(
        [
            'docker',
            'exec',
            web_container,
            'python',
            'manage.py',
            'loaddata',
            'backup_folder/datadump.json',
        ]
    )

    if os.path.exists(Path('pentestportal/media/charts')):
        shutil.rmtree(Path('pentestportal/media/charts'))
    if os.path.exists(Path('pentestportal/media/screenshots')):
        shutil.rmtree(Path('pentestportal/media/screenshots'))
    if os.path.exists(Path('backup_folder/charts')):
        shutil.copytree(
            str(Path('backup_folder/charts')), str(Path('pentestportal/media/charts/'))
        )
    if os.path.exists(Path('backup_folder/screenshots')):
        shutil.copytree(
            str(Path('backup_folder/screenshots')),
            str(Path('pentestportal/media/screenshots/')),
        )

    shutil.rmtree('backup_folder')

    if mode == 'prod':
        print('App is ready at https://[IP_ADDRESS]:443')
    else:
        print('App is ready at http://[IP_ADDRESS]:8080')


def restore(args):
    partial_restore(args)


def create_super_user(args):
    """
    Create Super User
    """
    mode = get_mode()
    subprocess.run(
        [
            'docker',
            'exec',
            '-it',
            mode + '-web-1',
            'python',
            'manage.py',
            'createsuperuser',
        ]
    )


def shell(args):
    """
    Jump into container shell.   Default to web
    """
    mode = get_mode()
    if args.container == 'db':
        subprocess.run(['docker', 'exec', '-it', mode + '-db-1', 'sh'])
    elif args.container == 'nginx':
        subprocess.run(['docker', 'exec', '-it', mode + '-nginx-1', 'sh'])
    else:
        subprocess.run(['docker', 'exec', '-it', mode + '-web-1', 'sh'])


def show_logs(args):
    mode = get_mode()
    if args.container == 'db':
        subprocess.run(['docker', 'logs', '-f', mode + '-db-1'])
    elif args.container == 'nginx':
        subprocess.run(['docker', 'logs', '-f', mode + '-nginx-1'])
    else:
        subprocess.run(['docker', 'logs', '-f', mode + '-web-1'])


def main():
    description = "PT Portal"
    parser = argparse.ArgumentParser(description=description)

    subparsers = parser.add_subparsers(title='commands')

    # install dependencies
    setup_parser = subparsers.add_parser('setup', help='Install Dependencies')
    setup_parser.set_defaults(func=setup)

    # production version
    run_parser = subparsers.add_parser(
        'run', help='Build and Run PT Portal for Production'
    )
    run_parser.add_argument(
        '-r',
        '--report_type',
        choices=['RVA', 'HVA', 'RPT'],
        help='report type [RVA, HVA, RPT].   Default to RVA',
        default='RVA',
        required=False,
    )
    run_parser.add_argument(
        '-p', '--proxy', help='File with proxy configuration'  # Default for NO proxy!
    )
    run_parser.add_argument(
        '-v',
        '--verbose',
        action='count',
        default=0,
        help='Verbosity flag (repeat  for increased verbosity)',
    )
    run_parser.set_defaults(func=run)

    # dev version
    dev_parser = subparsers.add_parser('dev', help='Build and Run for Developers')
    dev_parser.add_argument(
        '-r',
        '--report_type',
        choices=['RVA', 'HVA', 'RPT'],
        help='report type [RVA, HVA, RPT].   Default to RVA',
        default='RVA',
        required=False,
    )
    dev_parser.add_argument(
        '-p', '--proxy', default='proxy.txt', help='File with proxy configuration'
    )
    dev_parser.add_argument(
        '-v',
        '--verbose',
        action='count',
        default=0,
        help='Verbosity flag (repeat  for increased verbosity)',
    )
    dev_parser.set_defaults(func=dev)

    # tear it down
    remove_parser = subparsers.add_parser('remove', help='Tear down an instance of Reporting Engine')
    remove_parser.set_defaults(func=remove)

    # backup the database and media directories
    backup_parser = subparsers.add_parser('backup', help='Backup an instance of Reporting Engine')
    backup_parser.set_defaults(func=backup)

    # restore a backups
    restore_parser = subparsers.add_parser(
        'restore', help='Restore an instance of Reporting Engine'
    )
    restore_parser.add_argument(
        '-b',
        '--backup',
        type=str,
        help='Path to backup file /path/to/ptp-backup.zip.',
        default='backup.zip',
        required=True,
    )
    restore_parser.add_argument(
        '-r',
        '--report_type',
        choices=['RVA', 'HVA', 'RPT'],
        help='report type [RVA, HVA, RPT].   Default to RVA',
        default='RVA',
        required=True,
    )
    restore_parser.set_defaults(func=restore)

    log_parser = subparsers.add_parser(
        'logs', help='Show logs for the specified container'
    )
    log_parser.add_argument(
        '-c',
        '--container',
        choices=['web', 'db', 'nginx'],
        help='container to show logs for [web, db, nginx] - defaults to web',
        default='web',
        required=False,
    )
    log_parser.set_defaults(func=show_logs)

    # create admin
    su_parser = subparsers.add_parser('su', help='Create a super user')
    su_parser.set_defaults(func=create_super_user)

    # exec into the web container
    shell_parser = subparsers.add_parser('shell', help='Jump into a shell for the specified container')
    shell_parser.add_argument(
        '-c',
        '--container',
        choices=['web', 'db', 'nginx'],
        help='shell to open [web, db, nginx] - defaults to web',
        default='web',
        required=False,
    )
    shell_parser.set_defaults(func=shell)

    if len(sys.argv) == 1:
        parser.print_help(sys.stderr)
        sys.exit(1)

    args = parser.parse_args()
    args.func(args)


if __name__ == '__main__':
    main()
