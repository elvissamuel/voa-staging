import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
// import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Voice of Africa',
  description: 'Created with Voice of Africa',
  generator: 'Voice of Africa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
