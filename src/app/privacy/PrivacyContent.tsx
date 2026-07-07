'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COMPANY } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

export function PrivacyContent() {
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
            <span className="label-text">{t.privacy.label}</span>
          </div>
          <h1 className="font-display text-display-xl text-foreground leading-display mb-6 max-w-2xl">
            {t.privacy.title}
          </h1>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-xl">
            {t.privacy.intro}
          </p>
        </motion.div>
      </section>

      {/* Body */}
      <section className="section-padding py-16 md:py-20">
        <motion.div
          ref={ref}
          variants={staggerContainer(0, 0.08)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="max-w-2xl flex flex-col gap-12"
        >
          {/* Data controller */}
          <motion.div variants={fadeUp}>
            <p className="label-text text-foreground-subtle mb-4">{t.privacy.controllerLabel}</p>
            <div className="text-sm text-foreground-muted leading-relaxed">
              <p className="text-foreground">{COMPANY.legalName}</p>
              {COMPANY.registeredAddress.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a
                href={`mailto:${COMPANY.legalEmail}`}
                className="text-foreground hover:text-foreground-muted transition-colors"
              >
                {COMPANY.legalEmail}
              </a>
            </div>
          </motion.div>

          {/* Sections */}
          {t.privacy.sections.map((section) => (
            <motion.div key={section.heading} variants={fadeUp}>
              <h2 className="font-display text-display-sm text-foreground mb-4">{section.heading}</h2>
              <div className="flex flex-col gap-4">
                {section.body.map((para, i) => (
                  <p key={i} className="text-sm text-foreground-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div variants={fadeUp} className="bg-surface border border-border p-6">
            <p className="label-text text-foreground-subtle mb-3">{t.privacy.contactLabel}</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              {t.privacy.contactBody}{' '}
              <a
                href={`mailto:${COMPANY.legalEmail}`}
                className="text-foreground hover:text-foreground-muted transition-colors"
              >
                {COMPANY.legalEmail}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
