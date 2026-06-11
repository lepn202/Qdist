import type { Metadata } from 'next'
import { ComingSoon } from '@/components/shared/ComingSoon'

export const metadata: Metadata = {
  title: 'Production',
  description: 'Quarter Distribution — Production page.',
}

export default function Page() {
  return <ComingSoon titleKey="production" />
}
