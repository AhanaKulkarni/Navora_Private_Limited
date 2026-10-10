import JobsList from "./JobsList";

export default function JobsPage() {
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

  return <JobsList jobs={jobs} />;
}
