import urllib.request
import re

url = "https://navora-private-limited.vercel.app/"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0', 'RSC': '1', 'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D'})
    with urllib.request.urlopen(req) as response:
        rsc = response.read().decode('utf-8')
        print(rsc[:1000])
        if "Arun" in rsc: print("ARUN FOUND IN RSC!")
        if "Performance" in rsc: print("PERFORMANCE FOUND IN RSC!")
except Exception as e:
    print(f"Failed: {e}")
