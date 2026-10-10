import CurrentOpening from "@/components/navora-components/CurrentOpenings";
import HeroSection from "@/components/navora-components/Hero";
import TestimonialsSection from "@/components/navora-components/TestimonialsSection";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  let prismaJobs = [
    {
      id: "9045EC",
      title: "SaaS Sales Manager (General)",
      department: "SALES",
      location: "Japan / Singapore",
      type: "Full-Time",
      salary: "Competitive",
      description: "Candidates who are legally authorized to work in Singapore and India are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
      requirements: "Strong sales experience in SaaS, preferably within maritime or tech industries.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045EF",
      title: "Sales Manager (General)",
      department: "SALES",
      location: "Japan",
      type: "Full-Time",
      salary: "Competitive",
      description: "Candidates who are legally authorized to work in Japan are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
      requirements: "Proven track record in general sales and business development.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F0",
      title: "Marine Superintendent (Bulk)",
      department: "MARINE OPERATIONS",
      location: "Shanghai, China",
      type: "Full-Time",
      salary: "Competitive",
      description: "Candidates who are legally authorized to work in China are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
      requirements: "Extensive experience as Marine Superintendent on Bulk Carriers.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F1",
      title: "Marine Superintendent (Oil & Chemical Tankers)",
      department: "MARINE OPERATIONS",
      location: "Chennai, India",
      type: "Full-Time",
      salary: "Competitive",
      description: "You may also apply directly through LinkedIn on the respective job postings.",
      requirements: "Previous sailing experience as Master on Oil/Chemical Tankers.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F2",
      title: "QHSE Superintendent (Oil & Chemical Tankers Marine)",
      department: "QHSE",
      location: "Pune, India",
      type: "Full-Time",
      salary: "Competitive",
      description: "You may also apply directly through LinkedIn on the respective job postings.",
      requirements: "Strong background in Quality, Health, Safety, and Environment for tankers.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F3",
      title: "Marine Superintendent (LPG)",
      department: "MARINE OPERATIONS",
      location: "Kochi, India",
      type: "Full-Time",
      salary: "Competitive",
      description: "Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
      requirements: "Specialized experience with LPG vessels and cargo operations.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F4",
      title: "QSHE Superintendent (General)",
      department: "QHSE",
      location: "Global / Remote",
      type: "Full-Time",
      salary: "Competitive",
      description: "Oversee and implement Quality, Safety, Health and Environment policies across our fleet.",
      requirements: "Extensive QSHE auditing and management experience.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9045F5",
      title: "Senior Technical Superintendent (Oil & Chemical Tankers)",
      department: "TECHNICAL",
      location: "Global",
      type: "Full-Time",
      salary: "Competitive",
      description: "Lead the technical management team for our advanced fleet of Oil & Chemical tankers.",
      requirements: "Chief Engineer experience with shore-based technical management.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
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
      name: "Hemant Arya",
      position: "Master",
      content: "Thank you once again for your unwavering support and encouragement. I look forward to staying connected and will always recommend you and Navora (MSL) with complete confidence and respect."
    },
    {
      name: "Zeeshan",
      position: "Technical - Data Manager",
      content: "I am writing to express my sincere gratitude and appreciation for the exceptional support I received from Ms. Roohi Mehta throughout the interview process for the position of Technical - Data Manager. She went well above and beyond her responsibilities."
    },
    {
      name: "Pooja Rajput",
      position: "Program Manager",
      content: "The overall process was highly considerate and respectful of the candidate's time. Regular and timely updates provided to the candidate. Motivation and encouragement shared prior to each interview round."
    },
    {
      name: "Farhathul Afrah",
      position: "Candidate",
      content: "From the very first resume screening, you've been approachable, encouraging, and extremely helpful. Your clear communication and reassuring attitude made the process smooth and comfortable for me."
    },
    {
      name: "K Boopathi",
      position: "Candidate",
      content: "Working with you has been a very positive experience. Everyone I interacted with was incredibly kind and professional throughout the process. I truly appreciate the support and the seamless communication."
    },
    {
      name: "Piyush Jain",
      position: "Sr. Solution Architect",
      content: "It has been a genuinely professional and well-managed experience. You've been clear, structured, and detail-oriented at every stage, while also being approachable and respectful in your communication."
    },
    {
      name: "Amit Kumar",
      position: "Training Superintendent",
      content: "I would like to share my appreciation for the excellent support provided throughout the recruitment process. The entire experience was smooth and well-coordinated, and everything was taken care of professionally."
    },
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
