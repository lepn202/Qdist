'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'
import { LOCALES, LOCALE_LABELS } from '@/i18n/translations'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className={cn(
        'flex items-center text-xs tracking-label uppercase',
        className
      )}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span aria-hidden className="mx-1.5 text-foreground-subtle/40">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            aria-label={LOCALE_LABELS[l]}
            className={cn(
              'transition-colors duration-200',
              locale === l
                ? 'text-foreground'
                : 'text-foreground-subtle hover:text-foreground'
            )}
          >
            {LOCALE_LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  )
}
