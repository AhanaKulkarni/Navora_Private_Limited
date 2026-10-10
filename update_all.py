# -*- coding: utf-8 -*-
import re

testimonials = [
  {
    "name": "Arun D'Sa",
    "position": "Technical Superintendent",
    "content": "Dear Ms. Roohi Mehta, I would like to sincerely thank you for your continuous support and guidance throughout my recruitment process for the Technical Superintendent position. Your professionalism, encouragement, and dedication have been extremely valuable."
  },
  {
    "name": "Hemant Arya",
    "position": "Master",
    "content": "Thank you once again for your unwavering support and encouragement. I look forward to staying connected and will always recommend you and Navora (MSL) with complete confidence and respect."
  },
  {
    "name": "Zeeshan",
    "position": "Technical - Data Manager",
    "content": "I am writing to express my sincere gratitude and appreciation for the exceptional support I received from Ms. Roohi Mehta throughout the interview process for the position of Technical - Data Manager. She went well above and beyond her responsibilities."
  },
  {
    "name": "Pooja Rajput",
    "position": "Program Manager",
    "content": "The overall process was highly considerate and respectful of the candidate's time. Regular and timely updates provided to the candidate. Motivation and encouragement shared prior to each interview round."
  },
  {
    "name": "Farhathul Afrah",
    "position": "Candidate",
    "content": "From the very first resume screening, you've been approachable, encouraging, and extremely helpful. Your clear communication and reassuring attitude made the process smooth and comfortable for me."
  },
  {
    "name": "K Boopathi",
    "position": "Candidate",
    "content": "Working with you has been a very positive experience. Everyone I interacted with was incredibly kind and professional throughout the process. I truly appreciate the support and the seamless communication."
  },
  {
    "name": "Piyush Jain",
    "position": "Sr. Solution Architect",
    "content": "It has been a genuinely professional and well-managed experience. You've been clear, structured, and detail-oriented at every stage, while also being approachable and respectful in your communication."
  },
  {
    "name": "Amit Kumar",
    "position": "Training Superintendent",
    "content": "I would like to share my appreciation for the excellent support provided throughout the recruitment process. The entire experience was smooth and well-coordinated, and everything was taken care of professionally."
  }
]

jobs = [
  {
    "id": "cmv2am3ny0000chx01yx03ohj",
    "title": "Fleet Performance Manager",
    "department": "MARINE OPERATIONS",
    "location": "Houston, TX",
    "type": "Permanent",
    "salary": "$130,000 - $150,000",
    "description": "Lead vessel efficiency programmes for an international operator investing in lower-carbon technologies and strategic maritime solutions.",
    "requirements": "Strong background in marine engineering and vessel performance optimization."
  },
  {
    "id": "cmv2am3o10001chx0hqe52scb",
    "title": "Marine Superintendent",
    "department": "MARINE OPERATIONS",
    "location": "Singapore",
    "type": "Contract",
    "salary": "$140,000 - $160,000",
    "description": "Oversee fleet operations, safety compliance, and crew management for a diverse fleet of specialized vessels.",
    "requirements": "Master Mariner qualification with extensive shore-based management experience."
  },
  {
    "id": "cmv2am3o10001chx0hqe52scb2",
    "title": "Master Mariner (LNG)",
    "department": "MARINE OPERATIONS",
    "location": "Rotterdam, Netherlands",
    "type": "Permanent",
    "salary": "$140,000 - $160,000",
    "description": "We are seeking a highly experienced Master Mariner for our new fleet of LNG carriers.",
    "requirements": "Master Unlimited license, min 3 years in rank on LNG."
  },
  {
    "id": "cmv2am3o10001chx0hqe52scb3",
    "title": "Chief Engineer - Offshore Wind",
    "department": "ENGINEERING",
    "location": "Aberdeen, Scotland",
    "type": "Permanent",
    "salary": "$90,000 - $110,000",
    "description": "Lead engineering operations on state-of-the-art offshore wind installation vessels.",
    "requirements": "Chief Engineer Unlimited, DP maintenance, HV certificate."
  },
  {
    "id": "cmv2am3o10001chx0hqe52scb4",
    "title": "Fleet Operations Director",
    "department": "MANAGEMENT",
    "location": "Singapore",
    "type": "Permanent",
    "salary": "$180,000+",
    "description": "Direct global fleet operations from our Asia-Pacific headquarters.",
    "requirements": "10+ years shore-based management, sailed as Master."
  }
]

jobs_ts = "  const jobs = [\n"
for j in jobs:
    jobs_ts += f"""    {{
      id: "{j['id']}",
      title: "{j['title']}",
      department: "{j['department']}",
      location: "{j['location']}",
      type: "{j['type']}",
      salary: "{j['salary']}",
      description: "{j['description']}",
      requirements: "{j['requirements']}",
      createdAt: new Date(),
      updatedAt: new Date(),
    }},\n"""
jobs_ts += "  ];\n"

tests_ts = "  let prismaTestimonials = [\n"
for t in testimonials:
    tests_ts += f"""    {{
      name: "{t['name']}",
      position: "{t['position']}",
      content: "{t['content']}"
    }},\n"""
tests_ts += "  ];\n"

with open("src/app/page.tsx", "r", encoding="utf-8") as f:
    page = f.read()

page = re.sub(r"  let prismaJobs = \[.*?\];", jobs_ts.replace("const jobs", "let prismaJobs"), page, flags=re.DOTALL)
page = re.sub(r"  let prismaTestimonials = \[.*?\];", tests_ts, page, flags=re.DOTALL)
with open("src/app/page.tsx", "w", encoding="utf-8") as f:
    f.write(page)

with open("src/app/jobs/page.tsx", "r", encoding="utf-8") as f:
    page = f.read()
page = re.sub(r"  const jobs = \[.*?\];", jobs_ts, page, flags=re.DOTALL)
with open("src/app/jobs/page.tsx", "w", encoding="utf-8") as f:
    f.write(page)
    
with open("src/app/jobs/[id]/page.tsx", "r", encoding="utf-8") as f:
    page = f.read()
page = re.sub(r"  const jobs = \[.*?\];", jobs_ts.replace("id:", "_id:"), page, flags=re.DOTALL)
with open("src/app/jobs/[id]/page.tsx", "w", encoding="utf-8") as f:
    f.write(page)

print("Updated all!")
