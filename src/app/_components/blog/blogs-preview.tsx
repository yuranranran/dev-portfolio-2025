import Link from "next/link";
import CoverImage from "../cover-image";
import DateFormatter from "../date-formatter";

type BlogPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  excerpt: string;
};

export function BlogPreview({ title, coverImage, date, slug, excerpt }: BlogPreviewProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blogs/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
