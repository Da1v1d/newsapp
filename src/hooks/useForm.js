import { NEWS_URL } from "constants/news";

export const useForm = (dataSource, fields) => {
  const createQueryParams = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const urlQueryParams = fields.reduce((string, field) => {
      let fieldData = formData.get(field);

      if (fieldData) {
        if (dataSource === "nytimes" && (field === "from" || field === "to")) {
          fieldData = fieldData?.replaceAll("-", "");
        }
        return (
          string + `${NEWS_URL[dataSource].queryParams[field]}${fieldData}`
        );
      } else return string;
    }, "");

    // return query params with default page=1 and pageSize=10
    return `${urlQueryParams}&page=1&pageSize=10`;
  };

  return { createQueryParams };
};
