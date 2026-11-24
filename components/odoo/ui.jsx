"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Calculator,
  CalendarCheck,
  FileSpreadsheet,
  Fingerprint,
  Handshake,
  Landmark,
  MessageCircle,
  PackageSearch,
  Plug,
  Receipt,
  ShieldCheck,
  UserRound,
  Wallet,
  Workflow,
  Boxes,
  Wrench,
} from "lucide-react"

export const icons = {
  Calculator,
  CalendarCheck,
  FileSpreadsheet,
  Fingerprint,
  Handshake,
  Landmark,
  MessageCircle,
  PackageSearch,
  Plug,
  Receipt,
  ShieldCheck,
  UserRound,
  Wallet,
  Workflow,
  Boxes,
  Wrench,
}

export function Icon({ name, className }) {
  const Cmp = icons[name] || Boxes
  return <Cmp className={className} aria-hidden="true" />
}

export function Reveal({ children, delay = 0, className, as = "div" }) {
  const reduce = useReducedMotion()
  const M = motion[as]
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

export function Section({ id, children, className = "", tone = "base" }) {
  const bg = tone === "alt" ? "bg-o-surface-2/60" : ""
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-o-brand">{children}</p>
  )
}

export function SectionHeader({ eyebrow, title, text, align = "left", action }) {
  const center = align === "center"
  return (
    <Reveal
      className={`mb-12 flex flex-col gap-6 md:mb-14 ${center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}
    >
      <div className={center ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-o-ink sm:text-4xl">{title}</h2>
        {text && <p className="mt-4 text-base leading-relaxed text-o-ink-2 sm:text-lg">{text}</p>}
      </div>
      {action}
    </Reveal>
  )
}

export function Chip({ children, tone = "neutral" }) {
  const styles =
    tone === "brand"
      ? "border-o-brand/25 bg-o-brand/10 text-o-brand"
      : tone === "teal"
        ? "border-o-teal/25 bg-o-teal/10 text-o-teal"
        : "border-o-line bg-o-surface text-o-ink-2"
  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${styles}`}>
      {children}
    </span>
  )
}

export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-o-brand px-5 py-3 text-sm font-semibold text-o-brand-ink shadow-sm transition-colors hover:bg-o-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-o-brand",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-o-line bg-o-surface px-5 py-3 text-sm font-semibold text-o-ink transition-colors hover:border-o-ink-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-o-brand",
  ghost:
    "inline-flex items-center gap-1.5 text-sm font-semibold text-o-brand transition-colors hover:text-o-brand-strong",
}
