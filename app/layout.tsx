import Footer from '@/components/templates/footer'
import Header from '@/components/templates/header'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucero • Lua Framework",
  description: "An open-source app/web development framework for Solar2D SDK.",
  icons: "/favicon.svg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        <Analytics />
      </body>
    </html>
  )
}