"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Careers", href: "/careers" },
];

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "block lg:hidden fixed top-0 right-0 z-[100] w-full h-dvh pointer-events-none",
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-[250ms] pointer-events-auto",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={cn(
          "absolute top-0 right-0 w-full h-full bg-[#F9FAF7] flex flex-col pointer-events-auto",
          "transition-transform duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <div className="flex justify-end p-4 pt-5 pr-5">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-black/10 backdrop-blur-[9px] hover:bg-black/5 transition-colors"
            aria-label="Close menu"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-8 pt-8 gap-2 flex-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={cn(
                  "font-mondwest text-4xl leading-tight py-2 transition-opacity duration-[250ms]",
                  isActive ? "opacity-100" : "opacity-40 hover:opacity-70",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Copyright */}
        <div className="px-8 pb-8 text-xs text-neutral-500">
          © The General Intelligence Company of New York 2026
        </div>
      </div>
    </div>
  );
}
