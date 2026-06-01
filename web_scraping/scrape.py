import os
import csv
import re
import time
from urllib.parse import urlparse, urljoin
import requests
from bs4 import BeautifulSoup

# ==================== CONFIGURATION ====================
START_URL = "https://web.archive.org/web/20250304041408/https://serenemindclinics.com/"
OUTPUT_DIR = "recovered_pages"
CSV_FILE = "crawl_report.csv"
# =======================================================

# Parse out the baseline parts precisely
match = re.match(r"(https://web\.archive\.org/web/)(\d+)/(https?://.*)", START_URL)
if not match:
    print("Error: Please provide a valid Wayback Machine URL with a timestamp prefix format.")
    exit()

BASE_URL = match.group(1)      # https://web.archive.org/web/
TIMESTAMP = match.group(2)     # 20250304041408
ORIGINAL_SITE_URL = match.group(3) # https://serenemindclinics.com/

ORIGINAL_DOMAIN = urlparse(ORIGINAL_SITE_URL).netloc
ARCHIVE_PREFIX = f"{BASE_URL}{TIMESTAMP}/{ORIGINAL_SITE_URL}"

os.makedirs(OUTPUT_DIR, exist_ok=True)

visited_urls = set()
urls_to_crawl = [START_URL]
csv_data = []

print(f"Starting recovery for domain: {ORIGINAL_DOMAIN}")
print(f"Targeting Base Archive Path: {ARCHIVE_PREFIX}\n")

while urls_to_crawl:
    current_url = urls_to_crawl.pop(0)
    if current_url in visited_urls:
        continue

    visited_urls.add(current_url)
    print(f"Processing: {current_url}")

    # Clean injection mapping to get raw text markup
    # Produces: https://web.archive.org/web/20250304041408id_/https://...
    raw_wayback_url = current_url.replace(f"{BASE_URL}{TIMESTAMP}/", f"{BASE_URL}{TIMESTAMP}id_/")

    try:
        time.sleep(1.5) # Polite throttle speed
        response = requests.get(raw_wayback_url, timeout=15)

        if response.status_code != 200 or "Wayback Machine" in response.text[:500] and "Not Found" in response.text[:500]:
            print(f"  [MISSING] Page not found in archive timeline.")
            csv_data.append({"URL": current_url, "Status": "Missing / 404", "Local File": "N/A"})
            continue

        status = "Success"
        soup = BeautifulSoup(response.text, 'html.parser')

        # Build file naming structure
        parsed_url = urlparse(current_url.split(ORIGINAL_DOMAIN)[-1])
        path = parsed_url.path.strip("/")
        if not path or path.endswith("/"):
            filename = f"{path}index.html" if path else "index.html"
        else:
            filename = f"{path}.html" if not path.endswith(".html") else path

        filename = filename.replace("/", "_")
        filepath = os.path.join(OUTPUT_DIR, filename)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(response.text)

        csv_data.append({"URL": current_url, "Status": status, "Local File": filepath})
        print(f"  [SAVED] -> {filepath}")

        # Extraction loop for internal subpages
        for link in soup.find_all("a", href=True):
            href = link['href']

            if "web.archive.org/web/" in href:
                href = re.sub(r"https://web\.archive\.org/web/\d+(id_)?/", "", href)

            absolute_original_url = urljoin(ORIGINAL_SITE_URL, href)
            parsed_original = urlparse(absolute_original_url)

            if parsed_original.netloc == ORIGINAL_DOMAIN:
                # Format to re-nest inside standard historical viewing path
                wayback_target_link = f"{BASE_URL}{TIMESTAMP}/{absolute_original_url}"
                wayback_target_link = wayback_target_link.split('#')[0]

                if wayback_target_link not in visited_urls and wayback_target_link not in urls_to_crawl:
                    urls_to_crawl.append(wayback_target_link)

    except Exception as e:
        print(f"  [ERROR] Processing failure on {current_url}: {e}")
        csv_data.append({"URL": current_url, "Status": f"Error: {str(e)}", "Local File": "N/A"})

# Write final run data summary to CSV
with open(CSV_FILE, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["URL", "Status", "Local File"])
    writer.writeheader()
    writer.writerows(csv_data)

print(f"\nTask Complete! \nReport: {CSV_FILE}\nSaved files location: ./{OUTPUT_DIR}/")