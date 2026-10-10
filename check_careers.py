import urllib.request
import re

url = "https://maritimesolutionsltd.com/careers"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        if "jobs" in html or "Career" in html:
            print("Found in careers!")
        else:
            print("Not in careers.")
except Exception as e:
    print(f"Failed: {e}")
