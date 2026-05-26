'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Returns a ref and a boolean that becomes true once the element
 * is 15% visible in the viewport. Stays true (no re-trigger on scroll out).
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref  = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}
