import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default function NewTestimonial() {
  async function createTestimonial(formData: FormData) {
    "use server";
    
    try { await prisma.testimonial.create({
      data: {
        name: formData.get('name') as string,
        position: formData.get('position') as string,
        content: formData.get('content') as string,
      }
    }); } catch(e) { console.error(e) }

    revalidatePath('/admin/testimonials');
    revalidatePath('/');
    redirect('/admin/testimonials');
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/testimonials" className="p-2 hover:bg-slate-200 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Add New Testimonial</h1>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <form action={createTestimonial} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Candidate Name</label>
              <input 
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE9C5B]"
                placeholder="e.g. Arun D'Sa"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Position / Role</label>
              <input 
                name="position"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE9C5B]"
                placeholder="e.g. Technical Superintendent"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Quote / Content</label>
            <textarea 
              name="content"
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE9C5B]"
              placeholder="Their testimonial..."
            ></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button 
              type="submit"
              className="bg-[#071A27] hover:bg-[#0B2B3E] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Save Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
