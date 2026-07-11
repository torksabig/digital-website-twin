import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogSection } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function parseSections(body: string): BlogSection[] {
  const trimmed = body.trim();
  if (!trimmed) return [];

  const chunks = trimmed.split(/\n(?=## )/);
  const sections: BlogSection[] = [];

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

function estimateReadMinutes(sections: BlogSection[]): number {
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

export function loadPostsFromMarkdown(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .sort();

  return files.map((file) => {
    const filePath = path.join(CONTENT_DIR, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    const sections = parseSections(content);

    if (sections.length === 0) {
      throw new Error(`No body content found in ${file}`);
    }

    const slug = asOptionalString(data.slug) ?? file.replace(/\.md$/, "");

    return {
      slug,
      title: asString(data.title, "title", file),
      excerpt: asString(data.excerpt, "excerpt", file),
      description: asOptionalString(data.description) ?? asString(data.excerpt, "excerpt", file),
      publishedAt: asDateString(data.date ?? data.publishedAt, "date", file),
      readMinutes:
        typeof data.readMinutes === "number" && data.readMinutes > 0
          ? data.readMinutes
          : estimateReadMinutes(sections),
      category: asOptionalString(data.category),
      author: asOptionalString(data.author),
      image: asOptionalString(data.image),
      imageAlt: asOptionalString(data.imageAlt),
      sections,
    };
  });
}
