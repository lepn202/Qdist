'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BrandShowcase } from '@/sections/BrandShowcase'
import { References } from '@/sections/References'
import { fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function PageHero() {
  const { ref, inView } = useScrollAnimation(0.1)

  return (
    <section className="relative bg-background overflow-hidden border-b border-border">
      {/* Background action photo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/action-kickflip.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Left-weighted scrim keeps copy legible while the photo stays visible on the right */}
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="relative z-10 section-padding pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">Brands & References</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-display text-display-xl text-foreground leading-display mb-6 max-w-2xl"
        >
          The Brands<br />
          <span className="text-foreground/40">We Stand Behind</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-sm text-foreground-muted leading-relaxed max-w-md"
        >
          Independent and international skate brands distributed across Europe — plus
          what our partners say about working with us.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default function BrandsPage() {
  return (
    <>
      <PageHero />
      <BrandShowcase />
      <References />
    </>
  )
}
