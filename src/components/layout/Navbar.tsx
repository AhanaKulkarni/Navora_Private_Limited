"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]);
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderColor = useTransform(scrollY, [0, 50], ["rgba(229, 231, 235, 0)", "rgba(229, 231, 235, 1)"]);
  const boxShadow = useTransform(scrollY, [0, 50], ["0 4px 20px rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.05)"]);

  return (
    <>
      <motion.nav 
        style={{ 
          backgroundColor,
          backdropFilter,
          borderColor,
          boxShadow
        }}
        className="fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 h-16 md:h-20"
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-[#1F3C8B]' : 'text-white'}`}>
              Navora<span className="text-[#CEA72B]">.</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex h-full items-center">
            <ul className={`flex items-center gap-8 text-xs font-bold tracking-widest uppercase transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
              <li><Link href="/" className={`hover:text-[#CEA72B] transition-colors`}>Home</Link></li>
              <li><Link href="/jobs" className={`hover:text-[#CEA72B] transition-colors`}>Portal</Link></li>
              <li><Link href="/blog" className={`hover:text-[#CEA72B] transition-colors`}>Journal</Link></li>
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/jobs" className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors shadow-lg ${isScrolled ? 'bg-[#1F3C8B] text-white hover:bg-[#152a63]' : 'bg-[#CEA72B] text-[#1F3C8B] hover:bg-[#b0882e]'}`}>
              Access Jobs
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 transition-colors ${isScrolled ? 'text-[#1F3C8B]' : 'text-white'}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#1F3C8B] text-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-serif text-xl font-bold tracking-tight text-white">
                Navora<span className="text-[#CEA72B]">.</span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-white hover:text-[#CEA72B] transition-colors">Home</Link>
              <Link href="/jobs" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-white hover:text-[#CEA72B] transition-colors">Portal</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-white hover:text-[#CEA72B] transition-colors">Journal</Link>
              <Link href="/jobs" onClick={() => setMobileMenuOpen(false)} className="mt-8 px-8 py-4 rounded-full bg-[#CEA72B] text-[#1F3C8B] font-bold uppercase tracking-widest text-sm w-full text-center">
                Access Jobs
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
