import Link from "next/link";
import { ArrowIcon, XIcon, LinkedInIcon } from "@/components/icons";
import { ColorStripe } from "@/components/ColorStripe";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Company", href: "/about" },
];

export function Footer() {
  return (
    <footer className="w-full mb-[400px] xl:mb-[500px] bg-white">
      {/* Main content area */}
      <div className="px-6 md:px-12 lg:px-24 xl:px-32 pt-12 pb-8 flex flex-col gap-8 items-center text-center">
        {/* Heading + tagline */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <h2 className="font-mondwest text-2xl md:text-3xl leading-tight">
            We&apos;re building tools for businesses that run themselves
          </h2>
          <p className="text-base text-neutral-700">
            If that sounds interesting to you,{" "}
            <Link
              href="/careers"
              className="border-b border-current hover:border-b-2 transition-all duration-[200ms]"
            >
              come work with us →
            </Link>
          </p>
        </div>

        {/* Nav links row */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-neutral-700 hover:text-foreground transition-colors duration-[200ms]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Email signup */}
        <div className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 w-full max-w-[320px]">
          <input
            type="email"
            placeholder="Get updates in your inbox"
            className="flex-1 text-sm bg-transparent outline-none placeholder:text-neutral-500 text-foreground"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="flex items-center justify-center shrink-0 text-neutral-600 hover:text-foreground transition-colors group"
          >
            <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
          </button>
        </div>

        {/* Social icons */}
        <div className="flex gap-3 items-center">
          <a
            href="https://x.com/gic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-all duration-[200ms] text-foreground"
          >
            <XIcon />
          </a>
          <a
            href="https://linkedin.com/company/general-intelligence-company"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-all duration-[200ms] text-foreground"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* Color stripe separator */}
      <ColorStripe />
    </footer>
  );
}
