"use client"

import { ArrowUpRight } from "lucide-react"
import { profile, recommendations } from "@/lib/odoo-profile"
import { RecommendationCard } from "./Recommendation"
import { Reveal, Section, SectionHeader, btn } from "./ui"

export default function OdooRecommendations() {
  return (
    <Section id="recommendations" tone="alt">
      <SectionHeader
        eyebrow="Recommendations"
        title="What people I've worked with say"
        text="Written on LinkedIn by managers and colleagues from the Odoo projects shown here."
        action={
          <a href={profile.linkedinRecommendations} target="_blank" rel="noopener noreferrer" className={btn.ghost}>
            View on LinkedIn <ArrowUpRight className="h-4 w-4" />
          </a>
        }
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {recommendations.map((r, i) => (
          <Reveal key={r.name} delay={(i % 2) * 0.05} className="h-full">
            <RecommendationCard r={r} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
