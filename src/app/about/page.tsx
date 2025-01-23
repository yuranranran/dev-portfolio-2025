import Container from "@/app/_components/container";

export default function AboutPage() {
  return (
    <main className="my-40">
      <Container>
        <section className="py-16">
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            About Me.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Hi, I’m [Your Name]! I’m a [Your Profession] with a passion for
            building innovative projects and solving challenging problems. My
            expertise lies in [your expertise/skills].
          </p>
          <p className="text-lg text-gray-700 mb-6">
            I’ve worked on various projects, including [brief mention of a key
            project or two], and I’m constantly looking to grow my skills in
            [specific field/technology].
          </p>
          <p className="text-lg text-gray-700">
            Outside of work, I enjoy [your hobbies/interests]. Feel free to
            connect with me on [social media or contact method]!
          </p>
        </section>
      </Container>
    </main>
  );
}
