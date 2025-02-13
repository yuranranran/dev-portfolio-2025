import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// projects api
const projectsDirectory = join(process.cwd(), "_projects");

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
};

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Project;
};

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return projects;
};