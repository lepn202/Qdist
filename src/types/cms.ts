/* Sanity CMS schema types — expand as schemas are defined */

export interface SanityDocument {
  _id:       string
  _type:     string
  _rev:      string
  _createdAt: string
  _updatedAt: string
}

export interface SanityImageAsset {
  _ref:  string
  _type: 'reference'
}

export interface SanityImage {
  _type:  'image'
  asset: SanityImageAsset
  hotspot?: { x: number; y: number; height: number; width: number }
  crop?:    { top: number; bottom: number; left: number; right: number }
  alt?: string
}

export interface SanitySlug {
  _type:   'slug'
  current: string
}

export interface SanityBlock {
  _type:    'block'
  _key:     string
  style:    string
  children: Array<{ _type: string; _key: string; text: string; marks: string[] }>
  markDefs: unknown[]
}

/* Page-level CMS types */

export interface CMSPage extends SanityDocument {
  title: string
  slug:  SanitySlug
  seo?: {
    title?: string
    description?: string
    ogImage?: SanityImage
  }
}

export interface CMSBrand extends SanityDocument {
  name:     string
  slug:     SanitySlug
  logo?:    SanityImage
  website?: string
  featured: boolean
}

export interface CMSService extends SanityDocument {
  number:      string
  title:       string
  slug:        SanitySlug
  description: string
  image?:      SanityImage
  body?:       SanityBlock[]
}

export interface CMSReference extends SanityDocument {
  quote:    string
  author:   string
  company:  string
  location: string
  featured: boolean
}
