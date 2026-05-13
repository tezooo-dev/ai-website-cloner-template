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
      { threshold: 0.15 }
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
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function MissionTextSection() {
  return (
    <section className="bg-[#FEFFFC] w-full py-20 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <FadeInParagraph delay={0}>
          <p className="font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6">
            The world has changed. AI is transforming how businesses operate — automating
            work that once required entire teams. But most companies still run on legacy
            processes, disconnected tools, and human bottlenecks that slow everything down.
          </p>
        </FadeInParagraph>

        <FadeInParagraph delay={100}>
          <p className="font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6">
            We believe the future belongs to the solo operator — the founder, the freelancer,
            the creative entrepreneur — who can now access leverage that was previously only
            available to large organizations. The one-person one-billion dollar company is
            not a fantasy. It is the next frontier.
          </p>
        </FadeInParagraph>

        <FadeInParagraph delay={200}>
          <p className="font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6">
            For too long, building and operating a business has required assembling a large
            team, managing endless tools, and spending more time on process than on creation.
            The best ideas get buried under operational overhead. The most talented people
            spend their days on coordination instead of craft.
          </p>
        </FadeInParagraph>

        <FadeInParagraph delay={300}>
          <blockquote className="font-mondwest text-[#2c2c2c] text-[clamp(1.75rem,4vw,3rem)] leading-[115%] tracking-[-0.02em] my-12">
            &ldquo;By building the right products, and developing the right agents,
            we can fix that.&rdquo;
          </blockquote>
        </FadeInParagraph>

        <FadeInParagraph delay={400}>
          <p className="font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6">
            Our first product, Cofounder, is an AI that plugs into your existing tools and
            automates your entire workflow with natural language. No code required. Just
            describe what you want to automate, and Cofounder builds and runs the workflow
            for you — end to end.
          </p>
        </FadeInParagraph>

        <FadeInParagraph delay={500}>
          <p className="font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6">
            We are building in New York City — the greatest city in the world — because
            we believe that proximity to the world&apos;s most ambitious businesses, investors,
            and talent accelerates everything. NYC moves fast. So do we.
          </p>
        </FadeInParagraph>

        <FadeInParagraph delay={600}>
          <p className="font-af text-[#444141] text-[15px] italic mt-8">
            with love from NYC, Andrew &amp; Abhishyant
          </p>
        </FadeInParagraph>
      </div>
    </section>
  );
}

export default MissionTextSection;
