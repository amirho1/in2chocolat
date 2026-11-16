import Image from 'next/image'
import { ArrowLeft, ArrowUpLeft, Headphones, PackageCheck, ShieldCheck, Truck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { categories, categoryLink, storeLink, articles } from '@/lib/store'
import { SectionHeading } from './section-heading'

export function Hero() {
  return <section aria-labelledby="hero-heading" className="site-container pt-5 md:pt-7">
    <div className="hero-enter relative overflow-hidden rounded-2xl bg-secondary">
      <div className="grid items-center gap-y-8 md:min-h-[410px] md:grid-cols-[1.08fr_1fr] md:gap-y-0">
        <div className="relative z-10 flex flex-col items-start gap-6 px-6 pt-9 md:px-12 md:py-12 lg:px-16">
          <p className="flex items-center gap-2 text-xs font-medium text-primary md:text-sm"><span className="h-px w-7 bg-primary" />برای لحظه‌های خوش‌طعم شما</p>
          <h1 id="hero-heading" className="text-[32px] font-extrabold leading-[1.65] tracking-tight sm:text-4xl lg:text-[46px]">حال خوب،<br /><span className="text-primary">طعم شیرین</span> زندگی.</h1>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base md:leading-8">دنیایی از شکلات، قهوه و خوراکی‌های خارجی؛<br className="hidden sm:block" /> انتخابی برای لحظه‌های کوچک و دوست‌داشتنی.</p>
          <a className={buttonVariants({ size: 'lg' })} href={storeLink('/shop/')}>کشف دنیای ایندو چاکلت<ArrowLeft data-icon="inline-end" /></a>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><PackageCheck className="size-3.5" />خرید تکی، جعبه‌ای و عمده محصولات منتخب</p>
        </div>
        <div className="relative flex min-h-64 items-center justify-center px-5 pb-9 md:min-h-[410px] md:pb-0">
          <div className="absolute size-64 rounded-full bg-hero md:size-80" />
          <Image src="/images/chocolate/main-banner.webp" alt="شکلات، قهوه و خوراکی‌های منتخب ایندو چاکلت" width={520} height={520} preload sizes="(max-width: 767px) 280px, 460px" className="relative h-64 w-72 object-contain md:h-[395px] md:w-[460px]" />
          <span className="absolute bottom-5 flex items-center gap-2 rounded-full border bg-background/95 px-4 py-2.5 text-[11px] shadow-sm md:bottom-7"><ShieldCheck className="size-4" />انتخابی خوش‌طعم. تجربه‌ای مطمئن.</span>
        </div>
      </div>
    </div>
  </section>
}

const benefits = [
  { icon: ShieldCheck, title: 'انتخابی با خیال راحت', description: 'اطلاعات روشن درباره محصولات', href: '/shop/' },
  { icon: Truck, title: 'ارسال به سراسر ایران', description: 'روش‌های ارسال سفارش', href: '/in2chocolate-shipping/' },
  { icon: PackageCheck, title: 'تکی، جعبه‌ای و عمده', description: 'متناسب با نیاز شما', href: '/shop/' },
  { icon: Headphones, title: 'کنار شما هستیم', description: 'پاسخ‌گوی سوال‌های شما', href: '/contact-us/' },
]
export function Benefits() {
  return <div className="site-container grid grid-cols-2 gap-x-3 gap-y-5 border-b py-6 md:grid-cols-4 md:py-7">{benefits.map(({ icon: Icon, title, description, href }) => <a key={title} href={storeLink(href)} className="flex items-center gap-3 rounded-lg md:justify-center"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="size-5" /></span><span className="flex flex-col gap-1"><strong className="text-xs font-semibold sm:text-sm">{title}</strong><span className="text-[10px] text-muted-foreground sm:text-xs">{description}</span></span></a>)}</div>
}

export function Categories() {
  return <section id="categories" aria-labelledby="categories-heading" className="site-container section-space">
    <SectionHeading id="categories-heading" title="طعم دلخواهت رو پیدا کن" eyebrow="برای هر لحظه، یک انتخاب" href={storeLink('/shop/')} linkText="همه دسته‌ها" />
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">{categories.slice(0,4).map(category => <a key={category.slug} href={categoryLink(category.slug)} className="group flex min-w-0 flex-col items-center gap-2 rounded-xl border bg-muted px-3 py-5 transition-colors hover:border-primary/40 hover:bg-secondary md:flex-row md:justify-between md:gap-3 md:px-5 md:py-4">
      <Image src={category.image!} alt="" width={76} height={88} className="size-16 object-contain transition-transform group-hover:-translate-y-1 md:order-2 md:h-24 md:w-20" />
      <span className="flex flex-col gap-2 text-center md:text-start"><strong className="text-base font-semibold">{category.title}</strong><span className="hidden text-xs text-muted-foreground lg:block">{category.caption}</span><span className="hidden items-center gap-1 text-xs text-primary md:flex">کشف مجموعه<ArrowLeft className="size-3.5" /></span></span>
    </a>)}</div>
  </section>
}

