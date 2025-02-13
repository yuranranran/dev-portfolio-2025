export type Project = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  techStack: string[];
  gallery?: string[];
  videoDemo?: string;
  content: string;
  tags: string[];
  layout?: string;
};
