
import React from 'react';
import Image from 'next/image';

export default function RolesGrid({ roles }: any) {
  return (
    <section className="py-32 bg-abyss text-warm-foam">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16 text-[10px] uppercase tracking-widest font-mono text-brass-signal">
          <span className="w-6 h-px bg-brass-signal/50"></span>
          SPECIALIST DOMAINS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role: any, i: number) => (
            <div key={i} className="group relative aspect-square overflow-hidden border border-warm-foam/10 bg-deep-ocean">
              <Image src={role.img} alt={role.title} fill className="object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-abyss via-abyss/20 to-transparent">
                <div className="font-mono text-[10px] text-brass-signal mb-4">0{i+1}</div>
                <h3 className="text-2xl font-heading font-medium mb-3 group-hover:text-horizon-light transition-colors">{role.title}</h3>
                <p className="font-sans text-sm text-warm-foam/70">{role.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
