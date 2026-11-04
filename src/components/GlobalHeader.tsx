'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import cityconLogo from '@/assets/citycon-logo.webp'
import { Btn } from './landing/ui'

const links = [
  ['Home', '/'],
  ['About', '/#about'],
  ['Services', '/#services'],
  ['Projects', '/#projects'],
  ['Contact', '/#contact'],
]

const linkClass =
  'block w-full rounded-md px-4 py-2 text-center transition-colors hover:bg-white/10 hover:text-primary md:inline-block md:w-auto md:px-2 md:py-1 md:hover:bg-transparent'

export function GlobalHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 pt-6">
      <nav className="relative mx-auto flex max-w-300 items-center justify-between rounded-full bg-ink/70 px-5 py-3 text-ink-foreground backdrop-blur">
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
        <ul className="hidden gap-2 text-sm md:flex lg:gap-8">
          {links.map(([label, href]) => (
            <li key={label}>
              <Link href={href} className={linkClass}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Btn href="/#contact">GET A QUOTE</Btn>
          </div>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="global-mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
        {isOpen && (
          <div
            id="global-mobile-menu"
            className="absolute left-0 right-0 top-full z-10 mt-3 rounded-3xl bg-ink/95 p-6 text-ink-foreground shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-stretch gap-2 text-sm">
              {links.map(([label, href]) => (
                <li key={label} className="w-full">
                  <Link href={href} className={linkClass} onClick={() => setIsOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
              <Btn href="/#contact" onClick={() => setIsOpen(false)}>
                GET A QUOTE
              </Btn>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
