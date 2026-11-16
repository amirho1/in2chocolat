import Image from 'next/image'
import { ArrowUpLeft, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { storeLink, categoryLink } from '@/lib/store'

export function StoreFooter() {
  return <footer className="mt-6 border-t bg-muted pb-24 lg:pb-0">
    <div className="site-container grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.7fr]">
      <div className="flex flex-col gap-4">
        <a href="/" className="flex items-center gap-2"><Image src="/images/in2bazzr-150x150.webp" width={44} height={44} alt="" /><span className="text-2xl font-bold"><span className="text-primary">ایندو</span> بازار</span></a>
        <p className="max-w-sm text-sm leading-8 text-muted-foreground">فروشگاه اینترنتی لباس زیر زنانه، لانژری، لباس خواب و پوشاک خاص. برای انتخابی آگاهانه، محترمانه و مطمئن.</p>
        <div className="flex gap-2">{[{ icon: Instagram, href: 'https://instagram.com/in2bazar', label: 'اینستاگرام ایندو بازار' },{ icon: Send, href: 'https://t.me/espiral_admin2', label: 'تلگرام پشتیبانی' },{ icon: MessageCircle, href: 'https://wa.me/989374392177', label: 'واتساپ پشتیبانی' }].map(({ icon: Icon, href, label }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex size-11 items-center justify-center rounded-lg border bg-background transition-colors hover:text-primary"><Icon className="size-5" /></a>)}</div>
      </div>
      <div className="flex flex-col gap-2"><h2 className="mb-2 font-semibold">راهنمای ایندو</h2>{[{ title:'فروشگاه',path:'/shop/' },{ title:'حساب کاربری',path:'/panel' },{ title:'روش‌های ارسال',path:'/indo-shipping-methods/' },{ title:'قوانین مرجوعی',path:'/return-policy' },{ title:'درباره ما',path:'/about-us/' },{ title:'تماس با ما',path:'/contact-us/' }].map(link => <a key={link.path} className="flex min-h-10 items-center text-sm text-muted-foreground hover:text-primary" href={storeLink(link.path)}>{link.title}</a>)}</div>
      <div className="flex flex-col gap-4"><h2 className="mb-1 font-semibold">ارتباط با ما</h2><a href="tel:+989373956640" className="flex min-h-11 items-center gap-3 text-sm"><Phone className="size-4 text-primary" /><bdi>۰۹۳۷۳۹۵۶۶۴۰</bdi></a><a href="mailto:info@in2bazar.com" className="flex min-h-11 items-center gap-3 text-sm"><Mail className="size-4 text-primary" /><bdi>info@in2bazar.com</bdi></a><p className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0 text-primary" />تهران، بازار بزرگ، راسته عباس‌آباد، مجتمع تجاری غدیر ۷، طبقه دوم</p></div>
      <div className="flex flex-col items-start gap-4"><h2 className="font-semibold">اعتماد شما، اعتبار ما</h2><a href={storeLink('/?show-enamad-logo=1')} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 rounded-xl border bg-background p-4"><Image src="/images/logo.png" alt="نماد اعتماد الکترونیکی ایندو بازار؛ برای بررسی اعتبار کلیک کنید" width={90} height={98} /><span className="flex items-center gap-1 text-xs text-muted-foreground">بررسی اعتبار نماد<ArrowUpLeft className="size-3" /></span></a></div>
    </div>
    <div className="site-container flex flex-col justify-between gap-3 border-t py-5 text-xs leading-6 text-muted-foreground sm:flex-row"><p>تمامی حقوق برای فروشگاه اینترنتی ایندو بازار محفوظ است.</p><p>نسخه بازطراحی برای بررسی · خرید در فروشگاه اصلی انجام می‌شود.</p></div>
  </footer>
}
