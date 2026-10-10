"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, ChevronRight, Bookmark } from "lucide-react";

type Job = {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  isActive: boolean;
  description: string;
  createdAt: string;
};

export default function CurrentOpening({ initialJobs = [] }: { initialJobs: Job[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = initialJobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-warm-foam text-abyss font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-brass-signal uppercase mb-4">
              OPPORTUNITY / 024D
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-abyss">
              A role on your horizon
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-abyss/60">
            <span>{filteredJobs.length} OPEN ROLES</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-abyss/40 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by role or location..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-abyss/10 rounded-sm focus:outline-none focus:border-brass-signal focus:ring-1 focus:ring-brass-signal transition-all text-abyss"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredJobs.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-sm border border-abyss/5">
            <h3 className="text-xl font-heading font-medium text-abyss mb-2">No roles found</h3>
            <p className="text-abyss/60">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredJobs.map((job) => (
              <div 
                key={job._id}
                className="group bg-white p-6 md:p-8 rounded-sm border border-abyss/5 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="font-mono text-[10px] tracking-wider uppercase text-abyss/60 flex items-center gap-2">
                    {job.department || 'MARITIME'}
                    {job.createdAt && (
                      <>
                        <span>•</span>
                        <span className="text-brass-signal">NEW</span>
                      </>
                    )}
                  </div>
                  <button className="text-abyss/20 hover:text-brass-signal transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
                
                <h3 className="text-2xl font-heading font-medium text-abyss mb-3 group-hover:text-deep-ocean transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-abyss/70 mb-8 max-w-3xl line-clamp-2">
                  {job.description || "Join our team and lead operational excellence for our maritime clients worldwide."}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
                  <div className="flex items-center gap-6 text-sm text-abyss/60 font-sans">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brass-signal" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-brass-signal" />
                      {job.type}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/jobs/${job._id}`}
                    className="inline-flex items-center justify-center bg-brass-signal hover:bg-[#b5874c] text-abyss font-medium px-6 py-2.5 rounded-sm transition-colors group/btn"
                  >
                    View role
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center bg-white border border-abyss/10 hover:border-brass-signal text-abyss font-medium px-8 py-3 rounded-sm transition-colors"
          >
            View all roles
          </Link>
        </div>
      </div>
    </section>
  );
}
