import { NEWS_URL } from "constants/news";

export const fetchNews = async (api, query) => {
  return await fetch(`${NEWS_URL[api].url}${query}`);
};
