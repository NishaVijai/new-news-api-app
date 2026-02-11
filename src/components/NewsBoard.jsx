import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category = "top" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ensure only valid categories are sent to the proxy
  const validCategories = [
    "top",
    "world",
    "domestic",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  const safeCategory = validCategories.includes(category.toLowerCase())
    ? category.toLowerCase()
    : "top";

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `/.netlify/functions/gnews-proxy?category=${safeCategory}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data && Array.isArray(data.articles) && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        setArticles([]);
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to load news. Please try again later.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [safeCategory]);

  return (
    <main className="news-container mx-auto mb-5 mt-3">
      <h2 className="text-center text-light fs-3 mb-4">
        Latest <span className="badge fs-4 background-pleasant-green">News</span>
      </h2>

      {loading && <p className="text-warning text-center">Loading...</p>}
      {!loading && error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && articles.length === 0 && (
        <p className="text-warning text-center">No news available.</p>
      )}

      {!loading && !error && articles.length > 0 && (
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              image={news.image}
              url={news.url}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default NewsBoard;

NewsBoard.propTypes = {
  category: PropTypes.string,
};
