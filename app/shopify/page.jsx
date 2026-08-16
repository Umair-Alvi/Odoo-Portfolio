import ShopifyHero from "@/components/shopify/ShopifyHero"
import ShopifyServices from "@/components/shopify/ShopifyServices"
import ShopifySkills from "@/components/shopify/ShopifySkills"
// import ShopifyProjects from "@/components/shopify/ShopifyProjects"
import ShopifyHowIWork from "@/components/shopify/ShopifyHowIWork"
import ShopifyWhyMe from "@/components/shopify/ShopifyWhyMe"
import ShopifyFAQ from "@/components/shopify/ShopifyFAQ"
import Projects from "@/components/sections/projects"
import ShopifyCTA from "@/components/shopify/ShopifyCTA"

export default function ShopifyPage() {
  return (
    <main>
      <ShopifyHero />

      <ShopifyServices />

      <ShopifySkills />

      <Projects />

      <ShopifyHowIWork />

      <ShopifyWhyMe />

      <ShopifyFAQ />

      <ShopifyCTA />
    </main>
  )
}