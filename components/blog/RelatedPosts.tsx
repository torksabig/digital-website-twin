import Link from "next/link";
import type { BlogPost } from "@/lib/blog/types";
import { formatBlogDateShort } from "@/lib/blog/format";
import { BlogCategory } from "./BlogCategory";
import { BlogPostImage } from "./BlogPostImage";

export function RelatedPosts({
  posts,
  currentSlug,
}: {
  posts: BlogPost[];
  currentSlug: string;
}) {
  const related = posts.filter((post) => post.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <aside className="mt-20 border-t border-ink/10 pt-16">
      <h2 className="font-display text-[28px] leading-[1.1] tracking-tight text-ink sm:text-[32px]">
        Related posts
      </h2>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}/`}
              className="group flex h-full flex-col rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
            >
              <div className="overflow-hidden rounded-lg">
                <BlogPostImage post={post} />
              </div>
              <div className="flex flex-1 flex-col pt-4">
                {post.category ? <BlogCategory>{post.category}</BlogCategory> : null}
                <h3 className="font-display mt-2 text-[22px] leading-[1.15] text-[#251f19] transition-colors group-hover:text-blue-900">
                  {post.title}
                </h3>
                <time
                  dateTime={post.publishedAt}
                  className="mt-auto pt-4 text-[14px] text-[#898077]"
                >
                  {formatBlogDateShort(post.publishedAt)}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
