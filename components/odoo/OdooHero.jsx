"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Download, MapPin } from "lucide-react"
import { profile, stats } from "@/lib/odoo-profile"
import { btn } from "./ui"
import { WhatsAppIcon } from "./WhatsAppButton"

const manifest = [
  ["name", '"Analytic Budget Control"'],
  ["version", '"18.0.1.0.0"'],
  ["depends", '["account", "purchase", "hr_expense"]'],
  ["author", '"Umair Akram"'],
  ["license", '"LGPL-3"'],
]

export default function OdooHero() {
  const reduce = useReducedMotion()
  const fade = (d = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="o-grid-bg pointer-events-none absolute inset-0 -z-0 opacity-60" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <motion.div {...fade(0)} className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-o-line bg-o-surface px-3 py-1 text-xs font-medium text-o-ink-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-o-teal opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-o-teal" />
              </span>
              Available for Odoo roles & projects
            </span>
            {profile.versions.map((v) => (
              <span
                key={v}
                className="rounded-full border border-o-brand/25 bg-o-brand/10 px-2.5 py-1 font-mono text-[11px] font-medium text-o-brand"
              >
                {v}
              </span>
            ))}
          </motion.div>

          <motion.p {...fade(0.05)} className="mt-6 text-sm font-medium text-o-ink-3">
            {profile.name} · {profile.role}
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-o-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Custom Odoo modules for <span className="text-o-brand">Accounting, Payroll & CRM</span>.
          </motion.h1>

          <motion.p {...fade(0.15)} className="mt-6 max-w-xl text-base leading-relaxed text-o-ink-2 sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(0.2)} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/projects" className={btn.primary}>
              View case studies <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={btn.secondary}>
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Chat on WhatsApp
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className={`${btn.ghost} px-2`}>
              <Download className="h-4 w-4" /> CV
            </a>
          </motion.div>

          <motion.p {...fade(0.25)} className="mt-6 flex items-center gap-1.5 text-sm text-o-ink-3">
            <MapPin className="h-4 w-4" /> {profile.location} · works remote & hybrid
          </motion.p>
        </div>

        <motion.div {...fade(0.15)} className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-o-line bg-o-surface shadow-xl shadow-black/5">
              <div className="relative aspect-square overflow-hidden bg-o-surface-2">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-o-line bg-o-surface-2/70 p-4 font-mono text-[12px] leading-6">
                <p className="text-o-ink-3"># __manifest__.py</p>
                <p className="text-o-ink-2">{"{"}</p>
                {manifest.map(([k, v]) => (
                  <p key={k} className="truncate pl-4">
                    <span className="text-o-teal">"{k}"</span>
                    <span className="text-o-ink-3">: </span>
                    <span className="text-o-brand">{v}</span>
                    <span className="text-o-ink-3">,</span>
                  </p>
                ))}
                <p className="text-o-ink-2">{"}"}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-o-line bg-o-surface md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fade(0.25 + i * 0.05)}
              className={`p-5 sm:p-6 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""} border-o-line`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-o-ink sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-xs leading-snug text-o-ink-3 sm:text-sm">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
