import {
  estimateReadMinutes,
  sanitizeCopy,
  trimDescription,
  validateNoDashes,
} from "./validation.mjs";

const STYLE_REFERENCE = `
Write like Aether Applied blog posts: plain operator language for buildings, grids, and fleets.
Honest about limits. No investment hype. No quantum sales pitch.
Use act / wait / call a human instead of abstain / escalate.
Include internal markdown links: [Learn hub](/learn/), [Qorina](/qorina/), [Contact](/contact/).
Use ## section headings. Opening paragraphs have no heading.
400 to 800 words. Short paragraphs. No em dashes or en dashes anywhere.
`.trim();

function buildPrompt({ keyword, dateStr }) {
  return `You are writing a blog post for Aether Applied (Qorina decision software for physical systems).

Target keyword phrase: "${keyword}"
Publish date: ${dateStr}

${STYLE_REFERENCE}

Return ONLY valid JSON with this shape:
{
  "title": "string",
  "category": "Safer automation | Testing | Operators",
  "excerpt": "1-2 sentences for cards",
  "description": "SEO meta description, 150-160 characters",
  "imageAlt": "accessible banner description",
  "body": "markdown body WITHOUT frontmatter. Start with opening paragraphs, then ## sections."
}`;
}

async function callOpenAI(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You write honest technical blog posts for infrastructure operators. Never use em dashes or en dashes.",
        },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenAI API error ${response.status}: ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error("OpenAI returned empty content");
  return { provider: "openai", payload: JSON.parse(text) };
}

async function callAnthropic(prompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  const model = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-20250514";
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_tokens: 2000,
      temperature: 0.7,
      system:
        "You write honest technical blog posts for infrastructure operators. Return ONLY JSON. Never use em dashes or en dashes.",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  const text = data.content?.find((block) => block.type === "text")?.text;
  if (!text) throw new Error("Anthropic returned empty content");

  const jsonText = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
  return { provider: "anthropic", payload: JSON.parse(jsonText) };
}

function templateFallback({ keyword, slug, dateStr }) {
  const title = titleFromKeyword(keyword);
  const excerpt = `Plain-language notes on ${keyword} for teams running buildings, grids, or fleets. What to test before automation touches live equipment.`;
  const body = sanitizeCopy(`If you run physical systems, "${keyword}" shows up in vendor decks long before anyone explains how it behaves on your site. That gap is where mistakes start.

Most teams do not need a buzzword upgrade. They need decision software that acts when evidence is clear, waits when it is not, and calls a human when judgment should stay in the room.

## What ${title.toLowerCase()} means in daily operations

Start with boring inputs: sensor health, schedules, tariffs, occupancy, weather, and the limits your operators already enforce. Any proposal should say what it reads, what it would do, and what happens when signals conflict.

For buildings, that might mean pre-cooling before peak tariffs without violating comfort bounds. For grids, it might mean shifting load while respecting feeder limits. For fleets, it might mean charging windows that protect both the site cap and tomorrow's dispatch plan.

Qorina sits under what you already run as a decision layer. It is not a rip-and-replace control system. It helps you compare new logic against current behavior before anything touches live equipment.

## Questions operators should ask first

Before you grant automatic action, ask four plain questions:

1. What sensors or data feeds does the optimizer require, and what happens when one goes stale?
2. What is the default when two signals disagree?
3. Can we run parallel to current controls without changing setpoints?
4. Who gets notified when the system chooses to wait?

If a vendor cannot answer in operator language, pause the pilot. Optimization that looks good in a slide deck can still be unsafe in a live plant.

## Where teams get hurt

Overconfidence is the common failure mode. A model looks strong on average days and then silently drifts when a sensor fails or a tariff boundary shifts. Another failure mode is black-box scores that operators cannot explain to a shift lead at 2 a.m.

Useful automation documents its default when unsure. Waiting is a valid outcome. So is calling a human with context attached.

## A practical evaluation path

1. Run a read-only shadow test on your data.
2. Review disagreements with operators, not only aggregate accuracy.
3. Define who approves automatic action and what requires human sign-off.
4. Expand scope only after rollback paths are tested.

For background on quantum and classical AI confusion, see our [Learn hub](/learn/). To see how Qorina frames act, wait, and human handoff, visit [Qorina](/qorina/). If you want to walk through your site constraints, [contact us](/contact/).

## Bottom line

${title} only matters when it survives contact with your plant, feeder, or charging schedule. Ask for shadow evidence, plain limits, and governance before you grant automatic action.`);

  const description = trimDescription(
    `Energy optimization for building, grid, and fleet teams: how to test automation safely before it touches live equipment. Act, wait, or call a human.`,
  );

  return {
    provider: "template",
    payload: {
      title: `${title} for operators`,
      category: categoryFromKeyword(keyword),
      excerpt,
      description,
      imageAlt: `Abstract banner for ${keyword}`,
      body,
    },
  };
}

