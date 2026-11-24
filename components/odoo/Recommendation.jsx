import { Linkedin, Quote } from "lucide-react"
import { profile } from "@/lib/odoo-profile"

export function RecommendationCard({ r, compact = false }) {
  const initials = r.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
  return (
    <figure className="flex h-full flex-col rounded-xl border border-o-line bg-o-surface p-6">
      <Quote className="h-5 w-5 text-o-brand/60" aria-hidden="true" />
      <blockquote className={`mt-3 flex-1 leading-relaxed text-o-ink-2 ${compact ? "text-sm" : "text-[15px]"}`}>
        “{r.text}
        {r.truncated ? "…" : ""}”
        {r.truncated && (
          <a
            href={profile.linkedinRecommendations}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-sm font-medium text-o-brand hover:text-o-brand-strong"
          >
            Read full
          </a>
        )}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-o-line pt-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-o-surface-2 text-sm font-semibold text-o-brand">
          {initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-o-ink">{r.name}</p>
          <p className="truncate text-xs text-o-ink-3">{r.title}</p>
          <p className="text-xs text-o-ink-3">{r.relation}</p>
        </div>
        <a
          href={profile.linkedinRecommendations}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${r.name}'s recommendation on LinkedIn`}
          className="text-o-ink-3 hover:text-o-brand"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </figcaption>
    </figure>
  )
}
