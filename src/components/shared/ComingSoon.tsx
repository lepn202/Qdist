'use client'

import { useT } from '@/i18n/LanguageProvider'
import type { Dictionary } from '@/i18n/translations'

type StubKey = keyof Dictionary['stub']['titles']

export function ComingSoon({ titleKey }: { titleKey: StubKey }) {
  const t = useT()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center section-padding pt-32">
      <div className="text-center">
        <span className="label-text text-foreground-subtle block mb-4">
          {t.stub.comingSoon}
        </span>
        <h1 className="font-display text-display-lg text-foreground">
          {t.stub.titles[titleKey]}
        </h1>
        <p className="text-sm text-foreground-muted mt-4 max-w-sm mx-auto">
          {t.stub.underConstruction}
        </p>
      </div>
    </div>
  )
}
