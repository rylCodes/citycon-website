import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'

export const container = 'mx-auto max-w-[1200px] px-6'

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
    <span className="h-px w-6 bg-primary" />
    {children}
  </p>
)

const btnCls =
  'inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-semibold text-primary-foreground'

export function Btn({ children = 'Get Started', href }: { children?: ReactNode; href?: string }) {
  const inner = (
    <>
      {children}
      <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-ink-foreground">
        <ArrowUpRight size={14} />
      </span>
    </>
  )
  return href ? (
    <Link href={href} className={btnCls}>
      {inner}
    </Link>
  ) : (
    <button type="button" className={btnCls}>
      {inner}
    </button>
  )
}

export const Circle = ({ dark }: { dark?: boolean }) => (
  <span
    className={`grid h-9 w-9 place-items-center rounded-full ${
      dark ? 'bg-ink text-ink-foreground' : 'bg-primary text-primary-foreground'
    }`}
  >
    <ArrowUpRight size={16} />
  </span>
)

export const Avatars = () => (
  <div className="flex -space-x-2">
    {[0, 1, 2, 3].map((i) => (
      <span
        key={i}
        className="h-8 w-8 rounded-full border-2 border-background bg-muted-foreground/60"
      />
    ))}
  </div>
)

export const Stars = () => (
  <div className="flex text-primary">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} size={14} fill="currentColor" />
    ))}
  </div>
)

/** Renders "85+" with a colored plus */
export const Num = ({ value }: { value: string }) =>
  value.endsWith('+') ? (
    <>
      {value.slice(0, -1)}
      <span className="text-primary">+</span>
    </>
  ) : (
    <>{value}</>
  )
