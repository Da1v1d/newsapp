import { useState } from "react";

import { Articles } from "components/Articles";
import { ChooseDataSource } from "components/ChooseDataSource";
import { ArticleForm } from "components/Form/ArticleForm";
import { Pagination } from "components/Pagination";

import { NEWS_URL } from "constants/news";

import { useFetchNews } from "hooks/useFetchNews";

import "index.css";

export const ArticlesPage = () => {
  const [dataSource, setDataSource] = useState({
    name: "nytimes",
    queryParams: {
      page: "&page=",
      from: "&begin_date=",
      to: "&end_date=",
    },
  });

  const { data, submit, error, loading, fetchData } = useFetchNews(
    dataSource.name,
    ["from", "to", "search", "author"],
  );

  return (
    <>
      <ChooseDataSource setDataSource={setDataSource} dataSource={dataSource} />
      <ArticleForm onSubmit={submit} />
      <div>
        {loading && "Loading..."}
        {!!error && error.toString().replace("Error: ", "")}
        {data && (
          <>
            <Articles data={data} dataSource={dataSource.name} />{" "}
            <Pagination
              total={NEWS_URL[dataSource.name].meta.total(data)}
              dataSource={dataSource.name}
              fetchData={fetchData}
            />
          </>
        )}
      </div>
    </>
  );
};
