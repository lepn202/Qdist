'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'
import { useHeaderScroll } from '@/hooks/useHeaderScroll'

export function Header() {
  const scrolled = useHeaderScroll(60)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        )}
      >
        <div className="flex items-center justify-between section-padding py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Quarter Distribution — Home"
          >
            <span className="font-display text-xl text-foreground tracking-expanded">
              Quarter
            </span>
            <span className="label-text text-[9px] mt-0.5 text-foreground-muted group-hover:text-foreground transition-colors">
              Distribution
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-label uppercase text-foreground-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Dealer CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/dealer-login"
              className="text-xs tracking-label uppercase text-foreground-muted hover:text-foreground transition-colors duration-200"
            >
              Dealer Login
            </Link>
            <Link
              href="/contact"
              className="bg-accent text-white text-xs tracking-extra-wide uppercase px-5 py-3 hover:bg-accent-hover transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-foreground-muted hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-20"
          >
            <nav className="flex flex-col px-6 pt-8 gap-0">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-5 border-b border-border-subtle"
                  >
                    <span className="font-display text-display-sm text-foreground">
                      {link.label}
                    </span>
                    <span className="text-foreground-subtle">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pt-8 flex flex-col gap-3">
              <Link
                href="/dealer-login"
                onClick={() => setMobileOpen(false)}
                className="border border-border text-foreground text-xs tracking-label uppercase px-6 py-4 text-center hover:border-foreground/40 transition-colors"
              >
                Dealer Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-accent text-white text-xs tracking-label uppercase px-6 py-4 text-center hover:bg-accent-hover transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
