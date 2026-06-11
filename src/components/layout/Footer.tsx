'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_NAME, NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, SOCIAL_LINKS, FOUNDED_YEAR, B2B_SHOP_URL } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

export function Footer() {
  const t = useT()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      {/* Main grid */}
      <div className="section-padding pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/images/quarter-dist-logo-white.png"
                alt="Quarter Distribution"
                width={591}
                height={296}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-xs text-foreground-muted leading-relaxed max-w-[220px]">
              {t.footer.description.replace('{year}', String(FOUNDED_YEAR))}
            </p>
            <div className="flex items-center gap-4 mt-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-label uppercase text-foreground-subtle hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-text mb-5 text-foreground-subtle">{t.footer.navigation}</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="label-text mb-5 text-foreground-subtle">{t.footer.services}</p>
            <ul className="flex flex-col gap-3">
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="/services"
                    className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-text mb-5 text-foreground-subtle">{t.footer.contact}</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_HREF}`}
                  className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  {t.footer.sendInquiry}
                </Link>
              </li>
              <li>
                <a
                  href={B2B_SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  {t.header.b2bShop}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <p className="label-text mb-3 text-foreground-subtle">{t.footer.b2b}</p>
              <a
                href={B2B_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-white text-xs tracking-extra-wide uppercase px-5 py-3 hover:bg-accent-hover transition-colors"
              >
                {t.header.b2bShop}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="section-padding py-5 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[11px] text-foreground-subtle">
          © {year} {SITE_NAME}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="text-[11px] text-foreground-subtle hover:text-foreground-muted transition-colors">
            {t.footer.privacy}
          </Link>
          <Link href="/terms" className="text-[11px] text-foreground-subtle hover:text-foreground-muted transition-colors">
            {t.footer.terms}
          </Link>
          <Link href="/imprint" className="text-[11px] text-foreground-subtle hover:text-foreground-muted transition-colors">
            {t.footer.imprint}
          </Link>
        </div>
      </div>
    </footer>
  )
}
