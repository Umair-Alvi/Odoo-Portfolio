"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import Projects from "@/components/sections/projects"
import OdooProjectsPage from "@/components/odoo/OdooProjectsPage"
import { ODOO_ONLY } from "@/lib/site-config"

const VALID_CATEGORIES = ["all", "odoo", "shopify", "frontend", "wordpress", "other"]

function ProjectsPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const rawCategory = searchParams.get("category")?.toLowerCase().trim()
  const category = rawCategory && VALID_CATEGORIES.includes(rawCategory) ? rawCategory : "all"

  const handleCategoryChange = (newCategory) => {
    const validCat = VALID_CATEGORIES.includes(newCategory) ? newCategory : "all"
    const params = new URLSearchParams(searchParams.toString())

    if (validCat === "all") {
      params.delete("category")
    } else {
      params.set("category", validCat)
    }

    const queryString = params.toString()
    const url = queryString ? `${pathname}?${queryString}` : pathname
    router.push(url, { scroll: false })
  }

  return (
    <main className="pt-20">
      <Projects
        category={category}
        limit={null}
        isMainPage={true}
        onCategoryChange={handleCategoryChange}
      />
    </main>
  )
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      {ODOO_ONLY ? <OdooProjectsPage /> : <ProjectsPageContent />}
    </Suspense>
  )
}
