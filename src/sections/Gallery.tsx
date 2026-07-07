'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { staggerContainer, scaleIn } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { GALLERY } from '@/lib/constants'
import { useT } from '@/i18n/LanguageProvider'

export function Gallery() {
  const { ref, inView } = useScrollAnimation(0.1)
  const t = useT()

  // `null` means the lightbox is closed; otherwise it's the active photo index.
  const [active, setActive] = useState<number | null>(null)
  const isOpen = active !== null

  const showPrev = useCallback(() => {
    setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length))
  }, [])
  const showNext = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % GALLERY.length))
  }, [])

  // Arrow-key navigation while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, showPrev, showNext])

  const activePhoto = active !== null ? GALLERY[active] : null

  return (
    <section className="bg-background section-padding py-20 md:py-24 overflow-hidden" aria-label="From the field">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-10">
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-accent" />
          <span className="label-text">{t.gallery.label}</span>
        </div>
        <p className="text-xs text-foreground-muted max-w-xs">
          {t.gallery.description}
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
        {GALLERY.map((photo, i) => (
          <motion.figure
            key={photo.src}
            variants={scaleIn}
            className="group relative overflow-hidden bg-surface"
            title={photo.alt}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              aria-label={`Expand image: ${photo.alt}`}
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 25vw, 12vw"
                  className="object-cover grayscale opacity-80 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            </button>
          </motion.figure>
        ))}
      </motion.div>

      {/* Lightbox */}
      <Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
          <Dialog.Content
            className="fixed inset-0 z-50 flex items-center justify-center section-padding focus:outline-none"
            aria-describedby={undefined}
          >
            {activePhoto && (
              <>
                <Dialog.Title className="sr-only">{activePhoto.alt}</Dialog.Title>

                {/* Close */}
                <Dialog.Close
                  className="absolute top-6 right-6 z-10 p-2 text-foreground-muted hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </Dialog.Close>

                {/* Prev */}
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-4 md:left-8 z-10 p-2 text-foreground-muted hover:text-foreground transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                {/* Image + caption */}
                <figure className="relative flex flex-col items-center max-w-5xl w-full">
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10]">
                    <Image
                      src={activePhoto.src}
                      alt={activePhoto.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 80vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-accent" />
                    <span className="label-text text-foreground-muted">{activePhoto.alt}</span>
                  </figcaption>
                </figure>

                {/* Next */}
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-4 md:right-8 z-10 p-2 text-foreground-muted hover:text-foreground transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
