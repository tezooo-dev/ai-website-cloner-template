import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/types";

const articles: Article[] = [
  {
    id: "1",
    title: "AI Automation for Small Businesses",
    category: "AI Automation",
    author: "Tezooo Innovations",
    slug: "ai-automation-for-small-business",
    thumbnail: "/images/tezooo-automation-architecture.png",
    date: "Guide",
  },
  {
    id: "2",
    title: "How AI Agents Help Customer and Sales Teams",
    category: "AI Agents",
    author: "Tezooo Innovations",
    slug: "how-ai-agents-help-businesses",
    thumbnail: "/images/tezooo-global-delivery.png",
    date: "Guide",
  },
  {
    id: "3",
    title: "Choosing the First Workflow to Automate",
    category: "Business Automation",
    author: "Tezooo Innovations",
    slug: "first-workflow-to-automate",
    thumbnail: "/images/tezooo-spring-hero.png",
    date: "Guide",
  },
];

export function WritingSection() {
  return (
    <section id="contact" className="w-full py-20 px-4 bg-[#FEFFFC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 mb-16">
          <div>
            <p className="font-af text-neutral-600 text-[15px] uppercase tracking-wide mb-4">
              Contact
            </p>
            <h2 className="font-mondwest text-3xl md:text-5xl text-[#2c2c2c] leading-tight mb-5">
              Start with one workflow, one agent, or one software problem.
            </h2>
            <p className="font-af text-[#646464] text-[17px] leading-[160%] max-w-2xl">
              Send Tezooo the project type, country, timeline, and the workflow
              you want to improve. The next step is a practical scope
              conversation, not a generic AI pitch.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-300 bg-white p-6">
            <div className="grid gap-4 text-[15px]">
              <div>
                <p className="font-medium text-[#2c2c2c] mb-1">Project types</p>
                <p className="text-[#646464]">
                  AI Automation, AI Agent, Custom Software, Web App, POS /
                  Payment Technology, CRM / Business Automation
                </p>
              </div>
              <div>
                <p className="font-medium text-[#2c2c2c] mb-1">Email</p>
                <a className="text-[#646464] hover:text-[#2c2c2c]" href="mailto:info@tezooo.com">
                  info@tezooo.com
                </a>
              </div>
              <div>
                <p className="font-medium text-[#2c2c2c] mb-1">Hiring</p>
                <a className="text-[#646464] hover:text-[#2c2c2c]" href="mailto:hr@tezooo.com">
                  hr@tezooo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between mb-10 gap-4">
          <h2 className="font-mondwest text-3xl md:text-4xl text-[#2c2c2c] max-w-sm leading-tight">
            Practical ideas for AI, software, and automation
          </h2>
          <Link
            href="/writing"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            View insights
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
