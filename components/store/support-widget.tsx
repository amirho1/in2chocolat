'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageSquareMore, X } from 'lucide-react'

export function SupportWidget() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  function close() {
    setOpen(false)
    triggerRef.current?.focus({ preventScroll: true })
  }

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus({ preventScroll: true })
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus({ preventScroll: true })
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return <div ref={containerRef} className="support-widget" data-open={open}>
    <section id="support-demo-panel" role="dialog" aria-label="پشتیبانی ایندو" aria-hidden={!open} inert={!open} className="support-panel">
      <div className="flex items-center justify-between gap-3 border-b bg-secondary px-5 py-3">
        <div className="flex items-center gap-2 text-primary"><MessageSquareMore className="size-5" aria-hidden="true" /><h2 className="text-sm font-bold">پشتیبانی ایندو</h2></div>
        <button ref={closeRef} type="button" onClick={close} aria-label="بستن پشتیبانی" className="flex size-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-hero hover:text-primary"><X className="size-5" /></button>
      </div>
      <div className="flex flex-col items-start gap-3 p-5">
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-primary">نسخه نمایشی</span>
        <p className="text-base font-bold leading-7">سلام، چطور می‌تونیم کمکتون کنیم؟</p>
        <p className="text-sm leading-7 text-muted-foreground">این پنجره نمونه نمایشی پشتیبانی است و پیامی ارسال نمی‌کند.</p>
      </div>
    </section>
    <span className="support-tooltip" aria-hidden="true">پشتیبانی؛ کنار شما هستیم</span>
    <button ref={triggerRef} type="button" className="support-trigger" onClick={() => setOpen(!open)} aria-label={open ? 'بستن پشتیبانی' : 'باز کردن پشتیبانی'} aria-expanded={open} aria-controls="support-demo-panel" aria-haspopup="dialog">
      <span className="support-icon support-chat-icon" aria-hidden="true"><MessageSquareMore /></span>
      <span className="support-icon support-close-icon" aria-hidden="true"><X /></span>
    </button>
  </div>
}
