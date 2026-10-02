import prisma from "@/lib/prisma";
import { Plus, Trash2, Edit } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function AdminJobs() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' }
  });

  async function deleteJob(formData: FormData) {
    "use server";
    const id = formData.get('id') as string;
    await prisma.job.delete({ where: { id } });
    revalidatePath('/admin/jobs');
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Jobs</h1>
        <Link href="/admin/jobs/new" className="bg-[#24439C] hover:bg-[#1a3070] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Add Job
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Title</th>
              <th className="p-4 font-medium">Location</th>
              <th className="p-4 font-medium">Salary</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">No jobs found. Create one to get started!</td>
              </tr>
            ) : jobs.map((job) => (
              <tr key={job.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-gray-900">{job.title}</td>
                <td className="p-4 text-gray-600">{job.location}</td>
                <td className="p-4 text-gray-600">{job.salary || 'Not specified'}</td>
                <td className="p-4 flex justify-end gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <form action={deleteJob}>
                    <input type="hidden" name="id" value={job.id} />
                    <button type="submit" className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
