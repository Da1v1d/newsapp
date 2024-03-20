const hasQueryParams = (url) => {
  return url.includes("?") ? "&" : "?";
};

const convertResource = (resource, apiKey) => {
  return `${hasQueryParams(resource)}${apiKey}`;
};

export const addApiKey = (resource) => {
  if (resource.includes("nytimes")) {
    const apiKey = new URLSearchParams({
      "api-key": process.env.REACT_APP_NYTIMES_API_KEY,
    });

    return convertResource(resource, apiKey);
  } else if (resource.includes("newsapi")) {
    const apiKey = new URLSearchParams({
      apiKey: process.env.REACT_APP_NEWSAPI_API_KEY,
    });

    return convertResource(resource, apiKey);
  } else if (resource.includes("guardianapis")) {
    const apiKey = new URLSearchParams({
      "api-key": process.env.REACT_APP_GUARDIAN_API_KEY,
    });

    return convertResource(resource, apiKey);
  }
};
