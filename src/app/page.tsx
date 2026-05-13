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
  title: "General Intelligence Company",
  description:
    "We are building the tools and infrastructure for AI-native businesses — starting with Cofounder, an AI agent that automates your business operations.",
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
