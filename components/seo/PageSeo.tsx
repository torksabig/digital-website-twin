import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";
import { FAQ_ITEMS } from "@/lib/seo/faq-items";

type PageSeoProps = {
  path: string;
  title: string;
  description: string;
  includeFaq?: boolean;
};

export function PageSeo({ path, title, description, includeFaq = false }: PageSeoProps) {
  const schemas = [
    webPageJsonLd({ path, title, description }),
    ...(includeFaq ? [faqPageJsonLd([...FAQ_ITEMS])] : []),
  ];

  return <JsonLd data={schemas} />;
}
