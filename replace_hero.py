import os

path = 'src/components/navora-components/Hero.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

old_img = """<img 
            src="/hero-bg.jpg" 
            alt="Maritime cargo ship on the ocean" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />"""

new_video = """<video 
            src="/hero-video.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />"""

if old_img in text:
    text = text.replace(old_img, new_video)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Replaced!")
else:
    print("Could not find the exact string. Here is the block:")
    print(text[text.find('hero-bg.jpg')-50:text.find('hero-bg.jpg')+150])

