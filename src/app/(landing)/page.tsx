import config from '@payload-config'
import { getPayload } from 'payload'
import { About } from '@/components/landing/About'
import { Contact } from '@/components/landing/Contact'
import { Faq } from '@/components/landing/Faq'
import { Hero } from '@/components/landing/Hero'
import { Logos } from '@/components/landing/Logos'
import { Marquee } from '@/components/landing/Marquee'
import { News } from '@/components/landing/News'
import { Projects } from '@/components/landing/Projects'
import { Services } from '@/components/landing/Services'
import { Stats } from '@/components/landing/Stats'
import { Testimonial } from '@/components/landing/Testimonial'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const [landing, projects] = await Promise.all([
    payload.findGlobal({ slug: 'landing', depth: 1 }),
    payload.find({
      collection: 'projects',
      depth: 1,
      pagination: false,
      sort: 'order',
      where: { featured: { equals: true } },
    }),
  ])

  return (
    <div className="bg-background font-sans text-foreground">
      <Hero data={landing.hero} />
      <About data={landing.about} />
      <Services services={landing.services ?? []} />
      <Projects projects={projects.docs} />
      <Testimonial data={landing.testimonial} />
      <Stats stats={landing.stats ?? []} />
      <Faq data={landing.faq} />
      <Logos />
      <Contact />
      <Marquee />
      <News />
    </div>
  )
}
