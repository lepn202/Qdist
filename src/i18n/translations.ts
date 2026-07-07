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
    about: 'About',
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
    // Placeholder references — real testimonials to be collected and added.
    items: [
      {
        quote: 'Reference quote to be added.',
        author: 'Reference 1',
        company: 'Coming soon',
        location: '',
      },
      {
        quote: 'Reference quote to be added.',
        author: 'Reference 2',
        company: 'Coming soon',
        location: '',
      },
      {
        quote: 'Reference quote to be added.',
        author: 'Reference 3',
        company: 'Coming soon',
        location: '',
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
  about: {
    label: 'About',
    title: 'By Skateboarders, For Skateboarders',
    intro:
      'Quarter Distribution & Production is a European skateboard company built on more than a decade in the board-sport industry — run by skateboarders, for skateboarders.',
    storyLabel: 'Our Story',
    story: [
      "What began as a small distribution operation has grown into one of Europe's established skateboard companies. We've been producing skateboards since 2008, and today we press several tens of thousands of decks every year in our own facility.",
      'Our business rests on three pillars: skateboard manufacturing in Germany, distribution of our own and partner brands across the continent, and full OEM organisation and importing for brands worldwide. From decks, cruisers and longboards to complete setups and accessories, we build the products — and the brands behind them.',
    ],
    approachLabel: 'Our Approach',
    approach:
      'Close customer relationships, fair pricing and fast, reliable order processing sit at the centre of everything we do.',
    statsLabel: 'At a Glance',
    stats: [
      { value: '2008', label: 'Producing Since' },
      { value: '10+',  label: 'Years in the Industry' },
      { value: '50K+', label: 'Boards per Year' },
      { value: '3',    label: 'Locations' },
    ],
    pillarsLabel: 'What We Do',
    pillars: [
      {
        title: 'Manufacturing',
        description:
          'German-made skateboards, cruisers and longboards — pressed, printed and finished in-house.',
      },
      {
        title: 'Distribution',
        description:
          'Pan-European distribution of our own labels and partner brands like Blast Skates, BRONX Wheels, Poetic Collective and Inpeddo.',
      },
      {
        title: 'OEM & Import',
        description:
          'Full OEM organisation, importing and quality oversight — including our own office in China.',
      },
    ],
    locationsLabel: 'Locations',
    locations: [
      { name: 'Berlin-Köpenick', detail: 'Headquarters' },
      { name: 'Rüdersdorf',      detail: 'Production & warehouse · Puschkinstraße 17' },
      { name: 'China',           detail: 'Innovation, production & quality oversight' },
    ],
  },
  privacy: {
    label: 'Privacy',
    title: 'Privacy Policy',
    intro:
      'We take the protection of your personal data seriously. This policy explains what data we process when you use our website, and the rights you have.',
    controllerLabel: 'Data Controller',
    sections: [
      {
        heading: 'Data We Collect',
        body: [
          'We collect personal data that you actively provide — for example when you use our contact form (name, company, email address and the content of your message).',
          'When you visit the site, our systems automatically collect technical data such as browser type, operating system, the time of access and your IP address. This data is used to deliver the site reliably and securely.',
        ],
      },
      {
        heading: 'Cookies & Tracking',
        body: [
          'Session cookies are removed automatically after your visit. Persistent cookies let us recognise your browser on a return visit.',
          'Where enabled, we use analytics and marketing tools including Google Analytics (with IP anonymisation), Google Ads conversion tracking, the Facebook Pixel and YouTube in extended data-protection mode.',
        ],
      },
      {
        heading: 'Third-Party Services',
        body: [
          'Depending on how you interact with us, data may be processed by payment providers (e.g. PayPal and card processors), Google services (Analytics, Ads, reCAPTCHA, Maps and Fonts), Facebook, YouTube and our email/newsletter provider.',
        ],
      },
      {
        heading: 'Your Rights',
        body: [
          'You have the right to free information about the personal data we store, and to its correction, blocking or deletion. You may request your data in a machine-readable format, restrict its processing, withdraw consent at any time, and lodge a complaint with a supervisory authority.',
        ],
      },
    ],
    contactLabel: 'Exercising Your Rights',
    contactBody:
      'To request information, corrections or deletion, contact us at the address below.',
  },
  imprint: {
    label: 'Legal Notice',
    title: 'Imprint',
    intro: 'Information pursuant to § 5 TMG.',
    companyLabel: 'Company',
    directorsLabel: 'Managing Directors',
    registerLabel: 'Commercial Register',
    vatLabel: 'VAT Identification No.',
    contactLabel: 'Contact',
    bankLabel: 'Bank Details',
    locationLabel: 'Warehouse & Production',
    disclaimerLabel: 'Disclaimer',
    disclaimers: [
      {
        heading: 'Liability for Content',
        body: 'As a service provider we are responsible for our own content on these pages under general law. However, we are not obliged to monitor transmitted or stored third-party information, or to investigate circumstances that indicate unlawful activity.',
      },
      {
        heading: 'Liability for Links',
        body: 'Our site contains links to external websites over whose content we have no control. The respective provider is always responsible for the content of linked pages. Linked pages were checked for legal violations at the time of linking; no unlawful content was apparent.',
      },
      {
        heading: 'Copyright',
        body: 'Content created by the site operators is subject to German copyright law. Reproduction, editing, distribution or any kind of use beyond the limits of copyright require the written consent of the respective author or creator.',
      },
    ],
  },
}

export type Dictionary = typeof en

const de: Dictionary = {
  nav: {
    services: 'Leistungen',
    brands: 'Marken',
    about: 'Über uns',
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
    // Platzhalter-Referenzen – echte Stimmen werden noch ergänzt.
    items: [
      {
        quote: 'Referenz-Zitat folgt.',
        author: 'Referenz 1',
        company: 'In Kürze',
        location: '',
      },
      {
        quote: 'Referenz-Zitat folgt.',
        author: 'Referenz 2',
        company: 'In Kürze',
        location: '',
      },
      {
        quote: 'Referenz-Zitat folgt.',
        author: 'Referenz 3',
        company: 'In Kürze',
        location: '',
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
  about: {
    label: 'Über uns',
    title: 'Von Skateboardern für Skateboarder',
    intro:
      'Quarter Distribution & Production ist ein europäisches Skateboard-Unternehmen mit über einem Jahrzehnt Erfahrung in der Boardsport-Branche – von Skateboardern für Skateboarder.',
    storyLabel: 'Unsere Geschichte',
    story: [
      'Aus einem kleinen Vertrieb ist eines der etablierten Skateboard-Unternehmen Europas geworden. Seit 2008 produzieren wir Skateboards und pressen heute mehrere zehntausend Decks pro Jahr in eigener Fertigung.',
      'Unser Geschäft ruht auf drei Säulen: Skateboard-Produktion in Deutschland, Vertrieb eigener und Partner-Marken in ganz Europa sowie die komplette OEM-Organisation und der Import für Marken weltweit. Von Decks, Cruisern und Longboards bis zu kompletten Setups und Zubehör – wir fertigen die Produkte und die Marken dahinter.',
    ],
    approachLabel: 'Unser Anspruch',
    approach:
      'Enge Kundenbeziehungen, faire Preise und eine schnelle, zuverlässige Auftragsabwicklung stehen im Mittelpunkt unseres Handelns.',
    statsLabel: 'Auf einen Blick',
    stats: [
      { value: '2008', label: 'Produzieren seit' },
      { value: '10+',  label: 'Jahre in der Branche' },
      { value: '50K+', label: 'Boards pro Jahr' },
      { value: '3',    label: 'Standorte' },
    ],
    pillarsLabel: 'Was wir tun',
    pillars: [
      {
        title: 'Produktion',
        description:
          'In Deutschland gefertigte Skateboards, Cruiser und Longboards – im eigenen Haus gepresst, bedruckt und veredelt.',
      },
      {
        title: 'Vertrieb',
        description:
          'Europaweiter Vertrieb eigener Labels und Partner-Marken wie Blast Skates, BRONX Wheels, Poetic Collective und Inpeddo.',
      },
      {
        title: 'OEM & Import',
        description:
          'Komplette OEM-Organisation, Import und Qualitätssicherung – inklusive eigenem Büro in China.',
      },
    ],
    locationsLabel: 'Standorte',
    locations: [
      { name: 'Berlin-Köpenick', detail: 'Hauptsitz' },
      { name: 'Rüdersdorf',      detail: 'Produktion & Lager · Puschkinstraße 17' },
      { name: 'China',           detail: 'Innovation, Produktion & Qualitätssicherung' },
    ],
  },
  privacy: {
    label: 'Datenschutz',
    title: 'Datenschutzerklärung',
    intro:
      'Der Schutz deiner personenbezogenen Daten ist uns wichtig. Diese Erklärung beschreibt, welche Daten wir bei der Nutzung unserer Website verarbeiten und welche Rechte dir zustehen.',
    controllerLabel: 'Verantwortlicher',
    sections: [
      {
        heading: 'Welche Daten wir erheben',
        body: [
          'Wir erheben personenbezogene Daten, die du uns aktiv übermittelst – etwa über unser Kontaktformular (Name, Firma, E-Mail-Adresse und Inhalt deiner Nachricht).',
          'Beim Besuch der Website erfassen unsere Systeme automatisch technische Daten wie Browsertyp, Betriebssystem, Zugriffszeit und IP-Adresse. Diese Daten dienen dem zuverlässigen und sicheren Betrieb der Seite.',
        ],
      },
      {
        heading: 'Cookies & Tracking',
        body: [
          'Session-Cookies werden nach deinem Besuch automatisch gelöscht. Persistente Cookies ermöglichen es, deinen Browser bei einem erneuten Besuch wiederzuerkennen.',
          'Sofern aktiviert, nutzen wir Analyse- und Marketing-Tools wie Google Analytics (mit IP-Anonymisierung), Google-Ads-Conversion-Tracking, das Facebook-Pixel und YouTube im erweiterten Datenschutzmodus.',
        ],
      },
      {
        heading: 'Dienste von Drittanbietern',
        body: [
          'Je nach Interaktion können Daten durch Zahlungsdienstleister (z. B. PayPal und Kartenanbieter), Google-Dienste (Analytics, Ads, reCAPTCHA, Maps und Fonts), Facebook, YouTube sowie unseren E-Mail-/Newsletter-Anbieter verarbeitet werden.',
        ],
      },
      {
        heading: 'Deine Rechte',
        body: [
          'Du hast das Recht auf unentgeltliche Auskunft über deine gespeicherten Daten sowie auf deren Berichtigung, Sperrung oder Löschung. Du kannst deine Daten in einem maschinenlesbaren Format anfordern, die Verarbeitung einschränken, eine Einwilligung jederzeit widerrufen und dich bei einer Aufsichtsbehörde beschweren.',
        ],
      },
    ],
    contactLabel: 'Rechte ausüben',
    contactBody:
      'Für Auskunft, Berichtigung oder Löschung kontaktiere uns über die unten genannte Adresse.',
  },
  imprint: {
    label: 'Impressum',
    title: 'Impressum',
    intro: 'Angaben gemäß § 5 TMG.',
    companyLabel: 'Unternehmen',
    directorsLabel: 'Geschäftsführer',
    registerLabel: 'Handelsregister',
    vatLabel: 'Umsatzsteuer-ID',
    contactLabel: 'Kontakt',
    bankLabel: 'Bankverbindung',
    locationLabel: 'Lager & Produktion',
    disclaimerLabel: 'Haftungsausschluss',
    disclaimers: [
      {
        heading: 'Haftung für Inhalte',
        body: 'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      },
      {
        heading: 'Haftung für Links',
        body: 'Unsere Seite enthält Links zu externen Websites, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar.',
      },
      {
        heading: 'Urheberrecht',
        body: 'Die von den Betreibern erstellten Inhalte unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      },
    ],
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, de }
