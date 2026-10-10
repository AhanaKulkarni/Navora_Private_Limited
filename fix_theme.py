import os
import re

def replace_in_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in replacements:
        content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Navbar
navbar_replacements = [
    ('bg-abyss/95', 'bg-white/95'),
    ('border-warm-foam/10', 'border-abyss/10'),
    ('text-warm-foam text-lg', 'text-abyss text-lg'),
    ('text-warm-foam/80', 'text-abyss/80'),
    ('hover:text-warm-foam', 'hover:text-abyss'),
    ('text-warm-foam', 'text-abyss'),
    ('bg-deep-ocean', 'bg-white'),
    ('hover:bg-abyss', 'hover:bg-gray-100'),
    ('<span className="font-heading font-semibold tracking-[0.2em] text-abyss text-lg uppercase \ngroup-hover:text-brass-signal transition-colors">\n              Navora\n            </span>', 
     '<img src="/msllogo1.png" alt="Navora" className="h-12" />'),
    ('<span className="font-heading font-semibold tracking-[0.2em] text-warm-foam text-lg uppercase \ngroup-hover:text-brass-signal transition-colors">\n              Navora\n            </span>', 
     '<img src="/msllogo1.png" alt="Navora" className="h-12" />'),
    ('<span className="font-heading font-semibold tracking-[0.2em] text-abyss text-lg uppercase \n            group-hover:text-brass-signal transition-colors">\n              Navora\n            </span>',
     '<img src="/msllogo1.png" alt="Navora" className="h-12" />')
]
replace_in_file('src/components/navora-components/Navbar.tsx', navbar_replacements)

print("Navbar updated to light theme.")
