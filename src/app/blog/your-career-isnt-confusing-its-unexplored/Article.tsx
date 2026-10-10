"use client";
import { track } from "@vercel/analytics";

import React, { useState, useEffect } from "react";
import {
  Compass,
  Users,
  Lightbulb,
  ArrowRight,
  Bookmark,
  Clock,
  Calendar,
  
  ExternalLink,
  Target,
  Network,
  Search,
  CheckCircle2,
} from "lucide-react";

const Article = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // slight delay ensures reliability
    setTimeout(() => {
      track("Article Viewed", {
        page: "your-career-isnt-confusing-its-unexplored",
        title: "Your Career Isnâ€™t Confusing. Itâ€™s Unexplored.",
      });
    }, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectors = [
    {
      title: "Vessel Operations & Technical Management",
      desc: "Managing ship performance, maintenance, and compliance from shore or onboard.",
    },
    {
      title: "Shipboard Engineering (Sailing Role)",
      desc: "Working as a Marine Engineer onboard handling engines, machinery, and daily operations.",
    },
    {
      title: "Dry Docking & Repairs",
      desc: "Overseeing vessel maintenance, inspections, retrofits, and yard periods.",
    },
    {
      title: "Marine Surveying & Audits",
      desc: "Conducting inspections, condition surveys, pre-purchase inspections, and compliance audits.",
    },
    {
      title: "Shipbuilding & Design",
      desc: "Working with shipyards on vessel construction, design, and new builds.",
    },
    {
      title: "Offshore & Oil/Gas Sector",
      desc: "Roles in rigs, offshore vessels, FPSOs, and energy projects.",
    },
    {
      title: "Maritime Safety & Compliance (HSEQ)",
      desc: "Ensuring vessels meet international safety, environmental, and regulatory standards.",
    },
    {
      title: "Marine Procurement & Supply Chain",
      desc: "Handling sourcing, spares, logistics, and vendor management for fleets.",
    },
    {
      title: "Port & Terminal Operations",
      desc: "Managing port machinery, cargo operations, and terminal efficiency.",
    },
    {
      title: "Crewing & Marine HR",
      desc: "Managing recruitment, deployment, training, and welfare of seafarers.",
    },
    {
      title: "PMS (Planned Maintenance Systems)",
      desc: "Working with maintenance software, fleet performance data, and digital ship management systems.",
    },
    {
      title: "Environmental & Sustainability Roles",
      desc: "Focusing on emissions, decarbonisation, IMO regulations, ESG goals, and green shipping initiatives.",
    },
    {
      title: "Maritime Training & Academics",
      desc: "Becoming a trainer, lecturer, or simulator instructor.",
    },
    {
      title: "Technical Sales & Marine Equipment",
      desc: "Working with marine equipment companies in sales, solutions, and client management.",
    },
    {
      title: "Marine Insurance & Claims",
      desc: "Handling risk assessment, claims, and inspections for insurers.",
    },
    {
      title: "Maritime Law & Arbitration",
      desc: "Specialising in legal, dispute resolution, and compliance areas (with further study).",
    },
  ];

  const author = {
    name: "Mrs. Roohi Mehta",
    position: "Recruitment Director at Navora",
    image: "/roohimehta.png",
    linkedin: "https://www.linkedin.com/in/roohi-mehta-73b45515/",
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-[#B8962D]/30">
      {/* Read Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-1 bg-[#B8962D] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto max-w-4xl px-6 pt-8 pb-8">
        {/* Article Header */}
        <header className="mb-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#1A365D] px-3 py-1 text-[10px] font-black tracking-[0.2em] text-[#B8962D] uppercase">
                Career Strategy
              </span>
            </div>
          </div>

          <h1 className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-[#1A365D] md:text-4xl lg:text-5xl">
            There are so many fields... but how do I even know what fields
            exist?
          </h1>
          {/* Aritle Banner */}
          {/* Banner Image */}
          <div className="mb-8">
            <img
              src="/banner/your-career-isnt-confusing-its-unexplored.png"
              alt="Your Career Isnâ€™t Confusing. Itâ€™s Unexplored."
              className="h-auto w-full rounded-2xl border border-slate-100 object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col justify-between gap-6 border-y border-slate-100 py-2 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <img
                src={author.image}
                alt={author.name}
                className="h-14 w-14 rounded-full border-2 border-[#B8962D]/20 object-cover shadow-sm"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=RV&background=1A365D&color=B8962D";
                }}
              />
              <div>
                <h3 className="text-lg leading-tight font-bold text-[#1A365D]">
                  {author.name}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  {author.position}
                </p>
                <div className="mt-1 flex gap-3 text-slate-400">
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="cursor-pointer transition-colors hover:text-[#B8962D]"
                    />
                  </a>
                  {/* <ExternalLink size={14} className="hover:text-[#B8962D] cursor-pointer transition-colors" /> */}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#B8962D]" />
                <span>April 3, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#B8962D]" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <article className="prose prose-slate prose-lg max-w-none leading-relaxed text-slate-700">
          {/* <div className="bg-[#1A365D] text-white p-8 rounded-2xl mb-12 shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <h4 className="text-[#B8962D] font-black text-xs uppercase tracking-widest mb-4">ð’ðžðªð®ðžð¥</h4>
              <p className="text-2xl font-serif italic m-0 relative z-10 leading-snug">
                â€œð“ð¡ðžð«ðžÂ ðšð«ðžÂ ð¬ð¨Â ð¦ðšð§ð²Â ðŸð¢ðžð¥ðð¬â€¦Â ð›ð®ð­Â ð¡ð¨ð°Â ðð¨Â ðˆÂ ðžð¯ðžð§Â ð¤ð§ð¨ð°Â ð°ð¡ðšð­Â fieldsÂ ðžð±ð¢ð¬ð­?â€
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Compass size={120} />
              </div>
            </div> */}

          <p className="mb-6 text-xl leading-relaxed text-slate-600">
            After my previous post, a Marine Engineer asked me a very honest
            question:
          </p>

          <blockquote className="mb-10 rounded-r-xl border-l-4 border-[#B8962D] bg-slate-50 py-2 pl-6 text-xl text-slate-500 italic">
            â€œð‘©ð’–ð’• ð’‰ð’ð’˜ ð’•ð’ ð’‡ð’Šð’ð’… ð’—ð’‚ð’“ð’Šð’ð’–ð’” ð’Šð’ð’•ð’†ð’“ð’ð’”ð’‰ð’Šð’‘ð’”? ð‘©ð’–ð’• ð’ƒð’†ð’‡ð’ð’“ð’† ð’•ð’‰ð’‚ð’• ð’ð’ð’† ð’‰ð’‚ð’” ð’•ð’
            ð’†ð’—ð’†ð’ ð’Œð’ð’ð’˜ ð’˜ð’‰ð’‚ð’• ð’‚ð’“ð’† ð’•ð’‰ð’† ð’‡ð’Šð’†ð’ð’…ð’” ð’•ð’‰ð’‚ð’• ð’†ð’—ð’†ð’ ð’†ð’™ð’Šð’”ð’•, ð’‰ð’ð’˜ ð’•ð’ ð’Œð’ð’ð’˜ ð’•ð’‰ð’‚ð’• ?â€
          </blockquote>

          <p className="mb-12">
            Thatâ€™s the real starting point. Because before choosing what suits
            you, you need to first understand <strong>whatâ€™s out there.</strong>
          </p>

          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-4 text-3xl font-bold text-[#1A365D]">
              <span className="text-[#B8962D]">ð’ð­ðžð© ðŸ:</span> ðŒðšð© ð­ð¡ðž ð¥ðšð§ðð¬ðœðšð©ðž
            </h2>
            <p className="mb-6">
              When you opt for a particular field letâ€™s say you are from
              Engineering background you have already figured out your domain
              something you really liked.
            </p>
            <p className="mb-8">
              Now which field in that particular domain resonates with youâ€¦ is
              the area you have to figure out by first{" "}
              <strong>strategizing</strong> or looking how many areas are there.
              Every domain is much wider than it looks from the outside.
            </p>

            <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-slate-600 italic">
              Take Marine Engineering, for example â€” itâ€™s not just "working on
              ships." It can branch into:
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className="group flex items-start justify-between rounded-xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-[#B8962D] hover:shadow-md"
                >
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-black tracking-wider text-[#1A365D] uppercase">
                      <span className="h-2 w-2 rounded-full bg-[#B8962D]"></span>
                      {sector.title}
                    </h4>
                    <p className="text-xs leading-relaxed font-medium text-slate-500">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-slate-500 italic">
              Most students only see 1â€“2 of these. Thatâ€™s where the gap begins.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-4 text-3xl font-bold text-[#1A365D]">
              <span className="text-[#B8962D]">ð’ð­ðžð© ðŸ:</span> ð…ð¢ð¥ð­ðžð« â€” ðð®ð­
              ð’ð¦ðšð«ð­ð¥ð²
            </h2>
            <p className="mb-6 italic">Donâ€™t just ask: â€œWhat do I like?â€</p>
            <p className="mb-8 italic">
              Also ask: â€œWhat is relevant in the market?â€ and â€œWhere are
              opportunities growing?â€
            </p>

            <div className="rounded-2xl border-b-8 border-[#B8962D] bg-slate-900 p-10 text-center text-white">
              <h3 className="mb-8 text-xs font-black tracking-[0.3em] text-[#B8962D] uppercase">
                The Sweet Spot
              </h3>
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                <div className="rounded-full border border-white/10 px-6 py-3 font-bold">
                  ðˆð§ð­ðžð«ðžð¬ð­
                </div>
                <div className="text-2xl font-bold text-[#B8962D]">âˆ©</div>
                <div className="rounded-full border border-white/10 px-6 py-3 font-bold">
                  ðŒðšð«ð¤ðžð­ ðƒðžð¦ðšð§ð
                </div>
                <div className="text-2xl font-bold text-[#B8962D]">âˆ©</div>
                <div className="rounded-full border border-white/10 px-6 py-3 font-bold">
                  ð˜ð¨ð®ð« ð’ð­ð«ðžð§ð ð­ð¡ð¬
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-4 text-3xl font-bold text-[#1A365D]">
              <span className="text-[#B8962D]">ð’ð­ðžð© ðŸ‘:</span> ð†ðžð­ ð‚ð¥ð¨ð¬ðž ð­ð¨ ð­ð¡ðž
              ð‘ðžðšð¥ ð–ð¨ð«ð¥ð
            </h2>
            <p className="mb-8">Before even landing an internship:</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                "Talk to professionals in that field",
                "Follow industry leaders",
                "Read current trends and updates",
                "Join relevant communities",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <Search size={18} className="text-[#B8962D]" />
                  <span className="text-sm font-bold tracking-wide text-[#1A365D] uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-serif text-xl text-[#1A365D] italic">
              "Because clarity doesnâ€™t come from thinking. It comes from
              exposure."
            </p>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-4 text-3xl font-bold text-[#1A365D]">
              <span className="text-[#B8962D]">ð’ð­ðžð© ðŸ’:</span> ð”ð¬ðž ðˆð§ð­ðžð«ð§ð¬ð¡ð¢ð©ð¬
              ð’ð­ð«ðšð­ðžð ð¢ðœðšð¥ð¥ð²
            </h2>
            <p className="mb-8">
              Yes, some marine colleges offer structured 6-month internships â€”
              thatâ€™s a great starting point. But donâ€™t stop there.
            </p>

            <div className="space-y-4">
              <h4 className="mb-4 text-xs font-bold tracking-widest text-[#1A365D] uppercase">
                Use each experience to answer:
              </h4>
              {[
                "Did I enjoy the work or just tolerate it?",
                "Did the environment energise or drain me?",
                "Can I see myself growing here long-term?",
              ].map((q, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 rounded-xl border border-slate-100 bg-[#F8FAFC] p-4"
                >
                  <Target className="shrink-0 text-[#B8962D]" size={20} />
                  <p className="m-0 font-medium text-slate-700">{q}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-500">
              Each internship should give you <strong>direction</strong>, not
              just a line on your CV.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-4 text-3xl font-bold text-[#1A365D]">
              <span className="text-[#B8962D]">ð’ð­ðžð© ðŸ“:</span> ððžð­ð°ð¨ð«ð¤ ð°ð¢ð­ð¡
              ðˆð§ð­ðžð§ð­
            </h2>
            <p className="mb-8">
              This is where most people hesitate. But this is also where the
              biggest advantage lies.
            </p>
            <ul className="mb-8 list-none space-y-4 p-0">
              <li className="flex items-center gap-3">
                <Network size={18} className="text-[#B8962D]" /> Reach out to
                people in roles youâ€™re curious about
              </li>
              <li className="flex items-center gap-3">
                <Network size={18} className="text-[#B8962D]" /> Ask simple,
                genuine questions
              </li>
              <li className="flex items-center gap-3">
                <Network size={18} className="text-[#B8962D]" /> Stay consistent
              </li>
            </ul>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <p className="mb-2 text-xs font-bold text-[#B8962D] uppercase">
                Over time, this does two things:
              </p>
              <ul className="m-0 list-none space-y-2 p-0">
                <li className="flex items-center gap-2 font-bold text-[#1A365D]">
                  <ArrowRight size={14} /> Expands your awareness
                </li>
                <li className="flex items-center gap-2 font-bold text-[#1A365D]">
                  <ArrowRight size={14} /> Opens doors to opportunities
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16 border-t border-slate-100 pt-12">
            <h2 className="mb-8 text-3xl font-bold text-[#1A365D]">
              ð“ð¡ðž ð‘ðžðšð¥ ð’ð¡ð¢ðŸð­
            </h2>
            <p className="mb-6">
              The problem isnâ€™t that students donâ€™t explore. The problem is:
            </p>
            <ul className="list-none space-y-3 p-0">
              <li className="flex items-center gap-3 font-bold text-slate-700">
                <CheckCircle2 className="text-red-400" size={20} /> They explore
                without awareness
              </li>
              <li className="flex items-center gap-3 font-bold text-slate-700">
                <CheckCircle2 className="text-red-400" size={20} /> They choose
                without context
              </li>
            </ul>
          </section>

          <section className="mt-20 border-t border-slate-100 pt-12 pb-24 text-center">
            <p className="mb-6 text-sm font-bold tracking-widest text-slate-400 uppercase">
              ð…ð¢ð§ðšð¥ ð“ð¡ð¨ð®ð ð¡ð­
            </p>

            <div className="mx-auto mb-12 max-w-2xl">
              <p className="mb-8 text-slate-600">
                You donâ€™t â€œfindâ€ the right field overnight. You build clarity
                step by step:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-black text-[#1A365D] uppercase">
                <span>Awareness</span>{" "}
                <ArrowRight size={14} className="text-[#B8962D]" />
                <span>Exposure</span>{" "}
                <ArrowRight size={14} className="text-[#B8962D]" />
                <span>Experience</span>{" "}
                <ArrowRight size={14} className="text-[#B8962D]" />
                <span>Reflection</span>
              </div>
              <p className="mt-8 font-serif text-2xl text-[#1A365D] italic">
                And only then: Alignment
              </p>
            </div>

            <div className="mb-12 inline-block rounded-full bg-slate-100 p-1">
              <div className="rounded-full border border-slate-200 bg-white px-8 py-3 shadow-sm">
                <span className="text-lg font-black text-[#1A365D]">
                  Careers are not discovered randomly. They are designed
                  deliberately.
                </span>
              </div>
            </div>

            <div className="mx-auto max-w-md">
              <div className="mb-10 rounded-2xl bg-[#1A365D] p-8 text-left text-white">
                <p className="mb-4 text-xs font-bold tracking-widest text-[#B8962D] uppercase">
                  Community Engagement
                </p>
                <p className="text-lg leading-relaxed font-medium">
                  Iâ€™d love to hear from students and professionals: How did you
                  discover your field? Was it planned â€” or accidental?
                </p>
              </div>

              <div className="flex flex-col items-center border-t border-slate-100 pt-8">
                <p className="mb-4 text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Written By
                </p>
                <img
                  src={author.image}
                  alt={author.name}
                  className="mb-3 h-16 w-16 rounded-full border-2 border-[#B8962D]/20 object-cover shadow-lg grayscale transition-all hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ui-avatars.com/api/?name=RV&background=1A365D&color=B8962D";
                  }}
                />
                <h4 className="text-xl font-bold text-[#1A365D]">
                  {author.name}
                </h4>
                <p className="mb-4 text-sm font-medium text-slate-500">
                  {author.position}
                </p>
                <div className="flex gap-4">
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="cursor-pointer transition-colors hover:text-[#B8962D]"
                    />
                  </a>
                  {/* <ExternalLink className="text-slate-300 hover:text-[#B8962D] cursor-pointer" size={20} /> */}
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Article;
