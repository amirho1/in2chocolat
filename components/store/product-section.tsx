import { ArrowLeft, Sparkles } from 'lucide-react'
import { ProductCard } from './product-card'
import { SectionHeading } from './section-heading'
import { type Product, storeLink } from '@/lib/store'

export function ProductSection({ title, eyebrow, products, id, href, featured = false }: { title: string; eyebrow?: string; products: Product[]; id: string; href: string; featured?: boolean }) {
  return <section id={id} aria-labelledby={`${id}-heading`} className="site-container section-space">
    <SectionHeading id={`${id}-heading`} title={title} eyebrow={eyebrow} href={href} />
    {products.length ? <div aria-label={title} tabIndex={0} className={`grid auto-cols-[42%] grid-flow-col items-stretch gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2 md:auto-cols-auto md:grid-flow-row md:grid-cols-3 md:gap-5 md:overflow-visible ${featured ? 'lg:grid-cols-4' : ''}`}>
      {featured && <div className="relative hidden flex-col justify-center gap-5 overflow-hidden rounded-xl bg-primary px-7 py-8 text-primary-foreground lg:flex lg:px-8">
        <Sparkles className="size-7" strokeWidth={1.3} aria-hidden="true" />
        <p className="text-xs tracking-[0.2em] opacity-80" dir="ltr">THE MOST LOVED</p>
        <h3 className="text-3xl font-bold leading-[1.7]">انتخاب‌های<br className="hidden lg:block" /> دوست‌داشتنی شما</h3>
        <p className="max-w-sm text-sm leading-7 opacity-85">محصولاتی که بیشتر از همیشه مورد توجه شما قرار گرفته‌اند.</p>
        <a href={storeLink('/shop/')} className="mt-2 flex min-h-11 items-center gap-3 text-sm font-medium underline-offset-8 hover:underline">دیدن همه محصولات<ArrowLeft className="size-4" /></a>
      </div>}
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div> : <p role="status" className="rounded-xl border p-8 text-center text-muted-foreground">در حال حاضر محصولی در این مجموعه نمایش داده نمی‌شود. <a href={href} className="text-primary underline">مشاهده فروشگاه</a></p>}
    <p className="mt-4 text-xs leading-6 text-muted-foreground">قیمت‌های ثبت‌شده از فروشگاه؛ موجودی، سایز و قیمت نهایی در صفحه محصول بررسی می‌شود.</p>
  </section>
}
