import prisma from "@/lib/prisma";
import { Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function AdminTestimonials() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' }
  });

  async function deleteTestimonial(formData: FormData) {
    "use server";
    const id = formData.get('id') as string;
    await prisma.testimonial.delete({ where: { id } });
    revalidatePath('/admin/testimonials');
    revalidatePath('/');
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Testimonials</h1>
        <Link href="/admin/testimonials/new" className="bg-[#24439C] hover:bg-[#1a3070] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Add Testimonial
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Position</th>
              <th className="p-4 font-medium">Quote Snippet</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {testimonials.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">No testimonials found. Create one to get started!</td>
              </tr>
            ) : testimonials.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-gray-900">{t.name}</td>
                <td className="p-4 text-gray-600">{t.position}</td>
                <td className="p-4 text-gray-600 truncate max-w-xs">{t.content.substring(0, 50)}...</td>
                <td className="p-4 flex justify-end gap-2">
                  <form action={deleteTestimonial}>
                    <input type="hidden" name="id" value={t.id} />
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
