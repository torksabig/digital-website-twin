import { loadArticlesFromMarkdown } from "./load-markdown";
import type { Article } from "./types";

let cachedArticles: Article[] | null = null;

function getArticles(): Article[] {
  if (cachedArticles) return cachedArticles;
  cachedArticles = loadArticlesFromMarkdown("learn");
  return cachedArticles;
}

export function getAllLearnArticles(): Article[] {
  return [...getArticles()].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getLearnArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((article) => article.slug === slug);
}

export function getAllLearnSlugs(): string[] {
  return getArticles().map((article) => article.slug);
}
