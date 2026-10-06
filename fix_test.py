with open('src/components/navora-components/Testimonials.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('\\"', '"').replace('\\', '').replace('\\', '')
with open('src/components/navora-components/Testimonials.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
