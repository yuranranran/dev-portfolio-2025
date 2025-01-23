import Container from "@/app/_components/container";
import { FeatureProjects } from "@/app/_components/feature-projects";
import { Intro } from "@/app/_components/intro";
import { AllBlogs } from "@/app/_components/all-blogs";
import { getAllPosts } from "@/lib/api";
import { Toolbox } from "@/app/_components/toolbox";

const projects = [
  {
    title: "Extra Card - Learn Tab",
    coverImage: "/images/project1.jpg",
    excerpt:
      '"Debit that builds credit" - Design exploration on a customized microlearning experience for personal finance.',
    slug: "extra-card-learn-tab",
    tags: ["UX Design", "React", "Microlearning"],
  },
  {
    title: "Video+ - Twitch Recommendation App",
    coverImage: "/images/project2.jpg",
    excerpt:
      "A full-stack web app for discovering Twitch videos, powered by React and Java.",
    slug: "video-plus-twitch-app",
    tags: ["Java", "React", "MySQL"],
  },
  {
    title: "Personal Finance Tracker",
    coverImage: "/images/project3.jpg",
    excerpt:
      "A React Native app for tracking and visualizing personal finances in real-time.",
    slug: "personal-finance-tracker",
    tags: ["React Native", "Finance", "Visualization"],
  },
];


export default function Index() {
  const allPosts = getAllPosts();

  const morePosts = allPosts.slice(0, 3);

  return (
    <main >
      <Container>
        <Intro />
        <Toolbox />
        <FeatureProjects projects={projects} />
        {morePosts.length > 0 && <AllBlogs title="🎙️ Recent Blogs." posts={morePosts} />}
      </Container>
    </main>
  );
}
