
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
