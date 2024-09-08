/* FETCH ON SERVER */
import NewsList from "@/app/components/NewsList";
import {getAllNews} from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  )
}



/*FETCH ON SEPARETE SERVER */
// import NewsList from "@/app/components/NewsList";

// export default async function NewsPage() {
//   const response = await fetch("http://localhost:8080/news");

//   if (!response.ok) {
//     throw new Error("Failed to fetch news");
//   }

//   const news = await response.json();

//   return (
//     <>
//       <h1>News Page</h1>
//       <NewsList news={news} />
//     </>
//   );
// }


/*FETCH ON CLIENT*/
// "use client";
// // import { DUMMY_NEWS } from "@/dummy-news";
// import React, { useEffect, useState } from "react";
// import NewsList from "../../components/NewsList";

// export default function NewsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     async function fetchNews() {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:8080/news");

//       if (!response.ok) {
//         setError("Failed to fetch news");
//         setIsLoading(false);
//       }

//       const news = await response.json();
//       setIsLoading(false);
//       setNews(news);
//     }

//     fetchNews();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   let newsContent = <p></p>;

//   if (news) {
//     newsContent = <NewsList news={news} />;
//   }

//   return (
//     <>
//       <h1>Page News</h1>

//       {newsContent}
//     </>
//   );
// }
