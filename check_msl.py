import urllib.request
import re

url = "https://maritimesolutionsltd.com/"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        if "Testimonial" in html or "jobs" in html or "Arun" in html:
            print("Found something on maritimesolutionsltd.com!")
            match = re.search(r'.{0,100}Arun.{0,100}', html)
            if match: print("Arun:", match.group())
        else:
            print("Nothing interesting on maritimesolutionsltd.com homepage.")
except Exception as e:
    print(f"Failed: {e}")
