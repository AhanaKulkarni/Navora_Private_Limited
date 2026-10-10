import os

layout_content = """import type { Metadata, Viewport } from "next";
import { DM_Sans, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navora-components/Navbar";
import Footer from "@/components/navora-components/Footer";
import Chatbot from "@/components/Chatbot";

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: '--font-cormorant' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: '--font-ibm-plex' });

export const viewport: Viewport = {
  themeColor: "#071A27",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Navora | Elite Maritime & Energy Recruitment",
    template: "%s | Navora"
  },
  description: "Navora provides elite recruitment and comprehensive solutions for the global maritime, shipping, and energy sectors. Connecting world-class professionals with premium opportunities.",
  keywords: ["Maritime recruitment", "Shipping jobs", "Energy sector careers", "Naval Architect jobs", "Chief Engineer vacancies", "Offshore wind jobs", "Maritime staffing", "Navora", "Maritime Solutions"],
  authors: [{ name: "Navora Private Limited" }],
  creator: "Navora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://navora-private-limited.vercel.app/",
    title: "Navora | Elite Maritime & Energy Recruitment",
    description: "Navora provides elite recruitment and comprehensive solutions for the global maritime, shipping, and energy sectors.",
    siteName: "Navora",
    images: [{
      url: "/hero-bg.jpg",
      width: 1200,
      height: 630,
      alt: "Navora Careers Portal"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navora | Elite Maritime & Energy Recruitment",
    description: "Connecting world-class professionals with premium maritime opportunities.",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${cormorant.variable} ${ibmPlexMono.variable}`}>
      <body className={`${dmSans.className} font-sans antialiased flex flex-col min-h-screen selection:bg-[#CE9C5B] selection:text-[#071A27] bg-warm-foam text-[#071A27]`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
"""

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout_content)
