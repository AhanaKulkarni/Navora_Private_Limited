"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

// Define the component props, all are optional
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  button1Text?: string;
  button1Href?: string;
  button2Text?: string;
  button2Href?: string;
  backgroundImageUrl?: string; // Optional: Allow overriding the background image
}

const scrollToCurrentOpenings = () => {
  const section = document.getElementById("current-openings");
  section?.scrollIntoView({ behavior: "smooth" });
};

// 1. Default Background Image URL
// NOTE: Ensure you have an image file named 'maritime-background.jpg'
// in your /public directory for this default path to work.
const DEFAULT_BACKGROUND_IMAGE_URL = "/hero-background.jpg";

// 2. Component renamed to HeroSection
const HeroSection: FC<HeroSectionProps> = ({
  // --- Default Content Values ---
  title = "NAVORA Careers Portal",
  subtitle = "Search and apply for Maritime jobs, Shipping jobs and Energy jobs.",
  description = "Our listings are updated regularly to help you find the right opportunity. For the most recent vacancies and how to apply, please visit our LinkedIn page.",
  button1Text = "Explore Jobs",
  button1Href = "/jobs",
  backgroundImageUrl = DEFAULT_BACKGROUND_IMAGE_URL, // Default image path
  button2Text = "Upload CV",
  button2Href = "/user/cv",
  // ------------------------------
}) => {
  return (
    // Hero Section: Full viewport height/width, relative for the image/overlay
    <section className="relative flex w-full min-h-[85vh] items-center justify-start overflow-hidden pt-28 pb-20 text-white">
      {/* 1. Background Image (Next.js Image for optimization) */}
      <Image
        src={backgroundImageUrl}
        alt="A large container ship at sea, symbolizing maritime careers"
        fill
        className="object-cover z-0"
        priority={true} // Load the hero image early
        quality={100}
        
      />

      {/* 2. Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 via-white/40 to-black/60"></div>

      <div className="//bg-red-500 relative z-10 mx-auto w-full max-w-7xl pt-16 pb-24 md:pt-36 md:pb-48">
        <div className="//bg-green-500 mx-4 flex justify-between">
          {/* Left Content */}
          <div className="//bg-blue-600 max-w-3xl">
            <h1 className="mb-4 text-4xl font-serif font-bold tracking-tight text-black sm:text-5xl lg:text-7xl">
              {title}
            </h1>
            <h2 className="text-secondary mb-6 text-xl font-normal tracking-tight sm:text-2xl md:text-3xl">
              {subtitle}
            </h2>
            <p className="mb-10 text-base font-medium text-white/90 sm:text-lg md:text-xl max-w-2xl">
              {description}
            </p>
            <div className="flex gap-4">
              <button
                onClick={scrollToCurrentOpenings}
                className="group text-secondary hover:bg-secondary flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium shadow-lg transition duration-300 ease-in-out hover:text-white md:px-6 md:py-2 md:text-lg"
              >
                {button1Text}

                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* <button className="border-secondary text-secondary hover:bg-secondary rounded-full border bg-white px-4 py-2 font-medium shadow-lg transition duration-150 ease-in-out hover:text-white md:px-6 md:py-2 md:text-lg">
                {button2Text}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
