"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { odooCaseStudies } from "@/app/data/odoo-case-studies"
import CaseStudyCard from "./CaseStudyCard"
import { Reveal, Section, SectionHeader, btn } from "./ui"

// Flagship case studies (Problem → Solution → Proof)
const FEATURED = [
  "odoo-18-petty-cash-expense-governance",
  "analytic-budget-commitment-control",
  "crm-cost-sheet-approvals",
  "biometric-attendance-whatsapp-reporting",
]

export default function OdooFeaturedCaseStudies() {
  const items = FEATURED.map((s) => odooCaseStudies.find((c) => c.slug === s)).filter(Boolean)
  return (
    <Section id="case-studies">
      <SectionHeader
        eyebrow="Case studies"
        title="Flagship Odoo work"
        text="Feature-level write-ups from real production systems. Client names are kept confidential."
        action={
          <Link href="/projects" className={btn.ghost}>
            All {odooCaseStudies.length} case studies <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((cs, i) => (
          <Reveal key={cs.slug} delay={(i % 2) * 0.05} className="h-full">
            <CaseStudyCard cs={cs} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
