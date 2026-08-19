import FrontendHero from "@/components/frontend/FrontendHero";
import FrontendSkills from "@/components/frontend/FrontendSkills";
import FrontendServices from "@/components/frontend/FrontendServices";
import FrontendHowIWork from "@/components/frontend/FrontendHowIWork";
import FrontendWhyWorkWithMe from "@/components/frontend/FrontendWhyWorkWithMe";
import FrontendCTA from "@/components/frontend/FrontendCTA";
import Projects from "@/components/sections/projects"

export default function FrontendPage() {
  return (
    <main className="overflow-hidden">

      <FrontendHero />

      <FrontendSkills />

      <FrontendServices />

      {/* Your Frontend Projects section can come here */}
      <Projects category="frontend" limit={4} viewMoreUrl="/projects?category=frontend" />

      <FrontendHowIWork />

      <FrontendWhyWorkWithMe />

      <FrontendCTA />

    </main>
  );
}