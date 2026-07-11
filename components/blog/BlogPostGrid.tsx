"use client";

import { useState } from "react";
import type { BlogListItem } from "@/lib/blog/types";
import { isPlaceholderPost } from "@/lib/blog/types";
import { BlogListGridCard } from "./BlogCard";

const PAGE_SIZE = 3;

function getItemKey(item: BlogListItem): string {
  return isPlaceholderPost(item) ? item.id : item.slug;
}

export function BlogPostGrid({ posts }: { posts: BlogListItem[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  if (posts.length === 0) return null;

  return (
    <div className="pb-8 sm:pb-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((post) => (
          <BlogListGridCard key={getItemKey(post)} item={post} />
        ))}
      </div>
      {hasMore ? (
        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
            className="min-h-[48px] rounded-full border border-ink/12 bg-white px-10 py-3 text-[15px] font-medium tracking-[-0.01em] text-[#251f19] shadow-[0_1px_2px_rgba(37,31,25,0.04)] transition-colors hover:border-ink/20 hover:bg-ink/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}
