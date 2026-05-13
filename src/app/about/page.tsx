import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FixedBottomImage } from "@/components/FixedBottomImage";
import { ColorStripe } from "@/components/ColorStripe";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { MissionTextSection } from "@/components/sections/MissionTextSection";
import { GlobalDeliveryPhotoSection } from "@/components/sections/GlobalDeliveryPhotoSection";

export const metadata: Metadata = {
  title: "About Tezooo Innovations | Canada-Led AI & Software Company",
  description:
    "Learn about Tezooo Innovations Inc. and Tezooo Innovations Pvt Ltd, a Canada-led and India-powered AI, automation, and software development company.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutHeroSection />
      <ColorStripe />
      <MissionTextSection />
      <GlobalDeliveryPhotoSection />
      <Footer />
      <FixedBottomImage />
    </>
  );
}
