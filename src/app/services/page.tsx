'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ServicesGrid } from '@/sections/ServicesGrid'
import { Manufacturing } from '@/sections/Manufacturing'
import { Gallery } from '@/sections/Gallery'
import { CTASection } from '@/sections/CTASection'
import { staggerContainer, fadeUp, fadeRight } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { STATS, B2B_SHOP_URL } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

function PageHero() {
  const { ref, inView } = useScrollAnimation(0.1)
  const t = useT()

  return (
    <section className="relative bg-background overflow-hidden border-b border-border section-padding pt-32 pb-16 md:pt-40 md:pb-20">
      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.1)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Left — copy */}
        <div>
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" />
            <span className="label-text">{t.servicesPage.label}</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-display-xl text-foreground leading-display mb-6"
          >
            {t.servicesPage.titleLine1}<br />
            <span className="text-foreground/40">{t.servicesPage.titleLine2}</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-sm text-foreground-muted leading-relaxed max-w-md"
          >
            {t.servicesPage.description}
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-10 gap-y-6 mt-10 pt-8 border-t border-border"
          >
            {STATS.slice(0, 3).map((stat, i) => (
              <div key={stat.value}>
                <p className="font-display text-2xl text-foreground leading-none">
                  {stat.value}
                </p>
                <p className="label-text text-foreground-subtle mt-2">{t.stats[i]}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mt-10">
            <a
              href={B2B_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-accent text-white text-xs tracking-extra-wide uppercase px-7 py-4 hover:bg-accent-hover transition-colors duration-200 font-sans font-medium"
            >
              {t.header.b2bShop}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <Link
              href="/contact"
              className="border border-border text-foreground text-xs tracking-extra-wide uppercase px-7 py-4 hover:border-foreground/40 transition-colors duration-200 font-sans"
            >
              {t.header.getInTouch}
            </Link>
          </motion.div>
        </div>

        {/* Right — visible production photo */}
        <motion.div
          variants={fadeRight}
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[540px] overflow-hidden"
        >
          <Image
            src="/images/production-print.jpg"
            alt="Custom deck production at the Quarter Distribution press"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Subtle scrim for caption legibility */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
          />
          {/* Caption tag */}
          <div className="absolute bottom-5 left-5 flex items-center gap-3">
            <span className="w-6 h-px bg-accent" />
            <span className="label-text text-white/90">{t.servicesPage.caption}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
      <Manufacturing />
      <Gallery />
      <CTASection />
    </>
  )
}
