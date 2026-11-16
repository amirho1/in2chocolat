#!/usr/bin/env python3
"""Refresh the Chocolate image snapshot from its public WordPress media URLs."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import subprocess

BASE = 'https://in2chocolate.com/wp-content/'
DESTINATION = Path(__file__).resolve().parents[1] / 'public/images/chocolate'
PATHS = ['plugins/logo-manager-for-enamad/logo.png', 'uploads/2026/07/albeni-002-1-300x300.webp', 'uploads/2026/07/bebeto-003-1-300x300.webp', 'uploads/2026/07/bebeto-011-1-300x300.webp', 'uploads/2026/07/hobby-002-1-300x300.webp', 'uploads/2026/07/kitkat-012-1-300x300.webp', 'uploads/2026/07/logo-150x150.webp', 'uploads/2026/07/metro-002-1-300x300.webp', 'uploads/2026/08/icon-breakfast.webp', 'uploads/2026/08/icon-chocolate.webp', 'uploads/2026/08/icon-coffe.webp', 'uploads/2026/08/icon-drink.webp', 'uploads/2026/08/jacobs-008-300x300.webp', 'uploads/2026/08/lavazza-001-300x300.webp', 'uploads/2026/08/lavazza-004-300x300.webp', 'uploads/2026/08/main-about-us-c.webp', 'uploads/2026/08/main-banner.webp', 'uploads/2026/08/mehmet-001-300x300.webp', 'uploads/2026/08/mehmet-002-300x300.webp', 'uploads/2026/08/nestle-001-1-300x300.webp', 'uploads/2026/09/mars-003-1-300x300.webp', 'uploads/2026/09/snickers-003-1-300x300.webp']

def download(path):
    destination = DESTINATION / path.rsplit('/', 1)[-1]
    subprocess.run(['curl', '-fLsS', '--retry', '2', '--max-time', '30',
                    BASE + path, '-o', str(destination)], check=True)
    return destination.name

if __name__ == '__main__':
    DESTINATION.mkdir(parents=True, exist_ok=True)
    with ThreadPoolExecutor(max_workers=5) as pool:
        for name in pool.map(download, PATHS):
            print(name)