export function BrandBanners() {
  return <section aria-label="مجموعه‌های منتخب" className="site-container grid gap-4 py-4 md:grid-cols-2 md:gap-6">
    {[{slug:'chocolate',title:'یک تکه شکلات، یک دنیا لذت',caption:'از طعم‌های آشنا تا کشف‌های تازه',image:'icon-chocolate.webp'}, {slug:'coffee-hot-drinks',title:'وقت یک فنجان آرامش',caption:'قهوه و نوشیدنی‌های گرم منتخب',image:'icon-coffe.webp'}].map(item => <a key={item.slug} href={categoryLink(item.slug)} className="group flex items-center justify-between gap-4 overflow-hidden rounded-xl bg-secondary p-6 md:px-10 md:py-8"><div className="flex flex-col gap-3"><span className="text-xs text-primary">{item.caption}</span><h2 className="text-lg font-bold md:text-2xl">{item.title}</h2><span className="flex min-h-11 items-center gap-2 text-sm text-primary">دیدن مجموعه<ArrowLeft className="size-4" /></span></div><Image src={`/images/chocolate/${item.image}`} alt="" width={150} height={170} className="h-32 w-24 shrink-0 object-contain transition-transform group-hover:-translate-y-1 md:h-40 md:w-32" /></a>)}
  </section>
}

export function AboutStore() {
  return <section aria-labelledby="about-heading" className="site-container section-space">
    <div className="grid overflow-hidden rounded-2xl bg-secondary md:grid-cols-[0.8fr_1.2fr]">
      <div className="flex items-center justify-center bg-hero/40 p-6"><Image src="/images/chocolate/main-about-us-c.webp" width={480} height={360} sizes="(max-width: 767px) 90vw, 480px" className="h-56 w-full object-contain md:h-72" alt="دنیای شکلات و قهوه ایندو چاکلت" /></div>
      <div className="flex flex-col items-start justify-center gap-4 p-6 md:p-10">
        <p className="text-sm text-primary">کمی نزدیک‌تر به ایندو چاکلت</p>
        <h2 id="about-heading" className="text-2xl font-bold leading-relaxed">طعم‌های دوست‌داشتنی،<br />خریدی با خیال راحت.</h2>
        <p className="text-sm leading-8 text-muted-foreground">ایندو چاکلت با تکیه بر تجربه تیم ایندو در فروش آنلاین، تأمین کالا و توزیع راه‌اندازی شده تا خرید شکلات، قهوه، نوشیدنی و خوراکی‌های خارجی را ساده‌تر و شفاف‌تر کند. اطلاعات برند، وزن، طعم و تاریخ انقضا در فروشگاه اصلی به شما کمک می‌کند برای مصرف شخصی، پذیرایی، هدیه یا کسب‌وکار خود انتخاب کنید.</p>
        <a href={storeLink('/about-us/')} className={buttonVariants({ variant: 'outline' })}>داستان ایندو چاکلت<ArrowLeft data-icon="inline-end" /></a>
      </div>
    </div>
  </section>
}

export function JournalPreview() {
  return <section aria-labelledby="journal-heading" className="site-container section-space">
    <SectionHeading id="journal-heading" title="همراه لحظه‌های خوش‌طعم شما" eyebrow="از دنیای ایندو چاکلت" href={storeLink('/blog/')} linkText="همه نوشته‌ها" />
    <div className="grid gap-4 md:grid-cols-3">{articles.map((article, index) => <a href={storeLink(article.path)} key={article.title} className="group flex min-w-0 flex-col items-start gap-4 rounded-xl border bg-muted p-6 transition-colors hover:bg-gray-100"><div className="flex w-full items-center justify-between"><Badge variant="secondary">{article.tag}</Badge><span className="text-sm text-muted-foreground">۰{index + 1}</span></div><h3 className="line-clamp-2 text-lg font-semibold">{article.title}</h3><p className="line-clamp-3 text-sm leading-7 text-muted-foreground">{article.description}</p><span className="mt-auto flex min-h-11 items-center gap-2 text-sm font-medium text-primary">بیشتر بخوانید<ArrowUpLeft className="size-4 transition-transform group-hover:-translate-x-1" /></span></a>)}</div>
  </section>
}
