# Risk & Vulnerability Reporting Engine

# Copyright 2022 Carnegie Mellon University.

# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.

# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

# Carnegie Mellon® is registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.

# This Software includes and/or makes use of Third-Party Software each subject to its own license.

# DM22-0744
import datetime
import itertools
import subprocess
import sys

from pathlib import Path
from collections import namedtuple

# from: https://chrisalbon.com/python/data_wrangling/break_list_into_chunks_of_equal_size/
def chunks(l, n):
    # For item i in a range that is a length of l,
    for i in range(0, len(l), n):
        # Create an index range for l of n items:
        yield l[i : i + n]


# adapted from: https://gist.github.com/smajda/4e2c80c7b5e199c3663c
def pad_list(items, pad_to=10, pad_with=''):
    "If items is shorter than pad_to, return a new list appending pad_with up to pad_to"
    if len(items) >= pad_to:
        return items
    return items + [pad_with for i in range(0, pad_to - len(items))]


def namedtuplify(headers, rows):
    """
    Takes a list of headers and a list of lists that are rows
    and returns a list of namedtuples.
    - removes any whitespaces in column names in headers
    - pads any rows that aren't long enough with empty strings
    """
    max_cols = len(headers)
    Row = namedtuple('Row', [col_name.replace(' ', '') for col_name in headers])

    rows = list(chunks(rows, max_cols))
    rows = [Row(*pad_list(row, pad_to=max_cols)) for row in rows]
    return rows


def get_docker_images():
    output = subprocess.check_output(['docker', 'images']).decode('utf-8').split('  ')
    output = [x.strip().splitlines() for x in [x for x in output if x]]
    output = list(itertools.chain.from_iterable(output))
    headers, rows = output[:5], output[5:]
    return namedtuplify(headers, rows)


def web_images(rows=None):
    "List of image ids that are not tagged"
    rows = rows or get_docker_images()
    return [row.IMAGEID for row in rows if 'web' in row.REPOSITORY]


def db_images(rows=None):
    "List of image ids that are not tagged"
    rows = rows or get_docker_images()
    return [row.IMAGEID for row in rows if 'db' in row.REPOSITORY]


def proxy_images(rows=None):
    "List of image ids that are not tagged"
    rows = rows or get_docker_images()
    return [
        row.IMAGEID
        for row in rows
        if 'nginx' in row.REPOSITORY or 'proxy' in row.REPOSITORY
    ]


def get_docker_containers():
    output = subprocess.check_output(['docker', 'ps', '-a']).decode('utf-8').split('\n')
    output = [[x.strip() for x in row.split('  ') if x] for row in output]
    output = list(itertools.chain.from_iterable(output))

    headers, rows = output[:7], output[7:]
    return namedtuplify(headers, rows)


# def web_containers(rows=None):
#     rows = rows or get_docker_containers()
#     return [row.CONTAINERID for row in rows if 'web' in row.NAMES or 'web' in row.IMAGE]

# def db_containers(rows=None):
#     rows = rows or get_docker_containers()
#     print('db rows')
#     print(rows)
#     db_containers = [row.CONTAINERID for row in rows if 'db' in row.NAMES or 'postgres' in row.IMAGE]
#     return db_containers

# def proxy_containers(rows=None):
#     rows = rows or get_docker_containers()
#     return [row.CONTAINERID for row in rows if 'nginx' in row.NAMES or 'nginx' in row.IMAGE]


def remove_images(images):
    for image_id in images:
        try:
            output = subprocess.check_output(['docker', 'rmi', image_id, '--force'])
        except subprocess.CalledProcessError as e:
            print(e)
            sys.exit()
        print(output)


def remove_containers(containers):
    for container_id in containers:
        try:
            output = subprocess.check_output(['docker', 'rm', container_id, '--force'])
        except subprocess.CalledProcessError as e:
            print(e)
            sys.exit()
        print(output)


