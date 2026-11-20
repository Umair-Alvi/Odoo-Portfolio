"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { profile, services } from "@/lib/odoo-profile"
import { Icon, Reveal, Section, SectionHeader, btn } from "./ui"

export default function OdooServices() {
  return (
    <Section id="services" tone="alt">
      <SectionHeader
        eyebrow="Services"
        title="What you can hire me for"
        text="For Odoo 17, 18 and 19. Every service below is something I have already delivered on a live system."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const body = (
            <>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-o-brand/10 text-o-brand">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-semibold text-o-ink">{s.title}</h3>
              <p className="mt-2 mb-5 text-sm leading-relaxed text-o-ink-2">{s.text}</p>
              <p className="mt-auto flex items-start gap-2 border-t border-o-line pt-4 text-xs font-medium text-o-teal">
                <Check className="mt-px h-3.5 w-3.5 shrink-0" />
                <span>
                  {s.proof}
                  {s.href && <span className="ml-1 text-o-ink-3 group-hover:text-o-brand">· see case study →</span>}
                </span>
              </p>
            </>
          )
          const cls =
            "group flex h-full flex-col rounded-xl border border-o-line bg-o-surface p-6"
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.05} className="h-full">
              {s.href ? (
                <Link
                  href={s.href}
                  className={`${cls} transition-colors hover:border-o-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-o-brand`}
                >
                  {body}
                </Link>
              ) : (
                <div className={cls}>{body}</div>
              )}
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-o-line bg-o-surface-2/60 p-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-o-ink">Not sure where your requirement fits?</p>
          <p className="mt-1 text-sm text-o-ink-2">
            Send the Odoo version and a short description. I'll tell you honestly if I'm the right fit.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={btn.primary}>
            Chat on WhatsApp
          </a>
          <Link href="/#contact" className={btn.secondary}>
            Send details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}
