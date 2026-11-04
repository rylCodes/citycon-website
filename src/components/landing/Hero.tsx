import { Search } from 'lucide-react'
import type { Landing } from '@/payload-types'
import { CmsImage } from './CmsImage'
import { HeroNav } from './HeroNav'
import { Avatars, Btn, container, Stars } from './ui'

export function Hero({ data }: { data: Landing['hero'] }) {
  return (
    <section id="home" className="relative h-190 overflow-hidden rounded-b-[40px]">
      <CmsImage
        media={data.image}
        alt="Construction worker on site"
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/40" />
      <div className={`${container} relative pt-6`}>
        <HeroNav />
        <h1 className="mt-24 max-w-xl text-7xl font-bold leading-[1.05] text-ink-foreground">
          {data.heading}
        </h1>
        <div className="mt-40 flex items-end justify-between text-ink-foreground">
          <div>
            <Btn href="#about">Explore More</Btn>
            {data.subheading && (
              <p className="mt-4 max-w-xs text-sm opacity-80">{data.subheading}</p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm">5.0 Rating</p>
              <Stars />
            </div>
            <Avatars />
          </div>
        </div>
      </div>
    </section>
  )
}
