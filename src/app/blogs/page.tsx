import { getAllBlogs } from "@/lib/api";
import Container from "@/app/_components/container";
import { AllBlogs } from "@/app/_components/blog/all-blogs";
import Header from "../_components/header/header";

export default async function BlogsPage() {
  const posts = getAllBlogs(); // Fetch all post metadata

  return (
    <main className="my-40">
      <Header></Header>
      <Container>
        <AllBlogs blogs={posts} />
      </Container>
    </main>
  );
}
