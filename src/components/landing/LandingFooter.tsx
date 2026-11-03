import { Btn } from './ui'

const cols = [
  { h: 'Company', ls: ['About', 'Projects', 'Team', 'Careers'] },
  { h: 'Services', ls: ['Commercial', 'Residential', 'Renovation', 'Design'] },
  { h: 'Contact', ls: ['+1 555 120 4567', 'info@citycon.com', 'New York, USA'] },
]

export function LandingFooter() {
  return (
    <footer className="px-6 pb-6">
      <div className="relative overflow-hidden rounded-[32px] bg-ink px-14 pt-12 text-ink-foreground">
        <div className="flex items-center justify-between border-b border-ink-foreground/15 pb-10">
          <div>
            <h3 className="text-2xl font-bold">Subscribe Newsletter</h3>
            <p className="text-sm opacity-60">Get the latest updates on our projects.</p>
          </div>
          <div className="flex rounded-full bg-ink-foreground/10 p-1">
            <input
              placeholder="Enter your email"
              className="w-72 bg-transparent px-5 text-sm outline-none"
            />
            <Btn>Subscribe</Btn>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-12 text-sm">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <span className="text-primary">▲</span>Citycon
            </div>
            <p className="mt-4 max-w-xs opacity-60">
              Building the future with quality, safety and innovation since 1998.
            </p>
          </div>
          {cols.map(({ h, ls }) => (
            <div key={h}>
              <p className="font-bold">{h}</p>
              <ul className="mt-4 space-y-2 opacity-60">
                {ls.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="select-none text-center text-[220px] font-extrabold leading-[0.8] opacity-10">
          Citycon
        </p>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-14 py-4 text-xs opacity-60">
          <span>© 2026 Citycon. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  )
}
