import re

with open('src/components/navora-components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add More -> Admin Portal to Desktop Menu
desktop_menu_item = '''<li>
                <div className="relative group">
                  <button className="hover:text-[#CEA72B] flex items-center gap-1">
                    More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block border border-gray-100">
                    <a href="/admin/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-[#24439C]">Admin Portal</a>
                  </div>
                </div>
              </li>'''

content = content.replace('<li>\n                <a\n                  href="#"\n                  className="hover:text-[#CEA72B]"\n                  onClick={() => router.push(/contact)}\n                >\n                  Contact Us\n                </a>\n              </li>', '<li>\n                <a\n                  href="#"\n                  className="hover:text-[#CEA72B]"\n                  onClick={() => router.push(/contact)}\n                >\n                  Contact Us\n                </a>\n              </li>\n              ' + desktop_menu_item)

# Add to Mobile Menu
mobile_menu_item = '''<li>
              <a
                href="/admin/login"
                className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              >
                Admin Portal
              </a>
            </li>'''

content = content.replace('<li>\n              <a\n                href="#"\n                className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition \nhover:font-bold hover:text-[#CEA72B]"\n                onClick={() => router.push(/contact)}\n              >\n                Contact Us\n              </a>\n            </li>', '<li>\n              <a\n                href="#"\n                className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition \nhover:font-bold hover:text-[#CEA72B]"\n                onClick={() => router.push(/contact)}\n              >\n                Contact Us\n              </a>\n            </li>\n            ' + mobile_menu_item)

with open('src/components/navora-components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
