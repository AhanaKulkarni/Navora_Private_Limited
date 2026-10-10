import urllib.request
import re

url = "https://navora.maritimesolutionsltd.com/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    html = response.read().decode('utf-8')
    
scripts = re.findall(r'src="(/_next/static/chunks/.*?\.js)"', html)
print("Found", len(scripts), "scripts")
for script in scripts:
    script_url = f"https://navora.maritimesolutionsltd.com{script}"
    try:
        req2 = urllib.request.Request(script_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req2) as resp2:
            js = resp2.read().decode('utf-8')
            if "Master Mariner" in js or "Technical Superintendent" in js or "Arun" in js or "Testimonial" in js:
                print(f"Found in {script_url}")
                match = re.search(r'.{0,50}Master Mariner.{0,50}', js)
                if match: print("Snippet:", match.group())
                
                match2 = re.search(r'.{0,100}Arun.{0,100}', js)
                if match2: print("Snippet2:", match2.group())
    except Exception as e:
        pass
print("Done checking JS chunks.")
