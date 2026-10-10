import os

path = 'src/components/navora-components/CurrentOpenings.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('href={/jobs/}', 'href={/jobs/}')

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
