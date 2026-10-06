import re

with open('src/components/navora-components/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Image tag
content = content.replace('layout="fill"', 'fill')
content = content.replace('objectFit="cover"', 'className="object-cover z-0"')
content = content.replace('className="z-0"', '')

# Fix gradient overlay
content = content.replace('bg-linear-to-b from-white to-transparent', 'bg-gradient-to-b from-white/90 via-white/40 to-black/60')

# Make section taller so it pushes down and looks better
content = content.replace('pt-28 pb-36', 'pt-36 pb-48')

# Ensure section has no margin bottom and is min-h-[85vh]
content = content.replace('className="relative flex w-full items-center justify-start overflow-hidden pt-28 text-white"', 'className="relative flex w-full min-h-[85vh] items-center justify-start overflow-hidden pt-28 pb-20 text-white"')

with open('src/components/navora-components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
