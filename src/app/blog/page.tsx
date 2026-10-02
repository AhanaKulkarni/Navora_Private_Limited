import prisma from "@/lib/prisma";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(206,167,43,0.03)_0%,_transparent_50%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-gray-200 bg-white text-[10px] font-bold tracking-widest uppercase text-gray-500 shadow-sm">
            The Journal
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-4 text-gray-900">Insights & <br/> Perspectives</h1>
          <p className="text-lg text-gray-500 max-w-xl font-light">
            Expert commentary, industry analysis, and news from the forefront of the maritime and energy sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <div className="col-span-full py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-400 text-base text-center font-serif">The journal is currently empty. Publications will appear here soon.</p>
            </div>
          ) : (
            posts.map(post => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gray-50 w-full relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-3xl font-black tracking-tight text-gray-200">Navora</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                  <div className="absolute inset-0 bg-[#24439C] mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-3">
                    <Calendar className="w-3 h-3" />
                    {post.createdAt.toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-[#24439C] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 line-clamp-3 mb-6 flex-1 text-sm font-light leading-relaxed">
                    {post.content}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-900 group-hover:text-[#24439C] transition-colors mt-auto">
                    Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
