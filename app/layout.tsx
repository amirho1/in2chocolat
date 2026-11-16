import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ایندو بازار | لباس زیر زنانه، لانژری و لباس خواب',
  description: 'انتخابی برای خودِ شما. خرید لباس زیر زنانه، لباس خواب، بادی و ست زنانه در ایندو بازار، با راهنمای سایز و بسته‌بندی محرمانه.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://in2bazar.com/' },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#b71c2c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="light" data-brand="bazar">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
