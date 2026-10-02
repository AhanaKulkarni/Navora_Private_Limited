"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, ShieldCheck, Ship, FileCheck2, GraduationCap, Users, MapPin, DollarSign, Clock, ChevronRight } from "lucide-react";

export default function HomeClient({ recentJobs }: { recentJobs: any[] }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      
      {/* Colourful, Image-Rich Hero Section */}
      <section className="relative w-full h-screen flex items-center pt-20 overflow-hidden bg-[#1F3C8B]">
        
        {/* Background Image & Colorful Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Maritime" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c47] via-[#1F3C8B]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-8">
              NAVORA Careers Portal
            </h1>
            
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Search and apply for premium Shipping and Energy jobs.
            </p>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl">
              Our listings are updated regularly to help you find the right opportunity. For the most recent vacancies and immediate applications, connect with our recruitment specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/jobs" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#CEA72B] hover:bg-[#b0882e] text-[#0d1c47] rounded-full font-bold transition-all shadow-lg hover:shadow-xl">
                Access Jobs
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#solutions" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/30 hover:bg-white/20 text-white rounded-full font-bold transition-all backdrop-blur-sm">
                Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Running Text Marquee */}
      <div className="w-full bg-[#CEA72B] text-[#0d1c47] py-4 border-y border-[#b0882e] overflow-hidden whitespace-nowrap z-20 relative">
        <div className="inline-block animate-marquee font-bold tracking-[0.2em] uppercase text-sm">
          <span className="mx-8">•</span> MASTER MARINER 
          <span className="mx-8">•</span> CHIEF ENGINEER 
          <span className="mx-8">•</span> NAVAL ARCHITECT 
          <span className="mx-8">•</span> OFFSHORE WIND SPECIALIST 
          <span className="mx-8">•</span> FLEET OPERATIONS DIRECTOR 
          <span className="mx-8">•</span> TECHNICAL SUPERINTENDENT 
          <span className="mx-8">•</span> HSE MANAGER 
          <span className="mx-8">•</span> PREMIUM MARITIME ROLES
          <span className="mx-8">•</span> MASTER MARINER 
          <span className="mx-8">•</span> CHIEF ENGINEER 
          <span className="mx-8">•</span> NAVAL ARCHITECT 
          <span className="mx-8">•</span> OFFSHORE WIND SPECIALIST 
          <span className="mx-8">•</span> FLEET OPERATIONS DIRECTOR 
          <span className="mx-8">•</span> TECHNICAL SUPERINTENDENT 
          <span className="mx-8">•</span> HSE MANAGER 
          <span className="mx-8">•</span> PREMIUM MARITIME ROLES
        </div>
      </div>

      {/* Recent Jobs Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 text-[#CEA72B] font-bold tracking-widest uppercase text-xs mb-3">
                <Briefcase className="w-4 h-4" /> Opportunities
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#1F3C8B]">Recent Positions</h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {recentJobs.length === 0 ? (
              <div className="col-span-3 text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-gray-500 font-medium">No recent jobs available. Please check back later.</p>
              </div>
            ) : (
              recentJobs.map((job, i) => (
                <Link key={job.id} href={`/jobs/${job.id}`} className="group block">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#24439C] hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F3C8B] to-[#CEA72B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-2.5 py-1 bg-blue-50 text-[#24439C] rounded text-[10px] font-bold uppercase tracking-widest">Premium</span>
                      <span className="text-[10px] text-gray-400 flex items-center gap-1 uppercase tracking-widest font-semibold"><Clock className="w-3 h-3"/> Recent</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-[#24439C] transition-colors">{job.title}</h3>
                    
                    <div className="flex flex-col gap-3 text-gray-500 text-sm font-medium mb-8 flex-1">
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /> {job.location}</div>
                      {job.salary && <div className="flex items-center gap-2 text-gray-700 font-semibold"><DollarSign className="w-4 h-4 text-gray-400" /> {job.salary}</div>}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1F3C8B] group-hover:text-[#CEA72B] transition-colors mt-auto">
                      View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                </Link>
              ))
            )}
          </div>

          <div className="text-center">
            <Link href="/jobs" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[#1F3C8B] rounded-full font-bold transition-all">
              See more jobs <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee Section */}
      <section className="py-24 bg-[#0A1120] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(36,67,156,0.3)_0%,_transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-serif font-bold mb-4">Trusted by the Elite</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Hear from the professionals and organizations who have successfully navigated their careers and staffing with Navora.</p>
          </motion.div>
        </div>

        <div className="relative w-full flex whitespace-nowrap pause-on-hover z-10">
          <div className="inline-flex animate-marquee-slow gap-6 px-3">
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, i) => (
              <div key={i} className="w-[400px] whitespace-normal bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl flex-shrink-0 cursor-default">
                <div className="flex gap-1 text-[#CEA72B] mb-6">
                  {[...Array(5)].map((_, idx) => <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-white/80 leading-relaxed mb-8 italic">
                  "{['Navora completely transformed our hiring process. We found a Chief Engineer within two weeks.', 'The premium roles on this portal are unmatched. I secured my dream position as a Fleet Director.', 'Discreet, highly professional, and incredibly well-connected in the maritime industry.'][i % 3]}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#24439C] to-[#1F3C8B] flex items-center justify-center font-bold text-sm">
                    {['S', 'M', 'R'][i % 3]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{['Sarah Jenkins', 'Marcus Thorne', 'Richard Vance'][i % 3]}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-widest">{['HR Director', 'Fleet Operations', 'Master Mariner'][i % 3]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Solutions/Services Section */}
      <section id="solutions" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1F3C8B] mb-6">Our Comprehensive Solutions</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">Providing expert services across the maritime sector to ensure operational excellence and elite staffing.</p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Ship, title: "Operational", desc: "Expert management and operational support for maritime fleets." },
              { icon: ArrowRight, title: "Technical Solutions", desc: "Advanced technical consulting and maritime engineering solutions." },
              { icon: ShieldCheck, title: "Quality / Safety / Environmental", desc: "Rigorous surveys and compliance to ensure the highest standards." },
              { icon: FileCheck2, title: "Insurance Solutions", desc: "Comprehensive maritime insurance consulting and risk management." },
              { icon: GraduationCap, title: "Executive Assessment & Training", desc: "Developing the next generation of maritime leadership." },
              { icon: Users, title: "Recruitment", desc: "Connecting elite maritime professionals with premium global roles." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#1F3C8B] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#1F3C8B] transition-colors">
                  <service.icon className="w-6 h-6 text-[#1F3C8B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
