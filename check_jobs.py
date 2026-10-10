import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://navora.maritimesolutionsltd.com/jobs"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        print(f"Success for {url}:")
        soup = BeautifulSoup(html, "html.parser")
        print(soup.get_text()[:1000])
except Exception as e:
    print(f"Failed for {url}: {e}")
