import JobDetailsClient from "./JobDetailsClient";
import { notFound } from "next/navigation";

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const jobs = [
    {
      _id: "cmv2am3ny0000chx01yx03ohj",
      title: "Fleet Performance Manager",
      department: "MARINE OPERATIONS",
      location: "Houston, TX",
      type: "Permanent",
      salary: "$130,000 - $150,000",
      description: "Lead vessel efficiency programmes for an international operator investing in lower-carbon technologies and strategic maritime solutions.",
      requirements: "Strong background in marine engineering and vessel performance optimization.",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "cmv2am3o10001chx0hqe52scb",
      title: "Marine Superintendent",
      department: "MARINE OPERATIONS",
      location: "Singapore",
      type: "Contract",
      salary: "$140,000 - $160,000",
      description: "Oversee fleet operations, safety compliance, and crew management for a diverse fleet of specialized vessels.",
      requirements: "Master Mariner qualification with extensive shore-based management experience.",
      createdAt: new Date().toISOString(),
    }
  ];

  const job = jobs.find(j => j._id === params.id);
  if (!job) return notFound();

  return <JobDetailsClient job={job as any} />;
}
