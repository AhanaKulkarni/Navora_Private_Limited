import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.job.deleteMany()
  await prisma.job.createMany({
    data: [
      {
        title: "Fleet Performance Manager",
        location: "Houston, TX",
        salary: "$130,000 - $150,000",
        department: "MARINE OPERATIONS",
        type: "Permanent",
        description: "Lead vessel efficiency programmes for an international operator investing in lower-carbon technologies and strategic maritime solutions.",
        requirements: "Strong background in marine engineering and vessel performance optimization."
      },
      {
        title: "Marine Superintendent",
        location: "Singapore",
        salary: "$140,000 - $160,000",
        department: "MARINE OPERATIONS",
        type: "Contract",
        description: "Oversee fleet operations, safety compliance, and crew management for a diverse fleet of specialized vessels.",
        requirements: "Master Mariner qualification with extensive shore-based management experience."
      }
    ]
  })
  console.log("Updated jobs to match Figma exactly.")
}

main().catch(console.error).finally(() => prisma.$disconnect())
