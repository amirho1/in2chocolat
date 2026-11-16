import { ArrowLeft } from 'lucide-react'

export function SectionHeading({ title, eyebrow, href, linkText = 'مشاهده همه', id }: { title: string; eyebrow?: string; href?: string; linkText?: string; id?: string }) {
  return <div className="mb-4 flex items-start justify-between gap-3 md:mb-6 md:items-end md:gap-4">
    <div className="flex min-w-0 flex-col gap-1.5">
      <h2 id={id} className="line-clamp-2 text-base font-bold tracking-tight md:text-2xl">{title}</h2>
      {eyebrow && <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">{eyebrow}</p>}
    </div>
    {href && <a href={href} className="flex min-h-11 shrink-0 items-center gap-1 text-xs font-medium text-primary hover:underline md:gap-2 md:text-sm">{linkText}<ArrowLeft className="size-3.5 md:size-4" aria-hidden="true" /></a>}
  </div>
}
