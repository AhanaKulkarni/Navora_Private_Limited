"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, DollarSign, Clock, ChevronRight } from "lucide-react";

export default function HomeClient({ recentJobs }: { recentJobs: any[] }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 pt-24 md:pt-32">
      
      {/* Exact Hero Section from MSL */}
      <section className="relative flex w-full items-center justify-start overflow-hidden min-h-[85vh] text-[#0B2B3E]">
        
        {/* Exact Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Maritime Careers" 
            className="w-full h-full object-cover" 
          />
          {/* MSL style: white gradient overlay from top to transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent"></div>
          {/* Add a subtle left gradient to keep text readable like MSL's structure */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:w-2/3"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 leading-[1.1] tracking-tight mb-10">
              NAVORA<br />Careers Portal
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-light text-[#071A27] tracking-tight mb-8 leading-tight">
              Search and apply for Maritime jobs, Shipping jobs and Energy jobs.
            </h2>
            
            <p className="text-lg md:text-2xl font-normal text-gray-700 mb-16 leading-relaxed max-w-3xl">
              Our listings are updated regularly to help you find the right opportunity. For the most recent vacancies and how to apply, please visit our LinkedIn page.
            </p>
            
            <Link href="/jobs" className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-[#071A27] hover:bg-[#071A27] hover:text-white rounded-full font-bold transition-all duration-500 shadow-xl hover:shadow-2xl text-lg md:text-xl border border-gray-100">
              Explore Jobs
              <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="current-openings" className="flex justify-center bg-white py-32 md:py-48">
        <div className="w-full max-w-7xl px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end py-8 mb-16 gap-6 border-b border-gray-100">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h1 className="text-[#071A27] text-3xl md:text-5xl font-serif font-bold mb-4">Current Openings</h1>
              <h2 className="text-gray-900 text-2xl md:text-4xl font-light">Be the First to Apply</h2>
            </motion.div>
            <Link href="/jobs" className="text-[#CE9C5B] hover:text-[#b0882e] font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors">
              View all openings <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {recentJobs.length === 0 ? (
              <div className="col-span-1 md:col-span-3 w-full rounded-2xl bg-slate-50 py-32 text-center border border-slate-100 shadow-sm">
                <p className="text-gray-400 text-xl font-light tracking-wide">Loading current openingsâ€¦</p>
              </div>
            ) : (
              recentJobs.map((job, i) => (
                <Link key={job.id} href={`/jobs/${job.id}`} className="group block">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="bg-white p-10 md:p-14 rounded-3xl border border-gray-100 hover:border-[#071A27] hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#071A27] to-[#CE9C5B] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <span className="px-4 py-1.5 bg-blue-50 text-[#071A27] rounded text-xs font-bold uppercase tracking-widest">Premium</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1.5 uppercase tracking-widest font-semibold"><Clock className="w-3.5 h-3.5"/> Recent</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 group-hover:text-[#071A27] transition-colors leading-tight">{job.title}</h3>
                    
                    <div className="flex flex-col gap-4 text-gray-500 text-base font-medium mb-12 flex-1">
                      <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#CE9C5B] shrink-0" /> <span className="truncate">{job.location}</span></div>
                      {job.salary && <div className="flex items-center gap-3 text-gray-700 font-semibold"><DollarSign className="w-5 h-5 text-[#CE9C5B] shrink-0" /> {job.salary}</div>}
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#071A27] group-hover:text-[#CE9C5B] transition-colors mt-auto">
                      View Details <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  </motion.div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
