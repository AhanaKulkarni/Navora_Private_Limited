import re

with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    content = f.read()

if '--font-serif' not in content:
    content = content.replace('--font-display: \'Inter\', sans-serif;', '--font-display: \'Inter\', sans-serif;\n    --font-serif: var(--font-serif);\n    --font-sans: var(--font-sans);')

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(content)
