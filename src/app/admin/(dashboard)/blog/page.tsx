import prisma from "@/lib/prisma";
import { Plus, Trash2, Edit } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function AdminBlog() {
  let posts: any[] = []; try { posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  }); } catch(e){}

  async function deletePost(formData: FormData) {
    "use server";
    const id = formData.get('id') as string;
    try { await prisma.blogPost.delete({ where: { id } }); } catch(e){}
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Blog & News</h1>
        <button className="bg-[#071A27] hover:bg-[#0B2B3E] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors opacity-50 cursor-not-allowed">
          <Plus className="w-5 h-5" />
          Add Post (WIP)
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Title</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">No blog posts found.</td>
              </tr>
            ) : posts.map((post) => (
              <tr key={post.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-gray-900">{post.title}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${post.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{post.createdAt.toLocaleDateString()}</td>
                <td className="p-4 flex justify-end gap-2">
                  <form action={deletePost}>
                    <input type="hidden" name="id" value={post.id} />
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
