"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[800px] overflow-hidden flex flex-col"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
      >
        <Image
          src="/images/tezooo-spring-hero.png"
          alt="Modern spring architecture"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col items-center pt-28 px-6 text-center">
        <p className="font-af text-white/85 text-[15px] leading-[140%] tracking-wide mb-3">
          Canada-led. India-powered. Built for practical business automation.
        </p>
        <h1 className="font-mondwest text-white text-[clamp(2rem,5vw,4rem)] leading-[110%] tracking-[-0.02em] max-w-4xl text-shadow-white">
          About Tezooo Innovations
        </h1>
      </div>

      <div className="relative z-10 mt-auto mb-8 mx-6 lg:mx-12 lg:max-w-[540px]">
        <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-sm">
          <h2 className="font-mondwest text-[#2c2c2c] text-[clamp(1.2rem,2.5vw,1.7rem)] leading-[125%] tracking-[-0.01em] mb-3">
            A founder-led AI and software technology partner.
          </h2>
          <p className="font-af text-[#444141] text-[15px] leading-[160%] mb-4">
            Tezooo helps companies and small business owners turn manual
            operations into practical AI workflows, custom software, and
            connected business systems.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-[#2c2c2c] text-[15px] font-medium hover:opacity-80 transition-opacity group"
          >
            Start a Conversation
            <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
