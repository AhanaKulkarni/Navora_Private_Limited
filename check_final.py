import urllib.request
import time

url = "https://navora-private-limited.vercel.app/"
for _ in range(10):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            if "Fleet Performance" in html and "Arun" in html:
                print("FOUND IT ALL! IT WORKS!")
                break
            else:
                print("Still building or cached...")
    except Exception as e:
        print(f"Failed: {e}")
    time.sleep(8)
