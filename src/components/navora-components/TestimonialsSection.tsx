import React from 'react';
import { InfiniteMovingCards } from "@/components/navora-ui/infinite-moving-cards";

export default function TestimonialsSection({ testimonials }: { testimonials: any[] }) {
  return (
    <section className="py-32 bg-warm-foam text-abyss overflow-hidden border-t border-abyss/10">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight mb-6">
          Candidates Testimonials
        </h2>
        <p className="text-xl md:text-2xl font-accent italic text-abyss/70 max-w-2xl mx-auto">
          Here is what candidates recruited through us had to say about their experience.
        </p>
      </div>

      <div className="w-full relative flex flex-col items-center justify-center overflow-hidden antialiased">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="w-full max-w-none"
        />
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm font-mono uppercase tracking-widest text-brass-signal">
          &ldquo;Every journey is unique &mdash; we are grateful to be part of theirs.&rdquo;
        </p>
      </div>
    </section>
  );
}
