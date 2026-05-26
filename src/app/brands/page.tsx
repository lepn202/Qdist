import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brands',
  description: 'Discover the brands distributed by Quarter Distribution across Europe.',
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center section-padding pt-32">
      <div className="text-center">
        <span className="label-text text-foreground-subtle block mb-4">Coming Soon</span>
        <h1 className="font-display text-display-lg text-foreground">Brands</h1>
        <p className="text-sm text-foreground-muted mt-4 max-w-sm mx-auto">
          This page is under construction. Check back soon.
        </p>
      </div>
    </div>
  )
}
