import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const articles = [
  {
    title: "The Future of Maritime Talent: Navigating the Changing Tides",
    summary: "An in-depth look at how the maritime industry is evolving and what it means for recruitment and career development in the coming decade.",
    link: "https://lnkd.in/d5uT9tpu",
    date: "Sep 2026",
    tag: "Industry Trends"
  },
  {
    title: "Building a Resilient Career at Sea",
    summary: "Key strategies for maritime professionals to build resilience and adapt to new technologies like automation and green shipping.",
    link: "https://lnkd.in/gSKeTkNi",
    date: "Aug 2026",
    tag: "Career Advice"
  },
  {
    title: "The Impact of ESG on Maritime Hiring",
    summary: "How Environmental, Social, and Governance (ESG) goals are reshaping the skills in demand across the global shipping sector.",
    link: "https://lnkd.in/gxHBrCVS",
    date: "Jul 2026",
    tag: "Market Insights"
  },
  {
    title: "Transitioning from Sea to Shore: A Guide",
    summary: "A comprehensive guide for seafarers looking to transition into shore-based roles, highlighting the most sought-after transferable skills.",
    link: "https://lnkd.in/eVpQSV6c",
    date: "Jun 2026",
    tag: "Career Advice"
  },
  {
    title: "Embracing Diversity in the Maritime Sector",
    summary: "Exploring the steps the industry is taking to foster a more inclusive and diverse workforce, and the benefits it brings to organizational success.",
    link: "https://lnkd.in/gzky28ZM",
    date: "May 2026",
    tag: "Diversity & Inclusion"
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-warm-foam text-abyss pt-32 pb-24 font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-medium tracking-tight mb-6">
            Insights & Articles
          </h1>
          <p className="text-xl text-abyss/70 max-w-2xl font-accent italic">
            Read our latest thoughts, market insights, and career advice for the maritime and energy sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="group bg-white p-8 rounded-sm shadow-sm border border-abyss/5 hover:border-brass-signal/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brass-signal">
                  {article.tag}
                </span>
                <span className="text-xs text-abyss/40 font-mono">
                  {article.date}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-medium mb-4 group-hover:text-brass-signal transition-colors">
                {article.title}
              </h3>
              <p className="text-abyss/70 text-sm leading-relaxed mb-8 flex-grow">
                {article.summary}
              </p>
              <div className="flex items-center text-sm font-medium text-abyss/60 group-hover:text-brass-signal transition-colors mt-auto">
                Read Article
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
