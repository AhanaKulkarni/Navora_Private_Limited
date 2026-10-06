import re

with open('src/components/navora-components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure usePathname is imported
if 'usePathname' not in content:
    content = content.replace('import { useRouter } from "next/navigation";', 'import { useRouter, usePathname } from "next/navigation";')

# Inject pathname check
if 'const isHomePage = pathname === "/";' not in content:
    state_code = '''  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldBeSolid = !isHomePage || isScrolled;
'''
    # Replace the existing useState
    content = re.sub(r'  const \[isScrolled, setIsScrolled\] = useState\(false\);\n', state_code, content)

# Fix the nav className
content = re.sub(
    r'<nav className=\{ixed.*?\}>',
    '<nav className={ixed top-0 left-0 z-50 h-28 w-full transition-all duration-300  border-t-4 border-t-[#CEA72B]}>',
    content
)

with open('src/components/navora-components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
