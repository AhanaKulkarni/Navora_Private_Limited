import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden text-abyss pt-20 lg:pt-0">
      
      {/* Right Video - Spans fully to the right edge and top/bottom on desktop */}
      <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 overflow-hidden group opacity-30 lg:opacity-100">
        <video 
          src="/hero-video.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
        
        {/* Floating Card */}
        <div className="hidden lg:block absolute bottom-12 left-12 bg-white/90 backdrop-blur-md border border-abyss/10 p-6 rounded-sm max-w-xs shadow-2xl">
          <div className="flex justify-between items-center mb-4 text-[10px] font-mono text-brass-signal uppercase tracking-wider">
            <span>NAV / 001</span>
            <ArrowRight className="w-3 h-3" />
          </div>
          <p className="font-heading text-sm text-abyss leading-relaxed">
            Career routes, charted with confidence.
          </p>
        </div>
      </div>

      {/* Left Content Container */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 flex">
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 md:py-32 pr-0 lg:pr-12">
          
          <div className="flex items-center gap-4 mb-12 text-xs uppercase tracking-widest font-mono text-abyss/70">
            <span className="w-6 h-px bg-warm-foam/50"></span>
            NAVORA
          </div>
          
          <div className="font-mono text-[10px] tracking-widest text-brass-signal mb-6 opacity-80">
            51.5374&deg; N &nbsp;&nbsp;&nbsp; 0.1278&deg; W
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-8 leading-[1.05] font-heading">
            A clearer course<br />for maritime<br />careers.
          </h1>
          
          <p className="text-xl md:text-2xl font-accent italic text-abyss/90 mb-16 max-w-lg leading-relaxed">
            Expertise, opportunity and direction &mdash; brought into view.
          </p>

          <div className="mt-8 lg:mt-32 pt-8 border-t border-abyss/10 flex gap-4 text-xs font-sans text-abyss/50 max-w-sm leading-relaxed">
            <span className="w-8 h-px bg-warm-foam/20 mt-2 shrink-0"></span>
            <p>A modern maritime editorial system built on deep-ocean authority, navigational precision and optimistic horizon light</p>
          </div>
          
        </div>
      </div>

    </section>
  );
}
