import fs from "fs";
import path from "path";
import crypto from "crypto";

const FALLBACK_IMAGES = [
  "blue-caustics.png",
  "spiral-vortex.png",
  "signal-wave.png",
  "architecture-bird.png",
  "circular-waveform.png",
];

function pickFallbackImage(slug, blogPublicDir) {
  const name = FALLBACK_IMAGES[crypto.createHash("md5").update(slug).digest("hex").charCodeAt(0) % FALLBACK_IMAGES.length];
  const source = path.join(blogPublicDir, name);
  if (!fs.existsSync(source)) {
    throw new Error(`Fallback blog image missing: ${source}`);
  }
  return { sourcePath: source, publicPath: `/blog/${name}`, copied: false };
}

async function downloadToFile(url, destPath) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`Image download failed (${response.status})`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
}

async function fetchPexelsImage(query, accessKey) {
  const url = new URL("https://api.pexels.com/v1/search");
  url.searchParams.set("query", query);
  url.searchParams.set("orientation", "landscape");
  url.searchParams.set("per_page", "1");

  const response = await fetch(url, {
    headers: { Authorization: accessKey },
  });
  if (!response.ok) throw new Error(`Pexels API ${response.status}`);

  const data = await response.json();
  const photo = data.photos?.[0];
  if (!photo?.src?.large) throw new Error("Pexels returned no photos");

  return {
    downloadUrl: photo.src.large,
    alt: photo.alt || `${query} banner image`,
    credit: photo.photographer,
  };
}

async function fetchUnsplashImage(query, accessKey) {
  const url = new URL("https://api.unsplash.com/photos/random");
  url.searchParams.set("query", query);
  url.searchParams.set("orientation", "landscape");

  const response = await fetch(url, {
    headers: { Authorization: `Client-ID ${accessKey}` },
  });
  if (!response.ok) throw new Error(`Unsplash API ${response.status}`);

  const data = await response.json();
  const downloadUrl = data.urls?.regular;
  if (!downloadUrl) throw new Error("Unsplash returned no image URL");

  return {
    downloadUrl,
    alt: data.alt_description || `${query} banner image`,
    credit: data.user?.name,
  };
}

export async function resolveBannerImage({ slug, keyword, blogPublicDir, dryRun }) {
  const destPath = path.join(blogPublicDir, `${slug}-banner.jpg`);
  const publicPath = `/blog/${slug}-banner.jpg`;
  const query = `${keyword} infrastructure technology`.slice(0, 80);

  const pexelsKey = process.env.PEXELS_API_KEY;
  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;

  if (dryRun) {
    return {
      publicPath,
      imageAlt: `Banner image for ${keyword}`,
      source: pexelsKey ? "pexels (dry run)" : unsplashKey ? "unsplash (dry run)" : "fallback (dry run)",
      copied: false,
    };
  }

  const providers = [];
  if (pexelsKey) providers.push(() => fetchPexelsImage(query, pexelsKey));
  if (unsplashKey) providers.push(() => fetchUnsplashImage(query, unsplashKey));

  for (const provider of providers) {
    try {
      const result = await provider();
      await downloadToFile(result.downloadUrl, destPath);
      return {
        publicPath,
        imageAlt: sanitizeAlt(result.alt),
        source: provider.name.includes("Pexels") ? "pexels" : "unsplash",
        copied: true,
      };
    } catch {
      // try next provider
    }
  }

  const fallback = pickFallbackImage(slug, blogPublicDir);
  fs.copyFileSync(fallback.sourcePath, destPath);
  return {
    publicPath,
    imageAlt: `Abstract visualization for ${keyword}`,
    source: `fallback:${path.basename(fallback.sourcePath)}`,
    copied: true,
  };
}

function sanitizeAlt(text) {
  return text.replace(/[\u2013\u2014\u2012\u2212]/g, " ").replace(/\s+/g, " ").trim();
}
