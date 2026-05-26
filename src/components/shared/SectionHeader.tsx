'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Props {
  label:        string
  title:        string
  description?: string
  align?:       'left' | 'center'
  className?:   string
  titleSize?:   'lg' | 'xl'
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className,
  titleSize = 'lg',
}: Props) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(0, 0.1)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={cn(
        align === 'center' && 'text-center items-center',
        'flex flex-col',
        className
      )}
    >
      <motion.div
        variants={fadeUp}
        className={cn(
          'flex items-center gap-3 mb-5',
          align === 'center' && 'justify-center'
        )}
      >
        <div className="w-6 h-px bg-accent flex-shrink-0" />
        <span className="label-text">{label}</span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className={cn(
          'font-display text-foreground uppercase leading-display',
          titleSize === 'xl' ? 'text-display-xl' : 'text-display-lg'
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'mt-5 text-sm text-foreground-muted leading-relaxed',
            align === 'center' ? 'max-w-lg mx-auto' : 'max-w-md'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
