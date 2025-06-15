import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carnama - Car Management App',
  description: 'Your all-in-one solution for efficient vehicle management',
  icons: {
    icon: [
      {
        url: '/images/carnama-favicon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/carnama-favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/images/carnama-favicon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/carnama-favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
} 