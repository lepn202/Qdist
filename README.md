# Quarter Distribution

Next.js 14 marketing site (App Router, TypeScript, Tailwind CSS).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Other scripts

- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Structure

- `src/app` — pages (App Router)
- `src/sections` — page sections (Hero, Gallery, References, etc.)
- `src/components` — shared UI and layout components
- `src/i18n` — translations and language switcher (EN/DE)
- `src/cms` — Sanity CMS client/schemas

## Project status & next steps

The site is a work in progress. Known incomplete areas and the work still
required, roughly in priority order:

### Content that is still placeholder
- **References (brands page).** The three reference cards currently render as
  explicit placeholders ("Reference 1/2/3 — Coming soon"). Real testimonials
  need to be collected and dropped into `references.items` in
  [`src/i18n/translations.ts`](src/i18n/translations.ts) (EN **and** DE).

### Stub / unbuilt pages
- **`/about`**, **`/privacy`** and **`/imprint`** are now fully built, with
  content ported from the current live site (EN + DE). About is linked from the
  main nav; Privacy and Imprint from the footer.
- **`/references`** is still a `ComingSoon` stub
  ([`src/components/shared/ComingSoon.tsx`](src/components/shared/ComingSoon.tsx))
  and needs real content.
- **`/terms`** is linked from the footer but the route does not exist yet — it
  currently 404s and should be built (or the link removed) before launch.

> The company/legal details on the Imprint and Privacy pages live in `COMPANY`
> in [`src/lib/constants.ts`](src/lib/constants.ts); the legal text itself is a
> faithful adaptation of the live site and should be reviewed by the client
> before launch.

### Sections from the live site not yet ported
Compared with [quarterdist.com](https://quarterdist.com/), the following are not
yet present and may be desired: **Media**, **Jobs**, **Blog**, and a
**newsletter** signup.

### Removed
- The standalone `/distribution`, `/production`, and `/oem` subpages were removed
  (they were empty stubs). Their content now lives on the `/services` page. If
  dedicated pages are wanted later, re-add routes under `src/app/`.

### Nice-to-haves / cleanup
- Unused `slug` fields remain in the `SERVICES` constant, and the
  `references.more` / `servicesGrid.learnMore` translation keys are now unused —
  safe to prune.
- Pin/patch `next` — the installed `14.2.15` has a known security advisory;
  upgrade to a patched 14.2.x release.
