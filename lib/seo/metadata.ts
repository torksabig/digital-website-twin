import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./config";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  image?: string;
  publishedTime?: string;
};

function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function resolveImage(image?: string): string {
  const src = image ?? DEFAULT_OG_IMAGE;
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogType = "website",
  image,
  publishedTime,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = resolveImage(image);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: ogType,
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime && ogType === "article" ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
