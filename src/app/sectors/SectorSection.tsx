
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
