"use client";

import { useState } from "react";
import { login } from "../actions";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const res = await login(formData);
    if (res?.error) {
      setError(res.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-28">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-slate-100">
        <h1 className="text-2xl font-bold text-center text-[#24439C] mb-6">Admin Portal Login</h1>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              name="password" 
              required 
              
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEA72B]"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#24439C] hover:bg-[#1a3070] text-white font-medium py-2 rounded-lg transition-colors mt-2"
          >
            Sign In
          </button>
        </form>
        
      </div>
    </div>
  );
}
