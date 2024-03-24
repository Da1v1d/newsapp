export const NYTIMES_API_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`;

export const GUARDIAN_API_URL = `https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`;

export const NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;

export const NEWS_URL = {
  nytimes: {
    url: NYTIMES_API_URL,
    img: require("../assets/icons/nytimes.png"),
    entryData: data => data?.response?.docs,
    dataFields: {
      title: "abstract",
      url: "web_url",
      id: "_id",
      img: null,
      author: null,
      content: "abstract",
    },
    meta: {
      total: data => data?.response?.meta?.hits,
    },
    queryParams: {
      search: "&q=",
      page: "&page=",
      from: "&begin_date=",
      to: "&end_date=",
      author: "&author=",
    },
  },
  guardian: {
    url: GUARDIAN_API_URL,
    img: require("../assets/icons/guardian.png"),
    entryData: data => data?.response?.results,
    dataFields: {
      title: "webTitle",
      url: "webUrl",
      id: "id",
      img: null,
      author: null,
      content: "webTitle",
    },
    meta: {
      total: data => data?.response?.total,
    },
    queryParams: {
      search: "&q=",
      page: "&page=",
      from: "&from-date=",
      to: "&to-date=",
      author: "&author=",
    },
  },
  news: {
    url: NEWS_API_URL,
    img: require("../assets/icons/news.png"),
    entryData: data => data?.articles,
    dataFields: {
      title: "title",
      url: "url",
      id: "id",
      img: "urlToImage",
      author: "author",
      content: "description",
    },
    meta: {
      total: data => data?.totalResults,
    },
    queryParams: {
      search: "&q=",
      page: "&page=",
      from: "&from=",
      to: "&to=",
      author: "&author=",
    },
  },
};
