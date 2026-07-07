'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { CTASection } from '@/sections/CTASection'
import { staggerContainer, fadeUp, fadeRight } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useT } from '@/i18n/LanguageProvider'

function AboutHero() {
  const t = useT()

  return (
    <section className="relative bg-background overflow-hidden border-b border-border">
      {/* HQ building photo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/welcome.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 section-padding pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">{t.about.label}</span>
        </div>
        <h1 className="font-display text-display-xl text-foreground leading-display mb-6 max-w-3xl">
          {t.about.title}
        </h1>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-xl">
          {t.about.intro}
        </p>
      </motion.div>
    </section>
  )
}

function StorySection() {
  const { ref, inView } = useScrollAnimation(0.1)
  const t = useT()

  return (
    <section className="bg-background section-padding section-py">
      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.12)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Copy */}
        <div>
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" />
            <span className="label-text">{t.about.storyLabel}</span>
          </motion.div>
          {t.about.story.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-sm text-foreground-muted leading-relaxed mb-6 max-w-md"
            >
              {para}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="mt-8 pt-8 border-t border-border max-w-md">
            <p className="label-text text-foreground-subtle mb-3">{t.about.approachLabel}</p>
            <p className="text-sm text-foreground leading-relaxed">{t.about.approach}</p>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          variants={fadeRight}
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[480px] overflow-hidden order-first lg:order-last"
        >
          <Image
            src="/images/feature-01.jpg"
            alt="Freshly pressed maple decks stacked at the Quarter Distribution facility"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function StatsSection() {
  const { ref, inView } = useScrollAnimation(0.15)
  const t = useT()

  return (
    <section className="bg-surface border-y border-border section-padding py-16 md:py-20">
      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.08)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8"
      >
        {t.about.stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <p className="font-display text-4xl md:text-5xl text-foreground leading-none">
              {stat.value}
            </p>
            <p className="label-text text-foreground-subtle mt-3">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function PillarsSection() {
  const { ref, inView } = useScrollAnimation(0.1)
  const t = useT()

  return (
    <section className="bg-background section-padding section-py">
      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.1)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12 lg:mb-16">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">{t.about.pillarsLabel}</span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {t.about.pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="bg-surface p-8 lg:p-10 min-h-[220px] flex flex-col"
            >
              <h3 className="font-display text-display-sm text-foreground mb-3">{pillar.title}</h3>
              <p className="text-xs text-foreground-muted leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function LocationsSection() {
  const { ref, inView } = useScrollAnimation(0.15)
  const t = useT()

  return (
    <section className="bg-surface border-t border-border section-padding py-16 md:py-20">
      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.08)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">{t.about.locationsLabel}</span>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {t.about.locations.map((loc) => (
            <motion.div key={loc.name} variants={fadeUp} className="flex gap-3">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium">{loc.name}</p>
                <p className="text-xs text-foreground-muted mt-1 leading-relaxed">{loc.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export function AboutContent() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <StatsSection />
      <PillarsSection />
      <LocationsSection />
      <CTASection />
    </>
  )
}
