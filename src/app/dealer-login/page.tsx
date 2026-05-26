import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dealer Login',
  description: 'Quarter Distribution B2B dealer portal login.',
  robots: { index: false, follow: false },
}

export default function DealerLoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center section-padding pt-20">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-10">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl text-foreground tracking-expanded">Quarter</span>
            <span className="label-text text-[9px] mt-0.5 text-foreground-muted">Distribution</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-px bg-accent" />
          <span className="label-text">Dealer Portal</span>
        </div>

        <h1 className="font-display text-display-md text-foreground leading-display mb-8">
          B2B Login
        </h1>

        {/* Placeholder form */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="label-text text-foreground-subtle" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="bg-surface border border-border text-foreground placeholder-foreground-subtle text-sm px-4 py-3 focus:outline-none focus:border-foreground/40 transition-colors"
              placeholder="dealer@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="label-text text-foreground-subtle" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="bg-surface border border-border text-foreground placeholder-foreground-subtle text-sm px-4 py-3 focus:outline-none focus:border-foreground/40 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-accent text-white text-xs tracking-extra-wide uppercase px-6 py-4 hover:bg-accent-hover transition-colors font-sans font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-foreground-muted leading-relaxed">
            No account yet?{' '}
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Apply to become a dealer →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
