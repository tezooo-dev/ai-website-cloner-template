import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FixedBottomImage } from "@/components/FixedBottomImage";
import { ColorStripe } from "@/components/ColorStripe";
import { CareersHero } from "@/components/sections/CareersHero";
import { TeamDescription } from "@/components/sections/TeamDescription";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { JobListings } from "@/components/sections/JobListings";

export const metadata: Metadata = {
  title: "Careers | Tezooo Innovations",
  description:
    "Learn about work areas at Tezooo Innovations across AI engineering, full-stack development, automation, UI/UX, cloud, and business growth.",
};

function PhotosSection() {
  return (
    <section className="bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <Image
            src="/images/tezooo-global-delivery.png"
            alt="Modern workspace"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <Image
            src="/images/tezooo-automation-architecture.png"
            alt="Modern architecture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

export default function CareersPage() {
  return (
    <>
      <Nav />
      <CareersHero />
      <TeamDescription />
      <PrinciplesSection />
      <ColorStripe />
      <PhotosSection />
      <JobListings />
      <Footer />
      <FixedBottomImage />
    </>
  );
}
