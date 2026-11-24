"use client"

import { useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { odooCaseStudies, odooSystems } from "@/app/data/odoo-case-studies"
import CaseStudyCard from "./CaseStudyCard"
import { Eyebrow, Reveal } from "./ui"

export default function OdooProjectsPage() {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const systemKeys = Object.keys(odooSystems)
  const raw = params.get("system")
  const active = systemKeys.includes(raw) ? raw : "all"

  const items = useMemo(
    () =>
      (active === "all" ? odooCaseStudies : odooCaseStudies.filter((c) => c.system === active))
        .slice()
        .sort((a, b) => (b.flagship ? 1 : 0) - (a.flagship ? 1 : 0)),
    [active]
  )

  const setFilter = (key) => {
    const url = key === "all" ? pathname : `${pathname}?system=${key}`
    router.replace(url, { scroll: false })
  }

  const filters = [
    { key: "all", label: "All", count: odooCaseStudies.length },
    ...systemKeys.map((k) => ({
      key: k,
      label: odooSystems[k].name,
      count: odooCaseStudies.filter((c) => c.system === k).length,
    })),
  ]

  const current = active !== "all" ? odooSystems[active] : null

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Case studies</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-o-ink sm:text-5xl">Odoo work, feature by feature</h1>
          <p className="mt-4 text-base leading-relaxed text-o-ink-2 sm:text-lg">
            Each case study covers one problem from a production Odoo system: what the business needed, how I built
            it and what changed. Clients are kept confidential.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter by system">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active === f.key}
              onClick={() => setFilter(f.key)}
              className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
                active === f.key
                  ? "border-o-brand bg-o-brand text-o-brand-ink"
                  : "border-o-line bg-o-surface text-o-ink-2 hover:text-o-ink"
              }`}
            >
              {f.label}
              <span
                className={`rounded px-1.5 font-mono text-[11px] ${active === f.key ? "bg-black/15" : "bg-o-surface-2 text-o-ink-3"}`}
              >
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {current && (
          <p className="mt-5 text-sm text-o-ink-3">
            <span className="font-medium text-o-ink-2">{current.version}</span> · {current.role} · {current.scale}
          </p>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cs, i) => (
            <Reveal key={cs.slug} delay={(i % 3) * 0.05} className="h-full">
              <CaseStudyCard cs={cs} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
