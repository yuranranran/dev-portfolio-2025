import { notFound } from "next/navigation";
import Image from "next/image";
import ProjectLayout from "@/app/styles/project-layout";
import { getAllProjects, getProjectBySlug } from "@/lib/projects-api";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <ProjectLayout>
      <article className="prose lg:prose-xl max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.title}
            width={800}
            height={450}
            className="rounded-lg shadow-lg my-6"
          />
        )}
        <p>{project.excerpt}</p>

        {/* Custom Sections */}
        {project.techStack && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <ul className="list-disc ml-5">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {project.videoDemo && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Demo Video</h2>
            <iframe
              src={project.videoDemo}
              className="w-full h-96 rounded-lg shadow-lg"
              allowFullScreen
            />
          </div>
        )}

        {project.gallery && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((image) => (
                <Image key={image} src={image} alt="Gallery Image" width={400} height={225} />
              ))}
            </div>
          </div>
        )}
      </article>
    </ProjectLayout>
  );
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
