import { loadPostsFromMarkdown } from "./load-markdown";
import type { BlogPost, PlaceholderPost } from "./types";

export const PLACEHOLDER_POSTS: PlaceholderPost[] = [
  {
    comingSoon: true,
    id: "when-to-turn-automation-back-on",
    title: "When to turn automation back on",
    category: "Safer automation",
  },
  {
    comingSoon: true,
    id: "reading-a-shadow-test-report",
    title: "Reading a shadow test report",
    category: "Testing",
  },
  {
    comingSoon: true,
    id: "what-operators-ask-before-a-pilot",
    title: "What operators ask before a pilot",
    category: "Operators",
  },
  {
    comingSoon: true,
    id: "how-to-read-a-disagreement-log",
    title: "How to read a disagreement log",
    category: "Testing",
  },
];

let cachedPosts: BlogPost[] | null = null;

function getMarkdownPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;
  cachedPosts = loadPostsFromMarkdown();
  return cachedPosts;
}

export function getPlaceholderPosts(): PlaceholderPost[] {
  return [...PLACEHOLDER_POSTS];
}

export function getAllPosts(): BlogPost[] {
  return [...getMarkdownPosts()].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getMarkdownPosts().find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return getMarkdownPosts().map((post) => post.slug);
}
