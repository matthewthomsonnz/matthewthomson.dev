import './global.css'
import type { Metadata } from 'next'
import { Inconsolata} from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import {ViewTransitions} from "next-view-transitions";

const inconsolata = Inconsolata({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Senior front-end developer - Matthew Thomson',
    template: '%s | Matthew Thomson Senior front-end developer',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Matthew Thomson',
    description: 'Senior front-end developer',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ViewTransitions>
    <html
      lang="en"
      className={cx(
        `text-black dark:text-white bg-sunshine-light ${inconsolata.className}`,
      )}
    >
      <body className="antialiased">
        <main className="flex-auto min-w-0 flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
      </ViewTransitions>
  )
}
