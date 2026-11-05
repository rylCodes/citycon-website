import footerBackground from '@/assets/footer-background.jpeg'
import cityconLogo from '@/assets/citycon-logo.webp'
import Link from 'next/link'
import Image from 'next/image'
import { Btn } from './landing/ui'

const cols = [
  { h: 'Company', ls: ['About', 'Projects', 'Team', 'Careers'] },
  { h: 'Services', ls: ['Commercial', 'Residential', 'Renovation', 'Design'] },
  {
    h: 'Contact',
    ls: ['(+63) 977-382-0787', 'cityconbuilder@gmail.com', 'Valley Golf, Cainta, Rizal'],
  },
]

export function GlobalFooter() {
  return (
    <footer className="px-6 pb-6">
      <div className="relative overflow-hidden rounded-4xl bg-ink px-14 pt-12 text-ink-foreground">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url(${footerBackground.src})` }}
        />
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between border-b border-ink-foreground/15 pb-10">
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

        <div className="relative z-10 grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-12 text-sm">
          <div>
            <Link
              href="/"
              aria-label="Citycon home"
              className="relative flex w-38 items-center space-x-2"
            >
              <Image src={cityconLogo} alt="Citycon" className="h-12 w-auto" />
              <span className="absolute bottom-1.5 translate-x-11 text-[0.625rem]">
                Construction Services
              </span>
            </Link>
            <p className="mt-4 max-w-xs opacity-60">
              Reliable capacity, quality construction. Your trusted partner in construction services
              since 2017.
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

        <p className="relative z-10 select-none text-center text-[220px] font-extrabold leading-[0.8] opacity-10">
          Citycon
        </p>

        <div className="relative z-10 flex justify-between px-14 py-4 text-xs opacity-60 border-t border-ink-foreground/10 mt-4">
          <span>© {new Date().getFullYear()} Citycon. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  )
}
