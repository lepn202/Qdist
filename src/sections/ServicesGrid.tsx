'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SERVICES } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

export function ServicesGrid() {
  const { ref, inView } = useScrollAnimation(0.1)
  const t = useT()

  return (
    <section className="bg-background section-padding section-py">
      <SectionHeader
        label={t.servicesGrid.label}
        title={t.servicesGrid.title}
        description={t.servicesGrid.description}
        className="mb-16 lg:mb-20"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer(0, 0.08)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
      >
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.number}
            number={service.number}
            image={service.image}
            title={t.servicesGrid.items[i].title}
            description={t.servicesGrid.items[i].description}
          />
        ))}
      </motion.div>
    </section>
  )
}

function ServiceCard({
  number,
  title,
  description,
  image,
}: {
  number:      string
  title:       string
  description: string
  image:       string
}) {
  return (
    <motion.div variants={fadeUp} className="group">
      <article className="relative bg-surface p-8 lg:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden transition-colors duration-300 group-hover:bg-surface-2">
        {/* Background photo — dim by default, surfaces on hover */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-15 grayscale scale-105 transition-all duration-500 group-hover:opacity-35 group-hover:grayscale-0 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/85 to-surface/40 transition-colors duration-300 group-hover:from-surface-2 group-hover:via-surface-2/75" />
        </div>

        {/* Number — decorative */}
        <span
          aria-hidden
          className="absolute top-6 right-8 font-display text-[5rem] leading-none text-foreground/[0.07] select-none transition-all duration-300 group-hover:text-foreground/[0.12] group-hover:-translate-y-1"
        >
          {number}
        </span>

        {/* Content */}
        <div className="relative flex-1 flex flex-col justify-end">
          <h3 className="font-display text-display-sm text-foreground mb-3 group-hover:text-foreground transition-colors">
            {title}
          </h3>
          <p className="text-xs text-foreground-muted leading-relaxed pr-8">
            {description}
          </p>
        </div>

        {/* Bottom accent line — appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </article>
    </motion.div>
  )
}
