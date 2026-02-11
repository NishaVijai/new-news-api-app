// netlify/functions/gnews-proxy.js
// IMPORTANT: Set VITE_NEWS_API_KEY in your Netlify dashboard

let cache = {}; // In-memory cache

export async function handler(event) {
  const { category = "top", lang = "en" } = event.queryStringParameters;
  const apiKey = process.env.VITE_NEWS_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key is missing" }),
    };
  }

  // Valid categories for Newsdata.io free plan
  const validCategories = [
    "top",
    "world",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
    "domestic"
  ];

  // Ensure only valid category is sent; default to 'top'
  const safeCategory = validCategories.includes(category.toLowerCase())
    ? category.toLowerCase()
    : "top";

  const cacheKey = `${safeCategory}_${lang}`;
  const now = Date.now();

  // Serve from cache if less than 10 minutes old
  if (cache[cacheKey] && now - cache[cacheKey].timestamp < 10 * 60 * 1000) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ articles: cache[cacheKey].articles }),
    };
  }

  const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=${lang}&category=${safeCategory}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: `HTTP error! status: ${res.status}` }),
      };
    }

    const data = await res.json();

    const articles = Array.isArray(data.results)
      ? data.results.map((item) => ({
        title: item.title || "No Title",
        description: item.description || "Description not available",
        image:
          item.image_url ||
          "https://via.placeholder.com/300x200?text=No+Image",
        url: item.link || "#",
      }))
      : [];

    // Store in cache
    cache[cacheKey] = {
      articles,
      timestamp: now,
    };

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ articles }),
    };
  } catch (err) {
    console.error("Error in gnews-proxy:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
}

/* eslint-env node */
