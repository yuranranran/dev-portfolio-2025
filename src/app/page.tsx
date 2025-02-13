import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { AllBlogs } from "@/app/_components/blog/all-blogs";
import { AllProjects } from "@/app/_components/project/all-projects";
import { getAllBlogs } from "@/lib/api";
import { Toolbox } from "@/app/_components/home/toolbox";
import { getAllProjects } from "@/lib/projects-api";
import Title from "@/app/_components/title";
import Link from "next/link";

export default function Index() {
  const allBlogs = getAllBlogs();
  const recentBlogs = allBlogs.slice(0, 3);
  const allProjects = getAllProjects();
  const featureProjects = allProjects.slice(0, 3);

  return (
    <main>
      <Container>
        <Intro />
        <Title title="Proficent in Java, JavaScript."></Title>
        <Toolbox />
        <Title title="Proficent in Java, JavaScript."></Title>
        {featureProjects.length > 0 && (
          <AllProjects projects={featureProjects} />
        )}
        {/* View more/all Case Study Button */}
        <div className="flex justify-center mb-8">
        <Link
          href={`/projects`}
          className="inline-block text-black hover:bg-gray-200 px-6 py-3 rounded-full font-light"
        >
          View More Projects
        </Link>
        </div>
        <Title title="Proficent in Java, JavaScript."></Title>
        {recentBlogs.length > 0 && <AllBlogs blogs={recentBlogs} />}
        {/* View more/all Case Study Button */}
        <div className="flex justify-center mb-16">
        <Link
          href={`/blogs`}
          className="inline-block text-black hover:bg-gray-200 px-6 py-3 rounded-full font-light"
        >
          View More blogs
        </Link>
        </div>
      </Container>
    </main>
  );
}
