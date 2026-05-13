import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FixedBottomImage } from "@/components/FixedBottomImage";
import { ColorStripe } from "@/components/ColorStripe";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { CofoundrSection } from "@/components/sections/CofoundrSection";
import { WritingSection } from "@/components/sections/WritingSection";

export const metadata: Metadata = {
  title: "Tezooo Innovations | AI Services, Automation & Software Development",
  description:
    "Tezooo Innovations helps companies and small businesses build practical AI automation, AI agents, custom software, web apps, POS integrations, and cloud platforms.",
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <ColorStripe />
      <VisionSection />
      <AgentsSection />
      <CofoundrSection />
      <WritingSection />
      <Footer />
      <FixedBottomImage />
    </>
  );
}
