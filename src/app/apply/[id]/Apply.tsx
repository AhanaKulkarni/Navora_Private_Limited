"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-phone-number-input/style.css";
import { E164Number } from "libphonenumber-js";

// Prevent SSR issues
const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
});

type Job = {
  id: string;
  title: string;
  department: string | null;
  location: string;
  type: string | null;
  description: string;
};

export default function Apply({ job }: { job: Job }) {
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [previousEmployment, setPreviousEmployment] = useState<"yes" | "no">("no");
  const imageUrl = "/hero-background.jpg";

  return (
    <div className="flex min-h-screen w-full flex-col font-sans">
      <div
        className="relative flex min-h-[300px] w-full items-center justify-start bg-cover bg-center md:min-h-[400px]"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
        <div className="relative z-10 w-full px-6 pt-20 md:px-16 md:pt-0">
          <div className="flex w-full flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
              {job.title}
            </h1>
            <p className="max-w-2xl text-base font-light text-white md:text-xl">
              {job.department ? `${job.department} - ` : ''}
              {job.location} - {job.type || 'Permanent'}
            </p>
          </div>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center p-6 py-12 md:p-12">
        <div className="mb-8 flex w-full flex-col gap-4 border-b border-gray-200 pb-8 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Submit Your Application
          </h2>
          <p className="text-gray-500">
            Please fill out the form below to apply for the{" "}
            <span className="font-semibold text-gray-800">
              {job.title}
            </span>{" "}
            position.
          </p>
        </div>

        <form
          action="https://formsubmit.co/roohi@maritimesolutionsltd.com"
          method="POST"
          encType="multipart/form-data"
          className="flex w-full flex-col gap-6"
        >
          <input type="hidden" name="_subject" value={`New Application for ${job.title}`} />
          <input type="hidden" name="_next" value="https://navora-private-limited.vercel.app/jobs" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          
          <input type="hidden" name="Job Title" value={job.title} />
          <input type="hidden" name="Job Location" value={job.location} />
          
          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Full Name<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-400 focus:ring-0 focus:outline-none md:w-2/3"
            />
          </div>

          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Email Address<span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-400 focus:ring-0 focus:outline-none md:w-2/3"
            />
          </div>

          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Phone Number<span className="text-red-500">*</span>
            </p>
            <div className="w-full md:w-2/3">
              <PhoneInput
                international
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                className="PhoneInput w-full rounded-md border border-gray-300 px-4 py-2"
              />
              <input type="hidden" name="phone" value={phone || ""} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Upload Your Resume<span className="text-red-500">*</span>
            </p>
            <div className="flex w-full flex-col gap-1 md:w-2/3">
              <input
                type="file"
                name="attachment"
                accept=".pdf,.doc,.docx"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 file:cursor-pointer file:rounded-md file:border-0 file:bg-[#071A27] file:px-4 file:py-2 file:text-white hover:file:bg-[#0B2B3E] focus:border-gray-400 focus:ring-0 focus:outline-none"
              />
              <p className="text-sm text-gray-400">
                Accepted formats: PDF, DOC, DOCX. Max size: 5MB
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              How Did You Hear About Us?
            </p>
            <select
              name="source"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-gray-400 focus:ring-0 focus:outline-none md:w-2/3"
            >
              <option value="" disabled hidden>
                Please select
              </option>
              <option value="linkedin">LinkedIn</option>
              <option value="company-website">Company Website</option>
              <option value="referral">Employee Referral</option>
              <option value="job-portal">Job Portal</option>
              <option value="social-media">Social Media</option>
              <option value="recruiter">Recruiter</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="w-full text-left font-light text-gray-500 md:w-1/3 md:text-right">
              Employed through Navora in the past?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex w-full flex-col gap-2 md:w-2/3">
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="previousEmployment"
                    value="yes"
                    className="accent-[#071A27]"
                    checked={previousEmployment === "yes"}
                    onChange={() => setPreviousEmployment("yes")}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="previousEmployment"
                    value="no"
                    className="accent-[#071A27]"
                    checked={previousEmployment === "no"}
                    onChange={() => setPreviousEmployment("no")}
                  />
                  No
                </label>
              </div>
              {previousEmployment === "yes" && (
                <input
                  type="text"
                  name="previousDetails"
                  placeholder="Please specify your previous role or period"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 md:w-1/2"
                  required
                />
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 h-4 w-4 accent-[#071A27]"
              />
              <span className="text-sm text-gray-600">
                I agree to receive recruitment-related communications from
                Navora. I understand that my
                personal information will be processed in accordance with the{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#071A27] underline"
                >
                  Recruitment and Applicant Privacy Policy
                </a>
                , and I may opt out at any time.
              </span>
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-[#071A27] hover:bg-[#0B2B3E] px-6 py-3 font-semibold text-white transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
