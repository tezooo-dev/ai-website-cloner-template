import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FixedBottomImage } from "@/components/FixedBottomImage";
import { ColorStripe } from "@/components/ColorStripe";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { MissionTextSection } from "@/components/sections/MissionTextSection";
import { NYCPhotoSection } from "@/components/sections/NYCPhotoSection";

export const metadata: Metadata = {
  title: "About — General Intelligence Company",
  description:
    "Our mission is to enable the one-person one-billion dollar company. Founded in January 2025 by Andrew Pignanelli and Abhishyant Khare.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutHeroSection />
      <ColorStripe />
      <MissionTextSection />
      <NYCPhotoSection />
      <Footer />
      <FixedBottomImage />
    </>
  );
}
