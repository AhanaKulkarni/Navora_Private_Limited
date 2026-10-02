import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "Master Mariner (LNG)",
        location: "Rotterdam, Netherlands",
        salary: "$140,000 - $160,000",
        description: "We are seeking a highly experienced Master Mariner for our new fleet of LNG carriers.",
        requirements: "Master Unlimited license, min 3 years in rank on LNG."
      },
      {
        title: "Chief Engineer - Offshore Wind",
        location: "Aberdeen, Scotland",
        salary: "£90,000 - £110,000",
        description: "Lead engineering operations on state-of-the-art offshore wind installation vessels.",
        requirements: "Chief Engineer Unlimited, DP maintenance, HV certificate."
      },
      {
        title: "Fleet Operations Director",
        location: "Singapore",
        salary: "$180,000+",
        description: "Direct global fleet operations from our Asia-Pacific headquarters.",
        requirements: "10+ years shore-based management, sailed as Master."
      }
    ]
  })
  console.log("Seeded database with dummy jobs.")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
