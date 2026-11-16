import Image from 'next/image'
import { ArrowUpLeft, ShoppingBag } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Price } from './price'
import { productLink, type Product } from '@/lib/store'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const href = productLink(product.id)
  return <article className="group flex min-w-0 snap-start flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-card md:rounded-xl">
    <a href={href} className="relative block aspect-square overflow-hidden bg-muted md:aspect-[4/4.6]" tabIndex={-1} aria-hidden="true">
      <Image src={product.image} alt="" fill sizes="(max-width: 767px) 42vw, (max-width: 1023px) 30vw, 400px" className="object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.025]" />
      {product.available === false && <div className="absolute start-3 top-3"><Badge variant="secondary">ناموجود</Badge></div>}
      <span className="absolute bottom-3 end-3 hidden size-9 items-center justify-center rounded-full bg-card/95 text-foreground md:flex"><ArrowUpLeft className="size-4" /></span>
    </a>
    <div className="flex flex-1 flex-col gap-2 p-2.5 md:gap-3 md:p-4">
      <p className="truncate text-[10px] tracking-[0.12em] text-muted-foreground md:text-xs" dir="ltr">{product.brand}</p>
      <h3 className="min-h-10 text-xs font-medium leading-5 md:min-h-14 md:text-base md:leading-7"><a className="line-clamp-2 hover:text-primary" href={href} title={product.name}>{product.name}</a></h3>
      <div className="mt-auto flex flex-col gap-2 md:gap-3">
        <Price amount={product.price} original={product.originalPrice} />
        <a href={href} aria-label={`انتخاب سایز و خرید ${product.name} در فروشگاه اصلی`} className={cn(buttonVariants(), 'w-full px-2 text-xs md:text-sm')}><ShoppingBag data-icon="inline-start" className="hidden sm:block" />{product.available === false ? 'مشاهده محصول' : 'انتخاب و خرید'}</a>
      </div>
    </div>
  </article>
}
