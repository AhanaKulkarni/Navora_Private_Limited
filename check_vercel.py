import urllib.request
import re

url = "https://navora-private-limited.vercel.app/"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        if "Fleet Performance Manager" in html:
            print("JOBS ARE IN HTML!")
        else:
            print("JOBS NOT IN HTML!")
            
        if "Arun" in html:
            print("TESTIMONIALS ARE IN HTML!")
        else:
            print("TESTIMONIALS NOT IN HTML!")
except Exception as e:
    print(f"Failed: {e}")
