import urllib.request
import time

url = "https://navora-private-limited.vercel.app/api/test-db"
for _ in range(10):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            print("Response:", html)
            break
    except Exception as e:
        print(f"Failed: {e}")
    time.sleep(10)
