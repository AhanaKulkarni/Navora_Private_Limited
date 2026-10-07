import CurrentOpening from "@/components/navora-components/CurrentOpenings";
import HeroSection from "@/components/navora-components/Hero";
import TestimonialSliderClient from "@/components/navora-components/TestimonialSliderClient";
import prisma from "@/lib/prisma";

export default async function Home() {
  let prismaJobs: any[] = []; try { prismaJobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    take: 24,
  }); } catch(e){}

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

  let prismaTestimonials: any[] = []; try { prismaTestimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  }); } catch(e){}

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
