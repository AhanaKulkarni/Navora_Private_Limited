import prisma from "@/lib/prisma";
import { Briefcase, MapPin, DollarSign, Search, Filter, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function JobsPage() {
  let jobs: any[] = []; try { jobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' }
  }); } catch(e){}

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* Refined Jobs Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-[#1F3C8B] border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Maritime" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3C8B] via-[#1F3C8B]/80 to-transparent"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-white shadow-sm">
            Navora Portal
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tight text-white drop-shadow-lg">Opportunities</h1>
          
          {/* Refined Search Bar */}
          <div className="max-w-2xl mx-auto relative group mt-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white border border-gray-200 p-1.5 rounded-full flex items-center shadow-sm">
              <div className="pl-5 text-gray-400">
                <Search className="w-4 h-4" />
              </div>
              <input type="text" placeholder="Search positions..." className="flex-1 px-4 py-3 outline-none text-sm bg-transparent text-gray-900 placeholder-gray-400" />
              <button className="bg-[#24439C] hover:bg-[#1a3070] text-white font-medium py-3 px-6 rounded-full transition-colors text-sm tracking-wide">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Refined Filters Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 mb-6 pb-3 border-b border-gray-200">
                <Filter className="w-3 h-3" />
                Refine
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-gray-900">Job Type</h3>
                  <div className="space-y-2">
                    {['Full Time', 'Contract', 'Temporary', 'Permanent'].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-3.5 h-3.5 rounded-sm border border-gray-300 group-hover:border-[#24439C] transition-colors flex items-center justify-center"></div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors text-sm font-medium">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3 text-gray-900">Sector</h3>
                  <div className="space-y-2">
                    {['Maritime', 'Energy', 'Offshore', 'Corporate'].map(sector => (
                      <label key={sector} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-3.5 h-3.5 rounded-sm border border-gray-300 group-hover:border-[#24439C] transition-colors flex items-center justify-center"></div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors text-sm font-medium">{sector}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Jobs List */}
          <div className="w-full lg:w-3/4 flex flex-col gap-4">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-2xl font-serif text-gray-900">Available Positions</h2>
              <div className="text-xs tracking-widest uppercase text-gray-400 font-semibold">{jobs.length} found</div>
            </div>

            {jobs.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-1">No positions available</h3>
                <p className="text-sm text-gray-500">Please check back later.</p>
              </div>
            ) : (
              jobs.map(job => (
                <Link key={job.id} href={`/jobs/${job.id}`} className="group block">
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-0.5 bg-blue-50 text-[#24439C] rounded text-[10px] font-bold uppercase tracking-widest">Premium</span>
                        <span className="text-[10px] text-gray-400 flex items-center gap-1 uppercase tracking-widest font-semibold"><Clock className="w-3 h-3"/> Recent</span>
                      </div>
                      <h3 className="text-xl font-serif text-gray-900 mb-4 group-hover:text-[#24439C] transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-500 text-xs font-medium">
                        <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gray-400" /> {job.location}</div>
                        <div className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-gray-400" /> Full-time</div>
                        {job.salary && <div className="flex items-center gap-1.5 text-gray-700 font-semibold"><DollarSign className="w-3.5 h-3.5 text-gray-400" /> {job.salary}</div>}
                      </div>
                    </div>
                    
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 group-hover:bg-[#24439C] group-hover:text-white transition-colors duration-300 text-gray-400">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
