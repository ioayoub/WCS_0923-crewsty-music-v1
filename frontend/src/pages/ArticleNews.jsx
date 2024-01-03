import { useLoaderData } from "react-router-dom";

export default function ArticleNews() {
  const data = useLoaderData();

  const article = data?.articles[0];
  return (
    <div>
      <h1 className="text-3xl text-center my-16">{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="w-full" />
      <article className="text-md mx-8 my-12">
        <p>{article.content}</p>
        <br />
        <p>{article.description}</p>
      </article>
      <a
        href={article.url}
        className="my-12 p-4 block  text-center w-fit mx-auto bg-black text-white"
        target="_blank"
        rel="noreferrer"
      >
        Lien vers l'article
      </a>
    </div>
  );
}
