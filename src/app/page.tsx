import prisma from "@/lib/prisma";
import HomeClient from "./HomeClient";

export default async function Home() {
  const recentJobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
    take: 3
  });

  return <HomeClient recentJobs={recentJobs} />;
}
