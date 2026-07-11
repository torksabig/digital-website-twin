export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type ComparisonTable = {
  headers: string[];
  rows: string[][];
};

export type RelatedLink = {
  label: string;
  href: string;
};

export type ArticleFaq = {
  q: string;
  a: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  category?: string;
  author?: string;
  shortAnswer?: string;
  sections: ArticleSection[];
  relatedLinks?: RelatedLink[];
  comparisonTable?: ComparisonTable;
  faqs?: ArticleFaq[];
};

export type ArticleHub = "learn" | "proof";
