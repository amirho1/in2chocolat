import { Badge } from '@/components/ui/badge'
const formatter = new Intl.NumberFormat('fa-IR')

export function Price({ amount, original }: { amount: number | null; original?: number }) {
  if (amount === null) return <p className="text-sm text-muted-foreground">قیمت در فروشگاه</p>
  const discounted = original !== undefined && original > amount
  return <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
    <span className="inline-flex items-baseline gap-1.5"><bdi className="text-lg font-bold tabular-nums">{formatter.format(amount)}</bdi><span className="text-xs text-muted-foreground">تومان</span></span>
    {discounted && <><del className="text-sm text-muted-foreground" aria-label="قیمت قبلی">{formatter.format(original)}</del><Badge>{formatter.format(Math.round((1 - amount / original) * 100))}٪ تخفیف</Badge></>}
  </div>
}
