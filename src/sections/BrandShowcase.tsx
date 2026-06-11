'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeIn } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { BRANDS, type Brand } from '@/lib/constants'

export function BrandShowcase() {
  const { ref, inView } = useScrollAnimation(0.15)

  return (
    <section className="bg-surface border-y border-border section-padding py-20 md:py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.06)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {/* Header row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-accent" />
            <span className="label-text">Distributed Brands</span>
          </div>
          <p className="text-xs text-foreground-muted max-w-xs">
            Working with independent and international skate brands worldwide.
          </p>
        </motion.div>

        {/* Brand grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border"
        >
          {BRANDS.map((brand) => (
            <BrandCell key={brand.name} brand={brand} />
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={fadeIn}
          className="mt-8 text-xs text-foreground-subtle text-center"
        >
          + more brands across Europe and worldwide
        </motion.p>
      </motion.div>
    </section>
  )
}

function BrandCell({ brand }: { brand: Brand }) {
  return (
    <motion.a
      variants={fadeUp}
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${brand.name}`}
      className="group relative bg-surface hover:bg-surface-2 transition-colors duration-200 overflow-hidden outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-inset"
    >
      {brand.image ? (
        /* Full-bleed brand tile (photo + logo) */
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-300 ease-out"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center px-6 py-8 min-h-[100px]">
          {brand.logo ? (
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={140}
              height={48}
              className="max-h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200"
            />
          ) : (
            /* Wordmark fallback — replace by setting `image` or `logo` on the brand in constants.ts */
            <span className="font-display text-sm tracking-expanded text-foreground-subtle group-hover:text-foreground transition-colors duration-200 text-center leading-tight">
              {brand.name}
            </span>
          )}
        </div>
      )}
    </motion.a>
  )
}
