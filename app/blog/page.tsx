import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { BlogFeaturedCard } from "@/components/blog/BlogCard";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { CTASection } from "@/components/CTASection";
import { getAllPosts, getPlaceholderPosts } from "@/lib/blog/posts";

const FEATURED_COUNT = 2;

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Safer Automation, Shadow Testing & Operator Notes",
  description:
    "Plain-language notes on automation trust, shadow testing, and AI governance for buildings, grids, and fleets.",
  path: "/blog/",
});

export default function BlogIndex() {
  const published = getAllPosts();
  const placeholders = getPlaceholderPosts();
  const featured = published.slice(0, FEATURED_COUNT);
  const gridPublished = published.slice(FEATURED_COUNT);
  const gridItems = [...gridPublished, ...placeholders];

  return (
    <>
      <PageSeo
        path="/blog/"
        title="Blog | Safer Automation, Shadow Testing & Operator Notes"
        description="Plain-language notes on automation trust, shadow testing, and AI governance for buildings, grids, and fleets."
      />
      <Nav />

      <main className="flex flex-col bg-blog-paper pt-32 text-ink sm:pt-40">
        <Container className="flex-1">
          <Reveal className="pb-14 sm:pb-20">
            <p className="text-[14px] font-semibold tracking-[-0.01em] text-blue-900">Blog</p>
            <h1 className="font-display mt-3 max-w-3xl text-[44px] leading-[1.02] tracking-tight text-[#251f19] sm:text-[56px]">
              Notes for operators
            </h1>
            <p className="mt-5 max-w-2xl text-[18px] leading-[1.5] text-ink/60 sm:text-[20px]">
              Short reads on safer automation, no hype, no jargon. How to test
              without touching live controls, when waiting beats guessing, and
              what to ask before you turn anything on.
            </p>
          </Reveal>

          {featured.length > 0 ? (
            <section aria-label="Featured posts" className="pb-2">
              <Stagger className="grid gap-5 lg:grid-cols-2 lg:gap-6">
                {featured.map((post, index) => (
                  <StaggerItem key={post.slug}>
                    <BlogFeaturedCard post={post} priority={index === 0} />
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          ) : null}

          {gridItems.length > 0 ? (
            <section aria-label="More posts" className="mt-10 bg-blog-paper pb-4 sm:mt-14">
              <BlogPostGrid posts={gridItems} />
            </section>
          ) : null}

          {published.length === 0 && placeholders.length === 0 ? (
            <Reveal className="py-16 text-center">
              <p className="font-display text-[32px] text-ink">More soon</p>
              <p className="mx-auto mt-4 max-w-md text-[18px] leading-relaxed text-ink/60">
                We&apos;re drafting articles on shadow testing, safer automation,
                and when not to automate. Check back shortly.
              </p>
            </Reveal>
          ) : null}
        </Container>

        <div className="bg-blog-paper pt-12 sm:pt-16">
          <CTASection variant="framer" />
        </div>
      </main>
      <Footer />
    </>
  );
}
