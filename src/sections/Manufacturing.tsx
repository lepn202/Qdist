'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { staggerContainer, fadeUp, fadeRight, fadeLeft } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { STATS, CAPABILITIES } from '@/lib/constants'

export function Manufacturing() {
  const { ref: leftRef, inView: leftInView }   = useScrollAnimation(0.2)
  const { ref: rightRef, inView: rightInView } = useScrollAnimation(0.15)

  return (
    <section className="bg-background section-py overflow-hidden" aria-label="Manufacturing">
      {/* Section label */}
      <div className="section-padding mb-0">
        <div className="flex items-center gap-3 mb-0">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">Manufacturing</span>
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
              European Manufacturing
            </span>

            <div>
              <p
                aria-hidden
                className="font-display text-[clamp(3rem,7vw,6rem)] leading-display text-foreground/[0.06] mb-6 select-none"
              >
                MADE IN<br />EUROPE
              </p>
              <h2 className="font-display text-display-md text-foreground leading-display">
                Precision-Built.<br />
                <span className="text-foreground/40">Premium Materials.</span>
              </h2>
            </div>

            {/* Capabilities list */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6">
              {CAPABILITIES.slice(0, 6).map((cap) => (
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
              Manufacturing<br />
              <span className="text-foreground/30">Excellence</span>
            </motion.h2>
            <motion.p
              variants={fadeRight}
              className="text-sm text-foreground-muted leading-relaxed max-w-md"
            >
              From custom pressing to full OEM runs, our European production infrastructure
              delivers consistent quality at scale. Every deck, grip, and hardware piece
              is produced to strict tolerances with full QC inspection.
            </motion.p>
          </div>

          {/* Stats grid */}
          <motion.div
            variants={staggerContainer(0, 0.08)}
            className="grid grid-cols-2 gap-px bg-border my-10"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-background p-6"
              >
                <span className="font-display text-display-md text-foreground block leading-none mb-2">
                  {stat.value}
                </span>
                <span className="label-text text-foreground-subtle">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Process highlights */}
          <motion.div variants={fadeRight}>
            <p className="label-text text-foreground-subtle mb-4">Process</p>
            <div className="flex flex-col gap-0 border-t border-border">
              {[
                ['01', 'Sampling & Prototyping'],
                ['02', 'Material Sourcing'],
                ['03', 'Production Run'],
                ['04', 'QC Inspection & Dispatch'],
              ].map(([n, label]) => (
                <div
                  key={n}
                  className="flex items-center justify-between py-4 border-b border-border group hover:bg-surface transition-colors duration-150 px-0"
                >
                  <span className="text-xs text-foreground-subtle font-mono">{n}</span>
                  <span className="text-xs text-foreground-muted group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
