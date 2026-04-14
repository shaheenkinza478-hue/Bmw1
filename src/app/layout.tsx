import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BMW Pakistan - Luxury Vehicles | Sheer Driving Pleasure',
  description: 'Experience the ultimate driving machine. Explore our range of luxury vehicles, electric cars, and performance sedans.',
  keywords: 'BMW, luxury cars, electric vehicles, Pakistan, automotive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-bmw-dark text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}