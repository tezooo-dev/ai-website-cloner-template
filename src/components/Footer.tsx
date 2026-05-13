import Link from "next/link";
import { Mail } from "lucide-react";
import { ArrowIcon, LinkedInIcon } from "@/components/icons";
import { ColorStripe } from "@/components/ColorStripe";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="w-full mb-[400px] xl:mb-[500px] bg-white">
      <div className="px-6 md:px-12 lg:px-24 xl:px-32 pt-12 pb-8 flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="font-mondwest text-2xl md:text-3xl leading-tight">
            Ready to automate a workflow or build an AI-powered product?
          </h2>
          <p className="text-base text-neutral-700">
            Tezooo Innovations builds practical AI systems, automation workflows,
            and custom software for companies and small business owners.{" "}
            <Link
              href="/#contact"
              className="border-b border-current hover:border-b-2 transition-all duration-[200ms]"
            >
              Start a conversation
            </Link>
          </p>
          <p className="text-sm text-neutral-500">
            Tezooo Innovations operates through Tezooo Innovations Inc. in
            Canada and Tezooo Innovations Pvt Ltd in India.
          </p>
        </div>

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

        <div className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 w-full max-w-[360px]">
          <span className="flex-1 text-left text-sm text-neutral-600">info@tezooo.com</span>
          <Link
            href="mailto:info@tezooo.com"
            aria-label="Email Tezooo Innovations"
            className="flex items-center justify-center shrink-0 text-neutral-600 hover:text-foreground transition-colors group"
          >
            <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
          </Link>
        </div>

        <div className="flex gap-3 items-center">
          <a
            href="mailto:info@tezooo.com"
            aria-label="Email Tezooo Innovations"
            className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-all duration-[200ms] text-foreground"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/tezooo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-all duration-[200ms] text-foreground"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <ColorStripe />
    </footer>
  );
}
