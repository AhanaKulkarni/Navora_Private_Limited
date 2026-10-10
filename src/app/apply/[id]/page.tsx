import Apply from "./Apply";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ApplyJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  let job: any = null;
  try {
    job = await prisma.job.findUnique({
      where: { id }
    });
  } catch (e) {
    console.error(e);
  }

  if (!job) {
    return notFound();
  }

  return <Apply job={job} />;
}
