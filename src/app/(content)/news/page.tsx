import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";
import NewsList from "../../components/NewsList";

export default function NewsPage() {
  return (
    <>
      <h1>Page News</h1>

      <NewsList news={DUMMY_NEWS} />
      
    </>
  );
}
