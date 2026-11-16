import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { SupportWidget } from '@/components/store/support-widget'
import './globals.css'

const iranYekan = localFont({
  src: './fonts/IRANYekanXVF.woff2',
  variable: '--font-iranyekan',
  weight: '100 1000',
  display: 'swap',
  fallback: ['Tahoma', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'ایندو چاکلت | شکلات، قهوه و خوراکی‌های خارجی',
  description: 'دنیایی از شکلات، قهوه، نوشیدنی و خوراکی‌های خارجی منتخب. خرید تکی، جعبه‌ای و عمده در ایندو چاکلت.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://in2chocolate.com/' },
  icons: { icon: '/images/chocolate/logo-150x150.webp', apple: '/images/chocolate/logo-150x150.webp' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#00a693',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={`light ${iranYekan.variable}`} data-brand="chocolate">
      <body className="antialiased">
        {children}
        <SupportWidget />
        {process.env.NODE_ENV === 'production' && process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
