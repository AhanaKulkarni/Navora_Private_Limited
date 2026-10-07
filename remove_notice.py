import os

file_path = 'src/app/admin/(dashboard)/page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

notice = '<div className="mb-8 p-4 bg-orange-50 text-orange-800 rounded-lg text-sm border border-orange-200"><strong>Note for Vercel deployment:</strong> You are using a local SQLite database which is read-only in Vercel Serverless. Saving new data will fail. Please migrate to a remote database like Vercel Postgres to enable write operations.</div>'

content = content.replace(notice, '')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
