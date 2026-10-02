import Link from "next/link";
import { LayoutDashboard, Briefcase, FileText, Users } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100 mt-[-6rem]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 pt-28 px-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-[#24439C] px-4 mb-4">Admin Portal</h2>
        
        <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-[#CEA72B] rounded-lg transition-colors">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link href="/admin/jobs" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-[#CEA72B] rounded-lg transition-colors">
          <Briefcase className="w-5 h-5" />
          Jobs
        </Link>
        <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-[#CEA72B] rounded-lg transition-colors">
          <FileText className="w-5 h-5" />
          Blog & News
        </Link>
        <Link href="/admin/testimonials" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-[#CEA72B] rounded-lg transition-colors">
          <Users className="w-5 h-5" />
          Testimonials
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-28 px-8 pb-12">
        {children}
      </main>
    </div>
  );
}
