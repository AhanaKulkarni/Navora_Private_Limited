import CurrentOpening from "@/components/navora-components/CurrentOpenings";
import HeroSection from "@/components/navora-components/Hero";
import TestimonialSliderClient from "@/components/navora-components/TestimonialSliderClient";
import prisma from "@/lib/prisma";

export default async function Home() {
  const prismaJobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    take: 24,
  });

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

  const prismaTestimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

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
      <TestimonialSliderClient initialTestimonials={testimonials} />
    </div>
  );
}
