import { Blog } from "@/interfaces/blog";
import { BlogPreview } from "./blogs-preview";

type Props = {
  blogs: Blog[];
};

export function AllBlogs({ blogs }: Props) {
  console.log("this is all blogs");
  console.log("blogs", blogs);
  return (
    <section className="my-28">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {blogs?.length ? (
          blogs.map((blog) => (
            <BlogPreview
              key={blog.slug}
              title={blog.title}
              coverImage={blog.coverImage}
              date={blog.date}
              slug={blog.slug}
              excerpt={blog.excerpt}
            />
          ))
        ) : (
          <p>No blogs found. Error occur. {JSON.stringify(blogs)}</p>
        )}
      </div>
    </section>
  );
}
