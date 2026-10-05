import CurrentOpening from "@/components/navora-components/CurrentOpenings";
import HeroSection from "@/components/navora-components/Hero";
import TestimonialSliderClient from "@/components/navora-components/TestimonialSliderClient";
import prisma from "@/lib/prisma";

export default async function Home() {
  // Fetch up to 9 recent active jobs
  const prismaJobs = await prisma.job.findMany({
    
    orderBy: { createdAt: "desc" },
    take: 24,
  });

  const jobs = prismaJobs.map((job) => ({
    _id: job.id,
    title: job.title,
    department: "",
    location: job.location,
    type: "Permanent",
    isActive: true,
    description: job.description || "",
    createdAt: job.createdAt.toISOString(),
  }));

  return (
    <div>
      <HeroSection />
      <CurrentOpening initialJobs={jobs} />
      <TestimonialSliderClient />
    </div>
  );
}
