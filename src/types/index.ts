export interface Service {
  number: string
  title: string
  slug: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface Reference {
  quote: string
  author: string
  company: string
  location: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface CMSImage {
  url: string
  alt: string
  width: number
  height: number
  blurDataURL?: string
}

export interface SEOMeta {
  title: string
  description: string
  ogImage?: CMSImage
  noIndex?: boolean
}

export type ColorVariant = 'default' | 'accent' | 'outline' | 'ghost'
export type SizeVariant  = 'sm' | 'md' | 'lg'
