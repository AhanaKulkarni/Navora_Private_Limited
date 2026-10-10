
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesOfferings({ heading, intro, services }: any) {
  return (
    <section className="py-32 bg-warm-foam text-abyss border-t border-abyss/10">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-8 leading-tight">
              {heading}
            </h2>
            <Link href="/contact" className="bg-brass-signal text-abyss px-8 py-4 font-sans text-sm font-medium hover:bg-[#b8894d] transition-colors inline-flex items-center gap-3 rounded-sm">
              Engage our services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl md:text-2xl font-accent italic text-abyss/80 leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-abyss/10">
          {services.map((service: any, i: number) => (
            <div key={i} className="bg-warm-foam p-8 md:p-12 hover:bg-white transition-colors">
              <h3 className="text-2xl font-heading font-medium mb-4">{service.title}</h3>
              <p className="font-sans text-abyss/70 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
