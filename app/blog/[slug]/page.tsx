import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd } from "@/lib/seo/json-ld";
import { SITE_URL } from "@/lib/seo/config";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { BlogBackLink } from "@/components/blog/BlogBackLink";
import { BlogCategory } from "@/components/blog/BlogCategory";
import { BlogMeta } from "@/components/blog/BlogMeta";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { CTASection } from "@/components/CTASection";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return createPageMetadata({
    title: `${post.title} | Aether Applied Blog`,
    description: post.description,
    path: `/blog/${post.slug}/`,
    ogType: "article",
    image: post.image,
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author ?? "Aether Applied",
    },
    publisher: {
      "@type": "Organization",
      name: "Aether Applied",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}/`,
    },
    ...(post.image
      ? {
          image: post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`,
        }
      : {}),
  };

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: `/blog/${post.slug}/`,
            title: `${post.title} | Aether Applied Blog`,
            description: post.description,
          }),
          blogPostingJsonLd,
        ]}
      />
      <Nav />

      <main className="flex flex-col bg-blog-paper pt-32 text-ink sm:pt-40">
        <Container>
          <article className="mx-auto max-w-[600px]">
            <Reveal>
              <header className="border-b border-ink/10 pb-10">
                <BlogBackLink />
                <div className="mt-8 space-y-5">
                  {post.category ? <BlogCategory>{post.category}</BlogCategory> : null}
                  <h1 className="font-display text-[40px] leading-[1] tracking-tight text-ink sm:text-[52px] lg:text-[56px]">
                    {post.title}
                  </h1>
                  <p className="text-[22px] leading-[1.4] text-ink/65 sm:text-[26px] sm:leading-[1.35]">
                    {post.excerpt}
                  </p>
                  <BlogMeta
                    publishedAt={post.publishedAt}
                    readMinutes={post.readMinutes}
                    author={post.author}
                  />
                </div>
              </header>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="py-12">
                <BlogPostBody sections={post.sections} />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <RelatedPosts posts={allPosts} currentSlug={post.slug} />
            </Reveal>

            <div className="border-t border-ink/10 py-12">
              <BlogBackLink label="Back to all posts" />
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
