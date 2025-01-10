export function TechStack() {
  const techStack = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
    { name: "Material UI", logo: "/logos/materialui.svg" },
  ];

  return (
    <section className="my-12">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        ⚒️ Tools.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-lg font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
