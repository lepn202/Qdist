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
   * Optional rectangular brand tile (photo + logo composition), e.g.
   * '/images/brands/blast-skates.jpg'. When set, the image fills the cell
   * edge-to-edge — this is the richest treatment and matches the tiles used
   * on quarterdist.com.
   */
  image?: string
  /**
   * Optional transparent logo (e.g. '/images/brands/inpeddo.svg'). Rendered
   * centered on the dark cell when no `image` is set. Prefer white/transparent
   * logos so they read on the dark background.
   */
  logo?: string
}

export const BRANDS: Brand[] = [
  { name: 'Inpeddo',           url: 'https://inpeddoskateboards.com/' },
  { name: 'Über',              url: 'https://ueberskateboards.com/' },
  { name: 'Superply',          url: 'https://b2b.quarterdist.com/collections/superply' },
  { name: 'Blast Skates',      url: 'https://www.blastskates.com/' },
  { name: 'Poetic Collective', url: 'https://poeticcollective.com/' },
  { name: 'Lousy Livin',       url: 'https://lousylivin.com/' },
  { name: 'Loomi Boards',      url: 'https://www.loomiboards.com/' },
  { name: 'Skip Skateboards',  url: 'https://b2b.quarterdist.com/collections/skip-skateboards' },
  { name: 'Flytech',           url: 'https://flytecc.com/' },
  { name: 'Bronx Wheels',      url: 'https://bronxwheels.com/' },
  { name: 'Haze Wheels',       url: 'https://www.hazewheels.com/' },
  { name: 'Bolzen Trucks',     url: 'https://www.bolzentrucks.com/' },
  { name: 'Tremendous Trucks', url: 'https://b2b.quarterdist.com/collections/tremendous-trucks' },
  { name: 'Flux Trucks',       url: 'https://b2b.quarterdist.com/collections/flux-trucks' },
  { name: 'Pulsar Bearings',   url: 'https://quarterdist.com/pulsar-bearings-en/' },
  { name: 'Zupply',            url: 'https://b2b.quarterdist.com/collections/zupply' },
  { name: 'BroTection',        url: 'https://brotectiongear.com/' },
  { name: 'Jessup',            url: 'https://www.jessupmfg.com/jessup-griptape' },
  { name: 'Ultimate Boards',   url: 'https://b2b.quarterdist.com/collections/ultimate-boards' },
  { name: 'Curfboard',         url: 'https://curfboard.com/' },
  { name: 'Yamato Living Ramps', url: 'https://www.yamatoramps.de/en/' },
  { name: 'Skateistan',        url: 'https://skateistan.org/' },
]

export const REFERENCES = [
  {
    quote:
      'One of the best skateboard hardware distributions in Europe. Ordering through the B2B shop is effortless, stock is reliable, and delivery is consistently fast — exactly what a shop needs.',
    author: 'Buyer',
    company: 'Independent Skate Shop',
    location: 'Germany',
  },
  {
    quote:
      'Their in-house production quality is outstanding. Every deck is individually pressed and passes three separate quality controls, so the consistency across large runs keeps our brand standards high.',
    author: 'Brand Director',
    company: 'European Skateboard Label',
    location: 'EU',
  },
  {
    quote:
      'From the first order to delivery the process is seamless, and their support for contests and the wider scene shows they genuinely care about skateboarding — not just the sale.',
    author: 'Distribution Partner',
    company: 'International Skate Brand',
    location: 'Worldwide',
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
