import Image from 'next/image'
import { ArrowLeft, ArrowUpLeft, Headphones, LockKeyhole, PackageCheck, ShieldCheck, Truck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { categories, categoryLink, storeLink, articles } from '@/lib/store'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function Hero() {
  return <section aria-labelledby="hero-heading" className="site-container pt-5 md:pt-7">
    <div className="hero-enter relative overflow-hidden rounded-2xl bg-secondary">
      <div className="grid items-center gap-y-8 md:min-h-[410px] md:grid-cols-[1.08fr_1fr] md:gap-y-0">
        <div className="relative z-10 flex flex-col items-start gap-6 px-6 pt-9 md:px-12 md:py-12 lg:px-16">
          <p className="flex items-center gap-2 text-xs font-medium text-primary md:text-sm"><span className="h-px w-7 bg-primary" />برای حس خوبِ خودت</p>
          <h1 id="hero-heading" className="text-[32px] font-extrabold leading-[1.65] tracking-tight sm:text-4xl lg:text-[46px]">زیبایی از<br /><span className="text-primary">احساس خوب</span> شروع می‌شه.</h1>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base md:leading-8">دنیایی از لباس زیر، لباس خواب و پوشاک خاص؛<br className="hidden sm:block" /> انتخابی برای خودِ واقعی شما.</p>
          <a className={buttonVariants({ size: 'lg' })} href={storeLink('/shop/')}>کشف دنیای ایندو<ArrowLeft data-icon="inline-end" /></a>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><LockKeyhole className="size-3.5" />انتخاب با خیال راحت، ارسال با حفظ حریم شما</p>
        </div>
        <div className="relative flex h-72 items-center justify-center md:h-[410px]">
          <div className="absolute size-56 rounded-full bg-hero md:size-80" />
          <div className="absolute size-64 rounded-full border border-primary/10 md:size-[360px]" />
          <Image src="/images/main-banner-3.webp" alt="بادی زنانه دانتل زرشکی با کمربند پاپیونی، از مجموعه ایندو بازار" width={520} height={520} priority sizes="(max-width: 767px) 280px, 460px" className="relative h-64 w-72 object-contain md:h-[395px] md:w-[460px]" />
          <span className="absolute bottom-4 end-6 flex items-center gap-2 rounded-lg border border-background bg-background/85 px-3 py-2 text-xs text-primary backdrop-blur-sm md:bottom-8 md:end-8"><ShieldCheck className="size-4" />انتخابی شخصی. تجربه‌ای مطمئن.</span>
        </div>
      </div>
    </div>
  </section>
}

const benefits = [
  { icon: LockKeyhole, title: 'بسته‌بندی محرمانه', description: 'حریم خصوصی شما مهم است', href: '/indo-discreet-packaging/' },
  { icon: Truck, title: 'ارسال به سراسر ایران', description: 'رایگان بالای ۳ میلیون تومان', href: '/indo-shipping-methods/' },
  { icon: PackageCheck, title: 'خرید آگاهانه', description: 'توضیحات محصول و راهنمای سایز', href: '/shop/' },
  { icon: Headphones, title: 'کنار شما هستیم', description: 'پاسخ‌گوی سوال‌های شما', href: '/contact-us/' },
]
export function Benefits() {
  return <div className="site-container grid grid-cols-2 gap-x-3 gap-y-5 border-b py-6 md:grid-cols-4 md:py-7">{benefits.map(({ icon: Icon, title, description, href }) => <a key={title} href={storeLink(href)} className="flex items-center gap-3 rounded-lg md:justify-center"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="size-5" /></span><span className="flex flex-col gap-1"><strong className="text-xs font-semibold sm:text-sm">{title}</strong><span className="text-[10px] text-muted-foreground sm:text-xs">{description}</span></span></a>)}</div>
}

export function Categories() {
  return <section id="categories" aria-labelledby="categories-heading" className="site-container section-space">
    <SectionHeading id="categories-heading" title="دنیای خودت رو پیدا کن" eyebrow="برای هر سلیقه، یک انتخاب" href={storeLink('/product-category/women/')} linkText="همه دسته‌ها" />
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">{categories.slice(0,4).map(category => <a key={category.slug} href={categoryLink(category.slug)} className="group flex min-w-0 flex-col items-center gap-2 rounded-xl border bg-muted px-3 py-5 transition-colors hover:border-primary/40 hover:bg-secondary md:flex-row md:justify-between md:gap-3 md:px-5 md:py-4">
      <Image src={category.image!} alt="" width={76} height={88} className="size-16 object-contain transition-transform group-hover:-translate-y-1 md:order-2 md:h-24 md:w-20" />
      <span className="flex flex-col gap-2 text-center md:text-start"><strong className="text-base font-semibold">{category.title}</strong><span className="hidden text-xs text-muted-foreground lg:block">{category.caption}</span><span className="hidden items-center gap-1 text-xs text-primary md:flex">کشف مجموعه<ArrowLeft className="size-3.5" /></span></span>
    </a>)}</div>
  </section>
}

