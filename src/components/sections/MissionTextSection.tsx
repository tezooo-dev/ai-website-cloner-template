"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInParagraphProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function FadeInParagraph({ children, className, delay = 0 }: FadeInParagraphProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const values = [
  "Practical AI over hype",
  "Clean engineering",
  "Business-first thinking",
  "Fast communication",
  "Long-term support",
  "Honest guidance",
  "Founder-led accountability",
];

export function MissionTextSection() {
  return (
    <section className="bg-[#FEFFFC] w-full py-20 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <FadeInParagraph>
          <p className="font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6">
            Tezooo Innovations was created to help businesses use technology in
            practical ways. The company began with digital marketing services,
            giving the team direct exposure to how businesses attract customers,
            manage leads, and struggle with manual processes.
          </p>
        </FadeInParagraph>

        <FadeInParagraph delay={100}>
          <p className="font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6">
            As AI became more useful for real business operations, Tezooo
            evolved into an AI-first software and automation company focused on
            workflows, agents, custom platforms, and connected business tools.
          </p>
        </FadeInParagraph>

        <FadeInParagraph delay={200}>
          <blockquote className="font-mondwest text-[#2c2c2c] text-[clamp(1.75rem,4vw,3rem)] leading-[115%] tracking-[-0.02em] my-12">
            Canada-led strategy. India-powered engineering.
          </blockquote>
        </FadeInParagraph>

        <FadeInParagraph delay={300}>
          <p className="font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6">
            Tezooo Innovations Inc. supports North American business
            relationships, strategy, and client delivery. Tezooo Innovations
            Pvt Ltd strengthens the company with engineering, development, and
            technology execution from India.
          </p>
        </FadeInParagraph>

        <FadeInParagraph delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-xl border border-neutral-300 bg-white px-4 py-3 font-af text-[#444141] text-[15px]"
              >
                {value}
              </div>
            ))}
          </div>
        </FadeInParagraph>
      </div>
    </section>
  );
}

export default MissionTextSection;
