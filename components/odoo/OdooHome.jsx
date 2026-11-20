"use client"

import OdooHero from "./OdooHero"
import OdooServices from "./OdooServices"
import OdooFeaturedCaseStudies from "./OdooFeaturedCaseStudies"
import OdooRecommendations from "./OdooRecommendations"
import OdooAbout from "./OdooAbout"
import OdooSkills from "./OdooSkills"
import OdooExperience from "./OdooExperience"

// Order is client-first: what I offer → proof of work → what others say → who I am.
export default function OdooHome() {
  return (
    <>
      <OdooHero />
      <OdooServices />
      <OdooFeaturedCaseStudies />
      <OdooRecommendations />
      <OdooAbout />
      <OdooSkills />
      <OdooExperience />
    </>
  )
}
