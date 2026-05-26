import type { Variants } from 'framer-motion'

/* Premium easing curves */
export const ease = {
  out:     [0.16, 1, 0.3, 1],
  inOut:   [0.45, 0, 0.55, 1],
  spring:  { type: 'spring', stiffness: 100, damping: 20 },
} as const

/* Reusable motion variants */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.out } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.8, ease: ease.out } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.8, ease: ease.out } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.6, ease: ease.out } },
}

/* Reveal text line from bottom (mask-clip trick) */
export const revealLine: Variants = {
  hidden: { y: '110%' },
  show:   { y: '0%', transition: { duration: 0.95, ease: ease.out } },
}

/* Container — staggers children */
export const staggerContainer = (delay = 0, stagger = 0.12): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
})

export const staggerFast = staggerContainer(0, 0.08)
export const staggerSlow = staggerContainer(0, 0.18)

/* Card hover */
export const cardHover = {
  rest:  { y: 0,  transition: { duration: 0.25, ease: 'easeOut' } },
  hover: { y: -6, transition: { duration: 0.25, ease: 'easeOut' } },
}
