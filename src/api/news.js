import {
  GUARDIAN_API_URL,
  NEWS_API_URL,
  NYTIMES_API_URL,
} from "../constants/url.constants";

export const fetchNYTArticles = async (query) => {
  try {
    const response = await fetch(NYTIMES_API_URL);
    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchGuardianArticles = async (query) => {
  try {
    const response = await fetch(GUARDIAN_API_URL + query);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchNewsArticles = async (query) => {
  try {
    const response = await fetch(NEWS_API_URL + query);
    return response;
  } catch (error) {
    throw error;
  }
};
