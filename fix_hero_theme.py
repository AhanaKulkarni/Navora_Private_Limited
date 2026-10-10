import re

with open('src/components/navora-components/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-abyss', 'bg-white')
content = content.replace('text-warm-foam', 'text-abyss')
content = content.replace('text-warm-foam/70', 'text-abyss/70')
content = content.replace('bg-abyss/20', 'bg-white/20')
content = content.replace('bg-abyss/90', 'bg-white/90')
content = content.replace('border-warm-foam/10', 'border-abyss/10')
content = content.replace('text-warm-foam/90', 'text-abyss/90')

with open('src/components/navora-components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Hero theme updated.")
