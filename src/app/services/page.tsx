'use client'

import { motion } from 'framer-motion'
import { ServicesGrid } from '@/sections/ServicesGrid'
import { Manufacturing } from '@/sections/Manufacturing'
import { Gallery } from '@/sections/Gallery'
import { CTASection } from '@/sections/CTASection'
import { fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function PageHero() {
  const { ref, inView } = useScrollAnimation(0.1)

  return (
    <section className="bg-background section-padding pt-36 pb-20 md:pt-44 md:pb-24 border-b border-border">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">Services</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-display text-display-xl text-foreground leading-display mb-6 max-w-2xl"
        >
          Distribution,<br />
          <span className="text-foreground/30">Production & OEM</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-sm text-foreground-muted leading-relaxed max-w-md"
        >
          Everything from pressing your first deck to distributing your brand across
          Europe — under one roof, since 2013.
        </motion.p>
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
