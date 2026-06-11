// Full-site translations for Quarter Distribution.
//
// The English dictionary (`en`) is the source of truth for the shape; the
// German dictionary (`de`) is typed against it so the two can never drift.
//
// A few arrays here are positionally aligned with structural data in
// `@/lib/constants` (SERVICES, STATS, REFERENCES, CAPABILITIES). The constants
// hold non-translatable structure (images, slugs, urls, numeric values) while
// the text lives here. Keep the order in sync when editing either side.

export type Locale = 'en' | 'de'

export const LOCALES: Locale[] = ['en', 'de']

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
}

const en = {
  nav: {
    services: 'Services',
    brands: 'Brands',
    contact: 'Contact',
  },
  header: {
    b2bShop: 'B2B Shop',
    getInTouch: 'Get in Touch',
  },
  common: {
    region: 'Europe',
  },
  hero: {
    label: 'Quarter Distribution',
    words: ['European', 'Skateboard', 'Distribution', '& Manufacturing'],
    est: 'Est.',
    europe: 'Europe',
    metaRight: 'Distribution · Production · OEM',
    description:
      'Premium skateboard distribution, OEM manufacturing & custom production for global brands. 10+ years of industry experience.',
    b2bShop: 'B2B Shop',
    ourServices: 'Our Services',
    scroll: 'Scroll',
  },
  home: {
    pillarsLabel: 'What We Do',
    learnMore: 'Learn more',
    pillars: [
      {
        label: 'Distribution',
        description:
          'Pan-European network connecting your brand to retailers across 40+ countries.',
      },
      {
        label: 'Production',
        description:
          'Custom deck pressing, grip tape, and hardware produced to your exact spec.',
      },
      {
        label: 'OEM',
        description:
          'Full-service manufacturing from first sample to branded mass production.',
      },
    ],
  },
  cta: {
    label: 'Work with Us',
    titleLine1: 'Ready to Scale',
    titleLine2: 'Your Brand?',
    description:
      "Whether you're launching a new brand, expanding distribution, or scaling your OEM production — Quarter Distribution is your European partner. Let's build something together.",
    visitB2b: 'Visit B2B Shop',
    requestQuote: 'Request OEM Quote',
    b2bOnly: 'B2B Only',
    europeBased: 'Europe-Based',
    globalShipping: 'Global Shipping',
  },
  servicesPage: {
    label: 'Services',
    titleLine1: 'Distribution,',
    titleLine2: 'Production & OEM',
    description:
      'Everything from pressing your first deck to distributing your brand across Europe — under one roof, since 2013. More than 100,000 boards produced in Germany every year.',
    caption: 'In-house production · Germany',
  },
  // Positionally aligned with STATS in @/lib/constants.
  stats: [
    'Years Experience',
    'Units Per Year',
    'Countries Reached',
    'B2B Focused',
  ],
  servicesGrid: {
    label: 'What We Do',
    title: 'Full-Stack Skate Services',
    description:
      'From pressing your first deck to distributing your brand across Europe — everything under one roof.',
    learnMore: 'Learn More',
    // Positionally aligned with SERVICES in @/lib/constants.
    items: [
      {
        title: 'Distribution',
        description:
          'Pan-European distribution network with fast turnaround and dedicated account management for skate shops and retailers.',
      },
      {
        title: 'OEM Production',
        description:
          'Full-service OEM manufacturing for international brands — from sampling to mass production under your label.',
      },
      {
        title: 'Custom Decks',
        description:
          "Premium maple deck production with custom pressing, shapes, and print — tailored to your brand's exact specifications.",
      },
      {
        title: 'Warehousing',
        description:
          'Central European logistics hub with flexible storage, pick-and-pack, and direct-to-retailer fulfillment solutions.',
      },
      {
        title: 'Grip Tape',
        description:
          'Custom grip tape printing, die-cutting, and bulk supply. Full colour, spot colour, and branded packaging available.',
      },
      {
        title: 'Hardware',
        description:
          'Complete hardware range — trucks, wheels, bearings, and accessories — sourced from premium manufacturers worldwide.',
      },
    ],
  },
  manufacturing: {
    label: 'Manufacturing',
    european: 'European Manufacturing',
    madeInLine1: 'MADE IN',
    madeInLine2: 'EUROPE',
    precisionLine1: 'Precision-Built.',
    precisionLine2: 'Premium Materials.',
    headlineLine1: 'Manufacturing',
    headlineLine2: 'Excellence',
    description:
      'From custom pressing to full OEM runs, our European production infrastructure delivers consistent quality at scale. Every deck, grip, and hardware piece is produced to strict tolerances with full QC inspection.',
    process: 'Process',
    steps: [
      'Sampling & Prototyping',
      'Material Sourcing',
      'Production Run',
      'QC Inspection & Dispatch',
    ],
    // Positionally aligned with CAPABILITIES in @/lib/constants.
    capabilities: [
      'Canadian Maple 7-Ply Decks',
      'Custom Press Shapes',
      'Screen Print & Heat Transfer',
      'Grip Tape Die-Cutting',
      'Full Hardware Supply',
      'Private Label Packaging',
      'Quality Control Inspection',
      'Same-Day Dispatch',
    ],
  },
  gallery: {
    label: 'From the Field',
    description:
      'Boards we press, grip, and ship — out in the wild with the riders who put them to the test.',
  },
  brandShowcase: {
    label: 'Distributed Brands',
    description:
      'Working with independent and international skate brands worldwide.',
    footerNote: '+ more brands across Europe and worldwide',
    visit: 'Visit',
  },
  references: {
    label: 'References',
    title: 'Trusted by the Industry',
    description:
      'Long-term relationships with brands, retailers, and manufacturers across Europe and beyond.',
    more: 'More on our partners →',
    // Positionally aligned with REFERENCES in @/lib/constants.
    items: [
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
    ],
  },
  brandsPage: {
    label: 'Brands & References',
    titleLine1: 'The Brands',
    titleLine2: 'We Stand Behind',
    description:
      'Independent and international skate brands distributed across Europe — plus what our partners say about working with us.',
  },
  contact: {
    label: 'Contact',
    title: 'Get in Touch',
    description:
      "Whether you're looking to distribute your brand, start a production run, or stock our brands — we'd like to hear from you.",
    inquiryTypes: [
      'Distribution Partnership',
      'OEM / Custom Production',
      'Wholesale / B2B',
      'General Inquiry',
    ],
    inquiryTypeLabel: 'Inquiry Type',
    nameLabel: 'Name *',
    namePlaceholder: 'Your name',
    companyLabel: 'Company',
    companyPlaceholder: 'Brand / Shop name',
    emailLabel: 'Email *',
    emailPlaceholder: 'your@email.com',
    messageLabel: 'Message *',
    messagePlaceholder: 'Tell us about your project, brand, or question…',
    sendMessage: 'Send Message',
    b2bNotePre: 'B2B inquiries only. To browse and order our full range, visit the ',
    b2bShop: 'B2B Shop',
    b2bNotePost: '.',
    sentTitle: 'Message sent.',
    sentBody: "Your email client should have opened. We'll get back to you shortly.",
    sendAnother: 'Send another',
    contactDetails: 'Contact Details',
    established: 'established',
    quickLinks: 'Quick Links',
    quickLinkServices: 'View Our Services',
    quickLinkBrands: 'Brands We Distribute',
    quickLinkB2b: 'B2B Shop',
    responseTime: 'Response Time',
    responsePre:
      'We typically respond within 1–2 business days. For urgent matters, email us directly at ',
    responsePost: '.',
  },
  footer: {
    description:
      'Premium European skateboard distribution & OEM manufacturing since {year}.',
    navigation: 'Navigation',
    services: 'Services',
    contact: 'Contact',
    sendInquiry: 'Send an Inquiry',
    b2b: 'B2B',
    serviceLinks: ['Distribution', 'OEM Production', 'Custom Decks', 'Grip Tape'],
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    imprint: 'Imprint',
  },
  stub: {
    comingSoon: 'Coming Soon',
    underConstruction: 'This page is under construction. Check back soon.',
    titles: {
      about: 'About',
      distribution: 'Distribution',
      oem: 'OEM',
      production: 'Production',
      references: 'References',
    },
  },
}

