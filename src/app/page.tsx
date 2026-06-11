'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '@/sections/Hero'
import { CTASection } from '@/sections/CTASection'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useT } from '@/i18n/LanguageProvider'

// All three pillars link to the services page; their text comes from the i18n
// dictionary (home.pillars).
const PILLAR_HREF = '/services'

function PillarsSection() {
  const { ref, inView } = useScrollAnimation(0.15)
  const t = useT()

  return (
    <section className="bg-background section-padding py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.1)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12 lg:mb-16">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">{t.home.pillarsLabel}</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {t.home.pillars.map((pillar) => (
            <motion.div key={pillar.label} variants={fadeUp}>
              <Link href={PILLAR_HREF} className="group block bg-surface hover:bg-surface-2 transition-colors duration-200 p-8 lg:p-10">
                <h3 className="font-display text-display-sm text-foreground mb-3 group-hover:text-foreground transition-colors">
                  {pillar.label}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="label-text text-accent">{t.home.learnMore}</span>
                  <ArrowUpRight className="w-3 h-3 text-accent" />
                </div>
                <div className="mt-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <CTASection />
    </>
  )
}
