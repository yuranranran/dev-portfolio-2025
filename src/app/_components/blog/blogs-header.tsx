import Avatar from "../avatar";
import CoverImage from "../cover-image";
import DateFormatter from "../date-formatter";
import { BlogTitle } from "@/app/_components/blog/blogs-title";
import { type Author } from "@/interfaces/author";
import Header from "../header/header";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function BlogHeader({ title, coverImage, date, author }: Props) {
  return (
    <section className="mb-8 md:mb-16 sm:mx-0">
      <Header></Header>
      <BlogTitle>{title}</BlogTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </ section>
  );
}
