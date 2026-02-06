import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// 1. 引入刚才写的组件
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Cloud Space',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. 把 Navbar 放在 children 上面 */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}