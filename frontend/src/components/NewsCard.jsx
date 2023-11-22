import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NewsCard({ card }) {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <NavLink
              to={`/news/${card.title}`}
              className="text-gray-900 font-bold text-xl mb-2"
            >
              {card.title}
            </NavLink>
            <p className="text-gray-700 text-base">{card.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  card: PropTypes.shape.isRequired,
};
