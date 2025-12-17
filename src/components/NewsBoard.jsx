import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';



const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    let url = `/.netlify/functions/gnews-proxy?category=${category}&lang=en&country=us&max=10`;
    const res = await fetch(url);
    const data = await res.json();
    return setArticles(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <section className='container-fluid mb-5 mt-3'>
      <h2 className="text-center text-light fs-3">
        Latest <span className="badge text-bg-danger fs-4">News</span>
      </h2>
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3 text-center">
        {articles ? articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              image={news.image}
              url={news.url}
            />
          );
        }) : <p className="text-warning">Loading...</p>}
      </section>
    </section>
  );
};

export default NewsBoard;

NewsBoard.propTypes = {
  category: PropTypes.string
};