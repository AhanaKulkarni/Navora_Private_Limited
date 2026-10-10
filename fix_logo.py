import re

with open('src/components/navora-components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'<span className="font-heading font-semibold tracking-\[0\.2em\].*?Navora\s*</span>', '<img src="/msllogo1.png" alt="Navora" className="h-14 w-auto object-contain" />', content, flags=re.DOTALL)

with open('src/components/navora-components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Logo replaced.")
