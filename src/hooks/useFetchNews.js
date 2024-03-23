import { useFetch } from "./useFetch";
import { useForm } from "./useForm";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchNews } from "api";

export const useFetchNews = (dataSource, fields = []) => {
  const { createQueryParams } = useForm(dataSource, fields);
  const { data, fetchData, error, loading } = useFetch();
  const [, setSearchParams] = useSearchParams();
  useEffect(() => {
    // clear query params after refresh
    return () => setSearchParams("");
  }, []); // eslint-disable-line

  const submit = async e => {
    const urlQueryParams = createQueryParams(e);
    setSearchParams(urlQueryParams);
    await fetchData(() => fetchNews(dataSource, urlQueryParams));
  };

  return { data, submit, error, loading, fetchData };
};
