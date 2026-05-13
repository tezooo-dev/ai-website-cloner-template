"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

const rotatingWorkflows = [
  "lead follow-ups",
  "customer support",
  "CRM updates",
  "payment reminders",
  "weekly reports",
];

const industries = [
  {
    title: "Small Businesses",
    text: "Automate follow-ups, reporting, customer communication, and repetitive admin work.",
  },
  {
    title: "Restaurants & Food Tech",
    text: "Build ordering workflows, kiosks, POS integrations, loyalty tools, and customer systems.",
  },
  {
    title: "Retail & POS",
    text: "Connect inventory, payments, customer follow-up, reporting, and multi-location operations.",
  },
  {
    title: "Startups & SaaS",
    text: "Ship MVPs, dashboards, AI features, subscription systems, and analytics tools.",
  },
];

const processSteps = [
  "Discovery",
  "AI and workflow audit",
  "Product strategy",
  "Design and architecture",
  "Development",
  "Testing",
  "Launch",
  "Support and optimization",
];

export function CofoundrSection() {
  const [taskIndex, setTaskIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = rotatingWorkflows[taskIndex] ?? "";
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null;

    if (isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        if (displayed.length <= 1) {
          setIsDeleting(false);
          setTaskIndex((i) => (i + 1) % rotatingWorkflows.length);
        }
      }, 50);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayed(target.slice(0, displayed.length + 1));
      if (displayed.length >= target.length - 1) {
        pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }, 80);
    return () => {
      clearTimeout(timeout);
      if (pauseTimeout !== null) clearTimeout(pauseTimeout);
    };
  }, [displayed, isDeleting, taskIndex]);

  return (
    <>
      <section
        id="industries"
        className="relative w-full overflow-hidden bg-cover bg-center py-24 px-4"
        style={{ backgroundImage: "url('/images/tezooo-automation-architecture.png')" }}
      >
        <div className="absolute inset-0 bg-[#FEFFFC]/45 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 mb-12">
            <h2 className="font-mondwest text-4xl md:text-5xl lg:text-6xl text-[#2c2c2c] leading-tight">
              Business automation that starts with the workflow
            </h2>

            <div className="font-af text-xl md:text-2xl text-[#444141] min-h-[1.4em] flex items-center gap-1">
              <span>Automate </span>
              <span className="text-[#2c2c2c] font-medium">{displayed}</span>
              <span
                className="inline-block w-[2px] h-[1em] bg-[#2c2c2c] rounded-sm align-middle animate-pulse"
                aria-hidden="true"
              />
              <span> and more</span>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1F1F29] border border-[#282834] text-white text-sm font-medium px-6 py-3 hover:bg-[#2a2a35] transition-colors group"
            >
              Request an Automation Audit
              <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="rounded-2xl border border-white/50 bg-white/85 backdrop-blur-md p-6"
              >
                <h3 className="font-mondwest text-[#2c2c2c] text-xl mb-3">
                  {industry.title}
                </h3>
                <p className="font-af text-[#646464] text-[15px] leading-[155%]">
                  {industry.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#FEFFFC] py-20 lg:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-af text-neutral-600 text-[15px] uppercase tracking-wide mb-4">
              Process
            </p>
            <h2 className="font-mondwest text-[#2c2c2c] text-[clamp(2rem,4vw,4rem)] leading-[110%] tracking-[-0.02em] mb-5">
              Understand the work before adding AI.
            </h2>
            <p className="font-af text-[#646464] text-[17px] leading-[165%]">
              Tezooo starts by mapping the workflow, people, bottlenecks, tools,
              and outcome you want. AI is applied where it makes the process
              faster, clearer, or easier to manage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-neutral-300 bg-white p-4 flex gap-3 items-start"
              >
                <span className="font-mondwest text-[#b4b8b4] text-xl leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-af text-[#444141] text-[15px]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/tezooo-global-delivery.png"
              alt="Modern workspace representing Tezooo global delivery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="font-af text-neutral-600 text-[15px] uppercase tracking-wide mb-4">
              Global delivery model
            </p>
            <h2 className="font-mondwest text-[#2c2c2c] text-[clamp(2rem,4vw,4rem)] leading-[110%] tracking-[-0.02em] mb-5">
              Canada-led strategy. India-powered engineering.
            </h2>
            <p className="font-af text-[#444141] text-[17px] leading-[165%] mb-5">
              Tezooo Innovations operates through Tezooo Innovations Inc. in
              Canada and Tezooo Innovations Pvt Ltd in India, combining North
              American business communication with strong engineering delivery.
            </p>
            <p className="font-af text-[#646464] text-[17px] leading-[165%]">
              One company story, two operating bases, and a practical focus on
              building systems that businesses can actually use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
