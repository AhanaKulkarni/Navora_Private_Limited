import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const viewport: Viewport = {
  themeColor: "#1F3C8B",
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "Navora Private Limited",
  "image": "https://navora-private-limited.vercel.app/hero-bg.jpg",
  "description": "Elite maritime, shipping, and energy recruitment agency connecting top-tier professionals with premium global roles.",
  "url": "https://navora-private-limited.vercel.app/",
  "areaServed": "Worldwide",
  "industry": "Maritime and Energy Recruitment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased flex flex-col min-h-screen selection:bg-[#CEA72B] selection:text-[#0d1c47] bg-white`}>
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
