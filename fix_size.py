import re

filepath = 'src/app/blog/your-career-isnt-confusing-its-unexplored/Article.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'<div\s+size=\{14\}', '<div', content)
content = re.sub(r'<div\s+size=\{16\}', '<div', content)
content = re.sub(r'<div\s+size=\{18\}', '<div', content)
content = re.sub(r'<div\s+size=\{20\}', '<div', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed size attributes.")
