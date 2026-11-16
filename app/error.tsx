'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import { storeLink } from '@/lib/store'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="site-container flex min-h-[70vh] flex-col items-center justify-center gap-5 text-center" dir="rtl"><h1 className="text-2xl font-bold">بارگذاری صفحه انجام نشد</h1><p className="text-muted-foreground">دوباره تلاش کنید یا مستقیماً به فروشگاه اصلی بروید.</p><div className="flex flex-wrap justify-center gap-3"><Button onClick={reset}>تلاش دوباره</Button><a href={storeLink('/shop/')} className={buttonVariants({ variant: 'outline' })}>فروشگاه اصلی</a></div></main>
}
