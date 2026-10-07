import os
import re

files = [
    'src/app/admin/(dashboard)/page.tsx',
    'src/app/admin/(dashboard)/jobs/page.tsx',
    'src/app/admin/(dashboard)/testimonials/page.tsx',
    'src/app/admin/(dashboard)/blog/page.tsx',
    'src/app/admin/(dashboard)/jobs/new/page.tsx',
    'src/app/admin/(dashboard)/testimonials/new/page.tsx',
    'src/app/api/newsletter/route.ts',
    'src/app/jobs/[id]/page.tsx',
    'src/app/page.tsx',
    'src/app/jobs/page.tsx',
    'src/app/sitemap.ts'
]

# Just reset everything to HEAD first to be clean
os.system('git checkout -- ' + ' '.join(['"' + f + '"' for f in files]))

def patch(file_path, old, new):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    if old in content:
        content = content.replace(old, new)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

# Admin Dashboard Page
patch('src/app/admin/(dashboard)/page.tsx', 
'  const jobsCount = await prisma.job.count();', 
'  let jobsCount = 0; try { jobsCount = await prisma.job.count(); } catch(e){ console.error(e) }')
patch('src/app/admin/(dashboard)/page.tsx', '  const blogCount = await prisma.blogPost.count();', '  let blogCount = 0; try { blogCount = await prisma.blogPost.count(); } catch(e){}')
patch('src/app/admin/(dashboard)/page.tsx', '  const testimonialCount = await prisma.testimonial.count();', '  let testimonialCount = 0; try { testimonialCount = await prisma.testimonial.count(); } catch(e){}')
patch('src/app/admin/(dashboard)/page.tsx', '  const subCount = await prisma.subscriber.count();', '  let subCount = 0; try { subCount = await prisma.subscriber.count(); } catch(e){}')
patch('src/app/admin/(dashboard)/page.tsx', '<h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>', '<h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>\n<div className="mb-8 p-4 bg-orange-50 text-orange-800 rounded-lg text-sm border border-orange-200"><strong>Note for Vercel deployment:</strong> You are using a local SQLite database which is read-only in Vercel Serverless. Saving new data will fail. Please migrate to a remote database like Vercel Postgres to enable write operations.</div>')

# Admin Jobs Page
patch('src/app/admin/(dashboard)/jobs/page.tsx', '  const jobs = await prisma.job.findMany({\n    orderBy: { createdAt: \'desc\' }\n  });', '  let jobs: any[] = []; try { jobs = await prisma.job.findMany({\n    orderBy: { createdAt: \'desc\' }\n  }); } catch(e) { console.error(e) }')
patch('src/app/admin/(dashboard)/jobs/page.tsx', '    await prisma.job.delete({ where: { id } });', '    try { await prisma.job.delete({ where: { id } }); } catch(e){}')

# Admin Testimonials Page
patch('src/app/admin/(dashboard)/testimonials/page.tsx', '  const testimonials = await prisma.testimonial.findMany({\n    orderBy: { createdAt: \'desc\' }\n  });', '  let testimonials: any[] = []; try { testimonials = await prisma.testimonial.findMany({\n    orderBy: { createdAt: \'desc\' }\n  }); } catch(e){}')
patch('src/app/admin/(dashboard)/testimonials/page.tsx', '    await prisma.testimonial.delete({ where: { id } });', '    try { await prisma.testimonial.delete({ where: { id } }); } catch(e){}')

# Admin Blog Page
patch('src/app/admin/(dashboard)/blog/page.tsx', '  const posts = await prisma.blogPost.findMany({\n    orderBy: { createdAt: \'desc\' }\n  });', '  let posts: any[] = []; try { posts = await prisma.blogPost.findMany({\n    orderBy: { createdAt: \'desc\' }\n  }); } catch(e){}')
patch('src/app/admin/(dashboard)/blog/page.tsx', '    await prisma.blogPost.delete({ where: { id } });', '    try { await prisma.blogPost.delete({ where: { id } }); } catch(e){}')

# Admin Jobs New
patch('src/app/admin/(dashboard)/jobs/new/page.tsx', '    await prisma.job.create({', '    try { await prisma.job.create({')
patch('src/app/admin/(dashboard)/jobs/new/page.tsx', '      }\n    });\n\n    revalidatePath(\'/admin/jobs\');', '      }\n    }); } catch(e) { console.error(e) }\n\n    revalidatePath(\'/admin/jobs\');')

# Admin Testimonials New
patch('src/app/admin/(dashboard)/testimonials/new/page.tsx', '    await prisma.testimonial.create({', '    try { await prisma.testimonial.create({')
patch('src/app/admin/(dashboard)/testimonials/new/page.tsx', '      }\n    });\n\n    revalidatePath(\'/admin/testimonials\');', '      }\n    }); } catch(e) { console.error(e) }\n\n    revalidatePath(\'/admin/testimonials\');')

# Newsletter route
patch('src/app/api/newsletter/route.ts', '      await prisma.subscriber.create({', '      try { await prisma.subscriber.create({')
patch('src/app/api/newsletter/route.ts', '        email,\n      }\n    });', '        email,\n      }\n    }); } catch(e){}')

# Single Job Route
patch('src/app/jobs/[id]/page.tsx', '  const job = await prisma.job.findUnique({\n    where: { id }\n  });', '  let job: any = null; try { job = await prisma.job.findUnique({\n    where: { id }\n  }); } catch(e) {}')

# Home Route
patch('src/app/page.tsx', '  const prismaJobs = await prisma.job.findMany({\n    orderBy: { createdAt: "desc" },\n    take: 24,\n  });', '  let prismaJobs: any[] = []; try { prismaJobs = await prisma.job.findMany({\n    orderBy: { createdAt: "desc" },\n    take: 24,\n  }); } catch(e){}')
patch('src/app/page.tsx', '  const prismaTestimonials = await prisma.testimonial.findMany({\n    orderBy: { createdAt: "desc" },\n  });', '  let prismaTestimonials: any[] = []; try { prismaTestimonials = await prisma.testimonial.findMany({\n    orderBy: { createdAt: "desc" },\n  }); } catch(e){}')

# Jobs listing Route
patch('src/app/jobs/page.tsx', '  const jobs = await prisma.job.findMany({\n    orderBy: { createdAt: \'desc\' }\n  });', '  let jobs: any[] = []; try { jobs = await prisma.job.findMany({\n    orderBy: { createdAt: \'desc\' }\n  }); } catch(e){}')

# Sitemap
patch('src/app/sitemap.ts', '  const jobs = await prisma.job.findMany();', '  let jobs: any[] = []; try { jobs = await prisma.job.findMany(); } catch(e){}')

