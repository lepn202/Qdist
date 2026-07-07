'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useT } from '@/i18n/LanguageProvider'

export function References() {
  const { ref, inView } = useScrollAnimation(0.1)
  const t = useT()

  return (
    <section className="bg-surface border-y border-border section-padding section-py">
      <SectionHeader
        label={t.references.label}
        title={t.references.title}
        description={t.references.description}
        className="mb-16 lg:mb-20"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
      >
        {t.references.items.map((item, i) => (
          <ReferenceCard key={i} {...item} index={i} />
        ))}
      </motion.div>
    </section>
  )
}

function ReferenceCard({
  quote,
  author,
  company,
  location,
  index,
}: {
  quote:    string
  author:   string
  company:  string
  location: string
  index:    number
}) {
  return (
    <motion.blockquote
      variants={fadeUp}
      className="group bg-surface hover:bg-surface-2 transition-colors duration-200 p-8 lg:p-10 flex flex-col justify-between gap-8"
    >
      {/* Quote mark */}
      <Quote
        className="w-6 h-6 text-foreground-subtle group-hover:text-accent transition-colors duration-200 flex-shrink-0"
        aria-hidden
      />

      {/* Text */}
      <p className="text-sm text-foreground-muted leading-relaxed flex-1">
        "{quote}"
      </p>

      {/* Attribution */}
      <footer className="border-t border-border pt-6">
        <p className="text-xs text-foreground font-medium">{author}</p>
        <p className="text-xs text-foreground-muted mt-0.5">{company}</p>
        {location && <p className="label-text text-foreground-subtle mt-1">{location}</p>}
      </footer>
    </motion.blockquote>
  )
}
