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
        speed="normal"
      />
    </div>
  );
}

const defaultTestimonials = [
  {
    name: "Arun D'Sa",
    title: "Technical Superintendent",
    quote: "Dear Ms. Roohi Mehta,\n\nI would like to sincerely thank you for your continuous support and guidance throughout my recruitment process for the Technical Superintendent position.\n\nFrom the initial screening to the technical, HR, and psychometric stages, your timely communication and clear instructions made the entire process smooth and well-organized. I truly appreciate the way you followed up at every step and ensured I was well prepared.\n\nYour professionalism, encouragement, and dedication have been extremely valuable, and I am grateful for all the effort you put into coordinating the process.\n\nThank you once again for your support.\n\nWarm regards,\nArun D'Sa",
    image: "/images/testimonials/rahul.jpg",
  },
  {
    name: "Anita Sharma",
    title: "Second Officer",
    quote: "Clear communication, timely updates, and a team that genuinely cares about seafarers.",
  },
  {
    name: "Vikram Iyer",
    title: "Fleet Superintendent",
    quote: "A well-structured approach and strong industry knowledge made the experience seamless.",
    image: "/images/testimonials/vikram.jpg",
  },
];