export function BrandBanners() {
  return <section aria-label="برندهای منتخب" className="site-container grid gap-4 py-4 md:grid-cols-2 md:gap-6">
    <a href={storeLink('/brand/roxyrose/')} className="group overflow-hidden rounded-xl bg-secondary"><Image src="/images/roxyrose-banner-600x350.webp" alt="مجموعه لباس زنانه روکسی رز؛ مشاهده محصولات Roxy Rose" width={600} height={350} sizes="(max-width: 767px) 92vw, 620px" className="aspect-[12/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" /></a>
    <a href={storeLink('/brand/cs4/')} className="group overflow-hidden rounded-xl bg-muted"><Image src="/images/cs4-banner-600x350.webp" alt="مجموعه لباس زنانه CS4؛ مشاهده محصولات برند" width={600} height={350} sizes="(max-width: 767px) 92vw, 620px" className="aspect-[12/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" /></a>
  </section>
}

export function AboutStore() {
  return <section aria-labelledby="about-heading" className="site-container section-space">
    <div className="grid overflow-hidden rounded-2xl bg-secondary md:grid-cols-[0.8fr_1.2fr]">
      <div className="flex items-center justify-center bg-hero/40 p-6"><Image src="/images/main-about-us.webp" width={480} height={360} sizes="(max-width: 767px) 90vw, 480px" className="h-56 w-full object-contain md:h-72" alt="مجموعه پوشاک زنانه ایندو بازار" /></div>
      <div className="flex flex-col items-start justify-center gap-4 p-6 md:p-10">
        <p className="text-sm text-primary">کمی نزدیک‌تر به ایندو</p>
        <h2 id="about-heading" className="text-2xl font-bold leading-relaxed">انتخابی شخصی،<br />خریدی با خیال راحت.</h2>
        <p className="text-sm leading-8 text-muted-foreground">ایندو بازار با تکیه بر تجربه اسپیرال، فضایی برای انتخاب آگاهانه لباس زیر زنانه، لانژری، لباس خواب و محصولات خاص است. با توضیحات کاربردی، راهنمای سایز و تصاویر محصولات، انتخاب را ساده‌تر می‌کنیم. حریم خصوصی شما، بسته‌بندی مناسب و تجربه خرید امن، اولویت ماست.</p>
        <a href={storeLink('/about-us/')} className={buttonVariants({ variant: 'outline' })}>داستان ایندو بازار<ArrowLeft data-icon="inline-end" /></a>
      </div>
    </div>
  </section>
}

export function JournalPreview() {
  return <section aria-labelledby="journal-heading" className="site-container section-space">
    <SectionHeading id="journal-heading" title="همراه شما، قبل و بعد از خرید" eyebrow="از مجله ایندو" href={storeLink('/blog/')} linkText="همه نوشته‌ها" />
    <div className="grid gap-4 md:grid-cols-3">{articles.map((article, index) => <a href={storeLink(article.path)} key={article.path} className="group flex min-w-0 flex-col items-start gap-4 rounded-xl border bg-muted p-6 transition-colors hover:bg-gray-100"><div className="flex w-full items-center justify-between"><Badge variant="secondary">{article.tag}</Badge><span className="text-sm text-muted-foreground">۰{index + 1}</span></div><h3 className="line-clamp-2 text-lg font-semibold">{article.title}</h3><p className="line-clamp-3 text-sm leading-7 text-muted-foreground">{article.description}</p><span className="mt-auto flex min-h-11 items-center gap-2 text-sm font-medium text-primary">بیشتر بخوانید<ArrowUpLeft className="size-4 transition-transform group-hover:-translate-x-1" /></span></a>)}</div>
  </section>
}
