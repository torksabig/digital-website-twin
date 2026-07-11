import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArticleBreadcrumbs } from "@/components/articles/ArticleBreadcrumbs";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { ArticlePageSchema } from "@/components/articles/ArticlePageSchema";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getAllProofSlugs, getProofArticleBySlug } from "@/lib/articles/proof";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProofSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getProofArticleBySlug(slug);
  if (!article) return { title: "Proof not found" };

  return createPageMetadata({
    title: `${article.title} | Aether Applied Proof`,
    description: article.description,
    path: `/proof/${article.slug}/`,
    ogType: "article",
    publishedTime: article.publishedAt,
  });
}

export default async function ProofArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getProofArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <ArticlePageSchema hub="proof" article={article} />
      <Nav />

      <main className="flex flex-col bg-blog-paper pt-32 text-ink sm:pt-40">
        <Container>
          <article className="mx-auto max-w-[720px]">
            <Reveal>
              <header className="border-b border-ink/10 pb-10">
                <ArticleBreadcrumbs hub="proof" pageTitle={article.title} />
                <div className="mt-8 space-y-5">
                  {article.category ? (
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-blue-900/70">
                      {article.category}
                    </p>
                  ) : null}
                  <h1 className="font-display text-[40px] leading-[1.05] tracking-tight text-ink sm:text-[52px]">
                    {article.title}
                  </h1>
                  <p className="text-[20px] leading-[1.45] text-ink/65 sm:text-[22px]">
                    {article.excerpt}
                  </p>
                  <p className="text-[14px] text-ink/45">
                    {article.readMinutes} min read · Published {article.publishedAt}
                  </p>
                </div>
              </header>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="py-12">
                <ArticleBody
                  shortAnswer={article.shortAnswer}
                  sections={article.sections}
                  comparisonTable={article.comparisonTable}
                  relatedLinks={article.relatedLinks}
                  updatedAt={article.updatedAt}
                />
              </div>
            </Reveal>

            <div className="border-t border-ink/10 py-12">
              <Link href="/proof/" className="text-[16px] text-blue-900 hover:underline">
                ← Back to Proof
              </Link>
            </div>
          </article>
        </Container>

        <div className="bg-blog-paper pt-12 sm:pt-16">
          <CTASection variant="framer" />
        </div>
      </main>
      <Footer />
    </>
  );
}
