'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { staggerContainer, fadeUp, fadeRight } from '@/animations/variants'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, FOUNDED_YEAR, B2B_SHOP_URL } from '@/lib/constants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useT } from '@/i18n/LanguageProvider'

function ContactForm() {
  const t = useT()
  const inquiryTypes = t.contact.inquiryTypes
  const [submitted, setSubmitted] = useState(false)
  // Track the selection by index so it survives a language switch.
  const [typeIndex, setTypeIndex] = useState(0)
  const selectedType = inquiryTypes[typeIndex] ?? inquiryTypes[0]

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`[${data.get('type')}] ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nCompany: ${data.get('company')}\nEmail: ${data.get('email')}\nType: ${data.get('type')}\n\n${data.get('message')}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 py-12"
      >
        <div className="w-6 h-px bg-accent" />
        <p className="font-display text-display-sm text-foreground">{t.contact.sentTitle}</p>
        <p className="text-xs text-foreground-muted">
          {t.contact.sentBody}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs text-foreground-subtle hover:text-foreground transition-colors w-fit border-b border-foreground-subtle pb-0.5"
        >
          {t.contact.sendAnother}
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Inquiry type selector */}
      <div>
        <label className="label-text text-foreground-subtle block mb-3">{t.contact.inquiryTypeLabel}</label>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setTypeIndex(i)}
              className={`text-xs tracking-label uppercase px-4 py-2.5 border transition-colors duration-150 ${
                typeIndex === i
                  ? 'border-accent bg-accent text-white'
                  : 'border-border text-foreground-muted hover:border-foreground/40 hover:text-foreground'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <input type="hidden" name="type" value={selectedType} />
      </div>

      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="label-text text-foreground-subtle block mb-2">{t.contact.nameLabel}</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t.contact.namePlaceholder}
            className="w-full bg-surface border border-border text-foreground text-xs px-4 py-3.5 placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="company" className="label-text text-foreground-subtle block mb-2">{t.contact.companyLabel}</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder={t.contact.companyPlaceholder}
            className="w-full bg-surface border border-border text-foreground text-xs px-4 py-3.5 placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label-text text-foreground-subtle block mb-2">{t.contact.emailLabel}</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t.contact.emailPlaceholder}
          className="w-full bg-surface border border-border text-foreground text-xs px-4 py-3.5 placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/40 transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label-text text-foreground-subtle block mb-2">{t.contact.messageLabel}</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t.contact.messagePlaceholder}
          className="w-full bg-surface border border-border text-foreground text-xs px-4 py-3.5 placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/40 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="group flex items-center gap-2 bg-accent text-white text-xs tracking-extra-wide uppercase px-8 py-4 hover:bg-accent-hover transition-colors duration-200 w-fit font-sans font-medium"
      >
        {t.contact.sendMessage}
        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
      </button>

      <p className="text-[11px] text-foreground-subtle">
        {t.contact.b2bNotePre}
        <a
          href={B2B_SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground-muted transition-colors"
        >
          {t.contact.b2bShop}
        </a>
        {t.contact.b2bNotePost}
      </p>
    </form>
  )
}

export default function ContactPage() {
  const { ref, inView } = useScrollAnimation(0.1)
  const t = useT()

  const quickLinks = [
    { label: t.contact.quickLinkServices, href: '/services',  external: false },
    { label: t.contact.quickLinkBrands,   href: '/brands',    external: false },
    { label: t.contact.quickLinkB2b,      href: B2B_SHOP_URL, external: true  },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <section className="section-padding pt-36 pb-20 md:pt-44 md:pb-24 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" />
            <span className="label-text">{t.contact.label}</span>
          </div>
          <h1 className="font-display text-display-xl text-foreground leading-display mb-6 max-w-2xl">
            {t.contact.title}
          </h1>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-md">
            {t.contact.description}
          </p>
        </motion.div>
      </section>

      {/* Two-column layout */}
      <section className="section-padding py-16 md:py-20">
        <motion.div
          ref={ref}
          variants={staggerContainer(0, 0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left — form */}
          <motion.div variants={fadeUp}>
            <ContactForm />
          </motion.div>

          {/* Right — info */}
          <motion.div variants={fadeRight} className="flex flex-col gap-12 lg:pt-2">
            {/* Contact details */}
            <div>
              <p className="label-text text-foreground-subtle mb-6">{t.contact.contactDetails}</p>
              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-foreground-subtle group-hover:text-accent transition-colors flex-shrink-0" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`tel:${CONTACT_PHONE_HREF}`}
                  className="group flex items-center gap-3 text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-foreground-subtle group-hover:text-accent transition-colors flex-shrink-0" />
                  {CONTACT_PHONE}
                </a>
                <div className="flex items-center gap-3 text-xs text-foreground-muted">
                  <MapPin className="w-4 h-4 text-foreground-subtle flex-shrink-0" />
                  {t.common.region} — {t.contact.established} {FOUNDED_YEAR}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Quick links */}
            <div>
              <p className="label-text text-foreground-subtle mb-6">{t.contact.quickLinks}</p>
              <div className="flex flex-col gap-0 border-t border-border">
                {quickLinks.map(({ label, href, external }) => {
                  const className =
                    'group flex items-center justify-between py-4 border-b border-border hover:bg-surface transition-colors duration-150 -mx-2 px-2'
                  const inner = (
                    <>
                      <span className="text-xs text-foreground-muted group-hover:text-foreground transition-colors">
                        {label}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-foreground-subtle opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )
                  return external ? (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                      {inner}
                    </a>
                  ) : (
                    <Link key={href} href={href} className={className}>
                      {inner}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-surface border border-border p-6">
              <p className="label-text text-foreground-subtle mb-2">{t.contact.responseTime}</p>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {t.contact.responsePre}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground hover:text-foreground-muted transition-colors">
                  {CONTACT_EMAIL}
                </a>
                {t.contact.responsePost}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
