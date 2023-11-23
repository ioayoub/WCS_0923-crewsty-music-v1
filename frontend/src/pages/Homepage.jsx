import { useLoaderData } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardWrapper from "../components/CardWrapper";

export default function Homepage() {
  const data = useLoaderData();

  const articles = data?.articles;
  const carouselArticles = articles?.slice(0, 4);

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
            {carouselArticles.map((c) => (
              <div key={c.title} className="h-[40em]">
                <img src={c.urlToImage} alt={c.title} className="" />
                <p className="legend">{c.title}</p>
              </div>
            ))}
          </Carousel>
          <h2 className="text-3xl text-center my-16">Derniers articles</h2>
          <CardWrapper data={articles} />
        </div>
      ) : (
        <h2 className="text-center text-3xl">Données indisponibles</h2>
      )}
    </div>
  );
}
