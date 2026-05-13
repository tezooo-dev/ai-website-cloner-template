"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
  "AI Automation",
  "AI Agents",
  "Custom Software",
  "POS & Payments",
  "Cloud Platforms",
];

const services = [
  {
    title: "AI Automation",
    text: "Lead capture, follow-ups, customer communication, reminders, reports, and repetitive operations.",
  },
  {
    title: "AI Agents",
    text: "Support, sales, reception, scheduling, knowledge, reporting, and operations assistants with human handoff.",
  },
  {
    title: "Custom Software",
    text: "Web apps, dashboards, portals, workflow tools, SaaS products, and AI-powered internal systems.",
  },
  {
    title: "Business Technology",
    text: "CRM automation, payment workflows, POS integrations, restaurant kiosks, and cloud backend systems.",
  },
];

export function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
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
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#FEFFFC] w-full py-20 lg:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-16">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-center font-af text-[14px] text-[#444141]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="font-af text-[#646464] text-[15px] uppercase tracking-wide mb-4">
              From marketing roots to AI-powered business growth
            </p>
            <h2 className="font-mondwest text-[#2c2c2c] text-[clamp(2rem,4vw,4rem)] leading-[110%] tracking-[-0.02em]">
              Built on Marketing Experience. Focused on AI Systems.
            </h2>
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="font-af text-[#444141] text-[17px] leading-[165%] mb-5">
              Tezooo started by helping businesses grow through digital
              marketing. That foundation taught us how small businesses think,
              where operations break, and what owners need from technology.
            </p>
            <p className="font-af text-[#646464] text-[17px] leading-[165%]">
              Today, Tezooo brings that business understanding into AI
              automation, custom software, and practical systems that save time,
              connect tools, and make daily operations easier to manage.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-neutral-300 bg-white p-6"
            >
              <h3 className="font-mondwest text-[#2c2c2c] text-xl leading-tight mb-3">
                {service.title}
              </h3>
              <p className="font-af text-[#646464] text-[15px] leading-[155%]">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
