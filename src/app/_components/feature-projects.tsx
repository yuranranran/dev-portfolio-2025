"use client";

import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  projects: {
    title: string;
    coverImage: string;
    excerpt: string;
    slug: string;
    tags: string[];
  }[];
};

export function FeatureProjects({ projects }: Props) {
  return (
    <section className="my-28">
      {/* Section Title */}
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        👏🏻 Feature Projects.
      </h2>

      {/* Projects List */}
      <div className="space-y-40 mt-24">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* Cover Image */}
            <div className="md:w-1/2">
              <CoverImage
                title={project.title}
                src={project.coverImage}
                slug={project.slug}
              />
            </div>

            {/* Project Details */}
            <div className="md:w-1/2">
              <h3 className="mb-4 text-4xl font-bold leading-tight">
                <Link href={`/projects/${project.slug}`} className="hover:underline">
                  {project.title}
                </Link>
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed mb-4">{project.excerpt}</p>

              {/* View Case Study Button */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-block bg-black text-white hover:bg-gray-800 px-6 py-3 rounded font-medium"
              >
                View Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
