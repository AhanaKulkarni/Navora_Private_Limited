import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-abyss flex items-center justify-center pt-28 pb-12 overflow-hidden text-warm-foam">
      <div className="max-w-[90rem] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full z-10">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full py-12 md:py-24">
          <div className="flex items-center gap-4 mb-16 text-xs uppercase tracking-widest font-mono text-warm-foam/70">
            <span className="w-6 h-px bg-warm-foam/50"></span>
            NAVORA
          </div>
          
          <div className="font-mono text-[10px] tracking-widest text-brass-signal mb-6 opacity-80">
            51.5374° N &nbsp;&nbsp;&nbsp; 0.1278° W
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05] font-heading">
            A clearer course<br />for maritime<br />careers.
          </h1>
          
          <p className="text-xl md:text-2xl font-accent italic text-warm-foam/90 mb-16 max-w-lg leading-relaxed">
            Expertise, opportunity and direction — brought into view.
          </p>

          <div className="mt-auto pt-16 flex gap-4 text-xs font-sans text-warm-foam/50 max-w-sm leading-relaxed">
            <span className="w-8 h-px bg-warm-foam/20 mt-2 shrink-0"></span>
            <p>A modern maritime editorial system built on deep-ocean authority, navigational precision and optimistic horizon light</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden rounded-sm group">
          <video 
            src="/hero-video.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-abyss/10 mix-blend-overlay"></div>
          
          {/* Floating Card */}
          <div className="absolute bottom-8 right-8 bg-abyss/90 backdrop-blur-md border border-warm-foam/10 p-6 rounded-sm max-w-xs shadow-2xl">
            <div className="flex justify-between items-center mb-4 text-[10px] font-mono text-brass-signal uppercase tracking-wider">
              <span>NAV / 001</span>
              <ArrowRight className="w-3 h-3" />
            </div>
            <p className="font-heading text-sm text-warm-foam leading-relaxed">
              Career routes, charted with confidence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
