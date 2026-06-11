import type { Metadata } from 'next'
import { ComingSoon } from '@/components/shared/ComingSoon'

export const metadata: Metadata = {
  title: 'References',
  description: 'Quarter Distribution — References page.',
}

export default function Page() {
  return <ComingSoon titleKey="references" />
}
