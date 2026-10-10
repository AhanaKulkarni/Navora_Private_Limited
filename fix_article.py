import re

filepath = 'src/app/blog/your-career-isnt-confusing-its-unexplored/Article.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<div size={24}', '<div')
content = content.replace('<div size={20}', '<div')
content = content.replace('<LinkedinIcon', '<Link')
content = content.replace('import { Search, MapPin, Briefcase, ChevronRight, Bookmark, LinkedinIcon, Send, Mail } from "lucide-react";', 'import { Search, MapPin, Briefcase, ChevronRight, Bookmark, Link, Send, Mail } from "lucide-react";')


with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed Article TS errors.")
