import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { BlogHeader } from "@/app/_components/blog/blogs-header";
import { BlogBody } from "@/app/_components/blog/blogs-body";

export default async function Blog({ params }: Params) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <main>
      <Container>
        <article className="my-40">
          <BlogHeader
            title={blog.title}
            coverImage={blog.coverImage}
            date={blog.date}
            author={blog.author}
          />
          <BlogBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const blog = getAllBlogs().find((b) => b.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  const title = `${blog.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [blog.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs(); // Ensure getAllBlogs() is async

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
