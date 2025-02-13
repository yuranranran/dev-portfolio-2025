"use client";  // Add this at the top

import markdownStyles from "@/app/_components/markdown-styles.module.css";

type Props = {
  content: string;
};

export function BlogBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
