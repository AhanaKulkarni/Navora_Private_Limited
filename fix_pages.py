# -*- coding: utf-8 -*-
import os

components = {
    "AboutSection.tsx": """
import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 bg-warm-foam text-abyss">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8 text-[10px] uppercase tracking-widest font-mono text-abyss/60">
            <span className="w-6 h-px bg-abyss/30"></span>
            ABOUT NAVORA
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-8">
            Expertise, opportunity and direction &mdash; brought into view.
          </h2>
          <div className="space-y-6 text-abyss/70 font-sans leading-relaxed">
            <p>
              At Navora, we specialize in permanent recruitment, providing comprehensive solutions tailored specifically for the global Maritime, Shipping, and Energy sectors. Our core mission is to connect world-class professionals with premium opportunities.
            </p>
            <p>
              Through our deep industry understanding and vast network, we deliver tailored recruitment services ensuring that each placement not only fills a vacancy but drives long-term success.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-abyss/10 bg-abyss">
          <Image src="/about/mission.jpg" alt="About Navora" fill className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" />
          <div className="absolute bottom-6 right-6 font-mono text-[10px] text-brass-signal uppercase tracking-widest">
            37&deg; 48' N &mdash; 122&deg; 25' W
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    "InfoSection.tsx": """
import React from 'react';
import Image from 'next/image';

export default function InfoSection({ title, description, imageUrl, bgColor = "bg-white" }: any) {
  return (
    <section className={`py-24 ${bgColor} text-abyss border-t border-abyss/5`}>
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 relative aspect-video lg:aspect-[4/3] w-full overflow-hidden border border-abyss/10 bg-abyss">
          <Image src={imageUrl} alt={title} fill className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-8 text-[10px] uppercase tracking-widest font-mono text-brass-signal">
            <span className="w-6 h-px bg-brass-signal/50"></span>
            {title}
          </div>
          <h2 className="text-3xl md:text-4xl font-accent italic tracking-tight mb-8 text-abyss/90">
            {description}
          </h2>
        </div>
      </div>
    </section>
  );
}
""",
    "ValuesSection.tsx": """
import React from 'react';

const values = [
  { title: "Integrity", desc: "Honesty and transparency in all our dealings." },
  { title: "Excellence", desc: "Striving for the highest quality in everything we do." },
  { title: "Collaboration", desc: "Working together to achieve common goals." },
  { title: "Innovation", desc: "Constantly seeking better ways to serve our clients." }
];

export default function ValuesSection() {
  return (
    <section className="py-32 bg-abyss text-warm-foam">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 text-[10px] uppercase tracking-widest font-mono text-brass-signal">
            <span className="w-6 h-px bg-brass-signal/50"></span>
            OUR VALUES
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight max-w-2xl">
            The principles that guide our navigation.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-warm-foam/10 pt-16">
          {values.map((v, i) => (
            <div key={i} className="group">
              <div className="font-mono text-[10px] text-brass-signal mb-6">0{i+1}</div>
              <h3 className="text-xl font-heading font-medium mb-4 group-hover:text-horizon-light transition-colors">{v.title}</h3>
              <p className="font-sans text-warm-foam/60 leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
""",
    "ContactBanner.tsx": """
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
"""
}

base_path = "src/app/about"
for filename, content in components.items():
    if os.path.exists(os.path.join(base_path, filename)):
        with open(os.path.join(base_path, filename), "w", encoding="utf-8") as f:
            f.write(content)

components_global = {
    "SectorSection.tsx": """
import React from 'react';
import Image from 'next/image';

export default function SectorSection({ title, description, image, points, index, reverse }: any) {
  return (
    <section className={`py-24 ${index % 2 === 0 ? 'bg-warm-foam text-abyss' : 'bg-white text-abyss'} border-b border-abyss/5`}>
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'} relative aspect-square lg:aspect-[4/3] w-full overflow-hidden bg-abyss border border-abyss/10`}>
          <Image src={image} alt={title} fill className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" />
          <div className="absolute bottom-6 left-6 font-mono text-[10px] text-brass-signal uppercase tracking-widest">
            SECTOR / {String(index + 1).padStart(2, '0')}
          </div>
        </div>
        <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          <h2 className="text-4xl font-heading font-medium tracking-tight mb-8">
            {title}
          </h2>
          <p className="text-abyss/70 font-sans leading-relaxed mb-10 text-lg">
            {description}
          </p>
          <ul className="space-y-4">
            {points.map((point: string, i: number) => (
              <li key={i} className="flex items-center gap-4 text-sm font-sans text-abyss/80">
                <span className="w-1.5 h-1.5 bg-brass-signal rounded-full shrink-0"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
"""
}

base_path_sectors = "src/app/sectors"
for filename, content in components_global.items():
    if os.path.exists(os.path.join(base_path_sectors, filename)):
        with open(os.path.join(base_path_sectors, filename), "w", encoding="utf-8") as f:
            f.write(content)
            
components_services = {
    "RolesGrid.tsx": """
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
""",
    "ServicesOfferings.tsx": """
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
"""
}

base_path_services = "src/app/services"
for filename, content in components_services.items():
    if os.path.exists(os.path.join(base_path_services, filename)):
        with open(os.path.join(base_path_services, filename), "w", encoding="utf-8") as f:
            f.write(content)

print("Redesigned all pages.")
