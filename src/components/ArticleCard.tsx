import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-100",
        "hover:shadow-md transition-shadow duration-200",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        {/* Category badge */}
        <span className="text-xs uppercase tracking-wide text-neutral-500 font-medium">
          {article.category}
        </span>

        {/* Title */}
        <h3 className="font-mondwest text-[#2c2c2c] text-lg leading-snug">
          {article.title}
        </h3>

        {/* Author + Date */}
        <p className="text-sm text-neutral-400 mt-auto pt-1">
          {article.author} &middot; {article.date}
        </p>
      </div>
    </Link>
  );
}
