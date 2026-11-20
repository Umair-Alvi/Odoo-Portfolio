"use client"

import { GraduationCap, Languages } from "lucide-react"
import { education, experience, languages } from "@/lib/odoo-profile"
import { Reveal, Section, SectionHeader } from "./ui"

function Points({ items }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((p) => (
        <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-o-ink-2">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-o-ink-3" aria-hidden="true" />
          {p}
        </li>
      ))}
    </ul>
  )
}

export default function OdooExperience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've built it" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <ol className="relative lg:col-span-8">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-o-line" />
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 0.05} className="relative pb-10 pl-9 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 ${
                  job.current ? "border-o-brand bg-o-brand" : "border-o-line bg-o-surface"
                }`}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold text-o-ink">{job.role}</h3>
                <p className="font-mono text-xs text-o-ink-3">{job.period}</p>
              </div>
              <p className="mt-0.5 text-sm text-o-ink-2">
                {job.company} · {job.place}
              </p>

              {job.points && <Points items={job.points} />}

              {job.projects && (
                <div className="mt-5 space-y-4">
                  {job.projects.map((p) => (
                    <div key={p.name} className="rounded-xl border border-o-line bg-o-surface p-5">
                      <p className="font-medium text-o-ink">{p.name}</p>
                      <p className="mt-1 text-xs font-medium text-o-teal">{p.note}</p>
                      <Points items={p.points} />
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </ol>

        <div className="space-y-6 lg:col-span-4">
          <Reveal className="rounded-xl border border-o-line bg-o-surface p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-o-ink">
              <GraduationCap className="h-4 w-4 text-o-brand" /> Education
            </h3>
            <ul className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium text-o-ink">{e.degree}</p>
                  <p className="mt-0.5 text-sm text-o-ink-2">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-o-ink-3">
                    {e.period}
                    {e.note ? ` · ${e.note}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} className="rounded-xl border border-o-line bg-o-surface p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-o-ink">
              <Languages className="h-4 w-4 text-o-brand" /> Languages
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-o-ink-2">{languages.join(" · ")}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
