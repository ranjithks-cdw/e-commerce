import type { Metadata } from 'next'
import './globals.css'
import Header from '@/shared/components/header/Header'
import Footer from '@/shared/components/footer/Footer'

export const metadata: Metadata = {
  title: 'Next Commerce',
  description: 'Next Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  )
}
