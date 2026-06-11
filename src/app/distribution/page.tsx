import type { Metadata } from 'next'
import { ComingSoon } from '@/components/shared/ComingSoon'

export const metadata: Metadata = {
  title: 'Distribution',
  description: 'Quarter Distribution — Distribution page.',
}

export default function Page() {
  return <ComingSoon titleKey="distribution" />
}
