"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative flex h-[340px] items-center justify-center overflow-hidden bg-abyss pt-28 text-warm-foam">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#CE9C5B10_1px,transparent_1px),linear-gradient(to_bottom,#CE9C5B10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="relative max-w-3xl px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-6 text-[10px] uppercase tracking-widest font-mono text-warm-foam/70"
        >
          <span className="w-4 h-px bg-warm-foam/50"></span>
          NAVORA
          <span className="w-4 h-px bg-warm-foam/50"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-5xl lg:text-6xl font-heading font-medium tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg font-accent italic text-warm-foam/80"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
