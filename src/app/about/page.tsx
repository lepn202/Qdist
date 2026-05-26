import type { Metadata } from 'next'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: 'Quarter Distribution — About page.',
}

export default function Page() {
  const title = 'About'
  return (
    <div className="min-h-screen bg-background flex items-center justify-center section-padding pt-32">
      <div className="text-center">
        <span className="label-text text-foreground-subtle block mb-4">Coming Soon</span>
        <h1 className="font-display text-display-lg text-foreground capitalize">{title}</h1>
        <p className="text-sm text-foreground-muted mt-4 max-w-sm mx-auto">
          This page is under construction. Check back soon.
        </p>
      </div>
    </div>
  )
}
