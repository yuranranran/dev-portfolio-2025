export function Toolbox() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: 80, progress: "Advanced" },
        { name: "Python", level: 65, progress: "Intermediate" },
        { name: "Java", level: 50, progress: "Learning" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", level: 75, progress: "Intermediate" },
        { name: "Next.js", level: 60, progress: "Learning" },
        { name: "Tailwind CSS", level: 80, progress: "Advanced" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: 70, progress: "Intermediate" },
        { name: "MongoDB", level: 40, progress: "Learning" },
      ],
    },
  ];

  return (
    <section className="my-40">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        ⚒️ Tools.
      </h2>
      <div className="space-y-8">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category}>
            <h3 className="text-2xl font-semibold mb-4">
              {skillCategory.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skillCategory.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center space-y-2"
                >
                  <h4 className="text-lg font-medium">{skill.name}</h4>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <div
                      className={`bg-slate-600 h-4 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">{skill.progress}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
