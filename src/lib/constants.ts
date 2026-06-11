export const SITE_NAME = 'Quarter Distribution'
export const SITE_TAGLINE = 'European Skateboard Distribution & Manufacturing'
export const SITE_DESCRIPTION =
  'Premium skateboard distribution, OEM manufacturing, and custom production for brands worldwide. Based in Europe, shipping globally.'
export const FOUNDED_YEAR = 2013
export const CONTACT_EMAIL = 'order@quarterdist.com'
export const CONTACT_PHONE = '+49 173 9859833'
export const CONTACT_PHONE_HREF = '+491739859833'
export const CONTACT_ADDRESS = 'Europe'
export const B2B_SHOP_URL = 'https://b2b.quarterdist.com/'

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Brands',   href: '/brands' },
  { label: 'Contact',  href: '/contact' },
] as const

export const SERVICES = [
  {
    number: '01',
    title: 'Distribution',
    slug: 'distribution',
    image: '/images/distribution-shipping.jpg',
    description:
      'Pan-European distribution network with fast turnaround and dedicated account management for skate shops and retailers.',
  },
  {
    number: '02',
    title: 'OEM Production',
    slug: 'oem',
    image: '/images/production-boards.jpg',
    description:
      'Full-service OEM manufacturing for international brands — from sampling to mass production under your label.',
  },
  {
    number: '03',
    title: 'Custom Decks',
    slug: 'production',
    image: '/images/product-square-tails.jpg',
    description:
      "Premium maple deck production with custom pressing, shapes, and print — tailored to your brand's exact specifications.",
  },
  {
    number: '04',
    title: 'Warehousing',
    slug: 'distribution',
    image: '/images/distribution-container-1.jpg',
    description:
      'Central European logistics hub with flexible storage, pick-and-pack, and direct-to-retailer fulfillment solutions.',
  },
  {
    number: '05',
    title: 'Grip Tape',
    slug: 'production',
    image: '/images/production-gripping.jpg',
    description:
      'Custom grip tape printing, die-cutting, and bulk supply. Full colour, spot colour, and branded packaging available.',
  },
  {
    number: '06',
    title: 'Hardware',
    slug: 'distribution',
    image: '/images/product-superply-shapes.jpg',
    description:
      'Complete hardware range — trucks, wheels, bearings, and accessories — sourced from premium manufacturers worldwide.',
  },
] as const

export const STATS = [
  { value: '10+',  label: 'Years Experience' },
  { value: '50K+', label: 'Units Per Year' },
  { value: '40+',  label: 'Countries Reached' },
  { value: '100%', label: 'B2B Focused' },
] as const

export interface Brand {
  /** Display name / wordmark text. */
  name: string
  /** Official website — opens in a new tab. */
  url:  string
  /**
   * Optional logo image path under /public (e.g. '/images/brands/inpeddo.svg').
   * When set, the logo is rendered instead of the wordmark — drop real logos
   * in here later with no other changes required.
   */
  logo?: string
}

export const BRANDS: Brand[] = [
  { name: 'Inpeddo',           url: 'https://inpeddoskateboards.com/' },
  { name: 'Über',              url: 'https://ueberskateboards.com/' },
  { name: 'Flytech',           url: 'https://flytecc.com/' },
  { name: 'Blast Skates',      url: 'https://www.blastskates.com/' },
  { name: 'Bronx',             url: 'https://bronxwheels.com/' },
  { name: 'Skatedeluxe',       url: 'https://www.skatedeluxe.com/' },
  { name: 'Poetic Collective', url: 'https://poeticcollective.com/' },
  { name: 'Haze Wheels',       url: 'https://www.hazewheels.com/' },
]

export const REFERENCES = [
  {
    quote:
      'Quarter Distribution has been an essential partner for our European expansion. Reliable, professional, and truly passionate about skateboarding.',
    author: 'Distribution Partner',
    company: 'International Skate Brand',
    location: 'USA',
  },
  {
    quote:
      'Their OEM production quality is outstanding. The precision and consistency across large runs is exactly what we need to maintain our brand standards.',
    author: 'Brand Director',
    company: 'European Skateboard Co.',
    location: 'Germany',
  },
  {
    quote:
      'From first contact to delivery, the process is seamless. We\'ve scaled significantly thanks to their logistics infrastructure.',
    author: 'Operations Manager',
    company: 'Specialty Retailer',
    location: 'UK',
  },
] as const

export const CAPABILITIES = [
  'Canadian Maple 7-Ply Decks',
  'Custom Press Shapes',
  'Screen Print & Heat Transfer',
  'Grip Tape Die-Cutting',
  'Full Hardware Supply',
  'Private Label Packaging',
  'Quality Control Inspection',
  'Same-Day Dispatch',
] as const

export const HERO_IMAGE = '/images/production-print.jpg'
export const HQ_IMAGE = '/images/welcome.jpg'

export const GALLERY = [
  { src: '/images/action-360-flip.jpg',     alt: 'Tobi — 360 flip, Berlin' },
  { src: '/images/action-crook.jpg',        alt: 'Tobi — crooked grind, Berlin' },
  { src: '/images/action-no-comply.jpg',    alt: 'Loco — 180 no-comply, Berlin' },
  { src: '/images/action-switch-heel.jpg',  alt: 'Alva — switch heelflip' },
  { src: '/images/action-fs-shove.jpg',     alt: 'Patricc — frontside shove-it, Berlin' },
  { src: '/images/action-kickflip.jpg',     alt: 'Daniel — backside tail kickflip, Berlin' },
  { src: '/images/action-noseslide.jpg',    alt: 'Alva — frontside noseslide' },
  { src: '/images/production-scratching-room.jpg', alt: 'Freshly pressed decks in the scratching room' },
] as const

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/quarterdist' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/quarterdist' },
] as const
