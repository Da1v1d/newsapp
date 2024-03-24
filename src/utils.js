import { NEWS_URL } from "constants/news";

export const createQueryParams = (e, dataSource, fields) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const urlQueryParams = fields.reduce((string, field) => {
    let fieldData = formData.get(field);

    if (fieldData) {
      if (dataSource === "nytimes" && (field === "from" || field === "to")) {
        fieldData = fieldData?.replaceAll("-", "");
      }
      return string + `${NEWS_URL[dataSource].queryParams[field]}${fieldData}`;
    } else return string;
  }, "");

  // return query params with default page=1 and pageSize=10
  return `${urlQueryParams}&page=1&pageSize=10`;
};

export const changeQueryParam = (queryParams, field, action) => {
  const params = new URLSearchParams(queryParams.toString());
  params.set(field, action);

  // TODO CHANGE /(&page=)(\d+)/ REGEX INTO DINAMIC REGEX
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