def get_docker_volumes():
    output = (
        subprocess.check_output(['docker', 'volume', 'ls']).decode('utf-8').split('  ')
    )
    output = [x.strip().splitlines() for x in [x for x in output if x]]
    output = list(itertools.chain.from_iterable(output))
    headers, rows = output[:2], output[2:]
    return namedtuplify(headers, rows)


def web_volumes(rows=None):
    rows = rows or get_docker_volumes()
    return [row.VOLUMENAME for row in rows if 'web' in row.VOLUMENAME]


def db_volumes(rows=None):
    rows = rows or get_docker_volumes()
    return [
        row.VOLUMENAME
        for row in rows
        if 'db' in row.VOLUMENAME or 'postgres' in row.VOLUMENAME
    ]


def remove_volumes(volumes):
    for volume in volumes:
        try:
            output = subprocess.check_output(
                ['docker', 'volume', 'rm', volume, '--force']
            )
        except subprocess.CalledProcessError as e:
            print(e)
            sys.exit()
        print(output)


# def web_containers():
#     web_ids = subprocess.check_output(['docker','ps','-aq','--filter','name=web']).decode('utf-8').strip().split('\n')
#     return [x for x in web_ids if x]

# def db_containers():
#     db_ids = subprocess.check_output(['docker','ps','-aq','--filter','name=db']).decode('utf-8').strip().split('\n')
#     return [x for x in db_ids if x]

# def proxy_containers():
#     proxy_ids = subprocess.check_output(['docker','ps','-aq','--filter','name=nginx']).decode('utf-8').strip().split('\n')
#     return [x for x in proxy_ids if x]

# def test_containers(browser):
#     test_ids = subprocess.check_output(['docker', 'ps', '-aq', '--filter', f'name={browser}']).decode('utf-8').strip().split('\n')
#     return [x for x in test_ids if x]


def get_containers(name):
    container_ids = (
        subprocess.check_output(['docker', 'ps', '-aq', '--filter', f'name={name}'])
        .decode('utf-8')
        .strip()
        .split('\n')
    )
    return [x for x in container_ids if x]


def test_image(browser='chrome'):
    image = (
        subprocess.check_output(
            ['docker', 'images', 'selenium/node-' + browser + '-debug:latest', '-aq']
        )
        .decode('utf-8')
        .strip()
    )
    return image


def save_container(container, container_file_name):
    _ = subprocess.run(['docker', 'export', '-o', container_file_name, container])


def load_container(container_file_name):
    _ = subprocess.run(['docker', 'import', container_file_name])


def save_image(image, image_file_name):
    _ = subprocess.run(['docker', 'save', '-o', image_file_name, image])


def load_image(image_file_name):
    _ = subprocess.run(['docker', 'load', '-i', image_file_name])


def save_container_image(container, image_name=None):
    # if name of image is not provided, use the container name
    # where the container names are [dev/prod]_[db/web/nginx]_1
    # so this selects only [dev/prod]_[db/web/nginx]
    if image_name is None:
        image_name = f"{container[:-2]}:latest"
    _ = subprocess.run(['docker', 'commit', container, image_name])
    image_file_name = Path('docker/images/' + image_name + '.tar')
    save_image(image_name, image_file_name)


def build(compose_file, project_name='dev'):
    _ = subprocess.run(
        ['docker-compose', '-f', compose_file, '-p', project_name, 'up', '-d']
    )


def stop_container(container):
    if isinstance(container, list):
        for container in container:
            _ = subprocess.run(['docker', 'stop', container])
    else:
        _ = subprocess.run(['docker', 'stop', container])


def remove_networks(network):
    if isinstance(network, list):
        for network in network:
            _ = subprocess.run(['docker', 'network', 'rm', network])
    else:
        _ = subprocess.run(['docker', 'network', 'rm', network])


def stop(compose_file, project_name='dev'):
    _ = subprocess.run(
        ['docker-compose', '-f', compose_file, '-p', project_name, 'stop']
    )
