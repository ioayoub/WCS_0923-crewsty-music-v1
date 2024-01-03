import PropTypes from "prop-types";
import NewsCard from "./NewsCard";

export default function CardWrapper({ data }) {
  return (
    <div className="mx-8 flex flex-row flex-wrap gap-8 justify-center">
      {data.map((d) => (
        <NewsCard card={d} key={d.title} />
      ))}
    </div>
  );
}

CardWrapper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
