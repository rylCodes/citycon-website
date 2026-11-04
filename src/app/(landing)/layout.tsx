import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GlobalHeader } from '@/components/GlobalHeader'
import '../(frontend)/globals.css'

export const metadata: Metadata = {
  title: 'Citycon — Your Trusted Construction Partner',
  description: 'Commercial, residential and structural construction services by Citycon.',
  openGraph: {
    title: 'Citycon — Your Trusted Construction Partner',
    description: 'Commercial, residential and structural construction services by Citycon.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={GeistSans.variable} suppressHydrationWarning>
      <body>
        <GlobalHeader />
        {children}
      </body>
    </html>
  )
}
