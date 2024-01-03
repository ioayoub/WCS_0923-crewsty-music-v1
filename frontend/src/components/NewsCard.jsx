import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NewsCard({ card }) {
  // replace [] characters in title
  const formattedCardTitle = card.title.replace(
    /\[|\]êëīïōūàâäéèìíòóôöùûü/g,
    ""
  );
  return (
    <NavLink
      to={`/news/${formattedCardTitle}`}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black dark:bg-neutral-600 dark:text-gray-300 flex flex-col justify-between"
    >
      <img
        className="w-full h-48 object-cover"
        src={card.urlToImage || "https://picsum.photos/200/200"}
        alt={`img ${card.title}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl my-4">{card.title}</div>
        <p className="text-base h-30 break-words">{card.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {card.source.name}
        </span>
      </div>
    </NavLink>
  );
}

NewsCard.propTypes = {
  card: PropTypes.shape.isRequired,
};
