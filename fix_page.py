import os

page_content = """import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { MapPin, DollarSign, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function JobDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  let job: any = null; try { job = await prisma.job.findUnique({
    where: { id }
  }); } catch(e) {}

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/jobs" className="inline-flex items-center gap-2 text-[#24439C] hover:text-[#CEA72B] font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-6 text-gray-600 mb-8 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#24439C]" />
              <span className="text-lg">{job.location}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#24439C]" />
                <span className="text-lg">{job.salary}</span>
              </div>
            )}
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
            <div className="prose max-w-none text-gray-600 whitespace-pre-wrap">
              {job.description}
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
            <div className="prose max-w-none text-gray-600 whitespace-pre-wrap">
              {job.requirements}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href={`/apply/${job.id}`} className="inline-block w-full text-center md:w-auto bg-[#24439C] hover:bg-[#1a3070] text-white font-bold py-4 px-12 rounded-full transition-colors text-lg shadow-md hover:shadow-lg">
              Apply for this Position
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

with open('src/app/jobs/[id]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)
