import { useLoaderData } from "react-router-dom";

export default function ArticleNews() {
  const data = useLoaderData();

  const article = data?.articles[0];

  return (
    <div className="">
      <h1 className="text-4xl text-center my-16">{article.title}</h1>
    </div>
  );
}
