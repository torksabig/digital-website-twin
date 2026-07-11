import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, ArticleFaq, ArticleHub, ArticleSection, ComparisonTable, RelatedLink } from "./types";

function parseSections(body: string): ArticleSection[] {
  const trimmed = body.trim();
  if (!trimmed) return [];

  const chunks = trimmed.split(/\n(?=## )/);
  const sections: ArticleSection[] = [];

  for (const chunk of chunks) {
    const block = chunk.trim();
    if (!block) continue;

    if (block.startsWith("## ")) {
      const newline = block.indexOf("\n");
      const heading = block.slice(3, newline === -1 ? undefined : newline).trim();
      const rest = newline === -1 ? "" : block.slice(newline + 1);
      const paragraphs = rest
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);

      sections.push({ heading, paragraphs });
      continue;
    }

    const paragraphs = block
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    sections.push({ paragraphs });
  }

  return sections;
}

function estimateReadMinutes(sections: ArticleSection[]): number {
  const words = sections
    .flatMap((section) => section.paragraphs)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

function asString(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing or invalid "${field}" in ${file}`);
  }

  return value.trim();
}

function asOptionalString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed || undefined;
}

function asDateString(value: unknown, field: string, file: string): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  return asString(value, field, file);
}

function parseRelatedLinks(value: unknown): RelatedLink[] | undefined {
  if (!Array.isArray(value)) return undefined;

  const links = value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const record = item as Record<string, unknown>;
      const label = asOptionalString(record.label);
      const href = asOptionalString(record.href);
      if (!label || !href) return null;
      return { label, href };
    })
    .filter((item): item is RelatedLink => item !== null);

  return links.length > 0 ? links : undefined;
}

function parseFaqs(value: unknown): ArticleFaq[] | undefined {
  if (!Array.isArray(value)) return undefined;

  const faqs = value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const record = item as Record<string, unknown>;
      const q = asOptionalString(record.q);
      const a = asOptionalString(record.a);
      if (!q || !a) return null;
      return { q, a };
    })
    .filter((item): item is ArticleFaq => item !== null);

  return faqs.length > 0 ? faqs : undefined;
}

function parseComparisonTable(value: unknown): ComparisonTable | undefined {
  if (!value || typeof value !== "object") return undefined;

  const record = value as Record<string, unknown>;
  if (!Array.isArray(record.headers) || !Array.isArray(record.rows)) return undefined;

  const headers = record.headers.filter((cell): cell is string => typeof cell === "string");
  const rows = record.rows
    .filter((row): row is unknown[] => Array.isArray(row))
    .map((row) => row.filter((cell): cell is string => typeof cell === "string"));

  if (headers.length === 0 || rows.length === 0) return undefined;

  return { headers, rows };
}

export function loadArticlesFromMarkdown(hub: ArticleHub): Article[] {
  const contentDir = path.join(process.cwd(), "content", hub);
  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .sort();

  return files.map((file) => {
    const filePath = path.join(contentDir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    const sections = parseSections(content);

    if (sections.length === 0) {
      throw new Error(`No body content found in ${file}`);
    }

    const slug = asOptionalString(data.slug) ?? file.replace(/\.md$/, "");
    const publishedAt = asDateString(data.date ?? data.publishedAt, "date", file);
    const updatedAt = asDateString(data.updatedAt ?? data.date ?? data.publishedAt, "updatedAt", file);

    return {
      slug,
      title: asString(data.title, "title", file),
      excerpt: asString(data.excerpt, "excerpt", file),
      description: asOptionalString(data.description) ?? asString(data.excerpt, "excerpt", file),
      publishedAt,
      updatedAt,
      readMinutes:
        typeof data.readMinutes === "number" && data.readMinutes > 0
          ? data.readMinutes
          : estimateReadMinutes(sections),
      category: asOptionalString(data.category),
      author: asOptionalString(data.author),
      shortAnswer: asOptionalString(data.shortAnswer),
      sections,
      relatedLinks: parseRelatedLinks(data.relatedLinks),
      comparisonTable: parseComparisonTable(data.comparisonTable),
      faqs: parseFaqs(data.faqs),
    };
  });
}
