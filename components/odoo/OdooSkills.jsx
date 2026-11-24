"use client"

import { skillGroups } from "@/lib/odoo-profile"
import { Chip, Reveal, Section, SectionHeader } from "./ui"

export default function OdooSkills() {
  return (
    <Section id="skills" tone="alt">
      <SectionHeader eyebrow="Technical skills" title="The toolkit behind the modules" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 0.05} className={`rounded-xl border border-o-line bg-o-surface p-6 ${i === 0 ? "md:col-span-2" : ""}`}>
            <h3 className="text-sm font-semibold text-o-ink">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Chip key={s} tone={i === 0 ? "brand" : i === 1 ? "teal" : "neutral"}>
                  {s}
                </Chip>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
