import { container } from './ui'

export function Logos() {
  return (
    <section className={`${container} pb-24`}>
      <div className="flex items-center justify-between border-y border-border py-10 text-xl font-bold text-muted-foreground">
        {['◎ BUILDCO', 'GORRILLA', '◇ ESTATE', '▲ PEAK', '⌂ HOMEX', '✺ CORE'].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <span className="rounded-full border border-border px-5 py-2 text-xs">
          Over 1k+ companies trust our construction services
        </span>
      </div>
    </section>
  )
}
