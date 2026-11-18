import { MessageSquareMore } from 'lucide-react'

export function SupportWidget() {
  return <div className="support-widget" role="img" aria-label="پشتیبانی">
    <span className="support-trigger" aria-hidden="true">
      <MessageSquareMore />
    </span>
  </div>
}
