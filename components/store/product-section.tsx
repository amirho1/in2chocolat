import { ArrowLeft, Sparkles } from 'lucide-react'
import { ProductCard } from './product-card'
import { SectionHeading } from './section-heading'
import { type Product, storeLink } from '@/lib/store'
import { buttonVariants } from '@/components/ui/button'

export function ProductSection({ title, eyebrow, products, id, href, featured = false }: { title: string; eyebrow?: string; products: Product[]; id: string; href: string; featured?: boolean }) {
  return <section id={id} aria-labelledby={`${id}-heading`} className="site-container section-space">
    <SectionHeading id={`${id}-heading`} title={title} eyebrow={eyebrow} href={href} />
    {products.length ? <div className={featured ? 'grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4' : 'grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5'}>
      {featured && <div className="relative col-span-2 flex flex-col justify-center gap-5 overflow-hidden rounded-xl bg-primary px-7 py-8 text-primary-foreground md:col-span-3 lg:col-span-1 lg:px-8">
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
