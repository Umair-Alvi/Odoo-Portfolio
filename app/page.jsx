"use client"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"
import OdooServices from "../components/sections/OdooServices"
import OdooTechnicalSkills from "../components/sections/OdooTechnicalSkills"
import OdooModulesAreas from "../components/sections/ModulesAreas"
import HowIWork from "../components/sections/HowIwork"
import WhyWorkWithMe from "../components/sections/WhhyWorkMe"
import FAQ from "../components/sections/FAQ"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <OdooServices />
      <OdooModulesAreas />
      <OdooTechnicalSkills />
      <HowIWork />
      <Projects />
      <Experience />
      <WhyWorkWithMe  />
      <Contact />
      <FAQ  />
      <Footer />
    </>
  )
}
