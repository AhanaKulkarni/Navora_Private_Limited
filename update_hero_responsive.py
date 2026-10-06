import re

with open('src/components/navora-components/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make padding responsive
content = content.replace('pt-36 pb-48', 'pt-16 pb-24 md:pt-36 md:pb-48')

# Make text responsive
content = content.replace('text-5xl font-medium tracking-tight text-black sm:text-6xl lg:text-7xl', 'text-4xl font-medium tracking-tight text-black sm:text-5xl lg:text-7xl')
content = content.replace('mb-6 text-2xl font-light tracking-tighter sm:text-3xl', 'mb-6 text-xl font-light tracking-tighter sm:text-2xl md:text-3xl')
content = content.replace('mb-8 text-lg font-normal text-white sm:text-xl', 'mb-8 text-base font-normal text-white sm:text-lg md:text-xl')

with open('src/components/navora-components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
