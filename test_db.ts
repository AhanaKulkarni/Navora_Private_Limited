import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const jobs = await prisma.job.findMany()
  console.log('JOBS:', jobs)
  
  const testimonials = await prisma.testimonial.findMany()
  console.log('TESTIMONIALS:', testimonials)
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
