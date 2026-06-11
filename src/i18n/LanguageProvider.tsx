'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { dictionaries, type Dictionary, type Locale } from './translations'

const STORAGE_KEY = 'qd-locale'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** Active dictionary for the current locale. */
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'de'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always render the default locale on the server / first paint to avoid a
  // hydration mismatch, then resolve the stored / browser preference on mount.
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) {
      setLocaleState(stored)
    } else if (navigator.language?.toLowerCase().startsWith('de')) {
      setLocaleState('de')
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore storage failures (e.g. private mode) — selection still applies
      // for the current session.
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: dictionaries[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

/** Convenience hook for components that only need the active dictionary. */
export function useT(): Dictionary {
  return useLanguage().t
}
