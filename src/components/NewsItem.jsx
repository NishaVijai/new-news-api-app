import noImage from '../assets/no-image-icon.png';
import PropTypes from "prop-types";

const NewsItem = ({ title, description, image, url }) => {
  const NO_DESCRIPTION = 'No description available for this news';

  return (
    <section className="col">
      <section className="card bg-dark text-light mb-3 d-flex m-3 p-2" style={{ maxWidth: '90%', height: '100%' }}>
        <section className="card">
          <img src={image ? image : noImage} className="card-img-top" style={{ height: '100%', width: '100%' }} alt="news picture" loading="lazy" />
        </section>
        <section className="card-body">
          <h3 className="card-title fs-5 pb-4">{title}</h3>
          <p className={`card-text ${!description ? 'text-warning' : ''}`}>{description ? description.slice(0, 120) : NO_DESCRIPTION}</p>
        </section>
        <section className="card-footer">
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary" data-title="External news link will open on a new tab">
            Read More
          </a>
        </section>
      </section>
    </section>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string
};