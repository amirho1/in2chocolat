import concurrent.futures
import pathlib
import re
import subprocess
import urllib.parse

root = pathlib.Path(__file__).resolve().parents[1]
source = (root / 'lib/store.ts').read_text()
paths = re.findall(r"media\('([^']+)'\)", source)
paths += [
    'uploads/2026/06/main-banner-3.webp',
    'uploads/2026/06/main-about-us.webp',
    'uploads/2026/07/in2bazzr-150x150.webp',
    'uploads/2026/09/cs4-banner-600x350.webp',
    'uploads/2026/06/roxyrose-banner-600x350.webp',
    'plugins/logo-manager-for-enamad/logo.png',
]

def download(path):
    target = root / 'public/images' / pathlib.Path(path).name
    url = 'https://images.weserv.nl/?url=' + urllib.parse.quote('in2bazar.com/wp-content/' + path, safe='')
    result = subprocess.run(['curl', '--fail', '--silent', '--show-error', '--location', '--max-time', '40', url, '-o', str(target)], capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError(path + ': ' + result.stderr)
    return f'{target.name}: {target.stat().st_size} bytes'

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    for result in pool.map(download, dict.fromkeys(paths)):
        print(result, flush=True)
