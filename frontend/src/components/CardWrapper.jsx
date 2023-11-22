import PropTypes from "prop-types";
import NewsCard from "./NewsCard";

export default function CardWrapper({ data }) {
  return (
    <div>
      {data.map((d) => (
        <NewsCard card={d} key={d.title} />
      ))}
    </div>
  );
}

CardWrapper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
