'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ChevronDown, Grid2X2, Home, Menu, Search, ShieldCheck, ShoppingBag, Truck, UserRound } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { categories, categoryLink, storeLink } from '@/lib/store'
import { cn } from '@/lib/utils'

export function BrandLogo() {
  return <a href="/" aria-label="ایندو بازار، صفحه اصلی" className="flex shrink-0 items-center gap-2">
    <Image src="/images/in2bazzr-150x150.webp" width={54} height={54} alt="" className="size-12 object-contain md:size-14" priority />
    <span className="flex flex-col"><span className="text-xl font-extrabold tracking-tight"><span className="text-primary">ایندو</span> بازار</span><span className="mt-0.5 text-[10px] tracking-[0.22em] text-muted-foreground" dir="ltr">INTIMATE & PERSONAL</span></span>
  </a>
}

export function StoreHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  function focusSearch() { searchRef.current?.focus(); searchRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }) }
  return <>
    <a className="fixed start-4 top-3 z-[100] -translate-y-24 rounded-lg bg-primary px-5 py-3 text-primary-foreground focus:translate-y-0" href="#main">رفتن به محتوای اصلی</a>
    <div className="bg-primary text-primary-foreground">
      <a href={storeLink('/indo-shipping-methods/')} className="site-container flex min-h-9 items-center justify-center gap-2 py-1 text-center text-xs md:text-sm"><Truck className="size-4 shrink-0" aria-hidden="true" /><span>ارسال رایگان برای سفارش‌های بالای ۳ میلیون تومان</span><ArrowLeft className="hidden size-4 sm:block" aria-hidden="true" /></a>
    </div>
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur-lg">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-5 gap-y-3 py-3 md:py-5">
        <div className="flex items-center gap-2">
          <Button aria-label="باز کردن منو" variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(true)}><Menu /></Button>
          <BrandLogo />
        </div>
        <form action={storeLink('/')} method="get" role="search" className="order-3 flex w-full items-center gap-2 rounded-lg border border-transparent bg-muted px-3 focus-within:border-primary lg:order-none lg:w-auto lg:max-w-lg lg:flex-1">
          <label htmlFor="store-search" className="sr-only">جستجو در محصولات</label>
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input ref={searchRef} id="store-search" name="s" type="search" required maxLength={120} placeholder="دنبال چی می‌گردی؟" className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none focus-visible:outline-none" />
          <input type="hidden" name="post_type" value="product" />
          <button type="submit" className="min-h-11 px-2 text-xs text-muted-foreground hover:text-primary">جستجو</button>
        </form>
        <div className="flex items-center gap-2 md:gap-4">
          <a href={storeLink('/login/')} className="hidden min-h-11 items-center gap-2 text-sm sm:flex"><UserRound className="size-5" /><span>ورود <span className="text-border">/</span> ثبت‌نام</span></a>
          <span className="hidden h-6 w-px bg-border sm:block" />
          <a href={storeLink('/cart/')} className={buttonVariants({ variant: 'ghost', size: 'icon' })} aria-label="سبد خرید در فروشگاه اصلی"><ShoppingBag /></a>
        </div>
      </div>
      <nav aria-label="منوی اصلی" className="site-container hidden items-center justify-between pb-3 lg:flex">
        <div className="flex items-center gap-7 text-sm">
          <Button variant="ghost" onClick={() => setMenuOpen(true)}><Grid2X2 data-icon="inline-start" />دسته‌بندی محصولات<ChevronDown data-icon="inline-end" /></Button>
          <span className="h-5 w-px bg-border" />
          <a href="/" aria-current="page" className="flex min-h-11 items-center border-b-2 border-primary font-medium text-primary">خانه</a>
          <a href={storeLink('/shop/')} className="flex min-h-11 items-center hover:text-primary">فروشگاه</a>
          <a href="#bestsellers" className="flex min-h-11 items-center hover:text-primary">پرفروش‌ها</a>
          <a href={storeLink('/blog/')} className="flex min-h-11 items-center hover:text-primary">مجله ایندو</a>
          <a href={storeLink('/about-us/')} className="flex min-h-11 items-center hover:text-primary">درباره ما</a>
          <a href={storeLink('/contact-us/')} className="flex min-h-11 items-center hover:text-primary">تماس با ما</a>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><ShieldCheck className="size-4" />بسته‌بندی محرمانه</span>
      </nav>
    </header>
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <SheetContent side="right" className="overflow-y-auto" dir="rtl">
        <SheetHeader className="pt-16"><SheetTitle>دنیای ایندو بازار</SheetTitle><SheetDescription>از دسته‌بندی دلخواهتان شروع کنید.</SheetDescription></SheetHeader>
        <nav aria-label="دسته‌بندی محصولات" className="flex flex-col gap-1 px-4 pb-8">
          <a className="flex min-h-12 items-center justify-between rounded-lg bg-secondary px-4 font-medium text-primary" href={storeLink('/shop/')}>همه محصولات<ArrowLeft className="size-4" /></a>
          {categories.map(category => <a key={category.slug} href={categoryLink(category.slug)} className="flex min-h-12 items-center justify-between rounded-lg px-4 text-base hover:bg-muted">{category.title}<ArrowLeft className="size-4 text-muted-foreground" /></a>)}
          <a className="min-h-12 border-t px-4 py-4" href={storeLink('/blog/')}>مجله ایندو</a>
          <a className="min-h-12 px-4 py-3" href={storeLink('/about-us/')}>درباره ما</a>
          <a className="min-h-12 px-4 py-3" href={storeLink('/contact-us/')}>تماس و پشتیبانی</a>
        </nav>
      </SheetContent>
    </Sheet>
    <nav aria-label="دسترسی سریع موبایل" className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t bg-background px-2 pb-[env(safe-area-inset-bottom)] lg:hidden">
      <a href="/" aria-current="page" className="mobile-nav-item flex min-h-17 flex-1 flex-col items-center justify-center gap-0.5 text-[11px] text-primary"><span className="nav-icon flex size-9 items-center justify-center rounded-xl"><Home className="size-5" /></span>خانه</a>
      <button onClick={() => setMenuOpen(true)} className="mobile-nav-item flex min-h-17 flex-1 flex-col items-center justify-center gap-0.5 text-[11px] text-muted-foreground"><span className="nav-icon flex size-9 items-center justify-center"><Grid2X2 className="size-5" /></span>دسته‌بندی</button>
      <button onClick={focusSearch} className="mobile-nav-item flex min-h-17 flex-1 flex-col items-center justify-center gap-0.5 text-[11px] text-muted-foreground"><span className="nav-icon flex size-9 items-center justify-center"><Search className="size-5" /></span>جستجو</button>
      <a href={storeLink('/cart/')} className="mobile-nav-item flex min-h-17 flex-1 flex-col items-center justify-center gap-0.5 text-[11px] text-muted-foreground"><span className="nav-icon flex size-9 items-center justify-center"><ShoppingBag className="size-5" /></span>سبد خرید</a>
      <a href={storeLink('/panel')} className="mobile-nav-item flex min-h-17 flex-1 flex-col items-center justify-center gap-0.5 text-[11px] text-muted-foreground"><span className="nav-icon flex size-9 items-center justify-center"><UserRound className="size-5" /></span>حساب من</a>
    </nav>
  </>
}
