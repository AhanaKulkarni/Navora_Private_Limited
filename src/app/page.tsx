import CurrentOpening from "@/components/navora-components/CurrentOpenings";
import HeroSection from "@/components/navora-components/Hero";
import TestimonialsSection from "@/components/navora-components/TestimonialsSection";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  let prismaJobs = [
    {
      id: "cmv2am3ny0000chx01yx03ohj",
      title: "Fleet Performance Manager",
      department: "MARINE OPERATIONS",
      location: "Houston, TX",
      type: "Permanent",
      salary: "$130,000 - $150,000",
      description: "Lead vessel efficiency programmes for an international operator investing in lower-carbon technologies and strategic maritime solutions.",
      requirements: "Strong background in marine engineering and vessel performance optimization.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "cmv2am3o10001chx0hqe52scb",
      title: "Marine Superintendent",
      department: "MARINE OPERATIONS",
      location: "Singapore",
      type: "Contract",
      salary: "$140,000 - $160,000",
      description: "Oversee fleet operations, safety compliance, and crew management for a diverse fleet of specialized vessels.",
      requirements: "Master Mariner qualification with extensive shore-based management experience.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const jobs = prismaJobs.map((job) => ({
    _id: job.id,
    title: job.title,
    department: job.department || "",
    location: job.location,
    type: job.type || "Permanent",
    isActive: true,
    description: job.description || "",
    createdAt: job.createdAt.toISOString(),
  }));

  let prismaTestimonials = [
    {
      name: "Arun D'Sa",
      position: "Technical Superintendent",
      content: "Dear Ms. Roohi Mehta, I would like to sincerely thank you for your continuous support and guidance throughout my recruitment process for the Technical Superintendent position. Your professionalism, encouragement, and dedication have been extremely valuable."
    },
    {
      name: "Anita Sharma",
      position: "Second Officer",
      content: "Clear communication, timely updates, and a team that genuinely cares about seafarers. The recruitment process was incredibly smooth."
    },
    {
      name: "Michael Chen",
      position: "Chief Engineer",
      content: "Navora found me the perfect placement on an LNG vessel. Their attention to detail and understanding of the maritime sector is unmatched."
    },
    {
      name: "Sarah Jenkins",
      position: "Fleet Manager",
      content: "Outstanding recruitment partner. They truly understand what companies are looking for and matched me perfectly with my current role."
    }
  ];

  const testimonials = prismaTestimonials.map((t) => ({
    name: t.name,
    title: t.position,
    quote: t.content,
    image: "/candidates/candidate.png"
  }));

  return (
    <div>
      <HeroSection />
      <CurrentOpening initialJobs={jobs} />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
