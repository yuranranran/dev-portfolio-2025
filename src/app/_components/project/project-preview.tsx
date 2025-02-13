import Link from "next/link";
import CoverImage from "../cover-image";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  tags: string[];
};

export function ProjectPreview({
  title,
  coverImage,
  excerpt,
  slug,
  tags
}: Props) {
  
  console.log("Rendering BlogPreview:", title);

  return (
    <div
    key={slug}
    className="flex flex-col md:flex-row items-center justify-between gap-8"
  >
    {/* Cover Image */}
    <div className="md:w-1/2">
      <CoverImage
        title={title}
        src={coverImage}
        slug={slug}
      />
    </div>

    {/* Project Details */}
    <div className="md:w-1/2">
      <h3 className="mb-4 text-4xl font-bold leading-tight">
        <Link href={`/projects/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>

      {/* View Case Study Button */}
      <Link
        href={`/projects/${slug}`}
        className="inline-block bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full font-medium"
      >
        View Case Study
      </Link>
    </div>
  </div>
  );
}
