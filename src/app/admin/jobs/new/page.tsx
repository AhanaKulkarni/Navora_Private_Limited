import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewJob() {
  async function createJob(formData: FormData) {
    "use server";
    
    await prisma.job.create({
      data: {
        title: formData.get('title') as string,
        location: formData.get('location') as string,
        salary: formData.get('salary') as string,
        description: formData.get('description') as string,
        requirements: formData.get('requirements') as string,
      }
    });

    redirect('/admin/jobs');
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/jobs" className="p-2 hover:bg-slate-200 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Add New Job</h1>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <form action={createJob} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-medium text-gray-700">Job Title</label>
              <input type="text" id="title" name="title" required className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24439C]" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="font-medium text-gray-700">Location</label>
              <input type="text" id="location" name="location" required className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24439C]" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="salary" className="font-medium text-gray-700">Salary (Optional)</label>
            <input type="text" id="salary" name="salary" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24439C]" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" rows={5} required className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24439C]"></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="requirements" className="font-medium text-gray-700">Requirements</label>
            <textarea id="requirements" name="requirements" rows={5} required className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24439C]"></textarea>
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Link href="/admin/jobs" className="px-6 py-2 text-gray-600 hover:bg-slate-100 rounded-lg font-medium transition-colors">
              Cancel
            </Link>
            <button type="submit" className="px-6 py-2 bg-[#24439C] text-white rounded-lg font-medium hover:bg-[#1a3070] transition-colors">
              Save Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
