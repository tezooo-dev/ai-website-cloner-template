"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

const tasks = [
  "competitor research",
  "CRM enrichment",
  "market analysis",
  "lead generation",
  "email outreach",
];

interface NotificationProps {
  icon: string;
  iconAlt: string;
  title: string;
  message: string;
}

function NotificationCard({ icon, iconAlt, title, message }: NotificationProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-neutral-100 shadow-sm px-4 py-3 min-w-[260px] max-w-[320px]">
      <div className="relative size-8 shrink-0 mt-0.5">
        <Image
          src={icon}
          alt={iconAlt}
          fill
          className="object-contain"
          sizes="32px"
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-semibold text-neutral-800 truncate">{title}</span>
        <span className="text-xs text-neutral-500 leading-snug mt-0.5">{message}</span>
      </div>
    </div>
  );
}

export function CofoundrSection() {
  const [taskIndex, setTaskIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = tasks[taskIndex] ?? "";
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null;

    if (isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        if (displayed.length <= 1) {
          setIsDeleting(false);
          setTaskIndex((i) => (i + 1) % tasks.length);
        }
      }, 50);
      return () => clearTimeout(timeout);
    } else {
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
    }
  }, [displayed, isDeleting, taskIndex]);

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center py-24 px-4"
      style={{ backgroundImage: "url('/images/cofounder-bg.avif')" }}
    >
      {/* Light scrim for text legibility */}
      <div className="absolute inset-0 bg-[#FEFFFC]/30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <h2 className="font-mondwest text-4xl md:text-5xl lg:text-6xl text-[#2c2c2c] leading-tight">
          Cofounder lets you automate your business with natural language
        </h2>

        {/* Typewriter sub-line */}
        <div className="font-af text-xl md:text-2xl text-[#444141] min-h-[1.4em] flex items-center gap-1">
          <span>Automate </span>
          <span className="text-[#2c2c2c] font-medium">{displayed}</span>
          <span
            className="inline-block w-[2px] h-[1em] bg-[#2c2c2c] rounded-sm align-middle animate-pulse"
            aria-hidden="true"
          />
          <span> and more</span>
        </div>

        {/* CTA */}
        <Link
          href="https://cofounder.co"
          className="inline-flex items-center gap-2 rounded-lg bg-[#1F1F29] border border-[#282834] text-white text-sm font-medium px-6 py-3 hover:bg-[#2a2a35] transition-colors group"
        >
          Get Cofounder
          <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
        </Link>

        {/* Notification mock cards */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <NotificationCard
            icon="/images/icons/slack.png"
            iconAlt="Slack"
            title="Slack — New lead qualified"
            message="Acme Corp matched 4 of your ICP criteria. Ready to review."
          />
          <NotificationCard
            icon="/images/icons/mail.png"
            iconAlt="Email"
            title="Email — Outreach sent"
            message="Personalised email delivered to 12 prospects from your list."
          />
        </div>
      </div>
    </section>
  );
}
