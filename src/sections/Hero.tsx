'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { revealLine } from '@/animations/variants'
import { HERO_IMAGE, B2B_SHOP_URL, FOUNDED_YEAR } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

export function Hero() {
  const { scrollY } = useScroll()
  const contentY   = useTransform(scrollY, [0, 600], [0, 80])
  const contentOp  = useTransform(scrollY, [0, 500], [1, 0])
  const t = useT()

  return (
    <section
      className="relative h-svh min-h-[700px] bg-background flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Background production photo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Darken + tint so headline stays legible */}
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/20" />
      </div>

      {/* Grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 grid-texture pointer-events-none"
      />

      {/* Large watermark Q */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none"
      >
        <span className="font-display text-[55vw] leading-none text-white/[0.018] pr-[2%] translate-y-[5%]">
          Q
        </span>
      </div>

      {/* Gradient fade to bottom */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-background to-transparent pointer-events-none"
      />

      {/* Top meta bar */}
      <motion.div
        className="relative z-10 flex items-center justify-between section-padding pt-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        <div className="flex items-center gap-5">
          <span className="label-text text-foreground-subtle">
            {t.hero.est} {FOUNDED_YEAR}
          </span>
          <span className="w-5 h-px bg-foreground-subtle/50" />
          <span className="label-text text-foreground-subtle">{t.hero.europe}</span>
        </div>
        <span className="hidden md:block label-text text-foreground-subtle">
          {t.hero.metaRight}
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-end section-padding pb-16 md:pb-20"
        style={{ y: contentY, opacity: contentOp }}
      >
        {/* Small label */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-6 h-px bg-accent" />
          <span className="label-text">{t.hero.label}</span>
        </motion.div>

        {/* Headline — each word on own line with mask-clip reveal */}
        <div className="mb-10 md:mb-12">
          {t.hero.words.map(
            (word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  variants={revealLine}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.65 + i * 0.1, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className={`block font-display text-display-2xl leading-display ${
                    i >= 2 ? 'text-foreground/22' : 'text-foreground'
                  }`}
                >
                  {word}
                </motion.span>
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm text-foreground-muted max-w-xs leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={B2B_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-accent text-white text-xs tracking-extra-wide uppercase px-7 py-4 hover:bg-accent-hover transition-colors duration-200 font-sans font-medium"
            >
              {t.hero.b2bShop}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <Link
              href="/services"
              className="border border-border text-foreground text-xs tracking-extra-wide uppercase px-7 py-4 hover:border-foreground/40 hover:text-foreground transition-colors duration-200 font-sans"
            >
              {t.hero.ourServices}
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        aria-hidden
      >
        <span className="label-text text-[9px] text-foreground-subtle [writing-mode:vertical-lr] rotate-180">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-foreground-subtle" />
        </motion.div>
      </motion.div>
    </section>
  )
}
