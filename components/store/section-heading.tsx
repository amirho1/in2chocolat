import { ArrowLeft } from 'lucide-react'

export function SectionHeading({ title, eyebrow, href, linkText = 'مشاهده همه', id }: { title: string; eyebrow?: string; href?: string; linkText?: string; id?: string }) {
  return <div className="mb-6 flex items-end justify-between gap-4">
    <div className="flex flex-col gap-1.5">
      {eyebrow && <p className="text-sm text-muted-foreground">{eyebrow}</p>}
      <h2 id={id} className="text-xl font-bold tracking-tight md:text-2xl">{title}</h2>
    </div>
    {href && <a href={href} className="flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline">{linkText}<ArrowLeft className="size-4" aria-hidden="true" /></a>}
  </div>
}
