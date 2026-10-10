import urllib.request
import re

url = "https://navora.maritimesolutionsltd.com/about"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        if "Arun" in html or "job" in html:
            print("Found in about!")
        else:
            print("Not in about.")
except Exception as e:
    print(f"Failed: {e}")
