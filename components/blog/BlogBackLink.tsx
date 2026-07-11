import Link from "next/link";

export function BlogBackLink({ label = "All posts" }: { label?: string }) {
  return (
    <Link
      href="/blog/"
      className="group inline-flex min-h-10 items-center gap-2 text-[14px] font-medium text-ink/50 transition-colors hover:text-ink"
    >
      <span
        aria-hidden
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 bg-white transition-colors group-hover:border-ink/20"
      >
        ←
      </span>
      {label}
    </Link>
  );
}
