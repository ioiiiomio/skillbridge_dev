import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProblemSection />
        <HowItWorksSection />
        <GamesSection />
        <ResultsSection />
        <PartnersSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
