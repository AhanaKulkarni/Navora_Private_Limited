"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Tinos } from "next/font/google";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Nav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldBeSolid = !isHomePage || isScrolled;
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Services", "About", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 z-50 h-28 w-full transition-all duration-300 ${shouldBeSolid ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"} border-t-4 border-t-[#CEA72B]`}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => router.push("/")}
        >
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#24439C]">Navora Private Limited</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden h-full flex-col items-end justify-between lg:flex">
          {/* Top Buttons */}
          <ul className="mb-1 flex hidden items-center gap-px border-t border-white text-xs font-medium text-white">
            <li className="cursor-pointer rounded-bl-md bg-[#CEA72B] px-2 py-1 hover:bg-[#24439C]">
              Upload CV
            </li>
            <li className="cursor-pointer bg-[#CEA72B] px-4 py-1 hover:bg-[#24439C]">
              <button onClick={() => router.push("/")}>
                Register a vacancy
              </button>
            </li>
            <li className="cursor-pointer rounded-br-md bg-[#CEA72B] px-4 py-1 hover:bg-[#24439C]">
              <button onClick={() => router.push("/login")}>Login</button>
            </li>
          </ul>

          {/* Bottom Nav + Search */}
          <div className="/mt-4 /mb-auto mx-auto mt-auto mb-auto flex items-center gap-8">
            <ul className="hidden items-center gap-8 font-medium text-[#24439C] md:flex">
              <li>
                <a
                  href="#"
                  className="hover:text-[#CEA72B]"
                  onClick={() => router.push(`/`)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#CEA72B]"
                  onClick={() => router.push(`/services`)}
                >
                  Services
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-[#CEA72B]">
                  Executive Search
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="hover:text-primary"
                  onClick={() => router.push(`/sectors`)}
                >
                  Sectors
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-[#CEA72B]">
                  Insights
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="hover:text-primary"
                  onClick={() => router.push(`/about`)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#CEA72B]"
                  onClick={() => router.push(`/contact`)}
                >
                  Contact Us
              </a>
            </li>
            <li>
                <div 
                  className="relative group" 
                  onMouseEnter={() => setMoreOpen(true)} 
                  onMouseLeave={() => setMoreOpen(false)}
                >
                  <button 
                    onClick={() => setMoreOpen(!moreOpen)}
                    className="hover:text-[#CEA72B] flex items-center gap-1 py-2"
                  >
                    More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`absolute right-0 top-full w-48 pt-2 ${moreOpen ? "block" : "hidden group-hover:block"}`}>
                    <div className="bg-white shadow-lg rounded-md overflow-hidden border border-gray-100">
                      <a href="/admin/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-[#24439C]">Admin Portal</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none lg:hidden"
        >
          <svg
            className="h-7 w-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`${
          open ? "block" : "hidden"
        } border-t border-gray-200 bg-white px-6 pb-4 shadow-sm lg:hidden`}
        id="mobileMenu"
      >
        <ul className="flex flex-col gap-3 py-2 font-medium text-gray-700">
          <li>
            <a
              href="#"
              className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              onClick={() => router.push(`/`)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              onClick={() => router.push(`/services`)}
            >
              Services
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              onClick={() => router.push(`/`)}
            >
              Executive Search
            </a>
          </li> */}
          <li>
            <a
              href="#"
              className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              onClick={() => router.push(`/sectors`)}
            >
              Sectors
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              onClick={() => router.push(`/`)}
            >
              Insights
            </a>
          </li> */}
          <li>
            <a
              href="#"
              className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              onClick={() => router.push(`/about`)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              onClick={() => router.push(`/contact`)}
            >
              Contact Us
              </a>
            </li>
            <li>
              <a
                href="/admin/login"
                className="hover:bg-primary/10 hover:text-secondary block rounded-lg px-2 py-2 transition hover:font-bold hover:text-[#CEA72B]"
              >
                Admin Portal
              </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}





