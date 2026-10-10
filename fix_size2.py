import re

filepath = 'src/app/blog/your-career-isnt-confusing-its-unexplored/Article.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'<div\s+size=\{22\}', '<div', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed.")
