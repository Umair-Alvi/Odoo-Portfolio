"use client"

import { profile, principles } from "@/lib/odoo-profile"
import { Reveal, Section, SectionHeader } from "./ui"

export default function OdooAbout() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="About" title="I start from the business process, not the code" />
          <Reveal className="-mt-4 space-y-4 text-base leading-relaxed text-o-ink-2">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.05} className="lg:col-span-7 lg:pt-10">
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title} className="rounded-xl border border-o-line bg-o-surface p-5">
                <span className="font-mono text-xs text-o-teal">0{i + 1}</span>
                <p className="mt-2 font-medium text-o-ink">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-o-ink-2">{p.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
