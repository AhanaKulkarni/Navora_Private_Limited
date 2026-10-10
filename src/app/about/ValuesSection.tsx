
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
