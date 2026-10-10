import CurrentOpening from "@/components/navora-components/CurrentOpenings";
import HeroSection from "@/components/navora-components/Hero";
import TestimonialsSection from "@/components/navora-components/TestimonialsSection";

export default function Home() {
  const jobs = [
    {
      _id: "cmv2am3ny0000chx01yx03ohj",
      title: "Fleet Performance Manager",
      department: "MARINE OPERATIONS",
      location: "Houston, TX",
      type: "Permanent",
      isActive: true,
      description: "Lead vessel efficiency programmes for an international operator investing in lower-carbon technologies and strategic maritime solutions.",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "cmv2am3o10001chx0hqe52scb",
      title: "Marine Superintendent",
      department: "MARINE OPERATIONS",
      location: "Singapore",
      type: "Contract",
      isActive: true,
      description: "Oversee fleet operations, safety compliance, and crew management for a diverse fleet of specialized vessels.",
      createdAt: new Date().toISOString(),
    }
  ];

  const testimonials = [
    {
      name: "Arun D'Sa",
      title: "Technical Superintendent",
      quote: "Dear Ms. Roohi Mehta, I would like to sincerely thank you for your continuous support and guidance throughout my recruitment process for the Technical Superintendent position. Your professionalism, encouragement, and dedication have been extremely valuable.",
      image: "/candidates/candidate.png"
    },
    {
      name: "Anita Sharma",
      title: "Second Officer",
      quote: "Clear communication, timely updates, and a team that genuinely cares about seafarers. The recruitment process was incredibly smooth.",
      image: "/candidates/candidate.png"
    },
    {
      name: "Michael Chen",
      title: "Chief Engineer",
      quote: "Navora found me the perfect placement on an LNG vessel. Their attention to detail and understanding of the maritime sector is unmatched.",
      image: "/candidates/candidate.png"
    },
    {
      name: "Sarah Jenkins",
      title: "Fleet Manager",
      quote: "Outstanding recruitment partner. They truly understand what companies are looking for and matched me perfectly with my current role.",
      image: "/candidates/candidate.png"
    }
  ];

  return (
    <div>
      <HeroSection />
      <CurrentOpening initialJobs={jobs} />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
