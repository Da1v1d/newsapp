import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchNews } from "api";

import { createQueryParams } from "utils";

import { useFetch } from "./useFetch";

export const useFetchNews = (dataSource, fields = []) => {
  const { data, fetchData, error, loading, setData } = useFetch();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    // clear query params after refresh
    return () => setSearchParams("");
  }, []); // eslint-disable-line

  const submit = async e => {
    const urlQueryParams = createQueryParams(e, dataSource, fields);
    setSearchParams(urlQueryParams);
    await fetchData(() => fetchNews(dataSource, urlQueryParams));
  };

  return { data, submit, error, loading, fetchData, setData };
};
