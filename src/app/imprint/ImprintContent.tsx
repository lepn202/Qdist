'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COMPANY } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 py-5 border-b border-border"
    >
      <p className="label-text text-foreground-subtle">{label}</p>
      <div className="text-sm text-foreground-muted leading-relaxed">{children}</div>
    </motion.div>
  )
}

export function ImprintContent() {
  const { ref, inView } = useScrollAnimation(0.05)
  const t = useT()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding pt-36 pb-16 md:pt-44 md:pb-20 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" />
            <span className="label-text">{t.imprint.label}</span>
          </div>
          <h1 className="font-display text-display-xl text-foreground leading-display mb-6">
            {t.imprint.title}
          </h1>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-xl">
            {t.imprint.intro}
          </p>
        </motion.div>
      </section>

      {/* Details */}
      <section className="section-padding py-16 md:py-20">
        <motion.div
          ref={ref}
          variants={staggerContainer(0, 0.06)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="max-w-2xl"
        >
          <div className="border-t border-border">
            <Row label={t.imprint.companyLabel}>
              <p className="text-foreground">{COMPANY.legalName}</p>
              {COMPANY.registeredAddress.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </Row>

            <Row label={t.imprint.directorsLabel}>{COMPANY.managingDirectors}</Row>

            <Row label={t.imprint.contactLabel}>
              <a
                href={`mailto:${COMPANY.legalEmail}`}
                className="block text-foreground hover:text-foreground-muted transition-colors"
              >
                {COMPANY.legalEmail}
              </a>
              <a
                href={`tel:${COMPANY.legalPhoneHref}`}
                className="block hover:text-foreground transition-colors"
              >
                {COMPANY.legalPhone}
              </a>
            </Row>

            <Row label={t.imprint.registerLabel}>{COMPANY.register}</Row>

            <Row label={t.imprint.vatLabel}>{COMPANY.vatId}</Row>

            <Row label={t.imprint.bankLabel}>
              <p>{COMPANY.bank.name}</p>
              <p>IBAN: {COMPANY.bank.iban}</p>
              <p>BIC: {COMPANY.bank.bic}</p>
            </Row>

            <Row label={t.imprint.locationLabel}>
              {COMPANY.warehouseAddress.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </Row>
          </div>

          {/* Disclaimers */}
          <motion.div variants={fadeUp} className="mt-16">
            <p className="label-text text-foreground-subtle mb-8">{t.imprint.disclaimerLabel}</p>
            <div className="flex flex-col gap-8">
              {t.imprint.disclaimers.map((item) => (
                <div key={item.heading}>
                  <h2 className="text-sm text-foreground font-medium mb-2">{item.heading}</h2>
                  <p className="text-xs text-foreground-muted leading-relaxed max-w-2xl">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
