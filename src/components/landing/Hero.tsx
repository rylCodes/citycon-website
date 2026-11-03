import { Menu, Search } from 'lucide-react'
import type { Landing } from '@/payload-types'
import { CmsImage } from './CmsImage'
import { Avatars, Btn, container, Stars } from './ui'

const links = [
  ['Home', '#'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Pages', '#faq'],
  ['Contact', '#contact'],
]

export function Hero({ data }: { data: Landing['hero'] }) {
  return (
    <section className="relative h-[760px] overflow-hidden rounded-b-[40px]">
      <CmsImage
        media={data.image}
        alt="Construction worker on site"
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/40" />
      <div className={`${container} relative pt-6`}>
        <nav className="flex items-center justify-between rounded-full bg-ink/70 px-5 py-3 text-ink-foreground backdrop-blur">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="text-primary">▲</span>Citycon
          </div>
          <ul className="flex gap-8 text-sm">
            {links.map(([l, href]) => (
              <li key={l}>
                <a href={href}>{l}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Search size={18} />
            <Btn href="#contact">Get A Quote</Btn>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground">
              <Menu size={16} />
            </span>
          </div>
        </nav>
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
