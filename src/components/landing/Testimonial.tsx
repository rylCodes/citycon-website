import type { Landing } from '@/payload-types'
import { Avatars, Btn, container, Stars } from './ui'

export function Testimonial({ data }: { data?: Landing['testimonial'] }) {
  if (!data) return null

  return (
    <section className={`${container} relative py-24`}>
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full border-[40px] border-surface" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm font-semibold">5.0 Rating</p>
            <Stars />
          </div>
          <Avatars />
          <p className="text-xs text-muted-foreground">
            Trusted by
            <br />
            2k+ Happy Clients
          </p>
        </div>
        <Btn>View More</Btn>
      </div>
      <p className="relative mt-10 max-w-3xl text-2xl font-semibold leading-snug">
        &ldquo;{data.quote}&rdquo;
      </p>
      <p className="mt-6 font-bold">{data.name}</p>
      <p className="text-sm text-muted-foreground">{data.role}</p>
    </section>
  )
}
