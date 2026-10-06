"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/navora-ui/infinite-moving-cards";

export function Testimonials({ items }: { items?: any[] }) {
  const displayItems = items && items.length > 0 ? items : defaultTestimonials;
  return (
    <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased dark:bg-black">
      <InfiniteMovingCards
        items={displayItems}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const defaultTestimonials = [
  {
    quote: "Dear Ms. Roohi Mehta, I would like to sincerely thank you for your continuous support...",
    name: "Arun D'Sa",
    title: "Technical Superintendent",
    image: "/candidates/candidate1.png",
  },
  {
    quote: "I would like to share my sincere feedback regarding my experience with Navora...",
    name: "Nishal Ranjan",
    title: "____",
    image: "/candidates/candidate2.png",
  }
];
