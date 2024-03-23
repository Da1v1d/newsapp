import { NEWS_URL } from "constants/news";

export const useForm = (api, fields) => {
  const createQueryParams = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const urlQueryParams = fields.reduce((string, field) => {
      const fieldData = formData.get(field);
      if (fieldData) {
        return string + `${NEWS_URL[api].queryParams[field]}${fieldData}`;
      } else return string;
    }, "");

    // return query params with default page=1 and pageSize=10
    return `${urlQueryParams}&page=1&pageSize=10`;
  };

  return { createQueryParams };
};
