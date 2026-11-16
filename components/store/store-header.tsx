'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import { ArrowLeft, ChevronDown, Grid2X2, Home, Menu, Search, ShieldCheck, ShoppingBag, Truck, UserRound } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { categories, categoryLink, storeLink } from '@/lib/store'
import { cn } from '@/lib/utils'

export function BrandLogo() {
  return <a href="/" aria-label="ایندو چاکلت، صفحه اصلی" className="flex shrink-0 items-center gap-2">
    <Image src="/images/chocolate/logo-150x150.webp" width={54} height={54} alt="" className="size-12 object-contain md:size-14" priority />
    <span className="text-xl font-extrabold tracking-tight"><span className="text-primary">ایندو</span> چاکلت</span>
  </a>
}

export function StoreHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(2)
  const searchRef = useRef<HTMLInputElement>(null)
  const searchToggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus({ preventScroll: true })
  }, [searchOpen])
  function closeSearch() { setSearchOpen(false); setActiveIndex(2); searchToggleRef.current?.focus({ preventScroll: true }) }
  function openMenu() { setMenuOpen(true); setSearchOpen(false); setActiveIndex(1) }
  function toggleSearch() {
    setSearchOpen(!searchOpen)
    setActiveIndex(searchOpen ? 2 : 0)
  }
  return <>
    <a className="fixed start-4 top-3 z-[100] -translate-y-24 rounded-lg bg-primary px-5 py-3 text-primary-foreground focus:translate-y-0" href="#main">رفتن به محتوای اصلی</a>
    <div className="bg-primary text-primary-foreground">
      <a href={storeLink('/in2chocolate-shipping/')} className="site-container flex min-h-9 items-center justify-center gap-2 py-1 text-center text-xs md:text-sm"><Truck className="size-4 shrink-0" aria-hidden="true" /><span>شکلات، قهوه و خوراکی‌های منتخب · ارسال به سراسر ایران</span><ArrowLeft className="hidden size-4 sm:block" aria-hidden="true" /></a>
    </div>
    {searchOpen && <button type="button" tabIndex={-1} aria-label="بستن جستجو" onClick={closeSearch} className="fixed inset-0 z-20 bg-black/10 backdrop-blur-sm lg:hidden" />}
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur-lg">
      <div className="site-container grid grid-cols-[1fr_auto] items-center gap-x-5 py-3 md:py-5 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <div className="col-start-1 row-start-1 flex items-center gap-2">
          <BrandLogo />
        </div>
        <Button aria-label="باز کردن منو" aria-expanded={menuOpen} variant="ghost" size="icon" className="col-start-2 row-start-1 hover:bg-secondary lg:hidden" onClick={openMenu}><Menu /></Button>
        <div id="mobile-search-panel" className={cn('col-span-2 grid transition-[grid-template-rows,opacity] duration-300 lg:visible lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:grid-rows-[1fr] lg:opacity-100', searchOpen ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0')}>
          <div className="min-h-0 overflow-hidden">
            <form action={storeLink('/')} method="get" role="search" onKeyDown={event => { if (event.key === 'Escape') closeSearch() }} className="mt-3 flex w-full items-center gap-2 rounded-lg border border-transparent bg-muted px-3 focus-within:border-primary lg:mt-0 lg:max-w-lg">
              <label htmlFor="store-search" className="sr-only">جستجو در محصولات</label>
              <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input ref={searchRef} id="store-search" name="s" type="search" required maxLength={120} placeholder="دنبال چی می‌گردی؟" className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none focus-visible:outline-none" />
              <input type="hidden" name="post_type" value="product" />
              <button type="submit" className={cn(buttonVariants({ size: 'sm' }), 'my-1.5 min-h-9')}>جستجو</button>
            </form>
          </div>
        </div>
        <div className="col-start-3 row-start-1 hidden items-center gap-4 lg:flex">
          <a href={storeLink('/panel')} className="hidden min-h-11 items-center gap-2 text-sm sm:flex"><UserRound className="size-5" /><span>ورود <span className="text-border">/</span> ثبت‌نام</span></a>
          <span className="hidden h-6 w-px bg-border sm:block" />
          <a href={storeLink('/cart/')} className={buttonVariants({ variant: 'ghost', size: 'icon' })} aria-label="سبد خرید در فروشگاه اصلی"><ShoppingBag /></a>
        </div>
      </div>
      <nav aria-label="منوی اصلی" className="site-container hidden items-center justify-between pb-3 lg:flex">
        <div className="flex items-center gap-7 text-sm">
          <Button variant="ghost" className="hover:bg-secondary" onClick={openMenu}><Grid2X2 data-icon="inline-start" />دسته‌بندی محصولات<ChevronDown data-icon="inline-end" /></Button>
          <span className="h-5 w-px bg-border" />
          <a href="/" aria-current="page" className="flex min-h-11 items-center border-b-2 border-primary font-medium text-primary">خانه</a>
          <a href={storeLink('/shop/')} className="flex min-h-11 items-center hover:text-primary">فروشگاه</a>
          <a href="#bestsellers" className="flex min-h-11 items-center hover:text-primary">پرفروش‌ها</a>
          <a href={storeLink('/blog/')} className="flex min-h-11 items-center hover:text-primary">مجله ایندو</a>
          <a href={storeLink('/about-us/')} className="flex min-h-11 items-center hover:text-primary">درباره ما</a>
          <a href={storeLink('/contact-us/')} className="flex min-h-11 items-center hover:text-primary">تماس با ما</a>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><ShieldCheck className="size-4" />انتخابی خوش‌طعم، خریدی مطمئن</span>
      </nav>
    </header>
    <Sheet open={menuOpen} onOpenChange={open => { setMenuOpen(open); setActiveIndex(open ? 1 : 2) }}>
      <SheetContent side="right" className="overflow-y-auto" dir="rtl">
        <SheetHeader className="pt-16"><SheetTitle>دنیای ایندو چاکلت</SheetTitle><SheetDescription>از دسته‌بندی دلخواهتان شروع کنید.</SheetDescription></SheetHeader>
        <nav aria-label="دسته‌بندی محصولات" className="flex flex-col gap-1 px-4 pb-8">
          <a className="flex min-h-12 items-center justify-between rounded-lg bg-secondary px-4 font-medium text-primary" href={storeLink('/shop/')}>همه محصولات<ArrowLeft className="size-4" /></a>
          {categories.map(category => <a key={category.slug} href={categoryLink(category.slug)} className="flex min-h-12 items-center justify-between rounded-lg px-4 text-base hover:bg-muted">{category.title}<ArrowLeft className="size-4 text-muted-foreground" /></a>)}
          <a className="min-h-12 border-t px-4 py-4" href={storeLink('/blog/')}>مجله ایندو</a>
          <a className="min-h-12 px-4 py-3" href={storeLink('/about-us/')}>درباره ما</a>
          <a className="min-h-12 px-4 py-3" href={storeLink('/contact-us/')}>تماس و پشتیبانی</a>
        </nav>
      </SheetContent>
    </Sheet>
    <nav aria-label="دسترسی سریع موبایل" style={{ '--active-index': activeIndex } as CSSProperties} className="mobile-bottom-nav fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 bg-background pb-[env(safe-area-inset-bottom)] lg:hidden">
      {/* Sliding wave and raised active icon adapted from https://codepen.io/abxlfazl/pen/VwKzaEm. */}
      <div className="mobile-nav-wave-track" aria-hidden="true"><div className="mobile-nav-wave-position"><svg viewBox="0 0 140 34" className="mobile-nav-wave"><path d="M0 34C22 34 29 26 43 15C60 1 80 1 97 15C111 26 118 34 140 34" /></svg></div></div>
      <button ref={searchToggleRef} onClick={toggleSearch} aria-expanded={searchOpen} aria-controls="mobile-search-panel" data-active={activeIndex === 0} className="mobile-nav-item"><span className="nav-icon"><Search className="size-5" /></span><span className="nav-label">جستجو</span></button>
      <button onClick={openMenu} aria-expanded={menuOpen} data-active={activeIndex === 1} className="mobile-nav-item"><span className="nav-icon"><Grid2X2 className="size-5" /></span><span className="nav-label">دسته‌بندی</span></button>
      <a href="/" aria-current="page" data-active={activeIndex === 2} onClick={event => { event.preventDefault(); setSearchOpen(false); setMenuOpen(false); setActiveIndex(2); window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }} className="mobile-nav-item"><span className="nav-icon"><Home className="size-5" /></span><span className="nav-label">خانه</span></a>
      <a href={storeLink('/cart/')} onClick={() => setActiveIndex(3)} data-active={activeIndex === 3} className="mobile-nav-item"><span className="nav-icon"><ShoppingBag className="size-5" /></span><span className="nav-label">سبد خرید</span></a>
      <a href={storeLink('/panel')} onClick={() => setActiveIndex(4)} data-active={activeIndex === 4} className="mobile-nav-item"><span className="nav-icon"><UserRound className="size-5" /></span><span className="nav-label">حساب من</span></a>
    </nav>
  </>
}
