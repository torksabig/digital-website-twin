import fs from "fs";
import path from "path";

const DEFAULT_CSV_DIR = path.join(
  process.env.HOME ?? "",
  "Downloads",
);

const SKIP_PATTERN =
  /\b(trading|scam|invest|stock|crypto|musk|forex|bitcoin|coupon|promo code|discount code|software engineer|oracle autonomous|kosmos|desk|chair|tutor|homework|calculator|chatbot|problem solver|altair physics|ap physics|spatialagent|national grid massachusetts|electricity grid map|grid map|what is a electricity|what is grid in electricity|what is grid electricity|what is electricity grid|off grid electricity|off-grid electricity|texas electricity grid|national grid for electricity|national grid electricity|electricity national grid|electricity-grid)\b/i;

const BOOST_PATTERN =
  /\b(energy optimization|ev charging|fleet|building automation|hvac|grid automation|power grid|microgrid|demand response|smart building|shadow test|governance|safety|uncertainty|physical|infrastructure|operator|decision|autonomous ai systems|autonomous ai\b|charging|bms|scada|maintenance|optimization)\b/i;

const QUANTUM_BRIDGE_PATTERN = /\bquantum\b/i;

function parseVolume(raw) {
  if (!raw) return 0;
  const cleaned = String(raw).replace(/,/g, "").replace(/"/g, "").trim();
  const n = parseInt(cleaned, 10);
  return Number.isFinite(n) ? n : 0;
}

function normalizeKeyword(keyword) {
  return keyword.trim().toLowerCase().replace(/\s+/g, " ");
}

export function discoverCsvFiles(preferredDir) {
  const repoDefault = path.join(process.cwd(), "scripts/data/keyword-csv");
  const candidates = [
    preferredDir,
    process.env.KEYWORD_CSV_DIR,
    repoDefault,
    DEFAULT_CSV_DIR,
  ].filter(Boolean);

  for (const dir of candidates) {
    if (!fs.existsSync(dir)) continue;
    const files = fs
      .readdirSync(dir)
      .filter((name) => /^Keyword Research( \(\d+\))?\.csv$/i.test(name))
      .map((name) => path.join(dir, name))
      .sort();
    if (files.length > 0) return files;
  }

  return [];
}

export function loadKeywordsFromCsvFiles(csvPaths) {
  const merged = new Map();

  for (const filePath of csvPaths) {
    const text = fs.readFileSync(filePath, "utf8");
    const lines = text.split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) continue;

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const match = line.match(/^"([^"]*)","[^"]*","([^"]*)"/);
      if (!match) continue;

      const keyword = match[1].trim();
      const volume = parseVolume(match[2]);
      if (!keyword) continue;

      const key = normalizeKeyword(keyword);
      const existing = merged.get(key);
      if (!existing || volume > existing.volume) {
        merged.set(key, {
          keyword,
          volume,
          source: path.basename(filePath),
        });
      }
    }
  }

  return [...merged.values()];
}

export function classifyKeyword(entry) {
  const text = entry.keyword;
  if (SKIP_PATTERN.test(text)) {
    return { bucket: "skip", score: 0 };
  }

  let score = Math.min(entry.volume / 100, 50);
  if (BOOST_PATTERN.test(text)) score += 40;
  if (QUANTUM_BRIDGE_PATTERN.test(text)) score += 10;

  if (score >= 30) return { bucket: "operator", score };
  if (QUANTUM_BRIDGE_PATTERN.test(text)) return { bucket: "quantum_bridge", score };
  return { bucket: "other", score };
}

export function filterRelevantKeywords(allKeywords) {
  return allKeywords
    .map((entry) => ({ ...entry, ...classifyKeyword(entry) }))
    .filter((entry) => entry.bucket === "operator" || entry.bucket === "quantum_bridge")
    .sort((a, b) => b.score - a.score || b.volume - a.volume);
}

export function summarizeKeywords(allKeywords) {
  const classified = allKeywords.map((entry) => ({
    ...entry,
    ...classifyKeyword(entry),
  }));

  const buckets = { skip: 0, operator: 0, quantum_bridge: 0, other: 0 };
  for (const entry of classified) {
    buckets[entry.bucket] += 1;
  }

  const topOperator = classified
    .filter((e) => e.bucket === "operator")
    .sort((a, b) => b.volume - a.volume)
    .slice(0, 15);

  return {
    total: allKeywords.length,
    buckets,
    topOperator,
  };
}

export function dateHash(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export function pickTopic({ relevantKeywords, queuePath, dateStr, existingSlugs }) {
  if (fs.existsSync(queuePath)) {
    const queue = JSON.parse(fs.readFileSync(queuePath, "utf8"));
    const pending = (queue.keywords ?? []).filter((item) => {
      const slug = item.slug ?? slugify(item.keyword);
      return !existingSlugs.has(slug) && !(queue.usedSlugs ?? []).includes(slug);
    });

    if (pending.length > 0) {
      pending.sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
      const pick = pending[0];
      return {
        keyword: pick.keyword,
        slug: pick.slug ?? slugify(pick.keyword),
        source: "queue",
      };
    }
  }

  const available = relevantKeywords.filter((entry) => {
    const slug = slugify(entry.keyword);
    return slug && !existingSlugs.has(slug);
  });

  if (available.length === 0) {
    throw new Error("No unused relevant keywords available for topic selection.");
  }

  const index = dateHash(dateStr) % available.length;
  const pick = available[index];
  return {
    keyword: pick.keyword,
    slug: slugify(pick.keyword),
    source: "date-hash",
    volume: pick.volume,
  };
}

export function markQueueUsed(queuePath, slug) {
  if (!fs.existsSync(queuePath)) return;

  const queue = JSON.parse(fs.readFileSync(queuePath, "utf8"));
  queue.usedSlugs = [...new Set([...(queue.usedSlugs ?? []), slug])];
  fs.writeFileSync(queuePath, `${JSON.stringify(queue, null, 2)}\n`, "utf8");
}
