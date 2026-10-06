import re

with open('src/components/navora-components/CurrentOpenings.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_lucide = 'import { MapPin, Briefcase, Calendar, Hash } from "lucide-react";\\n'
if 'lucide-react' not in content:
    content = content.replace('import { useRouter } from "next/navigation";', 'import { useRouter } from "next/navigation";\\n' + import_lucide)

start_idx = content.find('<ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">')
end_idx = content.find('              </ul>', start_idx)
if end_idx != -1:
    end_idx += len('              </ul>')

new_ul_block = '''              <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                  <li
                    key={job._id}
                    className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-slate-200"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#24439C] transition-colors line-clamp-1">
                        {job.title}
                      </h2>
                      {job.department && job.department.trim() !== "" && (
                        <p className="text-sm font-medium text-slate-500 mt-1">
                          {job.department}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        {date(job)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Hash className="h-4 w-4 text-slate-400" />
                        {jobId(job)}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 line-clamp-2 mt-2">
                      {job.description}
                    </p>

                    <div className="mt-auto flex gap-3 pt-6">
                      <button
                        onClick={() => router.push(/jobs/ + job._id)}
                        className="flex-1 rounded-xl border-2 border-[#24439C] px-4 py-2.5 text-sm font-bold text-[#24439C] transition-all hover:bg-[#24439C] hover:text-white"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => router.push(/apply/ + job._id)}
                        className="flex-1 rounded-xl bg-[#CEA72B] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#b59223] shadow-md hover:shadow-lg"
                      >
                        Apply Now
                      </button>
                    </div>
                  </li>
                ))}
              </ul>'''

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_ul_block + content[end_idx:]
    content = content.replace('<div className="w-full rounded-md bg-slate-100 px-4 py-4">', '<div className="w-full px-4 py-4">')
    with open('src/components/navora-components/CurrentOpenings.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Success")
else:
    print("Failed to find block")
