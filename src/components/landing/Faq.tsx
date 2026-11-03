'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import type { Landing } from '@/payload-types'
import { CmsImage } from './CmsImage'
import { container, Eyebrow } from './ui'

export function Faq({ data }: { data?: Landing['faq'] }) {
  const items = data?.items ?? []
  const [open, setOpen] = useState(Math.min(2, items.length - 1))

  if (!data || items.length === 0) return null

  return (
    <section id="faq" className={`${container} grid grid-cols-2 items-center gap-12 py-24`}>
      <CmsImage
        media={data.image}
        alt="Building under construction with crane"
        sizes="50vw"
        className="w-full"
      />
      <div>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold">
          Regular Question
          <br />
          For Customer
        </h2>
        <div className="mt-8 space-y-3">
          {items.map((f, i) => (
            <div
              key={f.id ?? i}
              onClick={() => setOpen(i)}
              className={`cursor-pointer rounded-2xl px-6 py-4 ${
                i === open ? 'bg-ink text-ink-foreground' : 'border border-border'
              }`}
            >
              <div className="flex items-center justify-between text-sm font-semibold">
                {f.question}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  {i === open ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </div>
              {i === open && <p className="mt-3 text-sm opacity-70">{f.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
