export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  readMinutes: number;
  category?: string;
  author?: string;
  image?: string;
  imageAlt?: string;
  sections: BlogSection[];
};

export type PlaceholderPost = {
  comingSoon: true;
  id: string;
  title: string;
  category?: string;
};

export type BlogListItem = BlogPost | PlaceholderPost;

export function isPlaceholderPost(item: BlogListItem): item is PlaceholderPost {
  return "comingSoon" in item && item.comingSoon === true;
}

export function isPublishedPost(item: BlogListItem): item is BlogPost {
  return !isPlaceholderPost(item);
}
