import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return <main aria-busy="true" aria-label="در حال بارگذاری فروشگاه" className="site-container flex flex-col gap-6 py-8"><span className="sr-only" role="status">در حال بارگذاری فروشگاه</span><Skeleton className="h-16 w-full" /><Skeleton className="h-80 w-full rounded-2xl" /><div className="grid grid-cols-2 gap-4 md:grid-cols-4">{[1,2,3,4].map(item => <Skeleton key={item} className="h-60" />)}</div></main>
}
