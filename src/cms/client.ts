/**
 * Sanity CMS client — placeholder.
 * Install `@sanity/client` and configure when CMS is live.
 *
 * Usage:
 *   import { sanityClient, sanityFetch } from '@/cms/client'
 *   const data = await sanityFetch<CMSPage[]>(groq`*[_type == "page"]`)
 */

// import { createClient } from '@sanity/client'
// import { cache } from 'react'

export const SANITY_CONFIG = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn:    process.env.NODE_ENV === 'production',
}

// export const sanityClient = createClient(SANITY_CONFIG)

// export const sanityFetch = cache(async <T>(query: string, params = {}) => {
//   return sanityClient.fetch<T>(query, params, {
//     next: { revalidate: 60 },
//   })
// })