function titleFromKeyword(keyword) {
  const cleaned = keyword.replace(/\b(ai|ev)\b/gi, (m) => m.toUpperCase());
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function categoryFromKeyword(keyword) {
  const lower = keyword.toLowerCase();
  if (/shadow|test|pilot/.test(lower)) return "Testing";
  if (/operator|governance|safety/.test(lower)) return "Operators";
  return "Safer automation";
}

function normalizePayload(payload, { keyword, slug, dateStr }) {
  const title = sanitizeCopy(payload.title ?? titleFromKeyword(keyword));
  const excerpt = sanitizeCopy(payload.excerpt ?? "");
  const description = trimDescription(payload.description ?? excerpt);
  const body = sanitizeCopy(payload.body ?? "");
  const category = sanitizeCopy(payload.category ?? categoryFromKeyword(keyword));
  const imageAlt = sanitizeCopy(payload.imageAlt ?? `Banner image for ${keyword}`);

  validateNoDashes(`${title}\n${excerpt}\n${description}\n${body}\n${imageAlt}`, "generated copy");

  if (!body.includes("## ")) {
    throw new Error("Generated body must include at least one ## section.");
  }

  const wordCount = body.split(/\s+/).filter(Boolean).length;
  if (wordCount < 380) {
    throw new Error(`Generated body too short (${wordCount} words).`);
  }

  return {
    title,
    slug,
    date: dateStr,
    category,
    excerpt,
    description,
    author: "Aether Applied team",
    readMinutes: estimateReadMinutes(body),
    imageAlt,
    body,
  };
}

export async function generatePostContent({ keyword, slug, dateStr }) {
  const prompt = buildPrompt({ keyword, dateStr });

  let result = null;
  try {
    result = await callOpenAI(prompt);
  } catch (error) {
    console.warn(`OpenAI failed: ${error.message}`);
  }

  if (!result) {
    try {
      result = await callAnthropic(prompt);
    } catch (error) {
      console.warn(`Anthropic failed: ${error.message}`);
    }
  }

  if (!result) {
    result = templateFallback({ keyword, slug, dateStr });
  }

  const post = normalizePayload(result.payload, { keyword, slug, dateStr });
  return { post, provider: result.provider };
}

export function renderMarkdown(post, imagePath) {
  const frontmatter = [
    "---",
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `slug: ${post.slug}`,
    `date: ${post.date}`,
    `category: "${post.category.replace(/"/g, '\\"')}"`,
    `excerpt: "${post.excerpt.replace(/"/g, '\\"')}"`,
    `description: "${post.description.replace(/"/g, '\\"')}"`,
    `author: "${post.author}"`,
    `readMinutes: ${post.readMinutes}`,
    `image: ${imagePath}`,
    `imageAlt: "${post.imageAlt.replace(/"/g, '\\"')}"`,
    "---",
    "",
    post.body.trim(),
    "",
  ].join("\n");

  validateNoDashes(frontmatter, "markdown output");
  return frontmatter;
}
