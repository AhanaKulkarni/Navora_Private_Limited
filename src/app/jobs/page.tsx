import prisma from "@/lib/prisma";
import { MapPin, Bookmark } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const jobs = [
    {
      id: "9045EC",
      title: "SaaS Sales Manager (General)",
      department: "SALES",
      location: "Japan / Singapore",
      type: "Full-Time",
      salary: "Competitive",
      description: "Candidates who are legally authorized to work in Singapore and India are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
      requirements: "Strong sales experience in SaaS, preferably within maritime or tech industries.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045EF",
      title: "Sales Manager (General)",
      department: "SALES",
      location: "Japan",
      type: "Full-Time",
      salary: "Competitive",
      description: "Candidates who are legally authorized to work in Japan are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
      requirements: "Proven track record in general sales and business development.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F0",
      title: "Marine Superintendent (Bulk)",
      department: "MARINE OPERATIONS",
      location: "Shanghai, China",
      type: "Full-Time",
      salary: "Competitive",
      description: "Candidates who are legally authorized to work in China are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
      requirements: "Extensive experience as Marine Superintendent on Bulk Carriers.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F1",
      title: "Marine Superintendent (Oil & Chemical Tankers)",
      department: "MARINE OPERATIONS",
      location: "Chennai, India",
      type: "Full-Time",
      salary: "Competitive",
      description: "You may also apply directly through LinkedIn on the respective job postings.",
      requirements: "Previous sailing experience as Master on Oil/Chemical Tankers.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F2",
      title: "QHSE Superintendent (Oil & Chemical Tankers Marine)",
      department: "QHSE",
      location: "Pune, India",
      type: "Full-Time",
      salary: "Competitive",
      description: "You may also apply directly through LinkedIn on the respective job postings.",
      requirements: "Strong background in Quality, Health, Safety, and Environment for tankers.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F3",
      title: "Marine Superintendent (LPG)",
      department: "MARINE OPERATIONS",
      location: "Kochi, India",
      type: "Full-Time",
      salary: "Competitive",
      description: "Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
      requirements: "Specialized experience with LPG vessels and cargo operations.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F4",
      title: "QSHE Superintendent (General)",
      department: "QHSE",
      location: "Global / Remote",
      type: "Full-Time",
      salary: "Competitive",
      description: "Oversee and implement Quality, Safety, Health and Environment policies across our fleet.",
      requirements: "Extensive QSHE auditing and management experience.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F5",
      title: "Senior Technical Superintendent (Oil & Chemical Tankers)",
      department: "TECHNICAL",
      location: "Global",
      type: "Full-Time",
      salary: "Competitive",
      description: "Lead the technical management team for our advanced fleet of Oil & Chemical tankers.",
      requirements: "Chief Engineer experience with shore-based technical management.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];



  return (
    <div className="min-h-screen bg-warm-foam text-abyss pt-32 pb-24 selection:bg-brass-signal selection:text-abyss">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Sidebar */}
        <div className="lg:col-span-3 space-y-12">
          {/* Buttons Section */}
          <div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-abyss/40 mb-6">Buttons</div>
            <div className="space-y-4">
              <button className="w-full bg-brass-signal text-abyss font-sans text-sm font-medium py-3 px-4 flex justify-between items-center rounded-sm hover:bg-[#b8894d] transition-colors">
                Explore roles
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <button className="w-full bg-abyss text-warm-foam font-sans text-sm font-medium py-3 px-4 flex justify-between items-center rounded-sm hover:bg-abyss/90 transition-colors">
                Submit CV
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <div className="pt-2">
                <Link href="/about" className="text-sm font-sans font-medium text-abyss hover:text-abyss/70 transition-colors underline underline-offset-4 decoration-abyss/20">
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Labels & status */}
          <div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-abyss/40 mb-6">Labels & status</div>
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1.5 border border-abyss/10 rounded-sm text-xs font-sans text-abyss/70">
                Actively hiring
              </div>
              <div className="px-3 py-1.5 border border-abyss/10 rounded-sm text-xs font-sans text-abyss/70">
                Shore-based
              </div>
              <div className="px-3 py-1.5 bg-white border border-abyss/10 rounded-sm text-xs font-mono uppercase tracking-widest text-brass-signal font-medium">
                NEW
              </div>
            </div>
          </div>

          {/* Career Signal Card */}
          <div className="bg-deep-ocean text-warm-foam p-8 rounded-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-brass-signal rounded-full shrink-0"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-warm-foam/70">Career signal</span>
            </div>
            <h3 className="text-2xl font-heading font-medium mb-4 leading-snug">
              A role worth changing course for.
            </h3>
            <p className="text-warm-foam/60 font-sans text-sm leading-relaxed">
              Discover how we match world-class professionals with industry-leading opportunities.
            </p>
          </div>
        </div>

        {/* Right Content - Jobs List */}
        <div className="lg:col-span-9 bg-white/40 p-8 rounded-sm border border-abyss/5">
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
                      <span className="w-1.5 h-1.5 rounded-full bg-brass-signal"></span>
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
                    href={`/jobs/${job.id}`}
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
    </div>
  );
}
