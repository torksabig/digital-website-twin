import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { PageSeo } from "@/components/seo/PageSeo";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getAllProofArticles } from "@/lib/articles/proof";

export const metadata: Metadata = createPageMetadata({
  title: "Proof | Measured Results & Limitations | Aether Applied",
  description:
    "Citeable proof pages for Aether Applied: building autonomy loop, quantum-native hardware runs, methods, results, and explicit boundaries.",
  path: "/proof/",
});

export default function ProofIndexPage() {
  const articles = getAllProofArticles();

  return (
    <>
      <PageSeo
        path="/proof/"
        title="Proof | Measured Results & Limitations | Aether Applied"
        description="Citeable proof pages for Aether Applied with methods, results, and explicit boundaries."
      />
      <Nav />

      <main className="flex flex-col bg-blog-paper pt-32 text-ink sm:pt-40">
        <Container className="flex-1">
          <Reveal className="pb-14 sm:pb-20">
            <p className="text-[14px] font-semibold tracking-[-0.01em] text-blue-900">Proof</p>
            <h1 className="font-display mt-3 max-w-3xl text-[44px] leading-[1.02] tracking-tight text-[#251f19] sm:text-[56px]">
              Measured results, stated limits
            </h1>
            <p className="mt-5 max-w-2xl text-[18px] leading-[1.5] text-ink/60 sm:text-[20px]">
              One page per major claim: setup, data, baseline, outcome, and what we
              do not claim. Built for technical buyers, investors, and AI citation.
            </p>
          </Reveal>

          <section className="grid gap-6 pb-16 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} hub="proof" />
            ))}
          </section>
        </Container>

        <div className="bg-blog-paper pt-12 sm:pt-16">
          <CTASection variant="framer" />
        </div>
      </main>
      <Footer />
    </>
  );
}