export type Dictionary = typeof en

const de: Dictionary = {
  nav: {
    services: 'Leistungen',
    brands: 'Marken',
    contact: 'Kontakt',
  },
  header: {
    b2bShop: 'B2B-Shop',
    getInTouch: 'Kontakt aufnehmen',
  },
  common: {
    region: 'Europa',
  },
  hero: {
    label: 'Quarter Distribution',
    words: ['Europäischer', 'Skateboard-', 'Vertrieb', '& Herstellung'],
    est: 'Gegr.',
    europe: 'Europa',
    metaRight: 'Vertrieb · Produktion · OEM',
    description:
      'Premium-Skateboard-Vertrieb, OEM-Fertigung & individuelle Produktion für Marken weltweit. Über 10 Jahre Branchenerfahrung.',
    b2bShop: 'B2B-Shop',
    ourServices: 'Unsere Leistungen',
    scroll: 'Scrollen',
  },
  home: {
    pillarsLabel: 'Was wir tun',
    learnMore: 'Mehr erfahren',
    pillars: [
      {
        label: 'Vertrieb',
        description:
          'Paneuropäisches Netzwerk, das deine Marke mit Händlern in über 40 Ländern verbindet.',
      },
      {
        label: 'Produktion',
        description:
          'Individuelle Deck-Pressung, Griptape und Hardware – gefertigt exakt nach deinen Vorgaben.',
      },
      {
        label: 'OEM',
        description:
          'Full-Service-Fertigung vom ersten Muster bis zur Serienproduktion unter deiner Marke.',
      },
    ],
  },
  cta: {
    label: 'Zusammenarbeit',
    titleLine1: 'Bereit, deine Marke',
    titleLine2: 'zu skalieren?',
    description:
      'Ob du eine neue Marke gründest, deinen Vertrieb ausbaust oder deine OEM-Produktion skalierst – Quarter Distribution ist dein europäischer Partner. Lass uns gemeinsam etwas aufbauen.',
    visitB2b: 'Zum B2B-Shop',
    requestQuote: 'OEM-Angebot anfragen',
    b2bOnly: 'Nur B2B',
    europeBased: 'Sitz in Europa',
    globalShipping: 'Weltweiter Versand',
  },
  servicesPage: {
    label: 'Leistungen',
    titleLine1: 'Vertrieb,',
    titleLine2: 'Produktion & OEM',
    description:
      'Von der Pressung deines ersten Decks bis zum Vertrieb deiner Marke in ganz Europa – alles unter einem Dach, seit 2013. Über 100.000 Boards werden jährlich in Deutschland produziert.',
    caption: 'Eigene Produktion · Deutschland',
  },
  stats: [
    'Jahre Erfahrung',
    'Einheiten pro Jahr',
    'Erreichte Länder',
    'B2B-fokussiert',
  ],
  servicesGrid: {
    label: 'Was wir tun',
    title: 'Skate-Services aus einer Hand',
    description:
      'Von der Pressung deines ersten Decks bis zum Vertrieb deiner Marke in ganz Europa – alles unter einem Dach.',
    learnMore: 'Mehr erfahren',
    items: [
      {
        title: 'Vertrieb',
        description:
          'Paneuropäisches Vertriebsnetz mit schneller Abwicklung und persönlicher Betreuung für Skateshops und Händler.',
      },
      {
        title: 'OEM-Produktion',
        description:
          'Full-Service-OEM-Fertigung für internationale Marken – vom Muster bis zur Serienproduktion unter deinem Label.',
      },
      {
        title: 'Custom Decks',
        description:
          'Premium-Ahorndeck-Produktion mit individueller Pressung, Shapes und Druck – exakt nach den Vorgaben deiner Marke.',
      },
      {
        title: 'Lagerhaltung',
        description:
          'Zentraler europäischer Logistik-Hub mit flexibler Lagerung, Pick-and-Pack und Direktbelieferung an Händler.',
      },
      {
        title: 'Griptape',
        description:
          'Individueller Griptape-Druck, Stanzung und Großmengen. Vollfarbe, Sonderfarben und gebrandete Verpackung verfügbar.',
      },
      {
        title: 'Hardware',
        description:
          'Komplettes Hardware-Sortiment – Achsen, Rollen, Kugellager und Zubehör – von Premium-Herstellern weltweit.',
      },
    ],
  },
  manufacturing: {
    label: 'Fertigung',
    european: 'Fertigung in Europa',
    madeInLine1: 'MADE IN',
    madeInLine2: 'EUROPE',
    precisionLine1: 'Präzise gefertigt.',
    precisionLine2: 'Premium-Materialien.',
    headlineLine1: 'Fertigung auf',
    headlineLine2: 'höchstem Niveau',
    description:
      'Von der individuellen Pressung bis zur kompletten OEM-Serie liefert unsere europäische Produktionsinfrastruktur gleichbleibende Qualität in großem Maßstab. Jedes Deck, jedes Griptape und jedes Hardware-Teil wird mit engen Toleranzen und vollständiger Qualitätskontrolle gefertigt.',
    process: 'Ablauf',
    steps: [
      'Muster & Prototyping',
      'Materialbeschaffung',
      'Serienproduktion',
      'Qualitätskontrolle & Versand',
    ],
    capabilities: [
      'Kanadische 7-lagige Ahorndecks',
      'Individuelle Press-Shapes',
      'Siebdruck & Heißtransfer',
      'Griptape-Stanzung',
      'Komplette Hardware-Versorgung',
      'Private-Label-Verpackung',
      'Qualitätskontrolle',
      'Versand noch am selben Tag',
    ],
  },
  gallery: {
    label: 'Aus der Praxis',
    description:
      'Boards, die wir pressen, gripen und versenden – draußen im Einsatz mit den Ridern, die sie auf die Probe stellen.',
  },
  brandShowcase: {
    label: 'Vertriebene Marken',
    description:
      'Wir arbeiten mit unabhängigen und internationalen Skate-Marken weltweit.',
    footerNote: '+ weitere Marken in Europa und weltweit',
    visit: 'Besuchen',
  },
  references: {
    label: 'Referenzen',
    title: 'Vertraut von der Branche',
    description:
      'Langjährige Beziehungen zu Marken, Händlern und Herstellern in Europa und darüber hinaus.',
    more: 'Mehr über unsere Partner →',
    items: [
      {
        quote:
          'Einer der besten Skateboard-Hardware-Vertriebe in Europa. Die Bestellung über den B2B-Shop ist mühelos, der Lagerbestand zuverlässig und die Lieferung durchweg schnell – genau das, was ein Shop braucht.',
        author: 'Einkäufer',
        company: 'Unabhängiger Skateshop',
        location: 'Deutschland',
      },
      {
        quote:
          'Die Qualität ihrer eigenen Produktion ist herausragend. Jedes Deck wird einzeln gepresst und durchläuft drei separate Qualitätskontrollen – die Konsistenz über große Serien hält unsere Markenstandards hoch.',
        author: 'Markenleiter',
        company: 'Europäisches Skateboard-Label',
        location: 'EU',
      },
      {
        quote:
          'Vom ersten Auftrag bis zur Lieferung läuft der Prozess reibungslos, und ihr Engagement für Contests und die Szene zeigt, dass ihnen Skateboarding wirklich am Herzen liegt – nicht nur der Verkauf.',
        author: 'Vertriebspartner',
        company: 'Internationale Skate-Marke',
        location: 'Weltweit',
      },
    ],
  },
  brandsPage: {
    label: 'Marken & Referenzen',
    titleLine1: 'Die Marken,',
    titleLine2: 'für die wir stehen',
    description:
      'Unabhängige und internationale Skate-Marken, die wir in ganz Europa vertreiben – und was unsere Partner über die Zusammenarbeit mit uns sagen.',
  },
  contact: {
    label: 'Kontakt',
    title: 'Kontakt aufnehmen',
    description:
      'Ob du deine Marke vertreiben, eine Produktion starten oder unsere Marken führen möchtest – wir freuen uns, von dir zu hören.',
    inquiryTypes: [
      'Vertriebspartnerschaft',
      'OEM / Individuelle Produktion',
      'Großhandel / B2B',
      'Allgemeine Anfrage',
    ],
    inquiryTypeLabel: 'Art der Anfrage',
    nameLabel: 'Name *',
    namePlaceholder: 'Dein Name',
    companyLabel: 'Unternehmen',
    companyPlaceholder: 'Marke / Shop-Name',
    emailLabel: 'E-Mail *',
    emailPlaceholder: 'deine@email.com',
    messageLabel: 'Nachricht *',
    messagePlaceholder: 'Erzähl uns von deinem Projekt, deiner Marke oder deiner Frage…',
    sendMessage: 'Nachricht senden',
    b2bNotePre:
      'Nur B2B-Anfragen. Um unser gesamtes Sortiment zu durchstöbern und zu bestellen, besuche den ',
    b2bShop: 'B2B-Shop',
    b2bNotePost: '.',
    sentTitle: 'Nachricht gesendet.',
    sentBody:
      'Dein E-Mail-Programm sollte sich geöffnet haben. Wir melden uns in Kürze bei dir.',
    sendAnother: 'Weitere senden',
    contactDetails: 'Kontaktdaten',
    established: 'gegründet',
    quickLinks: 'Schnellzugriff',
    quickLinkServices: 'Unsere Leistungen ansehen',
    quickLinkBrands: 'Marken, die wir vertreiben',
    quickLinkB2b: 'B2B-Shop',
    responseTime: 'Reaktionszeit',
    responsePre:
      'Wir antworten in der Regel innerhalb von 1–2 Werktagen. In dringenden Fällen schreib uns direkt an ',
    responsePost: '.',
  },
  footer: {
    description:
      'Premium-Skateboard-Vertrieb & OEM-Fertigung aus Europa seit {year}.',
    navigation: 'Navigation',
    services: 'Leistungen',
    contact: 'Kontakt',
    sendInquiry: 'Anfrage senden',
    b2b: 'B2B',
    serviceLinks: ['Vertrieb', 'OEM-Produktion', 'Custom Decks', 'Griptape'],
    rights: 'Alle Rechte vorbehalten.',
    privacy: 'Datenschutz',
    terms: 'AGB',
    imprint: 'Impressum',
  },
  stub: {
    comingSoon: 'Demnächst',
    underConstruction:
      'Diese Seite befindet sich im Aufbau. Schau bald wieder vorbei.',
    titles: {
      about: 'Über uns',
      distribution: 'Vertrieb',
      oem: 'OEM',
      production: 'Produktion',
      references: 'Referenzen',
    },
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, de }
