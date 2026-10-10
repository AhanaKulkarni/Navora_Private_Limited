"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Anchor } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Find roles", href: "/jobs" },
    { name: "Services", href: "/services" },
    { name: "Articles", href: "/articles" },
    { name: "Rendezvous with Roohi", href: "/rendezvous" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-abyss/10 py-4 shadow-sm"
          : "bg-abyss border-transparent py-6"
      )}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/msllogo1.png" alt="Navora" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-sans tracking-wide transition-colors",
                pathname === link.href
                  ? "text-brass-signal font-medium"
                  : "text-abyss/80 hover:text-abyss"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* More Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-sans tracking-wide text-abyss/80 hover:text-abyss transition-colors py-2">
              More <ChevronDown className="w-3 h-3" />
            </button>
            
            {moreOpen && (
              <div className="absolute top-full right-0 mt-0 w-48 bg-white border border-abyss/10 rounded-sm shadow-xl overflow-hidden py-1">
                <Link 
                  href="/admin/login" 
                  className="block px-4 py-3 text-sm text-abyss/90 hover:bg-gray-100 hover:text-brass-signal transition-colors"
                  onClick={() => setMoreOpen(false)}
                >
                  Admin Portal
                </Link>
                <Link 
                  href="/blog" 
                  className="block px-4 py-3 text-sm text-abyss/90 hover:bg-gray-100 hover:text-brass-signal transition-colors"
                  onClick={() => setMoreOpen(false)}
                >
                  Career Advice
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/jobs"
            className="bg-brass-signal hover:bg-[#b5874c] text-abyss font-medium px-6 py-2.5 rounded-sm text-sm transition-colors"
          >
            Create profile
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-abyss p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-abyss border-b border-abyss/10 shadow-xl pb-6 px-6">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans text-abyss/90 hover:text-brass-signal transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admin/login"
              onClick={() => setIsOpen(false)}
              className="text-lg font-sans text-abyss/90 hover:text-brass-signal transition-colors"
            >
              Admin Portal
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="text-lg font-sans text-abyss/90 hover:text-brass-signal transition-colors"
            >
              Career Advice
            </Link>
            <Link
              href="/jobs"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-brass-signal text-abyss text-center font-medium px-6 py-3 rounded-sm transition-colors"
            >
              Create profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
