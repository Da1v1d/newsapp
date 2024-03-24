import { NEWS_URL } from "constants/news";

export const fetchNews = async (api, query = "&q=developer") => {
  return await fetch(`${NEWS_URL[api].url}${query}`);
};
