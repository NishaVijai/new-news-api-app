import noImage from '../assets/no-image-icon.png';
import PropTypes from "prop-types";

const NewsItem = ({ title, description, image, url }) => {
  const NO_DESCRIPTION = 'No description available for this news';

  return (
    <div className="col d-flex">
      <div className="card h-100 bg-dark text-light d-flex flex-column w-100">
        {/* Image */}
        <img
          src={image || noImage}
          className="card-img-top img-fluid news-img"
          alt={title || "news picture"}
          loading="lazy"
          onError={(e) => {
            e.target.src = noImage; // fallback image
          }}
        />

        {/* Body */}
        <div className="card-body flex-grow-1">
          <h3 className="card-title fs-5 pb-2">{title}</h3>
          <p className={`card-text ${!description ? 'text-warning' : ''}`}>
            {description
              ? description.slice(0, 120) + (description.length > 120 ? '...' : '')
              : NO_DESCRIPTION}
          </p>
        </div>

        {/* Footer */}
        <div className="card-footer">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary w-100"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};
