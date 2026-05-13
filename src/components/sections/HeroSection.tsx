"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/icons";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[800px] lg:h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/tezooo-spring-hero.png')",
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/35" />

      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-[15px] font-af whitespace-nowrap text-shadow-white z-10">
        Canada-led AI and software delivery for growing businesses
      </p>

      <h1 className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-5xl text-center px-6 font-mondwest text-white text-shadow-white text-[clamp(2rem,5vw,4.8rem)] leading-[105%] z-10">
        Practical AI, Software, and Automation for Businesses Ready to Move Faster
      </h1>

      <div className="absolute bottom-8 left-6 lg:bottom-12 lg:left-12 p-5 lg:p-8 lg:pr-6 rounded-2xl backdrop-blur-[15px] border border-white/20 shadow-[0_2px_6px_0_rgba(0,0,0,0.15)] bg-gradient-to-r from-black/25 via-black/15 to-black/10 max-w-[560px] z-10">
        <h2 className="font-mondwest text-white text-[clamp(1.25rem,2.5vw,2rem)] leading-[115%] tracking-[-0.02em] mb-3">
          AI systems that remove repetitive work
        </h2>
        <p className="text-white/80 text-[15px] font-af leading-[140%] mb-5">
          Tezooo Innovations helps companies and small business owners automate
          workflows, build AI-powered tools, modernize operations, and launch
          custom software systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white text-[15px] font-af font-medium hover:opacity-80 transition-opacity group"
          >
            Book a Free AI Consultation
            <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-white/80 text-[15px] font-af font-medium hover:text-white transition-colors"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
