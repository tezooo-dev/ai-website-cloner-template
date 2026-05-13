export type ArticleCategory = "Announcements" | "Optimization" | "Research";

export interface Article {
  id: string;
  title: string;
  category: ArticleCategory;
  date: string;
  author: string;
  slug: string;
  thumbnail: string;
  featured?: boolean;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type AgentDiagram =
  | "isolated"
  | "scaling"
  | "coordinating"
  | "automating";

export interface AgentState {
  id: number;
  title: string;
  description: string;
  diagram: AgentDiagram;
}
