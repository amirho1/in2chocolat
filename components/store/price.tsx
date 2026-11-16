import { Badge } from '@/components/ui/badge'
const formatter = new Intl.NumberFormat('fa-IR')

export function Price({ amount, original }: { amount: number | null; original?: number }) {
  if (amount === null) return <p className="text-sm text-muted-foreground">قیمت در فروشگاه</p>
  const discounted = original !== undefined && original > amount
  return <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
    <span className="inline-flex items-baseline gap-1 md:gap-1.5"><bdi className="text-sm font-bold tabular-nums md:text-lg">{formatter.format(amount)}</bdi><span className="text-[10px] text-muted-foreground md:text-xs">تومان</span></span>
    {discounted && <><del className="text-sm text-muted-foreground" aria-label="قیمت قبلی">{formatter.format(original)}</del><Badge>{formatter.format(Math.round((1 - amount / original) * 100))}٪ تخفیف</Badge></>}
  </div>
}
