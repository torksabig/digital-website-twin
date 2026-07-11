import { formatBlogDate } from "@/lib/blog/format";

type BlogMetaProps = {
  publishedAt: string;
  readMinutes: number;
  author?: string;
};

export function BlogMeta({ publishedAt, readMinutes, author }: BlogMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] leading-[1.2] text-ink/55">
      {author ? (
        <>
          <span className="font-medium text-ink/75">{author}</span>
          <span aria-hidden className="text-ink/30">
            ·
          </span>
        </>
      ) : null}
      <time dateTime={publishedAt}>{formatBlogDate(publishedAt)}</time>
      <span aria-hidden className="text-ink/30">
        ·
      </span>
      <span>{readMinutes} min read</span>
    </div>
  );
}
