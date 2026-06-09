import Image from 'next/image'
import Link from 'next/link'
import { SITE_NAME, NAV_LINKS, CONTACT_EMAIL, SOCIAL_LINKS, FOUNDED_YEAR } from '@/lib/constants'

const serviceLinks = [
  { label: 'Distribution', href: '/services' },
  { label: 'OEM Production', href: '/services' },
  { label: 'Custom Decks', href: '/services' },
  { label: 'Grip Tape', href: '/services' },
]

export function Footer() {
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
              Premium European skateboard distribution & OEM manufacturing since {FOUNDED_YEAR}.
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
            <p className="label-text mb-5 text-foreground-subtle">Navigation</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="label-text mb-5 text-foreground-subtle">Services</p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-text mb-5 text-foreground-subtle">Contact</p>
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
                <Link
                  href="/contact"
                  className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  Send an Inquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/dealer-login"
                  className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  Dealer Portal
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <p className="label-text mb-3 text-foreground-subtle">B2B</p>
              <Link
                href="/dealer-login"
                className="inline-block bg-accent text-white text-xs tracking-extra-wide uppercase px-5 py-3 hover:bg-accent-hover transition-colors"
              >
                Become a Dealer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="section-padding py-5 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[11px] text-foreground-subtle">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="text-[11px] text-foreground-subtle hover:text-foreground-muted transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[11px] text-foreground-subtle hover:text-foreground-muted transition-colors">
            Terms of Service
          </Link>
          <Link href="/imprint" className="text-[11px] text-foreground-subtle hover:text-foreground-muted transition-colors">
            Imprint
          </Link>
        </div>
      </div>
    </footer>
  )
}
