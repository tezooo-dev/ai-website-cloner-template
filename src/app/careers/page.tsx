import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FixedBottomImage } from "@/components/FixedBottomImage";
import { ColorStripe } from "@/components/ColorStripe";
import { CareersHero } from "@/components/sections/CareersHero";
import { TeamDescription } from "@/components/sections/TeamDescription";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { JobListings } from "@/components/sections/JobListings";

export const metadata: Metadata = {
  title: "Careers — General Intelligence Company",
  description:
    "Join a small team of builders obsessed with AI. We are hiring engineers, designers, and researchers in New York City.",
};

function PhotosSection() {
  return (
    <section className="bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
          <img
            src="/images/career.avif"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
          <img
            src="/images/office-1.png"
            alt="Office"
            className="w-full h-full object-cover"
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
