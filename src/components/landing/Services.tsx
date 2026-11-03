'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { Landing } from '@/payload-types'
import { CmsImage } from './CmsImage'
import { Btn, container, Eyebrow } from './ui'

export function Services({ services }: { services: NonNullable<Landing['services']> }) {
  const [active, setActive] = useState(Math.min(2, services.length - 1))
  const current = services[active]

  return (
    <section id="services" className={container}>
      <div className="grid grid-cols-2 gap-10 rounded-[32px] bg-ink p-14 text-ink-foreground">
        <div>
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold">
            Construction Service
            <br />
            To Our Clients
          </h2>
          <ul className="mt-10 space-y-3">
            {services.map((s, i) => (
              <li
                key={s.id ?? i}
                onClick={() => setActive(i)}
                className={`flex cursor-pointer items-center justify-between rounded-full px-6 py-3 text-sm ${
                  i === active
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-ink-foreground/15'
                }`}
              >
                {s.title}
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full ${
                    i === active ? 'bg-background text-foreground' : 'bg-ink-foreground/10'
                  }`}
                >
                  <ArrowUpRight size={14} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="relative">
            <CmsImage
              media={current?.image}
              alt={current?.title}
              sizes="50vw"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-4 right-4">
              <Btn>View More</Btn>
            </div>
          </div>
          <h3 className="mt-6 text-2xl font-bold">{current?.title}</h3>
          <p className="mt-2 text-sm opacity-70">{current?.description}</p>
        </div>
      </div>
    </section>
  )
}
