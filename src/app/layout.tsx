import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReviewGen - AI-Powered Social Media Review Generator',
  description: 'Generate realistic social media reviews with AI-powered content and authentic platform styling. Perfect for mockups, presentations, and educational purposes.',
  keywords: ['review generator', 'social media', 'mockup', 'fake reviews', 'educational'],
  authors: [{ name: 'ReviewGen' }],
  openGraph: {
    title: 'ReviewGen - AI-Powered Social Media Review Generator',
    description: 'Generate realistic social media reviews with AI-powered content and authentic platform styling.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}