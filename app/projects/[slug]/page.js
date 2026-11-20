import { projectsData } from "@/app/data/projects"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./ProjectDetailClient"
import OdooCaseStudyDetail from "@/components/odoo/OdooCaseStudyDetail"
import { ODOO_ONLY } from "@/lib/site-config"

// In Odoo-only mode, non-Odoo projects are hidden (404).
const visibleProjects = ODOO_ONLY ? projectsData.filter((p) => p.category === "odoo") : projectsData

// Only pre-built slugs exist; anything else is a real 404.
export const dynamicParams = false

const findProject = (slug) => visibleProjects.find((p) => p.slug === slug)

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const project = findProject(slug)

  if (!project) notFound()

  if (ODOO_ONLY) return <OdooCaseStudyDetail project={project} />
  return <ProjectDetailClient project={project} />
}

export async function generateStaticParams() {
  return visibleProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = findProject(slug)

  if (!project) return { title: "Case Study Not Found" }

  return {
    title: ODOO_ONLY
      ? `${project.title} | Odoo Case Study | Umair Akram`
      : `${project.title} - Portfolio`,
    description: project.shortDesc || project.fullDesc,
  }
}
