import React from 'react';
import Link from 'next/link';
import { PlayCircle, Youtube } from 'lucide-react';

const videos = [
  {
    title: "Navigating the Maritime Industry with Leaders",
    summary: "An exclusive conversation uncovering the hidden challenges and triumphs of steering a successful career at sea.",
    videoId: "dQw4w9WgXcQ", 
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    title: "Women in Shipping: Breaking Barriers",
    summary: "Inspiring stories and actionable advice from trailblazing women making waves in the maritime sector.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    title: "The Future of Sustainable Shipping",
    summary: "Experts discuss the transition to green energy and what it means for the next generation of maritime professionals.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  }
];

export default function RendezvousPage() {
  return (
    <div className="min-h-screen bg-warm-foam text-abyss pt-32 pb-24 font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Youtube className="w-8 h-8 text-[#FF0000]" />
              <span className="text-[12px] font-mono tracking-widest uppercase text-brass-signal font-bold">
                Original Series
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-medium tracking-tight mb-6">
              Rendezvous with Roohi
            </h1>
            <p className="text-lg text-abyss/80 leading-relaxed mb-8">
              Rendezvous with Roohi is an exclusive video series where we sit down with industry leaders, visionaries, and seasoned professionals across the maritime and energy sectors. Discover untold stories, gain invaluable career advice, and explore the trends shaping the future of global shipping—all through engaging, candid conversations.
            </p>
            <Link 
              href="https://youtube.com/@rendezvouswithroohi?si=NN9rHswMMePvqTkQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FF0000] hover:bg-[#CC0000] text-white font-medium px-8 py-3.5 rounded-sm text-sm transition-colors shadow-lg"
            >
              Subscribe on YouTube
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-full min-h-[300px] relative rounded-lg overflow-hidden shadow-2xl">
            <img src="/roohimehta.png" alt="Roohi Mehta" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="border-t border-abyss/10 pt-16">
          <h2 className="text-3xl font-heading font-medium mb-10">Latest Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <a 
                key={index} 
                href={`https://youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-video rounded-md overflow-hidden bg-abyss/5 mb-6 shadow-md">
                  <div className="absolute inset-0 bg-abyss/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all z-20" />
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-xl font-heading font-medium mb-3 group-hover:text-brass-signal transition-colors">
                  {video.title}
                </h3>
                <p className="text-abyss/70 text-sm leading-relaxed">
                  {video.summary}
                </p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
