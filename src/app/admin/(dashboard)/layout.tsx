import Link from "next/link";
import { LayoutDashboard, Briefcase, FileText, Users, LogOut } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logout } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth");
  
  if (!auth) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-100 mt-[-6rem]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 pt-28 px-4 flex flex-col gap-2 relative">
        <h2 className="text-xl font-bold text-[#24439C] px-4 mb-4">Admin Portal</h2>
        
        <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-[#CEA72B] rounded-lg transition-colors">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link href="/admin/jobs" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-[#CEA72B] rounded-lg transition-colors">
          <Briefcase className="w-5 h-5" />
          Jobs
        </Link>
        <Link href="/admin/testimonials" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-[#CEA72B] rounded-lg transition-colors">
          <Users className="w-5 h-5" />
          Testimonials
        </Link>

        <form action={logout} className="absolute bottom-8 left-4 right-4">
          <button type="submit" className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </form>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-28 px-8 pb-12">
        {children}
      </main>
    </div>
  );
}
