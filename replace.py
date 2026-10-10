import os
path = 'src/app/jobs/[id]/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('<button className="w-full md:w-auto bg-[#24439C] hover:bg-[#1a3070] text-white font-bold py-4 px-12 rounded-full transition-colors text-lg shadow-md hover:shadow-lg">\n              Apply for this Position\n            </button>', '<Link href={/apply/} className="inline-block w-full text-center md:w-auto bg-[#24439C] hover:bg-[#1a3070] text-white font-bold py-4 px-12 rounded-full transition-colors text-lg shadow-md hover:shadow-lg">\n              Apply for this Position\n            </Link>')

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
