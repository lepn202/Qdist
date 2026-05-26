import type { Metadata } from 'next'
import { Hero }           from '@/sections/Hero'
import { ServicesGrid }   from '@/sections/ServicesGrid'
import { BrandShowcase }  from '@/sections/BrandShowcase'
import { Manufacturing }  from '@/sections/Manufacturing'
import { References }     from '@/sections/References'
import { CTASection }     from '@/sections/CTASection'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — European Skateboard Distribution & Manufacturing`,
  description: SITE_DESCRIPTION,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <BrandShowcase />
      <Manufacturing />
      <References />
      <CTASection />
    </>
  )
}
