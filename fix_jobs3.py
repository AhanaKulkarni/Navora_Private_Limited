# -*- coding: utf-8 -*-
import re

jobs = [
  {
    "id": "9045EC",
    "title": "SaaS Sales Manager (General)",
    "department": "SALES",
    "location": "Japan / Singapore",
    "type": "Full-Time",
    "salary": "Competitive",
    "description": "Candidates who are legally authorized to work in Singapore and India are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
    "requirements": "Strong sales experience in SaaS, preferably within maritime or tech industries."
  },
  {
    "id": "9045EF",
    "title": "Sales Manager (General)",
    "department": "SALES",
    "location": "Japan",
    "type": "Full-Time",
    "salary": "Competitive",
    "description": "Candidates who are legally authorized to work in Japan are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
    "requirements": "Proven track record in general sales and business development."
  },
  {
    "id": "9045F0",
    "title": "Marine Superintendent (Bulk)",
    "department": "MARINE OPERATIONS",
    "location": "Shanghai, China",
    "type": "Full-Time",
    "salary": "Competitive",
    "description": "Candidates who are legally authorized to work in China are eligible to apply. Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
    "requirements": "Extensive experience as Marine Superintendent on Bulk Carriers."
  },
  {
    "id": "9045F1",
    "title": "Marine Superintendent (Oil & Chemical Tankers)",
    "department": "MARINE OPERATIONS",
    "location": "Chennai, India",
    "type": "Full-Time",
    "salary": "Competitive",
    "description": "You may also apply directly through LinkedIn on the respective job postings.",
    "requirements": "Previous sailing experience as Master on Oil/Chemical Tankers."
  },
  {
    "id": "9045F2",
    "title": "QHSE Superintendent (Oil & Chemical Tankers Marine)",
    "department": "QHSE",
    "location": "Pune, India",
    "type": "Full-Time",
    "salary": "Competitive",
    "description": "You may also apply directly through LinkedIn on the respective job postings.",
    "requirements": "Strong background in Quality, Health, Safety, and Environment for tankers."
  },
  {
    "id": "9045F3",
    "title": "Marine Superintendent (LPG)",
    "department": "MARINE OPERATIONS",
    "location": "Kochi, India",
    "type": "Full-Time",
    "salary": "Competitive",
    "description": "Ready to shape the future of maritime training? Apply now to explore this rewarding opportunity.",
    "requirements": "Specialized experience with LPG vessels and cargo operations."
  },
  {
    "id": "9045F4",
    "title": "QSHE Superintendent (General)",
    "department": "QHSE",
    "location": "Global / Remote",
    "type": "Full-Time",
    "salary": "Competitive",
    "description": "Oversee and implement Quality, Safety, Health and Environment policies across our fleet.",
    "requirements": "Extensive QSHE auditing and management experience."
  },
  {
    "id": "9045F5",
    "title": "Senior Technical Superintendent (Oil & Chemical Tankers)",
    "department": "TECHNICAL",
    "location": "Global",
    "type": "Full-Time",
    "salary": "Competitive",
    "description": "Lead the technical management team for our advanced fleet of Oil & Chemical tankers.",
    "requirements": "Chief Engineer experience with shore-based technical management."
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

def update_file(filepath, replace_var):
    with open(filepath, "r", encoding="utf-8") as f:
        page = f.read()
    if replace_var == "let prismaJobs":
        page = re.sub(r"  let prismaJobs = \[.*?\];", jobs_ts.replace("const jobs", "let prismaJobs"), page, flags=re.DOTALL)
    else:
        if replace_var == "id:":
            page = re.sub(r"  const jobs = \[.*?\];", jobs_ts.replace("id:", "_id:"), page, flags=re.DOTALL)
        else:
            page = re.sub(r"  const jobs = \[.*?\];", jobs_ts, page, flags=re.DOTALL)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(page)

update_file("src/app/page.tsx", "let prismaJobs")
update_file("src/app/jobs/page.tsx", "")
update_file("src/app/jobs/[id]/page.tsx", "id:")

print("Jobs updated!")
