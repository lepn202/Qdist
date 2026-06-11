import type { Metadata } from 'next'
import { ComingSoon } from '@/components/shared/ComingSoon'

export const metadata: Metadata = {
  title: 'OEM',
  description: 'Quarter Distribution — OEM page.',
}

export default function Page() {
  return <ComingSoon titleKey="oem" />
}
