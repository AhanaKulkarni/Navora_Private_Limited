import os
path = 'src/app/jobs/[id]/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('href={/apply/}', 'href={/apply/}')

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
