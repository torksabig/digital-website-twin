import Image from "next/image";
import type { BlogPost } from "@/lib/blog/types";

type BlogPostImageProps = {
  post: Pick<BlogPost, "image" | "imageAlt" | "title" | "slug">;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

const FALLBACK_IMAGES = [
  {
    src: "/images/blog-fallback-control.jpg",
    alt: "Industrial control room with monitoring equipment",
  },
  {
    src: "/images/blog-fallback-energy.jpg",
    alt: "Power lines and energy infrastructure at dusk",
  },
  {
    src: "/images/use-case-building.jpg",
    alt: "Building automation and HVAC mechanical systems",
  },
  {
    src: "/images/use-case-grid.jpg",
    alt: "Electrical substation and grid infrastructure",
  },
];

function CardImageFallback({ slug, title }: { slug: string; title: string }) {
  const fallback = FALLBACK_IMAGES[slug.length % FALLBACK_IMAGES.length];

  return (
    <div className="relative aspect-[2320/1476] w-full overflow-hidden">
      <Image
        src={fallback.src}
        alt={fallback.alt ?? title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
    </div>
  );
}

export function BlogPlaceholderImage({ id }: { id: string }) {
  const fallback = FALLBACK_IMAGES[id.length % FALLBACK_IMAGES.length];

  return (
    <div
      aria-hidden="true"
      className="relative aspect-[2320/1476] w-full overflow-hidden rounded-xl"
    >
      <Image
        src={fallback.src}
        alt=""
        fill
        className="object-cover opacity-80 grayscale-[30%]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35)_0%,transparent_55%)]" />
      <div className="absolute bottom-5 left-5 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-[12px] font-medium tracking-[0.02em] text-ink/45">
        Coming soon
      </div>
    </div>
  );
}

export function BlogPostImage({
  post,
  className = "",
  imageClassName = "",
  priority = false,
}: BlogPostImageProps) {
  if (!post.image) {
    return <CardImageFallback slug={post.slug} title={post.title} />;
  }

  return (
    <div className={`relative aspect-[2320/1476] w-full overflow-hidden ${className}`}>
      <Image
        src={post.image}
        alt={post.imageAlt ?? post.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${imageClassName}`}
        priority={priority}
      />
    </div>
  );
}
