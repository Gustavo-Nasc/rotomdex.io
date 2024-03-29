import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

const font = Quicksand({ subsets: ['latin'], weight: ['700', '400'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  )
}
