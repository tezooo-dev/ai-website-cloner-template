import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/types";

const articles: Article[] = [
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
    id: "2",
    title: "Agent-Native Engineering",
    category: "Research",
    author: "Andrew Pignanelli",
    slug: "agent-native-engineering",
    thumbnail: "/images/posts/agent-native-engineering/agent-native-engineering.png",
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
];

export function WritingSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#FEFFFC]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-4">
          <h2 className="font-mondwest text-3xl md:text-4xl text-[#2c2c2c] max-w-sm leading-tight">
            Our vision for the future of the world
          </h2>
          <Link
            href="/writing"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            Read more articles
            <span aria-hidden="true">&rarr;</span>
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
