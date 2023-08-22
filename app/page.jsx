import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

import "@/styles/globals.css";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl py-12 px-6 md:px-12 md:py-20 lg:py-0 lg:px-24">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:w-1/2 lg:py-24 lg:h-screen">
          <Header />
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24" id="home">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  );
}
