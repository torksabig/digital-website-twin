import { SITE_URL } from "./config";
import { CONTACT_EMAIL, LINKEDIN_COMPANY_URL } from "./contact";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Aether Applied",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon.png`,
    description:
      "Aether Applied builds Qorina, decision software for autonomous systems in the physical world. Act when safe, wait when unsure, call a human when needed.",
    email: CONTACT_EMAIL,
    foundingLocation: {
      "@type": "Place",
      name: "Helsinki, Finland",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Helsinki",
      addressCountry: "FI",
    },
    knowsAbout: [
      "calibrated AI",
      "uncertainty quantification",
      "physical AI",
      "autonomous systems",
      "quantum machine learning",
      "AI safety",
      "critical infrastructure",
    ],
    sameAs: [LINKEDIN_COMPANY_URL],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: "Aether Applied",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

type WebPageInput = {
  path: string;
  title: string;
  description: string;
};

export function webPageJsonLd({ path, title, description }: WebPageInput) {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  };
}

type FaqItem = { q: string; a: string };

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

type TechArticleInput = {
  path: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author?: string;
};

export function techArticleJsonLd({
  path,
  title,
  description,
  publishedAt,
  updatedAt,
  author,
}: TechArticleInput) {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": author ? "Person" : "Organization",
      name: author ?? "Aether Applied",
    },
    publisher: {
      "@type": "Organization",
      name: "Aether Applied",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
