import { Project } from "@/interfaces/project";
import { ProjectPreview } from "./project-preview";

type Props = {
  projects: Project[];
};

export function AllProjects({ projects }: Props) {
  return (
    <section className="my-28">
      <div className="space-y-40 mt-24">
        {projects.map((porject) => (
          <ProjectPreview
            key={porject.slug}
            title={porject.title}
            coverImage={porject.coverImage}
            date={porject.date}
            slug={porject.slug}
            excerpt={porject.excerpt}
            tags={porject.tags}
          />
        ))}
      </div>
    </section>
  );
}
