"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Briefcase, Calendar, Hash } from "lucide-react";

type Job = {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  isActive: boolean;
  description: string;
  createdAt: string;
};

export default function JobList({ initialJobs = [] }: { initialJobs?: Job[] }) {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log("PRODUCTION API URL:", API_URL);

  // Initialize from sessionStorage if available
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const date = (job: Job) => job.createdAt.split("T")[0];
  const jobId = (job: Job) => job._id.slice(-6).toUpperCase();

  const [error, setError] = useState<string | null>(null);
  // const [starred, setStarred] = useState(false);

  // ✅ Date formatter (date only)
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  useEffect(() => {
    if (initialJobs && initialJobs.length > 0) {
      setJobs(initialJobs);
      setLoading(false);
      return;
    }
    
    if (typeof window === "undefined") return; // server check

    const saved = sessionStorage.getItem("jobs");
    if (saved) {
      setJobs(JSON.parse(saved));
      setLoading(false); // already have jobs, no need to fetch
    } else {
      setLoading(false);
    }
  }, [initialJobs]);

  return (
    <section
      id="current-openings"
      className="flex justify-center bg-white py-12"
    >
      <div className="//p-6 //sm:p-8 //lg:py-12 w-full max-w-7xl">
        {/* ---------------- HEADER (ALWAYS VISIBLE) ---------------- */}
        <div className="flex justify-between py-4">
          <div>
            <h1 className="text-primary text-2xl md:text-5xl font-serif font-bold tracking-tight">
              Current Openings
            </h1>
            <h2 className="text-2xl md:text-5xl font-serif tracking-tight text-slate-800">Be the First to Apply</h2>
          </div>
          {/* <div>
            <button className="rounded-full border border-blue-500 px-6 py-2 transition hover:bg-blue-500 hover:text-white">
              View All
            </button>
          </div> */}
        </div>

        {/* ---------------- CONTENT AREA ---------------- */}
        {loading && (
          <div className="w-full rounded-md bg-slate-100 py-16 text-center">
            <p className="text-gray-500">Loading current openings…</p>
          </div>
        )}

        {!loading && error && (
          <div className="py-16 text-center">
            <p className="text-gray-600">{error}</p>
          </div>
        )}

        {!loading && !error && jobs.length === 0 && (
          <div className="w-full rounded-md bg-slate-100 px-4 py-16 text-center">
            <h2 className="mb-2 text-2xl font-semibold">No Current Openings</h2>
            <p className="text-gray-500">
              We currently don’t have any open positions. Please check back soon
              or follow us on LinkedIn for updates.
            </p>
          </div>
        )}

        {!loading && !error && jobs.length > 0 && (
          <div>
            <div className="w-full px-4 py-4">
                            <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                  <li
                    key={job._id}
                    className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-slate-200"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#24439C] transition-colors line-clamp-1">
                        {job.title}
                      </h2>
                      {job.department && job.department.trim() !== "" && (
                        <p className="text-sm font-medium text-slate-500 mt-1">
                          {job.department}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        {date(job)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Hash className="h-4 w-4 text-slate-400" />
                        {jobId(job)}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 line-clamp-2 mt-2">
                      {job.description}
                    </p>

                    <div className="mt-auto flex flex-col min-\[400px\]:flex-row gap-3 pt-6">
                      <button
                        onClick={() => router.push(/jobs/ + job._id)}
                        className="flex-1 rounded-xl border-2 border-[#24439C] px-4 py-2.5 text-sm font-bold text-[#24439C] transition-all hover:bg-[#24439C] hover:text-white"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => router.push(/apply/ + job._id)}
                        className="flex-1 rounded-xl bg-[#CEA72B] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#b59223] shadow-md hover:shadow-lg"
                      >
                        Apply Now
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              Stay connected — follow us on LinkedIn for the latest job
              openings.
              <br />
              We continuously update our website with new opportunities.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

