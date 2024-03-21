export const NYTIMES_API_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`;

export const GUARDIAN_API_URL = `https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`;

export const NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;

export const NEWS_URL = {
  nytimes: NYTIMES_API_URL,
  guardian: GUARDIAN_API_URL,
  news: NEWS_API_URL,
};
