import re

with open('src/components/navora-components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

nav_links = """  const navLinks = [
    { name: "Find roles", href: "/jobs" },
    { name: "Services", href: "/services" },
    { name: "Articles", href: "/articles" },
    { name: "Rendezvous with Roohi", href: "/rendezvous" },
    { name: "Contact", href: "/contact" },
  ];"""

content = re.sub(r'  const navLinks = \[.*?\];', nav_links, content, flags=re.DOTALL)

with open('src/components/navora-components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Navbar links updated.")
