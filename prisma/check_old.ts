import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasources: { db: { url: "file:./dev.db" } } })
async function main() {
  const jobs = await prisma.job.findMany()
  console.log("OLD JOBS:", jobs)
  const tests = await prisma.testimonial.findMany()
  console.log("OLD TESTS:", tests)
}
main().catch(console.error).finally(()=>prisma.$disconnect())
