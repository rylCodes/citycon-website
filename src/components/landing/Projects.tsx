import type { Project } from '@/payload-types'
import { CmsImage } from './CmsImage'
import { Circle, container, Eyebrow } from './ui'

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="mt-28 rounded-[40px] bg-surface py-24">
      <div className={container}>
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Our Projects</Eyebrow>
          </div>
          <h2 className="mt-4 text-4xl font-bold">
            We Provide Effective
            <br />
            Solution in Construction
          </h2>
        </div>

        {projects.length === 0 ? (
          <p className="mt-14 text-center text-muted-foreground">No projects yet.</p>
        ) : (
          <div className="mt-14 space-y-8">
            {projects.map((p) => (
              <div key={p.id} className="relative h-[440px] overflow-hidden rounded-[28px]">
                <CmsImage
                  media={p.image}
                  alt={p.title}
                  sizes="1200px"
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute top-1/2 w-80 -translate-y-1/2 rounded-2xl bg-background p-7 ${
                    p.cardPosition === 'right' ? 'right-10' : 'left-10'
                  }`}
                >
                  <p className="text-xs text-primary">
                    {[p.category, p.year].filter(Boolean).join(' • ')}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
                  {p.summary && <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>}
                  <div className="mt-5">
                    <Circle />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
