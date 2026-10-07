import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default function NewJob() {
  async function createJob(formData: FormData) {
    "use server";
    
    try { await prisma.job.create({
      data: {
        title: formData.get('title') as string,
        location: formData.get('location') as string,
        salary: formData.get('salary') as string,
        department: formData.get('department') as string,
        type: formData.get('type') as string,
        description: formData.get('description') as string,
        requirements: formData.get('requirements') as string,
      }
    }); } catch(e) { console.error(e) }

    revalidatePath('/admin/jobs');
    revalidatePath('/');
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
              <label className="text-sm font-medium text-gray-700">Job Title</label>
              <input name="title" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]" placeholder="e.g. Master Mariner" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <input name="location" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]" placeholder="e.g. Rotterdam, Netherlands" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Department</label>
              <input name="department" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]" placeholder="e.g. Engineering" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Job Type</label>
              <input name="type" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]" placeholder="e.g. Permanent" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Salary (Optional)</label>
              <input name="salary" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]" placeholder="e.g. Competitive" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]" placeholder="Brief job description..."></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Requirements</label>
            <textarea name="requirements" required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]" placeholder="Key requirements..."></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button type="submit" className="bg-[#24439C] hover:bg-[#1a3070] text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Save Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
