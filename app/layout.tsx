import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '800', '900'] })

export const metadata = {
  title: 'News Homepage',
  description: 'Next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+" "+ "bg-white"}>{children}</body>
    </html>
  )
}
