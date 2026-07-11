import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  techArticleJsonLd,
  webPageJsonLd,
} from "@/lib/seo/json-ld";
import type { Article, ArticleHub } from "@/lib/articles/types";

type PageSchemaProps = {
  hub: ArticleHub;
  article: Article;
};

const HUB_LABELS: Record<ArticleHub, string> = {
  learn: "Learn",
  proof: "Proof",
};

export function ArticlePageSchema({ hub, article }: PageSchemaProps) {
  const path = `/${hub}/${article.slug}/`;
  const hubLabel = HUB_LABELS[hub];

  const schemas = [
    webPageJsonLd({
      path,
      title: article.title,
      description: article.description,
    }),
    techArticleJsonLd({
      path,
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
      author: article.author,
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: hubLabel, path: `/${hub}/` },
      { name: article.title, path },
    ]),
    ...(article.faqs ? [faqPageJsonLd(article.faqs)] : []),
  ];

  return <JsonLd data={schemas} />;
}
