import re

with open('src/components/navora-components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

if 'const [isScrolled' not in content:
    # Add useEffect to imports
    if 'import { useState }' in content:
        content = content.replace('import { useState }', 'import { useState, useEffect }')
    else:
        content = content.replace('import React from "react";', 'import React, { useState, useEffect } from "react";')

    # Add state
    state_code = '''  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
'''
    content = content.replace('const [open, setOpen] = useState(false);', 'const [open, setOpen] = useState(false);\n' + state_code)

    # Change nav className
    content = re.sub(r'<nav className=".*?"', '<nav className={ixed top-0 left-0 z-50 h-28 w-full transition-all duration-300  border-t-4 border-t-[#CEA72B]}', content)

    with open('src/components/navora-components/Navbar.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Success")
else:
    print("Already added")
