"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Github, Share2, X } from "lucide-react"
import { odooCaseStudies, odooSystems } from "@/app/data/odoo-case-studies"
import CaseStudyCard, { CaseStudyCover } from "./CaseStudyCard"
import { Chip, Eyebrow, Reveal, btn } from "./ui"
import { RecommendationCard } from "./Recommendation"
import { recommendations } from "@/lib/odoo-profile"

function Lightbox({ images, index, setIndex, onClose, title }) {
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length, setIndex])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length, setIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose, prev, next])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
      <div className="relative h-[80vh] w-full max-w-6xl">
        <Image src={images[index]} alt={`${title} screenshot ${index + 1}`} fill className="object-contain" sizes="100vw" />
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/70">
        {index + 1} / {images.length}
      </p>
    </motion.div>
  )
}

function Block({ label, children, accent }) {
  return (
    <Reveal className="border-t border-o-line pt-8">
      <h2 className={`font-mono text-xs font-medium uppercase tracking-[0.16em] ${accent || "text-o-brand"}`}>{label}</h2>
      <div className="mt-4 text-base leading-relaxed text-o-ink-2">{children}</div>
    </Reveal>
  )
}

export default function OdooCaseStudyDetail({ project: cs }) {
  const system = odooSystems[cs.system]
  const [lightbox, setLightbox] = useState(null)
  const [copied, setCopied] = useState(false)

  const i = odooCaseStudies.findIndex((c) => c.slug === cs.slug)
  const nextCs = odooCaseStudies[(i + 1) % odooCaseStudies.length]
  const related = odooCaseStudies.filter((c) => c.system === cs.system && c.slug !== cs.slug).slice(0, 3)
  const vouches = recommendations.filter((r) => r.about?.includes(cs.slug))
  const hasProof = cs.proof?.length > 0 || cs.images?.length > 0 || vouches.length > 0

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-o-ink-2 hover:text-o-ink">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <button type="button" onClick={share} className="inline-flex items-center gap-1.5 text-sm font-medium text-o-ink-2 hover:text-o-ink">
            {copied ? <Check className="h-4 w-4 text-o-teal" /> : <Share2 className="h-4 w-4" />}
            {copied ? "Link copied" : "Share"}
          </button>
        </div>

        <Reveal className="mt-10 max-w-3xl">
          <Eyebrow>
            {system?.version} · {system?.name}
          </Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-o-ink sm:text-5xl">{cs.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-o-ink-2">{cs.shortDesc}</p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          {cs.images?.length ? (
            <button
              type="button"
              onClick={() => setLightbox(0)}
              className="group relative block w-full overflow-hidden rounded-xl border border-o-line"
              aria-label="Open screenshot"
            >
              <CaseStudyCover cs={cs} large className="aspect-[16/8]" />
            </button>
          ) : (
            <CaseStudyCover cs={cs} large className="aspect-[16/6] rounded-xl border border-o-line" />
          )}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <Block label="01 · Problem">
              <p>{cs.challenges}</p>
            </Block>

            <Block label="02 · Solution">
              <p>{cs.fullDesc}</p>
              <p className="mt-4">
                <span className="font-medium text-o-ink">How it was built: </span>
                {cs.solution}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {cs.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-o-teal" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Reveal className="rounded-xl border border-o-teal/30 bg-o-teal/5 p-6">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-o-teal">03 · Result</h2>
              <p className="mt-3 text-base leading-relaxed text-o-ink">{cs.results}</p>
            </Reveal>

            {hasProof && (
              <Block label="04 · Proof">
                {cs.proof?.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {cs.proof.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-o-teal" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {cs.images?.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {cs.images.map((src, idx) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setLightbox(idx)}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg border border-o-line bg-o-surface-2 transition-opacity hover:opacity-90"
                        aria-label={`Open screenshot ${idx + 1}`}
                      >
                        <Image src={src} alt={`${cs.title} screenshot ${idx + 1}`} fill sizes="300px" className="object-cover object-top" />
                      </button>
                    ))}
                  </div>
                )}

                {vouches.length > 0 && (
                  <div className={cs.images?.length ? "mt-8" : ""}>
                    <p className="mb-4 text-sm font-medium text-o-ink">From people who worked with me on this</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {vouches.map((r) => (
                        <RecommendationCard key={r.name} r={r} compact />
                      ))}
                    </div>
                  </div>
                )}
              </Block>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-24">
              <Reveal className="rounded-xl border border-o-line bg-o-surface p-6">
                <dl className="space-y-4 text-sm">
                  {[
                    ["System", system?.name],
                    ["Odoo version", system?.version],
                    ["My role", system?.role],
                    ["Client", "Confidential"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-o-line pb-3 last:border-0 last:pb-0">
                      <dt className="text-o-ink-3">{k}</dt>
                      <dd className="text-right font-medium text-o-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.04} className="rounded-xl border border-o-line bg-o-surface p-6">
                <h3 className="text-sm font-semibold text-o-ink">Odoo apps</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cs.modules.map((m) => (
                    <Chip key={m} tone="brand">
                      {m}
                    </Chip>
                  ))}
                </div>
                <h3 className="mt-6 text-sm font-semibold text-o-ink">Technical</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cs.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                {cs.githubUrl && (
                  <a href={cs.githubUrl} target="_blank" rel="noopener noreferrer" className={`${btn.secondary} mt-6 w-full`}>
                    <Github className="h-4 w-4" /> Sample code on GitHub
                  </a>
                )}
              </Reveal>

              <Reveal delay={0.08} className="rounded-xl bg-o-brand p-6 text-o-brand-ink">
                <h3 className="font-semibold">Need something similar?</h3>
                <p className="mt-2 text-sm opacity-85">I can build or adapt this for your Odoo version and process.</p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-o-brand-ink/10 px-4 py-2 text-sm font-semibold ring-1 ring-current/20 hover:bg-o-brand-ink/20"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-o-line pt-12">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-o-ink">More from this system</h2>
              <Link href={`/projects/${nextCs.slug}`} className={btn.ghost}>
                Next case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <CaseStudyCard key={r.slug} cs={r} />
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            images={cs.images}
            index={lightbox}
            setIndex={(fn) => setLightbox((v) => (typeof fn === "function" ? fn(v) : fn))}
            onClose={() => setLightbox(null)}
            title={cs.title}
          />
        )}
      </AnimatePresence>
    </article>
  )
}
