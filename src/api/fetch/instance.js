const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  let [resource, options] = args;
  const response = await originalFetch(resource, options);
  const data = response.json();
  return data;
};
