import Image from 'next/image'
import { ArrowUpLeft, ShoppingBag } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Price } from './price'
import { productLink, type Product } from '@/lib/store'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const href = productLink(product.id)
  return <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-card">
    <a href={href} className="relative block aspect-[4/4.6] overflow-hidden bg-muted" tabIndex={-1} aria-hidden="true">
      <Image src={product.image} alt="" fill sizes="(max-width: 479px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 290px" className="object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.025]" />
      {product.available === false && <div className="absolute start-3 top-3"><Badge variant="secondary">ناموجود</Badge></div>}
      <span className="absolute bottom-3 end-3 flex size-9 items-center justify-center rounded-full bg-card/95 text-foreground"><ArrowUpLeft className="size-4" /></span>
    </a>
    <div className="flex flex-1 flex-col gap-3 p-3 md:p-4">
      <p className="text-xs tracking-[0.16em] text-muted-foreground" dir="ltr">{product.brand}</p>
      <h3 className="min-h-14 text-base font-medium leading-7"><a className="hover:text-primary" href={href}>{product.name}</a></h3>
      <div className="mt-auto flex flex-col gap-3">
        <Price amount={product.price} original={product.originalPrice} />
        <a href={href} aria-label={`انتخاب سایز و خرید ${product.name} در فروشگاه اصلی`} className={cn(buttonVariants({ variant: 'outline' }), 'w-full px-2')}><ShoppingBag data-icon="inline-start" className="hidden sm:block" />{product.available === false ? 'مشاهده محصول' : 'انتخاب و خرید'}</a>
      </div>
    </div>
  </article>
}
