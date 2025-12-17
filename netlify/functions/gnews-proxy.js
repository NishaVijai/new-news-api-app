
// IMPORTANT: Set VITE_NEWS_API_KEY in your Netlify dashboard (Site settings > Environment variables)

exports.handler = async function (event) {
  const { category = '', lang = 'en', country = 'us', max = 10 } = event.queryStringParameters;
  const apiKey = process.env.VITE_NEWS_API_KEY;
  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&max=${max}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
/* eslint-env node */
