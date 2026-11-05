'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import type { Landing } from '@/payload-types'
import { CmsImage } from './CmsImage'
import { Btn, container } from './ui'

export function Hero({ data }: { data: Landing['hero'] }) {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-170 h-[98svh] max-h-225 overflow-hidden rounded-b-[28px] sm:rounded-b-[40px]"
    >
      <motion.div style={{ y }} className="absolute top-[-10%] left-0 right-0 h-[125%] w-full">
        <CmsImage
          media={data.image}
          alt="Construction worker on site"
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/40 z-0" />

      <div
        className={`${container} relative z-10 flex flex-col justify-center h-full pb-6 pt-12 md:pt-6`}
      >
        <h1 className="max-w-160 text-6xl font-bold leading-[1.05] text-ink-foreground md:text-7xl">
          {data.heading ? (
            data.heading
          ) : (
            <>
              <span className="block text-[2.5rem] leading-4 md:text-6xl md:leading-none">
                Reliable Capa<span className="text-primary">city</span>,
              </span>
              <span className="text-[2.5rem] md:text-6xl md:leading-none">
                Quality <span className="text-primary">Con</span>struction
              </span>
            </>
          )}
        </h1>

        <div className="mt-4 flex flex-col items-start justify-between text-ink-foreground md:flex-row md:items-end md:gap-0">
          <div>
            {data.subheading && (
              <p className="mt-2 mb-6 max-w-md text-sm opacity-80">{data.subheading}</p>
            )}
            <Btn href="/#services">
              <span className="text-sm">EXPLORE MORE</span>
            </Btn>
          </div>

          <div className="mt-8 flex items-center gap-2.5 text-ink-foreground/80 self-start md:mt-12 md:self-auto md:rounded-full md:border md:border-white/10 md:bg-ink/30 md:px-4 md:py-2 md:backdrop-blur-md">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary md:h-8 md:w-8 md:bg-primary md:text-ink">
              <ShieldCheck className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </div>
            <div>
              <p className="text-xs font-medium text-ink-foreground sm:text-sm md:font-semibold">
                Fully Licensed & Insured
              </p>
              <p className="hidden text-xs text-ink-foreground/70 md:block">
                Safety & Compliance Verified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
