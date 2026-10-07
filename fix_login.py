import re

with open('src/app/admin/login/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('defaultValue="admin@navora.com"', '')
content = content.replace('defaultValue="admin123"', '')
content = content.replace('<p className="text-xs text-slate-500 text-center mt-4">\n          Dummy credentials pre-filled for testing.\n        </p>', '')

with open('src/app/admin/login/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
