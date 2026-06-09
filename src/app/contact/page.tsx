'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { staggerContainer, fadeUp, fadeRight } from '@/animations/variants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { CONTACT_EMAIL, CONTACT_ADDRESS, FOUNDED_YEAR } from '@/lib/constants'

const INQUIRY_TYPES = [
  'Distribution Partnership',
  'OEM / Custom Production',
  'Dealer Application',
  'General Inquiry',
]

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [type, setType] = useState(INQUIRY_TYPES[0])

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
        <p className="font-display text-display-sm text-foreground">Message sent.</p>
        <p className="text-xs text-foreground-muted">
          Your email client should have opened. We'll get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs text-foreground-subtle hover:text-foreground transition-colors w-fit border-b border-foreground-subtle pb-0.5"
        >
          Send another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Inquiry type selector */}
      <div>
        <label className="label-text text-foreground-subtle block mb-3">Inquiry Type</label>
        <div className="flex flex-wrap gap-2">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`text-xs tracking-label uppercase px-4 py-2.5 border transition-colors duration-150 ${
                type === t
                  ? 'border-accent bg-accent text-white'
                  : 'border-border text-foreground-muted hover:border-foreground/40 hover:text-foreground'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <input type="hidden" name="type" value={type} />
      </div>

      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="label-text text-foreground-subtle block mb-2">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-surface border border-border text-foreground text-xs px-4 py-3.5 placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="company" className="label-text text-foreground-subtle block mb-2">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Brand / Shop name"
            className="w-full bg-surface border border-border text-foreground text-xs px-4 py-3.5 placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label-text text-foreground-subtle block mb-2">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full bg-surface border border-border text-foreground text-xs px-4 py-3.5 placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/40 transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label-text text-foreground-subtle block mb-2">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, brand, or question…"
          className="w-full bg-surface border border-border text-foreground text-xs px-4 py-3.5 placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/40 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="group flex items-center gap-2 bg-accent text-white text-xs tracking-extra-wide uppercase px-8 py-4 hover:bg-accent-hover transition-colors duration-200 w-fit font-sans font-medium"
      >
        Send Message
        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
      </button>

      <p className="text-[11px] text-foreground-subtle">
        B2B inquiries only. For dealer applications use the{' '}
        <Link href="/dealer-login" className="underline hover:text-foreground-muted transition-colors">
          Dealer Portal
        </Link>
        .
      </p>
    </form>
  )
}

export default function ContactPage() {
  const { ref, inView } = useScrollAnimation(0.1)

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
            <span className="label-text">Contact</span>
          </div>
          <h1 className="font-display text-display-xl text-foreground leading-display mb-6 max-w-2xl">
            Get in Touch
          </h1>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-md">
            Whether you're looking to distribute your brand, start a production run,
            or become a dealer — we'd like to hear from you.
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
              <p className="label-text text-foreground-subtle mb-6">Contact Details</p>
              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 text-xs text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-foreground-subtle group-hover:text-accent transition-colors flex-shrink-0" />
                  {CONTACT_EMAIL}
                </a>
                <div className="flex items-center gap-3 text-xs text-foreground-muted">
                  <MapPin className="w-4 h-4 text-foreground-subtle flex-shrink-0" />
                  {CONTACT_ADDRESS} — established {FOUNDED_YEAR}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Quick links */}
            <div>
              <p className="label-text text-foreground-subtle mb-6">Quick Links</p>
              <div className="flex flex-col gap-0 border-t border-border">
                {[
                  { label: 'View Our Services',         href: '/services' },
                  { label: 'Brands We Distribute',      href: '/brands' },
                  { label: 'Dealer Portal',             href: '/dealer-login' },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center justify-between py-4 border-b border-border hover:bg-surface transition-colors duration-150 -mx-2 px-2"
                  >
                    <span className="text-xs text-foreground-muted group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-foreground-subtle opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-surface border border-border p-6">
              <p className="label-text text-foreground-subtle mb-2">Response Time</p>
              <p className="text-xs text-foreground-muted leading-relaxed">
                We typically respond within 1–2 business days. For urgent matters,
                email us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground hover:text-foreground-muted transition-colors">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
