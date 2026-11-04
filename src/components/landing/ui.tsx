import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'

export const container = 'mx-auto max-w-300 px-6'

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
    <span className="h-px w-6 bg-primary" />
    {children}
  </p>
)

const btnCls =
  'inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 text-sm font-semibold text-primary-foreground'

export function Btn({
  children = 'Get Started',
  href,
  onClick,
  icon,
}: {
  children?: ReactNode
  href?: string
  onClick?: () => void
  icon?: ReactNode
}) {
  const resolvedIcon = icon === undefined ? <ArrowUpRight size={14} /> : icon
  const hasIcon = resolvedIcon !== null && resolvedIcon !== false
  const className = `${btnCls} ${hasIcon ? 'pr-2' : 'pr-5'}`
  const inner = (
    <>
      {children}
      {hasIcon && (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-ink-foreground">
          {resolvedIcon}
        </span>
      )}
    </>
  )
  return href ? (
    <Link href={href} className={className} onClick={onClick}>
      {inner}
    </Link>
  ) : (
    <button type="button" className={className} onClick={onClick}>
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
