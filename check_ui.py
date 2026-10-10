import urllib.request
import re

url = "https://navora-private-limited.vercel.app/"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        if "InfiniteMovingCards" in html or "candidates" in html:
            print("New UI detected!")
        else:
            print("Old UI detected.")
        print(html[:500])
except Exception as e:
    print(f"Failed: {e}")
