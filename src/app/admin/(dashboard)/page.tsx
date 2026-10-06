import prisma from "@/lib/prisma";
import { Briefcase, FileText, Users, Mail } from "lucide-react";

export default async function AdminDashboard() {
  const jobsCount = await prisma.job.count();
  const blogCount = await prisma.blogPost.count();
  const testimonialCount = await prisma.testimonial.count();
  const subCount = await prisma.subscriber.count();

  const stats = [
    { name: "Active Jobs", count: jobsCount, icon: Briefcase, color: "bg-blue-100 text-blue-600" },
    { name: "Blog Posts", count: blogCount, icon: FileText, color: "bg-green-100 text-green-600" },
    { name: "Testimonials", count: testimonialCount, icon: Users, color: "bg-purple-100 text-purple-600" },
    { name: "Subscribers", count: subCount, icon: Mail, color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
            <div className={`p-4 rounded-lg ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
