import { NEWS_URL } from "../constants/url.constants";

export const fetchNews = async (api, query = "&q=developer") => {
  try {
    return await fetch(`${NEWS_URL[api]}${query}`);
  } catch (error) {
    throw error;
  }
};
