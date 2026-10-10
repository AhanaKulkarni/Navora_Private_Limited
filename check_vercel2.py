import urllib.request

url = "https://navora-private-limited.vercel.app/"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        if "Arun D" in html:
            print("Arun is IN the HTML!")
        else:
            print("Arun is NOT in the HTML!")
            
        if "Performance" in html:
            print("Performance is IN the HTML!")
        else:
            print("Performance is NOT in the HTML!")
except Exception as e:
    print(f"Failed: {e}")
