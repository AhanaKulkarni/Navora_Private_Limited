import re

with open('src/components/navora-components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('{/* Logo */}')
end_idx = content.find('{/* Desktop Menu */}', start_idx)

new_logo_block = '''{/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => router.push("/")}
        >
          <span className="text-2xl font-bold tracking-tight text-[#24439C]">Navora Private Limited</span>
        </div>

        '''

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_logo_block + content[end_idx:]
    with open('src/components/navora-components/Navbar.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Success")
else:
    print("Failed to find block")
