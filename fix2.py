import os

path = 'src/app/apply/[id]/Apply.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('{job.department ?  -  : ''}', '{job.department ? ${job.department} -  : \'\'}')

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
