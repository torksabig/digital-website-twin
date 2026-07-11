import Link from "next/link";
import type { BlogListItem, BlogPost, PlaceholderPost } from "@/lib/blog/types";
import { isPlaceholderPost } from "@/lib/blog/types";
import { formatBlogDateShort } from "@/lib/blog/format";
import { BlogCategory } from "./BlogCategory";
import { BlogPlaceholderImage, BlogPostImage } from "./BlogPostImage";

export function BlogFeaturedCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <article className="group h-full">
      <Link
        href={`/blog/${post.slug}/`}
        className="flex h-full flex-col rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
      >
        <div className="overflow-hidden rounded-xl">
          <BlogPostImage post={post} priority={priority} />
        </div>
        <div className="flex flex-1 flex-col pt-5">
          {post.category ? <BlogCategory>{post.category}</BlogCategory> : null}
          <h2 className="font-display mt-2 text-[28px] leading-[1.12] tracking-tight text-[#251f19] transition-colors group-hover:text-blue-900 sm:text-[32px]">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-ink/60">{post.excerpt}</p>
          <time dateTime={post.publishedAt} className="mt-4 block text-[14px] text-[#898077]">
            {formatBlogDateShort(post.publishedAt)}
          </time>
        </div>
      </Link>
    </article>
  );
}

export function BlogGridCard({ post }: { post: BlogPost }) {
  return (
    <article className="group h-full">
      <Link
        href={`/blog/${post.slug}/`}
        className="flex h-full flex-col rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
      >
        <div className="overflow-hidden rounded-xl">
          <div className="overflow-hidden rounded-lg">
            <BlogPostImage post={post} />
          </div>
        </div>
        <div className="flex flex-1 flex-col pt-4">
          {post.category ? <BlogCategory>{post.category}</BlogCategory> : null}
          <h3 className="font-display mt-2 text-[22px] leading-[1.15] tracking-tight text-[#251f19] transition-colors group-hover:text-blue-900 sm:text-[24px]">
            {post.title}
          </h3>
          <time dateTime={post.publishedAt} className="mt-auto pt-4 text-[14px] text-[#898077]">
            {formatBlogDateShort(post.publishedAt)}
          </time>
        </div>
      </Link>
    </article>
  );
}

export function BlogPlaceholderGridCard({ post }: { post: PlaceholderPost }) {
  return (
    <article
      aria-label={`${post.title}, coming soon`}
      className="flex h-full flex-col rounded-xl opacity-90"
    >
      <div className="overflow-hidden rounded-xl">
        <BlogPlaceholderImage id={post.id} />
      </div>
      <div className="flex flex-1 flex-col pt-4">
        {post.category ? <BlogCategory>{post.category}</BlogCategory> : null}
        <h3 className="font-display mt-2 text-[22px] leading-[1.15] tracking-tight text-[#251f19]/75 sm:text-[24px]">
          {post.title}
        </h3>
        <p className="mt-auto pt-4 text-[14px] text-[#898077]">Coming soon</p>
      </div>
    </article>
  );
}

export function BlogListGridCard({ item }: { item: BlogListItem }) {
  if (isPlaceholderPost(item)) {
    return <BlogPlaceholderGridCard post={item} />;
  }

  return <BlogGridCard post={item} />;
}
