import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Arun D'Sa",
        position: "Technical Superintendent",
        content: "Dear Ms. Roohi Mehta, I would like to sincerely thank you for your continuous support and guidance throughout my recruitment process for the Technical Superintendent position. Your professionalism, encouragement, and dedication have been extremely valuable."
      },
      {
        name: "Anita Sharma",
        position: "Second Officer",
        content: "Clear communication, timely updates, and a team that genuinely cares about seafarers. The recruitment process was incredibly smooth."
      },
      {
        name: "Michael Chen",
        position: "Chief Engineer",
        content: "Navora found me the perfect placement on an LNG vessel. Their attention to detail and understanding of the maritime sector is unmatched."
      },
      {
        name: "Sarah Jenkins",
        position: "Fleet Manager",
        content: "Outstanding recruitment partner. They truly understand what companies are looking for and matched me perfectly with my current role."
      }
    ]
  })
  console.log("Seeded database with testimonials.")
}

main().catch(console.error).finally(() => prisma.$disconnect())
