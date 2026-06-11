import type { Metadata } from 'next'
import { ComingSoon } from '@/components/shared/ComingSoon'

export const metadata: Metadata = {
  title: 'About',
  description: 'Quarter Distribution — About page.',
}

export default function Page() {
  return <ComingSoon titleKey="about" />
}
