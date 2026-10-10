"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    title: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/roohi@maritimesolutionsltd.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            userType,
            _subject: `New Contact Request from ${formData.firstName} ${formData.lastName}`
        })
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({
            firstName: "", lastName: "", email: "", phone: "", message: "", company: "", title: "", country: "",
        });
        setUserType("");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 bg-warm-foam text-abyss">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl font-heading font-medium mb-4">Connect With Our Team</h2>
          <p className="text-abyss/60 font-sans">Share a few details and our team will reach out shortly.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-sm border border-abyss/10 shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 block">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-abyss/20 py-3 text-abyss focus:outline-none focus:border-brass-signal transition-colors font-sans text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 block">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-abyss/20 py-3 text-abyss focus:outline-none focus:border-brass-signal transition-colors font-sans text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 block">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-abyss/20 py-3 text-abyss focus:outline-none focus:border-brass-signal transition-colors font-sans text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-abyss/20 py-3 text-abyss focus:outline-none focus:border-brass-signal transition-colors font-sans text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 block">Who are you?</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
              className="w-full bg-transparent border-b border-abyss/20 py-3 text-abyss focus:outline-none focus:border-brass-signal transition-colors font-sans text-sm appearance-none"
            >
              <option value="" disabled>Select an option</option>
              <option value="Candidate">I am a Candidate</option>
              <option value="Client">I am an Employer/Client</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {userType === "Client" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in zoom-in duration-300">
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 block">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-abyss/20 py-3 text-abyss focus:outline-none focus:border-brass-signal transition-colors font-sans text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 block">Job Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-abyss/20 py-3 text-abyss focus:outline-none focus:border-brass-signal transition-colors font-sans text-sm"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-widest uppercase text-abyss/60 block">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-abyss/20 py-3 text-abyss focus:outline-none focus:border-brass-signal transition-colors font-sans text-sm resize-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-abyss text-warm-foam hover:bg-abyss/90 py-4 font-sans text-sm font-medium tracking-wide transition-colors flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
            </button>
          </div>

          {success && (
            <div className="mt-6 p-4 bg-brass-signal/10 border border-brass-signal/30 text-abyss rounded-sm text-center font-sans text-sm">
              Thank you for reaching out. We will get back to you shortly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
