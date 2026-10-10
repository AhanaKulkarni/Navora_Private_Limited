
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
