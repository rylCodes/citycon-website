import type { Landing } from '@/payload-types'
import { CmsImage } from './CmsImage'
import { Btn, container, Eyebrow, Num } from './ui'

export function About({ data }: { data?: Landing['about'] }) {
  if (!data) return null

  return (
    <section id="about" className={`${container} py-28`}>
      <div className="grid grid-cols-[1fr_2fr] gap-10">
        <div>
          <Eyebrow>About Us</Eyebrow>
        </div>
        <h2 className="text-4xl font-bold leading-tight">{data.heading}</h2>
      </div>
      <div className="mt-10 grid grid-cols-[1fr_1.4fr_1fr] gap-8">
        <div className="flex flex-col justify-between">
          <CmsImage
            media={data.image}
            className="h-72 w-full rounded-2xl object-cover"
            sizes="25vw"
          />
          <div className="mt-6">
            <Btn>About More</Btn>
          </div>
        </div>
        <CmsImage
          media={data.image}
          alt="City skyline"
          className="h-[420px] w-full rounded-2xl object-cover object-left"
          sizes="40vw"
        />
        <div className="space-y-6 text-sm">
          <div>
            <h4 className="font-bold">Our Mission</h4>
            <p className="mt-2 text-muted-foreground">{data.mission}</p>
          </div>
          <div>
            <h4 className="font-bold">Our Vision</h4>
            <p className="mt-2 text-muted-foreground">{data.vision}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-6">
            <div className="rounded-2xl bg-surface p-5">
              <p className="text-3xl font-bold">
                <Num value={data.expertWorkers ?? ''} />
              </p>
              <p className="text-xs text-muted-foreground">Expert Workers</p>
            </div>
            <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
              <p className="text-3xl font-bold">{data.projectsDone}</p>
              <p className="text-xs">Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
