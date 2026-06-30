from __future__ import annotations

import argparse
import os
import shutil
import tempfile
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://raw.githubusercontent.com/ilartstu/ai_biolab_docker/cgan/data/cgan"
ASSETS = {
    "covid_ml_data_Spb.csv": f"{BASE}/covid_ml_data_Spb.csv",
    "model/generator_full_model.h5": f"{BASE}/model/generator_full_model.h5",
    "model/discriminator_full_model.h5": f"{BASE}/model/discriminator_full_model.h5",
}


def download(url: str, destination: Path) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    request = urllib.request.Request(url, headers={"User-Agent": "ai-biolab-bootstrap/1.0"})
    with urllib.request.urlopen(request, timeout=180) as response:
        with tempfile.NamedTemporaryFile(delete=False, dir=destination.parent) as tmp:
            shutil.copyfileobj(response, tmp)
            temp_path = Path(tmp.name)
    if temp_path.stat().st_size < 1024:
        temp_path.unlink(missing_ok=True)
        raise RuntimeError(f"Downloaded asset is unexpectedly small: {url}")
    os.replace(temp_path, destination)


def main() -> None:
    parser = argparse.ArgumentParser(description="Download CGAN runtime assets from the cgan branch.")
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    data_dir = ROOT / "data" / "cgan"
    for relative_path, url in ASSETS.items():
        destination = data_dir / relative_path
        if destination.exists() and destination.stat().st_size >= 1024 and not args.force:
            print(f"OK existing: {destination.relative_to(ROOT)}")
            continue
        print(f"Downloading: {url}")
        download(url, destination)
        print(f"Saved: {destination.relative_to(ROOT)} ({destination.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
