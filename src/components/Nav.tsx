"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { MobileNavDrawer } from "@/components/MobileNavDrawer";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-[112] w-full lg:max-w-fit mx-auto lg:rounded-[12px] transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[background-color,border-color] bg-gradient-to-r from-white/12 via-white/12 to-[#F0EAE6]/0 backdrop-blur-[9px] border border-white/20 shadow-[0_2px_6px_0_rgba(0,0,0,0.15)]"
      >
        <div className="flex gap-6 items-center px-5 py-3 lg:px-3 lg:py-2 w-full justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Tezooo Innovations" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-[#1F1F29] text-white font-mondwest text-lg">
              T
            </span>
            <span className="hidden sm:block whitespace-nowrap font-af text-[15px] font-semibold tracking-[-0.15px] text-foreground">
              Tezooo Innovations
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden gap-6 items-center lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-medium text-[15px] leading-[140%] tracking-[-0.15px] text-foreground hover:opacity-80 transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex gap-4 items-center lg:gap-6">
            <Link href="/#contact">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium cursor-pointer group border border-[#282834] rounded-lg gap-2 text-white hover:opacity-90 transition-opacity h-9 px-4 py-2 has-[>svg]:px-3 text-[15px] tracking-[-0.15px] leading-[140%] bg-[#1F1F29]">
                <div className="flex items-center justify-center w-3 h-4 pl-[2.5px] pr-[1.5px] py-0 rounded-[50.496px] border border-white/20">
                  <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
                </div>
                Book Consultation
              </button>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="flex lg:hidden relative flex-col justify-center items-center w-9 h-9 rounded-lg border border-black/6 backdrop-blur-[9px] gap-[5px] hover:bg-black/5 transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
            >
              <span className="w-4 h-[1.5px] bg-foreground rounded-full" />
              <span className="w-4 h-[1.5px] bg-foreground rounded-full" />
              <span className="w-4 h-[1.5px] bg-foreground rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      <MobileNavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
