import urllib.request
import re

url = "https://navora.maritimesolutionsltd.com/api/jobs"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        print(response.read().decode('utf-8'))
except Exception as e:
    print(f"Failed jobs: {e}")
    
url2 = "https://navora.maritimesolutionsltd.com/api/testimonials"
try:
    req2 = urllib.request.Request(url2, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req2) as response2:
        print(response2.read().decode('utf-8'))
except Exception as e:
    print(f"Failed testimonials: {e}")
