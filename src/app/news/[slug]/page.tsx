import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { slug: string };
};
export default function NewsDetailsPage({ params }: Props) {
  const slug = params.slug;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  if (!newsItem) notFound();

  return (
    <article className="news-article">
      <header>
        <Image width={250} height={150} src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>

      <p>{newsItem.content}</p>
    </article>
  );
}
