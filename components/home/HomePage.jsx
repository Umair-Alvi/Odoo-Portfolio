"use client"

// import Hero from "./Hero"
import WhatIDo from "./WhatIDo"
import FeaturedOdoo from "./FeaturedOdoo"
import FeaturedShopify from "./FeaturedShopify"
import FeaturedFrontend from "./FeaturedFrontend"
import FeaturedWordPress from "./FeaturedWordPress"
import HomeStats from "./HomeStats"
import HowIWork from "./HowIWork"
import HomeCTA from "./HomeCTA"
import HomeHero from "./HomeHero"
import Projects from "@/components/sections/projects"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <HomeHero />

      <WhatIDo />

      <FeaturedOdoo />
      <FeaturedShopify />
      <FeaturedFrontend />
      <FeaturedWordPress />

      <HomeStats />
      <Projects category="all" limit={4} viewMoreUrl="/projects" />
      <HowIWork />

      <HomeCTA />
    </main>
  )
}