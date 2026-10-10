import re

# Fix CurrentOpenings.tsx
with open('src/components/navora-components/CurrentOpenings.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('href={/jobs/}', 'href={`/jobs/${job._id}`}')
content = content.replace('href={/jobs/${job._id}}', 'href={`/jobs/${job._id}`}')

with open('src/components/navora-components/CurrentOpenings.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Fix rendezvous/page.tsx
with open('src/app/rendezvous/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Youtube', 'Video')
content = content.replace('<Video className', '<Video className')

with open('src/app/rendezvous/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed TS/JSX errors.")
