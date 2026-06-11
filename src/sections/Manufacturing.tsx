'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { staggerContainer, fadeUp, fadeRight, fadeLeft } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { STATS } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

export function Manufacturing() {
  const { ref: leftRef, inView: leftInView }   = useScrollAnimation(0.2)
  const { ref: rightRef, inView: rightInView } = useScrollAnimation(0.15)
  const t = useT()

  return (
    <section className="bg-background section-py overflow-hidden" aria-label="Manufacturing">
      {/* Section label */}
      <div className="section-padding mb-0">
        <div className="flex items-center gap-3 mb-0">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">{t.manufacturing.label}</span>
        </div>
      </div>

      <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left — visual panel */}
        <motion.div
          ref={leftRef}
          variants={fadeLeft}
          initial="hidden"
          animate={leftInView ? 'show' : 'hidden'}
          className="relative bg-surface-2 min-h-[480px] lg:min-h-[620px] overflow-hidden"
        >
          {/* Production photo */}
          <Image
            src="/images/production-heat-press.jpg"
            alt="Deck pressing on the production line"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Darken so overlaid copy stays legible */}
          <div aria-hidden className="absolute inset-0 bg-background/70" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

          {/* Industrial grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 grid-texture opacity-60"
          />

          {/* Diagonal accent stripe */}
          <div
            aria-hidden
            className="absolute -top-20 -left-20 w-[160%] h-[200px] bg-accent/5 -rotate-12 pointer-events-none"
          />

          {/* Layered text overlay */}
          <div className="absolute inset-0 flex flex-col justify-between section-padding py-10">
            <span className="label-text text-foreground-subtle">
              {t.manufacturing.european}
            </span>

            <div>
              <p
                aria-hidden
                className="font-display text-[clamp(3rem,7vw,6rem)] leading-display text-foreground/[0.06] mb-6 select-none"
              >
                {t.manufacturing.madeInLine1}<br />{t.manufacturing.madeInLine2}
              </p>
              <h2 className="font-display text-display-md text-foreground leading-display">
                {t.manufacturing.precisionLine1}<br />
                <span className="text-foreground/40">{t.manufacturing.precisionLine2}</span>
              </h2>
            </div>

            {/* Capabilities list */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6">
              {t.manufacturing.capabilities.slice(0, 6).map((cap) => (
                <li key={cap} className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-accent flex-shrink-0" />
                  <span className="text-xs text-foreground-muted">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom border accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/40" />
        </motion.div>

        {/* Right — stats + copy */}
        <motion.div
          ref={rightRef}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={rightInView ? 'show' : 'hidden'}
          className="flex flex-col justify-between section-padding py-12 lg:py-16 bg-background border-l border-border"
        >
          {/* Headline */}
          <div>
            <motion.h2
              variants={fadeRight}
              className="font-display text-display-lg text-foreground leading-display mb-6"
            >
              {t.manufacturing.headlineLine1}<br />
              <span className="text-foreground/30">{t.manufacturing.headlineLine2}</span>
            </motion.h2>
            <motion.p
              variants={fadeRight}
              className="text-sm text-foreground-muted leading-relaxed max-w-md"
            >
              {t.manufacturing.description}
            </motion.p>
          </div>

          {/* Stats grid */}
          <motion.div
            variants={staggerContainer(0, 0.08)}
            className="grid grid-cols-2 gap-px bg-border my-10"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                variants={fadeUp}
                className="bg-background p-6"
              >
                <span className="font-display text-display-md text-foreground block leading-none mb-2">
                  {stat.value}
                </span>
                <span className="label-text text-foreground-subtle">{t.stats[i]}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Process highlights */}
          <motion.div variants={fadeRight}>
            <p className="label-text text-foreground-subtle mb-4">{t.manufacturing.process}</p>
            <div className="flex flex-col gap-0 border-t border-border">
              {t.manufacturing.steps.map((label, i) => {
                const n = String(i + 1).padStart(2, '0')
                return (
                <div
                  key={n}
                  className="flex items-center justify-between py-4 border-b border-border group hover:bg-surface transition-colors duration-150 px-0"
                >
                  <span className="text-xs text-foreground-subtle font-mono">{n}</span>
                  <span className="text-xs text-foreground-muted group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                </div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
