import type { Landing } from '@/payload-types'
import { container } from './ui'

const offsets = ['mt-16', '', 'mt-10', '']

export function Stats({ stats }: { stats: NonNullable<Landing['stats']> }) {
  return (
    <section className="relative border-y border-border bg-[repeating-linear-gradient(90deg,var(--surface)_0_2px,transparent_2px_60px)] py-20">
      <div className={`${container} flex items-end justify-between`}>
        {stats.map((s, i) => (
          <div key={s.id ?? i} className={offsets[i] ?? ''}>
            <p className="text-5xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
