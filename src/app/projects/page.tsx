import { getAllProjects } from "@/lib/projects-api";
import Container from "@/app/_components/container";
import { AllProjects } from "@/app/_components/project/all-projects";
import Header from "../_components/header/header";
import Title from "../_components/title";

export default async function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <main className="my-40">
      <Header></Header>
      <Container>
        <Title title={"All Projects"} />
        <AllProjects projects={allProjects} />
      </Container>
    </main>
  );
}