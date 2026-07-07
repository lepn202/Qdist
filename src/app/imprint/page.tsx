import type { Metadata } from 'next'
import { ImprintContent } from './ImprintContent'

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Legal information and company details for Quarter Distribution GmbH.',
}

export default function Page() {
  return <ImprintContent />
}
