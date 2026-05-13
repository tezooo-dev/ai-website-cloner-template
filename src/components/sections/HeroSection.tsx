"use client";

import { useEffect, useState } from "react";
import { ArrowIcon, ClockIcon } from "@/components/icons";
import { useNYCTimeTint } from "@/hooks/useNYCTimeTint";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState<string>("");
  const tint = useNYCTimeTint();

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live NYC clock
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const updateTime = () => setTime(formatter.format(new Date()));
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-[800px] lg:h-screen overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/spring-hero-2.avif')",
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: "transform",
        }}
      />

      {/* NYC time-of-day tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: tint,
          transition: "background-color 2s ease",
        }}
      />

      {/* Superscript text above H1 */}
      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-[15px] font-af whitespace-nowrap text-shadow-white z-10">
        Agentic companies are on the horizon, and we&apos;re building them
      </p>

      {/* H1 title */}
      <h1 className="absolute top-16 left-1/2 -translate-x-1/2 w-full text-center px-6 font-mondwest text-white text-shadow-white text-[clamp(1.5rem,4vw,3.5rem)] z-10">
        The General Intelligence Company Of New York
      </h1>

      {/* Live time display — hidden on mobile */}
      <div className="absolute top-6 right-4 md:flex items-center hidden gap-1.5 text-white text-[13px] font-af z-10">
        <ClockIcon />
        <span>{time}</span>
        <span>NYC</span>
      </div>

      {/* Frosted glass card */}
      <div className="absolute bottom-8 left-6 lg:bottom-12 lg:left-12 p-5 lg:p-8 lg:pr-6 rounded-2xl backdrop-blur-[15px] border border-white/20 shadow-[0_2px_6px_0_rgba(0,0,0,0.15)] bg-gradient-to-r from-black/12 via-black/7 to-black/7 max-w-[500px] z-10">
        <h2 className="font-mondwest text-white text-[clamp(1.25rem,2.5vw,2rem)] leading-[115%] tracking-[-0.02em] mb-3">
          AI that runs businesses autonomously
        </h2>
        <p className="text-white/80 text-[15px] font-af leading-[140%] mb-5">
          The General Intelligence Company is an applied AI lab working towards
          automating businesses full-stack with AI.
        </p>
        <a
          href="/about"
          className="inline-flex items-center gap-2 text-white text-[15px] font-af font-medium hover:opacity-80 transition-opacity group"
        >
          Get to know us
          <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
        </a>
      </div>
    </section>
  );
}
