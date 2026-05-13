"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FixedBottomImage } from "@/components/FixedBottomImage";
import { ArticleCard } from "@/components/ArticleCard";
import { ArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Article, ArticleCategory } from "@/types";

type FilterCategory = "All" | ArticleCategory;

const allArticles: Article[] = [
  // Announcements (2)
  {
    id: "1",
    title: "An Update on Cofounder 1",
    category: "Announcements",
    author: "Andrew Pignanelli",
    slug: "cofounder-1-sunset-blue",
    thumbnail: "/images/posts/cofounder-1-sunset-blue.png",
    date: "2025",
  },
  {
    id: "3",
    title: "Announcing Cofounder 1.5 and our $8.7 Million Seed Round",
    category: "Announcements",
    author: "Andrew Pignanelli",
    slug: "cofounder-1-5-and-8-7-million-seed",
    thumbnail: "/images/posts/cofounder-1.5-and-8.7-million-seed.png",
    date: "2025",
  },
  // Research (3)
  {
    id: "2",
    title: "Agent-Native Engineering",
    category: "Research",
    author: "Andrew Pignanelli",
    slug: "agent-native-engineering",
    thumbnail: "/images/posts/agent-native-engineering/agent-native-engineering.png",
    date: "2025",
  },
  {
    id: "7",
    title: "Lessons from Shipping Cofounder",
    category: "Research",
    author: "Andrew Pignanelli",
    slug: "lessons-shipping-cofounder",
    thumbnail: "/images/posts/cofounder-1-sunset-blue.png",
    date: "2025",
  },
  {
    id: "8",
    title: "What We Learned About Multi-Agent Systems",
    category: "Research",
    author: "Andrew Pignanelli",
    slug: "multi-agent-systems",
    thumbnail: "/images/posts/agent-native-engineering/agent-native-engineering.png",
    date: "2025",
  },
  // Optimization (3)
  {
    id: "4",
    title: "How We Cut Latency by 10x",
    category: "Optimization",
    author: "Andrew Pignanelli",
    slug: "cut-latency-10x",
    thumbnail: "/images/posts/cofounder-1-sunset-blue.png",
    date: "2025",
  },
  {
    id: "5",
    title: "Building Reliable Agent Pipelines",
    category: "Optimization",
    author: "Andrew Pignanelli",
    slug: "reliable-agent-pipelines",
    thumbnail: "/images/posts/agent-native-engineering/agent-native-engineering.png",
    date: "2025",
  },
  {
    id: "6",
    title: "The Art of Prompt Engineering",
    category: "Optimization",
    author: "Andrew Pignanelli",
    slug: "prompt-engineering",
    thumbnail: "/images/posts/cofounder-1.5-and-8.7-million-seed.png",
    date: "2025",
  },
];

const FILTER_TABS: { label: FilterCategory; count: number }[] = [
  { label: "All", count: 8 },
  { label: "Announcements", count: 2 },
  { label: "Optimization", count: 3 },
  { label: "Research", count: 3 },
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

      {/* Section 1: Featured Article */}
      <section className="bg-[#FEFFFC] pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Quill icon */}
          <div className="flex justify-center mb-6">
            <span className="text-4xl select-none" role="img" aria-label="Writing">
              ✍️
            </span>
          </div>

          {/* Featured article card */}
          <div className="relative rounded-3xl overflow-hidden bg-blue-50 min-h-[400px]">
            <img
              src={featuredArticle.thumbnail}
              alt={featuredArticle.title}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            {/* Article info */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-white/70 text-sm uppercase tracking-wide mb-2 block font-af">
                {featuredArticle.category}
              </span>
              <h1 className="font-mondwest text-white text-[clamp(1.5rem,4vw,3rem)] leading-[115%] mb-4 max-w-2xl">
                {featuredArticle.title}
              </h1>
              <p className="text-white/70 text-sm mb-6 font-af">
                by {featuredArticle.author}
              </p>
              <a
                href={`/writing/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 bg-white text-[#2c2c2c] rounded-lg px-5 py-2.5 text-[15px] font-medium hover:bg-neutral-100 transition-colors group"
              >
                Read article
                <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Article Grid with Filter Tabs */}
      <section className="border-t border-neutral-300 bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {FILTER_TABS.map(({ label, count }) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[14px] font-medium border transition-all duration-200 font-af",
                  activeFilter === label
                    ? "bg-[#2c2c2c] text-white border-[#2c2c2c]"
                    : "bg-white text-[#646464] border-neutral-300 hover:border-neutral-600"
                )}
              >
                {label} {count}
              </button>
            ))}
          </div>

          {/* Article Grid */}
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
