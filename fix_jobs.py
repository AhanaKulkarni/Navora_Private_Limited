# -*- coding: utf-8 -*-
import os

jobs_content = """import prisma from "@/lib/prisma";
import { MapPin, Bookmark } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  let jobs: any[] = []; 
  try { 
    jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' }
    }); 
  } catch(e){}

  return (
    <div className="min-h-screen bg-warm-foam text-abyss pt-32 pb-24 selection:bg-brass-signal selection:text-abyss">
      <div className="max-w-[70rem] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b border-abyss/10 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-8 text-[10px] uppercase tracking-widest font-mono text-abyss/60">
              <span>OPPORTUNITY / {String(jobs.length).padStart(4, '0')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-normal tracking-tight">
              A role on your horizon
            </h1>
          </div>
          <div className="font-mono text-[10px] tracking-widest uppercase text-abyss/60">
            {jobs.length} OPEN ROLES
          </div>
        </div>

        {/* Jobs List */}
        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-sm p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-sm hover:shadow-md transition-shadow border border-abyss/5 group"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 flex items-center gap-3">
                    <span>{job.department || "MARINE OPERATIONS"}</span>
                    <span className="w-1 h-1 rounded-full bg-brass-signal"></span>
                    <span className="text-brass-signal font-bold">NEW</span>
                  </div>
                  <button className="md:hidden p-2 rounded-full hover:bg-warm-foam text-abyss/40 hover:text-abyss transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
                
                <h3 className="text-2xl font-heading font-medium mb-3 group-hover:text-brass-signal transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-abyss/70 font-sans text-sm mb-6 max-w-2xl leading-relaxed">
                  {job.description?.substring(0, 120) || "Lead vessel efficiency programmes for an international operator investing in lower-carbon performance."}...
                </p>

                <div className="flex items-center gap-6 text-xs font-sans text-abyss/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    {job.type || "Permanent"}
                  </div>
                  <div className="hidden md:block font-mono text-[9px] uppercase tracking-wider ml-4 border-l border-abyss/10 pl-6">
                    POSTED {formatDistanceToNow(new Date(job.createdAt))} AGO
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-row-reverse md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t border-abyss/5 md:border-t-0 pt-6 md:pt-0">
                <Link 
                  href={/jobs/}
                  className="bg-brass-signal hover:bg-[#b8894d] text-abyss font-sans text-xs font-medium px-6 py-3 rounded-sm flex items-center gap-2 transition-colors"
                >
                  View role
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="12 5 19 5 19 12"></polyline></svg>
                </Link>
                <button className="hidden md:flex p-2 rounded-full hover:bg-warm-foam text-abyss/40 hover:text-abyss transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          
          {jobs.length === 0 && (
            <div className="py-20 text-center border border-dashed border-abyss/20 rounded-sm">
              <p className="font-mono text-sm text-abyss/50">No open roles at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
"""

with open('src/app/jobs/page.tsx', 'w', encoding='utf-8') as f:
    f.write(jobs_content)
