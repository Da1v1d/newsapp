import { controller } from "./controller";

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  let [resource, options] = args;
  try {
    const response = await originalFetch(resource, {
      signal: controller.signal,
      ...options,
    });
    if (!response.ok) {
      throw Error("Something went wrong");
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
