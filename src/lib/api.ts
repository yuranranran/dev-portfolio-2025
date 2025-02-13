import { Blog } from "@/interfaces/blog";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

// blogs api
const blogsDirectory = path.join(process.cwd(), "_blogs");

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string): Blog {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  // Explicitly handle nested properties
  return {
    slug: realSlug,
    title: data.title || "",
    date: data.date || "",
    coverImage: data.coverImage || "",
    author: {
      name: data.author?.name || "",
      picture: data.author?.picture || "",
    },
    excerpt: data.excerpt || "",
    ogImage: {
      url: data.ogImage?.url || "",
    },
    content,
  };
}

export function getAllBlogs(): Blog[] {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((blog) => blog !== null)  // Filter out any null values
    .sort((a, b) => (a.date > b.date ? -1 : 1));  // Sort by date
  console.log("blogs", blogs);
  return blogs;
}


