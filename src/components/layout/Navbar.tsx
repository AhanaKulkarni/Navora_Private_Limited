"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]);
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderColor = useTransform(scrollY, [0, 50], ["rgba(229, 231, 235, 0)", "rgba(229, 231, 235, 1)"]);
  const boxShadow = useTransform(scrollY, [0, 50], ["0 4px 20px rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.05)"]);

  return (
    <motion.nav 
      style={{ 
        backgroundColor,
        backdropFilter,
        borderColor,
        boxShadow
      }}
      className="fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 h-20"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-[#1F3C8B]' : 'text-white'}`}>
            Navora<span className="text-[#CEA72B]">.</span>
          </Link>
        </div>
        <div className="hidden h-full items-center lg:flex">
          <ul className={`flex items-center gap-8 text-xs font-bold tracking-widest uppercase transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
            <li><Link href="/" className={`hover:text-[#CEA72B] transition-colors`}>Home</Link></li>
            <li><Link href="/jobs" className={`hover:text-[#CEA72B] transition-colors`}>Portal</Link></li>
            <li><Link href="/blog" className={`hover:text-[#CEA72B] transition-colors`}>Journal</Link></li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center">
          <Link href="/jobs" className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors shadow-lg ${isScrolled ? 'bg-[#1F3C8B] text-white hover:bg-[#152a63]' : 'bg-[#CEA72B] text-[#1F3C8B] hover:bg-[#b0882e]'}`}>
            Access Jobs
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
