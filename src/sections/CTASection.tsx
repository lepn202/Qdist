'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { HQ_IMAGE, B2B_SHOP_URL, CONTACT_EMAIL } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

export function CTASection() {
  const { ref, inView } = useScrollAnimation(0.2)
  const t = useT()

  return (
    <section
      className="bg-background section-padding py-28 md:py-36 lg:py-44 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background HQ photo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src={HQ_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Background large text watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
      >
        <span className="font-display text-[clamp(5rem,20vw,22rem)] leading-none text-foreground/[0.025] whitespace-nowrap">
          QUARTER
        </span>
      </div>

      {/* Top rule */}
      <div className="divider-line mb-16 lg:mb-20" />

      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.12)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="relative z-10 max-w-4xl"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">{t.cta.label}</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-display text-display-xl text-foreground leading-display mb-8"
        >
          {t.cta.titleLine1}<br />
          <span className="text-foreground/25">{t.cta.titleLine2}</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-sm text-foreground-muted leading-relaxed max-w-md mb-12"
        >
          {t.cta.description}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
          <a
            href={B2B_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-accent text-white text-xs tracking-extra-wide uppercase px-8 py-5 hover:bg-accent-hover transition-colors duration-200 font-sans font-medium"
          >
            {t.cta.visitB2b}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
          <Link
            href="/contact"
            className="group flex items-center gap-2 border border-border text-foreground text-xs tracking-extra-wide uppercase px-8 py-5 hover:border-foreground/40 transition-colors duration-200 font-sans"
          >
            {t.cta.requestQuote}
            <ArrowUpRight className="w-3.5 h-3.5 text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom rule */}
      <div className="divider-line mt-16 lg:mt-20" />

      {/* Meta info row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
        <div className="flex items-center gap-6">
          <span className="label-text text-foreground-subtle">{t.cta.b2bOnly}</span>
          <span className="w-4 h-px bg-border" />
          <span className="label-text text-foreground-subtle">{t.cta.europeBased}</span>
          <span className="w-4 h-px bg-border" />
          <span className="label-text text-foreground-subtle">{t.cta.globalShipping}</span>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-xs text-foreground-subtle hover:text-foreground-muted transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  )
}
