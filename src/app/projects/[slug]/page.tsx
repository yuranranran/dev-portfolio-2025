import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getProjectBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function ProjectPage(props: Params) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const content = await markdownToHtml(project.content || "");

  return (
    <main>
      <Container>
        <article className="mb-32">
          <PostHeader
            title={project.title}
            coverImage={project.coverImage}
          />
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Project Overview</h2>
            <p className="mt-4">{project.description}</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <ul className="list-disc list-inside mt-4">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <ul className="list-disc list-inside mt-4">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Links</h2>
            <ul className="mt-4">
              <li>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Project
                </a>
              </li>
              <li>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </section>
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const project = getPostBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const title = `${project.title} | Project Showcase with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [project.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllPosts();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
