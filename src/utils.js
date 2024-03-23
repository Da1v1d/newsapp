export const changeQueryParam = (queryParams, field, action) => {
  const params = new URLSearchParams(queryParams.toString());
  params.set(field, action);
  const url =
    "&" + queryParams.toString().replace(/(&page=)(\d+)/, `&page=${action}`);
  return { params, url };
};
