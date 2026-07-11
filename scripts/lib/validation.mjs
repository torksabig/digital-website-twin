const DASH_PATTERN = /[\u2013\u2014\u2012\u2212]/g;

const WORD_REPLACEMENTS = [
  [/\babstain(s|ed|ing)?\b/gi, "wait"],
  [/\bescalate(s|d|ing)?\b/gi, "call a human"],
  [/\bescalation\b/gi, "human handoff"],
  [/\bfoundation model(s)?\b/gi, "decision software"],
  [/\bcalibrated confidence\b/gi, "knows how sure it is"],
  [/\bruntime safety contract\b/gi, "safety rule built into every decision"],
  [/\bphysics-grounded\b/gi, "based on how the real system works"],
  [/\bmultiphysics correlation\b/gi, "matches real-world behavior in tests"],
  [/\bnovelty vs conflict\b/gi, "new situation vs genuinely unclear"],
  [/\bcommit(s|ted|ting)?\b/gi, "act"],
  [/\bhold(s|ing)?\b/gi, "wait"],
  [/\bperceive(s|d|ing)?\b/gi, "read"],
  [/\bsubstrate\b/gi, "decision layer"],
];

export function stripDashes(text) {
  return text
    .split("\n")
    .map((line) =>
      line
        .replace(DASH_PATTERN, ", ")
        .replace(/\s+,/g, ",")
        .replace(/,\s*,/g, ", ")
        .replace(/[ \t]{2,}/g, " ")
        .trimEnd(),
    )
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function applyWordGuidance(text) {
  let result = text;
  for (const [pattern, replacement] of WORD_REPLACEMENTS) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

export function sanitizeCopy(text) {
  return applyWordGuidance(stripDashes(text));
}

export function validateNoDashes(text, label = "content") {
  if (DASH_PATTERN.test(text)) {
    throw new Error(`${label} still contains em dash or en dash characters after sanitization.`);
  }
}

export function trimDescription(text, min = 150, max = 160) {
  const cleaned = sanitizeCopy(text).replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;

  const slice = cleaned.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  const trimmed = lastSpace > min ? slice.slice(0, lastSpace) : slice;
  return `${trimmed.trim()}.`;
}

export function estimateReadMinutes(body) {
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
