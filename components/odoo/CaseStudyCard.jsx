"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { odooSystems } from "@/app/data/odoo-case-studies"
import { Icon } from "./ui"

// Visual header for a case study: the real screenshot if there is one,
// otherwise a clean module "cover" (no fake screenshots).
export function CaseStudyCover({ cs, className = "", large = false }) {
  const system = odooSystems[cs.system]
  if (cs.images?.length) {
    return (
      <div className={`relative overflow-hidden bg-o-surface-2 ${className}`}>
        <Image
          src={cs.images[0]}
          alt={`${cs.title} screenshot`}
          fill
          sizes={large ? "(min-width: 1024px) 1100px, 100vw" : "(min-width: 1024px) 360px, 100vw"}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    )
  }
  return (
    <div className={`relative overflow-hidden bg-o-surface-2 ${className}`}>
      <div aria-hidden="true" className="o-grid-bg absolute inset-0 opacity-70 [mask-image:none]" />
      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-md border border-o-line bg-o-surface px-2 py-0.5 font-mono text-[11px] text-o-ink-3">
            {system?.version}
          </span>
          <span className="font-mono text-[11px] text-o-ink-3">{system?.name}</span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {cs.modules.slice(0, large ? 6 : 3).map((m) => (
              <span
                key={m}
                className="rounded border border-o-line bg-o-surface/90 px-2 py-0.5 text-[11px] font-medium text-o-ink-2"
              >
                {m}
              </span>
            ))}
          </div>
          <span
            className={`flex shrink-0 items-center justify-center rounded-xl bg-o-brand text-o-brand-ink shadow-sm ${large ? "h-16 w-16" : "h-12 w-12"}`}
          >
            <Icon name={cs.icon} className={large ? "h-8 w-8" : "h-6 w-6"} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudyCard({ cs }) {
  const system = odooSystems[cs.system]
  return (
    <Link
      href={`/projects/${cs.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-o-line bg-o-surface transition-all hover:-translate-y-0.5 hover:border-o-brand/40 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-o-brand"
    >
      <CaseStudyCover cs={cs} className="aspect-[16/9] border-b border-o-line" />
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center justify-between gap-2 text-xs font-medium text-o-teal">
          <span>{system?.name}</span>
          {cs.flagship && (
            <span className="rounded border border-o-brand/25 bg-o-brand/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-o-brand uppercase">
              Flagship
            </span>
          )}
        </p>
        <h3 className="mt-1.5 flex items-start justify-between gap-3 font-semibold leading-snug text-o-ink">
          {cs.title}
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-o-ink-3 transition-colors group-hover:text-o-brand" />
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-o-ink-2">{cs.shortDesc}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {cs.tech.slice(0, 4).map((t) => (
            <span key={t} className="rounded bg-o-surface-2 px-2 py-0.5 text-[11px] font-medium text-o-ink-3">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
