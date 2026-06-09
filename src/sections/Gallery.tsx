'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, scaleIn } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { GALLERY } from '@/lib/constants'

export function Gallery() {
  const { ref, inView } = useScrollAnimation(0.1)

  return (
    <section className="bg-background section-padding py-20 md:py-24 overflow-hidden" aria-label="From the field">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-10">
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">From the Field</span>
        </div>
        <p className="text-xs text-foreground-muted max-w-xs">
          Boards we press, grip, and ship — out in the wild with the riders who put them to the test.
        </p>
      </div>

      {/* Compact thumbnail strip */}
      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.06)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-4 md:grid-cols-8 gap-px bg-border"
      >
        {GALLERY.map((photo) => (
          <motion.figure
            key={photo.src}
            variants={scaleIn}
            className="group relative overflow-hidden bg-surface"
            title={photo.alt}
          >
            <div className="relative aspect-square">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 25vw, 12vw"
                className="object-cover grayscale opacity-80 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
