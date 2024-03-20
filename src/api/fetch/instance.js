import { addApiKey } from "../utils";

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  let [resource, options] = args;
  resource += addApiKey(resource);
  console.log(resource);
  const response = await originalFetch(resource, options);
  const data = response.json();
  return data;
};
