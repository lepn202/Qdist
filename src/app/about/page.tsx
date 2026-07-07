import type { Metadata } from 'next'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Quarter Distribution & Production — a European skateboard company, by skateboarders for skateboarders. Manufacturing, distribution and OEM since 2008.',
}

export default function Page() {
  return <AboutContent />
}
