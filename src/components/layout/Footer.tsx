import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-8 text-gray-900 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50 opacity-50 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5">
            <h3 className="text-3xl font-serif font-bold tracking-tight mb-4 text-gray-900">Navora<span className="text-[#CEA72B]">.</span></h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              The premier destination for elite maritime and energy professionals. Elevating recruitment to an art form.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-widest uppercase font-bold text-gray-400 mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li><Link href="/" className="hover:text-[#24439C] transition-colors">Home</Link></li>
              <li><Link href="/jobs" className="hover:text-[#24439C] transition-colors">Access Jobs</Link></li>
              <li><Link href="/blog" className="hover:text-[#24439C] transition-colors">The Journal</Link></li>
              <li><Link href="/admin" className="hover:text-[#CEA72B] transition-colors">Admin Access</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-widest uppercase font-bold text-gray-400 mb-6">Join the Vanguard</h4>
            <p className="text-sm text-gray-500 mb-4">Exclusive opportunities and maritime insights, delivered silently.</p>
            <form className="relative group" action="/api/newsletter" method="POST">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                required 
                className="w-full bg-transparent border-b border-gray-200 px-0 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#24439C] transition-colors"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#24439C] hover:text-[#24439C] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-100 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Navora. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <Link href="#" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
