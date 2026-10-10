import re

with open('src/components/navora-components/CurrentOpenings.tsx', 'rb') as f:
    content = f.read().decode('utf-8', errors='ignore')

content = content.replace('href={/jobs/}', 'href={`/jobs/${job._id}`}')

with open('src/components/navora-components/CurrentOpenings.tsx', 'wb') as f:
    f.write(content.encode('utf-8'))

print("Fixed CurrentOpenings.")
