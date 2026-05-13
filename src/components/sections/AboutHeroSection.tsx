"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/icons";

export function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[800px] overflow-hidden flex flex-col"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
      >
        <img
          src="/images/spring-hero-2.avif"
          alt="Central Park, New York City"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Header content */}
      <div className="relative z-10 flex flex-col items-center pt-28 px-6 text-center">
        <p className="font-af text-white/80 text-[15px] leading-[140%] tracking-wide mb-3">
          Agentic companies are on the horizon, and we&apos;re building them
        </p>
        <h1 className="font-mondwest text-white text-[clamp(1.75rem,5vw,3.5rem)] leading-[110%] tracking-[-0.02em] max-w-3xl text-shadow-white">
          The General Intelligence Company Of New York
        </h1>
      </div>

      {/* Frosted glass card — bottom left */}
      <div className="relative z-10 mt-auto mb-8 mx-6 lg:mx-12 lg:max-w-[480px]">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-sm">
          <h2 className="font-mondwest text-[#2c2c2c] text-[clamp(1.1rem,2.5vw,1.5rem)] leading-[125%] tracking-[-0.01em] mb-3">
            Our mission is to enable the one-person one-billion dollar company.
          </h2>
          <p className="font-af text-[#444141] text-[15px] leading-[160%] mb-2">
            The General Intelligence Company of New York was founded in January 2025
            by Andrew Pignanelli and Abhishyant Khare to realize this mission.
          </p>
          <p className="font-af text-[#646464] text-[13px] leading-[150%] mb-4">
            Backed by Compound &amp; Acrew Capital
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 text-[#2c2c2c] text-[15px] font-medium hover:opacity-80 transition-opacity group"
          >
            See job offers
            <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
