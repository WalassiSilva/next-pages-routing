import React from "react";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import Backdrop from "@/app/components/Backdrop";

export default async function InterceptedImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);
  
  if (!newsItem) notFound();

  return (
    <>
      <Backdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
