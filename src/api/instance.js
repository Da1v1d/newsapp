import { controller } from "./abortController";

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  let [resource, options] = args;
  const response = await originalFetch(resource, {
    signal: controller.signal,
    ...options,
  });
  const data = response.json();
  return data;
};
