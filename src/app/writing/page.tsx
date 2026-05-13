"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FixedBottomImage } from "@/components/FixedBottomImage";
import { ArticleCard } from "@/components/ArticleCard";
import { ArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Article, ArticleCategory } from "@/types";

type FilterCategory = "All" | ArticleCategory;

const allArticles: Article[] = [
  {
    id: "1",
    title: "What Is AI Automation for Small Businesses?",
    category: "AI Automation",
    author: "Tezooo Innovations",
    slug: "ai-automation-for-small-business",
    thumbnail: "/images/tezooo-automation-architecture.png",
    date: "Guide",
  },
  {
    id: "2",
    title: "How AI Agents Help Business Owners Save Time",
    category: "AI Agents",
    author: "Tezooo Innovations",
    slug: "how-ai-agents-help-businesses",
    thumbnail: "/images/tezooo-global-delivery.png",
    date: "Guide",
  },
  {
    id: "3",
    title: "How to Choose the First Workflow to Automate",
    category: "Business Automation",
    author: "Tezooo Innovations",
    slug: "first-workflow-to-automate",
    thumbnail: "/images/tezooo-spring-hero.png",
    date: "Guide",
  },
  {
    id: "4",
    title: "Why Custom Software Still Matters in the AI Era",
    category: "Software",
    author: "Tezooo Innovations",
    slug: "custom-software-in-ai-era",
    thumbnail: "/images/tezooo-footer-spring.png",
    date: "Guide",
  },
  {
    id: "5",
    title: "How Restaurants Can Use AI Automation",
    category: "Restaurant Technology",
    author: "Tezooo Innovations",
    slug: "restaurant-ai-automation",
    thumbnail: "/images/tezooo-automation-architecture.png",
    date: "Guide",
  },
];

const FILTER_TABS: { label: FilterCategory; count: number }[] = [
  { label: "All", count: 5 },
  { label: "AI Automation", count: 1 },
  { label: "AI Agents", count: 1 },
  { label: "Business Automation", count: 1 },
  { label: "Software", count: 1 },
  { label: "Restaurant Technology", count: 1 },
];

export default function WritingPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filteredArticles =
    activeFilter === "All"
      ? allArticles
      : allArticles.filter((a) => a.category === activeFilter);

  const featuredArticle = allArticles[0];

  return (
    <>
      <Nav />

      <section className="bg-[#FEFFFC] pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-blue-50 h-[400px] lg:h-[500px]">
            <Image
              src={featuredArticle.thumbnail}
              alt={featuredArticle.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-white/70 text-sm uppercase tracking-wide mb-2 block font-af">
                Tezooo Insights
              </span>
              <h1 className="font-mondwest text-white text-[clamp(1.75rem,4vw,3.25rem)] leading-[115%] mb-4 max-w-2xl">
                Practical writing on AI, automation, software, and business workflows.
              </h1>
              <p className="text-white/75 text-sm mb-6 font-af max-w-xl">
                Topic ideas and educational guides for small businesses,
                founders, restaurants, retail teams, and operators planning AI
                systems.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-[#2c2c2c] rounded-lg px-5 py-2.5 text-[15px] font-medium hover:bg-neutral-100 transition-colors group"
              >
                Discuss a Project
                <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-300 bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 mb-8 flex-wrap">
            {FILTER_TABS.map(({ label, count }) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[14px] font-medium border transition-all duration-200 font-af",
                  activeFilter === label
                    ? "bg-[#2c2c2c] text-white border-[#2c2c2c]"
                    : "bg-white text-[#646464] border-neutral-300 hover:border-neutral-600",
                )}
              >
                {label} {count}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FixedBottomImage />
    </>
  );
}
