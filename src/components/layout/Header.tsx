'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, B2B_SHOP_URL } from '@/lib/constants'
import { useHeaderScroll } from '@/hooks/useHeaderScroll'
import { useT } from '@/i18n/LanguageProvider'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'

export function Header() {
  const scrolled = useHeaderScroll(60)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useT()

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
            className="group flex items-center"
            aria-label="Quarter Distribution — Home"
          >
            <Image
              src="/images/quarter-dist-logo-white.png"
              alt="Quarter Distribution"
              width={591}
              height={296}
              priority
              className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-label uppercase text-foreground-muted hover:text-foreground transition-colors duration-200"
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>

          {/* B2B CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <span aria-hidden className="w-px h-4 bg-border" />
            <a
              href={B2B_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 bg-accent text-white text-xs tracking-extra-wide uppercase px-5 py-3 hover:bg-accent-hover transition-colors duration-200 font-sans font-medium"
            >
              {t.header.b2bShop}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <Link
              href="/contact"
              className="border border-border text-foreground text-xs tracking-extra-wide uppercase px-5 py-3 hover:border-foreground/40 transition-colors duration-200"
            >
              {t.header.getInTouch}
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
                      {t.nav[link.key]}
                    </span>
                    <span className="text-foreground-subtle">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pt-8 flex flex-col gap-3">
              <a
                href={B2B_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 bg-accent text-white text-xs tracking-label uppercase px-6 py-4 text-center hover:bg-accent-hover transition-colors font-medium"
              >
                {t.header.b2bShop}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="border border-border text-foreground text-xs tracking-label uppercase px-6 py-4 text-center hover:border-foreground/40 transition-colors"
              >
                {t.header.getInTouch}
              </Link>

              <LanguageSwitcher className="mt-4 justify-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
