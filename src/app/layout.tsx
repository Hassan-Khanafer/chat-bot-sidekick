import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/globals.css'
import { APP_CONFIG } from '@/app/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  keywords: ['e-commerce', 'books', 'AI chatbot', 'recommendations'],
  authors: [{ name: 'Chat Bot Sidekick Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-off-white min-h-screen`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
