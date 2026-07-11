import type { MetadataRoute } from "next";
import { getAllLearnArticles } from "@/lib/articles/learn";
import { getAllProofArticles } from "@/lib/articles/proof";
import { getAllPosts } from "@/lib/blog/posts";
import { SITE_URL, STATIC_ROUTES } from "@/lib/seo/config";

export const dynamic = "force-static";

function routePriority(path: string): number {
  if (path === "/") return 1;
  if (path === "/qorina/" || path === "/learn/" || path === "/proof/") return 0.9;
  if (path === "/blog/") return 0.8;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const learnArticles = getAllLearnArticles();
  const proofArticles = getAllProofArticles();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === "/" || path === "/blog/" || path === "/learn/" || path === "/proof/"
        ? "weekly"
        : "monthly",
    priority: routePriority(path),
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const learnEntries: MetadataRoute.Sitemap = learnArticles.map((article) => ({
    url: `${SITE_URL}/learn/${article.slug}/`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const proofEntries: MetadataRoute.Sitemap = proofArticles.map((article) => ({
    url: `${SITE_URL}/proof/${article.slug}/`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries, ...learnEntries, ...proofEntries];
}
