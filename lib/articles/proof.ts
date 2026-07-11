import { loadArticlesFromMarkdown } from "./load-markdown";
import type { Article } from "./types";

let cachedArticles: Article[] | null = null;

function getArticles(): Article[] {
  if (cachedArticles) return cachedArticles;
  cachedArticles = loadArticlesFromMarkdown("proof");
  return cachedArticles;
}

export function getAllProofArticles(): Article[] {
  return [...getArticles()].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getProofArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((article) => article.slug === slug);
}

export function getAllProofSlugs(): string[] {
  return getArticles().map((article) => article.slug);
}
