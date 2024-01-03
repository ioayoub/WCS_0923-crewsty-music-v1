import { useLoaderData } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardWrapper from "../components/CardWrapper";

export default function Homepage() {
  const data = useLoaderData();
  const [editor, setEditor] = useState("");

  const articles = data?.articles;
  const carouselArticles = articles?.slice(0, 4);

  const apiSources = [...new Set(articles.map((a) => a.source.name))];

  const handleEditorChange = (e) => {
    setEditor(e.target.value);
  };

  return (
    <div className="w-full bg-neutral-200 dark:bg-neutral-500 text-neutral-800 dark:text-neutral-200">
      {data ? (
        <div>
          <Carousel
            autoPlay
            infiniteLoop
            showArrows
            showStatus={false}
            showThumbs={false}
          >
            {carouselArticles &&
              carouselArticles.map((c) => (
                <div key={c.title} className="h-[40em]">
                  <img src={c.urlToImage} alt={c.title} />
                  <p className="legend">{c.title}</p>
                </div>
              ))}
          </Carousel>
          <h2 className="text-3xl text-center my-16">Derniers articles</h2>
          <div className="text-black flex flex-row justify-center mb-12">
            <select name="filterByEditor" onChange={handleEditorChange}>
              <option value="">Sélectionner un éditeur</option>
              {apiSources &&
                apiSources.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
            </select>
          </div>
          {articles && (
            <CardWrapper
              data={articles.filter((a) => a.source.name.includes(editor))}
            />
          )}
        </div>
      ) : (
        <h2 className="text-center text-3xl">Données indisponibles</h2>
      )}
    </div>
  );
}
