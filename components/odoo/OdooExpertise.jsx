"use client"

import { expertise } from "@/lib/odoo-profile"
import { Icon, Reveal, Section, SectionHeader } from "./ui"

export default function OdooExpertise() {
  return (
    <Section id="expertise">
      <SectionHeader
        eyebrow="Expertise"
        title="Functional areas I build for"
        text="Hands-on module work across the apps that run a company's day-to-day operations, with accounting impact checked on every change."
      />
      <div className="grid gap-px overflow-hidden rounded-xl border border-o-line bg-o-line sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((e, i) => (
          <Reveal key={e.title} delay={(i % 4) * 0.04} className="bg-o-surface p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-o-brand/10 text-o-brand">
              <Icon name={e.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold text-o-ink">{e.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {e.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm leading-snug text-o-ink-2">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-o-ink-3" aria-hidden="true" />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
