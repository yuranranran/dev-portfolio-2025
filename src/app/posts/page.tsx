import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import { AllBlogs } from "@/app/_components/all-blogs";

export default async function PostsPage() {
  const posts = getAllPosts(); // Fetch all post metadata

  return (
    <main className="my-40">
      <Container>
        <AllBlogs title="🎙️ All Blogs." posts={posts} />
      </Container>
    </main>
  );
}
