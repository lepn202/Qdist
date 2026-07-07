import type { Metadata } from 'next'
import { PrivacyContent } from './PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Quarter Distribution processes your personal data, and your rights.',
}

export default function Page() {
  return <PrivacyContent />
}
