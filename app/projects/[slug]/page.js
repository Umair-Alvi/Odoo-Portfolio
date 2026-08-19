import { projectsData } from "@/app/data/projects"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./ProjectDetailClient"

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug

  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} - Portfolio`,
    description: project.shortDesc || project.fullDesc,
  }
}
