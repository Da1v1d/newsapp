export const changeQueryParam = (queryParams, field, action) => {
  const params = new URLSearchParams(queryParams.toString());
  params.set(field, action);
  const url =
    "&" + queryParams.toString().replace(/(&page=)(\d+)/, `&page=${action}`);
  return { params, url };
};

export const showErrorText = error => error?.message;

export const convertTotalPages = total => {
  let totalPages = Math.floor(total / 10);
  if (total % 10) {
    ++totalPages;
  }
  return totalPages;
};
