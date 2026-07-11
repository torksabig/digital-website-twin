#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  discoverCsvFiles,
  filterRelevantKeywords,
  loadKeywordsFromCsvFiles,
  markQueueUsed,
  pickTopic,
  summarizeKeywords,
} from "./lib/keywords.mjs";
import { generatePostContent, renderMarkdown } from "./lib/content-generator.mjs";
import { resolveBannerImage } from "./lib/images.mjs";
import { validateNoDashes } from "./lib/validation.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content/blog");
const QUEUE_PATH = path.join(CONTENT_DIR, ".topic-queue.json");
const BLOG_PUBLIC_DIR = path.join(ROOT, "public/blog");
const KEYWORDS_CACHE = path.join(__dirname, "data/keywords-merged.json");

function parseArgs(argv) {
  const args = {
    dryRun: false,
    date: new Date().toISOString().slice(0, 10),
    keyword: null,
    slug: null,
    force: false,
    summaryOnly: false,
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--force") args.force = true;
    else if (arg === "--summary-only") args.summaryOnly = true;
    else if (arg === "--date") args.date = argv[++i];
    else if (arg === "--keyword") args.keyword = argv[++i];
    else if (arg === "--slug") args.slug = argv[++i];
  }

  return args;
}

function listExistingSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return new Set();
  return new Set(
    fs
      .readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
      .map((file) => file.replace(/\.md$/, "")),
  );
}

function writeKeywordCache(allKeywords, summary) {
  fs.mkdirSync(path.dirname(KEYWORDS_CACHE), { recursive: true });
  fs.writeFileSync(
    KEYWORDS_CACHE,
    `${JSON.stringify({ generatedAt: new Date().toISOString(), summary, keywords: allKeywords }, null, 2)}\n`,
    "utf8",
  );
}

async function main() {
  const args = parseArgs(process.argv);
  const csvPaths = discoverCsvFiles();

  if (csvPaths.length === 0) {
    console.error("No Keyword Research CSV files found. Set KEYWORD_CSV_DIR or add files to ~/Downloads.");
    process.exit(1);
  }

  const allKeywords = loadKeywordsFromCsvFiles(csvPaths);
  const summary = summarizeKeywords(allKeywords);
  const relevantKeywords = filterRelevantKeywords(allKeywords);

  writeKeywordCache(allKeywords, summary);

  console.log("Keyword CSV summary");
  console.log(`  Files parsed: ${csvPaths.length}`);
  console.log(`  Unique keywords: ${summary.total}`);
  console.log(`  Operator fit: ${summary.buckets.operator}`);
  console.log(`  Quantum bridge: ${summary.buckets.quantum_bridge}`);
  console.log(`  Skipped noise: ${summary.buckets.skip}`);
  console.log(`  Other: ${summary.buckets.other}`);

  if (args.summaryOnly) return;

  const existingSlugs = listExistingSlugs();

  const topic = args.keyword
    ? {
        keyword: args.keyword,
        slug: args.slug ?? args.keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
        source: "cli",
      }
    : pickTopic({
        relevantKeywords,
        queuePath: QUEUE_PATH,
        dateStr: args.date,
        existingSlugs,
      });

  if (existingSlugs.has(topic.slug) && !args.force) {
    console.log(`Skip: slug already exists (${topic.slug}.md)`);
    process.exit(0);
  }

  console.log(`Topic: "${topic.keyword}" -> ${topic.slug} (${topic.source})`);

  const { post, provider } = await generatePostContent({
    keyword: topic.keyword,
    slug: topic.slug,
    dateStr: args.date,
  });

  const image = await resolveBannerImage({
    slug: topic.slug,
    keyword: topic.keyword,
    blogPublicDir: BLOG_PUBLIC_DIR,
    dryRun: args.dryRun,
  });

  const markdown = renderMarkdown(post, image.publicPath);
  validateNoDashes(markdown, "final markdown");

  const outputPath = path.join(CONTENT_DIR, `${topic.slug}.md`);

  if (args.dryRun) {
    console.log(`Dry run complete (${provider}). Would write ${outputPath}`);
    console.log(`Image source: ${image.source}`);
    console.log("--- preview ---");
    console.log(markdown.slice(0, 1200));
    console.log("...");
    return;
  }

  fs.mkdirSync(BLOG_PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(outputPath, markdown, "utf8");
  markQueueUsed(QUEUE_PATH, topic.slug);

  console.log(`Wrote ${outputPath}`);
  console.log(`Content provider: ${provider}`);
  console.log(`Banner: ${image.publicPath} (${image.source})`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
