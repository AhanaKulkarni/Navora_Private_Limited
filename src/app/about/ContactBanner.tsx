
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="py-24 bg-brass-signal text-abyss">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="text-[10px] font-mono tracking-widest uppercase mb-4 opacity-70">
            RECOMMENDED DIRECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">
            Ready to set a new course?
          </h2>
        </div>
        <Link href="/contact" className="bg-abyss text-warm-foam px-8 py-4 font-sans text-sm font-medium hover:bg-abyss/90 transition-colors flex items-center gap-3 rounded-sm">
          Get in touch
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
